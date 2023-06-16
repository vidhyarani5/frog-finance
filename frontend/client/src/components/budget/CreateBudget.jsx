import React, { useState } from 'react';
import { useBudgetHook } from '../../hooks/budgets';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const ViewAddBudget = () => {
  const [amount, setAmount ] = useState("")
  const [startDate, setStartDate] = useState(new Date());
  const [category, setCategory ] = useState("")
  const [submitted, setSubmitted] = useState(false);

  const { viewAddBudget } = useBudgetHook();


  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
  };


  const handleClick = (event) => {
    event.preventDefault()
    viewAddBudget(amount, startDate, category)
    setSubmitted(true);
    setAmount("");
    setStartDate(new Date());
    setCategory("");
  }

  return (
    <div>
      <p>Create a Budget</p>

      <form>
        <table>
          <tr><td>
            <label htmlFor="budget_category">Category:</label>
            <select id="budget_category" value={category} onChange={handleCategoryChange}>
              <option value="">Select Category</option>
              <option value="1">Housing</option>
              <option value="2">Food</option>
              <option value="3">Transportation</option>
              <option value="4">Healthcare</option>
              <option value="5">Education</option>
              <option value="6">Shopping</option>
              <option value="7">Subscriptions</option>
              <option value="8">Communication</option>
              <option value="9">Entertainment</option>
              <option value="10">Hobbies</option>
              <option value="11">Travel</option>
              <option value="12">Pets</option>
              <option value="13">Other</option>
          </select>
          </td></tr>
          <tr><td>
            <label htmlFor="budget_amount">Budget Amount:</label>
            <input type="number" value={amount} id="budget_amount" onChange={(event) => setAmount(event.target.value)} />
          </td></tr>
          <tr><td>
            <DatePicker
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </td></tr>
          <tr><td>
            <button type="submit" onClick={handleClick}> Add Budget </button>
          </td></tr>
        </table>
      </form>

      {submitted && <p>Budget added successfully!</p>}

    </div>
  )
}

export default ViewAddBudget;