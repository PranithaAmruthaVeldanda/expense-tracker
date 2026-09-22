import { useState } from 'react'
import './App.css'
import Header from './Header'
import ExpenseForm from './ExpenseForm'


type Expense = {
  amount: string
  description: string
}

function App() {
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')

function addExpense() {
  console.log('Add expense clicked')
}
  return (
    <div>
      <Header />
      <ExpenseForm  
      description={description} 
      setDescription={setDescription} 
      amount={amount} 
      setAmount={setAmount}
      onAddExpense={addExpense}/>
    </div>
  )
}


export default App
