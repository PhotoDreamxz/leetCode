/**
 * 
 * @param {} s 
 */
 var romanToInt = function(s) {
    var sum = 0
    console.log(s.length)
    while(s.length !== 0){
      if(s.charAt(0) === 'C'&&s.charAt(1) === 'M'){
            sum += 900
            s = s.slice(2)
            
        }
       else if(s.charAt(0) === 'M'){
            sum += 1000
            s = s.slice(1)
            
        }
         
       else if(s.charAt(0) === 'C'&&s.charAt(1) === 'D'){
            sum += 400
            s = s.slice(2)
            
        }
       else  if(s.charAt(0) === 'D'){
            sum += 500
            s = s.slice(1)
            
        }
         
       else if(s.charAt(0) === 'X'&&s.charAt(1) === 'C'){
            sum += 90
            s = s.slice(2)
            
        }
       else  if(s.charAt(0) === 'C'){
            sum += 100
            s = s.slice(1)
            
        }
       else if(s.charAt(0) === 'X'&&s.charAt(1) === 'L'){
            sum += 40
            s = s.slice(2)
            
        }
       else  if(s.charAt(0) === 'L'){
            sum += 50
            s = s.slice(1)
            
        }
        
       else if(s.charAt(0) === 'I'&&s.charAt(1) === 'X'){
            sum += 9
            s = s.slice(2)
            
        }
       else  if(s.charAt(0) === 'X'){
            sum += 10
            s = s.slice(1)
            
        }
        
       else if(s.charAt(0) === 'I'&&s.charAt(1) === 'V'){
            sum += 4
            s = s.slice(2)
            
            
        }
       else  if(s.charAt(0) === 'V'){
            sum += 5
            s = s.slice(1)
            
        }
       else  if(s.charAt(0) === 'I'){
            sum += 1
            s = s.slice(1)
            
        }else{
            ;
        }
    }
    return sum
};

console.log(romanToInt('"MMCCCXCIX"'))