import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { Add, Remove } from '@mui/icons-material'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;  
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
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
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
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

const ProductId = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
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

`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;

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
`;

const Cart = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <Title>Giỏ Hàng Của Bạn</Title>
            <Top>
                <TopButton>Tiếp tục mua hàng</TopButton>
                <TopTexts>
                    <TopText>Giỏ hàng(2)</TopText>
                    <TopText>Danh sách yêu thích</TopText>
                </TopTexts>
                <TopButton type="filled">Mua hàng </TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://cdn.yeep.vn/2023/05/sg-11134201-22110-0ebbwbb0ddkvf7.jpg" />    
                            <Details>
                                <ProductName><b>Sản Phẩm:</b> Đồ bóng đá </ProductName>
                                <ProductId><b>ID:</b> 151445051895</ProductId>
                                <ProductColor color='black' />
                                <ProductSize><b>Size:</b>M</ProductSize>
                            </Details>
                        </ProductDetail> 
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove />
                                <ProductAmount>2</ProductAmount>
                                <Add />
                            </ProductAmountContainer>
                            <ProductPrice>199.000 VND</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src="https://cdn.yeep.vn/2023/05/sg-11134201-22110-0ebbwbb0ddkvf7.jpg" />    
                            <Details>
                                <ProductName><b>Sản Phẩm:</b> Đồ bóng đá </ProductName>
                                <ProductId><b>ID:</b> 151445051895</ProductId>
                                <ProductColor color='black' />
                                <ProductSize><b>Size:</b>M</ProductSize>
                            </Details>
                        </ProductDetail> 
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove />
                                <ProductAmount>2</ProductAmount>
                                <Add />
                            </ProductAmountContainer>
                            <ProductPrice>199.000 VND</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Đơn Hàng</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Tổng tiền</SummaryItemText>
                        <SummaryItemPrice>398.000 VND</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Phí ship</SummaryItemText>
                        <SummaryItemPrice>50.000 VND</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Mã giảm giá</SummaryItemText>
                        <SummaryItemPrice>-50.000 VND</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText type="total">Tổng cộng</SummaryItemText>
                        <SummaryItemPrice>398.000 VND</SummaryItemPrice>
                    </SummaryItem>
                    <Button>Thanh Toán</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart