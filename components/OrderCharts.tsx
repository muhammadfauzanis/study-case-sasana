'use client';

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';

const data = [
  { name: 'Jan', delivered: 3000, ordered: 3500 },
  { name: 'Feb', delivered: 2000, ordered: 1800 },
  { name: 'Mar', delivered: 2800, ordered: 2200 },
  { name: 'Apr', delivered: 3500, ordered: 1500 },
  { name: 'May', delivered: 3200, ordered: 2200 },
];

const OrderChart = () => {
  return (
    <div className="w-full h-80 bg-white">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 20, right: 0, left: -20, bottom: 5 }}
        >
          <defs>
            {/* Gradien untuk Delivered (Letakkan di atas Ordered) */}
            <linearGradient id="colorOrdered" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#D38D4A" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#D38D4A" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis
            tick={{ fontSize: 12 }}
            domain={[0, 4000]}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <Tooltip />
          <Legend iconType="circle" align="center" verticalAlign="bottom" />

          {/* ✅ Area Delivered diletakkan di ATAS Ordered */}
          <Area
            type="monotone"
            dataKey="ordered"
            stroke="#D38D4A"
            fill="url(#colorOrdered)"
            strokeWidth={3}
          />
          <Area
            type="monotone"
            dataKey="delivered"
            stroke="#4A90E2"
            fill="url(#colorDelivered)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderChart;
