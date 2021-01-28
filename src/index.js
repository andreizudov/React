import React from 'react';
import ReactDOM from 'react-dom';
import './css/skeleton.css';
import './css/my.css'
import Header from './App';
import Goods from './goods'
import Catalog from './catalog';
import Delivary from './Delivary'
import Contact from './contact';
import Footer from './footer'

class All extends React.Component{
  render(){
    return(
      <div>
      <div>
        <Header/>
      </div>
      
       <div>
        <Catalog/>
       </div>
       <div className='main'>
       <div>
        <Goods/>
       </div>
       </div>
      
       <div>
        <Delivary/>
       </div>
       <div>
         <Contact/>
       </div>
       <div>
         <Footer/>
       </div>
       
      </div>
    )

  }
}

ReactDOM.render(
  <React.StrictMode>
    <All/>
  </React.StrictMode>,
  document.getElementById('root')
);


