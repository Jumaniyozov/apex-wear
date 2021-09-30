import React from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import style from './priceInput.scss';

function PriceInput() {
  return (
    <div className={style.price_input}>
      <input placeholder="Продать за ..." />
      <button>
        <HiOutlineShoppingCart size={20} />
      </button>
    </div>
  );
}

export default PriceInput;
