import React, { useEffect, useState } from 'react'
import { Typography, Modal, Box } from '@mui/material'
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

function ModalForm({ open, handleClose, productId, design, stock, userId }) {


  const currentUserId = localStorage.getItem("stock-admin")
  const schema = Yup.object().shape({
    design: Yup.string()
      .required("Designation is a required field"),
    stock: Yup.string()
      .required("Password is a required field")

  });

  useEffect(() => {
    console.table({ design, stock })

  }, [design, stock, userId]);
  const handleSubmit = async (values, { setErrors }) => {
    if (productId) {
      editProduct(values, productId)
    } else {
      addProduct(values)
    }

  }

  const editProduct = (data, produitId) => {

    if (currentUserId) {
      const newData = {
        design: data.design,
        stock: data.stock,
        userId: parseInt(currentUserId)
      }

      axios.post(`http://localhost:5000/api/produit/edit/${produitId}`, newData)
        .then(res => {
          console.log("res", res)
          handleClose();
        })
        .catch(err => {
          console.log("error", err.response)
        })
    }
  }

  const addProduct = (data) => {
    if (currentUserId) {
      const newData = {
        design: data.design,
        stock: data.stock,
        userId: parseInt(currentUserId)
      }
      axios.post('http://localhost:5000/api/produit/add', newData)
        .then(res => {

          handleClose();
        })
        .catch(err => {
          console.log("err", err.response);
        })
      console.log("add product m", data)
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
            initialValues={{
              design: design,
              stock: stock
            }}
            onSubmit={(values, { setErrors }) => handleSubmit(values, { setErrors })}


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