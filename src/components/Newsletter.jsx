import { Send } from '@mui/icons-material'
import { styled } from 'styled-components'

const Container = styled.div``
const Title = styled.h1``
const Description = styled.div``
const InputContainer = styled.div``
const Input = styled.input``
const Button = styled.button``


const Newsletter = () => {
  return (
    <Container>
        <Title></Title>
        <Description></Description>
        <InputContainer>
            <Input/>
            <Button>
                <Send />
            </Button>
        </InputContainer>

    </Container>
  )
}

export default Newsletter