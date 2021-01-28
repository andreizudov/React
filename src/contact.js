import React from 'react'

import { YMaps, Map, Placemark } from 'react-yandex-maps';


class YaMap extends React.Component{
     render()
     {
         return(
             <Placemark geometry={[52.352121, 104.148159]} />
         )
     }
}



class Contact extends React.Component{
    
   
    
    render()
    { 
        let mapState = {center: [52.352121, 104.148159], zoom: 15}
     
        return(
            <div>
                
                <div className='container mainHeight'>
                    <div className='twelve columns '>
                       
                        <div className='font' id='contact'>КОНТАКТЫ</div>

                        <div className='six columns'>
                         <div className='contact'> г.Иркутск, ул.Баумана 237/1 <br/>+7(983)699-95-99</div>
                        </div>

                        <div className='six columns'>
                             <YMaps >
                                 <div className='map'>
                                     <Map state={ mapState} width='100%' height='400px'> <YaMap/>
                                      </Map>
                                </div>
                                </YMaps>
                       </div>
                        

                    </div> 
                </div>
            </div>
        )
    }
}

export default Contact