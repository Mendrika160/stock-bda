import React ,{useState}from 'react'
import Navbar from '../sidebar/Navbar'
import styled from 'styled-components'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModalForm from './ModalForm'


function Vente() {
  const products = [
    {
      id: 1,
      design : "marteau",
      stock : "1"
      
    },
    {
      id: 2,
      design : "clou",
      stock : "23"
      
    }
  ]
  const [open, setOpen] = useState(false);
  const [productId,setProductId] = useState(null)

  // useEffect(() => {
   
   
  // }, [productId]);

  const handleOpen = () => setOpen(true);
  const handleClose = () =>{ 
    setProductId(null);
    setOpen(false)

  };

  const editProduct = (id) => {
    handleOpen();
    setProductId(id);
    console.log("edit id",id)
  }


  const deleteProduct = (id) => {
    console.log('product',id)
  }
  return (
    <>
    <Container>
      <div className="sideNav">
        <Navbar />
      </div>
     <div className="container product-container">
        <div className='mb-5'>product</div>
          {" "}
          <div 
            className="btn-add-product"
            onClick={handleOpen}
          >
             {/* <!-- Button trigger modal --> */}
            
                  <AddCircleIcon />
             
            
          </div>
          <ModalForm
            open={open}
            handleClose={handleClose}
            productId={productId}
           />
          <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Designation</th>
              <th scope="col">Stock</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map(product => (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.design}</td>
                  <td>{product.stock}</td>
                  
                  <td>
                    <div className="btn-action">
                      <EditIcon 
                        className="btn-action-edit"
                        onClick={() =>editProduct(product.id)}
                        />
                      <DeleteForeverIcon 
                        className="btn-action-delete"
                        onClick={()=> deleteProduct(product.id)}
                        />
                    </div>
                  </td>
                </tr>

              ))
            
            
            }
           
          </tbody>
        </table>
      </div> 
      
      </Container>  

    </>
   
  )
}

export default Vente

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