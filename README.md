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

---

# My Development Workflow

When I start working:

```bash
cd ~/projects/expense-tracker
npm run dev
```

When I finish a session:

```bash
git status
git add .
git commit -m "message"
```

If the repository is connected to GitHub:

```bash
git push
```

Before making a new change, I can check:

```bash
git status
git log --oneline
```

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
