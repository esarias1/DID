import { Header, Footer, Guitar } from "./components/";

import { useState } from "react";
import { db } from "./data/db";
import { useCart }  from "./hooks/useCart.jsx"

export default function App() {
  const [guitars] = useState(db);
  const { cart, addToCart, emptyCart, delItemCart, updateQuantity}=useCart();

  return (
    <>
      <Header
        cart={cart}
        emptyCart={emptyCart}
        delItemCart={delItemCart}
        updateQuantity={updateQuantity}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {guitars.map((guitar) => {
            return (
              <Guitar key={guitar.id} guitar={guitar} addToCart={addToCart} />
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
