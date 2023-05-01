import React,{useEffect,useState} from 'react'
import {Typography,Modal,Box} from '@mui/material'
import axios from 'axios';
import { Formik } from "formik";
import * as Yup from "yup";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '1px solid #e2dada',
  boxShadow: 24,
  p: 4,
};

function ModalForm({open,handleClose,productId}) {
  const [produit,setProduit] = useState({  
    design: "",
    stock: null,
    userId : null
  })


  const userId = localStorage.getItem("stock-admin")
  const schema = Yup.object().shape({
    design: Yup.string()
        .required("Designation is a required field"),
    stock: Yup.string()
        .required("Password is a required field")
        
  });

  // get productid from db 
  useEffect(() => {
    console.log("prod id", productId)
    if(productId){
     findOneProduit(productId)
    }
    
  }, [productId,setProduit]);


  useEffect(() => {
    console.log("produit state",produit)
  },[produit])


  const findOneProduit = (id) => {
    axios.get(`http://localhost:5000/api/produit/${id}`)
      .then(({data}) => {
          console.log("data",data.data)
          setProduit({
            design : data.data.design,
            stock: data.data.stock,
            userId: data.data.userId
          })
        
          
          
      })
      .catch(err => {
        console.log("Err", err.response);
      })

  }
  const handleSubmit = async (values,{setErrors}) => {
    if(productId){
        editProduct(values)
    }else{
        addProduct(values)
    }

  }

  const editProduct = (data) => {
    console.log("edit product m",data)

  }

  const addProduct = (data) => {
    if(userId){
      const newData = { 
        design : data.design,
        stock : data.stock,
        userId : parseInt(userId)
      }
      axios.post('http://localhost:5000/api/produit/add',newData)
        .then(res => {
          // console.log("res",res)
          handleClose();
        })
        .catch(err => {
          console.log("err", err.response);
        })
    console.log("add product m",data)
  }
    // handleClose();
  }
  return (
    <>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        <Formik 
            validationSchema={schema}
            initialValues={{ design: produit.design ? produit.design: "", stock: produit.stock ? produit.stock :"" }}
            onSubmit={(values,{setErrors}) => handleSubmit(values,{setErrors})}
                            
                            
                        >{(
                            {
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                            
                
                            }
                        ) => (
                            <form
                                className='p-5'
                                onSubmit={handleSubmit} 
                            >
                                {/* email */}
                                <div className="input-group flex-nowrap col-md-12 col-sm-12 mb-3">
                                    <div className="input-container">
                                        <input 
                                            type="text" 
                                            className="form-control col-12" 
                                            placeholder="Designation" 
                                            aria-label="Design" 
                                            aria-describedby="addon-wrapping"
                                            name='design'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.design}
                                            />
                                            <span className='error-msg'>
                                            {errors.design && touched.design && errors.design}
                                            </span>
                                    </div>
                                </div>

                                {/* stock */}
                                <div className="input-group flex-nowrap mb-3">
                                   <div className="input-container">
                                        <input 
                                            type="number"
                                            className="form-control col-12" 
                                            placeholder="Stock" 
                                            aria-label="Designation" 
                                            aria-describedby="addon-wrapping"
                                            name='stock'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.stock}

                                            />
                                            <span className='error-msg'>
                                            
                                            {errors.stock && touched.stock && errors.stock}
                                            </span>
                                        </div> 
                                   
                                </div>
                                {/* show hide pass */}
                             
                                {/* button submit */}
                                <div className="input-group flex-nowrap mb-3">
                                    
                                    <button 
                                        type='submit'
                                        className='btn btn-info col-12'
                                    >
                                       {productId ? 'Edit product ' : 'Add product'}
                                    </button>
                                </div>

                            </form>
                        )}
                        </Formik>
        </Box>
      </Modal>
    </>
  )
}

export default ModalForm