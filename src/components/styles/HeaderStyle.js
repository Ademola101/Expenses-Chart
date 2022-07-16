import styled from 'styled-components'

export const HeaderStyle = styled.header`
background-color: hsl(10, 79%, 65%);
color: white;
width: 500px;
margin-top: 100px;
border-radius: 10px;
margin-right: auto;
margin-left: auto;
display: flex;
gap: 5px;
flex-direction: column;
justify-content: center;
align-items: center;
small {
  margin: 10px;
}

@media (max-width:375px) {
  width: 100%;
  
}

`