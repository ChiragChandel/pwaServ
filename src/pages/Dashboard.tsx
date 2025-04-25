import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

const cars = [
  { id: 1, name: "Car 1", img: "https://via.placeholder.com/150" },
  { id: 2, name: "Car 2", img: "https://via.placeholder.com/150" },
  { id: 3, name: "Car 3", img: "https://via.placeholder.com/150" },
];

function Dashboard() {
  const dispatch = useDispatch();

  const handleAdd = (car: typeof cars[0]) => {
    dispatch(addToCart(car));
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {cars.map(car => (
          <div key={car.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={car.img} alt={car.name} />
            <p>{car.name}</p>
            <button onClick={() => handleAdd(car)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <Link to="/cart" style={{ display: "block", marginTop: "20px" }}>
        Go to Cart
      </Link>
    </div>
  );
}

export default Dashboard;
