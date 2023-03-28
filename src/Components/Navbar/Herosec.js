import React from 'react'
import styled from 'styled-components';
import img from './images/dummydoll.jpeg'
import sideimg from './images/happysh.jpg'
const Herosec = () => {
  return (
    <Wrapper>
        <div className='container'>
            <div className=''>
                <div className='hero-section-data'>
                   
                    <div className='heroSEc-img'>
                 
                    <Button>Shop NowNow</Button>
                    </div>
                  
                </div>
            </div>
        </div>
    </Wrapper>
  )
};
const Wrapper = styled.section
`
.main_img
{
  height:70vh;
 width:70vw;

}
.heroSEc-img
{
position:absolute;
left:15vw;

}
`
const Button = styled.button`

`

export default Herosec