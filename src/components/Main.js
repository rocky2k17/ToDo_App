
import {addToCart,removeToCart} from '../redux/action'
// import {removeToCart} from './redux/action'
import { useDispatch } from 'react-redux';

function Main() {
  const  dispatch = useDispatch();
  const product = {
    name :'Iphone',
    type : 'mobile',
    price :10000,
    color :'red'
  }
  return (
    <div>
      <button onClick={()=> dispatch(addToCart(product))}>Add to Cart</button>
      <br></br>
      <button onClick={()=> dispatch(removeToCart(product))}>Remove to Cart</button>
    </div>
  );
}

export default Main;
