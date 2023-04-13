import Dialog from "../Dialog/Dialog";
import s from './Dialogs.module.css'

const Dialogs = (props) => {

    const updateSearch = (event) => {
        const text = event.target.value
        props.updateSearch(text)
    }

    return (
        <div className={s.content}>
            <div className={s.searchContainer}>
                <div className={s.image}>
                    <img src="images/triple_dash.jpg" />
                </div>
                <div className={s.formContainer}>
                    <input
                        className={s.search}
                        onChange={updateSearch}
                        value={props.searchText}
                        type="text"
                        placeholder="Search" />
                </div>
            </div>
            <div>
                {props.dialogs.map(dialog => <Dialog
                    dialog={dialog}
                    lastMessage={props.lastMessage} />)}
            </div>
        </div>
    );
}

export default Dialogs;