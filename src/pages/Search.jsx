import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from "../components/Footer"
// import Products from "../components/Products"
import { mobile } from "../responsive"
import { useLocation } from "react-router";
import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { publicRequest, userRequest } from "../requestMethods"
import Product from "../components/Product"
import { useSelector } from "react-redux"



const Container = styled.div`

`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const FilterText = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-right: 10px;
    ${mobile({ marginRight: "0px" })}
    
`

const Filter = styled.div`
    display: flex;
    margin-top: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}

`

const Select = styled.select`
    padding: 10px;
    margin-right: 10px;
    ${mobile({ margin: "10px 0px" })}

    `

// const Price = styled.span`

//     font-weight: 600;
//     font-size: 15px;

// `
// const Wrapper = styled.div`
//     display: block;
//     justify-content: center;

// `

const Option = styled.option``


const Search = () => {
    const location = useLocation();
    const [data, setData] = useState([]);
    const [favoriteProducts, setFavoriteProducts] = useState([]);
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("macdinh");
    const iduser = useSelector(state => state.user.currentUser)?._id;
    const parts = location.search.split('=');
    const keyword = parts[1];
 


    useEffect(() => {
        const a = async () => {
            const res = await publicRequest.post('products/search', { keyword: normalizeWord(keyword) });
            if (res.data.status === 'success') {
                setData(res.data.result);
                console.log(res.data);
            }
        }
        if (keyword !== '') {
            a();
        }
    }, [keyword]);
    console.log(data);

    function normalizeWord(keyword) {
        if (!keyword) return ''
        return keyword
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    useEffect(() => {
        const re = async () =>{
          const res =  await userRequest.get(`users/favorites/${iduser}`);
          const idFavorites = res.data.favoriteProduct.map((item) => item._id)
          setFavoriteProducts(idFavorites);
        };
        if (iduser){
          re();
        }
          
      }, [iduser]);

      const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };
    
    return (
        <Container>
            <Announcement />
            <Navbar />
            <FilterContainer>
                <Filter>
                    <FilterText>Filters:</FilterText>
                    <Select name="categories" onChange={handleFilters}>
                        <Option >Categories</Option>
                        <Option value="thethao">Thể Thao</Option>
                        <Option value="bongda">Bóng Đá</Option>
                        <Option value="thidau">Thi Đấu</Option>
                        <Option value="giay">Giày</Option>
                        <Option value="vot">Vợt</Option>
                        <Option value="giay">Găng Tay</Option>
                        <Option value="kinh">Kính</Option>
                        <Option value="non">Nón</Option>
                        <Option value="balo">Balo</Option>
                    </Select>
                    <Select name="color" onChange={handleFilters}>
                        <Option  >Color</Option>
                        <Option>red</Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>yellow</Option>
                        <Option>blue</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option  >Size</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>

                    <FilterText>Sắp Xếp:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="macdinh" >Mặc định</Option>
                        <Option value="cao">Giá (cao-thấp)</Option>
                        <Option value="thap">Giá (thấp-cao)</Option>
                    </Select>

                </Filter>

            </FilterContainer>
            <div>

            {
                data.map((item) => <Product item={item} key={item.id} favorite={favoriteProducts.includes(item._id)} />)

            }
            </div>

          

            <Footer />

        </Container>
    )
}

export default Search