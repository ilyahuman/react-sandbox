import React from "react";
import { useSelector } from "react-redux";

const UserDashboard = () => {
    const name = useSelector(store => store.user.username);
    const email = useSelector(store => store.user.email);
    const user_pic = useSelector(store => store.user.user_pic);

    return (
        <div>
            <div>
                <div style={{
                    'overflow': 'hidden'
                }}>
                    <img src={user_pic} width='50px' alt=""/>
                </div>
                <strong>{name}</strong>
                <span>{email}</span>
            </div>
        </div>
    )
}

export default UserDashboard;