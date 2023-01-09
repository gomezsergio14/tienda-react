const ObtenerProductos=()=>{
    return new Promise((resolve,reject)=>{
        console.log("conectando al backend...");
        let error=false;
        setTimeout(()=>{
            if(error) reject("usuario no autorizado");
            else resolve();
        },3000);
    });
};
export default ObtenerProductos;