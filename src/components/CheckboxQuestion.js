import { useState } from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';


function CheckboxQuestion() {
    const [checked, setChecked] = useState([])

    const CheckQContainer = styled.div`
        color: #3B4256;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    `
    const OptionHolder = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        width: 63px;
        height: 24px;
        padding-left: 16px;
        padding-top: 16px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    `

    const CheckLabel = styled.label`
        display: flex;
        flex-direction: row;
        align-items: center;
        position: static;
        width: 31px;
        height: 20px;
        left: calc(50% - 31px/2 + 16px);
        top: calc(50% - 20px/2);
        font-size: 14px;
        line-height: 140%;
        border-radius: 8px;
    `
    const CheckText = styled.span`
        height: 20px;
        width: 31px;
        margin-left: 10px;
    `

    function handleCheckedChange(id) {
        if (checked.includes(id)) {
            let newChecked = checked.filter(el => el !== id)
            setChecked(newChecked)
        } else (setChecked([...checked, id]))
    }

    const CheckOption = ({name, id}) => {
        return (
            <OptionHolder>
                <CheckLabel for={name}>
                    <Checkbox name={name} 
                    checked={checked.includes(id)} 
                    id={id}
                    handleCheckedChange={handleCheckedChange}
                    />
                    <CheckText>{name}</CheckText>
                </CheckLabel>
            </OptionHolder>
            )
    }

    const renderCheckOptions = ['Chocolate', 'Vanilla', 'Strawberry'].map((ice, index) =>{
        return (
            <CheckOption name={ice} key={index} id={index}/>
        )
    })

    return (
        <CheckQContainer>
            <p>Which are your favorite ice cream flavors?</p>
            {renderCheckOptions}
        </CheckQContainer>
    )
}

export default CheckboxQuestion