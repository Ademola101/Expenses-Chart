import { HeaderStyle } from './styles/HeaderStyle'
const Header = ({ data }) => {

  const reducer = (sum, value) => sum + value
  const amountArray = data.map(d => d.amount)
  const totalAmount = amountArray.reduce(reducer, 0)
  return (
    <HeaderStyle>

      <small >
        My balance
      </small>
      <div className='amount'>
      &#36; {totalAmount}
      </div>
    </HeaderStyle> )
}

export default Header

