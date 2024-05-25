import React from 'react'
import Card from './Card'
import { categories } from '../../constants/categories.constant'

export default function FeaturedGrid() {
  return (
    <div className="container-fluid offer pt-5">
        <div className="row px-xl-5">
            {categories.map(item=>
            <div className="col-md-4 pb-4">
                <Card data={item} key={item.id} />
              
            </div>
        )}
        </div>
    </div>
  )
}
