function counter(amount){
   let notes=[500,200,100,50,20,10] 
   let result={}
   for(note of notes){
       let count=Math.floor(amount/note)
       if(count>0){
           result[note]=count
           amount %=note
       }
   }
  
   return result
}


console.log(counter(350));

// input - 3000
// output - 2000 : 1
//          500 : 2

