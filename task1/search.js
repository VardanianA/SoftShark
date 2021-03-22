const database = [
    {
        x: 'xx1',
        y: 'yy1',
    },
    {
        x: 'xx2',
        y: 'yy2',
    },
    {
        x: 'xx3',
        y: 'yy3',
    },
    {
        x: 'jj2',
        y: 'jjy',
    },
    {
        x: 'random',
        y: 'number',
    },
    {
        x: 'search',
        y: 'text',
    },
];


function search(param) {

    const result = []
    param.body = JSON.parse(param.body)
    database.forEach(p => {
        if(p.x === param.body.x || p.y === param.body.y){
            result.push(p)
        }
    })

    return result
}


param = {
    body: '{"x":"random", "y": "yy1"}',
}


console.log(search(param))


// output = search(param)
//console.log(output)

