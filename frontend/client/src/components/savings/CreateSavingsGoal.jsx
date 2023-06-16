import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSavingsHook } from '../../hooks/savings';

const CreateSavingsGoal = () => {
  const [savingName, setSavingName] = useState("")
  const [goalAmount, setGoalAmount] = useState("")
  const [currentAmount, setCurrentAmount] = useState("")

const navigate = useNavigate();

  const { createSavingsGoal, currentSavingsGoal, viewSavingsGoal  } = useSavingsHook();

  console.log("create goal page - csg state", currentSavingsGoal)



  const handleClick = (event) => {
    event.preventDefault()
    createSavingsGoal(savingName, goalAmount, currentAmount).then(() => {
      navigate("/savings/progress")
    });
  }


  return (
    <div>
      <h1>Create New Savings Goal: </h1>

      {currentSavingsGoal.length > 0 && <p>You already have an active savings goal. Click here to view it</p>}

      {currentSavingsGoal.length === 0 &&

        <form action="">

          <label htmlFor="saving_name" className="sr-only">
            What are you saving for? Enter your goal name:
          </label>
          <input
            type="text"
            value={savingName}
            name="saving_name"
            id="saving_name"
            placeholder='goal name'
            onChange={(event) => setSavingName(event.target.value)}
          />

          <br />


          <label htmlFor="goal_amount" className="sr-only">
            How much do you need to save to reach this goal?
          </label>
          <input
            type="number" value={goalAmount}
            name="goal_amount"
            id="goal_amount"
            placeholder='$0'
            onChange={(event) => setGoalAmount(event.target.value)}
          />

          <br />

          <label htmlFor="current_amount" className="sr-only">
            How much have you already saved towards this goal?
          </label>
          <input
            type="number"
            value={currentAmount}
            name="current_amount"
            id="current_amount"
            placeholder='$0'
            onChange={(event) => setCurrentAmount(event.target.value)}
          />

          <br />

          <button type="submit" onClick={handleClick}>Create Goal</button>
        </form>

      }



    </div>
  )
}

export default CreateSavingsGoal;