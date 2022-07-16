import { HeaderStyle } from './styles/HeaderStyle'
const Header = ({ data }) => {

  const reducer = (sum, value) => sum + value
  const amountArray = data.map(d => d.amount)
  const totalAmount = amountArray.reduce(reducer, 0)
  return (
    <HeaderStyle>

      <div>
        My balance
      </div>
      <div>
        {totalAmount}
      </div>
    </HeaderStyle> )
}

export default Header

