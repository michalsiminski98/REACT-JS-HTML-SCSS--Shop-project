import React, { Component } from 'react';

class Form extends Component {

    state = {
        name: '',
        email: '',
        message: '',
    }

    handleChange = e => {
        const name = e.target.type;
        const value = e.target.value;
        this.setState({
            [name]: value,
        })
    }

    render(){
        const {name, email, message} = state;
        return(
            <>
                <label htmlFor="name" class="form__label form__label--name">imię:<br/>
                <input class="form__input form__input--name" type="text" name="name" id="name" placeholder="Podaj imię" value={name} onChange={this.handleChange} />
                </label><br/>

                <label class="form__label form__label--email" htmlFor="email">email:<br/>
                <input class="form__input form__input--email" type="email" name="email" id="email" placeholder="Podaj e-mail" value={email} onChange={this.handleChange} />
                </label><br/>

                <label class="form__label form__label--text" htmlFor="message">napisz wiadomość:<br/>
                <textarea class="form__input form__input--text" name="message" id="message" cols="30" rows="10" value={message} onChange={this.handleChange}></textarea></label><br/>

                <input class="form__input--button" type="button" value="Wyślij"/>
            </>
        );
    }
}

ReactDOM.render(<Form/>, document.querySelector('.form'))