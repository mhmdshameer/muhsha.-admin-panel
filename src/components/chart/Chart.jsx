import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({title, data, dataKey, grid}) => {

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          {grid && <CartesianGrid stroke="#D3D3D3" strokeDasharray="5 5"/>}
          <XAxis dataKey={dataKey} stroke="#6A7BA2" />
          <Line type="monotone" dataKey={dataKey} stroke="#4682B4" />
          <Tooltip/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
