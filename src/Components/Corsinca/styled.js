import styled from "styled-components";


export const Box = styled.div`
width: 100% ;
max-width: 1440px  ;
>h1{
    padding: var(--padding) ;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 127.47%;
    letter-spacing: -0.5px;
    text-transform: uppercase;
    color: #071828;
    margin: 30px 0px ;
}
`

export const Container = styled.div`
padding: var(--padding);
display: flex ;
justify-content: space-between ;
`
export const Catolog = styled.div`
display: flex ;
gap: 0px 20px ;

`

export const SvetColor = styled.div`
>p{
font-weight: 700;
font-size: 14px;
line-height: 127.47%;
letter-spacing: -0.5px;
color: #656D75;
}
>img{
    padding-top: 12px ;
    padding-left: 5px ;
}
`
export const Price = styled.div`
display: flex;
gap:0px 20px ;
position: relative;
`

export const Model = styled.div`
display: flex;
flex-direction: column ;
justify-content: space-around ;

>p{
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 127.47%;
letter-spacing: -0.5px;
color: #071828;   

}

button{
background: #EFEFEF;
border-radius: 2px;
width: 99px ;
height: 28px ;
border: none ;
padding: 5px 13px ;
cursor:  pointer;
:active{
    border: 1px solid black ;
}
}
`
export const Narxi = styled.div`
font-style: normal;
font-weight: 700;
font-size: 14px;
letter-spacing: -0.5px;
text-transform: uppercase;
color: #656D75;
width: 100% ;
`


export const Sena = styled.div`
width: 100% ;
display: flex;
flex-direction: column ; 
align-items: center ;
`

export const Senamin = styled.div`
font-style: normal;
font-weight: 300;
font-size: 12px;
line-height: 127.47%;

color: #656D75;
`
export const BoxBtn = styled.div`
width: 92px ;
height:49px;
border: 1px solid black;
display: flex;
width: 100% ;
align-items:  center;
justify-content: space-between ;
padding: 5px 5px ;

`

export const Btn = styled.div`
margin: 0px 5px ;
cursor: pointer ;

>button {
    border: 1px solid #00002333 ;
    border-top: none   ;
    border-left: none ;
    border-bottom: none ;
    width: 20px  ;
   height: 20px ;

}
`

export const PriceSena = styled.div`
position: absolute ;
left: 210px ;
top: 15px ;
p{
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 127.47%;
text-align: center;
letter-spacing: -0.5px;
text-transform: uppercase;
color: #071828;
display: flex;
gap: 0px 5px;

}
`




