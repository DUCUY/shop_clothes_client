import { styled } from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
    padding: 20px;  
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
`

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const iduser = useSelector(state => state.user.currentUser)?._id;



  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    // cat &&
    if (filters)
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, filters]);

  useEffect(() => {
    if (sort === "macdinh") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "cao") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  useEffect(() => {
    const re = async () =>{
      const res =  await publicRequest.get(`users/favorites/${iduser}`);
      const idFavorites = res.data.favoriteProduct.map((item) => item._id)
      setFavoriteProducts(idFavorites);
    };
    if (iduser){
      re();
    }
      
  }, [iduser]);



  return (
    <Container>
        { filters
            ? filteredProducts.map((item) => <Product item={item} key={item.id} favorite={favoriteProducts.includes(item._id)} />)
            : products
              .slice(0, 100)
              .map((item) => <Product item={item} key={item.id} favorite={favoriteProducts.includes(item._id)}/>)
          }
    </Container>
  )
}

export default Products