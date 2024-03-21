
import './App.css';
import Navbar from './navbar';
import Create from './create';
import Deposit from './deposit';
import Withdraw from './withdraw';
import Alldata from './alldata';
import Home from './home';
import {HashRouter,Routes,Route} from 'react-router-dom';
import usercontext  from './context';


export default function App(){

  return(<>
  <Navbar/>
  <usercontext.Provider value={{'users':[]}}>

    <HashRouter>
      <Routes>
        <Route path='/homepage' element={<Home/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/deposit' element={<Deposit/>}></Route>
        <Route path='/withdraw' element={<Withdraw/>}></Route>
        <Route path='/alldata' element={<Alldata/>}></Route>
        
      </Routes>
    </HashRouter>
    </usercontext.Provider>
 
 
  </>)
}



