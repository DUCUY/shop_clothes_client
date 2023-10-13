import { AccountCircle, FavoriteBorderOutlined, Menu, Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React, { useState } from 'react'
import { styled } from 'styled-components'
import { mobile, tabled } from '../responsive'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import Sidebar from "../components/Sidebar"
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Container = styled.div`
  height: 120px;
  background-color: #C0C0C0;
  ${mobile({ height: "110px" })};
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
 `

const Left = styled.div`
  flex: 1;
  display: flex;
  text-align: center;justify-content: center;
  align-items: center;
  ${tabled({

})}
`
const LeftReponsive = styled.div`
  display : none;
  flex: 1;
  cursor: pointer;
  ${tabled({
  display: "block",
})}
`

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  ${mobile({ fontSize: "15px" })}

`

const Center = styled.div`
  flex: 1;
  align-items: center;
  text-align: center;
  ${tabled({
  display: "none",
})}
  

`

const SearchContainer = styled.div`
  position: relative;
  display: inline-block;
  justify-content: center;
  width: 100%;

`

const Input = styled.input`
  width: 100%;
  padding : 10px;

  ${mobile({ width: "40px" })}
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
    
`

const Buttonn = styled.button`
  position: absolute;
  padding : 10px;
  top: 0;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
`

const Right = styled.div`
  flex: 1;
  display : flex;
  align-items: center;
  justify-content : flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
  ${tabled({
  display: "none",
})}
  
`

const RightReponsive = styled.div`
  display : none;
  
  flex : 1;
  ${tabled({
  display: 'flex',
  justifyContent: 'flex-end'
})}
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor : pointer;
  margin-left : 25px;
  ${mobile({ fontSize: "10px", marginLeft: "10px" })}
    
`
const MenuItemBottom = styled.div`
  display : flex;
  align-items: center;
  justify-content : space-around;
  padding-top : 10px;
`




const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <Container>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <SearchContainer>
            <Input placeholder="Search" />
            <Buttonn type="submit">
              <Search style={{ fontSize: '18px', color: '#555' }} />
            </Buttonn>

          </SearchContainer>
          <MenuItemBottom>
            <Link to="/" style={{ textDecoration: 'none', color: 'black', transition: 'all 0.3s' }}>Trang Chủ</Link>
            <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>Giới Thiệu</Link>
            <Link to="/products" style={{ textDecoration: 'none', color: 'black' }}>Sản Phẩm</Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Liên Hệ</Link>
          </MenuItemBottom>

          <Link to="/favorites" style={{ textDecoration: 'none', color: 'black' }} >
            <MenuItem>
              <Badge color="primary">
                <FavoriteBorderOutlined />
              </Badge>
            </MenuItem>
          </Link>

          <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
      <Wrapper>
        <LeftReponsive>
          <Menu onClick={handleShow} />
        </LeftReponsive>
        <Left>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <Logo>SPORTS</Logo>
          </Link>
        </Left>


        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <Buttonn type="submit">
              <Search style={{ fontSize: '18px', color: '#555' }} />
            </Buttonn>

          </SearchContainer>
          <MenuItemBottom>
            <Link to="/" style={{ textDecoration: 'none', color: 'black', transition: 'all 0.3s' }}>Trang Chủ</Link>
            <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>Giới Thiệu</Link>
            <Link to="/products" style={{ textDecoration: 'none', color: 'black' }}>Sản Phẩm</Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Liên Hệ</Link>
          </MenuItemBottom>
        </Center>

        <Right>
          <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem>
              <AccountCircle />
            </MenuItem>
          </Link>
          <Link to="/favorites" style={{ textDecoration: 'none', color: 'black' }} >
            <MenuItem>
              <Badge color="primary">
                <FavoriteBorderOutlined />
              </Badge>
            </MenuItem>
          </Link>

          <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
        <RightReponsive>
          <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem>
              <AccountCircle />
            </MenuItem>
          </Link>
        </RightReponsive>

      </Wrapper>
    </Container>

  )
}

export default Navbar