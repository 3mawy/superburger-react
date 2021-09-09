import {createSlice} from '@reduxjs/toolkit';
import {loginUser, signupUser} from "../remotes_thunk/userThunk";
import {getCurrentUserData} from "../remotes_thunk/userThunk";
import {getCurrentUserOrders} from "../remotes_thunk/orderThunk";

const initialState = {
    username: '',
    email: '',
    userDetails: {
        fullName: '',
        mobileNumber: '',
        addresses: [],
        pastOrders: [],
        pastOrdersCount: ''
    },
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
}
const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        clearState: (state) => {
            state = initialState
            return state;
        },
        logOut: (state) => {
            state = initialState
            localStorage.removeItem('token');
            localStorage.removeItem('refresh');
            return state;
        }
    },
    extraReducers: {
        [signupUser.fulfilled]: (state, {payload}) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.email = payload.email;
            state.username = payload.username;
        },
        [signupUser.pending]: (state) => {
            state.isFetching = true;
        },
        [signupUser.rejected]: (state, {payload}) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        },
        [loginUser.fulfilled]: (state, {payload}) => {
            console.log('payload', payload);

            state.email = payload.email;
            state.username = payload.name;
            state.isFetching = false;
            state.isSuccess = true;
            return state;
        },
        [loginUser.rejected]: (state, {payload}) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        },
        [loginUser.pending]: (state) => {
            state.isFetching = true;
        },

        [getCurrentUserData.pending]: (state) => {
            state.isFetching = true;
        },
        [getCurrentUserData.fulfilled]: (state, {payload}) => {
            state.userDetails.fullName = payload.full_name;
            state.userDetails.mobileNumber = payload.mobile_number;
            state.userDetails.addresses = payload.addresses;
            state.isFetching = false;
            state.isSuccess = true;
            return state;
        },
        [getCurrentUserData.rejected]: (state, {payload}) => {
            state.isFetching = false;
            state.isError = true;
        },
        [getCurrentUserOrders.fulfilled]: (state, {payload}) => {
            console.log(payload)
            state.userDetails.pastOrders = payload.results;
            state.userDetails.pastOrdersCount = payload.count;
        }
    },
});

export const {clearState, logOut} = userSlice.actions;
export const userSelector = (state) => state.user;
export const isAuthSelector = (state) => state.isSuccess
export const userEmailSelector = (state) => state.user.email;
export const userAddressesSelector = (state) => state.user.userDetails.addresses;
export const userPastOrdersSelector = (state) => state.user.userDetails.pastOrders;
export const userFullNameSelector = (state) => state.user.userDetails.fullName;
export const userMobileNumberSelector = (state) => state.user.userDetails.mobileNumber;

export default userSlice.reducer