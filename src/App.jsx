
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import { useEffect } from 'react';
import { calculateTotals } from './features/cart/cartSlice';
import Modal from './components/Modal';

function App() {
  const { cartItems } = useSelector((state)=>state.cart);
  const { isOpen } = useSelector((store)=>store.modal);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
    {isOpen && <Modal/>}
    <Navbar/>
    <CartContainer/>
    </main>
  )
}

export default App
