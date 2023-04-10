'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import styles from './styles.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useFormik,Formik, FormikErrors } from "formik";
import * as Yup from "yup";

export default function Login() {

  const router = useRouter();
  const SignupSchema = Yup.object().shape({
    
    email: Yup.string()
      .email('Invalid email')
      .required('Email Required'),
    password : Yup.string()  
      .required('Password Required'),
  });


  const handleSubmit = async (values: { email: string; password: string; }, {setErrors}: { setErrors: (errors: FormikErrors<{ email: string; password: string; }>) => void; }) => {
    console.log('submit',values)
    alert(JSON.stringify(values))
    router.push('/stock')
    
  }

  return (
    <>
    <div className={styles.main}>

    
      <div className={styles.contenu}>Login</div>
     
        <div className="container">
          <div className={styles.contenu}>
            <div className={styles.loginContainer}>
              <div className="m-3">
              <Formik
                initialValues={{
                  email: '',
                  password: ''
                }}
                validationSchema={SignupSchema}
                onSubmit={(values,{setErrors}) => handleSubmit(values,{setErrors})}
                // onSubmit={(values,{setErrors}) => { console.log('submit',values) }}
              >
                {({ 
                  errors,
                   touched,
                   values,
                   handleBlur,
                   handleChange,
                   handleSubmit
                   }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3 row">
                      {/* email input */}
                    
                      <div 
                        className="col-sm-12"
                      >
                        <input 
                          type="email"  
                          className="form-control" 
                          id="staticEmail" 
                          placeholder='your email'
                          name='email'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                      </div>
                      {errors.email && touched.email ? (
                        <div className="col-sm-12">
                          <span className={styles.errorMessage}>
                            {errors.email}
                          </span>
                           
                        </div>
                      ) : null}
                    </div>
                    {/* end email input */}
                    {/* password input */}
                    <div 
                      className="mb-3 row">
                      
                      <div 
                        className="col-sm-12"
                      >
                        <input 
                          type="password" 
                          className="form-control" 
                          id="inputPassword"
                          placeholder='your password'
                          name='password'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          />
                      </div>
                      {errors.password && touched.password ? (
                          <div className="col-sm-12"> 
                            <span className={styles.errorMessage}>
                              {errors.password}
                            </span>
                          </div>
                        ) : null}
                    </div>
                    {/* end input password */}

                    {/* btn submit */}
                    <div 
                        className="d-grid"
                      >
                        <button className='btn btn-primary button' type='submit'>Log In </button>
                    </div>
                  </form>
                )}
                </Formik>
            </div>
            </div>
          </div>
      </div>
    </div>
    </>
    
  )
}
