import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementQty, incrementQty } from '../store/slices/cartSlice';
export default function CartQuantity({productId, qty}) {
    const dispatch = useDispatch();
  return (
    <div class="input-group quantity mx-auto" style={{ width: "100px" }}>
                                        <div class="input-group-btn">
                                            <button class="btn btn-sm btn-primary btn-minus" onClick={()=>dispatch(decrementQty(productId))}>
                                                <i class="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <input type="text" class="form-control form-control-sm bg-secondary text-center" value={qty} readOnly />
                                        <div class="input-group-btn">
                                            <button class="btn btn-sm btn-primary btn-plus" onClick={()=>dispatch(incrementQty(productId))}>
                                                <i class="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
  )
}
