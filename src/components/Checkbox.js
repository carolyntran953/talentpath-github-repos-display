import { useState } from 'react';
import styled from 'styled-components';

function Checkbox({name, checked, id, handleCheckedChange}) {

    const BoxCont = styled.div`
        display: inline-block;
        vertical-align: middle;
    `

    const HiddenBox = styled.input.attrs({ type: 'checkbox' })`
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 24px;
        width: 100%;
    `
    
    const Icon = styled.svg`
        fill: none;
        stroke: white;
        stroke-width: 2px;
     `

    const ShownBox = styled.div`
        content:'';
        cursor: pointer;
        display: inline-block;
        top: 0;
        left: 0;
        width: 18px;
        height: 18px;
        border-radius: 10%;
        border-style: solid;
        border-width: 0.1rem;
        border-color: #3B4256;
        background: ${props => props.checked ? '#3B4256' : 'white'};
        ${Icon} {
        visibility: ${props => props.checked ? 'visible' : 'hidden'}
        }
        
    `

    return (
        <BoxCont>
            <HiddenBox
            checked={checked} 
            name={name} 
            onChange={() => handleCheckedChange(id)}/>
            <ShownBox checked={checked}>
                <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                </Icon>
            </ShownBox>
        </BoxCont>
    )
}

export default Checkbox