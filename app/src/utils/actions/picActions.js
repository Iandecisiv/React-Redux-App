import axios from 'axios';
import picDate from '../../components/PicDay';
export const LOADING = "LOADING";
export const PIC_SUCCESS = "PIC_SUCCESS";
export const ERROR = "ERROR";

export const getPics = (dispatch) => {
    dispatch({ type: LOADING });
    axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=dFVeEogQlQ90ZU5h66EEVt8QZq5dnk7oD6HKZdep&date=${picDate}`)
        .then((res) => {
            dispatch({ type: PIC_SUCCESS, payload: res.data}); 
        })
        .catch((err) => {
            dispatch({ type: ERROR, payload: err.message });
        });
};