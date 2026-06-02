import React, { useEffect, useState } from 'react';

import API from '../services/api';

import StockCard from '../components/StockCard';

const Stocks = () => {

  const [stocks, setStocks] = useState([]);

  useEffect(() => {

    fetchStocks();

  }, []);

  const fetchStocks = async () => {

    try {

      const res = await API.get('/stocks');

      setStocks(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="container mt-4">

      <h1 className="mb-4">Stocks</h1>

      <div className="row">

        {
          stocks.map((stock) => (

            <div className="col-md-4 mb-4" key={stock._id}>

              <StockCard stock={stock} />

            </div>

          ))
        }

      </div>

    </div>

  );
};

export default Stocks;