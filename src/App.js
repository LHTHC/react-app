import { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpence';
import Expences from './components/Expenses/Expences';

const App = () => {
  const dummyExpenses = [
    {
      title: 'Car insurance',
      amount: 250.32,
      date: new Date(2021, 2, 23),
      id: 'e1',
    },
    {
      title: 'Some Books',
      amount: 160.38,
      date: new Date(2021, 3, 8),
      id: 'e2',
    },
    { title: 'Courses', amount: 1232, date: new Date(2021, 8, 6), id: 'e3' },
    {
      title: 'Toilet Paper',
      amount: 124,
      date: new Date(2020, 4, 14),
      id: 'e4',
    },
  ];

  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expence) => {
    setExpenses((prevState) => {
      return [expence, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expences items={expenses} />
    </div>
  );
};

export default App;
