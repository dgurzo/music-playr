import styled from 'styled-components';

export const Card = styled("div")`
display: grid;
grid-template-columns: 200px;
grid-template-rows: 200px 50px;
grid-template-areas: "image" "text";
border-radius: 18px;
background: black;
box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
text-align: center;
transition: 0.5s;
cursor: pointer;
margin: 25px 35px;
&:hover {
    transform: scale(1.2);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
}
`;