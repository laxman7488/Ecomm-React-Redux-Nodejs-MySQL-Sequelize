import React from 'react'
import { widgets } from '../constants/widget.constant'

export default function Widget() {
  return (
    <>
     <div className="container-fluid pt-5">

        <div className="row px-xl-5 pb-3">
          {widgets.map((item,i)=><div key={i} className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center border mb-4" style={{padding: "30px"}}>
                    <h1 className={`${item.icon} text-primary m-0 mr-3`}></h1>
                    <h5 className="font-weight-semi-bold m-0">{item.description}</h5>
                </div>
            </div>
           )}
          
        </div>
    </div>
    </>
  )
}
