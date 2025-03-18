
import React from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

interface ChartDisplayProps {
  type: 'bar' | 'line' | 'pie';
  data: any[];
  dataKey: string;
  xAxisKey?: string;
  title: string;
  colors?: string[];
  height?: number;
}

const ChartDisplay: React.FC<ChartDisplayProps> = ({
  type,
  data,
  dataKey,
  xAxisKey = 'name',
  title,
  colors = ['#26C96F', '#26C96F99', '#26C96F66', '#26C96F33'],
  height = 300,
}) => {
  const renderChart = () => {
    switch (type) {
      case 'bar':
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis 
              dataKey={xAxisKey} 
              tick={{ fill: '#999' }} 
              axisLine={{ stroke: '#444' }}
            />
            <YAxis 
              tick={{ fill: '#999' }} 
              axisLine={{ stroke: '#444' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#222', 
                border: '1px solid #444',
                borderRadius: '4px',
                color: '#fff'
              }} 
            />
            <Bar dataKey={dataKey} fill={colors[0]} radius={[4, 4, 0, 0]} />
          </BarChart>
        );
      
      case 'line':
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis 
              dataKey={xAxisKey} 
              tick={{ fill: '#999' }} 
              axisLine={{ stroke: '#444' }}
            />
            <YAxis 
              tick={{ fill: '#999' }} 
              axisLine={{ stroke: '#444' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#222', 
                border: '1px solid #444',
                borderRadius: '4px',
                color: '#fff'
              }} 
            />
            <Line 
              type="monotone" 
              dataKey={dataKey} 
              stroke={colors[0]} 
              strokeWidth={2} 
              dot={{ fill: colors[0], r: 4 }}
              activeDot={{ r: 6, fill: colors[0] }}
            />
          </LineChart>
        );
      
      case 'pie':
        return (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey={dataKey}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#222', 
                border: '1px solid #444',
                borderRadius: '4px',
                color: '#fff'
              }} 
            />
          </PieChart>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="bg-white/5 p-4 rounded-lg border border-white/10 h-full">
      <h3 className="text-sm font-medium mb-4">{title}</h3>
      <div style={{ height: height, width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartDisplay;
