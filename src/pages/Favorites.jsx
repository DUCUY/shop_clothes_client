import { useEffect, useState } from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { FavoriteBorderOutlined } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { userRequest } from '../requestMethods'
import formatVND from '../util/formatVND'



// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
// `
// display: flex;
  // justify-content: center;
  // align-items: center;
  // width: 80%;
  // margin-bottom: 20px;
  // border: 1px solid #ccc;
  // padding: 10px;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  margin: 0 auto;

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
`

const Bottom = styled.div`
display: flex;
flex-direction: column; /* Hiển thị các sản phẩm theo dạng cột */
padding: 10px;
gap: 20px;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Image = styled.img`
  width: 30%;
  height: 20%;
  border: 1px solid black;
`

const Center = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`

const Info = styled.div`
  margin-bottom: 10px;
  margin-right: 100px;
  display: flex;
  align-items: center;
  height: 100%;

  
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  
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
      await userRequest.post(`users/favorites/${iduser}`, { productId: id });
    }
  }

  useEffect(() => {
    const re = async () => {
      const res = await userRequest.get(`users/favorites/${iduser}`);
      setFavoriteProducts(res.data.favoriteProduct);

    };
    if (iduser) {
      re();

    }

  }, [iduser]);




  return (
    <div>
      <Announcement />
      <Navbar />

      <Top>
        <Title>Danh sách sản phẩm yêu thích</Title>
      </Top>
      <Hr />
      {/* <Container> */}

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
      {/* </Container> */}

      <Footer />
    </div>

  )
}

export default Favorites