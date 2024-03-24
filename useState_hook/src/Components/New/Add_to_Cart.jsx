import React, { useState, useEffect } from "react";

const Add_to_Cart = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const items = [
    {
      id: 1,
      name: "overwatch",
      price: 20,
    },
    {
      id: 2,
      name: "minecraft",
      price: 32,
    },
    {
      id: 3,
      name: "fortnite",
      price: 51,
    },
    {
      id:4,
      name:"bat",
      price: 100
    }
  ];

  useEffect(() => {
    total();
  }, [cart]);


////////////////////////////////////
  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal = totalVal + cart[i].price;
    }
    setCartTotal(totalVal);
  };


/////////////////////////////////////////
  const addToCart = (el) => {
      setCart([...cart, el]);
  };


///////////////////////////////////////////////////////////////
  const removeToCart = (el) => {
    let remove = [...cart];
    remove = remove.filter((cartItem) => cartItem.id !== el.id);
    setCart(remove);
  };
///////////////////////////////////////
  const listItems = items.map((el) => (
    <div key={el.id}>
      {`${el.name}: Rs${el.price}`}
      <input type="submit" value="add to cart" onClick={() => addToCart(el)} />
    </div>
  ));

  const cartItems = cart.map((el) => (
    <div key={el.id}>
      {`${el.name}: Rs${el.price}`}
      <input type="submit" value="remove to cart" onClick={() => removeToCart(el)} />
    </div>
  ));

  return (
    <div>
        <h1 style={{color:"green"}}>Producrt List Store</h1>
        Store
      <div>{listItems}</div>

      <br/>
      <h1 style={{color:"red"}}> Order list in Product</h1>
      <div>CART</div>
      <div>{cartItems}</div>
      <div>Total: Rs  {cartTotal}</div>
    </div>
  );
};

export default Add_to_Cart;