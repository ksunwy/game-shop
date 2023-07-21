import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { BiCart } from 'react-icons/bi';

import { calcTotalPrice } from '../utils';

import CartMenu from '../cart-menu/CartMenu';
import ItemsInCart from '../items-in-cart/ItemsInCart';


import './cart-block.css';
import { useNavigate } from 'react-router-dom';

const CartBlock = () => {
  const [isCarMenuVisible, setIsCarMenuVisible] = useState(false);

  const items = useSelector(state => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();

   const handleClick = useCallback(() => {
    setIsCarMenuVisible(false);
    navigate('/order');
   }, [navigate]);

  return (
    <div className='cart-block'>
      <ItemsInCart quantity={items.length} />
      <BiCart size={25} className='cart-block__icon' onClick={() => setIsCarMenuVisible(!isCarMenuVisible)} />
      {totalPrice > 0 ? <span className="cart-block__total-price" >{totalPrice} руб.</span> : null}
      {isCarMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  )
}

export default CartBlock;