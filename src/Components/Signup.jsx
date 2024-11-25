import React from 'react';

const Signup=()=> {
    return (  
        <div>
            <div>
                <div>
                    <h2>Create Account</h2>
                    <form>
                        <div className='form-group'>
                            <label htmlFor=''>Email Address:</label>
                            <input type="text"
                            className='email-form'
                            name='email'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor=''>first_name:</label>
                            <input type="text"
                            className='email-form'
                            name='first_name'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor=''>last_name :</label>
                            <input type="text"
                            className='email-form'
                            name='last_name'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor=''>Password</label>
                            <input type="text"
                            className='email-form'
                            name='last_name'
                            />

                        </div>
                        <div className='form-group'>
                            <label htmlFor=''>Confirm Password :</label>
                            <input type="text"
                            className='email-form'
                            name='COnfirm Password'
                            />
                        </div>
                        <input type="submit" value="Submit" className="submitButton"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup
