function convertToRoman(num) {
    var answer=[];

    var roman=[[1,'I'],[4,'IV'],[5,'V'],[9,'IX'],[10,'X'],[40,'XL'],[50,'L']
           ,[90,'XC'],[100,'C'],[400,'CD'],[500,'D'],[900,'CM'],[1000,'M']];
    
    for(var i=roman.length-1;i>=0;i--){
        while(num>=roman[i][0]){
            answer.push(roman[i][1]);
            num-=roman[i][0];
        }
    }
    return answer.join('');
}
