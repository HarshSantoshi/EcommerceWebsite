import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './banner.css';
const data = "";
function Banner() {
  return (
    <Carousel className='carasousel'
    autoPlay = {true}
    animation='slide'
    indicators ={false}
    navButtonsAlwaysInvisible = {true}
    cycleNavigation = {true}
    navButtonsProps={
        {
            style : {
                backgroundColor:'white',
                color:"#494949",
                borderRadius :"0",
                marginTop : '22',
                height:'104px'
            }
        }
    }
    >
        {
            // data.map((img , i)=>{
            //     return  (
            //         <>

            //         </>
            //     )
            // })
        }

    </Carousel>
  )
}

export default Banner
