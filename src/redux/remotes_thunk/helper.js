export let host = "https://superburger-backend.herokuapp.com/"
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