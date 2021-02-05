import React, { Component } from 'react';

class Form extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        errorMessages:{
            name: "Imię powinno zawierać co najmniej 2 znaki i nie zawierać spacji",
            email: "Mail powinienen zawierać @",
            message: "Wiadomość powinna być dłuższa niż 10 znaków",
        },
        errors:{
            name: false,
            email: false,
            message: false,
        }
    }

    handleChange = e => {
        const name = e.target.type;
        const value = e.target.value;
        this.setState({
            [name]: value,
        })
    }

    handleOnSubmit = () => {
        const validation = this.handleValidation();
        if(validation.accept){
            this.setState({
                errors: {
                    name: validation.errorName,
                    email: validation.errorEmail,
                    message: validation.errorMessage,
                }
            })
        }
    }

    handleValidation = () => {

        let errorName = true;
        let errorEmail = true;
        let errorMessage = true;
        let accept = false;

        if(this.state.name.length > 1 && !this.state.name.includes(' ')){
                errorName = false;
        }
        if(this.state.email.includes('@')){
            errorEmail = false;
        }
        if(this.state.message.length > 10){
                errorMessage = false;
        }
        if(!errorName && !errorEmail && !errorMessage){
            accept = true;
        }
        return(
            {accept,
            errorName,
            errorEmail,
            errorMessage
            })
    }

    render(){
        const {name, email, message, errorMessages, errors} = state;
        return(
            <form class="form" onSubmit={handleOnSubmit}>
                <label htmlFor="name" class="form__label form__label--name">imię:<br/>
                <input class="form__input form__input--name" type="text" name="name" id="name" placeholder="Podaj imię" value={name} onChange={this.handleChange} />
                </label>{errors.name && <span>{errorMessages.name}</span>}<br/>

                <label class="form__label form__label--email" htmlFor="email">email:<br/>
                <input class="form__input form__input--email" type="email" name="email" id="email" placeholder="Podaj e-mail" value={email} onChange={this.handleChange} />
                </label>{errors.email && <span>{errorMessages.email}</span>}<br/>

                <label class="form__label form__label--text" htmlFor="message">napisz wiadomość:<br/>
                <textarea class="form__input form__input--text" name="message" id="message" cols="30" rows="10" value={message} onChange={this.handleChange}></textarea></label>{errors.message && <span>{errorMessages.message}</span>}<br/>

                <input class="form__input--button" type="button" value="Wyślij"/>
                
            </form>
        );
    }
}

ReactDOM.render(<Form/>, document.querySelector('.formWrapper'))