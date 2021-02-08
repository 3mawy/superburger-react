

export function SpliceItemsIntoArrays(array, new_arrays_size) {
    let arrays = [];

    while (array.length > 0)
      arrays.push(array.splice(0, new_arrays_size));
    console.log(arrays)
    return arrays;

}

// export function LoopCardRow(arrays_of_items) {
//
//     return(arrays_of_items.map(item => (
//         <CardRow key = {item.id} row_items = {item.item}></CardRow>
//       )))
//
// }
