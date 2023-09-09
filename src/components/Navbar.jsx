import { AccountCircle, FavoriteBorderOutlined, Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    height: 120px;
    background-color: #C0C0C0;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
 `

const Left = styled.div`
flex: 1;
text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;

`

const Center = styled.div`
    flex: 1;
`
const SearchContainer = styled.div`
    border : 1px solid lightgray;
    display : flex;
    align-items: center;
    margin-left : 100px;
    padding : 10px;
`

const Input = styled.input`
    border : none;
    
`

const Right = styled.div`
    flex: 1;
    display : flex;
    align-items: center;
    justify-content : flex-end;
`
const MenuItem = styled.div`
    cursor : pointer;
    margin-left : 25px;
    
`
const MenuItemBottom = styled.div`

  display : flex;
  align-items: center;
  justify-content : space-around;
  width : 40%;
  
`

const Bottom = styled.div`
  display : flex;
  justify-content : center;
`
const List = styled.a`

`



const Navbar = () => {
  return (
    <Container>
      <Wrapper>

        <Left>
          <Logo>Sports Stores</Logo>
        </Left>

        <Center>
          <SearchContainer>
            <Input />
            <Search />
          </SearchContainer>
        </Center>

        <Right>
          <MenuItem>

            <AccountCircle />
          </MenuItem>

          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <FavoriteBorderOutlined />
            </Badge>
          </MenuItem>

          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>

        </Right>

      </Wrapper>

      <Bottom>
        <MenuItemBottom>
          <a className='Menu_itema' href="#">Trang Chủ</a>
          <a className='Menu_itema' href="#">Giới Thiệu</a>
          <a className='Menu_itema' href="#">Sản Phẩm</a>
          <a className='Menu_itema' href="#">Liên Hệ</a>
        </MenuItemBottom>


      </Bottom>

    </Container>

  )
}

export default Navbar