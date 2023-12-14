import styled from 'styled-components';


export const Text = styled("form")`
display:flex;
flex-direction:column;
width:${props => props.pageType === "login" ? "30%" : "100%"}; 
margin:25px auto;
border:${props => props.pageType === "login" ? "1px solid #d4d4d4" : "none"};
padding:10px 50px;

h3{
    padding:10px 0px;
}
input{
    padding:8px 30px;
    margin-top:10px;
    text-align:center;
}
button{
    padding:10px 18px;
    margin-top:15px;
    background-color:#333;
    border:none;
    color:#fff;
    font-size:14px;
    border-radius:5px;
    margin-right:10px;
}

`;
export const Header = styled.div`
 display:flex;
 justify-content:space-between;
 padding:5px 10px;
 border-bottom:1px solid #d5d5d5;
 cursor:pointer;

 img{
    width:80px;
 }
 & > ul{
   display:flex;
   list-style:none;
 }
 & > ul > li {
   padding:25px 20px;
   font-size:16px;
   font-weight:700;
 }
 & > ul > li > a {
   text-decoration:none;
   color:#333;
   cursor:progress;
 }
`;

export const Table = styled("table")`
width:100%;
border:1px solid #d4d4d4;
margin-top:20px;
padding:0px 15px;
 & > thead > tr > th {
    border:1px solid #d4d4d4;
 }
 & > tbody > tr > td{
    border:1px solid #d4d4d4;
 }
 & > tbody > tr > td > div > img {
    width:30px;
    padding:3px 5px;
 }
`;

export const UserList = styled("div")`
display:flex;
justify-content:center;
text-align:left;

& > div {
   padding:10px;
}

& > div > img {
   width:350px;
   padding:0px 10px;
}
& > div > h3{
   padding:10px 0px;
}
& > div > h4{
   padding:5px 0px;
}
`;

export const CreateUserBtn = styled.div`
display:flex;
justify-content:flex-end;
 & > button{
   padding:13px 18px;
margin-top:10px;
background-color:#8E8B8D;
border:none;
color:#fff;
font-size:14px;
font-weight:700;
border-radius:5px;
margin-right:20px;
 }

`;

export const PopUser = styled.div`
position:fixed;
top:10%;
left:0;
right:0;
margin:0px auto;
background-color:#fff;
width:500px;
border:1px solid #d4d4d4;
`;

export const UpdateForm = styled.form`
position:fixed;
width:350px;
top:20%;
right:0;
left:0;
margin:0px auto;
background-color:#fff;
border:1px solid #d5d5d5;
padding:10px 50px;
border-radius:5px;
 
h3{
   padding:10px 0px;
   font-size:25px;
}
input {
   padding:8px 18px;
   margin-top:8px;
   text-align:center;
   border-radius:5px;
   border:1px solid #d9d9d9;
}
button {
   padding:8px 18px;
   margin-top:15px;
   margin-right:10px;
   background-color:#808080;
   color:#fff;
   border:none;
   border-radius:5px;
   font-size:14px;
   font-weight:700;
}
`;

export const Loader = styled("div")`
    width:${props => props.type === "user" ? "48px" : "12px"};
    height:${props => props.type === "user" ? "48px" : "12px"};
    border:${props => props.type === "user" ? "5px solid #FFF" : "1px solid #FFF"} ;
    border-bottom-color: #FF3D00;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
`;