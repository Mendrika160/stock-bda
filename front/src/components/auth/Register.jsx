import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


export default function Login() {
    const navigate = useNavigate();
    const [showPassword,setShowPassword] = useState(false)
    const schema = Yup.object().shape({
        name: Yup.string()
            .required("Name is a required field"),
        email: Yup.string()
            .required("Email is a required field")
            .email("Invalid email format"),
        password: Yup.string()
            .required("Password is a required field"),
        confirmPassword: Yup.string()
            .required("Password is a required field")
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
         
            
    });

    useEffect(() => {
        console.log('state',showPassword)
    }, [showPassword]);

    const handleSelectClick = () => {
        setShowPassword(prev =>!prev)
    }

    const handleSubmit = async (values,{setErrors}) => {
        //alert(JSON.stringify(values));
        axios.post('http://localhost:5000/api/user/register',values)
            .then(res => {
                console.log("res : ",res)
            })
            .catch(err => {
                console.log("err : ",err.response.data)
            })
        //navigate('/stock')

    }

    return (
        <div className='container mt-5'>
            <Container>
                <h1>Register</h1>
            

                <div className="form-container">   
                    <div className="row">
                        {/* form  */}
                        <Formik 
                            validationSchema={schema}
                            initialValues={{ name: "",email: "", password: "" ,confirmPassword: ""}}
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
                                 {/* name */}
                                 <div className="input-group flex-nowrap col-md-12 col-sm-12 mb-3">
                                    <div className="input-container">
                                        <input 
                                            type="text" 
                                            className="form-control col-12" 
                                            placeholder="your name" 
                                            aria-label="Email" 
                                            aria-describedby="addon-wrapping"
                                            name='name'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            />
                                            <span className='error-msg'>
                                            {errors.name && touched.name && errors.name}
                                            </span>
                                    </div>
                                </div>
                                {/* email */}
                                <div className="input-group flex-nowrap col-md-12 col-sm-12 mb-3">
                                    <div className="input-container">
                                        <input 
                                            type="email" 
                                            className="form-control col-12" 
                                            placeholder="Email" 
                                            aria-label="Email" 
                                            aria-describedby="addon-wrapping"
                                            name='email'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            />
                                            <span className='error-msg'>
                                            {errors.email && touched.email && errors.email}
                                            </span>
                                    </div>
                                </div>

                                {/* password */}
                                <div className="input-group flex-nowrap mb-3">
                                   <div className="input-container">
                                        <input 
                                            type={showPassword ? "text" : "password"} 
                                            className="form-control col-12" 
                                            placeholder="password" 
                                            aria-label="Password" 
                                            aria-describedby="addon-wrapping"
                                            name='password'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}

                                            />
                                            <span className='error-msg'>
                                            
                                            {errors.password && touched.password && errors.password}
                                            </span>
                                        </div> 
                                   
                                </div>
                                {/* confrim password */}

                                <div className="input-group flex-nowrap mb-3">
                                   <div className="input-container">
                                        <input 
                                            type={showPassword ? "text" : "password"} 
                                            className="form-control col-12" 
                                            placeholder="confirm password" 
                                            aria-label="Password" 
                                            aria-describedby="addon-wrapping"
                                            name='confirmPassword'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.confirmPassword}

                                            />
                                            <span className='error-msg'>
                                            
                                            {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                                            </span>
                                        </div> 
                                   
                                </div>
                                {/* show hide pass */}
                                <div className="input-group flex-nowrap mb-3">
                                <div className="form-check">
                                    <input 
                                        className="form-check-input"
                                        type="checkbox" 
                                        value={showPassword} 
                                        id="flexCheckDefault"
                                        onClick={handleSelectClick}
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        show password
                                    </label>
                                    </div>
                                </div>
                                {/* button submit */}
                                <div className="input-group flex-nowrap mb-3">
                                    
                                    <button 
                                        type='submit'
                                        className='btn btn-info col-12'
                                    >
                                        Register 
                                    </button>
                                </div>

                            </form>
                        )}
                        </Formik>
                    </div>
                </div>
            </Container>

        </div>
    )
    }

    const Container = styled.div`
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        gap: 2rem;
        .form-container{
            width:40%;
            form{
                gap:20px;
                .input-container{
                    width:100%;
                    flex-direction:column;
                    .error-msg{
                        color:#dc2f2f;
                        font-size:11px;
                    }

                }
                button{
                    color:white;
                    width:100%;
                    &:hover{
                        color:whitesmoke;
                    }
                    
                }

            }


        }
    
        @media only screen and (max-width: 768px) {
            .form-container{
                width:100%;
            }
        }
        
        
    `