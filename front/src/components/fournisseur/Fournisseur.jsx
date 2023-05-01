import React ,{useState}from 'react'
import Navbar from '../sidebar/Navbar'
import styled from 'styled-components'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModalForm from './ModalForm'


export default function Fournisseur() {
  const fournisseurs = [
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
  const [frsId,setFrsId] = useState(null)

  // useEffect(() => {
   
   
  // }, [productId]);

  const handleOpen = () => setOpen(true);
  const handleClose = () =>{ 
    setFrsId(null);
    setOpen(false)

  };

  const editFournisseur = (id) => {
    handleOpen();
    setFrsId(id);
    console.log("edit id",id)
  }


  const deleteFournisseur = (id) => {
    console.log('product',id)
  }
  return (
    <>
    <Container>
      <div className="sideNav">
        <Navbar />
      </div>
     <div className="container product-container">
        <div className='mb-5'>Fournisseur</div>
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
            frsId={frsId}
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
              fournisseurs.map(fournisseur => (
                <tr key={fournisseur.id}>
                  <th scope="row">{fournisseur.id}</th>
                  <td>{fournisseur.nom}</td>
                  
                  
                  <td>
                    <div className="btn-action">
                      <EditIcon 
                        className="btn-action-edit"
                        onClick={() =>editFournisseur(fournisseur.id)}
                        />
                      <DeleteForeverIcon 
                        className="btn-action-delete"
                        onClick={()=> deleteFournisseur(fournisseur.id)}
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