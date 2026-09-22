import { useState } from 'react'
import './App.css'


type Expense = {
  id: string
  description: string
  amount: number
}

function App() {

  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [expenses, setExpenses] = useState<Expense[]>([]);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <h2>Track your expenses easily.</h2>
      <input type="text" placeholder="Enter expense description " value={description} onChange={(e) => setDescription((e.target.value))}></input>
      <input type="number" placeholder="Enter expense amount" value={amount}onChange={(e) => setAmount((e.target.value))}></input>
      <button onClick={() => 
      {
        const id = crypto.randomUUID();
        setExpenses([...expenses, {id, description, amount: Number(amount)}]);
        setDescription('');
        setAmount('');
      }}>
        Add Expense
      </button>
      {expenses.map((expense) => (
        <p key={expense.id}>
          {expense.description} - ${expense.amount}
        </p>
      ))}
      <p>Total spent: ${expenses.reduce((sum,expense) => sum + expense.amount, 0)}</p>
    </div>
  )
}

export default App
