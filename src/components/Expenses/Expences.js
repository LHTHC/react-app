import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expences.css';

const Expences = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (filteredYear) => {
    setFilteredYear(filteredYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => {
          return expense.date.getFullYear().toString() === filteredYear ? (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            />
          ) : null;
        })}
      </Card>
    </div>
  );
};

export default Expences;
