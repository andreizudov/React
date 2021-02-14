import React from 'react';
import ImgTest from './imgTest'

/* Production */

class Catalog extends React.Component{
  render(){
    return(
    <div className='container'>
    
      
          <div className='six columns' id='nameCompany'><h1>YOUNGMEDIFACE </h1><p id='cosmetics'>Настоящая Корейская косметика </p>
           <div className='bottonCatalog'>
           <a href='#catalog'> <button type="button" id="bottonCatalog"> Продукция </button> </a>

           </div>
          </div>
          <div className='six columns' id="img1"> <ImgTest/> </div>
    
    </div>
    )
  }
}

export default Catalog;
