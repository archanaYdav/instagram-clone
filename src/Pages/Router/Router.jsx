import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Route, Routes } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import Profile from './Profile/Profile';
import Story from './Story/Story';
import Login from "./LoginSignup/Login.jsx";
import Signup from "./LoginSignup/Signup.jsx";
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../../firebase';
import AccountEdit from './AccountEdit/AccountEdit';

export const Router = () => {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUsers] = useState(null);
    const [userId, setUserId] = useState("");
    const [profileImg, setProfileImg] = useState("");

    useEffect(() => {
        // Listen to changes in authentication state
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                setUsers(authUser);
                const userEmail = authUser.email;
                
                // Retrieve user details
                db.collection("users").orderBy("timestamp", "desc").onSnapshot(snapshot => {
                    const userDetails = snapshot.docs.map(doc => ({id: doc.id, detail: doc.data()}));
                    const matchedUser = userDetails.find(({id, detail}) => (detail.email === userEmail));
    
                    console.log(matchedUser);
                    if (matchedUser) {
                        setName(matchedUser.detail.name);
                        setUsername(matchedUser.detail.username);
                        setUserId(matchedUser.id);
                        setProfileImg(matchedUser.detail.profileImg);
                        console.log("name=>", name);
                        console.log("username=>", username);
                    }
                });
            } else {
                setUsers(null);
            }
        });
    
        return () => { unsubscribe() };
    }, [user]); // Make sure to add 'user' as a dependency if it's coming from outside
    
    
    return (
        <div>
            {user !== null ? <div className='flex '>
                <div className='w-[22%] border border-1-slate-500'>
                    <Sidebar username={username} userId={userId} />
                </div>
                <div className='w-full'>
                    <Routes>
                        <Route path='/' element={<HomePage name={name} username={username} />}></Route>
                        <Route path='/username' element={<Profile name={name} username={username} profileImg={profileImg}/>}></Route>
                        <Route path='/story' element={<Story />}></Route>
                        <Route path='/accounts/edit' element={<AccountEdit userId={userId} profileImg={profileImg}/>}></Route>
                    </Routes>
                </div>
            </div> :
                <div className='w-full'>
                    <Routes>
                        <Route path='/' element={<Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} />}></Route>
                        <Route path='/Signup' element={<Signup email={email} setEmail={setEmail} password={password} setPassword={setPassword} name={name} setName={setName} username={username} setUsername={setUsername} />}></Route>
                    </Routes>
                </div>}
        </div>
    )
}

export default Router;
