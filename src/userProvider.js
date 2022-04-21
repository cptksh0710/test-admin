import React, { useEffect, useState } from "react";

function userProvider() = {
    const [data, setData] = useState([]);
    useEffect(() => {
        const apiCall = async () => {
            const response = await axios.get('http://localhost:8080/restapi/member/');
            setData(response.data.payload);
            console.log(setData)
        };
        apiCall();
    }, [])
};

export default userProvider;