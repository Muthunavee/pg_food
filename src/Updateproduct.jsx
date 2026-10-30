import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

const Updateproduct = () => {

  let [productname, setProductname] = useState("")
  let [productprice, setProductprice] = useState("")
  let [productqty, setProductqty] = useState("")
  let navigate = useNavigate()
  let {id} = useParams();


  useEffect(()=>{
                axios.get(`http://localhost:4000/products/${id}`)
                .then((x)=>{
                    setProductname(x.data.productname)
                    setProductprice(x.data.productprice)
                    setProductqty(x.data.productqty)
                })
  },[])


  let handleSubmit = e => {
    e.preventDefault()

    let payload = {
      productname,
      productprice,
      productqty
    }

    axios.put(`http://localhost:4000/products/${id}`, payload)
    navigate("/viewproduct")
    toast.success("Product updated successfully")
    
  }

  return (
    <div id="container">

      <div className="add-product-card">

        <h1>UPDATE PRODUCT</h1>

        <form onSubmit={handleSubmit}>

          <label htmlFor="product-name">Product Name :</label>

          <input
          value={productname}
            type="text"
            required
            id="product-name"
            name="product-name"
            onChange={e => setProductname(e.target.value)}
          />

          <label htmlFor="product-price">Price :</label>

          <input
          value={productprice}
            type="number"
            required
            id="product-price"
            name="product-price"
            onChange={e => setProductprice(e.target.value)}
          />

          <label htmlFor="product-qty">Product Qty :</label>

          <input
          value={productqty}
            type="number"
            required
            id="product-qty"
            name="product-qty"
            onChange={e => setProductqty(e.target.value)}
          />

          <div className="buttons">
            <button type="submit">Update Product</button>
            <button type="button">Cancel</button>
          </div>

        </form>

      </div>

    </div>
  )
}

export default Updateproduct;