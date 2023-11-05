import React, { useState, useEffect } from "react";
import { LocalShipping } from "@mui/icons-material";
import styled, { keyframes } from "styled-components";
const scrollDown = keyframes`
    0% {
        transform: translateY(0);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translateY(-100%);
        opacity: 0;
    }
`;

const Container = styled.div`
    height: 40px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
    flex-direction: column;
    overflow: hidden;
    position: relative;
`;

const AnimatedDiv = styled.div`
    animation: ${scrollDown} 6s linear infinite;
`;

function Announcement() {
    const [visibleIndex, setVisibleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 6000); // Mỗi thành phần sẽ hiển thị trong 6 giây

        return () => clearInterval(interval);
    }, []);

    const messages = [
      //   <LocalShipping key={0} />
        "Miễn phí vận chuyển khi mua tổng hóa đơn trên 300.000VND" ,
        "Chúc bạn có một trải nghiệm thật tốt khi mua sắm tại shop",
        "I love you",
    ];

    return (
        <Container>
            <AnimatedDiv>{messages[visibleIndex]}</AnimatedDiv>
        </Container>
    );
}

export default Announcement;