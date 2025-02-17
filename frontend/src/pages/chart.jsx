import { useFinanceStore } from "../store/financeStore.js";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const Chart = () => {
  const { transactions } = useFinanceStore();

  const sortedTransactions = transactions.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-4">Monthly Expenses</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={sortedTransactions.map((tx) => ({
              ...tx,
              date: formatDate(tx.date),
            }))}
          >
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#8884d8" className="" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default Chart;
