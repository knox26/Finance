import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFinanceStore } from "../store/financeStore.js";
import { Toaster, toast } from "react-hot-toast";

const AddTransaction = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const { addTransaction } = useFinanceStore();

  const handleAddTransaction = async () => {
    if (!amount || !description || !date) {
      toast.error("Please fill in all fields.");
      return;
    }
    try {
      await addTransaction({ amount: parseFloat(amount), description, date });
      setAmount("");
      setDescription("");
      setDate("");
      toast.success("Transaction added successfully!");
    } catch (error) {
      toast.error("Failed to add transaction.");
    }
  };

  return (
    <div className="p-1 lg:p-6 max-w-2xl mx-auto space-y-6">
      <Toaster />
      
        <CardContent className="p-4 space-y-4">
          <h2 className="text-xl font-semibold">Add Transaction</h2>
          <Input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Button onClick={handleAddTransaction}>Add</Button>
        </CardContent>

    </div>
  );
};

export default AddTransaction;
