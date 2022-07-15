import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'

const Barchart = ({ data }) => {
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
        <Bar dataKey="amount" fill="#82ca9d" />
      </BarChart>
    </div>
  )
}

export default Barchart
