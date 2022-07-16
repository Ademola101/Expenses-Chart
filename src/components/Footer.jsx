import { FooterStyle } from './styles/FooterStyle'

const Footer = () => {
  return (
    <FooterStyle>
      <small className='total'>
  Total this month: <div>&#36; 100</div>
      </small>

      <div> From last month</div>
    </FooterStyle>
  )
}

export default Footer
