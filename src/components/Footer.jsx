import { FooterStyle } from './styles/FooterStyle'

const Footer = () => {
  return (
    <FooterStyle>
      <small className='total'>
  Total this month: <div>&#36; 100</div>
      </small>
      <div>

        <strong className='percent'>
    +2.1%
        </strong>
        <div className='last'> From last month</div>

      </div>

    </FooterStyle>
  )
}

export default Footer
