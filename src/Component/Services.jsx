import React, { useState } from 'react'
import { services } from '../Data';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Services = () => {
  const [datas, setDatas] = useState(services)

  const slideleft = () => {
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 400
}
const slideright = () => {
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 400
}

  return (
    <div id='Services' className='services w-100 my-5 position-relative'>
        <h1 className='text-center' style={{color: " #1171ef", fontSize: "50px"}}>Automated VTU Services</h1>
        <MdChevronLeft className='mdchevronleft' onClick={slideleft} size={40}  style={{position: 'absolute', zIndex: '100', top: '60%', left: '55px'}}/>
        <div className='servicediv d-flex align-items-center' id={'slider'}>
            {datas.map((data, id)=> 
            //each service
            <div className='eachservice p-4 justify-content-center align-items-center m-2 rounded-4' style={{minWidth: "300px", height: "200px", position: "relative",}}>
              <h4 className='position-absolute px-3 py-2 fs-5'>{data.id}</h4>
              <div className='my-4 text-center' style={{fontSize: "30px"}}>{data.logo}</div>
              <h3 className='fs-4 text-center'>{data.title}</h3>  
            </div>
            )}
        </div>
        <MdChevronRight className='mdchevronright' style={{position: 'absolute', zIndex: '100', top: '60%', right: '55px'}}  onClick={slideright} size={40} />
    </div>
  )
}

export default Services