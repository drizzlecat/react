import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";

function ExpenseItem(props) {
    // const expenseDate = new Date(2023, 3, 6);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.7;
    const [title, setTitle] = useState(props.title);

    const clickedHandler = function () {
        setTitle('updated!');
        console.log(title);
    };

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__decription">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                <button onClick={clickedHandler}>ChangeTitle</button>
            </Card>
        </li>
    );
}

export default ExpenseItem;
