import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Cell } from 'recharts'

const Barchart = ({ data }) => {

  const red = ' hsl(10, 79%, 65%)'
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

    <div>
      <p> Barchart</p>

      <BarChart width={730} height={250} data={data}>

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="day" fill="#8884d8" />
        <Bar dataKey="amount" fill= ' hsl(10, 79%, 65%)'> {data.map((d) => {
          return <Cell key={d.amount} fill={getColor(d.amount)}/>
        })}
        </Bar>
      </BarChart>


    </div>
  )
}

export default Barchart
