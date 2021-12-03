import React from 'react';
import style from "./DialogsBlock.module.css";

const DialogsBlock = (props) => {
    const { chats } = props; 
    const { dialogsList, dialogBlock } = style;     
    return (
        <div className={dialogBlock}>
            Активные чаты
            <ul className={dialogsList}>
                {chats}
            </ul>
        </div>
    )
}

export default DialogsBlock;