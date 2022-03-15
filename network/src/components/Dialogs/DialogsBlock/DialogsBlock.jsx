import React from 'react';
import { dialogBlock, dialogsList } from "./DialogsBlock.module.css";

class DialogsBlock extends React.Component {
    render() {
        return (
            <div className={dialogBlock}>
                Активные чаты
                <ul className={dialogsList}>
                    {this.props.chats}
                </ul>
            </div>
        )
    }
}

export default DialogsBlock;