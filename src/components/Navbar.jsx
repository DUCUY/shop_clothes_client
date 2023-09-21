import { AccountCircle, FavoriteBorderOutlined, Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import { styled } from 'styled-components'
import { mobile } from '../responsive'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



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
  text-align: center;
  align-items: center;
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

`
const SearchContainer = styled.div`
  border : 1px solid lightgray;
  display : flex;
  align-items: center;
  padding : 10px;
  justify-content: center;
  border-radius: 50px;

`

const Input = styled.input`
  width: 100%;
  padding : 10px;
  border-radius: 50px;
  ${mobile({ width: "40px" })}
    
`

const Right = styled.div`
  flex: 1;
  display : flex;
  align-items: center;
  justify-content : flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
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
  const quantity = useSelector(state=>state.cart.quantity);
  

  return (
    <Container>
      <Wrapper>

        <Left>
          <Link to= "/" style={{ textDecoration: 'none', color: 'black' }}>
            <Logo>SPORT</Logo>
          </Link>
        </Left>

        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search />
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
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <FavoriteBorderOutlined />
            </Badge>
          </MenuItem>

          <Link to= "/cart" style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>

      </Wrapper>
    </Container>

  )
}

export default Navbar