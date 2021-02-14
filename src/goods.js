import React from 'react'

class Goods extends React.Component{
    render()
    {
        return(
            <div className='container goods' id='catalog'>

                <div className='twelve columns '> 
                 <div className='font'> <h2>ПРОДУКЦИЯ </h2> </div>
                </div>
              

                <div className='twelve columns'> 

                   <div className='four columns mask'>

                        <div className='mask'>Тканевые маски от 27 руб </div>  
                            
                            <div className='mask'>  
                                <ul className='mask'>
                                <li> С экстрактом зеленого чая</li>
                                <li> С экстрактом граната</li>
                                <li> С алоэ</li>
                                <li> С коллагеном</li>
                                <li> С морскими водорослями</li>
                                <li> С муцином</li>
                                </ul>
                            </div>
                        <div className="img"> <img src='/img/allMask.JPG' alt='our mask' id='pic1'/></div>
                    </div>
                   
                    
                   
                     
                    
                  <div className='four columns mask'> <div className='mask'> Гидрогелевые патчи от 470 руб</div>
                  <ul className='mask'>
                     <li> С коллоидным золотом</li>
                     <li> С экстрактом граната</li>
                     <li> С морским огурцом</li>
                     <li> С кораллом</li>
                    
                   </ul>
                   <div className="img"><img src='/img/patch.png' alt='patch in Russia' id='pic2'/> </div>
                   
                   </div>


                   <div className='four columns mask mainHeight'> 
                   <div  className='mask'> Увлажняющий крем от 500 руб </div>
                   <div className="img"> <img src='/img/Cream.png' alt='cream in Irkutsk' id='pic3' /> </div>
                    </div>
                    </div>

            </div>
        )
    }
}

export default Goods