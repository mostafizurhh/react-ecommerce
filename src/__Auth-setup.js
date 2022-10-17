/* 
-----------------
Auth Setup Steps
-----------------
1. create firebase project in > console.firebase.google.com
2. enable/register web app with same name
3. enable sign in methods
4. install firebase in your project from terminal 
5. copy firbase config in your project's firebase.config.js file
6. export from firebase.config.js file

---------------------------
Create And Get Auth Context
---------------------------
1. create UserContext component >>>>>>>
export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const user = { email: 'adv' }
    const authInfo = { user }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};
export default UserContext;

2. go to index.js and set >> 
<React.StrictMode>
    <UserContext>
      <App />
    </UserContext>
  </React.StrictMode>

3. destructure the value of value and call useContext hook whereever you want to use the info/value of AuthContext. Example >>>>>> 
const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='text-white'>
            {user?.email}
        </div>
    );
    }

*/