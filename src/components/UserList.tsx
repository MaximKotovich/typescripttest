import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { fetchUsers } from "../store/actionCreater/user";
import { useTypeSelector } from "../store/reducers/combainReducer";
import "./userList.scss"

const UserList: React.FC = () => {
const state = useTypeSelector(state => state.user)
const dispatch = useDispatch()



useEffect(()=>{
    dispatch(fetchUsers())
}, [])

if (state.loading){
    return  <h1>Идёт загрузка....</h1>
}
if (state.error) {
    return <h1>{state.error}</h1>
}
console.log(state.users)
return (
    <div> <p>UserList :</p> 
        {state.users.map((user) => 
            {
                return (
                <div className = "bodyUsers"  key = {user.id}>
                    <div className = "numberUsers">
                        {user.id}
                    </div>
                    <div className = "nameUsers">
                        {user.name}
                    </div>
                    <div className = "companyUsers">
                        {user.company.name}
                    </div>
                </div>
                )

            }
            )}
    </div>
    );

};

export default UserList;