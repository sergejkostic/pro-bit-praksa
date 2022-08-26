import { useEffect } from "react";
import { GET_POSTS_START, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from '../actions/types';
import { useDispatch } from 'react-redux';

function Profile() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: GET_POSTS_START });
        console.log('get data');
    }, []);

    return <>profile</>
}

export default Profile;