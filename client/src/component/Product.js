import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/slices/cartSlice';

export default function Product({data}) {
    const dispatch = useDispatch();

  return (
    <div className="card product-item border-0 mb-4">
    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
        <img className="img-fluid w-100" src={data.image} />
    </div>
    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
        <h6 className="text-truncate mb-3">{data.name}</h6>
        <div className="d-flex justify-content-center">
            <h6>${data.price}</h6><h6 className="text-muted ml-2"><del>${data.price}</del></h6>
        </div>
    </div>
    <div className="card-footer d-flex justify-content-center bg-light border">
        <Link className="btn btn-sm text-dark p-0"></Link>
        <a className="btn btn-sm text-dark p-0" onClick={()=>dispatch(addToCart(data))}><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
    </div>
</div>
  )
}
