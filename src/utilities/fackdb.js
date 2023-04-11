 
const addToDb = (id) => {
    const stored_cart = getStoredCart();
    if (id in stored_cart) {
        stored_cart[id] = stored_cart[id] + 1;
    } else {
        stored_cart[id] = 1;
    }
    updateDb(stored_cart);
};
const removeFromDb = (id) => {
    const storedcart = getStoredCart();
    delete storedcart[id];
    updateDb(storedcart);
};
const updateDb = (cart) => {
    localStorage.setItem("shopping_cart", JSON.stringify(cart));
};
const clearTheCart = () => {
    localStorage.removeItem("shopping_cart");
};
const getStoredCart = () => {
    const exists = localStorage.getItem("shopping_cart");
    return exists ? JSON.parse(exists) : {};
};
export { addToDb, getStoredCart, removeFromDb, clearTheCart };
 