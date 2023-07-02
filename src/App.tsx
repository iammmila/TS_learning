import "./App.css";
import ExpenseList from "./components/Expense-tracker/ExpenseList";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "a", amount: 11, category: "utilities1" },
    { id: 2, description: "bb", amount: 12, category: "utilities2" },
    { id: 3, description: "ccc", amount: 13, category: "utilities3" },
    { id: 4, description: "dddd", amount: 14, category: "utilities4" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  return (
    <>
      <ExpenseList expenses={expenses} onDelete={(id) => handleDelete(id)} />
    </>
  );
}
export default App;
