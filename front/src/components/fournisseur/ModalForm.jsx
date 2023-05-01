import React,{useEffect} from 'react'
import {Typography,Modal,Box} from '@mui/material'
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

function ModalForm({open,handleClose,frsId}) {

  const schema = Yup.object().shape({
    nom: Yup.string()
        .required("Designation is a required field"),
        
  });

  // get productid from db 
  useEffect(() => {
    console.log("prod id", frsId)
    
  }, [frsId]);


  const handleSubmit = async (values,{setErrors}) => {
    if(frsId){
        editFournisseur(values)
    }else{
        addFournisseur(values)
    }

  }

  const editFournisseur = (values) => {
    console.log("edit product m")
    console.log("val edit client",values)

  }

  const addFournisseur = (values) => {
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
            initialValues={{ nom: frsId ? "kaka" : "",}}
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
                                <div className="input-group flex-nowrap mb-3">
                                    
                                    <button 
                                        type='submit'
                                        className='btn btn-info col-12'
                                    >
                                       {frsId? 'Edit' : 'Add'}
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