import styled from "styled-components";

export const Container = styled.div`
height: 100vh;



> header{
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.GREY_700};
    gap: 12px;
  

    > p {
        color: ${({theme}) => theme.COLORS.BLUE};
        font-family: Inter;
        font-size: 40px;
        font-style: normal;
        font-weight: 900;
        line-height: normal;

        > span {
            color: ${({theme}) => theme.COLORS.PURPLE_DARK};
            font-family: Inter;
            font-size: 40px;
            font-style: normal;
            font-weight: 900;
            line-height: normal;
        }
    }
}


`
export const Content = styled.main`
display: flex;
flex-direction: column;
align-items: center;  
width: 100%;

> .alinhar{
    max-width: 700px;

    > .tasks{
        margin-top: 24px;
    }
    > form {
    display: flex;
    gap: 16px;
    margin-bottom: 65px;
    margin-top: -30px;

    >input{
        background-color: ${({theme}) => theme.COLORS.GREY_500};
        border: 1px solid ${({theme}) => theme.COLORS.GREY_700};
        width: 100% ;
        padding: 16px;
        border-radius: 10px;
        outline: none;
        color:  ${({theme}) => theme.COLORS.GREY_300};
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 22.4px */
       
    }
    >button{
        display: flex;
        padding: 16px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border-radius: 8px;
        border: none;
        color: white;
        background-color: ${({theme}) => theme.COLORS.BLUE_DARK};
    }

    
}
> .todo{
       >.top-todo{
        display: flex;
        width: 100%;
        justify-content: space-between;
     

        >.right, .left{
            display: flex;
            gap: 10px;
            align-items: center;
     
        }

        >.left{
            p:nth-child(1){
                color: ${({theme}) => theme.COLORS.BLUE};
                font-family: Inter;
                font-size: 14px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
            p:nth-child(2){
                color: ${({theme}) => theme.COLORS.GREY_200};
                padding: 2px 8px;
                font-family: Inter;
                font-size: 12px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                border-radius: 999px;
                background-color: ${({theme}) => theme.COLORS.GREY_400};     
            }
        }
        >.right{
            p:nth-child(1){
            color: ${({theme}) => theme.COLORS.PURPLE};
            font-family: Inter;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
           }
           p:nth-child(2){
            color: ${({theme}) => theme.COLORS.GREY_200};
            font-family: Inter;
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            padding: 2px 8px;
            border-radius: 999px;
            background: ${({theme}) => theme.COLORS.GREY_400}
           }
           

        }

       }
    }
}



@media screen and (max-width: 768px) {
    .alinhar{
        max-width: 350px;

    }
form{
    flex-direction: column;
    padding-inline: 35px;
    align-items: center;
    min-width: 150px;

    > input{
       width: 100%;
    }
    >button{
        width: 100%;
    }
}
}

`