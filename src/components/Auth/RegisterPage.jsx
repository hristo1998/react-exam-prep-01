import React , {Component} from 'react';

export default class RegisterPage extends Component {
    render () {
        return (
            <div className="container">
            <div className="row space-top">
                <div className="col-md-12">
                    <h1>Register</h1>
                    <p>Please fill all fields.</p>
                </div>
            </div>
            <form>
                <div className="row space-top">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label className="form-control-label" for="new-username">Username</label>
                            <input className="form-control" id="new-username" type="text"/>
                        </div>
                        <div className="form-group has-success">
                            <label className="form-control-label" for="new-email">E-mail</label>
                            <input className="form-control is-valid" id="new-email" type="text"/>
                            <div className="form-control-feedback">This input value is valid</div>
                        </div>
                        <div className="form-group has-danger">
                            <label className="form-control-label" for="new-password">Password</label>
                            <input className="form-control is-invalid" id="new-password" type="password"/>
                            <div className="form-control-feedback">This input value is invalid</div>
                        </div>
						<div className="form-group has-danger">
                            <label className="form-control-label" for="new-repeat-password">Repeat password</label>
                            <input className="form-control is-invalid" id="new-repeat-password" type="password"/>
                            <div className="form-control-feedback">This input value is invalid</div>
                        </div>
						<input type="submit" className="btn btn-primary" value="Register" />
                    </div>
                </div>
            </form>
        </div>
        ); 
    }
}