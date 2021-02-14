import React from 'react'

class Delivary extends React.Component{
    render(){
        return(
            <div>
                <div className='container  mainHeight' id='Delivery'>
                    <div className='twelve columns' > <div className='font'> <h2>ДОСТАВКА </h2> </div>
                        <div className='img'><div className='six columns'> <img src='/img/Delivery.png' alt='Delivery' id='pic4' /> </div></div>
                     
                     <div className='six columns delivery'> 
                          
                          <ul>
                              <li> Оперативная отгрузка в день заказа!</li>
                              <li> Выгодные условия при доставки по России </li>
                              <li> Скидки</li>
                          </ul>
                        
                        
                     
            
                      </div>
                    </div>
                 </div>
            </div>
        )
    }
}

export  default Delivary