import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
`

const Wrapper = styled.div`
    
`

const Top = styled.div`  
    display: flex;

`
const Left = styled.div`
    padding: 20px;
    width: 100%;
    height: 100vh;      
    display: flex;

`
const Rigth = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

`


const Image = styled.img`
    object-fit: cover;
    image-rendering: auto;
    width: 100%;
    height: 80%;   
`

const Title = styled.h1`
    display: flex;
    justify-content: center;
    font-weight: 500;
    font-size: 25px;
    font-style: italic;


`

const Sack = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

`


const Description = styled.div`
    height: auto;
    width: 50%;
    font-weight: 300;
    padding-top: 30px;
    font-style: italic;

`


const Bottom = styled.div`
    display: flex;

`

const Hr = styled.hr`
    width: 80%;
    height: 2px;
`

const About = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Container>
            <Wrapper>
                <Title>Về Cửa Hàng Chúng tôi</Title>
                <Hr />
                <Top>

                    <Left>
                        <Image src="https://vietstore365.vn/uploads/f_647c5a5676d1fa63bbba4990/ca35cecfa76614322ffaf5a15.jpg" />
                    </Left>
                    <Rigth>
                        <Sack>
                            <Description>
                                "Chào mừng bạn đến với cửa hàng thể thao của chúng tôi! Chúng tôi tự hào mang đến cho bạn một bộ sưu tập
                                đa dạng các sản phẩm thể thao. Với chất lượng hàng đầu và sự phục vụ tận tâm, chúng tôi cam kết giúp bạn
                                luôn sẵn sàng cho mọi hoạt động thể thao và cuộc sống năng động. Hãy đến và khám phá ngay hôm nay!"
                            </Description>
                        </Sack>
                    </Rigth>
                </Top>
                <Hr />
                <Bottom>
                    <Left>
                        <Sack>
                            <Description>
                                "Sản phẩm của chúng tôi mang lại sự thoải mái êm ái tối đa cho trải nghiệm của bạn. Với thiết kế đặc quyền và
                                sử dụng các chất liệu cao cấp, sản phẩm của chúng tôi sẽ làm bạn cảm nhận được sự dễ chịu và thoải mái mỗi khi
                                sử dụng. Hãy tận hưởng sự thoải mái mà sản phẩm của chúng tôi mang lại cho cuộc sống hàng ngày của bạn."
                            </Description>
                        </Sack>
                    </Left>
                    <Rigth>
                        <Image src="https://www.elleman.vn/wp-content/uploads/2021/11/30/207413/Bai-tap-bo-tro-cho-nguoi-chay-bo-ELLE-Man-cover.jpg" />
                    </Rigth>
                </Bottom>
            </Wrapper>
        </Container>
        <Footer />
    </div>
  )
}

export default About