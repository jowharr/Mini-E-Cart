import React from 'react'
import { useState } from 'react'
import { Link, useNavigate,Navigate } from 'react-router-dom'
import Cart from './Cart'
import './style.css'

function Navbar() {

    const navigate = useNavigate()

    const [count, setCount] = useState(JSON.parse(localStorage.getItem('cartitem')) || [])

    const itemCount = count.length


    const home = () => {
        navigate('/')
    }
    const cart = () => {
        navigate('/Cart')
    }

    return (
       
                <div>
                 {/*Main Navigation*/} 
                  <header className="mb-5">
                     {/* Jumbotron */} 
                    <div className="p-3 text-center text-white" style={{backgroundColor: '#131921'}}>
                      <div className="container">
                        <div className="row">
                          <div className="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
          
                             <h4  onClick={()=>navigate("/")} style={{cursor : "pointer"}} >Fake Store</h4>
                            
                          </div>
                          <div className="col-md-4">
                            <form className="d-flex input-group w-auto my-auto mb-3 mb-md-0">
                              <input autoComplete="off" type="search" className="form-control rounded" placeholder="Search" />
                              <span className="input-group-text border-0 d-none d-lg-flex"><i className="fas fa-search text-white" /></span>
                            </form>
                          </div>
                          <div className="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
                            <div className="d-flex">


                              {/* Cart */} 
                              {/* <Link to="/Cart"> */}
                              <a className="text-reset me-3" href="#">
                                <span><i className="fas fa-shopping-cart" onClick={cart} /></span>
                                <span className="badge rounded-pill badge-notification bg-danger">{itemCount}</span>
                              </a>
                              {/* </Link> */}


                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </header>
                  {/*Main Navigation*/}
                </div>
              )
            }
export default Navbar