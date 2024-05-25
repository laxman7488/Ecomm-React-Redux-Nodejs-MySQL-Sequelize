import React from 'react'

export default function Card({data}) {
  return (

                
                <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
                    <img src={data.image}/>
                    <div className="position-relative" style={{zIndex: "1"}}>
                        <h5 className="text-uppercase text-primary mb-3">{data.description}</h5>
                        <h1 className="mb-4 font-weight-semi-bold">{data.name}</h1>
                        <a href="" className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
                    </div>
                </div>
           
  )
}
