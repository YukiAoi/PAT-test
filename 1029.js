/*
旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。现在给出应该输入的一段文字、以及实际被输入的文字，请你列出肯定坏掉的那些键。

输入格式：
输入在 2 行中分别给出应该输入的文字、以及实际被输入的文字。每段文字是不超过 80 个字符的串，由字母 A-Z（包括大、小写）、数字 0-9、以及下划线 _（代表空格）组成。题目保证 2 个字符串均非空。

输出格式：
按照发现顺序，在一行中输出坏掉的键。其中英文字母只输出大写，每个坏键只输出一次。题目保证至少有 1 个坏键。
*/

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let arr = []
let main = function(n){
    arr.push(n.split(''))
}
let i = 2
rl.on('line', function(n) {
    if(i > 0){
        i--
        main(n)
    }
    if(i === 0 || n === 0){
        let a = new Set(arr[0]),b = new Set(arr[1])
        let c = [...a].filter((x) => !b.has(x))
        for(let i = 0;i < c.length;i++){
            c[i] = c[i].toUpperCase()
        }
        c = [...new Set(c)].join('')
        console.log(c)
        rl.close()
    }
})