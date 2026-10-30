import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const Viewproduct = () => {

  let [allproducts, setAllproducts] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then(({ data }) => setAllproducts(data))
  }, [])

  return (
    <div id="view-container">

      <h2>VIEW PRODUCTS</h2>

      <div id="products">

        {
          allproducts.map((x, index) => {

            return (
              <div className="view-product-card" key={x.id}>

                <img
                  src={`https://api.dicebear.com/10.x/shapes/svg?seed=product${x.id}`}
                  alt="product"
                />

                <p>Product Name : {x.productname}</p>

                <p>Product Price : {x.productprice}</p>

                <p>Product Quantity : {x.productqty}</p>

                <div className='btn'>
                  <button onClick={() => {
                    navigate(`/updateproduct/${x.id}`)
                  }}>EDIT</button>
                  <button onClick={()=>{
                    axios.delete(`http://localhost:4000/products/${x.id}`)
                    window.location.assign("/viewproduct")
                  }} >DELETE</button>
                </div>

              </div>
            )
          })
        }

      </div>

    </div>
  )
}

export default Viewproduct