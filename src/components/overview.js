import React from "react";
import { Card, Typography } from "@mui/material";
import { PieChart, Pie, Cell } from "recharts";
import Sidebar from "./sidebar";

const data02 = [
    {
      "name": "Group A",
      "value": 750,
    },
    {
      "name": "Group B",
      "value": 100,
    },
    {
      "name": "Group C",
      "value": 75,
    },
    {
      "name": "Group D",
      "value": 50,
    }
  ];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Overview = () => {
  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content (Takes Remaining Space) */}
      <div className="flex-1 p-6 bg-[#FEFFED]">
        <Typography variant="h4" className="font-bold text-black  mb-4">
          Overview                    
        </Typography>

     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
      {/* Card 1 */}
      <Card className="p-4 shadow-md !bg-black !rounded-xl">
        <Typography className="text-white">Current Balance</Typography>
        <p className="text-4xl font-bold text-white mt-1">$4,836.00</p>
      </Card>

      {/* Card 2 */}
      <Card className="p-4 shadow-md !rounded-xl">
        <Typography className="text-gray-400">Income</Typography>
        <p className="text-4xl font-bold">$3,814.25</p>
      </Card>

      {/* Card 3 */}
      <Card className="p-4 shadow-md !rounded-xl">
        <Typography className="text-gray-400">Expenses</Typography>
        <p className="text-4xl font-bold">$1,700.50</p>
      </Card>
    </div>
  

        {/* Bottom Sections */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {/* Pots & Savings */}
          <Card className="h-40 p-4 grid-cols-2 shadow-md !rounded-xl">
            <Typography className="flex text-lg font-semibold">Pots</Typography>
            <Typography className=" flex text-2xl font-bold">$850</Typography>
            <div className="mt-2 text-sm text-gray-600">
            <p className="flex justify-between">
    <span>Savings</span>
    <span className="ml-2">$159</span>
  </p>
  <p className="flex justify-between">
    <span>Gift</span>
    <span className="ml-2">$40</span>
  </p>
  <p className="flex justify-between">
    <span>Concert Ticket</span>
    <span className="ml-2">$110</span>
  </p>
  <p className="flex justify-between">
    <span>New Laptop</span>
    <span className="ml-2">$10</span>
  </p>
            </div>
          </Card>

          {/* Budget Pie Chart */}
          <Card className="p-4 shadow-md flex-column justify-center items-center h-80 !rounded-xl">
            <Typography variant='h6' className="text-lg font-semibold">Budgets</Typography>
            <div className="flex">
            <PieChart width={330} height={250}>
             <Pie data={data02} cx="50%" cy="50%" innerRadius={80} outerRadius={120}>
                 {data02.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        </PieChart>
        <div className=" text-sm text-gray-600">
        <p className="flex flex-col items-start mt-4 ml-16">
            <span className="relative pl-3">
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-full bg-[#FF8042]"></span>
             Entertainment
            </span>
            <span className="text-xl font-bold ml-3">$50.00</span>
        </p>
        <p className="flex flex-col items-start mt-3 ml-16">
            <span className="relative pl-3">
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-full bg-[#0088FE]"></span>
             Bills
            </span>
            <span className="text-xl font-bold ml-3">$750.00</span>
        </p>
         <p className="flex flex-col items-start mt-3 ml-16">
            <span className="relative pl-3">
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-full bg-[#FFBB28]"></span>
             Dining Out
            </span>
            <span className="text-xl font-bold ml-3">$75.00</span>
        </p>
        <p className="flex flex-col items-start mt-3 ml-16">
            <span className="relative pl-3">
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-full bg-[#00C49F]"></span>
             Personal Care
            </span>
            <span className="text-xl font-bold ml-3">$100.00</span>
        </p>
        </div>
        </div>
          </Card>
        </div>

         {/* Transactions & Recurring Bills */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Transactions */}
          <Card className="p-4 shadow-md">
            <Typography className="text-lg font-semibold">Transactions</Typography>
            <div className="mt-2 text-sm">
              <p>✅ Emma Richardson +$75.50 (19 Aug 2024)</p>
              <p>❌ Savory Bites Bistro -$55.50 (19 Aug 2024)</p>
              <p>❌ Daniel Carter -$42.30 (18 Aug 2024)</p>
              <p>✅ Sun Park +$120.00 (17 Aug 2024)</p>
              <p>❌ Urban Services Hub -$65.00 (17 Aug 2024)</p>
            </div>
          </Card>
        </div>

          {/* Recurring Bills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-4 shadow-md">
            <Typography className="text-lg font-semibold">Recurring Bills</Typography>
            <div className="mt-2 text-sm">
              <p>📌 Paid Bills: $190.00</p>
              <p>📌 Total Upcoming: $194.98</p>
              <p>📌 Due Soon: $59.98</p>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default Overview;
