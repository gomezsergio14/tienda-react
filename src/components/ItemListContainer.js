import Item from "./Item";

function ItemListContainer(props){
    /*AQUI TENES QUE CREAR TU LISTA DE PRODUCTOS
    USA MOCKAROO O ALGO DE ESO */
    
        /*AQUI METE EL JSON CON LOS PRODUCTOS */
    const misProductos=[{
            "id": 1,
            "title": "Calv",
            "detail": "nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien",
            "imgurl": "http://dummyimage.com/100x100.png/ff4444/ffffff"
          }, {
            "id": 2,
            "title": "Freddie",
            "detail": "justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper",
            "imgurl": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
          }, {
            "id": 3,
            "title": "Janenna",
            "detail": "vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien",
            "imgurl": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
          }, {
            "id": 4,
            "title": "Jere",
            "detail": "platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida",
            "imgurl": "http://dummyimage.com/100x100.png/dddddd/000000"
          }, {
            "id": 5,
            "title": "Germayne",
            "detail": "nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu",
            "imgurl": "http://dummyimage.com/100x100.png/dddddd/000000"
          }, {
            "id": 6,
            "title": "Stephi",
            "detail": "platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur",
            "imgurl": "http://dummyimage.com/100x100.png/ff4444/ffffff"
          }, {
            "id": 7,
            "title": "Dallis",
            "detail": "mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean",
            "imgurl": "http://dummyimage.com/100x100.png/cc0000/ffffff"
          }, {
            "id": 8,
            "title": "Dita",
            "detail": "quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis",
            "imgurl": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
          }, {
            "id": 9,
            "title": "Oliver",
            "detail": "vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo",
            "imgurl": "http://dummyimage.com/100x100.png/ff4444/ffffff"
          }, {
            "id": 10,
            "title": "Yalonda",
            "detail": "odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui",
            "imgurl": "http://dummyimage.com/100x100.png/ff4444/ffffff"
          },];
          
    
    
    
    const miColor={
        color: "#500ccf",
    };
    return(
    <>
        <h1 style={miColor}>{props.text}</h1>
        <div className="d-flex">
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        </div>
    </>    
    )
}
export default ItemListContainer;