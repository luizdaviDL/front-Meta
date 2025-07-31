import React from 'react'

export const SuccessAlert = ({text}) => {
  return (
    <div>
        <div className="alert alert-success" role="alert" style={{marginRight:"12rem"}}>
            {text}
        </div>
    </div>
  )
}
