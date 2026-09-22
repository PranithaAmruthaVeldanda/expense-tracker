# Expense Tracker

A small React + TypeScript application I'm building to refresh my frontend development skills.

## Tech Stack

* React
* TypeScript
* Vite
* Node.js
* npm
* Git

---

# Git Basics

Git helps me track changes to my project locally.

## 1. Initialize Git

```bash
git init
```

Creates a `.git` directory and turns the current project folder into a Git repository.

Usually done **once per project**.

---

## 2. Check Repository Status

```bash
git status
```

Shows:

* Current branch
* Modified files
* Untracked files
* Changes staged for commit
* Whether the working tree is clean

Example:

```text
On branch main
nothing to commit, working tree clean
```

This means there are no uncommitted changes.

---

## 3. Stage Changes

```bash
git add .
```

Moves my current changes into the staging area.

Think:

```text
Working files
     ↓
git add .
     ↓
Staging area
```

I can also stage a specific file:

```bash
git add src/App.tsx
```

---

## 4. Commit Changes

```bash
git commit -m "Build expense tracker state"
```

Creates a permanent snapshot of the staged changes in my **local Git repository**.

A commit has an ID, for example:

```text
a1e9aa3
```

Think:

```text
Staging area
     ↓
git commit
     ↓
Local Git history
```

---

## 5. View Commit History

```bash
git log --oneline
```

Shows previous commits in a compact format.

Example:

```text
a1e9aa3 Build expense tracker state and expense list
```

---

# Local Git vs GitHub

Git and GitHub are not the same thing.

### Git

Git runs on my computer and tracks the history of my project.

```text
My Mac
└── expense-tracker
    └── .git
```

### GitHub

GitHub can store a copy of my Git repository online.

```text
My Mac                    GitHub
   │                         │
   │       git push          │
   └─────────────────────────
```

---

# Remote

A **remote** is the address of another Git repository, usually my GitHub repository.

Check whether my project has a remote:

```bash
git remote -v
```

A remote is usually named:

```text
origin
```

Example:

```text
origin  https://github.com/myusername/expense-tracker.git
```

`origin` is simply a nickname for the remote repository.

---

# Push

```bash
git push
```

Sends my local commits to the remote repository.

Think:

```text
Local Git
   │
   │ git push
   ↓
GitHub
```

Typical workflow after GitHub is connected:

```bash
git add .
git commit -m "Describe my changes"
git push
```

---

# Important Git Commands

| Command                   | Purpose                           |
| ------------------------- | --------------------------------- |
| `git init`                | Create a Git repository           |
| `git status`              | See current changes/status        |
| `git add .`               | Stage all changes                 |
| `git add <file>`          | Stage a specific file             |
| `git commit -m "message"` | Save a snapshot locally           |
| `git log --oneline`       | View commit history               |
| `git remote -v`           | See connected remote repositories |
| `git push`                | Send commits to GitHub            |

---
# Development Environment

## Node.js

**Node.js** allows JavaScript to run outside of the browser.

Normally, JavaScript runs in a browser like Chrome. Node.js lets developers run JavaScript on their computer/server and provides tools needed for modern frontend development.

For this project, tools such as Vite and npm run through Node.js.

Check the installed version:

```bash
node --version
```

Example:

```text
v22.x.x
```

---

## npm

**npm = Node Package Manager**

npm comes with Node.js and is used to:

* Install JavaScript packages
* Manage project dependencies
* Run project scripts

Check the version:

```bash
npm --version
```

Install a package:

```bash
npm install <package-name>
```

Install all dependencies listed in `package.json`:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

### `package.json`

`package.json` describes the project and contains things such as:

* Project information
* Dependencies
* Development dependencies
* npm scripts

Example:

```json
{
  "scripts": {
    "dev": "vite"
  }
}
```

Then:

```bash
npm run dev
```

runs the `dev` script.

---

## nvm

**nvm = Node Version Manager**

nvm allows me to install and switch between different Node.js versions.

This is useful because different projects may require different Node versions.

For example:

```bash
nvm install 22
```

Install Node.js version 22.

Use a specific version:

```bash
nvm use 22
```

See installed Node versions:

```bash
nvm ls
```

See available Node versions:

```bash
nvm ls-remote
```

Check the currently active Node version:

```bash
node --version
```

### Why use nvm?

Without nvm, I would typically have one Node.js version installed system-wide.

With nvm:

```text
Project A → Node 20
Project B → Node 22
Project C → Node 24
```

I can switch between them when needed.

---

## Relationship Between nvm, Node.js and npm

Think of them like this:

```text
nvm
 │
 │ manages
 ↓
Node.js
 │
 │ includes
 ↓
npm
```

More precisely:

**nvm** → manages Node.js versions

**Node.js** → JavaScript runtime

**npm** → package manager that comes with Node.js

Example:

```text
nvm use 22
      ↓
Node.js 22 becomes active
      ↓
npm associated with that Node.js installation is available
      ↓
npm install / npm run dev
```

---

## Vite

**Vite** is a modern frontend build tool and development server.

When I run:

```bash
npm run dev
```

Vite starts the local development server.

Example:

```text
VITE ready

Local: http://localhost:5173/
```

I can open that address in my browser to see the application.

---

## Homebrew

**Homebrew** is a package manager for macOS.

It makes it easier to install and manage developer tools.

For example:

```bash
brew install nvm
```

Check Homebrew:

```bash
brew --version
```

List installed packages:

```bash
brew list
```

Important distinction:

```text
Homebrew
   ↓
installs developer tools

nvm
   ↓
manages Node.js versions

Node.js
   ↓
runs JavaScript

npm
   ↓
installs/manages JavaScript packages
```

# React Notes

## State

React state stores data that can change during the lifetime of a component.

Example:

```tsx
const [total, setTotal] = useState(0)
```

This gives me two things:

```text
total
  ↓
current state value

setTotal
  ↓
function used to update the state
```

When state changes, React updates the UI that depends on that state.

---

## State Example

```tsx
const [amount, setAmount] = useState('')
```

When the user types:

```text
1000
```

I can update the state:

```tsx
setAmount(e.target.value)
```

---

## Controlled Input

```tsx
<input
  value={description}
  onChange={(e) => setDescription(e.target.value)}
/>
```

`value={description}` means React controls what appears in the input.

If I do:

```tsx
setDescription('')
```

the input becomes empty.

---

## Updating Arrays in React

Instead of modifying the existing array:

```tsx
expenses.push(newExpense)
```

create a new array:

```tsx
setExpenses([...expenses, newExpense])
```

`...expenses` is the **spread operator**.

It copies the existing items into the new array.

Example:

```tsx
const expenses = [10, 20]

const newExpenses = [...expenses, 30]
```

Result:

```tsx
[10, 20, 30]
```

---

## Expense Object

An individual expense can be represented as:

```tsx
{
  description: "Coffee",
  amount: 5
}
```

Multiple expenses can be stored in an array:

```tsx
[
  {
    description: "Coffee",
    amount: 5
  },
  {
    description: "Rent",
    amount: 1000
  }
]
```

---

## TypeScript Type

Instead of letting TypeScript guess the structure, I can define:

```tsx
type Expense = {
  description: string
  amount: number
}
```

Then:

```tsx
const [expenses, setExpenses] = useState<Expense[]>([])
```

This tells TypeScript:

> `expenses` is an array containing `Expense` objects.

---

## Rendering an Array

React can render each expense using `.map()`:

```tsx
{expenses.map((expense) => (
  <p>
    {expense.description} - ${expense.amount}
  </p>
))}
```

For example:

```text
Coffee - $5
Rent - $1000
```

---

# JavaScript Concepts Learned

### Spread operator

```tsx
[...expenses, newExpense]
```

Means:

> Take all existing items from `expenses` and put them into a new array, then add `newExpense`.

### `map()`

```tsx
expenses.map((expense) => ...)
```

Means:

> Go through each item in the array and create something from it.

### `Number()`

```tsx
Number(amount)
```

Converts a string such as:

```text
"1000"
```

into:

```text
1000
```

# React Learning Notes 09/21

## 1. React Components

A React component is a reusable piece of UI.

Example:

```tsx
function Header() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <h2>Track your expenses easily.</h2>
    </div>
  )
}
```

A component can be used inside another component:

```tsx
<Header />
```

---

## 2. `useState`

`useState` allows a component to store information that can change over time.

```tsx
const [amount, setAmount] = useState('')
```

`useState('')` returns two things:

1. The current value → `amount`
2. A function to update the value → `setAmount`

This is array destructuring.

Conceptually:

```tsx
const result = useState('')

const amount = result[0]
const setAmount = result[1]
```

When the setter is called:

```tsx
setAmount('100')
```

React updates the state and re-renders the UI.

---

## 3. State vs Variables

Normal variables don't cause React to update the UI when their values change.

React state does.

```tsx
const [amount, setAmount] = useState('')
```

When `setAmount()` changes the state, React re-renders the component with the new value.

---

## 4. Event Handlers

React event handlers are functions.

```tsx
<button onClick={addExpense}>
  Add Expense
</button>
```

This tells React:

> When the button is clicked, call `addExpense`.

Be careful with:

```tsx
onClick={addExpense()}
```

This calls the function immediately during rendering instead of waiting for the click.

An inline function can also be used:

```tsx
onClick={() => setAmount('')}
```

---

## 5. JSX Curly Braces `{ }`

Curly braces mean:

> I want to use JavaScript inside JSX.

Examples:

```tsx
value={amount}
```

```tsx
{description}
```

```tsx
{expenses.length}
```

```tsx
{expenses.map(...)}
```

A useful mental rule:

**`{ }` → JavaScript inside JSX**

---

## 6. Parentheses `( )`

Parentheses are commonly used for:

### Function parameters

```tsx
function addExpense(amount: number) {
}
```

### Calling functions

```tsx
setAmount('')
```

### Grouping returned JSX

```tsx
return (
  <div>
    <h1>Hello</h1>
  </div>
)
```

Mental rule:

**`( )` → function parameters, function calls, or grouping**

---

## 7. Square Brackets `[ ]`

Square brackets commonly represent arrays.

```tsx
const numbers = [10, 20, 30]
```

They are also used for array destructuring:

```tsx
const [amount, setAmount] = useState('')
```

Mental rule:

**`[ ]` → arrays / array destructuring**

---

## 8. Controlled Inputs

A controlled input is an input whose value is controlled by React state.

```tsx
const [description, setDescription] = useState('')
```

```tsx
<input
  value={description}
  onChange={(e) => setDescription(e.target.value)}
/>
```

The flow is:

```text
User types
    ↓
onChange runs
    ↓
setDescription(...)
    ↓
React state changes
    ↓
Component re-renders
    ↓
Input displays new state
```

Using `value={description}` means React is responsible for the input's displayed value.

This also allows the input to be cleared by:

```tsx
setDescription('')
```

---

## 9. Input Values Are Strings

Even for:

```tsx
<input type="number" />
```

`e.target.value` is a string.

For example:

```tsx
e.target.value
```

might be:

```text
"100"
```

If I need a number:

```tsx
Number(e.target.value)
```

In the Expense Tracker, I keep the input state as a string:

```tsx
const [amount, setAmount] = useState('')
```

and convert it to a number when creating an expense:

```tsx
Number(amount)
```

This also allows the input to be completely empty:

```tsx
setAmount('')
```

---

## 10. Props

Props allow a parent component to pass information to a child component.

In our Expense Tracker:

```text
App
 ↓
ExpenseForm
```

`App` owns the state and passes it to `ExpenseForm`.

Example:

```tsx
<ExpenseForm
  description={description}
  setDescription={setDescription}
  amount={amount}
  setAmount={setAmount}
/>
```

The child receives those values through `props`:

```tsx
function ExpenseForm(props: ExpenseFormProps) {
```

and can use:

```tsx
props.description
props.amount
```

---

## 11. Passing Setter Functions as Props

A parent can pass its state setter function to a child.

Example:

```tsx
setDescription={setDescription}
```

The child can then update the parent's state:

```tsx
props.setDescription(e.target.value)
```

The flow is:

```text
App owns description state
        ↓
passes description to ExpenseForm
        ↓
passes setDescription to ExpenseForm
        ↓
user types in ExpenseForm
        ↓
ExpenseForm calls props.setDescription(...)
        ↓
App's state changes
        ↓
React re-renders
```

This is one way for a child component to communicate changes back to its parent.

---

## 12. Typing Props with TypeScript

Define the expected props:

```tsx
type ExpenseFormProps = {
  amount: string
  setAmount: (value: string) => void
  description: string
  setDescription: (value: string) => void
}
```

For values:

```tsx
amount: string
description: string
```

For functions:

```tsx
setAmount: (value: string) => void
```

This means:

> `setAmount` is a function that accepts a string and doesn't return a value.

---

## 13. Callback Props

A parent can pass a function to a child.

Example:

```tsx
function addExpense() {
  console.log('Add expense clicked')
}
```

Pass it:

```tsx
<ExpenseForm onAddExpense={addExpense} />
```

Define it in the child's props:

```tsx
type ExpenseFormProps = {
  onAddExpense: () => void
}
```

Then the child can call it:

```tsx
<button onClick={props.onAddExpense}>
  Add Expense
</button>
```

The flow is:

```text
App
 │
 │ passes function
 ↓
ExpenseForm
 │
 │ calls function when button is clicked
 ↓
App
```

This is called a **callback prop**.

---

## 14. Component Responsibility

For the Expense Tracker, we are separating responsibilities.

```text
App
 ├── owns application state
 ├── owns expenses
 ├── owns description
 └── owns amount

ExpenseForm
 ├── displays description input
 ├── displays amount input
 └── tells App when Add Expense is clicked
```

The important idea:

> `ExpenseForm` collects form information, while `App` owns the application's expense data.

We don't want `ExpenseForm` to directly manage the entire `expenses` list.

---

## 15. Arrays in React State

An array can be stored in state:

```tsx
const [expenses, setExpenses] = useState<Expense[]>([])
```

To add an item without modifying the existing array:

```tsx
setExpenses([...expenses, newExpense])
```

The spread operator:

```tsx
...expenses
```

takes all existing elements and puts them into a new array.

Example:

```tsx
const expenses = [10, 20, 30]

[...expenses, 40]
```

becomes:

```tsx
[10, 20, 30, 40]
```

Avoid directly mutating React state with methods such as:

```tsx
expenses.push(newExpense)
```

Instead, create a new array.

---

## 16. `.map()`

`.map()` is commonly used to turn an array into rendered React elements.

Example:

```tsx
expenses.map((expense) => (
  <p key={expense.id}>
    {expense.description} - ${expense.amount}
  </p>
))
```

Mental model:

> Go through every item in the array and create something from it.

---

## 17. `key` in React Lists

When rendering a list, React needs a `key` to identify each item.

```tsx
expenses.map((expense) => (
  <p key={expense.id}>
    {expense.description}
  </p>
))
```

The `key` is for React's internal tracking. It isn't displayed to the user.

A stable unique ID is better than using the array index.

---

## 18. `crypto.randomUUID()`

To create a unique ID in the browser:

```tsx
const id = crypto.randomUUID()
```

Example:

```tsx
{
  id,
  description,
  amount
}
```

`crypto.randomUUID()` is available through the browser's global `crypto` object.

There is no need to import Node's `crypto` module for this browser code.

---

## 19. Derived State

The total expense does not need its own state.

Instead of maintaining:

```tsx
const [total, setTotal] = useState(0)
```

we can calculate it from `expenses`:

```tsx
expenses.reduce(
  (sum, expense) => sum + expense.amount,
  0
)
```

The principle is:

> Keep the minimum necessary state and derive values from that state.

Here:

```text
expenses
   ↓
reduce()
   ↓
total
```

`expenses` is the source of truth.

---

# React Mental Model So Far

The most important mental model I've learned:

```text
State
  ↓
UI displays state
  ↓
User interacts with UI
  ↓
Event handler runs
  ↓
State setter updates state
  ↓
React re-renders
  ↓
UI reflects new state
```

For parent/child components:

```text
Parent owns state
      ↓
Parent passes props
      ↓
Child displays/uses props
      ↓
Child calls callback/setter
      ↓
Parent state changes
      ↓
React re-renders
```

## Current Expense Tracker Architecture

```text
App
│
├── Header
│
└── ExpenseForm
      ├── description input
      ├── amount input
      └── Add Expense button
```

Next step:

**Make `addExpense()` actually create an expense and u**


---

# Things I Want to Learn Next

* [ ] Finish expense list UI
* [ ] Understand React `.map()`
* [ ] Understand React `key`
* [ ] TypeScript interfaces/types
* [ ] React components
* [ ] Props
* [ ] Component state
* [ ] Sharing state between components
* [ ] Forms and validation
* [ ] Delete an expense
* [ ] Edit an expense
* [ ] Calculate totals from the expense array
* [ ] React Router
* [ ] API calls
* [ ] Backend
* [ ] Database
* [ ] Deploy the application
