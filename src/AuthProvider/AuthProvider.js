import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config'
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext=createContext()

const auth=getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser]= useState({null:null}) ;
    const providerLogin=(provider)=>{
        return signInWithPopup(auth , provider);
    }

    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LoginUser=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentuser)=>{
            setUser(currentuser)
        });
        return unsubscribe
    },[])

    const logOut=()=>{
        return signOut(auth)
    }

    const authinfo={user , providerLogin, createUser, LoginUser, logOut }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
