function ItemListContainer(props){
    const miColor={
        color: "#500ccf",
    };
    return(
        <h1 style={miColor}>{props.text}</h1>
    )
}
export default ItemListContainer;