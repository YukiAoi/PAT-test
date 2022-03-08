/*
所谓“沙漏形状”，是指每行输出奇数个符号；各行符号中心对齐；相邻两行符号数差2；符号数先从大到小顺序递减到1，再从小到大顺序递增；首尾符号数相等。

给定任意N个符号，不一定能正好组成一个沙漏。要求打印出的沙漏能用掉尽可能多的符号。

输入格式:
输入在一行给出1个正整数N（≤1000）和一个符号，中间以空格分隔。

输出格式:
首先打印出由给定符号组成的最大的沙漏形状，最后在一行中输出剩下没用掉的符号数。
*/

// 部分错误

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const getMax = function(count){
    let num  = Math.floor((count - 1) / 2)
    let last = num
    for(let i = 3;i < num;i = i + 2){
        last = last - i
        if(last < 0){
            return i - 2
        }else if(last === 0){
            return i
        }
    }
}
const getLast = function(count,maxNum){
    let num = 1
    for(let i = 3;i <= maxNum;i = i + 2){
        num = num + (i * 2)
    }
    return count - num
}
rl.on('line', function(n) {
    n = n.split(' ')
    const count = parseInt(n[0]),icon = n[1]
    const maxNum = getMax(count)
    const lastNum = getLast(count,maxNum)
    for(let i = maxNum;i >= 1;i = i - 2){
        let arr = []
        for(let j = 0;j < i;j++){
            arr.push(icon)
        }
        for(let a = 0;a < maxNum - arr.length;a++){
            arr.unshift(' ')
        }
        arr = arr.join('')
        console.log(arr)
    }
    for(let i = 3;i <= maxNum;i = i + 2){
        let arr = []
        for(let j = 0;j < i;j++){
            arr.push(icon)
        }
        for(let a = 0;a < maxNum - arr.length;a++){
            arr.unshift(' ')
        }
        arr = arr.join('')
        console.log(arr)
    }
    console.log(lastNum)
    rl.close();
})