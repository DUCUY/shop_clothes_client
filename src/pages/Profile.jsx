import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../css/Profile.css";
import { userRequest } from '../requestMethods';
import toast from 'react-hot-toast';
import { loginSuccess } from '../redux/userRedux';
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

const Profile = () => {
    const [inputs, setInputs] = useState({});
    const currentUser = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();

    useEffect(() => {
        setInputs({
            username: currentUser?.username,
            email: currentUser?.email,
            phone: currentUser?.phone,
            address: currentUser?.address
        });
    }, [currentUser])


    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        const res = await userRequest.put(`users/${currentUser._id}`, inputs)
        if (res.data.status === "successs") {
            toast.success("Cập nhật thành công.")
            dispatch(loginSuccess({ ...res.data.data, accsessToken: currentUser.accsessToken }));
        } else {
            toast.error("Cập nhật không thành công!")
        }

    }

    return (
        <div>
            <Announcement />
            <Navbar />

            <Wrapper >
                <Title>Thông tin người dùng</Title>
                <hr />
                <div className='wrapperInputs'>
                    <div className='titleForm' >Cập nhật thông tin người dùng</div >
                    <Form className='wrapperFormInputs'>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Tên người dùng
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="text" name='username' value={inputs?.username} onChange={handleChange} />
                            </Col>

                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Email
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="email" name='email' value={inputs?.email} onChange={handleChange} />
                            </Col>

                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Số điện thoại
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="text" name='phone' value={inputs?.phone} onChange={handleChange} />
                            </Col>

                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Địa chỉ
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="text" name='address' value={inputs?.address} onChange={handleChange} />
                            </Col>

                        </Form.Group>
                        <Col sm={2}>
                            <Button type="submit" onClick={handleUpdate}>Cập nhật</Button>
                        </Col>
                    </Form>
                </div>

            </Wrapper>

            <Footer />

        </div>
    )
}

export default Profile