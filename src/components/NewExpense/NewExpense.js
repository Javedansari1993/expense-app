import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enterExpenseData) => {
        const expenseData = {
            id : Math.random().toString(),
            ...enterExpenseData
        }

        props.onAddExpnse(expenseData)
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;