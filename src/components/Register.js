import React from 'react';

export default function Register() {
    return (
        <div className="container">
            <section  className="section-content padding-y" style={{minHeight:"84vh"}}>
                <header className="mb-4">
                    <h4 className="card-title">Sign up</h4>
                </header>
                <form className="block-register">
                <div className="form-group form-row">
                    <label className="col-md-3 col-form-label">I am a</label>
                    <div className="col-sm-9 pt-1">
                        <label className="custom-control custom-radio custom-control-inline">
                        <input className="custom-control-input" type="radio" name="account_type" value="option1"/>
                        <span className="custom-control-label"> Buyer </span>
                        </label>
                        <label className="custom-control custom-radio custom-control-inline">
                        <input className="custom-control-input" type="radio" name="account_type" value="option2"/>
                        <span className="custom-control-label"> Seller </span>
                        </label>
                    </div>
                </div>
                <div className="form-group form-row">
                    <label className="col-md-3 col-form-label">Full name</label>
                    <div className="col">
                    <input type="text" className="form-control" placeholder="First name"/>
                    </div>
                    <div className="col">
                    <input type="text" className="form-control" placeholder="Last name"/>
                    </div>
                </div>


                <div className="form-group form-row">
                    <label className="col-md-3 col-form-label">Phone</label>
                    <div className="col-9">
                    <div className="input-group">
                        <select className="custom-select" style={{maxWidth:"120px"}}>
                            <option selected="">UZ +971</option>
                            <option value="1">IN +91</option>
                            <option value="2">US +1</option>
                            <option value="3">RU +7</option>
                        </select>
                        <input name="" className="form-control" placeholder="Phone number" type="text"/>
                    </div>
                    </div>
                </div>

                <div className="form-group form-row">
                    <label className="col-md-3 col-form-label">Email</label>
                    <div className="col-sm-9">
                    <input type="email" className="form-control" placeholder="Ex. john@gmail.com"/>
                    </div>
                </div>


                <div className="form-group form-row">
                    <label className="col-md-3 col-form-label">Address</label>
                    <div className="col">
                    <input type="text" className="form-control" placeholder="City"/>
                    </div>
                    <div className="col">
                    <select className="custom-select form-control">
                        <option>Country</option>
                        <option>United states</option>
                        <option>Germany</option>
                        <option>Canada</option>
                    </select>
                    </div>
                </div>

                <div className="form-group form-row">
                    <label className="col-md-3"> </label>
                    <div className="col">
                    <input type="text" className="form-control" placeholder="Street, Building"/>
                    </div>
                </div>

                <div className="form-group form-row">
                    <label className="col-md-3 col-form-label">Password</label>
                    <div className="col-6">
                    <input type="password" className="form-control mb-3" placeholder="Create password"/>
                    <input type="password" className="form-control" placeholder="Repeat password"/>
                    </div>
                </div>

                <div className="form-group form-row">
                    <div className="col-sm-9 offset-sm-3">
                        <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                        <div className="custom-control-label" for="customCheck1">I agree with <a href="#" target="_blank">terms and conditions</a></div>
                        </label>

                    </div>
                </div>

                <div className="form-row mb-2">
                    <div className="col-sm-9 offset-sm-3">
                    <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </div>

                </form>
            </section>
        </div>
    )
}
