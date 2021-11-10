import React, { useContext, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from './firebase.config.js';

import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";
import { registerContext, userContext } from '../../App.js';
import { useHistory, useLocation } from 'react-router';
import Navbar from '../Shared/Navbar/Navbar.js';

firebase.initializeApp(firebaseConfig)

const Registration = () => {
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [signUp, setSignUp] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false,
    })
    // context api
    const [loggedInUser, setLoggedInUser] = useContext(registerContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // signIn with google start
    const handleGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signInUser = {
                    isSignIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                }
                setUser(signInUser);
                setLoggedInUser(signInUser);
                history.replace(from);
                // console.log(displayName, email, photoURL)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.log(errorCode, errorMessage, email)
            });
    }
    // signIn with google end


    // signIn with facebook start
    const handleFacebookSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log('facebook user after signin', user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.log(errorCode, errorMessage, email)
            });
    }
    // signIn with facebook end

    // signIn with github start
    const handleGitHubSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                setLoggedInUser(user)
                console.log('user info', user)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.log(errorCode, errorMessage, email)
            });
    }
    // signIn with github end

    // sign out option start
    const handleGoogleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(res => {
                const signOutUser = {
                    isSignIn: false,
                    name: '',
                    email: '',
                    photo: '',
                }
                setUser(signOutUser);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.log(errorCode, errorMessage, email)
            });
    }
    // sign out option end

    // handle blur start
    const handleBlur = (event) => {
        let isFieldValid = true;
        if (event.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === "password") {
            const passwordLength = event.target.value.length > 6;
            const passwordValidation = /\d{1}/.test(event.target.value);
            isFieldValid = passwordLength && passwordValidation
        }
        if (isFieldValid) {
            const newUserInfo = { ...user }
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
        // console.log(`${event.target.name} = ${event.target.value}` )
    }

    // form submit start
    const handleFormSubmit = (e) => {
        // create user
        if (signUp && user.email && user.password) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.success = true;
                    newUserInfo.error = '';
                    setUser(newUserInfo);
                    updateUserName(user.name);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        // signIn user
        if (!signUp && user.email && user.password) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    console.log(res.user)
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                });
        }
        e.preventDefault();
    }
    // form submit end


    // handle signUp & login start
    const handleSignUp = () => {
        setSignUp(!signUp)
    }
    const handleLogin = () => {
        setSignUp(!signUp)
    }
    // handle signUp & login end


    // update user name start
    const updateUserName = (name) => {
        const auth = getAuth();
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            console.log('user name update successfully')
        }).catch((error) => {
            console.log(error)
        });
    }
    // update user name end


    return (
        <div>
            <div style={{ background: '#073b4c', height: '80px' }}>
                <Navbar />
            </div>

            <div className="login container mt-5 pt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 shadow p-5">
                        {/* signIn signOut button start */}
                        {
                            user.isSignIn ?
                                <button className="btn btn-outline-dark text-capitalize" onClick={handleGoogleSignOut}>sign Out</button> :
                                <button className="btn btn-outline-dark text-capitalize" onClick={handleGoogleSignIn}>sign In</button>
                        }
                        {/* signIn signOut button end */}


                        {<div className="text-center">
                            <p className="my-1">{user.name}</p>
                            <p className="my-1">{user.email}</p>
                        </div>}


                        {/* form start */}
                        <form onSubmit={handleFormSubmit}>
                            <legend>
                                {
                                    signUp ?
                                        <h1 className="text-center mb-5">Sign Up</h1> :
                                        <h1 className="text-center mb-5">Login</h1>
                                }
                            </legend>

                            <div className="form-group">
                                {
                                    signUp && <input type="text" className="form-control py-3 mb-3" name="name" placeholder="Enter Name" onBlur={handleBlur} required />
                                }
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control py-3 mb-3" name="email" placeholder="Enter Email" onBlur={handleBlur} required />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control py-3 mb-3" name="password" placeholder="Enter Password" onBlur={handleBlur} required />
                            </div>
                            <div className="form-group">
                                {
                                    signUp ?
                                        <input type="submit" className="btn btn-primary btn-block py-2 text-capitalize" value="signUp" /> :
                                        <input type="submit" className="btn btn-primary btn-block py-2 text-capitalize" value="login" />
                                }

                            </div>
                        </form>
                        {/* form end */}

                        {/* toggle signUp & login button start */}
                        <div>
                            {
                                signUp ?
                                    <div className="text-center">
                                        <span className="text-capitalize text-success">all ready have an account?</span>
                                        <p className="ms-4 d-inline-block p-btn" onClick={handleLogin}>Login</p>
                                    </div> :
                                    <div className="text-center">
                                        <span className="text-capitalize text-danger">don't have an account?</span>
                                        <p className="ms-4 d-inline-block p-btn" onClick={handleSignUp}>signUp</p>
                                    </div>
                            }
                        </div>
                        {/* toggle signUp & login button end */}

                        {/* show error & success message start */}
                        <p className="text-center text-danger text-capitalize mt-4">{user.error}</p>
                        {
                            user.success && <p className="text-center text-success text-capitalize mt-4">user {signUp ? "created successfully" : "loggedIn successfully"}</p>
                        }
                        {/* show error & success message end */}


                        {/* continue with google btn start */}
                        <button className="btn btn-dark btn-block py-2 text-capitalize me-4 mb-4" onClick={handleGoogleSignIn}>continue with google</button>
                        {/* continue with google btn end */}

                        {/* continue with facebook btn start */}
                        <button className="btn btn-dark btn-block py-2 text-capitalize mb-4" onClick={handleFacebookSignIn}>continue with facebook</button>
                        {/* continue with facebook btn end */}

                        {/* continue with github btn start */}
                        <button className="btn btn-dark btn-block py-2 text-capitalize " onClick={handleGitHubSignIn}>continue with github</button>
                        {/* continue with github btn end */}
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Registration;