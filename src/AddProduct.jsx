import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Addproduct = () => {

  let [productname, setProductname] = useState("")
  let [productprice, setProductprice] = useState("")
  let [productqty, setProductqty] = useState("")

  let handleSubmit = e => {
    e.preventDefault()

    let payload = {
      productname,
      productprice,
      productqty
    }

    axios.post("http://localhost:4000/products", payload)
    toast.success("Product added successfully")
  }

  return (
    <div id="container">

      <div className="add-product-card">

        <h1>Add Product</h1>

        <form onSubmit={handleSubmit}>

          <label htmlFor="product-name">Product Name :</label>

          <input
            type="text"
            required
            id="product-name"
            name="product-name"
            onChange={e => setProductname(e.target.value)}
          />

          <label htmlFor="product-price">Price :</label>

          <input
            type="number"
            required
            id="product-price"
            name="product-price"
            onChange={e => setProductprice(e.target.value)}
          />

          <label htmlFor="product-qty">Product Qty :</label>

          <input
            type="number"
            required
            id="product-qty"
            name="product-qty"
            onChange={e => setProductqty(e.target.value)}
          />

          <div className="buttons">
            <button type="submit">Add Product</button>
            <button type="button">Cancel</button>
          </div>

        </form>

      </div>

    </div>
  )
}

export default Addproduct