import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const expensesReducerDefaultState = [];

//ADD_EXPENSE

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
//REMOVE_EXPENSE

const removeExpense = ({ id }) => ({
  type: "REMOVE_EXPENSE",
  id
});
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_SATE
//SET_END_DATE

//Expense Reducer

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);

    default:
      return state;
  }
};

//Filter Reducers
//text => ',sortBy => 'date,startDate => underfined,endDate =>underfined

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
//Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 300 })
);

const expenseTre = store.dispatch(
  addExpense({ description: "Water", amount: 200 })
);
store.dispatch(removeExpense({ id: expenseOne.expense.id }));

const demoState = {
  expenses: [
    {
      id: "dmfs.md.",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
