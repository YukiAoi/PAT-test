/*
给定一个正整数数列，和正整数 p，设这个数列中的最大值是 M，最小值是 m，如果 M≤mp，则称这个数列是完美数列。

现在给定参数 p 和一些正整数，请你从中选择尽可能多的数构成一个完美数列。

输入格式：
输入第一行给出两个正整数 N 和 p，其中 N（≤10 
5
 ）是输入的正整数的个数，p（≤10 
9
 ）是给定的参数。第二行给出 N 个正整数，每个数不超过 10 
9
 。

输出格式：
在一行中输出最多可以选择多少个数可以用它们组成一个完美数列。
*/

// 部分错误
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let arr = [],i = 2,p = 0,count = 0,list = []
let main = function(n){
    arr = [...new Set(n.split(' ').sort((a,b) => a-b))]
    for(let i = 0;i < arr.length;i++){
        arr[i] = parseInt(arr[i])
        list.push(arr[i])
        max = Math.max(...list)
        min = Math.min(...list)
        if(max <= min * p){
            count++
        }
    }
}
rl.on('line', function(n) {
    if(i === 2){
        i--
        p = parseInt(n.split(' ')[1])
    }else{
        i--
        main(n)
    }
    if(i === 0 || n === 0){
        console.log(count)
        rl.close()
    }
})