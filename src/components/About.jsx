import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vh;
    height: 100vh;      
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        
    ),
    url("https://vinatex.com.vn/wp-content/uploads/2020/11/Picture1-2-1024x684.jpg")
        center;
    display: flex;
    background-size: cover;
    justify-content: center;

`

const Wrapper = styled.div`

`

const Top = styled.div`
    width: 100%;
    height: 100vh;      
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),
    url("http://bizweb.dktcdn.net/100/096/953/files/xuong-may-gia-cong-thoi-trang.jpg?v=1474864369916")
        center;
    display: flex;

    justify-content: center;
`
const Center = styled.div``
const Bottom = styled.div``



const About = () => {
  return (
    <Container>
        <Wrapper>
            <Top>
                
            </Top>
            <Center>

            </Center>
            <Bottom>

            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default About