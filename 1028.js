/*
某城镇进行人口普查，得到了全体居民的生日。现请你写个程序，找出镇上最年长和最年轻的人。

这里确保每个输入的日期都是合法的，但不一定是合理的——假设已知镇上没有超过 200 岁的老人，而今天是 2014 年 9 月 6 日，所以超过 200 岁的生日和未出生的生日都是不合理的，应该被过滤掉。

输入格式：
输入在第一行给出正整数 N，取值在(0,10 
5
 ]；随后 N 行，每行给出 1 个人的姓名（由不超过 5 个英文字母组成的字符串）、以及按 yyyy/mm/dd（即年/月/日）格式给出的生日。题目保证最年长和最年轻的人没有并列。

输出格式：
在一行中顺序输出有效生日的个数、最年长人和最年轻人的姓名，其间以空格分隔。
*/

// 运行超时

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let arr = []
const maxYear = 2014,minYear = 1814,fixedMonth = 9,fixedDay = 6
const main = function(n){
    n = n.split(' ')
    let name = n[0],time = n[1].split('/')
    const year = parseInt(time[0]),month = parseInt(time[1]),day = parseInt(time[2])
    if(year > minYear && year < maxYear){
        arr.push({
            name,
            age:maxYear - year
        })
    }else if(year === minYear){
        if(month > fixedMonth){
            arr.push({
                name,
                age:maxYear - year - 1
            })
        }else if(month === fixedMonth){
            if(day > fixedDay){
                arr.push({
                    name,
                    age:maxYear - year - 1
                })
            }else if(day === fixedDay){
                arr.push({
                    name,
                    age:maxYear - year
                })
            }
        }
    }else if(year === maxYear){
        if(month < fixedMonth){
            arr.push({
                name,
                age:maxYear - year
            })
        }else if(month === fixedMonth){
            if(day <= fixedDay){
                arr.push({
                    name,
                    age:maxYear - year
                })
            }
        }
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
        let length = arr.length
        arr = arr.sort((a,b) => {
            return (b.age - a.age)
        })
        if(arr.length > 0){
            console.log(length,arr[0].name,arr[length - 1].name)
        }else{
            console.log(0)
        }
        rl.close()
    }
})