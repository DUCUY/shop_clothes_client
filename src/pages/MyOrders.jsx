import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../css/myOrder.css";
import { userRequest } from '../requestMethods';
import toast from 'react-hot-toast';
import formatVND from '../util/formatVND';



const Title = styled.h1`
    display: flex;
    justify-content: center;
    font-weight: 500;
    font-size: 25px;
    font-style: italic;
    margin-top: 20px;
`

const Wrapper = styled.div`
`

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    // const [dataDetail, setDataDetail] = useState();
    const currentUser = useSelector((state) => state.user.currentUser);



    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get(`orders/find/${currentUser._id}`);
                setOrders(res.data);
                console.log(res);
            } catch (err) {
                return err;
            }
        };
        getOrders();
    }, []);

    return (
        <div>
            <Announcement />
            <Navbar />

            <Wrapper >
                <Title>Đơn mua hàng</Title>
                <hr />
                <div>
                    <div className='titleOrder' ></div>
                    {orders?.map(order => (
                        <div key={order} className='OrdersList'>
                            <div className='Order'>
                                <div className='OrderInfo'>
                                    <div className='OrderInfoItem'>Trạng thái: {order.status}</div>
                                    <div className='OrderInfoItem'>Vận chuyển: {order.ship}</div>
                                    <div className='OrderInfoItem'>Phương thức thanh toán: {order.payments}</div>
                                </div>
                                <hr />
                                {order.products?.map(product => {
                                    console.log(product)
                                    return <div className='OrderDetail'>
                                        <img className='OrderDetailItem' src={product.img} alt="" />
                                        <div className='OrderDetailItem'>
                                        <div>Tên sản phẩm: {product.productName}</div>
                                        <div>Size: {product.size}</div>
                                        <div>Size: {product.color}</div>
                                        <div>Số lượng: {product.quantity}</div>
                                        </div>

                                    </div>
                                })}
                                <hr />
                                <div className='OrderPrice'>
                                    <div>Tổng tiền: {formatVND(order.amount)}</div>
                                </div>
                            </div>
                            {/* <div>
                                <button>Hủy</button>
                            </div> */}
                        </div>
                    ))}

                </div>

            </Wrapper>

            <Footer />

        </div>
    )
}

export default MyOrders