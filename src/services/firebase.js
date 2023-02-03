import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, query, where} from "firebase/firestore";

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
export default db