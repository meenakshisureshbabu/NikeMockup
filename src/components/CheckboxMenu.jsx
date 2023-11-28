import React from 'react'

function CheckboxMenu(props) {
  return (
    <div>
        <h3>{props.heading}</h3>
        {
            props.items.map((item) => {
                return(
                    <ul>
                    <li><input type='checkbox'></input><label>{item}</label></li>
                    </ul>
                )
            })
        }
           
    </div>
  )
}

export default CheckboxMenu