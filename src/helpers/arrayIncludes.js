export default function arrayIncludes(arr1, arr2){
    return arr1.find((val, index) => {
        return val === arr2[index];
    });
}
