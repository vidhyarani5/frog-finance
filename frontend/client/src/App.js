// from video
import { BrowserRouter as Router, Routes , Route} from "react-router-dom";
import { useEffect } from "react";

import "./App.css";

import NavigationBar from "./components/NavigationBar.jsx"
import HomePage from "./routes/HomePage.jsx"

import IncomeAdd from "./routes/Money/Income/IncomeAdd";
import IncomeView from "./routes/Money/Income/IncomeView";

import ExpensesAdd from "./routes/Money/Expenses/ExpensesAdd";
import ExpenseView from "./routes/Money/Expenses/ExpensesView";

import BudgetUpdate from "./routes/Money/Budget/BudgetUpdate";
import BudgetView from "./routes/Money/Budget/BudgetView";
import CreateBudget from "./routes/Money/Budget/CreateBudget";

import SavingsAdd from "./routes/Savings/SavingsAdd";
import SavingsProgress from "./routes/Savings/SavingsProgress";
import SavingsAchievements from "./routes/Savings/SavingsAchievements";

import DebtAdd from "./routes/Debt/DebtAdd";
import DebtProgress from "./routes/Debt/DebtProgress";
import DebtPast from "./routes/Debt/DebtPast";

import Stocks from "./routes/Stocks/Stocks";

import LearnMoney from "./routes/Learn/LearnMoney.jsx";
import LearnFinance from "./routes/Learn/LearnFinance";

function App() {

  return (
    <main className="column">
    
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/money/income/add" element={<IncomeAdd />}/>
          <Route path="/money/income/view" element={<IncomeView />} />

          <Route path="/money/expenses/add" element={<ExpensesAdd />} />
          <Route path="/money/expenses/view" element={<ExpenseView />} />

          <Route path="/money/budget/add" element={<CreateBudget />} />
          <Route path="/money/budget/update" element={<BudgetUpdate />} />
          <Route path="/money/budget/view" element={<BudgetView />} />

          <Route path="/savings/add" element={<SavingsAdd />} />
          <Route path="/savings/progress" element={<SavingsProgress />} />
          <Route path="/savings/achievements" element={<SavingsAchievements />} />

          <Route path="/debt/add" element={<DebtAdd />} />
          <Route path="/debt/progress" element={<DebtProgress />} />
          <Route path="/debt/past" element={<DebtPast />} />

          <Route path="/stocks" element={<Stocks />} />

          <Route path="/learn/money" element={<LearnMoney />} />
          <Route path="/learn/finance" element={<LearnFinance />} />

          <Route path="*" element={<h1>404 Page Not Found</h1>} />

        </Routes>
      </Router>

{/* Example from david: */}
      {/* <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <ProtectedRoute user={user}>
                <About />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
          <Route path="/products/*" element={<ProductList />} />
        </Routes>
      </Router> */}
      
    </main>
  );
}

export default App;

//put month and year states here and pass it down to components that need it
// or create context and wrap it with elements
