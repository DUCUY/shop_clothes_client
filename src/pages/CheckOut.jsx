
import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import styled from '@emotion/styled'
import Footer from '../components/Footer'


const Container = styled.div`

`


const CheckOut = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Container>
            Thanh Toan
        </Container>
        <Footer />
    </div>
    
  )
}

export default CheckOut