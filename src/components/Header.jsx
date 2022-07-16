
const Header = ({ data }) => {

  const reducer = (sum, value) => sum + value
  const amountArray = data.map(d => d.amount)
  const totalAmount = amountArray.reduce(reducer, 0)
  return (
    <header>

      <div>
        My balance
      </div>
      <div>
        {totalAmount}
      </div>
    </header> )
}

export default Header

