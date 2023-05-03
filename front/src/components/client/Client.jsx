import React ,{useState}from 'react'
import Navbar from '../sidebar/Navbar'
import styled from 'styled-components'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModalForm from './ModalForm'


export default function Client() {
  const clients = [
    {
      id: 1,
      nom : "Jean",
    },
    {
      id: 2,
      nom : "Lucie"
      
    }
  ]
  const [open, setOpen] = useState(false);
  const [clientId,setClientId] = useState(null)

  // useEffect(() => {
   
   
  // }, [productId]);

  const handleOpen = () => setOpen(true);
  const handleClose = () =>{ 
    setClientId(null)
    setOpen(false)

  };

  const editClient = (id) => {
    handleOpen();
    setClientId(id)
    console.log("edit id",id)
  }


  const deleteClient = (id) => {
    console.log('product',id)
  }
  return (
    <>
    <Container>
      <div className="sideNav">
        <Navbar />
      </div>
     <div className="container product-container">
        <div className='mb-5'>Client</div>
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
            clientId={clientId}
           />
          <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nom</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              clients.map(client => (
                <tr key={client.id}>
                  <th scope="row">{client.id}</th>
                  <td>{client.nom}</td>
                  
                  <td>
                    <div className="btn-action">
                      <EditIcon 
                        className="btn-action-edit"
                        onClick={() =>editClient(client.id)}
                        />
                      <DeleteForeverIcon 
                        className="btn-action-delete"
                        onClick={()=> deleteClient(client.id)}
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