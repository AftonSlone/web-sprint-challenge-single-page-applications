import React from "react";

export default function ThankYou(props) {
  const { order } = props;
  if (!order) return <div>No Order Yet</div>;
  return (
    <div>
      <h2>Thank You For Your Order</h2>
      <div>
        <h3>Pizza Order</h3>
      </div>
      <div>
        <h4>Size: {order.size}</h4>
      </div>
      <div>
        <h4>Sauce: {order.sauce}</h4>
      </div>
      <div>
        <h4>Toppings: </h4>
        <div>
          <ul>
            {order.pepperoni ? <li>pepperoni</li> : null}
            {order.sausage ? <li>sasuage</li> : null}
            {order.onions ? <li>onions</li> : null}
            {order.pineapple ? <li>pineapple</li> : null}
          </ul>
        </div>
      </div>
      <div>
        <h4>Special Instructions</h4>
      </div>
      <div>{order.specialInstructions}</div>
    </div>
  );
}
