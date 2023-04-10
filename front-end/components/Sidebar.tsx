import React from 'react'
//import  { InventoryIcon } from '@mui/icons-material'
import InventoryIcon from '@mui/icons-material/Inventory';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import InputIcon from '@mui/icons-material/Input';

export default function Sidebar() {
 return (
    <>
        <ul>
            <a href="#">
                <li>
                    <InventoryIcon /> 
                    <span>Product</span>
                </li>
            </a>
            <a href="#">
                <li>
                    <ProductionQuantityLimitsIcon/> 
                    <span>client</span>
                </li>
            </a>
            
            <a href="#">
                <li>
                    <InputIcon/> 
                    <span>Vente</span>
                </li>
            </a>
            <a href="#">
                <li>
                    <InputIcon/> 
                    <span>Fournisseur</span>
                </li>
            </a>
            
        </ul>
    </>
  )
}

