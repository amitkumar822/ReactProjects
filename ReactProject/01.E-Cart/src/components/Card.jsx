import React from "react";
import { Link } from "react-router-dom";

function Card({ cart, setCart }) {
  return (
    <>
      <div className="container my-5" style={{ width: "49%" }}>
        {cart.length == 0 ? (
          <>
            <div className="text-center">
              <h1>Your cart is empty...</h1>
              <Link to={"/"} className="btn btn-warning">
                Continue Shopping...
              </Link>
            </div>
          </>
        ) : (
          cart.map((product) => {
            return (
              <>
                <div className="card mb-3 my-5" style={{ maxWidth: "700px" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={product.imgSrc}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body text-center pt-5">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.decription}</p>
                        <button className="btn btn-primary mx-4">{` ₹ ${product.price}`}</button>
                        <button className="btn btn-warning">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>
      {cart.length != 0 && (
        <div className="container flext text-center justify-center items-center mb-5">
          <button className="btn btn-warning mx-5">Check Out</button>
          <button onClick={() => setCart("")} className="btn btn-danger">
            Clear Cart
          </button>
        </div>
      )}
    </>
  );
}

export default Card;
