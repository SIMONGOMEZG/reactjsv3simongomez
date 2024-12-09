import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Brief from './Brief';

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    alert('¡Gracias por tu compra!');
    clearCart();
  };

  if (cartItems.length === 0) {
    return <p className="text-center mt-4">Tu carrito está vacío.</p>;
  }

  return (
    <div className="container mt-4">
      <h2>Resumen de Compra</h2>
      <Brief items={cartItems} />
      <button className="btn btn-success mt-4" onClick={handleCheckout}>
        Confirmar Compra
      </button>
    </div>
  );
};

export default Checkout;
