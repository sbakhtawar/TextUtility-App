import React from 'react'

export default function Alert(props) {
  const capitalize=(word)=>
  {
    const lower= word.toLowerCase();
    const converted= lower.charAt(0).toUpperCase() +lower.slice(1);
    return converted;
  }
  return (
    <div style={{height:'50px'}}>
        {props.alertProp && <div className={`alert alert-${props.alertProp.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alertProp.type)}</strong>: {props.alertProp.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}
    </div>
  )
}
