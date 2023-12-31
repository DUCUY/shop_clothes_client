import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from "../components/Footer"
import Products from "../components/Products"
import { mobile } from "../responsive"
import { useLocation } from "react-router";
import { useState } from "react"



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

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("macdinh");


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
                        <Option>Color</Option>
                        <Option>red</Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>yellow</Option>
                        <Option>blue</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option>Size</Option>
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
            <FilterContainer>
                <Products cat={cat} filters={filters} sort={sort} />
            </FilterContainer>

            <Footer />

        </Container>
    )
}

export default ProductList