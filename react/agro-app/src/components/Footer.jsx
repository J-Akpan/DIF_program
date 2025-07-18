import React from "react";
import "../styles/footer.scss";
import call from "../assets/photos/caller.png";
import mail from "../assets/photos/mail.png";
import logo from "../assets/photos/logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-item1">
        <ul>
          <li className="farmer">Farmer</li>
          <li>Organic</li>
          <li>Food</li>
          <li>Product</li>
        </ul>

        <div className="social">
          <div>
            <img src={call} alt="" /> <p>(+234)-912-67852</p>
          </div>
          <div>
            <img src={mail} alt="" /> <p>info@agrimo.com</p>
          </div>
        </div>
      </div>

      <div className="footer-item2">
        <div className="item1">
          <img src={logo} alt="" />
          <p>
            Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan
            risus. In vitae sapien viverra est Duo ei ullum inani senserit.
          </p>
        </div>

        <div className="item2">
          <div className="prof">
            <p>
              Professional & modern, a theme designed to help your business
              stand out from the rest.
            </p>
          </div>

          <div className="diff-sec">
            <div className="x0">
              <p>Useful Links</p>
              <ul>
                <li>Company</li>
                <li>About us</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="x1">
              <p>Useful Links</p>
              <ul>
                <li>Mon - Fri: 9.00am - 5.00pm</li>
                <li>Saturday: 10.00am - 6.00pm</li>
                <li>Sunday Closed</li>
              </ul>
            </div>

            <div className="x1">
              <p>Our Address</p>
              <p>Old Westbury 256, New York 11201, United States</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
