import React, { Component } from 'react';
import list  from '../data-base/menu.json'

export const AppContext = React.createContext();

export class AppProvider extends Component {

    state = {
    
        products: list,
        cart: [],
        total: 0
    
    }

    addCart = (_id, price) =>{
        console.log(_id, price)
              
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item.id !== _id
        })
        if(check){
            const data = products.filter(product =>{
                return product.id === _id
            })
            data[0].price= price;
            
            console.log(data)
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };
    
    reduction = _id =>{
        console.log(_id)
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.id === _id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = _id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.id === _id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = _id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item.id === _id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    // componentDidUpdate(){
    //     localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
    //     localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    // };

    // componentDidMount(){
    //     const dataCart = JSON.parse(localStorage.getItem('dataCart'));
    //     if(dataCart !== null){
    //         this.setState({cart: dataCart});
    //     }
    //     const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
    //     if(dataTotal !== null){
    //         this.setState({total: dataTotal});
    //     }
    // }

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <AppContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </AppContext.Provider>
        )
    }


}