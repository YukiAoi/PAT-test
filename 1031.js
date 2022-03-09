/*
一个合法的身份证号码由17位地区、日期编号和顺序编号加1位校验码组成。校验码的计算规则如下：

首先对前17位数字加权求和，权重分配为：{7，9，10，5，8，4，2，1，6，3，7，9，10，5，8，4，2}；然后将计算的和对11取模得到值Z；最后按照以下关系对应Z值与校验码M的值：

Z：0 1 2 3 4 5 6 7 8 9 10
M：1 0 X 9 8 7 6 5 4 3 2
现在给定一些身份证号码，请你验证校验码的有效性，并输出有问题的号码。

输入格式：
输入第一行给出正整数N（≤100）是输入的身份证号码的个数。随后N行，每行给出1个18位身份证号码。

输出格式：
按照输入的顺序每行输出1个有问题的身份证号码。这里并不检验前17位是否合理，只检查前17位是否全为数字且最后1位校验码计算准确。如果所有号码都正常，则输出All passed。
*/

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let arr = [],mLsit = ['1','0','X','9','8','7','6','5','4','3','2'],qList = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],isErr = false
const main = function(n){
    let sum = 0
    n = n.split('')
    for(let i = 0;i < n.length - 1;i++){
        let a = n[i].replace(/[^\d]/g, '')
        if(a === ''){
            console.log(n.join(''))
            isErr = true
            return
        }else{
            sum = sum + parseInt(qList[i]) * parseInt(n[i])
        }
    }
    const z = mLsit[sum % 11]
    if(n[n.length - 1] !== z){
        console.log(n.join(''))
        isErr = true
    }
}
let i = -1
rl.on('line', function(n) {
    if(i === -1){
        i = n
    }else{
        i--
        main(n)
    }
    if(i === 0 || n === 0){
        if(!isErr){
            console.log('All passed')
        }
        rl.close()
    }
})