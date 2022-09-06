import './App.css';
// import {addToCart,removeToCart} from './redux/action'
// import {removeToCart} from './redux/action'
// import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  // const  dispatch = useDispatch();
  // const product = {
  //   name :'Iphone',
  //   type : 'mobile',
  //   price :10000,
  //   color :'red'
  // }
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <button onClick={()=> dispatch(addToCart(product))}>Add to Cart</button>
      <br></br>
      <button onClick={()=> dispatch(removeToCart(product))}>Remove to Cart</button>  */}
    
    </div>
  );
}

export default App;
