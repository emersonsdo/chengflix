import React from 'react';

//function FormField({ label, type, name, ... })
function FormField(props) {
    
    return(
        <div>
            <label>
                {props.label}
                <input
                    type={props.type}
                    name={props.name}
                    value={props.value} // Poderia ser valores['nome']
                    onChange={props.onChange}
                />
            </label>
        </div>
    );
}

export default FormField;