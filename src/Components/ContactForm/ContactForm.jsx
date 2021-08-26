import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import s from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    
    handleChangephnone = e => {
        const value = e.target.value;
        this.setState({ number: value });
        
            
    }
    handleChange = (e) => {
            const value = e.target.value;
        this.setState({ name: value });
    }


    
    
    handleSubmit = e => { 
        e.preventDefault();
        const obj = {
            name: this.state.name,
            number: this.state.number,
            id: uuidv4(),
        }
        {
            this.props.validate(obj) && this.props.formSubmit(obj)
        }
        {
            this.setState({ name: '' });
            this.setState({ number: '' });
            document.getElementById('name').value = '';
            document.getElementById('number').value = '';
        };
    }

    render() {
        return (
            <div className={s.interface}>
                     
                <form onSubmit={this.handleSubmit} className={s.form}>
                    <div>
                        <label>
                                <p>Name</p> 
                                <input
                                    type="text"
                                    name="name"
                                        onChange={this.handleChange}
                                        id="name"
                                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                                    required
                                />
                        </label>
                            
                        <label>
                            Phone   
                            <input
                                className={s.inputTel}
                                    type="tel"
                                        name="number"
                                        onChange={this.handleChangephnone}
                                        id="number"
                                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                                    required
                                />
                        </label> 
                    </div>
                    
                        <button type="submit"  className={s.buttonAdd}>Add contact</button>
                    </form>
               </div>
        );
    }
}

export default ContactForm;