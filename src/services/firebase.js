import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, query, where, addDoc} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCNrKH8n4Ib0OVB6uLRDOQIalKjJuSqRq4",
    authDomain: "tienda-react-sdg.firebaseapp.com",
    projectId: "tienda-react-sdg",
    storageBucket: "tienda-react-sdg.appspot.com",
    messagingSenderId: "485734039185",
    appId: "1:485734039185:web:4aefe167b64da832b18930"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ObtenerProductos(){
    const productsRef = collection(db,"products");
    const snapshot = await getDocs(productsRef); 
    const products = snapshot.docs.map(elem => {
        let producto = elem.data();
        producto.id = elem.id;
        return producto;
    });
    return products;
}
export async function ObtenerProducto(idParams){
    const productsRef = collection(db,"products");
    const docRef = doc(productsRef, idParams);
    const snapshot = await getDoc(docRef);
    return {...snapshot.data(), id: snapshot.id};
}
export async function ObtenerProductoPorCategoria(nombreCategoria){
    const productsRef = collection(db,"products");
    const q = query(productsRef,where("detail","==",nombreCategoria));
    const snapshot = await getDocs(q);
    const products = snapshot.docs.map(elem => {
        let producto = elem.data();
        producto.id = elem.id;
        return producto;
    });
    return products;
}
export async function CreateOrder(order){
    const orderRef=collection(db,"order");
    addDoc(orderRef,order).then(respuesta=>{
        
        return respuesta.id;
    });
}

export async function exportArray(){
    const misProductos=[{
        "id": 1,
        "title": "Murielle",
        "detail": "impresora",
        "price": 120000,
        "stock": 23,
        "imgurl": "http://dummyimage.com/300x300.png/5fa2dd/ffffff"
      }, {
        "id": 2,
        "title": "Sinclare",
        "detail": "filamentos",
        "price": 2000,
        "stock": 40,
        "imgurl": "http://dummyimage.com/300x300.png/dddddd/000000"
      }, {
        "id": 3,
        "title": "Delcine",
        "detail": "filamentos",
        "price": 2000,
        "stock": 30,
        "imgurl": "http://dummyimage.com/300x300.png/cc0000/ffffff"
      }, {
        "id": 4,
        "title": "Hill",
        "detail": "repuestos",
        "price": 600,
        "stock": 20,
        "imgurl": "http://dummyimage.com/300x300.png/ff4444/ffffff"
      }, {
        "id": 5,
        "title": "Phylys",
        "detail": "impresora",
        "price": 82000,
        "stock": 10,
        "imgurl": "http://dummyimage.com/300x300.png/dddddd/000000"
      }, {
        "id": 6,
        "title": "Lissy",
        "detail": "repuestos",
        "price": 8000,
        "stock": 30,
        "imgurl": "http://dummyimage.com/300x300.png/dddddd/000000"
      }, {
        "id": 7,
        "title": "Irving",
        "detail": "impresora",
        "price": 92000,
        "stock": 20,
        "imgurl": "http://dummyimage.com/300x300.png/cc0000/ffffff"
      }, {
        "id": 8,
        "title": "Alwyn",
        "detail": "filamentos",
        "price": 2000,
        "stock": 40,
        "imgurl": "http://dummyimage.com/300x300.png/cc0000/ffffff"
      }, {
        "id": 9,
        "title": "Maire",
        "detail": "repuestos",
        "price": 800,
        "stock": 10,
        "imgurl": "http://dummyimage.com/300x300.png/ff4444/ffffff"
      }, {
        "id": 10,
        "title": "Roberto",
        "detail": "repuestos",
        "price": 1500,
        "stock": 14,
        "imgurl": "http://dummyimage.com/300x300.png/dddddd/000000"
        }];
        for (let item of misProductos){
            delete(item.id);
            addDoc(collection(db,"products"), item).then(respuesta=>
                console.log("Item creado", respuesta.id)); 
        }
}

export default db