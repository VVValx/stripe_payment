import React, { useState } from 'react';
import shoe from '../../assets/shoe.png';
import shoe2 from '../../assets/shoe2.png';
import home from './home.module.css';

function Home() {
  const [products] = useState([
    {
      name: 'Nike shoe',
      image: shoe,
      price: 20,
    },
    {
      name: 'Blue shoe',
      image: shoe2,
      price: 25,
    },
  ]);
  return (
    <div className={home.container}>
      <div className={home.grid}>
        {products.map((product, index) => (
          <div className={home.item} key={index}>
            <img src={product.image} alt={product.name} />

            <div className={home.buy}>
              <button className={`${home.btn} ${home.buyBtn}`}>Purchase</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
