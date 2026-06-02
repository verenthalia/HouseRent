import React from 'react';

const StockCard = ({ stock }) => {

  return (

    <div className="card p-3 shadow-sm">

      <h4>{stock.stockName}</h4>

      <p>Quantity: {stock.quantity}</p>

      <p>Price: Rp {stock.price}</p>

      <button className="btn btn-primary">
        Buy
      </button>

    </div>

  );
};

export default StockCard;