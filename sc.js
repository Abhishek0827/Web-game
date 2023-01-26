let page = document.getElementById("d1");
let start = document.getElementById("start"); //START BUTTON
let choice = document.querySelector(".m"); // GAME DISPLAY
let st = document.getElementById("stone"); // STONE
let pa = document.getElementById("paper"); //PAPER
let sc = document.getElementById("scissor"); //SCISSOR
//=============COMPUTER OPTION============================
let st2 = document.getElementById("stone2"); // STONE
let pa2 = document.getElementById("paper2"); //PAPER
let sc2 = document.getElementById("scissor2"); //SCISSOR
let option = ["st", "pa", "sc"];
//========================================================

let play;
let enter; //SELECTED OPTION
let count = 0;//PLAYER SCORE
let loss = 0;//COMPUTER SCORE
let p1 = 0;//TOTAL CHANCES
let computeroption;
let c;//RANDOM ARRAY NUMBER

//-----------GAME SOUNDS----------------
let a = new Audio("sound/win.mp3");
let b = new Audio("sound/lose.mp3");
let tie=new Audio("sound/tie.mp3");
let win = new Audio("sound/finalWin.mp3");
let lose = new Audio("sound/finallose.mp3");
//-----------GAME SOUNDS----------------

//===========================================================//
start.addEventListener("click", () => {
  play = "start";
  re.style.display = "flex";
  page.style.display = "none";
  choice.style.display = "block";
  console.log(play);
  //++++++++++++++++++++++++++++++++++++++++++++++++++++
  if (play == "start") {

    //==============PLAY AGANIN BUTTON==================
    document.getElementById("playagain").addEventListener("click", () => {
      //This button will set the values to default
      p1 = 0;//TOTAL CHANCES
      count = 0;//PLAYER SCORE
      document.getElementById("us").innerText = count;
      loss = 0;//COMPUTER SCORE
      document.getElementById("co").innerText = loss;
      re.style.display = "flex";
      choice.style.display = "block";
      document.getElementById("result").style.display = "none";
      document.getElementById("playagain").style.display = "none";
      document.getElementById("result").innerText = "  ";
      win.pause();
      lose.pause();
    });
    //=======================================================


    //USER OPTION STONE
    st.addEventListener("click", () => {
      p1++;
      enter = "st";
      st.style.color = "red";
      let c = Math.floor(Math.random() * 3);
      let computeroption = option[c];
      if (computeroption == "sc") {
        sc2.style.color = "red";
        pa2.style.color = "rgb(255, 183, 0)";
        st2.style.color = "rgb(255, 183, 0)";
        document.getElementById("outcome").innerText = "YOU WON";
        document.getElementById("outcome").style.color = "blue";
        count += 1;
        document.getElementById("us").innerText = count;
        a.play();
      } 
      else if (computeroption == "pa") {
        pa2.style.color = "red";
        st2.style.color = "rgb(255, 183, 0)";
        sc2.style.color = "rgb(255, 183, 0)";
        document.getElementById("outcome").innerText = "YOU LOST";
        document.getElementById("outcome").style.color = "red";
        // alert("YOU LOST");
        loss += 1;
        document.getElementById("co").innerText = loss;
        b.play();
      } 
      else {
        st2.style.color = "red";
        pa2.style.color = "rgb(255, 183, 0)";
        sc2.style.color = "rgb(255, 183, 0)";
        document.getElementById("outcome").innerText = "TIE";
        // alert("TIE");
        p1--;
        tie.play();
      }
      setTimeout(() => {
        st.style.color = "rgb(255, 183, 0)";
        st2.style.color = "rgb(255, 183, 0)";
        pa2.style.color = "rgb(255, 183, 0)";
        sc2.style.color = "rgb(255, 183, 0)";
        document.getElementById("outcome").innerText = "--";
        document.getElementById("outcome").style.color = "black";
      }, 600);

      if (p1 >= 3) {
        setTimeout(() => {
          let x = count > loss ? "PLAYER WON" : "PLAYER LOST";
          document.getElementById("result").style.display = "block";
          document.getElementById("playagain").style.display = "block";
          if (x == "PLAYER WON") {
            document.getElementById("result").style.color = "blue";
            win.play();
            // setTimeout(() => { win.pause()},1800);
          } else {
            document.getElementById("result").style.color = "red";
            lose.play();
          }
          document.getElementById("result").innerText = x;
          choice.style.display = "none";
          re.style.display = "none";
        }, 600);
      }
    });
    //++++++++++++++++++++++++++++++++++++++++++++++++++


    //USER OPTION PAPER
    pa.addEventListener("click", () => {
      p1++;
      enter = "pa";
      pa.style.color = "red";
      let c = Math.floor(Math.random() * 3);
      let computeroption = option[c];

      if (computeroption == "st") {
        st2.style.color = "red";
        pa2.style.color = "rgb(255, 183, 0)";
        sc2.style.color = "rgb(255, 183, 0)";
        document.getElementById("outcome").innerText = "YOU WON";
        document.getElementById("outcome").style.color = "blue";
        count += 1;
        document.getElementById("us").innerText = count;
        a.play();
      } 
      else if (computeroption == "sc") {
        sc2.style.color = "red";
        pa2.style.color = "rgb(255, 183, 0)";
        st2.style.color = "rgb(255, 183, 0)";
        document.getElementById("outcome").innerText = "YOU LOST";
        document.getElementById("outcome").style.color = "red";
        loss += 1;
        document.getElementById("co").innerText = loss;
        b.play();
      }
       else {
        pa2.style.color = "red";
        sc2.style.color = "rgb(255, 183, 0)";
        st2.style.color = "rgb(255, 183, 0)";
        document.getElementById("outcome").innerText = "TIE";
        p1--;
        tie.play();
      }
      setTimeout(() => {
        pa.style.color = "rgb(255, 183, 0)";
        sc2.style.color = "rgb(255, 183, 0)";
        pa2.style.color = "rgb(255, 183, 0)";
        st2.style.color = "rgb(255, 183, 0)";
        document.getElementById("outcome").innerText = "--";
        document.getElementById("outcome").style.color = "black";
      }, 600);

      if (p1 >= 3) {
        setTimeout(() => {
          let x = count > loss ? "PLAYER WON" : "PLAYER LOST";
          document.getElementById("result").style.display = "block";
          document.getElementById("playagain").style.display = "block";
          if (x == "PLAYER WON") {
            document.getElementById("result").style.color = "blue";
            
            win.play();
            // setTimeout(() => { win.pause()},1800);
          } else {
            document.getElementById("result").style.color = "red";
      
            lose.play();
          }
          document.getElementById("result").innerText = x;
          choice.style.display = "none";
          re.style.display = "none";
        }, 600);
      }
    });
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    //USER OPTION SCISSORS
    sc.addEventListener("click", () => {
      p1++;
      enter = "sc";
      sc.style.color = "red";
      let c = Math.floor(Math.random() * 3);
      let computeroption = option[c];

      if (computeroption == "pa") {
        pa2.style.color = "red";
        sc2.style.color = "rgb(255, 183, 0)";
        st2.style.color = "rgb(255, 183, 0)";
        document.getElementById("outcome").innerText = "YOU WON";
        document.getElementById("outcome").style.color = "blue";
        count += 1;
        document.getElementById("us").innerText = count;
        
        a.play();
      } 
      else if (computeroption == "st") {
        st2.style.color = "red";
        pa2.style.color = "rgb(255, 183, 0)";
        sc2.style.color = "rgb(255, 183, 0)";
        document.getElementById("outcome").innerText = "YOU LOST";
        document.getElementById("outcome").style.color = "red";
        loss += 1;
        document.getElementById("co").innerText = loss;
        b.play();
      } 
      else {
        sc2.style.color = "red";
        pa2.style.color = "rgb(255, 183, 0)";
        st2.style.color = "rgb(255, 183, 0)";
        document.getElementById("outcome").innerText = "TIE";
        p1--;
        tie.play();
      }
      setTimeout(() => {
        sc.style.color = "rgb(255, 183, 0)";
        st2.style.color = "rgb(255, 183, 0)";
        pa2.style.color = "rgb(255, 183, 0)";
        sc2.style.color = "rgb(255, 183, 0)";
        document.getElementById("outcome").innerText = "--";
        document.getElementById("outcome").style.color = "black";
      }, 600);

      if (p1 >= 3) {
        setTimeout(() => {
          let x = count > loss ? "PLAYER WON" : "PLAYER LOST";
          document.getElementById("result").style.display = "block";
          document.getElementById("playagain").style.display = "block";
          if (x == "PLAYER WON") {
            document.getElementById("result").style.color = "blue";
            win.play();
            // setTimeout(() => { win.pause()},1800);
          } else {
            document.getElementById("result").style.color = "red";
            lose.play();
          }
          document.getElementById("result").innerText = x;
          choice.style.display = "none";
          re.style.display = "none";
        }, 600);
      }
    });
  }
});

//===========================================================//
