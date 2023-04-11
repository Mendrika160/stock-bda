import React from 'react'
import Navbar from '../sidebar/Navbar'
import Stock from './Stock'
import styled from 'styled-components'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



function Product() {
  return (
    <>
    <Container>
      <div className="sideNav">
        <Navbar />
      </div>
     <div className="container product-container">
        <div className='mb-5'>product</div>
          {" "}
          <div className="btn-add-product">
             {/* <!-- Button trigger modal --> */}
            
                  <AddCircleIcon />
             
            
          </div>
          <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <div className="btn-action">
                  <EditIcon className="btn-action-edit"/>
                  <DeleteForeverIcon className="btn-action-delete"/>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                <div className="btn-action">
                  <EditIcon className="btn-action-edit"/>
                  <DeleteForeverIcon className="btn-action-delete"/>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
              <td>
                <div className="btn-action">
                  <EditIcon className="btn-action-edit"/>
                  <DeleteForeverIcon className="btn-action-delete"/>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div> 
      
      </Container>  

    </>
   
  )
}

export default Product

const Container = styled.div`
  display:flex;
  flex-direction:row;
  .product-container{
    width: 90%;
    gap:5rem;
    .btn-add-product{
      display:flex;
      justify-content:flex-end;
      cursor:pointer;
      margin-bottom: 10px;
      color:#6b8dd4;
    }
    .btn-action{
      display:flex;
      gap:0.8rem;
      .btn-action-edit{
        cursor: pointer;
        color:#68ff54;
      }
      .btn-action-delete{
        cursor: pointer;
        color:#da2020;
      }
    }
  }
`