import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  console.log(props.items);
    const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
     return expense.date.getFullYear().toString() === filteredYear;
  });
  

    return (
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

        {/* {
          filteredExpenses.length === 0 ? (
            <p>No expenses found.</p>
          ) : (
            filteredExpenses.map((expense) =>(
              <ExpenseItem 
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
              />
              ))
          )
        } */}
        <ExpensesChart expenses = {filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
    
      </Card>
    );
  }
  
  export default Expenses;