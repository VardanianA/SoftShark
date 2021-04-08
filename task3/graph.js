const arr1 = ['A', 'B', 'C', 'D','E'];
arr1.sort();
// const arr2 = [['A', 'B'],['B', 'C'],['B', 'D'],['C', 'D'],['C', 'E'],['D', 'E']];


const obj = [
    {
        first: 'A',
        last: 'B',
    },
    {
        first: 'B',
        last: 'C',
    },
    {
        first: 'B',
        last: 'D',
    },
    {
        first: 'C',
        last: 'D',
    },
    {
        first: 'C',
        last: 'E',
    },
    {
        first: 'D',
        last: 'E',
    },
];


const result = [
    {
        top: 'A',
        len: 0,
        road: ['A']
    }
];

for(let i = 1; i < arr1.length; i ++){
    let len = Number.POSITIVE_INFINITY;
    let road =[];
    obj.forEach(p => {
        if(arr1[i] === p.last){
            result.forEach(t => {
                if (p.first === t.top && t.len + 1 <= len){
                    len = t.len + 1;
                    road.push(t.road);
                    return 0;
                }
            });
        }
    })
    for(let j = 0; j < road.length; j ++){
        road[j] += '-' + arr1[i];
    }
    result.push({
        top: arr1[i],
        len: len,
        road: road
    });
}
console.log(result)



