import React, { useEffect, useState } from 'react'
import style from  './Product.module.css'
import {FaRegArrowAltCircleDown as RowDown} from "react-icons/fa"
// import {AiOutlineMinusCircle as Minus} from "react-icons/ai"
// import {AiOutlinePlusCircle as Plus} from "react-icons/ai"
import {FiCheckCircle as Check} from "react-icons/fi"
import Select from 'react-select'

function Product({addCart, data}) {

    const { id, name, category, price, size, ingredients, sauce,accompaniment, img} = data

    const [description, setdescription] = useState(false)

    const [selectSauce, setselectSauce] = useState(null)
    const [selectAccompaniment, setselectAccompaniment] = useState(null)
    const [selectSize, setselectSize] = useState({value:'sola'})
    const [selectPrice, setselectPrice] = useState(0)

    useEffect(() => {

        (selectSize.value=='Sola'? setselectPrice(price[0]) : setselectPrice(price[1]))
          }, [selectSize])

        const onDropdownChangeSauce = (value) => {
        setselectSauce(value)
        console.log(value)
        }
        const onDropdownChangeAccompaniment= (value) => {
            setselectAccompaniment(value)
            console.log(value)
        }

        const onDropdownChangeSize= (value) => {
            setselectSize(value)
            console.log(value)
        }

    return (

        <div>

            <div className={style.boxMobile}>

                <div className={style.info}>

                    <img className={style.infoImg} src={img} alt="name" border="0"/>

                    <div className={style.infoGeneral}>

                        <h2 className={style.name}>{name}</h2>

                        <p>${selectPrice}</p>

                        {ingredients?
                        <div className={style.button} onClick={() => setdescription(!description)}><RowDown/></div>
                        : ""}

                    </div>

                </div>

                <div className={description? `${style.description} ${style.descriptionVisible}` :`${style.description} ${style.descriptionHide}`}>

                    {ingredients ? <p>{ingredients}</p> :""}

                    {sauce?

                        <Select 
                        value = {selectSauce}
                        options = {sauce}
                        onChange={onDropdownChangeSauce}
                        />

                    : ""}

                    {accompaniment?

                        <Select
                        value = {selectAccompaniment}
                        options = {accompaniment}
                        onChange={onDropdownChangeAccompaniment}
                        />

                    : ""}

                </div>

                <div>

                    <div>

                        {size?
                        <Select 
                        value = {selectSize}
                        options = {size}
                        onChange={onDropdownChangeSize}
                        />
                        : ""}

                    </div>

                    {/* <div className={style.finalSelector}>
                         {<Minus className={style.btn}/>}
                        <div className={style.total}>
                            <p>valor / cantidad</p>
                        </div>
                        <Plus className={style.btn}/>
                    </div> */}

                    <button className={style.cart} onClick={()=>addCart(id,(selectSize.value=='Sola'? price[1] : price[0]))}>
                        añadir
                        <Check/>
                    </button>

                </div>
            </div>

            <div className={style.boxDesktop}>

                <div className={style.info}>

                    <img className={style.infoImg} src={img} alt="name" border="0"/>
                    
                    <div className={style.infoGeneral}>
                        
                        <h2 className={style.name}>{name}</h2>
                        <p>${selectPrice}</p>
                        
                    </div> 

                </div>

                { ingredients ?

                <div className={style.description}>

                    <p>{ingredients}</p>

                    <div>

                        {sauce?

                            <Select
                            value = {selectSauce}
                            options = {sauce}
                            onChange={onDropdownChangeSauce}
                            />

                        : ""}

                    </div>

                    <div>

                        {accompaniment?

                            <Select
                            value = {selectAccompaniment}
                            options = {accompaniment}
                            onChange={onDropdownChangeAccompaniment}
                            />
                            
                        : ""}

                    </div>

                </div>

                : "" }
                
                <div>
                    
                    <div>
                        {size?
                        <Select
                        value = {selectSize}
                        options = {size}
                        onChange={onDropdownChangeSize}
                        />
                        : ""}
                    </div>

                    {/* <div className={style.finalSelector}>
                        <div className={style.total}>
                            <p>valor total</p>
                        </div>
                    </div> */}

                    <button className={style.cart} onClick={()=>addCart(id)}>
                        añadir 
                        <Check/>
                    </button>
                    
                </div>
            </div>

        </div>

    )
}

export default Product
