/*
输入两个非负 10 进制整数 A 和 B (≤2
​30
​​ −1)，输出 A+B 的 D (1<D≤10)进制数。

输入格式：
输入在一行中依次给出 3 个整数 A、B 和 D。

输出格式：
输出 A+B 的 D 进制数。
*/
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const getResult = function(a,b,c) {
    console.log((a + b).toString(c))
}
rl.on('line', function(n) {
    const data = n.split(' ')
    getResult(parseInt(data[0],10),parseInt(data[1],10),parseInt(data[2],10))
    rl.close();
})