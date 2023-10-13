import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import styled from 'styled-components'
import Map from '../components/Map'
import Form from 'react-bootstrap/Form';


const Wrapper = styled.div`
  
`

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 25px;
  font-style: italic;

`
const Hr = styled.hr` 
  width: 80%;
  height: 5px;
  justify-content: center;
`

const Content = styled.div`
  display: flex;
`

const Left = styled.div`
  display: flex;
  flex:1;
  margin: 20px;
`

const Right = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
    

`

const Info = styled.div``

const Description = styled.div``

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   padding: 10px;
// `

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin: 10px;
// `

const Button = styled.button`
  width: 60px;
  border: none;
  padding: 10px 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 10px 10px;
`


const Contact = () => {

  return (
    <div>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Liên Hệ </Title>
        <Hr />
        <Content>
          <Left>
            <Map />
          </Left>
          <Right>
            <Info>
              <p>Số Điện Thoại</p>
            </Info>
            <Description>Gửi Tin Nhắn Ngay Cho Sports Stores
              Khi Bạn Cần Hỗ Trợ Hoặc Có Thắc Mắc Nhé!</Description>
            {/* <Form>
            <Input placeholder="Họ và tên" />
            <Input placeholder="Email" />
            <Input placeholder="Số Điện thoại" />
            <Input placeholder="Lời nhắn" />
            <Button>Gửi</Button>
          </Form> */}
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Họ và Tên</Form.Label>
                <Form.Control type="email" placeholder=""  style={{width:"50%"}}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="" style={{width:"50%"}} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Số Điện Thoại</Form.Label>
                <Form.Control type="email" placeholder="" style={{width:"50%"}} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Lời Nhắn</Form.Label>
                <Form.Control as="textarea" rows={3}  style={{width:"80%"}}/>
              </Form.Group>
              <Button>Gửi</Button>

            </Form>
          </Right>
        </Content>
      </Wrapper>
      <Footer />
    </div>
  )
}

export default Contact