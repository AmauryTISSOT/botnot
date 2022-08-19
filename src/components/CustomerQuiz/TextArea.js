import React from 'react'

const TextArea = ({questionID, customerQuiz, setCustomerQuiz}) => {
   
   const onFillHandler = (event) => {
    setCustomerQuiz((prev) => ({
        ...prev,
        [event.target.id]: event.target.value,
      }));
   }

  return (
    <>
    <textarea id={questionID} onChange={(e) => onFillHandler(e)}></textarea>
    </>
  )
}

export default TextArea