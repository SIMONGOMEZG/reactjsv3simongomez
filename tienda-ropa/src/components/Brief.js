import React from 'react';

const Brief = ({ items }) => {
  const total = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className="mb-3">
          <h5>{item.name}</h5>
          <p>Cantidad: {item.quantity}</p>
          <p>Subtotal: ${item.quantity * item.price}</p>
        </div>
      ))}
      <h4 className="mt-4">Total: ${total}</h4>
    </div>
  );
};

export default Brief;
