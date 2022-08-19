import React from 'react'

const Assainissement = ({customerState, setCustomerState}) => {
  return (
    <>
    <h1>ASSAINISSEMENT</h1>
    <div>L'assainissement de votre bien s'effectue-t-il:</div>
        <div>- par un système individuel ?</div>
        <p>Indiquez la date de la dernière vidange</p>
        <div>- par un raccordement au "tout à l'égout" ?</div>
    <div>Avez-vous reçu une mise en demeure de faire des travaux sur votre installation ?</div>
    </>
  )
}

export default Assainissement