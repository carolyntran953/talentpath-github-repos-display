import styled from 'styled-components'
import React, {useState} from 'react'
import CustomRadio from './CustomRadio'

function Radio() {
    const [selected, setSelected] = useState('1')

    const RadioContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: left;
        color: #3B4256;
        margin-top: 18px;
        margin-bottom: 18px;
    `
    const RadioQ = styled.p`
        margin-left: 16px;
    `

    const RadioLabel = styled.label`
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;

        cursor: pointer;
        width: 63px;
        height: 24px;
    `

    const RadioInput = styled.input`
    position: static;
    opacity: 0;
    cursor: pointer;
    `

    const RadioSpan = styled.span`
    position: static;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
    background: ${props => props.checked ? '#3B4256' : 'white'};
    `

    const renderRadios = ['1', '2', '3', '4', '5'].map(num => {
        return (
            <CustomRadio 
            value={num}
            selected={selected}
            text={num}
            onChange={setSelected}
            />
        )
    })
    
    return (
        <RadioContainer>
            <p>What is 2+2?</p>
            {renderRadios}
        </RadioContainer>
    )
}

export default Radio