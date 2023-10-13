import styled from "styled-components"
import { mobile } from "../responsive"
import { Link,useHistory } from "react-router-dom"
import { useState } from "react"
import { publicRequest } from "../requestMethods"
import toast from "react-hot-toast"


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),
    url("https://dress-fr.techinfus.com/images/article/orig/2017/02/krossovki-dlya-bega-po-asfaltu-2.jpg")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}

`

const Form = styled.form`
    display: flex;
    // flex-wrap: wrap;
    flex-direction: column;

`

const Tilte = styled.h1`
    font-size: 24px;
    font-weight: 300;
    `

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 10px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 10px 10px;
`;

const Button = styled.button`
    width: 30%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin: 10px 10px;
    
`
const Div = styled.div`
    margin: 10px 10px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`
const Error = styled.div`
  color: red;
  font-size: 12px;
  margin-left: 10px;
`

const Register = () => {
    const initializedForm = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
    const next = useHistory();
    const [formData, setFormData] = useState(initializedForm);
    const [errorPassWord, setErrorPassWord] = useState(false); 
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (formData.password !== formData.confirmPassword) {
          toast.error('Mật khẩu không khớp với nhau!');
          setErrorPassWord(true);
          return;
        }
    
        try {
          const res =  await publicRequest.post(`/auth/register`,formData);
          if( res.status === 200){
            setFormData(initializedForm);
            toast.success('Đăng ký thành công!')
            setTimeout(() =>{
              next.push('/login');
            },1500);
          } else {
            toast.error('Đăng ký thất bại!')
            
          }
        } catch (error) {
          toast.error('Đăng ký thất bại!')

        }
      };


  return (
    <Container>
        <Wrapper>
            <Tilte>Đăng Ký Tài Khoản</Tilte>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="username"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                />
                <Input placeholder="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <Input placeholder="password" 
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                />
                <Input placeholder="confirm password" 
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                />
                { errorPassWord && <Error>Nhập thông tin bị sai hoặc còn thiếu xót!</Error>}

                <Agreement>
                   Shop cam đoan chính sách bảo mật thông tin của khách hàng.
                </Agreement>
                <Button type="submit">Đăng Ký</Button>
                <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                    <Div>Bạn đã có tài khoản. Triển đến trang đăng nhập. </Div>
                </Link>

            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register