import { Favorite, FavoriteBorder, SearchOutlined } from "@mui/icons-material"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { styled } from "styled-components"
import {userRequest} from "../requestMethods"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
// import formatVND from "../util/formatVND"

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
      }

`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`
// const Price = styled.div``

// const InfoProduct = styled.div``

const Product = ({ item, favorite }) => {
    const next = useHistory();
    const iduser = useSelector(state => state.user.currentUser)?._id;
    const favorites =  async (id) => {
        if( !iduser ){
            next.push('/login');
        }else {
            await userRequest.post(`users/favorites/${iduser}`, {productId: id});

        }
    }


    return (
        <Container>
            <Circle />
            
            <Image src={item.img} />
            <Info>     
                <Icon>
                    <Link to={`/product/${item._id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <SearchOutlined />
                    </Link>
                </Icon>

                <Icon onClick={()=> favorites(item._id)}>
                    {favorite ? <Favorite color="error"/> : <FavoriteBorder /> }
                </Icon>
            </Info>
            {/* <div>
            <Price>{formatVND(item.price)}</Price>
            <InfoProduct>{item.title}</InfoProduct>
            </div> */}
           
            
        </Container>
    )
}

export default Product