import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import Product from '../Product/Product'
import style from './List.module.css'
import {GiHamburger as Burger} from "react-icons/gi"
import {FaHotdog as Dog} from "react-icons/fa"
import {GiFrenchFries as Fries} from "react-icons/gi"
import {GiRoastChicken as Wings} from "react-icons/gi"
import {GiChiliPepper as Chili} from "react-icons/gi"
import {GiSodaCan as Soda} from "react-icons/gi"

function List() {

  const {products, addCart } = useContext(AppContext) //salen del render context
  const [productsFilter, setProductsFilter] = useState(products)

  const hamb = () =>{
    let result = products.filter(catg => catg.category.includes("Hamburguesa"))
    setProductsFilter(result) 
  }
  const hd = () =>{
    let result = products.filter(catg => catg.category.includes("perro"))
    setProductsFilter(result) 
  }
  const fries = () =>{
    let result = products.filter(catg => catg.category.includes("papas"))
    setProductsFilter(result) 
  }
  const wings = () =>{
    let result = products.filter(catg => catg.category.includes("alitas"))
    setProductsFilter(result) 
  }
  const acomp = () =>{
    let result = products.filter(catg => catg.category.includes("adiciones"))
    setProductsFilter(result) 
  }
  const drink = () =>{
    let result = products.filter(catg => catg.category.includes("bebida"))
    setProductsFilter(result) 
  }


  return (
    
        <div className={style.father}>

          <div className={style.navigator}>

            <button onClick={hamb}><Burger/></button>
            <button onClick={hd}><Dog/></button>
            <button onClick={fries}><Fries/></button>
            <button onClick={wings}><Wings/></button>
            <button onClick={acomp}><Chili/></button>
            <button onClick={drink}><Soda/></button>

          </div>

          <h1>MENÚ</h1>

          <div className={style.productContainer}>

            {
              productsFilter.map((product) => <Product key={product.id} data={product} addCart={addCart}/>)
            }

          </div> 
          
        
        </div>
    )
}

export default List
