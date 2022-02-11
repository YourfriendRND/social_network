import React from 'react';
import style from "./DialogsBlock.module.css";

class DialogsBlock extends React.Component {
    render() {
        return (
            <div className={style.dialogBlock}>
                Активные чаты
                <ul className={style.dialogsList}>
                    {this.props.chats}
                </ul>
            </div>
        )
    }
}

// const DialogsBlock = (props) => {
//     const { chats } = props;
//     const { dialogsList, dialogBlock } = style;
//     return (
//         <div className={dialogBlock}>
//             Активные чаты
//             <ul className={dialogsList}>
//                 {chats}
//             </ul>
//         </div>
//     )
// }

export default DialogsBlock;