function compareTriplets(a, b) {
    let count1 = 0, count2 = 0;
    for (let i = 0; i < a.length; i++) {
        if(a[i] == b[i]){
            count1,count2;
        }else if(a[i] > b[i]){
            count1++;
        }else{
            count2++;
        }
    }
    return [count1, count2];
}
console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
console.log(compareTriplets([5,6,7], [3,6,10]));


