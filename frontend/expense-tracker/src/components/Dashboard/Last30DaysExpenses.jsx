import React, { useEffect, useState } from 'react';
import { prepareExpenseBarChartData } from '../../utils/helper';
import CustomBarChart from '../Charts/CustomBarChart';

const Last30DaysExpenses = ({ data }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const result = prepareExpenseBarChartData(data);
      setChartData(result);
    } else {
      setChartData([]);
    }
  }, [data]);

  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-semibold">Last 30 Days Expenses</h5>
      </div>

      {chartData.length > 0 ? (
        <CustomBarChart data={chartData} />
      ) : (
        <p className="text-sm text-gray-500">No expense data available for the last 30 days.</p>
      )}
    </div>
  );
};

export default Last30DaysExpenses;
