import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Login extends Component {
    renderField(field){
        const { type, meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-error' : ''}`;
        return(
            <div className={className}>
                <label>{field.label} <i className={field.icon}></i> </label>
                <input
                    className="form-control"
                    type={type}
                    {...field.input}
                />
                <div className="help-block">
                    {touched ? error : ''}
                </div>
            </div>
        );  
    }

    onSubmit(values){
        //console.log(values);
        if(values.userName == "Archie" && values.password == "Archie"){
            //alert('success');
            this.props.history.push('/home');
        }else{
            alert('Invalid User Name or Password');
        }
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <div className="contentWrap">
                <header className="wrapHead">
                    <h2>Next Gen Tooling Login</h2>
                </header>
                <div className="wrapperLogin">
                    <div className="col-sm-offset-4 col-sm-4">
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <Field
                                name="userName"
                                icon = "fa fa-key"
                                label="User Name"
                                type="text"
                                component={this.renderField}
                            />

                            <Field
                                name="password"
                                icon="fa fa-lock"
                                label="Password"
                                type="password"
                                component={this.renderField}
                            />

                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function validate(values){
    const error ={};
    if(!values.userName){
        error.userName= "Enter User Name";
    }
    if(!values.password){
        error.password= "Enter a Password";
    }
    return error;
}

export default reduxForm({
    validate,
    form: 'LoginForm'
})(Login);