const addToDB = (id) => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('shopping-cart');

    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = shoppingCart[id];
        shoppingCart[id] = newQuantity + 1;
    } else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
}


export {addToDB}