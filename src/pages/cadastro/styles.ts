import styled from "styled-components";

export const Container = styled.div`
    h1{
        margin-bottom: 2rem;
    }   
    color: #fff;
    height: 86vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: blueviolet;

    form{
        height: 50vh;
        width: 15vw;
        display: flex;
        border-radius: 7px;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #1c1c1c;  
        
        input{
            margin-bottom: 20px;
            padding: 15px;
            border: none;
            outline: none;
            border-radius: 7px;
            width: 200px;
        }
        .button-group{
            display: flex;
            align-items: center;
        }
        button{
            padding: 15px;
            width: 100px;
        }
    }
    .lista{
        height: 30vh;
        width: 30vw;
    }
    .menu{
        height: 10vh;
        width: 30vw;
    }

`