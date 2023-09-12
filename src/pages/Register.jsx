
import styled from "styled-components"


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
    width: 25%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin: 10px 10px;
    
`
const Link = styled.a`
    margin: 10px 10px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
     
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Tilte>Đăng Ký Tài Khoản</Tilte>
            <Form>
                <Input placeholder="username" />
                <Input placeholder="email" />
                <Input placeholder="password" />
                <Input placeholder="confirm password" />
                <Agreement>
                   Shop cam đoan chính sách bảo mật thông tin của khách hàng.
                </Agreement>
                <Button>Đăng Ký</Button>
                <Link>Bạn đã có tài khoản. Triển đến trang đăng nhập. </Link>

            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register