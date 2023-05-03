import React,{useEffect} from 'react'
import {Typography,Modal,Box} from '@mui/material'
import { Formik } from "formik";
import * as Yup from "yup";

import styled from 'styled-components';
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

function ModalForm({open,handleClose,clientId}) {

  const schema = Yup.object().shape({
    nom: Yup.string()
        .required("Designation is a required field"),
        
  });

  // get productid from db 
  useEffect(() => {
    console.log("prod id", clientId)
    
  }, [clientId]);


  const handleSubmit = async (values,{setErrors}) => {
    if(clientId){
        editProduct(values)
    }else{
        addProduct(values)
    }

  }

  const editProduct = (values) => {
    console.log("edit product m")
    console.log("val edit client",values)

  }

  const addProduct = (values) => {
    console.log("add product m")
    console.log("val add client",values)
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
            initialValues={{ nom: clientId ? "kaka" : "",}}
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
                                {/* nom */}
                                <div className="input-group flex-nowrap col-md-12 col-sm-12 mb-3">
                                    <div className="input-container">
                                        <input 
                                            type="text" 
                                            className="form-control col-12" 
                                            placeholder="Nom du client" 
                                            aria-label="Design" 
                                            aria-describedby="addon-wrapping"
                                            name='nom'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.nom}
                                            />
                                            <span className='error-msg'>
                                            {errors.nom && touched.nom && errors.nom}
                                            </span>
                                    </div>
                                </div>

                             
                                {/* button submit */}
                                <Container>
                                <div className="input-group button-action flex-nowrap mb-3">
                                    <button className='btn btn-annuler'>Test</button>
                                    <button 
                                        type='submit'
                                        className='btn btn-info'
                                    >
                                       {clientId? 'Edit product ' : 'Add product'}
                                    </button>
                                </div>
                                </Container>
                            </form>
                        )}
                        </Formik>
        </Box>
      </Modal>
    </>
  )
}

export default ModalForm

const Container = styled.div`
  .button-action{
    display: flex;
    justify-content: flex-end;
    position:relative;
    top: 100%;
    gap:0.4rem;
    .btn-annuler{
      border: 1px solid #cecaca;
      
    }
  }
`