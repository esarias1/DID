import { useEffect, useState } from "react";

const initialData = JSON.parse(localStorage.getItem("cart") ?? "[]");

export const useCart = () => {
  const [cart, setCart] = useState(initialData);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (guitar) => {
    cart.some((item) => item.id === guitar.id)
      ? setCart(
          cart.map((item) =>
            item.id === guitar.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          )
        )
      : setCart([...cart, { ...guitar, quantity: 1 }]);
  };

  const emptyCart = () => setCart([]);

  const delItemCart = (id) => {
    setCart(
      cart.filter((item) => {
        if (item.id !== id) return true;
        return false;
      })
    );
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? item.quantity + delta >= 1
              ? { ...item, quantity: item.quantity + delta }
              : null
            : item
        )
        .filter((item) => item !== null)
    );
  };

  /* const updateQuantity = (id, delta) => {
        setCart(prev =>
        prev
        .map(item => {
            if(item.id === id) {
            const cantidad = item.quantity+delta;
            if(cantidad >= 1){
                return { ...item, quantity: cantidad}
            }
            return null;
            }
            return item;
        })
        .filter(item => item !== null)
        );
    };*/

  return {
    cart,
    addToCart,
    emptyCart,
    delItemCart,
    updateQuantity,
  };
};
