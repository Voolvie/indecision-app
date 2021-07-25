import React from 'react'
import Option from './Option'
const Options = (props) => {
    return(
        <div>
            <button onClick={props.handleRemoveAll}>Remove all</button>
            {props.options.length === 0 && <p>Add and option</p>}
            Options length: {props.options.length}
            {props.options.map((option) => 
            <Option
             key={option}
             optionText={option}
             handleDeleteOption={props.handleDeleteOption}
             />
            )}
        </div>
    )
}
export default Options