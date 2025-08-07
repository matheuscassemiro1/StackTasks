import styled from "styled-components";

export const Button = styled.button < { $primary?: boolean; $small?: boolean }> `
    display: block;
    background: ${props => (props.$primary ? '#00ce83' : '#cececeff')};
    color: white;
    font-size: ${props => (props.$small ? '0.9rem': "1.2rem")};
    padding: 5px;
    border: none;
    border-radius: 3px;
    margin: 10px;

    &:hover{
        cursor: pointer;
    }
        
    &:active{
    background: ${props => (props.$primary ? '#01af6fff' : '#a09e9eff')};;
    }
    
    &:disabled{
     background: ${props => (props.$primary ? '#5a9781ff' : '#c7c7c7ff')};;
    }
`

export const Input = styled.input<{ $dark?: boolean; $small?: boolean}>`
    background: #e9e9e9ff;
    padding: 10px;
    border: none;
    width: ${props => props.$small ? '100px;' : '100%'};
    &::placeholder{
        color: ${props => props.$dark ? 'white' : 'gray'};
    }
`

export const Datalist = styled.datalist`
    width: 100px;

`

export const Option = styled.option`

`