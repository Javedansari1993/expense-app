import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";

let DUMMY_EXPENSE = [
  {
    id:'e1',
    title:'School Fee',
    amount: 250,
    date: new Date(2021, 6, 12)
  },
  {
    id:'e2',
    title:'House Rent',
    amount: 230,
    date: new Date(2021, 3, 22)
  },
  {
    id:'e3',
    title:'Books',
    amount: 700,
    date: new Date(2021, 5, 2)
  },
  {
    id:'e4',
    title:'Food',
    amount: 540,
    date: new Date(2021, 6, 5)
  }
];

const App = () => {
  
  const[expenses , setExpenses] = useState(DUMMY_EXPENSE)

  const addExpenseHandler = (expense) => {
    const updateExpense = [expense, ...expenses];
    setExpenses(updateExpense)
  };

  return (
    <div>
      <NewExpense onAddExpnse={addExpenseHandler}/>
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
