import "./App.css";
import ExpenseList from "./components/Expense-tracker/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./components/Expense-tracker/ExpenseFilter/index";
import ExpenseForm from "./components/Expense-tracker/ExpenseForm";
import categories from "./components/Expense-tracker/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "a", amount: 11, category: "Utilities" },
    { id: 2, description: "bb", amount: 12, category: "Entertainment" },
    { id: 3, description: "ccc", amount: 13, category: "Groceries" },
    { id: 4, description: "dddd", amount: 14, category: "Utilities" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-3">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => handleDelete(id)}
      />
    </>
  );
}
export default App;
