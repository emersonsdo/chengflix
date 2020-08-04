import React from 'react';
import Proptypes from 'prop-types';
import styled, { css } from 'styled-components';

const WrapperFormField = styled.div`
    position: relative;
    textarea {
        min-height: 150px;
    }
    input[type="color"] {
        padding-left: 56px;
    }
`;

const Label = styled.label`
`;

Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

// Isso serve também para poder utilizar o 'as="textarea"' no lugar da 'Tag'
const Input = styled.input`
    background: #53585D;
    color: #F5F5F5;
    display: block;
    width: 100%;
    height: 57px;
    font-size: 18px;
    
    outline: 0;
    border: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid #53585D;
    
    padding: 16px 16px;
    margin-bottom: 45px;
    
    resize: none;
    border-radius: 4px;
    transition: border-color .3s;
    
    &:focus {
        border-bottom-color: var(--primary);
    }
    /** O + pega o irmão seguinte, então no html tem que estar na ordem certa */
    &:focus:not([type='color']) + ${Label.Text} {
        transform: scale(.6) translateY(-10px);
    }
    ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
        `;
    }
  }
`;

// function FormField({ label, type, name, ... })
function FormField(props) {
    // const Tag = props.as;

    const isTypeTextArea = props.type === 'textarea';
    const inputType = isTypeTextArea ? 'textarea' : 'input';

    return (
        <WrapperFormField>
            <Label>
                <Input
                    as={inputType}
                    type={props.type}
                    name={props.name}
                    value={props.value} // Poderia ser valores['nome']
                    onChange={props.onChange}
                />
                <Label.Text>
                    {props.label}
                </Label.Text>
            </Label>
        </WrapperFormField>
    );
}

FormField.prototype = {
    label: Proptypes.string.isRequired, // É obrigatório
    type: Proptypes.string, // Não é obrigatório
    as: Proptypes.string,
    // etc 
};

FormField.defaultProps = {
    type: 'text',
    as: 'input'
};

export default FormField;