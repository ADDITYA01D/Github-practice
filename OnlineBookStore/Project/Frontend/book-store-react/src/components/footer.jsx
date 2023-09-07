// import '../node_modules/bootstrap/dist/js/bootstrap.js';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';

import { useNavigate, Link } from 'react-router-dom';
import React from "react";

function Footer() {

  const navigate = useNavigate();

  // const home = () =>{
  //   navigate('/');
  // }

  return (
    <>
      <div>
        <br />
        <br />
        <br />
      </div>
      {/* <hr style={{ color: "red", size: "5px" }} /> */}
      <div
        className="footer"
        style={{
          borderTop: "1px solid red",
          backgroundColor: "#F0F5F7",
          display: "flex",
          flexWrap: "wrap",
          height: "180px",
          width: "100%",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            height: "50px",
            width: "100%",
            paddingTop: "25px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              height: "60%",
              width: "150px",
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/">
              <h4
                style={{
                  fontFamily:
                    "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                  fontStyle: "inherit",
                  fontWeight: "lighter",
                  color: "Gray",
                }}
              >
                Home
              </h4>
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              height: "60%",
              width: "150px",
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/about_us">
              <h4
                style={{
                  fontFamily:
                    "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                  fontStyle: "inherit",
                  fontWeight: "lighter",
                  color: "gray",
                }}
              >
                About Us
              </h4>
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              height: "60%",
              width: "150px",
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/payment_help">
              <h4
                style={{
                  fontFamily:
                    "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                  fontStyle: "inherit",
                  fontWeight: "lighter",
                  color: "gray",
                }}
              >
                Payment Help
              </h4>
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              height: "60%",
              width: "150px",
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/contact_us">
              <h4
                style={{
                  fontFamily:
                    "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                  fontStyle: "inherit",
                  fontWeight: "lighter",
                  color: "gray",
                }}
              >
                Contact Us
              </h4>
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              height: "60%",
              width: "150px",
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/faq">
              <h4
                style={{
                  fontFamily:
                    "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                  fontStyle: "inherit",
                  fontWeight: "lighter",
                  color: "gray",
                }}
              >
                FAQ
              </h4>
            </Link>
          </div>
          <div style={{ flexBasis: " 100%" }}></div>

          <div>
            <br />
            <hr style={{ color: "slategrey", size: "5px", width: "850px" }} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              height: "40px",
              width: "100%",
            }}
          >
            <img
              style={{ height: "40px", width: "40px" }}
              src="/image/fbb.png"
              alt=""
            />
            <img
              style={{ height: "40px", width: "40px" }}
              src="/image/what.png"
              alt=""
            />
            <img
              style={{ height: "40px", width: "40px" }}
              src="/image/you.png"
              alt=""
            />
            <img
              style={{ height: "40px", width: "40px" }}
              src="/image/insta.png"
              alt=""
            />
            <img
              style={{ height: "40px", width: "40px" }}
              src="/image/twitter.png"
              alt=""
            />
          </div>

          <div
            style={{
              display: " flex",
              justifyContent: "center",
              alignContent: "center",
              width: "100%",
            }}
          >
            <p>Copyright © 2023 . BookStore.com. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
