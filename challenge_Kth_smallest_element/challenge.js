function kthSmallest(arr,l,r,k){
    arr.sort(function(a, b) {
        return a - b;
    });

    return arr[k-1]
}
console.log(kthSmallest([7, 10, 4, 3, 20, 15],0,5,3)) // 7
