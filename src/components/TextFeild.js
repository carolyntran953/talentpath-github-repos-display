import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
`

const TextInput = styled.input`
    width: 460px;
    height: 48px;
    margin-top: 26px;
    background: #F8FAFC;
    border-radius: 4px;
    border: none;
    text-align: left;
    position: static;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 2px 0px;

    &:focus {
        outline: none;
        border: 1.5px solid #4361ad;
        border-radius: 3px;
    }
`

const TextLabel = styled.label`
    width: 480px;
    height: 24px;
    text-align: left;
    color: #6F7482;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.01em;
`

function TextFeild() {
    return (
        <Container>
            <TextLabel for='street' > What is your street address? </TextLabel>
            <TextInput placeholder='Your answer'/>
        </Container>
    )
}

export default TextFeild