import './App.css'

type ExpenseFormProps = {
    amount: string
    setAmount: (value: string) => void
    description: string
    setDescription: (value: string) => void
    onAddExpense: () => void
}

function ExpenseForm(props: ExpenseFormProps) {

    return (
        <div>
            <input 
            type="text" 
            placeholder="Enter expense description " 
            value={props.description}
            onChange={(e) => props.setDescription(e.target.value)} ></input>
            <input 
            type="number" 
            placeholder="Enter expense amount" 
            value={props.amount} 
            onChange={(e) => props.setAmount(e.target.value)}></input>
            <button onClick={props.onAddExpense}> 
                Add expense 
            </button>
        </div>
    )
}

export default ExpenseForm;