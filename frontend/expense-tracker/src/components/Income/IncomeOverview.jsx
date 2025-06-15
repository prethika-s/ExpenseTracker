import React, { useEffect, useState } from 'react';
import { LuPlus } from "react-icons/lu";
import CustomBarChart from '../Charts/CustomBarChart';
import { prepareIncomeBarChartData } from '../../utils/helper'; // ✅ Make sure this exists and returns correct data

const IncomeOverview = ({ transactions, onAddIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (transactions?.length > 0) {
      const result = prepareIncomeBarChartData(transactions);
      setChartData(result);
    }
  }, [transactions]);

  return (
    <div className="card">
      <div className="flex justify-between items-center">
        <div className="">
          <h5 className="text-lg">Income Overview</h5>
          <p className="text-xs text-gray-400 mt-0.5">
            Track your earnings over time and analyze your income trends.
          </p>
        </div>
        <button
          onClick={onAddIncome}
          className="add-btn"
        >
          <LuPlus className="text-lg" />
          Add Income
        </button>
      </div>

        <div className="mt-10">
            <CustomBarChart data={chartData} />
        </div>
    </div>
  );
};

export default IncomeOverview;
