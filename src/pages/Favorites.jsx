import React, { useEffect, useState } from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { FavoriteBorderOutlined } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { publicRequest } from '../requestMethods'
import formatVND from '../util/formatVND'
// import axios from 'axios'


const Container = styled.div``

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Top = styled.div``

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 25px;
  font-style: italic;

`

const Hr = styled.hr`
  width: 80%;
  height: 2px;  
  justify-content: center;
`

const Bottom = styled.div`
  display: flex;
  padding-top: 10px;
  

`

const Left = styled.div`
  display: flex;


`

const Image = styled.img`
  width: 10%;
  height: auto;
 
  
`

const Center = styled.div`
  display: flex;


`

const Info = styled.div`
  
`

const Right = styled.div`
  display: flex;

  
`
const Icon = styled.div`
  cursor: pointer;

`


const Favorites = () => {
  const next = useHistory();
  const iduser = useSelector(state => state.user.currentUser)?._id;
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const favorites = async (id) => {
    if (!iduser) {
      next.push('/login');
    } else {
      await publicRequest.post(`users/favorites/${iduser}`, { productId: id });
    }
  }

  useEffect(() => {
    const re = async () => {
      const res = await publicRequest.get(`users/favorites/${iduser}`);
      setFavoriteProducts(res.data.favoriteProduct);

    };
    if (iduser) {
      re();

    }

  }, [iduser]);




  return (
    <Container>
      <Announcement />
      <Navbar />

      <Top>
        <Title>Danh sách sản phẩm yêu thích</Title>
      </Top>
      <Hr />
      <Bottom>
        {favoriteProducts?.map(product => (
          <div key={product}>
            <Wrapper>
              <Left>
                <Image src={product.img} ></Image>
              </Left>
              <Center>
                <Info>
                  Sản phẩm: {product.title}
                </Info>
                <Info>
                  Giá: {formatVND(product.price)}
                </Info>
              </Center>
              <Right>
                {/* trai tim phai mau do */}
                <Icon onClick={() => favorites(product._id)}>
                  <FavoriteBorderOutlined />
                </Icon>
              </Right>
            </Wrapper>
          </div>
        ))}

      </Bottom>

      <Footer />
    </Container>
  )
}

export default Favorites