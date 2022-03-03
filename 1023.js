/*
给定数字 0-9 各若干个。你可以以任意顺序排列这些数字，但必须全部使用。目标是使得最后得到的数尽可能小（注意 0 不能做首位）。例如：给定两个 0，两个 1，三个 5，一个 8，我们得到的最小的数就是 10015558。

现给定数字，请编写程序输出能够组成的最小的数。

输入格式：
输入在一行中给出 10 个非负整数，顺序表示我们拥有数字 0、数字 1、……数字 9 的个数。整数间用一个空格分隔。10 个数字的总个数不超过 50，且至少拥有 1 个非 0 的数字。

输出格式：
在一行中输出能够组成的最小的数。

部分答案错误
*/
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let arr = []
rl.on('line', function(n) {
    const data = n.split(' ')
    for(let i = 0;i < data.length;i++){
        if(data[i] > 0){
            for(let j = 0;j < data[i];j++){
                arr.push(i)
            }
        }
    }
    if(arr[0] == 0){
        for(let i = 0;i < arr.length;i++){
            if(arr[i] != 0){
                arr[0] = arr[i]
                arr[i] = 0
                console.log(arr.join(''))
                return
            }
        }
    }
    rl.close();
})