import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../data/Data";
import Product from "./Product";



function ProductDetail({cart,setCart}) {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    // console.log(filterProduct);
    setProduct(filterProduct[0]);

    const relatedProduct = items.filter((p) => p.category == product.category)
    console.log(relatedProduct);
    setRelatedProducts(relatedProduct)
  }, [id,product.category]);
  

  return (
    <>
    <div className="container productDetBox">
      <div className="img">
        <img src={product.imgSrc} />
      </div>
      <div className="text-center">
        <h1 className="card-title">{product.title}</h1>
        <p className="card-text">{product.description}</p>
        <button className="btn btn-primary mx-4">{` ₹ ${product.price}`}</button>
        <button className="btn btn-warning  ">Add TO Card</button>
      </div>
    </div>
    <h1 className=" text-center">Related Products</h1>
    <Product cart={cart} setCart={setCart} items={relatedProducts} />

    </>

  );
}

export default ProductDetail;
