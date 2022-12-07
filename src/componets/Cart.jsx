// import React, { useEffect } from 'react'
import { useEffect, useState } from 'react'
import '../App.css'
import Navbar from './Navbar';

function Cart() {
  const [cartItem, setCartItem] = useState(JSON.parse(localStorage.getItem('cartitem')) || [])

  const deleteData = (del) => {
    console.log("Data=====>>", del);

    const remove = cartItem.filter((data) => {
      return data.id !== del
    })
    setCartItem(remove)
  }
  useEffect(() => {
    localStorage.setItem("cartitem", JSON.stringify(cartItem))
  }, [cartItem])



  const total = cartItem.reduce((accumilator, currentValue) => {
    return accumilator + currentValue.price}, 0);


     

  return (
    <>

      <Navbar />

      <section className="h-100" style={{ backgroundColor: '#eee' }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                <div>
                  <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i className="fas fa-angle-down mt-1" /></a></p>
                </div>
              </div>



              {cartItem && cartItem.map((content) =>
                <div className="card rounded-3 mb-4">
                  <div className="card-body p-4 ">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-2 col-lg-2 col-xl-2 ">
                        <img src={content.image} className="img-fluid rounded-3 " alt="Cotton T-shirt" />
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">{content.title.substring(0, 20)}</p>
                        <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <button className="btn btn-link px-2" onclick="">
                          <i className="fas fa-minus" />
                        </button>
                        <input id="form1" min={1} name="quantity" defaultValue={1} type="number" className="form-control form-control-sm" />
                        <button className="btn btn-link px-2">
                          <i className="fas fa-plus" />
                        </button>
                      </div>
                      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 className="mb-0">{content.price}</h5>
                      </div>
                      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg" onClick={() => { deleteData(content.id) }} /></a>
                      </div>
                    </div>
                  </div>
                </div>
              )}


              <div className="card mb-1">
                <div className="card-body p-4 d-flex flex-row">
                  <div className="form-outline flex-fill">
                    <div className='d-flex justify-content-star'>
                      <input type="text" id="form1" className="form-control-sm form-control-lg" placeholder='coupon code' />
                      <button type="submit"className="btn btn-outline-warning btn-lg ms-3 ml-3">Apply</button>
                      <h5 className='mt-3 offset-lg-2'> Total</h5>
                      <h5 className='mt-3 offset-lg-2'> {total}</h5>

                    </div>
                    <div className="row d-flex flex-row align-items-center">
                      <h5 className="mb-3 mt-4 offset-lg-6">Coupon Discount</h5>

                      <h5 className="mb-3 mt-4 offset-lg-2">0</h5>
                    </div>

                  </div>

                </div>
              </div>

              <div className="card mb-4">
                <div className="card-body p-4 d-flex justify-content-end">
                  <div className="form-outline flex-fill">
                    {/* <div className="col-md-3 col-lg-2 col-xl-4 offset-lg-6"> */}
                    <div className="row d-flex flex-row align-items-center">

                      <h5 className='offset-lg-6'>Amount to Pay</h5>
                      <h5 className='offset-lg-2'>{total}</h5>


                    </div>


                    {/* </div> */}
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Cart