import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCatergories } from '../../store/actions/categories.action';
import { GET_ALL_CATERGORIES } from '../../store/types/categories.type';
import Card from './Card'

export default function Grid() {
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch({ type: GET_ALL_CATERGORIES })

    }, [])
    return (

        <div className="container-fluid pt-5">
            <div className="row px-xl-5 pb-3">
                {categories.map(item =>
                    <Card data={item} key={item.id} />
                )}
            </div>
        </div>

    )
}
