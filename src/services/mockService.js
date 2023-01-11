const misProductos=[{
    "id": 1,
    "title": "Murielle",
    "detail": "at turpis donec posuere metus vitae",
    "imgurl": "http://dummyimage.com/300x300.png/5fa2dd/ffffff"
  }, {
    "id": 2,
    "title": "Sinclare",
    "detail": "dapibus at diam nam tristique",
    "imgurl": "http://dummyimage.com/300x300.png/dddddd/000000"
  }, {
    "id": 3,
    "title": "Delcine",
    "detail": "maecenas tristique est et tempus semper",
    "imgurl": "http://dummyimage.com/300x300.png/cc0000/ffffff"
  }, {
    "id": 4,
    "title": "Hill",
    "detail": "enim lorem ipsum dolor sit amet",
    "imgurl": "http://dummyimage.com/300x300.png/ff4444/ffffff"
  }, {
    "id": 5,
    "title": "Phylys",
    "detail": "in magna bibendum imperdiet nullam",
    "imgurl": "http://dummyimage.com/300x300.png/dddddd/000000"
  }, {
    "id": 6,
    "title": "Lissy",
    "detail": "et eros vestibulum ac est lacinia",
    "imgurl": "http://dummyimage.com/300x300.png/dddddd/000000"
  }, {
    "id": 7,
    "title": "Irving",
    "detail": "vitae quam suspendisse potenti nullam",
    "imgurl": "http://dummyimage.com/300x300.png/cc0000/ffffff"
  }, {
    "id": 8,
    "title": "Alwyn",
    "detail": "ut dolor morbi vel lectus in",
    "imgurl": "http://dummyimage.com/300x300.png/cc0000/ffffff"
  }, {
    "id": 9,
    "title": "Maire",
    "detail": "ornare consequat lectus in est",
    "imgurl": "http://dummyimage.com/300x300.png/ff4444/ffffff"
  }, {
    "id": 10,
    "title": "Roberto",
    "detail": "cursus vestibulum proin eu mi nulla",
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

export default ObtenerProductos;
export { ObtenerProducto };