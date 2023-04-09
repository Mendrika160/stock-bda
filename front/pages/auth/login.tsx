import React from 'react'
import styles from '../../styles/Login.module.css'
import styles3 from '../../styles/Login.module.css'
export default function Login() {
  return (
    <>
    <div className={styles.main}>

    
      <div className={styles.contenu}>Login</div>
     
        <div className="container">
          <div className={styles.contenu}>
            <div className={styles.loginContainer}>
              <div className="m-5">

              
                <div className="mb-3 row">
                  {/* email input */}
                
                  <div 
                    className="col-sm-12"
                  >
                    <input 
                      type="text"  
                      className="form-control" 
                      id="staticEmail" 
                      placeholder='your email'
                    />
                  </div>
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
                    />
                </div>
              </div>
              {/* end input password */}

              {/* btn submit */}
              <div 
                  className="d-grid"
                >
                  <button className='btn btn-primary button' type='button'>Log In </button>
              </div>
            </div>
            </div>
          </div>
      </div>
    </div>
    </>
    
  )
}
