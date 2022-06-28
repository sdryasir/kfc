import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllProducts } from '../../redux/actions/productActions'
import AddModal from './AddModal';
import './product.css';
import {Link} from 'react-router-dom'

const Product = () => {

  const dispatch = useDispatch();
  const {products} = useSelector(state=>state.products)

  const [showModal, setShowModal] = useState(false)

  useEffect(()=>{
    dispatch(getAllProducts());
  }, [])

  return (
    <>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Products</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=>setShowModal(true)}>Add New</button>
          </div>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>

            {
              products.data && products.data.map((product, i)=>{
                return (
                  <tr key={product._id}>
                    <td>{i+1}</td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>
                      <Link className="btn btn-primary me-2" to={`/edit-product/${product._id}`}>Edit</Link>
                      <Link className="btn btn-danger" to="">Delete</Link>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </main>
    {showModal ? <AddModal setShowModal={setShowModal}/> : null}
    </>
  )
}

export default Product