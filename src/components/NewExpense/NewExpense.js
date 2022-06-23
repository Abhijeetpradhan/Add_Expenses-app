import React from "react";

import './NewExpense.css'

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>{

    const saveExpenseDataHandler = (getExpenseData) =>{

        const newData = {
            ...getExpenseData,
            id:Math.random().toString()
        }

        props.getData(newData);

    }

    return(
        <div className="new-expense">
            <ExpenseForm saveData = {saveExpenseDataHandler} />
        </div>
    )
}


export default NewExpense;