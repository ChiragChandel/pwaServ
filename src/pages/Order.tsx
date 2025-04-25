import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function Order() {
  const cart = useSelector((state: RootState) => state.cart);

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
  };

  return (
    <div>
      <h2>Order Details</h2>
      {cart.length === 0 ? (
        <p>No items in cart to order.</p>
      ) : (
        <div>
          <ul>
            {cart.map((car, index) => (
              <li key={index}>
                {car.name} <img src={car.img} alt={car.name} width={50} />
              </li>
            ))}
          </ul>
          <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
}

export default Order;
