import React, { useEffect, useState } from 'react'
import ProductGrid from '../component/Product.Grid'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import http from '../helper/http.service';
import { setProducts } from '../store/slices/productSlice';

export default function Shop() {
    const [search, setSearch] = useState("");
    const products = useSelector(state => state.products.items);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    
    const tag= id || "";
    useEffect(() => {
        if (!products.length) {
            http.get('products').then(response => {
                dispatch(setProducts(response.data))
            }).catch(err => console.log(err))
        }
        
    }, []);

    useEffect(()=>{
        return ()=>{
            setSearch('');
        }
    },[navigate])

    useEffect(()=>{
        const searchValue = searchParams?.get('search');
        if(searchValue){
            setSearch(searchValue);
        }
        return ()=>{
            setSearch('');
        }
    }, [searchParams])
    return (
        <div className="container-fluid pt-5">
            <div className="row px-xl-5">
                <div className="col-lg-3 col-md-12">


                </div>

                <div className="col-lg-12 col-md-12">
                    <div className="row pb-3">
                        <div className="col-12 pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <form action="">
                                    <div className="input-group">
                                        <input type="text" className="form-control" onChange={e => setSearch(e.target.value)} placeholder="Search by name" value={search} />
                                        <div className="input-group-append">
                                            <span className="input-group-text bg-transparent text-primary">
                                                <i className="fa fa-search"></i>
                                            </span>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <ProductGrid tag={tag} search={search} />

                    </div>
                </div>
            </div>  </div>
    )
}

