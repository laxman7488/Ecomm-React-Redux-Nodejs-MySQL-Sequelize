import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { routes } from '../../routes';
import { toggleCategoriesMenu } from '../../store/slices/categoriesMenuSlice';

export default function Navbar() {
    const toggleMenu = useSelector(state => state.categoriesMenu.isMenuOpen);
    const dispatch = useDispatch();

    return (
        <>
            <div className="container-fluid ">
                <div className="row border-top px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <Link onClick={() => dispatch(toggleCategoriesMenu())} className={`btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100 ${toggleMenu ? '' : 'collapsed'}`} data-toggle="collapse" style={{ height: " 65px", marginTop: "-1px", padding: "0 30px" }}>
                            <h6 className="m-0">Categories</h6>
                            <i className="fa fa-angle-down text-dark"></i>
                        </Link>
                        <nav className={`collapse navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 ${toggleMenu ? 'show' : ''}`} id="navbar-vertical">
                            <div className="navbar-nav w-100 overflow-hidden">
                    
                                <Link to="/shop/Chairs" className="nav-item nav-link">Chairs</Link>
                                <Link to="/shop/Table" className="nav-item nav-link">Tables</Link>
                                <Link to="/shop/Top" className="nav-item nav-link">Dining Top</Link>
                            </div>
                        </nav>
                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                            <Link to="" className="text-decoration-none d-block d-lg-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="mr-1"><img src='/assets/img/favicon.png' style={{width:35, margin:"0 10px 6px 10px"}}/></span>Poker Table</h1>
                            </Link>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <NavLink to={routes.home.path} className="nav-item nav-link" activeClassName="active">{routes.home.name}</NavLink>
                                    <NavLink to={routes.shop.path} className="nav-item nav-link" activeClassName="active">{routes.shop.name}</NavLink>
                                    <NavLink to={routes.cart.path} className="nav-item nav-link" activeClassName="active">{routes.cart.name}</NavLink>

                                    <NavLink to={routes.contact.path} className="nav-item nav-link" activeClassName="active">{routes.contact.name}</NavLink>
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
        </>
    )
}
