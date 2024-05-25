import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../../routes';
import { useSelector } from 'react-redux';

export default function TopHeader() {
    const [search, setSearch] = useState();
    const navigate = useNavigate();
    const carts = useSelector(state => state.carts.items)

    const onSubmit=(e)=>{
        if(e){
            e.preventDefault()
        }
        navigate(`${routes.shop.path}?search=${search}`);
        setSearch('');
    }
  return (
    <>
       <div className="container-fluid">
        <div className="row align-items-center py-3 px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
                <Link to="/" className="text-decoration-none">
                    <h1 className="m-0 display-5 font-weight-semi-bold"><span className="mr-1"><img src='/assets/img/favicon.png' style={{width:35, margin:"0 10px 6px 10px"}}/></span>Poker Table</h1>
                </Link>
            </div>
            <div className="col-lg-6 col-6 text-left">
                <form action="" onSubmit={e=>onSubmit(e)}>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for products" onChange={e=>setSearch(e.target.value)} value={search}/>
                        <div className="input-group-append">
                            <span className="input-group-text bg-transparent text-primary" onClick={onSubmit}>
                                <i className="fa fa-search"></i>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-lg-3 col-6 text-right">
                
                <Link to={routes.cart.path} className="btn border">
                    <i className="fas fa-shopping-cart text-primary"></i>
                    <span className="badge">{carts.length}</span>
                </Link>
            </div>
        </div>
    </div></>
  )
}
