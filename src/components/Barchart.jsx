import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar, Cell } from 'recharts'
import { BarchartStyle } from './styles/BarchartStyle'
import Footer from './Footer'

const Barchart = ({ data }) => {

  const red = 'hsl(10, 79%, 65%)'
  const blue = 'hsl(186, 34%, 60%)'
  const getColor = (group) => {
    const amount = data.map(d => d.amount)
    const maxAmount = Math.max(...amount)

    if (group === maxAmount){
      return blue
    }
    return red


  }
  return (

    <BarchartStyle>
      <strong> Spending - Last 7 days</strong>

      <BarChart width={500} height={250} data={data}>


        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar barSize={30} dataKey="amount" fill= ' hsl(10, 79%, 65%)'> {data.map((d) => {
          return <Cell key={d.amount} fill={getColor(d.amount)}/>
        })}
        </Bar>
      </BarChart>

      <Footer/>
    </BarchartStyle>
  )
}

export default Barchart
