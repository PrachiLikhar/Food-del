// // src/pages/OrderConfirmation.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./OrderConfirmation.css";

const OrderConfirmation = () => {
  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <div className="confirmation-icon">✅</div>
        <h1 className="confirmation-title">Your Payment Successfully!</h1>
        <p className="confirmation-message">
          Thank you for your order. Your food is being prepared and will be
          delivered soon!
        </p>
        <Link to="/myorders">
          <button className="confirmation-button">Go to My Orders</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
