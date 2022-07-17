import styled from 'styled-components';

export const HeaderStyle = styled.header`
background-color: hsl(10, 79%, 65%);
color: white;
width: 500px;
margin-top: 50px;
border-radius: 10px;
margin-right: auto;
margin-left: auto;
display: flex;
gap: 1px;
flex-direction: row;
justify-content: center;
align-items: flex-start;
.ma {
  margin-top: 20px;
  margin-bottom: 20px;
}

.logo {
  width: 400px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.logo > svg {
  margin-left: 300px;
}

small {
  margin-left: 10px;
  margin-top: 5px;
  text-align: start;

}

.amount {
  margin-left: 10px;
  margin-top: auto;
  text-align: start;
  font-weight: 700;

}

@media (max-width:400px) {
  
}

`;