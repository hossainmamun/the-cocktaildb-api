import React, { useContext } from 'react';
import { userContext } from '../../App.js';
import Navbar from '../Shared/Navbar/Navbar.js';
import CartDisplay from './CartDisplay/CartDisplay.js';

const Cart = () => {
    const [cart, setCart] = useContext(userContext);
    
    return (
        <div>
            <div style={{ background: '#073b4c', height: '80px' }}>
                <Navbar />
            </div>
            <div className="text-center text-capitalize" style={{marginTop: '150px'}}>
                {
                    !cart.length && 
                    <div>
                        <h3>nothing added to the cart</h3>
                        <p>next time you should add some product</p>
                    </div>
                }
            </div>
            {
                cart.map(item => <CartDisplay item={item} />)
            }
        </div>
    );
};

export default Cart;