import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { utils } from '../../helper/utils';
import { routes } from '../../routes'

export default function BreadCrumb() {

    const [breadcrumb, setBreadcrumb]=useState({});
    const page=useLocation();

    useEffect(()=>{
        setBreadcrumb(utils.getPage(page));
    },[page])
  return (
    <div className="container-fluid bg-secondary mb-5">
    <div className="d-flex flex-column align-items-center justify-content-center" style={{padding: "2.5rem"}}>
        <h1 className="font-weight-semi-bold text-uppercase mb-3">{breadcrumb.name}</h1>
        <div className="d-inline-flex">
            <p className="m-0"><Link to={routes.home.path}>{routes.home.name}</Link></p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">{breadcrumb.name}</p>
        </div>
    </div>
</div>
  )
}
