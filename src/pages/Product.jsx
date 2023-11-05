import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from "../components/Footer"
import '../App.css'
import { Add, FavoriteBorderOutlined, MoreVert, Remove, Send } from "@mui/icons-material"
import { mobile } from "../responsive"
import { useLocation, useHistory } from "react-router-dom";
import { useCallback, useEffect, useState } from "react"
import { userRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import formatVND from "../util/formatVND"
import Rating from "../components/Rating"
import AverageRating from "../components/AverageRating"
import '../css/Product.css';
import toast from "react-hot-toast"


const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}

`
const ImgContainer = styled.div`
   
    display: flex;
    border : 1px solid lightgray;

`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}

`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}

`
const Title = styled.h1`
    font-weight: 300;
`
const Description = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}

`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}

`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover {
     background-color: #f8f4f4;
    }
    
`

const Bottom = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`

const Input = styled.input` 
    width: 100%;
    padding: 10px;
    display: flex;
    box-sizing: border-box;
`

const Comment = styled.div`
   display: flex;
   position: relative;
   width: 80%;
`
const CommentEdit = styled.div`
    width: 100%;
    display: flex;
`

const CommentShow = styled.div`
    border: 1px solid #ccc;
    width: 80%;
`

const TitleComment = styled.div`
    font-weight: bold;
    font-size: 20px;
`

const Ul = styled.ul`
    list-style-type: none; 
    padding: 0;
`

const Li = styled.li`
    margin-bottom: 10px;
    padding: 10px; 
`

const Strong = styled.strong``



const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);
    const next = useHistory();
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [avgRate, setAvgRate] = useState();
    const [commentEdit, setCommentEdit] = useState();
    const [handleCommentId, setHandleCommentId] = useState();
    const [refresh, setRefresh] = useState(false);


    const hanldeRemoveComment = async (commentId) => {
        const res = await userRequest.post(`users/comments/${commentId}`, {
            productId: product._id
        })
        setRefresh(!refresh);

    }

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await userRequest.get("products/find/" + id);
                setProduct(res.data);
                fetchComments(id);

            } catch { }
        };
        getProduct();

    }, [id, refresh]);

    const iduser = useSelector(state => state.user.currentUser)?._id;
    const favorites = async (id) => {
        if (!iduser) {
            next.push('/login');
        } else {
            await userRequest.post(`users/favorites/${iduser}`, { productId: id });
        }
    }

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

    const handleClick = () => {
        if (!user) {
            next.push("/login");
        } else {

            if (!size) {
                toast.error("Vui lòng chọn size!");
            }
            if (!color) {
                toast.error("Vui lòng chọn màu sắc!");
            }
            if (size && color) {
                dispatch(
                    addProduct({ ...product, quantity, color, size })

                );
                toast.success("Thêm vào giỏ hàng thành công");
            }

        }

    };

    const handleCommentEditSubmit = async (commentId) => {
        try {
            await userRequest.put(`users/comments/${commentId}`, {
                commentId,
                content: commentEdit
            });
            setCommentEdit('');
            fetchComments(product._id); // Refresh comments after submitting a new one
            setHandleCommentId("");
        } catch (error) {
            console.error('Lỗi gửi bình luận', error);
        }
    };

    const fetchComments = async (productId) => {
        try {
            const res = await userRequest.get(`users/${productId}/comments`);
            const latestComments = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);
            setComments(latestComments);
        } catch (error) {
            // console.error("Lỗi khi tìm nạp nhận xét", error);
        }
    };
    const userId = useSelector(state => state.user.currentUser)?._id;
    const handleCommentSubmit = async () => {
        try {
            await userRequest.post('users/comments', {
                userId, // Replace with the actual user ID
                productId: product._id,
                content: comment
            });
            setComment('');
            if (product._id) {
                fetchComments(product._id); // Refresh comments after submitting a new one
            } else {
                next.push("/login");
            }
        } catch (error) {
            console.error('Lỗi gửi bình luận', error);
        }
    };

    useEffect(() => {
        const totalRate = product.rate?.reduce((acc, cur) => acc + cur.star, 0);
        setAvgRate(totalRate / product.rate?.length);
    }, [product]);

    const handleRefresh = useCallback((state) => {
        setRefresh(state);
    }, []);

    return (
        <Container >
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <AverageRating avgRate={avgRate} />
                    <Description>{product.description}</Description>
                    {product.oldprice ?
                        <div className="d-flex  align-items-center ">
                            <div style={{fontSize: "18px", textDecoration: "line-through", marginRight: "10px"}}>{formatVND(product.oldprice)}</div>
                            <Price>{formatVND(product.price)}</Price>
                        </div>
                        : <Price>{formatVND(product.price)}</Price>}

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Màu sắc:</FilterTitle>

                            {product.color?.map((c) => (
                                <div key={c} className={`radio-color ${c === color ? 'active' : ''}`} style={{ backgroundColor: c }}
                                    onClick={() => setColor(c)}
                                >

                                </div>
                            ))}
                        </Filter>

                        <Filter>
                            <FilterTitle>Size:</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                                <FilterSizeOption >Chọn size</FilterSizeOption>

                                {product.size?.map((s) => (
                                    <FilterSizeOption key={s}>{s}</FilterSizeOption>

                                ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")} />
                        </AmountContainer>
                        <FavoriteBorderOutlined onClick={() => favorites(product._id)} style={{ cursor: "pointer" }} />
                        <Button onClick={handleClick}>Thêm vào giỏ hàng</Button>

                    </AddContainer>

                </InfoContainer>
            </Wrapper>
            <Wrapper onClick={() => {
                setHandleCommentId("")
            }}>
                <Bottom>
                    <Rating productId={product._id} handleRefresh={handleRefresh} refresh={refresh} />
                    <Comment>
                        <Input
                            type="text"
                            placeholder="Sản phẩm thoáng mát, thoải mái...."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <Button onClick={handleCommentSubmit}><Send /></Button>
                    </Comment>
                    <CommentShow>

                        <TitleComment>Bình luận sản phẩm</TitleComment>
                        <Ul>
                            {comments.map((comment) => (
                                // {comments !== null ? : 'Chưa có bình luận '} 
                                <div key={comment._id} >

                                    <Li className={`commentContainer`}>
                                        <Strong>{comment.username}</Strong>
                                        <div className="moreComments">
                                            {comment.content}
                                            <div >

                                                <div className="actionIcons">

                                                    <MoreVert    >
                                                    </MoreVert>
                                                    <div className="menuChildAction">
                                                        <div onClick={(e) => {
                                                            e.stopPropagation()
                                                            setCommentEdit(comment.content)
                                                            setHandleCommentId(comment._id)
                                                        }}>
                                                            Chỉnh sửa
                                                        </div>
                                                        <div onClick={() => hanldeRemoveComment(comment._id)}>
                                                            Xóa
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className={`commentEdit  ${comment._id === handleCommentId ? 'active' : ''} `}>
                                            {/* onBlur={() => setHandleCommentId("")} */}
                                            <CommentEdit onClick={(e) => e.stopPropagation()} >
                                                <Input
                                                    type="text"
                                                    placeholder={comment.content}
                                                    value={commentEdit}
                                                    onChange={(e) => setCommentEdit(e.target.value)}

                                                />
                                                <Button onClick={() => handleCommentEditSubmit(comment._id)}><Send /></Button>
                                            </CommentEdit>
                                        </div>

                                    </Li>

                                </div>
                            ))}
                        </Ul>
                    </CommentShow>
                </Bottom>
            </Wrapper>
            <Footer />

        </Container>

    )
}

export default Product