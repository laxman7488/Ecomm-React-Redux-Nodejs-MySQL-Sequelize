import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { homeSliders } from '../constants/banner.constant';
import useSlider from '../hooks/useSlider';

export default function Banner() {
    
    const [active, previous,next]=useSlider(homeSliders);

  return (
    <div id="header-carousel" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
    {
        homeSliders.map((item,i)=> <div key={i} className={`carousel-item ${active==i?'active':''}`} style={{height: "410px"}}>
        <img className="img-fluid" src={item.image}  />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{maxwidth: '700px'}}>
                <h4 className="text-light text-uppercase font-weight-medium mb-3">{item.heading}</h4>
                <h3 className="display-4 text-white font-weight-semi-bold mb-4">{item.description}</h3>
                <Link to={item.shopLink} className="btn btn-light py-2 px-3">Shop Now</Link>
            </div>
        </div>
    </div>

        )
    }
       
    </div>
    <Link className="carousel-control-prev" onClick={previous} data-slide="prev">
        <div className="btn btn-dark" >
            <span className="carousel-control-prev-icon mb-n2"></span>
        </div>
    </Link>
    <Link className="carousel-control-next" onClick={next} data-slide="next">
        <div className="btn btn-dark" style={{width: '45px', height: '45px'}}>
            <span className="carousel-control-next-icon mb-n2"></span>
        </div>
    </Link>
</div>
  )
}
