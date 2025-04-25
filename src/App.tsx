import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { requestPermission, onMessageListener } from './firebase'; // import from firebase.ts
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Cart from './pages/Cart';
import Order from './pages/Order';

function App() {
  const [notification, setNotification] = useState<any>(null);

  useEffect(() => {
    // Request push notification permission when the app loads
    requestPermission();

    // Listen for foreground notifications
    onMessageListener()
      .then((payload) => {
        console.log('Notification received:', payload);
        setNotification(payload.notification); // Store notification details
        // Optionally, you could show a popup or alert with notification details
        alert(`${payload.notification.title}: ${payload.notification.body}`);
      })
      .catch((err) => console.log('Error in onMessageListener:', err));
  }, []);

  return (
    <div>
      <h1>Welcome to the Car Shop</h1>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
      </Routes>

      {/* Display notification details (Optional) */}
      {notification && (
        <div className="notification-popup">
          <h3>{notification.title}</h3>
          <p>{notification.body}</p>
        </div>
      )}
    </div>
  );
}

export default App;
