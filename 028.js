
/**
 * 两数相除
 * @param {*} dividend 
 * @param {*} divisor 
 * @returns 
 */
var divide = function(dividend, divisor) {
    if(dividend === divisor){
        return 1
    }else{
        var count = []
        if(dividend >= 0&& divisor >0){
          number = deepDivide(dividend,divisor,count)
        }else{
            if(dividend >=0 && divisor < 0){
                divisor = -divisor
                number = deepDivide(dividend,divisor,count)
                number = -number
            }else if(dividend <= 0 && divisor > 0){
                dividend = -dividend
                number = deepDivide(dividend,divisor,count)
                  number = -number
            }else if(dividend <= 0&& divisor < 0){
                dividend = -dividend
                divisor = -divisor
                console.log(dividend,divisor)
                number = deepDivide(dividend,divisor,count)
            }
        }
    
                if(number > 2147483647){
                    number = 2147483647
                }
                if(number < -2147483648){
                    number = -2147483648
                }
            return  number 
    }
};
function deepDivide(dividend,divisor,count){
   if(dividend < divisor){
       var number = 0
      for(var i = 0; i < count.length;i++){
        number += Math.pow(2,count[i])
      }
      return number
   }else{
       var number = 0
       while(divisor<<number <= dividend&&divisor<<number > 0){
           number++
        }
        count.push(number - 1)
       return deepDivide(dividend - (divisor<<(number - 1)),divisor,count)
   }
}

// console.log(divide(
//     -2147483648,
//     -1))

/**
 * 这里我使用的是递归 + 位运算。
 * 在这里先说明一下，就是我们在js中定义的变量，存储的值是很大的，不只是[-2^31,2^31 - 1]。var a = xxx，这种
 * 它的值已经超过了上面的INT_MAX,INT_MIN。但是在js中的<<(位运算)，例如a<<b，一旦这个运算结果超过了2^31
 * 那么就会溢出，一旦溢出，那么就会值为负数。
 * 我们来讲解这个程序。首先我们判断 除数 === 被除数，那么直接返回1
 * 如果不等于，那么要分为四种情况，那即使除数/被除数分别为符数和非负数的时候。
 * 对于有负数存在，我们存储符号，然后将所有的数都变为正数，为的是递归函数内部的代码兼容
 * 然后我们来看递归函数的具体操作。递归的出口条件是当被除数 < 除数，那么被除数就相当于商。
 * 如果被除数大于除数，那么就会进入else分支，这个分支的整体思想是这样的：
 * 例子： 3 * x = 10
 * 3 << 1 = 6 且 3 << 2 = 12  3 << 1 <===> 3*2^1     3 << 2 <===> 3*2^2
 * 因12已经超过10的范围了，故y1 = 1。
 * 在else分支中的number这个变量就是存储x的。但是这里有一个问题，那就是关于位运算的特性。
 * 我们得到了number并不能说明这个number就是我们要的结果。我们举一个例子，例如 20/4 = 5
 * 如果我们按照位运算，那么第一次的number为2即 4*2^2，但是还有 5 - 4 = 1，所以我们还需要递归找出这个1。
 */