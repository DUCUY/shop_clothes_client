import { Facebook, Instagram, Room, Twitter, YouTube } from "@mui/icons-material"
import { styled } from "styled-components"
import { mobile } from '../responsive'

// import { Link } from "react-router-dom"

const Container = styled.div`
    display: flex;
    background-color: #C0C0C0;
    ${mobile({ flexDirection: "column" })};


` 
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo =  styled.h1``

const Description =  styled.p`
    margin: 20px 0px;
`

const SocialContainer =  styled.div`
    display: flex;
`

const SocialIcon =  styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })};


`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#C0C0C0" })};

`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Sports Stotes</Logo>
            <Description>Cửa Hàng chúng tôi cung cấp đa dạng sản phẩm chất lượng cho cuộc sống năng động của bạn.</Description>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <YouTube/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Danh mục</Title>
            <List>
                <ListItem>
                    {/* <Link to ="" ></Link> */}
                    Trang chủ
                </ListItem>
                <ListItem>Giới Thiệu</ListItem>
                <ListItem>Sản Phẩm</ListItem>
                <ListItem>Liên Hệ</ListItem>
                <ListItem>Giỏ Hàng</ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>

            </List>
        </Center>

        <Right>
            <Title>Liên Hệ</Title>
            <ContactItem>Hotline: 1900 333 444</ContactItem>
            <ContactItem>Email: sports@gmail.com</ContactItem>
            <ContactItem><Room />Địa chỉ: Đường 3/2, Quận Ninh Kiều, TP.Cần Thơ </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />

        </Right>
    </Container>
  )
}

export default Footer