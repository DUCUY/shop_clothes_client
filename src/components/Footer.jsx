import { Facebook, Instagram, Room, Twitter, YouTube } from "@mui/icons-material"
import { styled } from "styled-components"
import { Link } from "react-router-dom";
import { mobile, tabled } from '../responsive'

// import { Link } from "react-router-dom"

const Container = styled.div`
    display: flex;
    background-color: #C0C0C0;
    ${mobile({ flexDirection: "column" })};
    ${tabled({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'

      })}

`
const Left = styled.div`
    flex: 1;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    display: flex;
`

const Description = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
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
                <Logo>Sports Stores</Logo>
                <Description>Cửa Hàng chúng tôi cung cấp đa dạng sản phẩm chất lượng cho cuộc sống năng động của bạn.</Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <YouTube />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Danh mục</Title>
                <List>
                    <ListItem>
                        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                            Trang chủ
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
                            Giới Thiệu
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/products" style={{ textDecoration: 'none', color: 'black' }}>
                            Sản Phẩm
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>
                            Liên Hệ
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
                            Giỏ Hàng
                        </Link>
                    </ListItem>
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