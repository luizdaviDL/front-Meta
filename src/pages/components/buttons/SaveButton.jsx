import React from 'react'

export const SaveButton = ({onClick}) => {
  return (
    <div>
        <button onClick={onClick} type="submit" className="btn btn-primary px-4 py-2">
            Salvar
        </button>
    </div>
  )
}
