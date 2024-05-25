import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux';

import Product from './Product'
import { utils } from '../helper/utils';
import { useNavigate } from 'react-router-dom';

export default function ProductGrid({ tag, title, search }) {
  const navigate = useNavigate();
  const productsItems = useSelector(state => state.products.items);

  const products = useMemo(()=>{
    let data = tag? utils.getProductByCategory(productsItems,tag):productsItems;
    //console.log(data , search)
    if(search){
      data = data.filter(product=> product.name.toLowerCase().includes(search.toLowerCase()))
    }

    return data;
  }, [productsItems, search, navigate])
  console.log('data',products)


  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        {title && <h2 className="section-title px-5"><span className="px-2">{title}</span></h2>}
      </div>
      <div className="row px-xl-5 pb-3">
        {
          products.map(item =>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={item.id}>
              <Product data={item} />
            </div>
          )
        }
      </div>
    </div>
  )
}
