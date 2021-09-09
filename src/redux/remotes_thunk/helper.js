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