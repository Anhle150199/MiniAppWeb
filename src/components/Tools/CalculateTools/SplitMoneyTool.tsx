"use client"
import { useState, useEffect } from 'react';
import 'react-tooltip/dist/react-tooltip.css';

type Person = string;
type Expense = {
  id: string;
  name: string;
  amount: number;
  paidBy: Person;
};
type Transaction = {
  from: Person;
  to: Person;
  amount: number;
};

export default function SplitMoneyTool() {
  const [peopleInput, setPeopleInput] = useState('');
  const [people, setPeople] = useState<Person[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const [newExpense, setNewExpense] = useState<Omit<Expense, 'id'>>({
    name: '',
    amount: 0,
    paidBy: ''
  });


  // Calculate transactions when expenses or people change
  useEffect(() => {
    if (people.length === 0 || expenses.length === 0) {
      setTransactions([]);
      return;
    }

    // Calculate total spent by each person
    const totalSpent: Record<Person, number> = {};
    people.forEach(person => {
      totalSpent[person] = expenses
        .filter(e => e.paidBy === person)
        .reduce((sum, e) => sum + e.amount, 0);
    });

    // Calculate total expense
    const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);
    const average = totalExpense / people.length;

    // Calculate balances
    const balances: Record<Person, number> = {};
    people.forEach(person => {
      balances[person] = totalSpent[person] - average;
    });

    // Calculate transactions
    const newTransactions: Transaction[] = [];
    const sortedPeople = [...people].sort((a, b) => balances[b] - balances[a]);

    let i = 0, j = sortedPeople.length - 1;
    while (i < j) {
      const debtor = sortedPeople[j];
      const creditor = sortedPeople[i];
      const debt = -balances[debtor];
      const credit = balances[creditor];

      if (debt > credit) {
        newTransactions.push({
          from: debtor,
          to: creditor,
          amount: parseFloat(credit.toFixed(2))
        });
        balances[debtor] += credit;
        balances[creditor] = 0;
        i++;
      } else {
        newTransactions.push({
          from: debtor,
          to: creditor,
          amount: parseFloat(debt.toFixed(2))
        });
        balances[creditor] -= debt;
        balances[debtor] = 0;
        j--;
      }
    }

    setTransactions(newTransactions.filter(t => t.amount > 0));
  }, [expenses, people]);

  const addExpense = () => {
    if (!newExpense.name || newExpense.amount <= 0 || !newExpense.paidBy) return;

    setExpenses([
      ...expenses,
      {
        ...newExpense,
        id: Date.now().toString()
      }
    ]);

    setNewExpense({ name: '', amount: 0, paidBy: '' });
  };

  const deleteExpense = (id: string) => {
    setExpenses(expenses.filter(e => e.id !== id));
  };

  return (
    <section
      className="bg-gray-1 pb-8 pt-2 dark:bg-dark-2 lg:pb-[70px] lg:pt-[20px]"
    >

      <div className="container max-w-2xl mx-auto p-4">
        {/* People input */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">Group Members (separate by comma or new line; maximum 30 people)</label>
          <textarea
            className="w-full p-2 border rounded"
            rows={4}
            value={peopleInput}
            onChange={(e) => {
              debugger
              let parsedPeople = e.target.value
                .split(/[\n,;]/)  // Thêm dấu ; vào pattern
                .map(p => p.trim())
                .filter(p => p.length > 0);

              parsedPeople = Array.from(new Set(parsedPeople));

              if (parsedPeople?.length > 30) {
                alert("You can only add up to 30 member.");
                return;
              }
              parsedPeople = parsedPeople.slice(0, 30);

              setPeople(parsedPeople);
              setPeopleInput(e.target.value)
            }}
            placeholder="Enter names separated by commas or new lines"
          />
          <small className="text-gray-500">Count member: {people?.length}</small>
        </div>

        {/* Expenses list */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Expenses</h2>

          {/* Add expense form */}
          <div className="flex flex-wrap gap-4 mb-4">
            <input
              type="text"
              className="flex-1 p-2 border rounded"
              placeholder="Expense name"
              value={newExpense.name}
              onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })}
            />
            <input
              type="number"
              className="w-24 p-2 border rounded"
              placeholder="Amount"
              value={newExpense.amount || ''}
              onChange={(e) => setNewExpense({ ...newExpense, amount: parseFloat(e.target.value) || 0 })}
            />
            <select
              className="flex-1 p-2 border rounded"
              value={newExpense.paidBy}
              onChange={(e) => setNewExpense({ ...newExpense, paidBy: e.target.value })}
            >
              <option value="">Who paid?</option>
              {people.map((person, index) => (
                <option key={person} value={person}>{person}</option>
              ))}
            </select>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={addExpense}
            >
              Add
            </button>
          </div>

          {/* Expenses table */}
          <div className="border rounded overflow-hidden dark:border-gray-700">
            <table className="w-full">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="p-2 text-left dark:text-gray-200">Name</th>
                  <th className="p-2 text-left dark:text-gray-200">Amount</th>
                  <th className="p-2 text-left dark:text-gray-200">Paid By</th>
                  <th className="p-2 text-left dark:text-gray-200">Actions</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map(expense => (
                  <tr key={expense.id} className="border-t dark:border-gray-700">
                    <td className="p-2 dark:text-gray-300">{expense.name}</td>
                    <td className="p-2 dark:text-gray-300">{expense.amount.toFixed(2)}</td>
                    <td className="p-2 dark:text-gray-300">{expense.paidBy}</td>
                    <td className="p-2">
                      <button
                        className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                        onClick={() => deleteExpense(expense.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Transactions */}
        <div>
          <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">Settlements</h2>
          {transactions.length > 0 ? (
            <ul className="space-y-2">
              {transactions.map((t, i) => (
                <li key={i} className="p-2 bg-gray-50 rounded dark:bg-gray-700 dark:text-gray-300">
                  <span className="font-medium dark:text-gray-100">{t.from}</span> should pay{' '}
                  <span className="font-medium dark:text-gray-100">{t.to}</span>{': '}
                  <span className="font-bold dark:text-gray-100">
                    {t.amount.toLocaleString('en', { minimumFractionDigits: 2 })}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">No transactions needed yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}
