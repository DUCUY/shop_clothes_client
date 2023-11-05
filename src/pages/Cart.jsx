import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Add, Delete, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';
import { useSelector } from "react-redux";
import { minusProduct, plusProduct, removeProduct, updateCart } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import formatVND from '../util/formatVND';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { userRequest, publicRequest } from "../requestMethods";
import toast from 'react-hot-toast';
import { PayPalButton } from "react-paypal-button-v2";



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
    // const change = useSelector((state) => state.cart.change);
    const [inputs, setInputs] = useState({});
    const [show, setShow] = useState(false);
    const [productSelect, setProductSelect] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalAndShip, setTotalAndShip] = useState(0);
    const [sdkReady, setSdkReady] = useState(false);
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user.currentUser);

    const handlePlusProduct = (idProduct) => {
        dispatch(plusProduct(idProduct))
    };
    const handleMinusProduct = (idProduct) => {
        dispatch(minusProduct(idProduct))
    };

    const handleRemoveClick = (state) => {
        dispatch(removeProduct(state));
    };

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     const payload = {
    //         ...inputs,
    //         username: inputs.username ? inputs.username : currentUser.username
    //     }

    // };

    useEffect(() => {
        let missProduct = cart.products.filter((cartItem) => {
            let check = productSelect.find((product) => product._id === cartItem._id && product.size === cartItem.size && product.color === cartItem.color);
            if (!check) {
                return cartItem;
            }
        })
        let missPrice = missProduct.reduce((acc, product) => acc + product.price * product.quantity, 0)
        let total = cart.total - missPrice;
        setTotal(total);

        if (total > 300000) {
            setTotalAndShip(total);
        } else if (total > 0) {
            setTotalAndShip(total + 30000);

        } else if (total === 0 && cart.total > 300000) {
            setTotal(cart.total);
            setTotalAndShip(cart.total);

        } else if (total === 0 && cart.total < 300000) {
            setTotal(cart.total);
            setTotalAndShip(cart.total + 30000);
        }

    }, [productSelect, cart.total]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSelect = (product) => {
        const check = productSelect.find((item) => item._id === product._id && product.size === item.size && product.color === item.color);

        if (check) {
            let products = productSelect.filter((item) => item._id !== product._id || product.size !== item.size || product.color !== item.color)
            setProductSelect(products);
        } else {
            setProductSelect([...productSelect, product]);
        }
    }

    const handleOrder = async () => {
        let amount = 0;
        let products = productSelect.map((item) => {
            amount += item.quantity * item.price;
            return {
                productId: item._id,
                quantity: item.quantity,
                size: item.size,
                color: item.color,
                productName: item.title,
                img: item.img
            }
        })

        let payload = {
            userId: currentUser._id,
            products,
            amount,
            payments: inputs.payments,
            username: inputs?.username,
            phone: inputs?.phone,
            address: inputs?.address

        };
        const res = await userRequest.post(`orders/`, payload);

        if (res.data.status === "success") {
            toast.success("Đặt hàng thành công.");
            let newCart = cart.products.filter((cartItem) => {
                if (productSelect.find((product) => product._id === cartItem._id && product.size === cartItem.size && product.color === cartItem.color)) {
                    return false
                }
                return true
            })
            let total = newCart.reduce((acc, product) => acc + product.price * product.quantity, 0)

            dispatch(updateCart({ total: total, products: newCart, quantity: newCart.length }));
        } else {
            toast.error("Đặt hàng không thành công!");
        }
        handleClose();
    };

    useEffect(() => {
        setInputs({
            username: currentUser?.username,
            phone: currentUser?.phone,
            address: currentUser?.address
        });
    }, [currentUser]);

    const addPaypalScript = async () => {
        const data = await publicRequest.get("payment/config");
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
        script.async = true;
        script.onload = () => {
            setSdkReady(!sdkReady);
        }
        document.body.appendChild(script);
    };

    useEffect(() => {
        if (!window.paypal) {
            addPaypalScript()
        } else {
            setSdkReady(true);
        }
    }, [])

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
                                    <Form.Check onClick={() => handleSelect(product)} />
                                    <Image src={product.img} />
                                    <Details>
                                        <ProductName><b>Sản Phẩm: </b>{product.title} </ProductName>
                                        <ProductColor ><b>Color: </b>{product.color}</ProductColor>
                                        <ProductSize><b>Size: </b>{product.size}</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Remove onClick={() => handleMinusProduct({ _id: product._id, size: product.size, color: product.color })} style={{ cursor: 'pointer' }} />
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                        <Add onClick={() => handlePlusProduct({ _id: product._id, size: product.size, color: product.color })} style={{ cursor: 'pointer' }} />
                                        <Delete onClick={() => handleRemoveClick({ _id: product._id, size: product.size, color: product.color })} style={{ cursor: 'pointer' }} />
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
                            <SummaryItemText>Tổng tiền hàng</SummaryItemText>
                            <SummaryItemPrice>{formatVND(total)}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Phí vận chuyển</SummaryItemText>
                            <SummaryItemPrice>{formatVND(total >= 300000 ? '0' : '30000')}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText type="total">Tổng thanh toán</SummaryItemText>
                            <SummaryItemPrice>{formatVND(totalAndShip)}</SummaryItemPrice>

                        </SummaryItem>

                        <Button onClick={() => {
                            if (productSelect.length > 0) {
                                handleShow()
                            } else {
                                toast.error("Vui lòng chọn sản phẩm.")
                            }
                        }} >Mua hàng</Button>

                    </Summary>
                </Bottom>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thông tin đơn hàng</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form >
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Tên người nhận</Form.Label>
                                    <Form.Control type="text" name='username' placeholder="" value={inputs.username} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Số điện thoại</Form.Label>
                                    <Form.Control type="text" name='phone' placeholder="" onChange={handleChange} value={inputs.phone} />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Địa chỉ nhận hàng</Form.Label>
                                <Form.Control placeholder="" name='address' onChange={handleChange} value={inputs.address} />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridState" >
                                    <Form.Label></Form.Label>
                                    <Form.Select name='payments' onChange={handleChange} >
                                        <option value={''}>Phương thức thanh toán</option>
                                        <option value={'cod'}>Thanh toán khi nhận hàng</option>
                                        <option value={'paypal'}>Thanh toán bằng paypal</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Đóng
                        </Button>
                        {
                            inputs.payments === 'cod' && <Button variant="primary" onClick={handleOrder} > Đặt hàng </Button>
                        }

                        {
                            inputs.payments === 'paypal' && (

                                <div className='w-100'>
                                    <PayPalButton
                                        amount="100"
                                        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                        onSuccess={(details, data) => {
                                            alert("Transaction completed by " + details.payer.name.given_name);

                                            // OPTIONAL: Call your server to save the transaction
                                            return fetch("/paypal-transaction-complete", {
                                                method: "post",
                                                body: JSON.stringify({
                                                    orderID: data.orderID
                                                })
                                            });
                                        }}
                                        onError={() => {
                                            toast.error("Transaction failed");
                                        }}

                                    />
                                </div>
                            )}


                    </Modal.Footer>
                </Modal>
            </Wrapper>
            <Footer />
        </Container>

    )
}

export default Cart