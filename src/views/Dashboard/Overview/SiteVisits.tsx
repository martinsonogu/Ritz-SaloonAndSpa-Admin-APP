import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Mon', visits: 130 },
  { name: 'Tue', visits: 780 },
  { name: 'Wed', visits: 330 },
  { name: 'Thu', visits: 240 },
  { name: 'Fri', visits: 420 },
  { name: 'Sat', visits: 390 },
  { name: 'Sun', visits: 890 },
];

const SiteVisits = () => {
  return (
    <div className="w-full">
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data} margin={{ top: 5, right: 30, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={0} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="visits" stroke="#1473E6" strokeWidth={3} activeDot={{ r: 8 }} dot={false}/>
      </LineChart>
      </ResponsiveContainer>
      </div>
  );
};

export default SiteVisits;