import React from 'react'

export default function Card({data}) {
  return (
    <div className="col-lg-4 col-md-6 pb-1">
    <div className="cat-item d-flex flex-column border mb-4" style={{padding: "30px"}}>
        <p className="text-right">{data.quantity} Products</p>
        <a href="" className="cat-img position-relative overflow-hidden mb-3">
            <img className="img-fluid" src={data.image} />
        </a>
        <h5 className="font-weight-semi-bold m-0">{data.name}</h5>
    </div>
</div>
  )
}
