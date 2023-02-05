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

const ObtenerProductos=()=>{
    return new Promise((resolve,reject)=>{
        console.log("conectando al backend...");
        let error=false;
        setTimeout(()=>{
            if(error) reject("usuario no autorizado");
            else resolve(misProductos);
        },3000);
    });
};

const ObtenerProducto=(id)=>{
  return new Promise((resolve,reject)=>{
      const reqItem = misProductos.find( (item) => {return ( item.id === Number(id) ) } )
      
      setTimeout(()=>{  
          resolve(reqItem);
      },3000);
  });
};

const ObtenerProductoPorCategoria=(detail)=>{
  return new Promise((resolve,reject)=>{
      let reqItems = misProductos.filter( item => item.detail=== detail)
      setTimeout(()=>{
        resolve(reqItems);
      },3000);
  });
};

export default ObtenerProductos;
export { ObtenerProducto , ObtenerProductoPorCategoria };