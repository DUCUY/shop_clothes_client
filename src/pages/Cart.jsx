import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Add, Delete, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';
import { useSelector } from "react-redux";
import { minusProduct, plusProduct, removeProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import formatVND from '../util/formatVND';




const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;  
    ${mobile({ padding: "10px" })}

`

const Title = styled.h1`
    font-weight: 500;
    font-size: 25px;
    text-align: center;
    font-style: italic;

`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
    
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    font-style: italic;

`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}

`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}

    `;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

// const ProductId = styled.span``;

const ProductColor = styled.div`
    
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}

`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 300;
    ${mobile({ marginBottom: "20px" })}

`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;


const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200; 
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handlePlusProduct = (idProduct) => {
        dispatch(plusProduct(idProduct))
    };
    const handleMinusProduct = (idProduct) => {
        dispatch(minusProduct(idProduct))
    };


    const handleRemoveClick = (idProduct) => {
        dispatch(removeProduct(idProduct));
    };

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>Giỏ Hàng Của Bạn</Title>
                <Top>
                    <Link to="/products">
                        <TopButton>Tiếp tục mua hàng</TopButton>
                    </Link>

                    <TopTexts>
                        <TopText>Giỏ hàng  {cart.quantity}</TopText>
                        <TopText>Danh sách yêu thích</TopText>
                    </TopTexts>
                    <Link to="/checkout">
                        <TopButton type="filled">Thanh toán </TopButton>
                    </Link>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map((product, index) => {
                            const total = product.price * product.quantity
                            return <Product key={index}>
                                <ProductDetail>
                                    <Image src={product.img} />
                                    <Details>
                                        <ProductName><b>Sản Phẩm: </b>{product.title} </ProductName>
                                        <ProductColor ><b>Color: </b>{product.color}</ProductColor>
                                        <ProductSize><b>Size: </b>{product.size}</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Remove onClick={() => handleMinusProduct(product._id)} style={{ cursor: 'pointer' }} />
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                        <Add onClick={() => handlePlusProduct(product._id)} style={{ cursor: 'pointer' }} />
                                        <Delete onClick={() => handleRemoveClick(product._id)} style={{ cursor: 'pointer' }} />
                                    </ProductAmountContainer>
                                    <ProductPrice>{formatVND(total)}</ProductPrice>
                                </PriceDetail>
                            </Product>
                        })}
                        <Hr />

                    </Info>
                    <Summary>
                        <SummaryTitle>Đơn Hàng</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Tổng tiền</SummaryItemText>
                            <SummaryItemPrice>{formatVND(cart.total)}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Phí ship</SummaryItemText>
                            <SummaryItemPrice>{formatVND(cart.total >= 300000 ? '0' : '30000')}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText type="total">Tổng cộng</SummaryItemText>
                            <SummaryItemPrice>{formatVND(cart.total > 300000 ? cart.total + 30000 : cart.total)}</SummaryItemPrice>
                        </SummaryItem>
                        <Link to="/checkout">
                        <Button>Thanh Toán</Button>
                        </Link>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart