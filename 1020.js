/*

月饼是中国人在中秋佳节时吃的一种传统食品，不同地区有许多不同风味的月饼。现给定所有种类月饼的库存量、总售价、以及市场的最大需求量，请你计算可以获得的最大收益是多少。

注意：销售时允许取出一部分库存。样例给出的情形是这样的：假如我们有 3 种月饼，其库存量分别为 18、15、10 万吨，总售价分别为 75、72、45 亿元。如果市场的最大需求量只有 20 万吨，那么我们最大收益策略应该是卖出全部 15 万吨第 2 种月饼、以及 5 万吨第 3 种月饼，获得 72 + 45/2 = 94.5（亿元）。

输入格式：
每个输入包含一个测试用例。每个测试用例先给出一个不超过 1000 的正整数 N 表示月饼的种类数、以及不超过 500（以万吨为单位）的正整数 D 表示市场最大需求量。随后一行给出 N 个正数表示每种月饼的库存量（以万吨为单位）；最后一行给出 N 个正数表示每种月饼的总售价（以亿元为单位）。数字间以空格分隔。

输出格式：
对每组测试用例，在一行中输出最大收益，以亿元为单位并精确到小数点后 2 位。

部分答案错误

*/
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let getIncome = function (){
    let i = 0
    if(sell < maxNeed){
        i = price.indexOf(Math.max(...price))
        last = last - cake[i].stock
        if(last > 0){
            income = income + cake[i].charge
            sell = sell + cake[i].stock
            cake.splice(i,1)
            price.splice(i,1)
            getIncome()
        }else if(last == 0){
            income = income + cake[i].charge
            console.log(income.toFixed(2))
            rl.close()
        }else{
            income = income + cake[i].price * (last + cake[i].stock)
            console.log(income.toFixed(2))
            rl.close()
        }
    }
}
let i = 3,maxNeed = 0,cake = [],price = [],income = 0,sell = 0,last = 0
rl.on('line', function(n) {
    switch(i){
        case 3:
            maxNeed = n.split(' ')[1]
            last = maxNeed
            i--
        break;
        case 2:
            let a = n.split(' ')
            for(let index = 0;index < a.length;index++){
                cake.push({
                    stock:parseInt(a[index]),
                    charge:0,
                    price:0
                })
            }
            i--
        break;
        case 1:
            let b = n.split(' ')
            for(let index = 0;index < b.length;index++){
                cake[index].charge = parseInt(b[index])
                cake[index].price = (cake[index].charge / cake[index].stock).toFixed(2)
                price.push(parseFloat(cake[index].price))
            }
            getIncome()
        break;
        default:
        break;
    }
})