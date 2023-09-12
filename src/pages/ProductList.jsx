import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from "../components/Footer"
import Products from "../components/Products"

const Container = styled.div`

`

const FilterContainer  = styled.div`
    display: flex;
    justify-content: space-between;
`

const FilterText = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-right: 10px;
    
`

const Filter = styled.div`
    display: flex;
    margin-top: 20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 10px;
`

const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <FilterContainer>
            <Filter>
                
            </Filter>
            <Filter>
                <FilterText>Product List:</FilterText>
                <Select>
                    <Option disabled selected >Color</Option>
                    <Option>Đỏ</Option>
                    <Option>Trắng</Option>
                    <Option>Đen</Option>
                    <Option>Vàng</Option>
                    <Option>Xanh Dương</Option>
                    <Option>Xanh Lục</Option>
                </Select>
                <Select>
                    <Option disabled selected >Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
                <FilterText>Sắp Xếp:</FilterText>
                <Select>
                    <Option selected >Mặc định</Option>
                    <Option>Giá từ cao - thấp</Option>
                    <Option>Giá từ thấp - cao</Option>
                </Select>
                
            </Filter>
            
        </FilterContainer>
        <FilterContainer>
            <Filter>
                1FaxWECV
            </Filter>
            <Filter>
                <Products />
            </Filter>
        </FilterContainer>
        
        <Footer />

    </Container>
  )
}

export default ProductList