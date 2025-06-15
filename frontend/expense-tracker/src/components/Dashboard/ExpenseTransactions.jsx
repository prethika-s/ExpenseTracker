import React from "react";
import { LuArrowRight } from "react-icons/lu";
import TransactionInfoCard from "../Cards/TransactionInfoCard";
import moment from "moment";

const ExpenseTransactions = ({ transactions = [], onSeeMore }) => {
  const validTransactions = Array.isArray(transactions) ? transactions : [];

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Expenses</h5>
        <button className="card-btn" onClick={onSeeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-6">
        {validTransactions.length === 0 ? (
          <p className="text-gray-500 text-sm">No expenses in the last 30 days.</p>
        ) : (
          validTransactions.slice(0, 5).map((expense) => (
            <TransactionInfoCard
              key={expense._id}
              title={expense.category}
              icon={expense.icon}
              date={moment(expense.date).format("Do MMMM YYYY")}
              amount={expense.amount}
              type="expense"
              hideDeleteBtn
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ExpenseTransactions;
