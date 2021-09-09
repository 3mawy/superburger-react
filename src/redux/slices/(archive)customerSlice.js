// import {createSlice} from '@reduxjs/toolkit';
// import {getCurrentCustomerData} from "../remotes_thunk/customerThunk";
//
// const archiveCustomerSlice = createSlice({
//     name: 'customer',
//     initialState: {
//         customer: {
//             fullName: '',
//             mobileNumber: '',
//             addresses: [],
//             pastOrders: [],
//         },
//         isFetching: false,
//         isSuccess: false,
//         isError: false,
//         errorMessage: '',
//     },
//     reducers: {},
//     extraReducers: {
//         [getCurrentCustomerData.pending]: (state) => {
//             state.isFetching = true;
//         }, [getCurrentCustomerData.fulfilled]: (state, {payload}) => {
//             state.customer.fullName = payload.full_name;
//             state.customer.mobileNumber = payload.mobile_number;
//             state.customer.addresses = payload.addresses;
//             // state.customer.pastOrders = payload.past_orders;
//             state.isFetching = false;
//             state.isSuccess = true;
//             return state;
//         }, [getCurrentCustomerData.rejected]: (state, {payload}) => {
//             state.isFetching = false;
//             state.isError = true;
//         },
//     },
// });
//
// export const userSelector = (state) => state.customer;
// export const userAddressesSelector = (state) => state.customer.addresses;
// export const userFullNameSelector = (state) => state.customer.fullName;
// export const userMobileNumberSelector = (state) => state.customer.mobileNumber;
//
// export default archiveCustomerSlice.reducer
