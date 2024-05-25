import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Form, Field } from 'react-final-form'
import CartQuantity from '../component/CartQuantity';
import http from '../helper/http.service';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../routes';
import { clearCart, removeFromCart } from '../store/slices/cartSlice';
import { setOrder } from '../store/slices/orderSlice';

export default function Cart() {
    const cartItems = useSelector(state => state.carts.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const total = useMemo(() => {
        return cartItems.map(item => item.qty * item.price).reduce((a, b) => a + b, 0);
    }, [cartItems])

    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Name is Required';
        }
        if (!values.email) {
            errors.email = 'Email is Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Please enter valid email address';
        }
        return errors;
    };


    const onSubmit = (form) => {
        form.cart = cartItems
        http.post("place-order", form).then(response => {
            dispatch(clearCart());
            dispatch(setOrder(response.data))
            navigate(routes.thankYou.path)
        }).catch(err => console.log(err))
    }

    return (
        <div class="container-fluid pt-5">
            {
                cartItems.length ?
                    <div class="row px-xl-5">
                        <div class="col-lg-8 table-responsive mb-5">
                            <table class="table table-bordered text-center mb-0">
                                <thead class="bg-secondary text-dark">
                                    <tr>
                                        <th>Products</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody class="align-middle">
                                    {cartItems.map(item => <tr key={item.id}>
                                        <td class="align-middle"><img src={item.image} alt="" style={{ width: "50px" }} /> {item.name}</td>
                                        <td class="align-middle">${item.price}</td>
                                        <td class="align-middle">
                                            <CartQuantity productId={item.id} qty={item.qty} />
                                        </td>
                                        <td class="align-middle">${item.price * item.qty}</td>
                                        <td class="align-middle"><button class="btn btn-sm btn-primary" onClick={() => dispatch(removeFromCart(item.id))}><i class="fa fa-times"></i></button></td>
                                    </tr>
                                    )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div class="col-lg-4">
                            <Form onSubmit={onSubmit}
                                validate={validate}
                                render={({ handleSubmit, errors, values, submitErrors }) => (
                                    <form onSubmit={handleSubmit} className='cart-form'>
                                        <div class="form-group">
                                            <Field name="name" >
                                                {({ input, meta }) => (
                                                    <>
                                                        <label>Name</label>
                                                        <input {...input} type="text" class="form-control" placeholder="Enter Name" />
                                                        {(meta.error || meta.submitError) && meta.touched && (
                                                            <span>{meta.error}</span>
                                                        )}
                                                    </>
                                                )}
                                            </Field>
                                        </div>
                                        <div class="form-group">
                                            <Field name="email" >
                                                {({ input, meta }) => (
                                                    <>
                                                        <label>Email</label>
                                                        <input {...input} type="text" class="form-control" placeholder="Enter Email" />
                                                        {(meta.error || meta.submitError) && meta.touched && (
                                                            <span>{meta.error}</span>
                                                        )}
                                                    </>
                                                )}
                                            </Field>
                                        </div>

                                        <div class="card border-secondary mb-5">
                                            <div class="card-header bg-secondary border-0">
                                                <h4 class="font-weight-semi-bold m-0">Cart Summary</h4>
                                            </div>
                                            <div class="card-footer border-secondary bg-transparent">
                                                <div class="d-flex justify-content-between mt-2">
                                                    <h5 class="font-weight-bold">Total</h5>
                                                    <h5 class="font-weight-bold">${total}</h5>
                                                </div>
                                                <button type="submit" class="btn btn-block btn-primary my-3 py-3">Place Order</button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            />
                        </div>
                    </div>
                    :
                    <div className='empty-cart'><h3 className="text-center"><i class="fas fa-shopping-cart text-primary"></i> No items found in the cart.</h3>
                        <Link to={routes.shop.path} class="btn btn-outline-primary py-md-2 px-md-3 continue-shopping">Continue Shopping</Link>
                    </div>
            }
        </div>
    )
}

