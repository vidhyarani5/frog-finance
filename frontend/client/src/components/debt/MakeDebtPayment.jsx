import React, { useState } from 'react';
import { useDebtHook } from '../../hooks/debt';

const MakeDebtPayment = (props) => {
  const { addDebtPayment } = useDebtHook();

  const [debtPaymentAmount, setDebtPaymentAmount] = useState('');
  const [debtGoalId, setDebtGoalId] = useState('');

  const handleClick = (event) => {
    event.preventDefault()
    addDebtPayment(debtPaymentAmount, debtGoalId)
  }

  return (
    <div>
      <form action="">
        <label htmlFor="debt_payment_amount" className="sr-only">
          Amount paid:
        </label>
        <input
          type="number"
          value={debtPaymentAmount}
          name="debt_payment_amount"
          id="debt_payment_amount"
          placeholder='$0'
          onChange={(event) => setDebtPaymentAmount(event.target.value)}
        />

        <br />

        <label htmlFor="debt_goal_id" className="sr-only">
          Debt goal id:
        </label>
        <input
          type="number"
          value={debtGoalId}
          name="debt_goal_id"
          id="debt_goal_id"
          placeholder='id #'
          onChange={(event) => setDebtGoalId(event.target.value)}
        />

        <div className='modalFooter'>
          <button className='btn btn-danger' onClick={() => props.setDebtModal(false)}>cancel</button>
          <button type="submit" className='btn btn-primary' onClick={handleClick}>
            add payment
          </button>
        </div>

      </form>
    </div>
  );
};

export default MakeDebtPayment;