import React,{useState} from 'react';
import {NavLink,Link} from 'react-router-dom';


export default function SignIn(props) {
    const [data, setData] = useState(0);

    const userName = (e) => {
		console.log(e.target.value.length);
        let usernameLength = e.target.value.length;
        if(usernameLength>4){
            setData((n) => n + 1)
        }else{
            setData(0)
        }
	}

    const passWord = (e) => {
		let userPasswordLength = e.target.value.length;
        if(userPasswordLength>7){
            setData((n) => n + 1)
        }else{
            setData(0)
        }
	}



    return (
        <div>
            <section className="section-content padding-y" style={{minHeight:"84vh"}}>
                    <div className="card mx-auto" style={{maxWidth:"380px", marginTop:"100px"}}>
                    <div className="card-body">
                    <h4 className="card-title mb-4">Sign in</h4>
                    <form>
                        <a href="#" className="btn btn-facebook btn-block mb-2"> <i className="fab fa-facebook-f"></i> &nbsp;  Sign in with Facebook</a>
                        <a href="#" className="btn btn-google btn-block mb-4"> <i className="fab fa-google"></i> &nbsp;  Sign in with Google</a>
                        <div className="form-group">
                            <input name="username" className="form-control" placeholder="Username" type="text" onChange={userName}/>
                        </div>
                        <div className="form-group">
                            <input name="password" className="form-control" placeholder="Password" type="password" onChange={passWord}/>
                        </div>
                        
                        <div className="form-group">
                            <a href="#" className="float-right">Forgot password?</a> 
                            <label className="float-left custom-control custom-checkbox"> <input type="checkbox" className="custom-control-input" checked=""/> <div className="custom-control-label"> Remember </div> </label>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block" disabled={data===0 || data===1 ?true:false}> Login  </button>
                        </div> 
                    </form>
                    </div>
                    </div>
                    <p className="text-center mt-4">Don't have account? <Link to="/register" >Sign up</Link></p>
                    <br></br>
                </section>
        </div>
    )
}
