import React from "react";
import { Home, AccountBalance, Receipt, Savings } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="w-64 bg-black text-white p-5 hidden md:block h-screen">
      <h2 className="text-xl font-bold text-center">finance</h2>
      <ul className="mt-5 space-y-4">
        <li className="flex items-center gap-2 p-2"><Home /> Overview</li>
        <li className="flex items-center gap-2 p-2"><AccountBalance /> Transactions</li>
        <li className="flex items-center gap-2 p-2"><Receipt /> Budgets</li>
        <li className="flex items-center gap-2 p-2"><Savings /> Pots</li>
      </ul>
    </div>
  );
};

export default Sidebar;