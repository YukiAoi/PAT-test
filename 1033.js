/*
旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。现在给出应该输入的一段文字、以及坏掉的那些键，打出的结果文字会是怎样？

输入格式：
输入在 2 行中分别给出坏掉的那些键、以及应该输入的文字。其中对应英文字母的坏键以大写给出；每段文字是不超过 10 
5
  个字符的串。可用的字符包括字母 [a-z, A-Z]、数字 0-9、以及下划线 _（代表空格）、,、.、-、+（代表上档键）。题目保证第 2 行输入的文字串非空。

注意：如果上档键坏掉了，那么大写的英文字母无法被打出。

输出格式：
在一行中输出能够被打出的结果文字。如果没有一个字符能被打出，则输出空行。
*/

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let arr = []
let main = function(n){
    arr.push(n)
}
let i = 2
rl.on('line', function(n) {
    if(i > 0){
        i--
        main(n)
    }
    if(i === 0 || n === 0){
        let reg
        arr[0] = arr[0].split('')
        for(let i = 0;i < arr[0].length;i++){
            switch(arr[0][i]){
                case '.':
                    arr[1] = arr[1].replace(/[\.]/g,'')
                    break
                case '+':
                    arr[1] = arr[1].replace(/[A-Z]/g,'')
                    break
                default:
                    if(/[A-Z]/.test(arr[0][i])){
                        reg = new RegExp(`[${arr[0][i]}${arr[0][i].toLowerCase()}]`,'g')
                        arr[1] = arr[1].replace(reg,'')
                    }else{
                        reg = new RegExp(`[${arr[0][i]}]`,'g')
                        arr[1] = arr[1].replace(reg,'')
                    }
                    break
            }
        }
        console.log(arr[1])
        rl.close()
    }
})