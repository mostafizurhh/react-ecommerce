import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // const user = { email: 'adv' }
    const authInfo = { user, createUser }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;