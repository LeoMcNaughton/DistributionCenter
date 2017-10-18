const product = functions(){
let name = makeName();
let price = makePrice();
let space = makePrice();
let prime = Prime();
 
function makeName(){
    for(x=0;x<10;x++){
        let word = "";
        let c = Math.floor(25*Math.random())+65;
        let letter = String.fromCharCode();
        let word += letter;
          }
          return word;
     }
 function makePrice(){
     for(x-0;x<10;x++){
         let price = Math.floor(Math.random()*10000/100);
         let space = Math.floor(Math.random()*10000/100);

     }

 }
 function Prime(){
        let randoNum = Math.random()*100;
        if(randoNum > 50){
            prime = true;
        }
        else{
            prime = false;
        }

    }
    return(name,price,space,prime)
}
