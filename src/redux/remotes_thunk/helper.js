<<<<<<< HEAD
export let host = "https://superburger-backend.herokuapp.com"
=======
export let host = "https://superburger-backend.herokuapp.com/"
>>>>>>> de55587f5ff5dbdf0fdf3230a1271f1d40a28d9e
//export let host = "http://192.168.1.11:8000"

export const getTokenFromStore = () => {
    console.log("Bearer " + localStorage.getItem('token'))
    return "Bearer " + localStorage.getItem('token')
};
export const getRefreshFromStore = () => {
    return localStorage.getItem('refresh')
};

export const getTokenExpiration = ()=>{
    return Date.now();
}