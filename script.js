let ball= document.getElementById("ball");
document.addEventListener('keydown', moveBall);

let t=0;
let left=0;

function moveBall(event){
    // console.log(event);

    let browserHeight = document.documentElement.clientHeight;
    let browserwidth = document.documentElement.clientWidth;
    let elementWidth= ball.offsetWidth;

  console.log(browserHeight, browserwidth);

  let Key= event.keyCode;
  console.log(Key);

  


      //move with d & >//

      if(Key ==68 || Key==39){
        if(left+ elementWidth +10 <= browserwidth){
          ball.style.left = left+10+"px";
          left+=10;
        }
    }


    //move with s & //

    if(Key ==83 || Key==40){
      if(t + elementWidth +10 <= browserHeight){
        ball.style.top = t+10+"px";
        t+=10;
      }
  }


  //move with w & ^ //

  if(Key ==87 || Key==38){
    if(t -10 >= 0){
      ball.style.top = t-10+"px";
      t-=10;
    }
}


//move with a& >//

if(Key ==65 || Key==37){
  if(left -10 >= 0){
    ball.style.left = left-10+"px";
    left-=10;
  }
}
      


}
