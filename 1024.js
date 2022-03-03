/*
科学计数法是科学家用来表示很大或很小的数字的一种方便的方法，其满足正则表达式 [+-][1-9].[0-9]+E[+-][0-9]+，即数字的整数部分只有 1 位，小数部分至少有 1 位，该数字及其指数部分的正负号即使对正数也必定明确给出。

现以科学计数法的格式给出实数 A，请编写程序按普通数字表示法输出 A，并保证所有有效位都被保留。

输入格式：
每个输入包含 1 个测试用例，即一个以科学计数法表示的实数 A。该数字的存储长度不超过 9999 字节，且其指数的绝对值不超过 9999。

输出格式：
对每个测试用例，在一行中按普通数字表示法输出 A，并保证所有有效位都被保留，包括末尾的 0。

部分答案错误
*/
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let result = '',num
rl.on('line', function(n) {
    if(n[0] == '-'){
        result = '-'
    }
    n = n.substr(1)
    const data = n.split('E')
    const multiple = data[1].substr(1)
    if(data[1][0] == '-'){
        let num = data[0],count = 0
        for(let i = num.length - 1;i > 0;i--){
            if(num[i] == '.'){
                break
            }else if(num[i] == '0'){
                count++
            }
        }
        result += num / Math.pow(10, multiple)
        for(let i = 0;i < count;i++){
            result = result + '0'
        }
    }else{
        result += num * Math.pow(10, multiple)
    }
    console.log(result)
    rl.close();
})