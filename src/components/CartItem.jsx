import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../Icons"
import  { removeItem, increase, decrease } from '../features/cart/cartSlice';
const CartItem = ({id, img, title, price, amount}) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title}/>
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={()=>
        {if(amount === 1){
          dispatch(removeItem(id));
          return;
        }
        dispatch(decrease({id}))
        }}>remove</button>
        </div>
        <div>
          {/* increase button */}
          <button className="amount-btn" onClick={()=>{dispatch(increase({id}))}}>
            <ChevronUp/>
          </button>
          {/* amount */}
          <p className="amount">{amount}</p>
          {/* decrese button */}
          <button className="amount-btn" 
          onClick={()=>{if(amount === 1){
            dispatch(removeItem(id));
            return;
          }
          dispatch(decrease({id}))
          }}>
            <ChevronDown/>
          </button>
        </div>
    </article>
  )
}

export default CartItem
