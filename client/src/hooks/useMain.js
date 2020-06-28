import {useEffect, useState} from "react";

const useMain = (data) => {
    const [user, setUser] = useState(false);
    const token = localStorage.token;

    useEffect( () => {
        async function getUser() {
            const request = await fetch('/user/me', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            const data = await request.json();

            if (data) {
                setUser(data);
            }
        }

        getUser();
    }, []);

}

export default useMain;