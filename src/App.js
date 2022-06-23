import React, { useState } from 'react';
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

let dummy_expenses = [
  {
    id:'e1',
    title:"School fee",
    amount:200,
    date:new Date(2021,12,23)
  },
  {
    id:'e2',
    title:"Medice costs",
    amount:600,
    date:new Date(2021,10,23)
  },
  {
    id:'e3',
    title:"House rent",
    amount:280,
    date:new Date(2021,3,23)
  },
  {
    id:'e4',
    title:"Movie cost",
    amount:500,
    date:new Date(2021,2,23)
  }
 ];
function App()
{

 const [expenses,setNewExpenses] = useState(dummy_expenses);

 const addExpenseHandler = (data) =>{
  const newUpdatedData = [data , ...expenses];
  setNewExpenses(newUpdatedData);
 };

  return(
    <div>
      <NewExpense getData= {addExpenseHandler}/>
      < Expenses items={expenses} />
    </div>
  );
}


export default App;