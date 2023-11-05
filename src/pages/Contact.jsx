import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import styled from 'styled-components'
import Map from '../components/Map'
import Form from 'react-bootstrap/Form';
import { publicRequest } from '../requestMethods'
import toast from 'react-hot-toast'


const Wrapper = styled.div`
  
`

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 25px;
  font-style: italic;
  margin-top: 20px;


`
const Hr = styled.hr` 

`

const Content = styled.div`
  display: flex;
`

const Left = styled.div`
  flex:1;
  margin-top: 20px;
  margin-left: 30px;
`

const Right = styled.div`
  flex: 1;
  flex-direction: column;
    

`

const Info = styled.div``
const P = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
`

const Description = styled.div`
  font-size: 20px;
  font-weight: bold;
`

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
  const [inputs, setInputs] = useState({});
  const initializedForm = {
    username: '',
    email: '',
    phone:'',
    mess: '',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res =  await publicRequest.post(`users/messsupport` , inputs);
      if( res.data.status === "success"){
        setInputs(initializedForm);
        toast.success('Gửi tin nhắn hỗ trợ thành công.')

      } else {
        toast.error('Gửi tin nhắn hỗ trợ không thành công!')
      }
    } catch (error) {
      toast.error('Xảy ra lỗi khi gửi tin nhắn!')
    }
  };



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
              <P>Hotline: 1900 333 444</P>
              <P>Email: sports@gmail.com</P>
              <P>Open: 8h-21h các ngày trong tuần</P>
            </Info>
            <Description>Gửi Tin Nhắn Ngay Cho Sports Stores.</Description>
             <Description>Khi Bạn Cần Hỗ Trợ Hoặc Có Thắc Mắc Nhé!</Description> 
            
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Họ và Tên</Form.Label>
                <Form.Control type="text" name='username' value={inputs.username} onChange={handleInputChange} placeholder=""  style={{width:"50%"}}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' value={inputs.email} placeholder="" style={{width:"50%"}} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Số Điện Thoại</Form.Label>
                <Form.Control type="text" name='phone' value={inputs.phone} placeholder="" style={{width:"50%"}} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Lời Nhắn</Form.Label>
                <Form.Control as="textarea" name='mess' value={inputs.mess} rows={3}  style={{width:"80%"}} onChange={handleInputChange}/>
              </Form.Group>
              <Button type='submit'>Gửi</Button>

            </Form>
          </Right>
        </Content>
      </Wrapper>
      <Footer />
    </div>
  )
}

export default Contact