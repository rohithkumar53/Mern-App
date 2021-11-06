import React, {useEffect} from 'react';
import Header from '../imports/Header';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
export default function Home() {

    const user = useSelector(state => state.isLoggedIn);
    const history= useHistory();
    useEffect(() => {
        if(!user){
            history.push("/login");
        }
    }, [user, history]);

    console.log(user);

    return (
        <>
            <Header/>
            <div className='container'>
                <h4>Welcome to Home Page</h4>
            </div>
        </>  
    )
}
