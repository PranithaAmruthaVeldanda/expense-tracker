import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

type Expense = {
  description: string
  amount: number
}

function App() {
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [expenses, setExpenses] = useState<Expense[]>([]);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <h2>Track your expenses easily.</h2>
      <h3>Total spent : ${total}</h3>
      <p>Current Amount: ${amount}</p>
      <input type="text" placeholder="Enter expense description " value={description} onChange={(e) => setDescription((e.target.value))}></input>
      <input type="number" placeholder="Enter expense amount" value={amount}onChange={(e) => setAmount(Number(e.target.value))}></input>
      <button onClick={() => 
      {
        setTotal(total + Number(amount));
        setExpenses([...expenses, {description, amount: Number(amount)}]);
        setDescription('');
        setAmount('');
      }}>
        Add Expense
      </button>
      {expenses.map((expense) => (
        <p>
          {expense.description} - ${expense.amount}
        </p>
      ))}
    </div>
  )
}

export default App
