import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index';

export const signin = (formData, history) => async (dispatch) => {
    try {
        //login user
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data });
        history.push('/');
    }
    catch (error) {
        console.log(error);
    }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
        //sign up user
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data });
        history.push('/');
    }
    catch (error) {
        console.log(error);
    }
};