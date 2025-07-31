import React from 'react'

export const DangerAlert = ({text}) => {
  return (
    <div>
        <div className="alert alert-danger" role="alert" style={{marginRight:"12rem"}}>
           {text}
        </div>
    </div>
  )
}
