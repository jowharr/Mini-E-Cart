import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Navbar from './Navbar'
import './style.css'


function Home() {

	// const navigate = useNavigate()


    const [products, setProducts] = useState([])
    const [state, setState] = useState(JSON.parse(localStorage.getItem('cartitem')) || [])
 
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json()).then((data) => {
                console.log(data);
                setProducts(data)
                
            })
            
    }, [state])
    console.log("state====>>",state)

    const addcart = (item) => { 
        setState([...state,
            {...item}])
    console.log("state====>>",state)

    localStorage.setItem('cartitem',JSON.stringify(state))
    
    }

    return (
        <>
            {/* <Header /> */}
            <Navbar />
            <div className='cardcontainer'>
            {products.map((content) => ( 




            
                      <ul>
                        <li className="booking-card h-100" style={{backgroundImage: `url(${content.image})`}}>
                          <div className="book-container">
                            <div className="content">
                              <button className="btn" onClick={() => { addcart(content) }}>ADD TO CART</button>
                            </div>
                          </div>
                          <div className="informations-container">
                            <h2 className="title">{content.title.substring(0.12)}</h2>
                            {/* <p className="sub-title">{content.description}</p> */}
                            
                            <div className="more-information">
                                

                              
                              <p className="disclaimer">{content.description}</p>
                            </div>
                          </div>
                        </li>

                      </ul>
                
              
            ))}
            </div>
        </>
    )
}

export default Home