import { HeaderStyle } from './styles/HeaderStyle';
const Header = ({ data }) => {

  const reducer = (sum, value) => sum + value;
  const amountArray = data.map(d => d.amount);
  const totalAmount = amountArray.reduce(reducer, 0);
  return (
    <HeaderStyle>
      <div className='ma'>
        <small >
        My balance
        </small>
        <div className='amount'>
      &#36; {totalAmount}
        </div>

      </div>

      <div className='logo'>
        <svg width="72" height="48" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle
          fill="#382314" cx="48" cy="24" r="24"/><circle stroke="#FFF" stroke-Width="2" cx="24" cy="24" r="23"/></g></svg>
      </div>
    </HeaderStyle> );
};

export default Header;

