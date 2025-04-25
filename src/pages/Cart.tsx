import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";

function Cart() {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((car, index) => (
              <li key={index}>
                {car.name} <img src={car.img} alt={car.name} width={50} />
              </li>
            ))}
          </ul>
          <Link to="/order">
            <button>Proceed to Order</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
