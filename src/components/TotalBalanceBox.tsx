"use client";
import CountUp from 'react-countup';
const TotalBalanceBox = ({accounts = [], totalBanks = 0, totalCurrentBalance = 2343} : {accounts: string[], totalBanks: number, totalCurrentBalance: number}) => {
    return (
      <section className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm mt-4">
        <div className="text-sm text-gray-500 mb-1">{totalBanks} Bank Account</div>
        <div className="text-lg font-semibold text-gray-700">Total Current Balance</div>
        <div className="text-3xl font-bold text-green-600 my-2">$<CountUp end={totalCurrentBalance} /></div>
        <button className="mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-md transition">
          Add Bank
        </button>
      </section>
    );
  };
  
  export default TotalBalanceBox;
  