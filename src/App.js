import React from 'react';

class Header extends React.Component{
  render(){
    return(
      <div className='container'>
       <header>
      
           <div className='two columns menu'><a href='#catalog'>Продукция</a></div>
           <div className='two columns menu'> <a href='#Delivery'> Доставка</a></div>
           <div className='two columns menu'> <a href='#contact'> Контакты </a></div>
           <div className='three columns menu'> <div className='tel'>E-mail: info@idohan.ru </div>  </div>
           <div className='three columns menu' id='tel'> <div className='tel'> +7(983)-699-95-99</div></div>
        
       </header>
      </div>
    )
  }
}
export default Header;
