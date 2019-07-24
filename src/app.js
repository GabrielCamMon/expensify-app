import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";
import { addExpense } from "./actions/expenses";
import { setTextFilter, sortByAmount } from "./actions/filters";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

const expenseOne = store.dispatch(
  addExpense({ description: "Water bill", amount: 2000, createdAt: 2000 })
);

const expenseTwo = store.dispatch(
  addExpense({ description: "Gas bill", amount: 4000, createdAt: 1000 })
);

store.dispatch(setTextFilter("Gas"));
store.dispatch(sortByAmount());

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById("app"));
