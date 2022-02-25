let c = 0;

let x = document.getElementById('x').src;
let o = document.getElementById('o').src;
let s = document.getElementById('s').src;
let n = document.getElementById('n').src;
let b = document.getElementById('b').src

let case0 = document.getElementById('0').src;
let case1 = document.getElementById('1').src;
let case2 = document.getElementById('2').src;
let case3 = document.getElementById('3').src;
let case4 = document.getElementById('4').src;
let case5 = document.getElementById('5').src;
let case6 = document.getElementById('6').src;
let case7 = document.getElementById('7').src;
let case8 = document.getElementById('8').src;

let arr = new Array(case0, case1, case2, case3, case4 ,case5, case6, case7, case8)

let t;
let u;

function play(i){
   if(document.getElementById(i).src == s){
      c++
      let mod = c % 2

      if(mod == 1){
         document.getElementById('icx').style.display = 'none';
         document.getElementById('ico').style.display = 'inline';
         document.getElementById(i).src = x;
         arr[i] = document.getElementById(i).src
      }else{
         document.getElementById('icx').style.display = 'inline';
         document.getElementById('ico').style.display = 'none';
         document.getElementById(i).src = o;
         arr[i] = document.getElementById(i).src;
      }
   }

   if((arr[0]==x && arr[1]==x && arr[2]==x) || (arr[3]==x && arr[4]==x && arr[5]==x) || (arr[6]==x && arr[7]==x && arr[8]==x)){
      if((arr[0]==x && arr[1]==x && arr[2]==x)){
         for(t = 3; t <= 8; t++){
            document.getElementById(t).src = b;
         }
      }else if((arr[3]==x && arr[4]==x && arr[5]==x)){
         for(t = 0; t <= 2; t++){
            document.getElementById(t).src = b;
         }
         for(t = 6; t <= 8; t++){
            document.getElementById(t).src = b;
         }
      }else if((arr[6]==x && arr[7]==x && arr[8]==x)){
         for(t = 0; t <= 5; t++){
            document.getElementById(t).src = b;
         }
      }
      document.getElementById('winer').innerHTML= "palyer (x) is the winner";
      document.getElementById('reload').style.display = "block";
      
   }else if((arr[0]==x && arr[3]==x && arr[6]==x) || (arr[1]==x && arr[4]==x && arr[7]==x) || (arr[2]==x && arr[5]==x && arr[8]==x)){
      if((arr[0]==x && arr[3]==x && arr[6]==x)){
         for(t = 1; t <= 2; t++){
            document.getElementById(t).src = b;
         }
         for(t = 4; t <= 5; t++){
            document.getElementById(t).src = b;
         }
         for(t = 7; t <= 8; t++){
            document.getElementById(t).src = b;
         }
      }else if((arr[1]==x && arr[4]==x && arr[7]==x)){
         document.getElementById('0').src = b;
         document.getElementById('2').src = b;
         document.getElementById('3').src = b;
         document.getElementById('5').src = b;
         document.getElementById('6').src = b;
         document.getElementById('8').src = b;
      }else if((arr[2]==x && arr[5]==x && arr[8]==x)){
         document.getElementById('0').src = b;
         document.getElementById('1').src = b;
         document.getElementById('3').src = b;
         document.getElementById('4').src = b;
         document.getElementById('6').src = b;
         document.getElementById('7').src = b;
      }
      document.getElementById('winer').innerHTML= "palyer (x) is the winner";
      document.getElementById('reload').style.display = "block";
   }else if((arr[0]==x && arr[4]==x && arr[8]==x) || (arr[2]==x && arr[4]==x && arr[6]==x)){
      if((arr[0]==x && arr[4]==x && arr[8]==x)){
         document.getElementById('1').src = b;
         document.getElementById('2').src = b;
         document.getElementById('3').src = b;
         document.getElementById('5').src = b;
         document.getElementById('6').src = b;
         document.getElementById('7').src = b;
      }else if((arr[2]==x && arr[4]==x && arr[6]==x)){
         document.getElementById('0').src = b;
         document.getElementById('1').src = b;
         document.getElementById('3').src = b;
         document.getElementById('5').src = b;
         document.getElementById('7').src = b;
         document.getElementById('8').src = b;
      }
      document.getElementById('winer').innerHTML= "palyer (x) is the winner";
      document.getElementById('reload').style.display = "block";
   }else if((arr[0]==o && arr[1]==o && arr[2]==o) || (arr[3]==o && arr[4]==o && arr[5]==o) || (arr[6]==o && arr[7]==o && arr[8]==o)){
      if((arr[0]==o && arr[1]==o && arr[2]==o)){
         for(u = 3; u <= 8; u++){
            document.getElementById(u).src = b;
         }
      }else if((arr[3]==o && arr[4]==o && arr[5]==o)){
         for(u = 0; u <= 2; u++){
            document.getElementById(u).src = b;
         }
         for(u = 6; u <= 8; u++){
            document.getElementById(u).src = b;
         }
      }else if((arr[6]==o && arr[7]==o && arr[8]==o)){
         for(u = 0; u <= 5; u++){
            document.getElementById(u).src = b;
         }
      }
      document.getElementById('winer').innerHTML= "palyer (o) is the winner";
      document.getElementById('reload').style.display = "block";
   }else if((arr[0]==o && arr[3]==o && arr[6]==o) || (arr[1]==o && arr[4]==o && arr[7]==o) || (arr[2]==o && arr[5]==o && arr[8]==o)){
      if((arr[0]==o && arr[3]==o && arr[6]==o)){
         for(u = 1; u <= 2; u++){
            document.getElementById(u).src = b;
         }
         for(u = 4; u <= 5; u++){
            document.getElementById(u).src = b;
         }
         for(u = 7; u <= 8; u++){
            document.getElementById(u).src = b;
         }
      }else if((arr[1]==o && arr[4]==o && arr[7]==o)){
         document.getElementById('0').src = b;
         document.getElementById('2').src = b;
         document.getElementById('3').src = b;
         document.getElementById('5').src = b;
         document.getElementById('6').src = b;
         document.getElementById('8').src = b;
      }else if((arr[2]==o && arr[5]==o && arr[8]==o)){
         document.getElementById('0').src = b;
         document.getElementById('1').src = b;
         document.getElementById('3').src = b;
         document.getElementById('4').src = b;
         document.getElementById('6').src = b;
         document.getElementById('7').src = b;
      }
      document.getElementById('winer').innerHTML= "palyer (o) is the winner";
      document.getElementById('reload').style.display = "block";
   }else if((arr[0]==o && arr[4]==o && arr[8]==o) || (arr[2]==o && arr[4]==o && arr[6]==o)){
      if((arr[0]==o && arr[4]==o && arr[8]==o)){
         document.getElementById('1').src = b;
         document.getElementById('2').src = b;
         document.getElementById('3').src = b;
         document.getElementById('5').src = b;
         document.getElementById('6').src = b;
         document.getElementById('7').src = b;
      }else if((arr[2]==o && arr[4]==o && arr[6]==o)){
         document.getElementById('0').src = b;
         document.getElementById('1').src = b;
         document.getElementById('3').src = b;
         document.getElementById('5').src = b;
         document.getElementById('7').src = b;
         document.getElementById('8').src = b;
      }
      document.getElementById('winer').innerHTML= "palyer (o) is the winner";
      document.getElementById('reload').style.display = "block";
   }else if(c == 9){
      document.getElementById('winer').innerHTML= "no one is the winner";
      document.getElementById('reload').style.display = "block";
   }
}