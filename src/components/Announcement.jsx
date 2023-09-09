import {  LocalShipping } from "@mui/icons-material"
import { styled } from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
`


function Announcement() {
  return (
    <Container>
        <LocalShipping /> Free ship toàn quốc đơn từ 300.000 VND trở lên
    </Container>
  )
}

export default Announcement