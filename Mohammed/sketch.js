
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyACgRCAv-KcO9hdwSaQK98G-n4EPfq0g0g",
    authDomain: "bouncy-9e718.firebaseapp.com",
    databaseURL: "https://bouncy-9e718.firebaseio.com",
    projectId: "bouncy-9e718",
    storageBucket: "bouncy-9e718.appspot.com",
    messagingSenderId: "764326044449",
    appId: "1:764326044449:web:6ffe6aa240cd5b4a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let database = firebase.database()
let scoreboard = {   }
let name=document.getElementById("name")
let x;
let y;
let a;
let b;
let c;
let d;
let direction;
let score;
let enemy;
let level;
let direction2h;
let direction2v;
let time;
function setup() {
  createCanvas(windowWidth,windowHeight);
  s=width/925
  x=75
  y=400
  a=500
  b=500
  c=[75,150,250,350]
  d=[50,800,50,800]
  direction=[1,1,1,1]
  score=0
  enemy=4
  level=1
  direction2h=1
  direction2v=1
  time=60
}

function draw() {
  if (time>0) {
  background(15,125,205);
  fill(215,155,25)
  circle(x*s,y,20*s)
  text("Score: "+ score,50,50)
  text("Time: "+ time.toFixed(0),50,75)
  text("Level: "+ level,50,100)
  time=time-0.025
  if (keyIsDown(LEFT_ARROW)){
    x=x-5
}
  if (keyIsDown(RIGHT_ARROW)){
    x=x+5
}
  if (keyIsDown(DOWN_ARROW)){
    y=y+5
}
  if (keyIsDown(UP_ARROW)){
    y=y-5
}
  fill(255,255,255)
  circle(a*s,b,15*s)
  a=a+5*direction2h
  b=b+5*direction2v
  if (a*s>width || a*s<1){
    direction2h=direction2h*-1
  }
  if (b>height || b<1){
    direction2v=direction2v*-1
  }

  if (dist(x*s,y,a*s,b)<20+15){
    score=score+1
  }
  
for (i=1; i<enemy; i=i+1) {
    fill(255,0,0)
    circle(c[i]*s,d[i],15*s)
    d[i]=d[i]+5*direction[i]
    if (c[i]*s>width){
      direction[i]=direction[i]*-1
    }
    if (c[i]*s<1){
      direction[i]=direction[i]*-1
    }
    if (d[i]>height){
      direction[i]=direction[i]*-1
    }
    if (d[i]<1){
      direction[i]=direction[i]*-1
    }
    if (dist(x*s,y,c[i]*s,d[i])<20+15){
      score=score-1
    }
  }
  if (score>15 && level ==1) {
    enemy=enemy+1
    level=2
    c.push.apply(c,[450])
    d.push.apply(d,[50])
    direction.push.apply(direction,[1,1])
  }
  if (score>30 && level ==2) {
    enemy=enemy+1
    level=3
    c.push.apply(c,[550])
    d.push.apply(d,[800])
    direction.push.apply(direction,[1,1])
  }
  if (score>45 && level ==3) {
    enemy=enemy+1
    level=4
    c.push.apply(c,[650])
    d.push.apply(d,[50])
    direction.push.apply(direction,[1,1])
  }
  if (score>60 && level ==4) {
    enemy=enemy+1
    level=5
    c.push.apply(c,[750])
    d.push.apply(d,[800])
    direction.push.apply(direction,[1,1])
  }
  if (score>75 && level ==5) {
    enemy=enemy+1
    level=6
    c.push.apply(c,[850])
    d.push.apply(d,[50])
    direction.push.apply(direction,[1,1])
  }
  if (score>90 && level ==6) {
    enemy=enemy+1
    level=7
    c.push.apply(c,[50])
    d.push.apply(d,[800])
    direction.push.apply(direction,[1,1])
  }
  if (score>105 && level ==7) {
    enemy=enemy+1
    level=8
    c.push.apply(c,[715])
    d.push.apply(d,[800])
    direction.push.apply(direction,[1,1])
  }
  if (score>120 && level ==8) {
    enemy=enemy+1
    level=9
    c.push.apply(c,[615])
    d.push.apply(d,[50])
    direction.push.apply(direction,[1,1])
  }
  if (score>135 && level ==9) {
    enemy=enemy+1
    level=10
    c.push.apply(c,[515])
    d.push.apply(d,[50])
    direction.push.apply(direction,[1,1])
  }
  if (score>150 && level ==10) {
    enemy=enemy+1
    level=11
    c.push.apply(c,[415])
    d.push.apply(d,[800])
    direction.push.apply(direction,[1,1])
  }
  if (score>165 && level ==11) {
    enemy=enemy+1
    level=12
    c.push.apply(c,[315])
    d.push.apply(d,[50])
    direction.push.apply(direction,[1,1])
  }
  if (score>180 && level ==12) {
    enemy=enemy+1
    level=13
    c.push.apply(c,[215])
    d.push.apply(d,[800])
    direction.push.apply(direction,[1,1])
  }
  if (score>195 && level ==13) {
    enemy=enemy+1
    level=14
    c.push.apply(c,[115])
    d.push.apply(d,[50])
    direction.push.apply(direction,[1,1])
  }
  if (score>210 && level ==14) {
    enemy=enemy+1
    level=15
    c.push.apply(c,[815])
    d.push.apply(d,[800])
    direction.push.apply(direction,[1,1])
  }
  if (score>225 && level ==15) {
    enemy=enemy+1
    level=16
    c.push.apply(c,[815])
    d.push.apply(d,[50])
    direction.push.apply(direction,[1,1])
  }
  if (score>240 && level ==16) {
    enemy=enemy+1
    level=17
    c.push.apply(c,[715])
    d.push.apply(d,[50])
    direction.push.apply(direction,[1,1])
  }
  if (score>255 && level ==17) {
    enemy=enemy+1
    level=18
    c.push.apply(c,[615])
    d.push.apply(d,[800])
    direction.push.apply(direction,[1,1])
  }
  if (score>270 && level ==18) {
    enemy=enemy+1
    level=19
    c.push.apply(c,[515])
    d.push.apply(d,[800])
    direction.push.apply(direction,[1,1])
  }
  if (score>285 && level ==19) {
    enemy=enemy+1
    level=20
    c.push.apply(c,[415])
    d.push.apply(d,[50])
    direction.push.apply(direction,[1,1])
  }
  if (score>300 && level ==20) {
    enemy=enemy+1
    level=21
    c.push.apply(c,[315])
    d.push.apply(d,[800])
    direction.push.apply(direction,[1,1])
  }
  }
  else {
    name.innerHTML="Name? <input id='blah'><button onclick='restart()'>Restart</button> <button onclick=generate_alltime_leaderboard()>All-time leaderboard</button>"
    noLoop()
  }
}
function restart() {
  let blah = document.getElementById("blah")
  name=blah.value
  database.ref(name).set(score)
  if (name!="") {
    scoreboard[name]=score
  }
  alert(JSON.stringify(scoreboard,null,1))
  time=60
  score=0
  level=1
  x=75
  y=400
  a=500
  b=500
  c=[75,150,250,350]
  d=[50,800,50,800]
  direction=[1,1,1,1]
  score=0
  enemy=4
  loop()
  name.innerHTML=""
}
function generate_alltime_leaderboard() {
	let alltime_leaderboard = { }
	database.ref().orderByValue().limitToLast(3).on("value", function(snapshot) {
		snapshot.forEach(function(data) {
		alltime_leaderboard[data.key] = data.val()
		});
    	});
	if (Object.values(alltime_leaderboard).length > 0) {
	  alert("All-time leaderboard: " + JSON.stringify(alltime_leaderboard,null,1))
    	}
}

generate_alltime_leaderboard()
