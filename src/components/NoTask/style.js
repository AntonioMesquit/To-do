import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
height: 200px;
margin-top: 60px;


> p:nth-child(2){
color: ${({theme}) => theme.COLORS.GREY_300};
text-align: center;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 22.4px */
margin-top: 16px;
}
> p:nth-child(3){
color: ${({theme}) => theme.COLORS.GREY_300};
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 140%;
}

`