import styled from "styled-components";

export const Container = styled.div`

width: 100%;
display: flex;
align-items: flex-start;
margin-bottom: 20px;
gap: 12px;
padding: 16px;
background-color: ${({theme}) => theme.COLORS.GREY_500};
border-radius: 8px;
border: 1px solid ${({theme}) => theme.COLORS.GREY_400};

box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
> p{
color: ${({theme}) => theme.COLORS.GREY_100};
font-family: Inter;
font-size: 14px;
min-width: 500px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 19.6px */
    
}
> button {
    background-color: transparent;
    border: none;

    > img{
        background-color: transparent;
        
    }
}
`