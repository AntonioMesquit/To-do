import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  gap: 12px;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.GREY_500};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.GREY_400};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);

  p {
    color: ${({ theme }) => theme.COLORS.GREY_100};
    font-family: Inter;
    font-size: 14px;
    width: 600px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
    color: ${({ checked }) => (checked ? '#888' : 'inherit')};
  }

  &.checked {
    p {
      text-decoration: line-through;
      color: #888;
    }
    button:nth-child(1){
    img:nth-child(1){
      display: none;
    }
    img:nth-child(2){
      display: block;
    }
    
  }
  
  }

  button {
    background-color: transparent;
    border: none;

    img {
      background-color: transparent;
    }
    
  }
  button:nth-child(1){
    img:nth-child(2){
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
  p{
    width: 250px;
  }  
  }


`;
