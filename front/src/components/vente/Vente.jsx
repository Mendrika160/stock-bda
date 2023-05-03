import React,{useState,useEffect} from 'react'
import Navbar from '../sidebar/Navbar'
import styled from 'styled-components'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModalFormVente from './ModalFormVente'


const Vente = () => {

  const ventes = [
    {
      id: 1,
      client: { id : 1,nom : "Lucie"},
      produit: { id: 2,designation : "clou", stock: 3},
      qteSortie : 2
    },
    {
      id: 2,
      client: { id : 1,nom : "Luc"},
      produit: { id: 1,designation : "marteau", stock: 3},
      qteSortie : 3
    }
  ]

  


  const [open, setOpen] = useState(false);
  const [venteId,setVenteId] = useState(null);
  useEffect(() => {
    console.log("open :",open)
  }, [open]);
  const handleOpen = () =>{
     setOpen(true)
     console.log("click")
  };
  const handleClose = () =>{ 
    setVenteId(null)
    setOpen(false)

  };

  const editVente = (id) => {
    handleOpen();
    setVenteId(id)
    console.log("edit id",id)
  }


  const deleteVente = (id) => {
    console.log('product',id)
  }

  
  return (
    <>
        <Container>

        <div className="sideNav">
          <Navbar />
        </div>
        <div className="container product-container">
        <div className='mb-5'>vente</div>
          {" "}
          <div 
            className="btn-add-product"
            onClick={handleOpen}
          >
             {/* <!-- Button trigger modal --> */}
            
                  <AddCircleIcon />
             
            
          </div>
          
          <ModalFormVente
            open={open}
            handleClose={handleClose}
            ventId={venteId}
          />
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Client</th>
                    <th scope="col">Produit</th>
                    <th scope="col">Qte Sortie</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    { ventes.map((vente) => (
      
                    <tr key={vente.id}>
                      <th scope="row">{vente.id}</th>
                      <td>{vente.client.nom}</td>
                      <td>{vente.produit.designation}</td>
                      <td>{vente.qteSortie}</td>
                      <td>
                        <div className="btn-action">
                          <EditIcon 
                            className="btn-action-edit"
                            onClick={() =>editVente(vente.id)}
                            />
                          <DeleteForeverIcon 
                            className="btn-action-delete"
                            onClick={()=> deleteVente(vente.id)}
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

export default Vente;

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