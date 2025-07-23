// import React from "react";
// import "./Footer.css";
// import { assets } from "../../assets/frontend_assets/assets";

// const Footer = () => {
//   return (
//     <div className="footer" id="footer">
//       <div className="footer-content">
//         <div className="footer-content-left">
//           <img src={assets.likhar} alt="" className="footer-logo" />
//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
//             nostrum iure suscipit maiores non harum incidunt unde magnam
//             molestias ipsum qui vel aut natus aspernatur ipsa dignissimos,
//             numquam assumenda deserunt.
//           </p>
//           <div className="footer-social-icons">
//             <img src={assets.facebook_icon} alt="" />
//             <img src={assets.twitter_icon} alt="" />
//             <img src={assets.linkedin_icon} alt="" />
//           </div>
//         </div>
//         <div className="footer-content-center">
//           <h2>Company</h2>
//           <ul>
//             <li>Home</li>
//             <li>About us</li>
//             <li>Delivery</li>
//             <li>Privacy Policy</li>
//           </ul>
//         </div>
//         <div className="footer-content-right">
//           <h2>Get in touch</h2>
//           <ul>
//             <li>+92-308-4900522</li>
//             <li>contact@tomato.com</li>
//           </ul>
//         </div>
//       </div>
//       <hr />
//       <p className="footer-copyright">
//         Copyright 2024 @ Tomato.com - All Right Reserved.
//       </p>
//     </div>
//   );
// };

// export default Footer;
import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" className="footer-logo" />
          <p>
            Welcome to Foodie! Delivering delicious food straight to your door.
            We care about taste, hygiene, and customer satisfaction.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+91-088888888</li>
            <li>support@foodie.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        &copy; 2025 Foodie.com — All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
