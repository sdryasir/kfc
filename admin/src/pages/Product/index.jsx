import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllProducts } from '../../redux/actions/productActions'
import './product.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addNewProduct } from '../../redux/actions/productActions'

const Product = () => {

  const dispatch = useDispatch();
  const {products} = useSelector(state=>state.products)

  useEffect(()=>{
    dispatch(getAllProducts());
  }, [])


  const {handleChange, handleSubmit, handleblur, values, touched, errors} = useFormik({
    initialValues:{
      title:'',
      description:'',
      price:'',
      stock:'',
      image:''
    },
    validationSchema: Yup.object({
      title:Yup.string().required('title is required'),
      description:Yup.string().required('description is required'),
      price:Yup.string().required('price is required'),
      stock:Yup.string().required('stock is required'),
    }),
    onSubmit: (values)=>{
      dispatch(addNewProduct(values));
    }
  })

  return (
    <>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Products</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">Add New</button>
          </div>
        </div>
      </div>

      <h2>Section title</h2>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
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
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </main>
    <div className="modal-overlay-wrapper">
        <div className="modal-overlay-inner">
        <form class="row g-3" onSubmit={handleSubmit}>
          <div class="col-md-6">
            <label for="title" class="form-label">Title</label>
            <input type="text" name='title' onChange={handleChange} onBlur={handleblur} value={values.title}  class="form-control" id="title"/>
          </div>
          <div class="col-md-6">
            <label for="description" class="form-label">Description</label>
            <input type="text" name='description' onChange={handleChange} onBlur={handleblur} value={values.description} class="form-control" id="description"/>
          </div>
          <div class="col-12">
            <label for="price" class="form-label">Price</label>
            <input type="number" name='price' onChange={handleChange} onBlur={handleblur} value={values.price} class="form-control" id="price"/>
          </div>
          <div class="col-12">
            <label for="stock" class="form-label">Stock</label>
            <input type="number" name='stock' onChange={handleChange} onBlur={handleblur} value={values.stock} class="form-control" id="stock" placeholder="Apartment, studio, or floor"/>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Save Product</button>
          </div>
        </form>
        </div>
    </div>
    </>
  )
}

export default Product