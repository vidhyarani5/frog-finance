import { generateRandomColor, formatCurrency, formatPercentage } from "../helpers/helpers";

const BudgetItem = ({ budget }) => {
  const { category, budget_amount, expense_amount } = budget;
  const color = generateRandomColor(Math.random())
  return (
    <div
      className="budget"
      style={{
        "--accent": color
      }}
    >
      <div className="progress-text">
        <h3>{category}</h3>
        <p>{formatCurrency(budget_amount)} Budgeted</p>
      </div>
      <progress max={budget_amount} value={expense_amount}>
        {formatPercentage(expense_amount / budget_amount)}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(expense_amount)} spent</small>
        <small>{formatCurrency(budget_amount - expense_amount)} remaining</small>
      </div>
    </div>
  )
}
export default BudgetItem