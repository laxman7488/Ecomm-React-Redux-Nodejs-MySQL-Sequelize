import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
      <div className="row px-xl-5 pt-5">
        <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
          <a href="" className="text-decoration-none">
            <h1 className="mb-4 display-5 font-weight-semi-bold">
            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="mr-1"><img src='/assets/img/favicon.png' style={{width:35, margin:"0 10px 6px 10px"}}/></span>Poker Table</h1>
            </h1>
          </a>
          <p>
            Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no
            sit erat lorem et magna ipsum dolore amet erat.
          </p>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt text-primary mr-3"></i>123
            Street, New York, USA
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope text-primary mr-3"></i>info@example.com
          </p>
          <p className="mb-0">
            <i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890
          </p>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="row">
            <div className="col-md-4 mb-5">
              <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
              <form action="">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control border-0 py-4"
                    placeholder="Your Name"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control border-0 py-4"
                    placeholder="Your Email"
                    required="required"
                  />
                </div>
                <div>
                  <button
                    className="btn btn-primary btn-block border-0 py-3"
                    type="submit"
                  >
                    Subscribe Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row border-top border-light mx-xl-5 py-4">
        <div className="col-md-6 px-xl-0">
          <p className="mb-md-0 text-center text-md-left text-dark">
            &copy;{" "}
            <a className="text-dark font-weight-semi-bold" href="#">
              Copyright 2024
            </a>
            . All Rights Reserved. Designed by
            <Link
              className="text-dark font-weight-semi-bold"
              href="https://htmlcodex.com"
            >
              {" "}
              Laxman Rai
            </Link>
          </p>
        </div>
        <div className="col-md-6 px-xl-0 text-center text-md-right">
          <img className="img-fluid" src="img/payments.png" />
        </div>
      </div>
    </div>
  );
}
