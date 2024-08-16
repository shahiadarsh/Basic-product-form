import React, { useState } from 'react';

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {
  
  //Initialy the value of title is equal to props.title before setTitle call and after setTitle call it will change
  const [title,setTitle] = useState(props.title);

  function clickHandler(){
    setTitle("Popcorn");
    console.log("clicked button");
  }

  return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        <h2>{title}</h2>
      </div>

      <button onClick={clickHandler}>Add to Cart</button>
    </Card>
  );
}

export default ProductItem;