import styled from "styled-components";

export const Button = styled.button < { $primary?: boolean; $small?: boolean }> `
    display: block;
    background: ${props => (props.$primary ? '#155DFC' : '#eeeeeeff')};
    color: ${props => (props.$primary ? '#ffffffff' : '#363636ff')};;
    font-size: ${props => (props.$small ? '0.9rem' : "1rem")};
    padding: 10px;
    border: none;
    border-radius: 8px;
    margin: 5px;

    &:hover{
        cursor: pointer;
        background: ${props => (props.$primary ? '#034cebff' : '#d1d1d1ff')};
    }
        
    &:active{
    background: ${props => (props.$primary ? '#0051ffff' : '#a09e9eff')};;
    }
    
    &:disabled{
     background: ${props => (props.$primary ? '#a3c0ffff' : '#c7c7c7ff')};;
    }
`

export const Input = styled.input<{ $dark?: boolean; $small?: boolean, $alternative?: boolean }>`
    background: ${props => props.$alternative ? '#e9e9e9ff' : '#fafafaff'};
    padding: 10px;
    border: ${props => props.$alternative ? 'none' : "1px solid #d6d6d6fa"};
    border-radius: 5px;
    width: ${props => props.$small ? '100px;' : '100%'};
    &:focus {
     outline: ${props => props.$alternative ? 'none' : '1px solid #747474ff'};
    }
    &::placeholder{
        color: ${props => props.$dark ? 'white' : 'gray'};
    }
`
export const Select = styled.select`
    padding: 5px;
    border-radius: 5px 5px 5px 5px;
    border-color: #b3b3b3ff;
    color: #464545ff;
`

export const DefaultDiv = styled.div`
    width: 100%;
    height: 100%;
    max-width: calc(100% - 20px);
    max-height: calc(100% - 20px);
    border-radius: 10px;
    background-color: rgb(252, 251, 251);
    box-sizing: border-box;
    box-shadow: 1px 1px 4px rgb(119, 119, 119);
    overflow: hidden;
`