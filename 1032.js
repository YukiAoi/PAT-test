/*
为了用事实说明挖掘机技术到底哪家强，PAT 组织了一场挖掘机技能大赛。现请你根据比赛结果统计出技术最强的那个学校。

输入格式：
输入在第 1 行给出不超过 10 
5
  的正整数 N，即参赛人数。随后 N 行，每行给出一位参赛者的信息和成绩，包括其所代表的学校的编号（从 1 开始连续编号）、及其比赛成绩（百分制），中间以空格分隔。

输出格式：
在一行中给出总得分最高的学校的编号、及其总分，中间以空格分隔。题目保证答案唯一，没有并列。
*/

// 运行超时

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let arr = []
let main = function(n){
    n = n.split(' ')
    const name = n[0],score = parseInt(n[1])
    const result = arr.findIndex((item) => item.name === name)
    if(result === -1){
        arr.push({
            name,
            score
        })
    }else{
        arr[result].score +=  score
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
        arr = arr.sort((a,b) => {
            return b.score - a.score
        })
        console.log(`${arr[0].name} ${arr[0].score}`)
        rl.close()
    }
})