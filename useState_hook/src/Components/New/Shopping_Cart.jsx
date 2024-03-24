import React from "react";
import { useState, useEffect } from "react";

 import Swal from "sweetalert2";

function Shopping_Cart() {
  
 
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const items = [
    {
      id: 1,
      name: "watch",
      price: 200,
    },
    {
      id: 2,
      name: "craft",
      price: 320,
    },
    {
      id: 3,
      name: "fortnite",
      price: 510,
    },
    {
        id: 4,
        name: "laptop",
        price: 5000,
      },
  ];
  useEffect(() => {
    total();
  }, [cart]);
  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };


  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };
  const alert =()=>{
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }


  const listItems = items.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="add to cart" onClick={() => addToCart(el)} />
    </div>
  ));
  const cartItems = cart.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
    </div>
  ));
  return (
    <div>
     .............................Product list......................
      <div>{listItems}</div>
      <div>.........................CART.........................</div>
      <div>{cartItems}</div><br/>
      <div>Total: ${cartTotal}</div>
      <div>
        <button onClick={()=>{setCart([])}}>Clear to Cart</button><br/>
        <button onClick={alert}>Alert </button>
      </div>
     
    </div>
  );
}

export default Shopping_Cart;
