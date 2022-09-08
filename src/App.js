import React from 'react';

import NewExpense from './components/NewExpense/NewExpence';
import Expences from './components/Expenses/Expences';

const App = () => {
  const expenses = [
    { title: 'Car insurance', amount: 250.32, date: new Date(2021, 2, 23) },
    { title: 'Books', amount: 160.38, date: new Date(2021, 3, 8) },
    { title: 'Courses', amount: 1232, date: new Date(2021, 8, 6) },
    { title: 'Toilet Paper', amount: 124, date: new Date(2020, 4, 14) },
  ];

  const addExpenseHandler = (expence) => {
    console.log('in App.js');
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expences items={expenses} />
    </div>
  );
};

export default App;
