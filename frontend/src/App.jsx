import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import "./App.css";
import { useFinanceStore } from "./store/financeStore.js";
import { Toaster } from "react-hot-toast";
import AddTransaction from "./pages/addTransaction";
import TransactionList from "./pages/transactionList";
import Chart from "./pages/chart";

function App() {
  const { getTransactions } = useFinanceStore();

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6 ">
      <Toaster />
      <Card>
        <AddTransaction />
      </Card>
      <Card>
        <TransactionList />
      </Card>
      <Card>
        <Chart />
      </Card>
    </div>
  );
}

export default App;
