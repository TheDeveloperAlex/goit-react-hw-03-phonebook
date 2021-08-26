import s from './Contacts.module.css';

const Contacts = ({ contacts, filter, fnFilter, removeContact}) => {

    return (
        <div>
            <h2>Contacts</h2>
                <input type="text" onChange={fnFilter}/>

            <ul>
                {contacts.map(item => (
                    item.name.includes(filter) ? <li key={item.id} className={s.li}> {item.name}: {item.number} <button type="button" id={item.id} onClick={removeContact} className={s.button}>Delete</button> </li> : false
                ))}
                    
            </ul>
        </div>
    );
}

export default Contacts;
