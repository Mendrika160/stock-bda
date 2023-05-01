import React, { useEffect } from 'react'
import { Typography, Modal, Box } from '@mui/material'
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

function ModalForm({ open, handleClose, apprivionnemenId }) {

  const frsData = [
    {
      id: 1,
      nom: "Jean",
    },
    {
      id: 2,
      nom: "Lucie"

    }
  ]

  const products = [
    {
      id: 1,
      design: "marteau",
      stock: "1"

    },
    {
      id: 2,
      design: "clou",
      stock: "23"

    }
  ]

  const schema = Yup.object().shape({
    frs: Yup.string()
      .required("frs is a required field"),
    produit: Yup.string()
      .required("Produit is a required field"),
    qteEntree: Yup.string()
      .required("required field")

  });

  // get productid from db 
  useEffect(() => {
    console.log("appr id", apprivionnemenId)

  }, [apprivionnemenId]);

  useEffect(() => {
    console.log("open modal", open)
  }, [open])

  const handleSubmit = (values, { setErrors }) => {
    console.log("test", values)
    if (apprivionnemenId) {
      editVente(values)
    } else {
      addVente(values)
    }

  }

  const editVente = (values) => {
    console.log("edit product m", values)

  }

  const addVente = (values) => {
    console.log("add product m", values)
    console.log("add ")
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
              frs: apprivionnemenId ? "kaka" : "",
              produit: apprivionnemenId ? "2" : "",
              qteEntree: apprivionnemenId ? "2" : ""

            }}
            onSubmit={(values, { setErrors }) => handleSubmit(values, { setErrors })}


          >{(
            {
              values,
              errors,
              touched,
              setFieldValue,
              handleChange,
              handleBlur,
              handleSubmit,


            }
          ) => (
            <form
              className='p-5'
              onSubmit={handleSubmit}
            >
              {/* client */}
              <div className="input-group flex-nowrap col-md-12 col-sm-12 mb-3">
                <div className="input-container">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    defaultValue={values.frs}
                    name='frs'
                    onChange={(event) => setFieldValue('frs', event.target.value)}
                  >
                    <option>Open this select menu</option>
                    {
                      frsData.map(f => (
                        <option
                          key={f.id}
                          value={f.id}
                        >{f.nom}
                        </option>
                      ))
                    }


                  </select>
                  <span className='error-msg'>
                    {errors.frs && touched.frs && errors.frs}
                  </span>
                </div>
              </div>

              {/* produit */}

              <div className="input-group flex-nowrap col-md-12 col-sm-12 mb-3">
                <div className="input-container">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={values.produit}
                    name='produit'
                    onChange={(event) => setFieldValue('produit', event.target.value)}
                  >
                    <option>Open this select menu</option>
                    {
                      products.map(produit => (
                        <option
                          key={produit.id}
                          value={produit.id}
                        >{produit.design}
                        </option>
                      ))
                    }


                  </select>
                  <span className='error-msg'>
                    {errors.produit && touched.produit && errors.produit}
                  </span>
                </div>
              </div>

              {/* qte Sortie*/}
              <div className="input-group flex-nowrap mb-3">
                <div className="input-container">
                  <input
                    type="number"
                    className="form-control col-12"
                    placeholder="Stock"
                    aria-label="Designation"
                    aria-describedby="addon-wrapping"
                    name='qteEntree'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.qteEntree}

                  />
                  <span className='error-msg'>

                    {errors.qteEntree && touched.qteEntree && errors.qteEntree}
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
                  {apprivionnemenId ? 'Edit ' : 'Add'}
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