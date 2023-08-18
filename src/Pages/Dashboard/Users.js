import {useState,useEffect} from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate,useLocation } from "react-router-dom";


const USERS_URL = '/users';


const Users =() =>{
    const [users, setUsers]= useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async ()=> {
            try {
                const response = await axiosPrivate.get(USERS_URL,{
                    signal:controller.signal
                });
                const userNames = response.data.map(user => user.username);
                isMounted && setUsers(userNames);
            }catch(err){
                console.log(err);
                navigate('/signin',{state: {from: location },replace: true});
            }
        }
        getUsers();
        return()=>{
            isMounted = false;
            controller.abort();
        }
    },[axiosPrivate,location,navigate])
    
    return(
        <article>
            <h2>USERS LIST</h2>
            {users?.length
            ?(
                <ul>
                    {users.map((user, i) => <li key={i}>{user}</li>)}
                </ul>
            ):(<p>No Users to display</p>
            )
            }
            
        </article>
    );
};


export default Users;