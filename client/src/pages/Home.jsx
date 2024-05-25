import React, { useEffect } from 'react'
import Newsletter from '../component/Newsletter'
import ProductGrid from '../component/Product.Grid'
import Widget from '../component/Widget'
import http from '../helper/http.service'
import { useDispatch } from 'react-redux'
import { setProducts } from '../store/slices/productSlice'
import FeaturedGrid from '../component/featureBanner/Featured.Grid'


export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    http.get('products').then(response => {
      dispatch(setProducts(response.data))
    }).catch(err => console.log(err))
  }, []);
  return (
    <>

      <Widget />
      <ProductGrid tag="Table" title="Tables" />
      <FeaturedGrid />
      <ProductGrid tag="Chairs" title="Chairs" />
      <Newsletter />


    </>
  )
}
