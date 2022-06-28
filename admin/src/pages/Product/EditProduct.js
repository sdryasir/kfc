import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addNewProduct } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getProductById } from '../../redux/actions/productActions';

const EditProduct = () => {

    const dispatch = useDispatch();
    const {product} = useSelector((state)=>state.products)

    const {id} = useParams();

    useEffect(()=>{
        dispatch(getProductById(id));
    },[])

    


    const [preview, setPreview] = useState('');
     
    const {handleChange, handleSubmit, handleblur, values, touched, errors, setFieldValue} = useFormik({
        initialValues:{
          title:product.data.title,
          description:'',
          price:'',
          stock:'',
          productImage:''
        },
        enableReinitialize: true,
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
    <div className="edit-product-wrapper">
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
            <input type="number" name='stock' onChange={handleChange} onBlur={handleblur} value={values.stock} class="form-control" id="stock" />
          </div>
          <div class="col-12">
            <label for="image" class="form-label">Upload a Image</label>
            <input type="file" 
                name='image' 
                onChange={(event) => {
                    let reader = new FileReader();
                    reader.onload = () => {
                        if (reader.readyState === 2) {
                            setFieldValue('productImage', reader.result);
                            setPreview(reader.result)
                        }
                    }
                    reader.readAsDataURL(event.target.files[0])
                }} 
                onBlur={handleblur} 
                value={values.image} 
                class="form-control" 
                id="image"/>
          </div>
          <img src={preview} style={{width:'200px'}} alt="" />
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Save Product</button>
          </div>
        </form>
        </div>
    </div>
  )
}

export default EditProduct