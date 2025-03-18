'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', purchase: 55000, sales: 40000 },
  { name: 'Feb', purchase: 50000, sales: 30000 },
  { name: 'Mar', purchase: 42000, sales: 35000 },
  { name: 'Apr', purchase: 39080, sales: 27800 },
  { name: 'May', purchase: 48000, sales: 18900 },
  { name: 'Jun', purchase: 38000, sales: 23900 },
  { name: 'Jul', purchase: 38000, sales: 23900 },
  { name: 'Aug', purchase: 38000, sales: 23900 },
  { name: 'May', purchase: 38000, sales: 23900 },
  { name: 'Jun', purchase: 38000, sales: 23900 },
];

const SalesCharts = () => {
  return (
    <div className="w-full h-80 bg-white p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => value.toLocaleString()}
            domain={[10000, 60000]}
            tickCount={6}
          />
          <Tooltip />
          <Legend iconType="circle" align="center" verticalAlign="bottom" />
          <Bar
            dataKey="purchase"
            fill="#B22222"
            barSize={15}
            radius={[5, 5, 0, 0]}
          />
          <Bar
            dataKey="sales"
            fill="#FF9999"
            barSize={15}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesCharts;
