import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import {FaRegTrashAlt as Trash} from 'react-icons/fa'
import {ImWhatsapp as Wa} from "react-icons/im"
import style from './Purchase.module.css'

function Purchase() {

    const { cart,increase,reduction,removeProduct,total,getTotal, addCart } = useContext(AppContext);
    

  useEffect(() => {
    getTotal()
  }, [])

  const wh = cart;

    if(cart.length === 0){
        return <h2 style={{textAlign:"center", height: "100vh"}}>Nothings Product</h2>
    }else{
                
    return (
        
        <div className={style.purchase}>

            <div>

                {
                cart.map((data, index) =><div className="details cart" key={index}>
                <img  alt=""/>
                <div className="box">
                    <div className="row">
                        <h2>{data.name}</h2>
                        <span>${data.price * data.count}</span>
                    </div>
                    
                    <p>{data.ingredients}</p>
                    
                    <div className="amount">
                        <button className="count" onClick={() => reduction(data.id)}> - </button>
                        <span>{data.count}</span>
                        <button className="count" onClick={() => increase(data.id)}> + </button>
                    </div>
                </div>
                <div className="delete" onClick={() => removeProduct(data.id)}>X</div>
            </div>
   )
                }

            </div>

            <div className={style.final}>
           
                <div className={style.shop}>
                    <span>TU COMPRA</span>
                    
                    <span>TOTAL:{total}</span>
                </div>
                <div className={style.form}>
                    <p>DATOS DE ENVÍO</p>
                   
                    <form className="dataform" action="form">
                        <input type="text" placeholder="Nombre"/>
                        <input type="text" placeholder="Dirección completa"/>
                        <input type="text" placeholder="Celular"/>
                    </form>

                </div>

            </div>
            
            <Trash/>

            <a  href={ `https://api.whatsapp.com/send?phone=573183542764&text=${wh}`}> <button>Enviar orden <Wa/></button> </a>
            
        </div>
    )
}
}

export default Purchase
