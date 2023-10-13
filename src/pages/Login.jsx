import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { loginSuccess } from "../redux/userRedux";




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
    flex-direction: column;
`

const Tilte = styled.h1`
    font-size: 24px;
    font-weight: 300;
    `

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`


const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled {
        color: green;
        cursor: not-allowed;
    }
`

const Div = styled.div`
    text-decoration: underline;
    color: black;
    margin: 10px 0px;
    font-size: 12px;
    cursor: pointer;
     
`
const Error = styled.span`
    color: red;
    font-size: 12px;

`



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isFetching } = useSelector((state) => state.user);
    const [errorLogin, setErrorLogin] = useState(false);
    const next = useHistory();
    const dispatch = useDispatch();


    const handleClick = async (e) => {
        e.preventDefault();
        const formData = {email, password};
        try {
            const res = await publicRequest.post(`/auth/login`, formData);
            if( res.status !== 200){
                setErrorLogin(true);
            } else {
                dispatch(loginSuccess(res.data));
                next.push('/');

            }

        } catch (error) {

        };
    };


  return (
    <Container>
        <Wrapper>
            <Tilte>Đăng Nhập</Tilte>
            <Form>
                <Input placeholder="email" 
                    type="email"
                    onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="password"
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={handleClick} disabled={isFetching}>
                    Đăng Nhập
                </Button>
                 {errorLogin && <Error>Nhập thông tin bị sai hoặc còn thiếu xót!</Error>}
                <Div>Bạn đã quên mật khẩu của mình?</Div>
                <Link to="/register">
                    <Div>Đăng ký tài khoản mới.</Div>
                </Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login