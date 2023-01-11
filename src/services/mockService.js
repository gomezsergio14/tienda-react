const misProductos=[{
    "id": 1,
    "title": "Murielle",
    "detail": "impresora",
    "imgurl": "http://dummyimage.com/300x300.png/5fa2dd/ffffff"
  }, {
    "id": 2,
    "title": "Sinclare",
    "detail": "filamentos",
    "imgurl": "http://dummyimage.com/300x300.png/dddddd/000000"
  }, {
    "id": 3,
    "title": "Delcine",
    "detail": "filamentos",
    "imgurl": "http://dummyimage.com/300x300.png/cc0000/ffffff"
  }, {
    "id": 4,
    "title": "Hill",
    "detail": "repuestos",
    "imgurl": "http://dummyimage.com/300x300.png/ff4444/ffffff"
  }, {
    "id": 5,
    "title": "Phylys",
    "detail": "impresora",
    "imgurl": "http://dummyimage.com/300x300.png/dddddd/000000"
  }, {
    "id": 6,
    "title": "Lissy",
    "detail": "repuestos",
    "imgurl": "http://dummyimage.com/300x300.png/dddddd/000000"
  }, {
    "id": 7,
    "title": "Irving",
    "detail": "impresora",
    "imgurl": "http://dummyimage.com/300x300.png/cc0000/ffffff"
  }, {
    "id": 8,
    "title": "Alwyn",
    "detail": "filamentos",
    "imgurl": "http://dummyimage.com/300x300.png/cc0000/ffffff"
  }, {
    "id": 9,
    "title": "Maire",
    "detail": "repuestos",
    "imgurl": "http://dummyimage.com/300x300.png/ff4444/ffffff"
  }, {
    "id": 10,
    "title": "Roberto",
    "detail": "repuestos",
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