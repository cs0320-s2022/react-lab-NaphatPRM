import React, {Dispatch, SetStateAction} from 'react';
import './App.css';

type TextBoxprops = {label : string, change : Dispatch<SetStateAction<string>>}
function TextBox(props : TextBoxprops) {
    return (
        <div className="Textbox">
            <header className="Textbox-header">
            </header>
            <label>
                {props.label}
            </label>
            <input type={'text'} onChange={(e) => props.change(e.target.value)}>
            </input>
        </div>
    );
}

export default TextBox;