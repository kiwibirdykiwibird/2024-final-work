let gameover = false;//게임오버
let finalover = false;//끝
let imgfin;//끝
let img;//베경
let img2;//스도
let img3;//스도
let img4;//지도
let img5;//행인1
let img6;//행인2
let img7;//행인3
let img8;//건담
let img9;//로켓
let img9_1;//로켓 회전
// let img10;//발사1
// let img11;//발사2
// let img12;//발사3
// let img13;//발사4
// let img14;//발사5
// let img
//phase0 시작화면
let img15;//우주장애물
let img16;//우주배경
let img17;
let img18;
let img19;//과제
let img20;//조커
let img21;//character5
let img22;//cafe

//phase1 지하철
let phase1 = true;
let ww = 424;//스크린도어 가로
let wh = 521;//스크린도어 세로
let dm = 0; // 스크린도어 이동
let dm2 = 0; //지하철문 이동
let dw = 350;//지하철문 가로
let dh = 550;//지하철문 세로
let soundpower_y = wh/2;//사운드바
let timebar = 0; //시간
let sm = 1000;//지하철 이동
let p1x = 0; //행인들1
let p2x = 0; //행인들2
let p3x = 0; //행인들3
let p4x = 0;//건담
let su_y = -700; //성공메시지 위치

//phase2 쿠키런
let phase2 = false;
let player;
let obstacles = [];
let gravity_2 = 1;
let jumpForce = -25;
let score = 0;
let frame = 0;
let jumpFrame = 0;
let totalFrames_run = 12
let totalFrames_jump = 2;
let jumpFirstFrameDuration = 20;
let isrun = true;
let isjump = false;


//중간 애니메이션1 로켓에 탄다.
let phase3_1 = false;
let mov = 0;
let images = [];
let frameDelay = 10; // 애니메이션 프레임 
let currentFrame = 0; // 현재 애니메이션 프레임
let isAnimationComplete = false;//애니메이션 한번 실행하기 위함
//중간 애니메이션4 하늘로 올라간다.
let phase3_2 = false;
let skyColor;//하늘색
let transitionSpeed = 0.005; // 색상 전환 속도 
let t = 0; //lerpcolor함수용
let up = 1080;//로켓이동


//phase4주식
let phase4 = false;
let rocket;//로케트 로케트
let arrow; //장애물
let obpoint = 0;//장애물 움직임
let ran = 0; //장애물 위치용 랜덤
let count4 = 0;//장애물 카운트
//중간 애니메이션3

//보스전
let phase5 = false
let character; // 캐릭터 정보 저장
let bullets = []; // 총알 저장 배열
let gravity = 1; // 중력
let jumpPower = -20; // 점프 파워
let groundLevel; // 땅 높이
let isJumping = false; // 점프 상태 확인
let count=0;//총알 수
let count2=0;//장전 수
let reloading = false;//장전 상태 확인
let a= "active";// 장전 완료
let b = "reloading"; // 장전 중
let k ;//a,b텍스트 저장
let obs=[];
let score5 =0;
let time5 =0;

function preload(){
  img = loadImage('libraries/assets/지하철.png');
  img2 = loadImage('libraries/assets/스크린도어 문짝.png');
  img3 = loadImage('libraries/assets/스크린도어 문짝2.png');
  img4 = loadImage('libraries/assets/지하철문짝2.png');
  img5 = loadImage('libraries/assets/행인1.png');
  img6 = loadImage('libraries/assets/펭수.png');
  img7 = loadImage('libraries/assets/행인2.png');
  img8 = loadImage('libraries/assets/건담.png');
  img9 = loadImage('libraries/assets/로켓.png');
  img9_1 = loadImage('libraries/assets/로켓2.png');
  img15 = loadImage('libraries/assets/obst1.png');
  img16 = loadImage('libraries/assets/cyber background.png');
  img17 = loadImage('libraries/assets/run.png');
  img18 = loadImage('libraries/assets/jump.png');
  img19 = loadImage('libraries/assets/과제.png');
  img20 = loadImage('libraries/assets/joker.png');
  img21 = loadImage('libraries/assets/charac.png');
  imgfin = loadImage('libraries/assets/fin.png');
  img22 = loadImage('libraries/assets/카페.png');
  // img10 = loadImage('libraries/assets/rocket exhaust.png');
  // img11 = loadImage('libraries/assets/rocket exhaust 2.png');
  // img12 = loadImage('libraries/assets/rocket exhaust 3.png');
  // img13 = loadImage('libraries/assets/rocket exhaust 4.png');
  // img14 = loadImage('libraries/assets/rocket exhaust 5.png');
  images.push(loadImage('libraries/assets/rocket exhaust.png'));
  images.push(loadImage('libraries/assets/rocket exhaust 2.png'));
  images.push(loadImage('libraries/assets/rocket exhaust 3.png'));
  images.push(loadImage('libraries/assets/rocket exhaust 4.png'));
  images.push(loadImage('libraries/assets/rocket exhaust 5.png'));
  images.push(loadImage('libraries/assets/공백.png'));
}
function setup() {
  createCanvas(1920, 1080); // 캔버스 크기
  groundLevel = height - 50; // 땅 위치 
  //캐릭터 설정
  character = {
    x: width / 2,
    y: groundLevel,
    width: 50,
    height: 50,
    ySpeed: 0 // 수직 속도
  };
  //로케트설정
  rocket = {
    sizex: 50,
    sizey: 40,
    x: width/2 -700,
    y: height/2-25,
  };
  //우주 장애물 
  arrow = {
    sizex: 190,
    sizey: 1080,
    live: 150
  };
  player = {
    x: 300,
    y: height - 50,
    w: 50,
    h: 50,
    vy: 0,
  };

}

function draw() {
  if (gameover) {
    // 게임 종료 상태 화면 여러 이미지로 교체예정
    background(50);
    fill(255, 0, 0);
    textSize(48);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2);
    return;
  }

  background(220);


//PHASE1
if(phase1&&!phase5&&!phase4&&!phase2){
  push();
  translate(960,540);
  noFill();

  timebar +=1;//타임 이동

if(timebar >=50){//지하철이동
  sm-=20;
  if(sm <=0){
    sm =0;
  }
}

if(timebar >=150){//스크린도어 이동
  dm+=5;
  if(dm>=350){
    dm =350;
  }
}

if(timebar >=240){//지하철문 이동
  dm2+=5;
  if(dm2>=200){
    dm2 =200;
  }
}

if(mouseIsPressed){//소리 입력받아야 함. 지금은 키 누르기
  soundpower_y -=10;
  if(soundpower_y<=-wh/2){
    soundpower_y = -wh/2;
  }
}
else{
  soundpower_y +=10;
  if(soundpower_y >=wh/2){
    soundpower_y = wh/2;
  }
}//행인이동
if(soundpower_y<=0){
  p1x+=5;
}
if(soundpower_y<=-60){
  p2x-=7;
}
if(soundpower_y<=-60){
  p4x-=2;
}
if(soundpower_y<=-120){
  p3x+=10;
}
 if(-30+p3x >= 170){
  rect(-200,su_y,400,100);
  su_y+=5;
  if(su_y >= -50){
    su_y =-50;
  }
 }
 
 rect(-500,-500,timebar,50);//타임바
 image(img20,-420,-310);//지하철내부
 image(img4,-dw-dm2-sm,-dh/2+30);//좌측 지하철문짝
 image(img4,dm2-sm, -dh/2+30);//우측 지하철문짝
 image(img2,-ww-dm,-wh/2);//좌측스크린도어
 image(img3,dm, -wh/2);//좌측스크린도어
 image(img,-960,-540);//배경
 image(img5,50+p1x,-200);//행인1
 image(img6,-200+p2x,-150);//펭수
 image(img8,-500+p4x,-200);//건담
 image(img7,-80+p3x,-180);//건담
  //rect(-ww-dm,-wh/2, ww,wh);//좌측 스크린 도어
  //rect(dm, -wh/2, ww,wh);//우측 스크린 도어
  //rect(-dw-dm2-sm,-dh/2, dw,dh);//좌측 지하철 도어
  //rect(dm2-sm, -dh/2, dw,dh);//우측 지하철 도어
  rect(700,soundpower_y,100,500);//소리바
  //rect(50+p1x,-120,200,400);//행인1
  //rect(-200+p2x,-150,200,450);//행인2
  //rect(-30+p3x,-90,200,400);//행인3
  pop();
}
if(su_y==-50){
  phase1= false;
  phase2=true; // phase 바꾸기
 }
 if(timebar>=1000){
  gameover = true;
 }

//PHASE2
if(phase2&&!phase1&&!phase4&&!phase5&&!phase3_1){
  image(img22,0,0);
  updatePlayer();
  displayPlayer();

  // 장애물 생성
  if (frameCount % 120 === 0) {
    obstacles.push(createObstacle());
  }
  //5개로 제한

  // 장애물 업데이트 및 표시
  for (let i = obstacles.length - 1; i >= 0; i--) {
    if(score < 5){
    updateObstacle(obstacles[i]);
    displayObstacle(obstacles[i]);
    }
    
    // 충돌 감지
    if (checkCollision2(player, obstacles[i])) {
      gameover = true;
    }

    // 화면 밖으로 나간 장애물 제거
    if (obstacles[i].x < -obstacles[i].w) {
      obstacles.splice(i, 1);
      score++; // 점수 증가
    }
  }

}

if(score==5){
  phase2 = false;
  phase3_1 = true;
}
//phase3_1
if(phase3_1&&!phase4&&!phase2&&!phase5&&!phase3_2){
  image(img22,0,0);
  if(mov<1100){
    rect(100+mov,height - 50, 50, 50);//player과 동일
    //사람
    push();
    scale(-1, 1);
     let flippedX = -player.x - player.w-400; 
    
    let frameWidth = img17.width / totalFrames_run;
    

    // 좌표 보정
   
    image(img17, flippedX-mov, player.y-450 - player.h, frameWidth,img17.height, 
          frameWidth * floor(frame), 0, frameWidth, img17.height);

    
    frame += 0.2;
    if (frame >= totalFrames_run) {
      frame = 0;
    }
    pop();
    //
    image(img9,width-520,height-800);
  }
  
  mov +=8;
  if(mov >=1100){
    mov = 1100;
    if (!isAnimationComplete) {
      // 애니메이션 속도 조절
      if (frameCount % frameDelay === 0) {
        currentFrame++;
        if (currentFrame >= images.length) {
          isAnimationComplete = true; // 애니메이션 완료 표시
          currentFrame = images.length - 1; // 마지막 이미지 고정
        }
      }
    }
  
    //애니메이션
    image(images[currentFrame], 0, 0);
  }
}
if(currentFrame == images.length - 1){
  phase3_1 = false;
  phase3_2 = true;
}
//phase3_2
if(phase3_2&&!phase3_1&&!phase2&&!phase4&&!phase5){
  push();
    if (t < 1) {
      t += transitionSpeed; 
    }
  
    // 하늘  (파란색에서 검정색으로)
    skyColor = lerpColor(color(135, 206, 235), color(0, 0, 0), t);
  
    // 배경 색상 변경
    background(skyColor);
    //로켓이동
    //rect(260,up,50,50);
    image(img9,260,up, img9.width / 4, img9.height / 4);
    up-=7;
    // if(up<=515){
    //   up = 515
    // }
  pop();
}
if(t>=0.9){
  phase3_2 = false;
  phase4 = true;
}
//PHASE4
if(phase4&&!phase1&&!phase2&&!phase5&&!phase3_1&&!phase3_2){
  push();
  noFill();
  background(0,0,0);
  rect(width - obpoint, 0, arrow.sizex, arrow.sizey);//장애물 
  fill(0);
  rect(width - obpoint, 400 + ran, arrow.sizex, arrow.live);//사는 구역
  image(img15,width - obpoint,-465+ran);
  obpoint += 10;

  if (obpoint >= 1920+190) {
    obpoint = 0;
    obpoint += 10;
    count4 += 1;
    ran = round(random(-8, 8) * 50);//장애물이 화면 밖으로 나갔을 때
  }
  rect(rocket.x, rocket.y, rocket.sizex, rocket.sizey);
  image(img9_1,rocket.x-30, rocket.y-30, img9_1.width / 4, img9_1.height / 4);

    // 캐릭터 이동
    if (keyIsDown(87)) {
      rocket.y -= 10; // W 키
    }
    if (keyIsDown(83)) {
      rocket.y += 10; // S 키
    }
  pop();
}

    // 충돌 체크
    if (checkCollision(rocket, { 
      x: width - obpoint, 
      y: 0, 
      sizex: arrow.sizex, 
      sizey: 400 + ran 
    }) || 
    checkCollision(rocket, { 
      x: width - obpoint, 
      y: 400 + ran + arrow.live, 
      sizex: arrow.sizex, 
      sizey: arrow.sizey - (400 + ran + arrow.live) 
    })) {
      gameover = true;
    }


if (count4 >= 5) {//장애물 통과 횟수
  phase4 = false;
  phase5 = true;//phase5으로 이동
}

//PHASE5
  if(phase5&&!phase1&&!phase2&&!phase4&&!phase3_1&&!phase3_2){
  // 땅 그리기
  push();
  noFill();
  rect(0, groundLevel, width, height - groundLevel);
  image(img16,0,0,1920,1080);
  
  fill(255,255,0);
  rect(100,50,time5,40);
  time5+=1;

  
noFill();
  // 캐릭터 이동
  if (keyIsDown(65)) {
    character.x -= 5;
  }
  if (keyIsDown(68)) {
    character.x += 5;
  }
  if(keyIsDown(32)&& !isJumping){
    character.ySpeed = jumpPower;
    isJumping = true;
  }
  // 캐릭터 점프 물리 적용
  character.y += character.ySpeed;
  character.ySpeed += gravity;

  // 땅에 닿으면 멈추기
  if (character.y + character.height >= groundLevel) {
    character.y = groundLevel - character.height;
    character.ySpeed = 0;
    isJumping = false; // 땅에 닿았으니 점프 해제
  }
  character.x = constrain(character.x, 0, width - character.width)

  // 캐릭터 그리기
  //rect(character.x, character.y, character.width, character.height);
  image(img21,character.x, character.y)

  // 총알 업데이트 및 그리기
  for (let i = bullets.length - 1; i >= 0; i--) {
    let bullet = bullets[i];
    bullet.y -= bullet.speed; // 총알 위로 이동

    // 총알 화면 밖으로 나가면 제거
    if (bullet.y < 0) {
      bullets.splice(i, 1);
    } else {
      fill(0,255,0);
      rect(bullet.x, bullet.y, bullet.width, bullet.height);
    }
  }
//장애물
for (let i = obs.length - 1; i >= 0; i--) {
  let obstacle5 = obs[i];
  obstacle5.y += obstacle5.speed; // 장애물 아래로 이동

  // 장애물 바닥에 닿으면 제거
  if (obstacle5.y > height) {
    obs.splice(i, 1);
  } else {
    fill(0, 0, 255);
    rect(obstacle5.x, obstacle5.y, obstacle5.width, obstacle5.height);
  }

  // 장애물과 총알 충돌 체크
  for (let j = bullets.length - 1; j >= 0; j--) {
    let bullet = bullets[j];
    if (
      bullet.x < obstacle5.x + obstacle5.width &&
      bullet.x + bullet.width > obstacle5.x &&
      bullet.y < obstacle5.y + obstacle5.height &&
      bullet.y + bullet.height > obstacle5.y
    ) {
      // 충돌 시 제거
      bullets.splice(j, 1);
      obs.splice(i, 1);
      score5 += 5; // 점수 증가
      break;
    }
  }
}

// 장애물 생성 (프레임마다 확률적으로 생성)
if (frameCount % 60 === 0 && random(1) < 0.5) {
  obs.push({
    x: random(width),
    y: 0,
    width: 40,
    height: 40,
    speed: random(2, 5)
  });
}


  //남은 탄약 확인
  k=a;

  
  
  if(count>=10){
    reloading = true;
    k=b;
  

  }
        if(count2>=10){
      reloading = false;
      count = 0;
      count2 =0;
    }
  
  
  text(k,100,10);
  
  
let e = 200 - count * 20; 

if (count >= 0 && count <= 10) {
  fill(0,255,0);
  rect(10, 10, 20, e);
}

let f = count2 * 20; 

if (count2 >= 0 && count2 <= 10) {
  fill(0,255,0);
  rect(50, 10, 20, f);
}

// fill(0);
// textSize(32);
// text(`Score: ${score}`, 150, 40);

pop();
}
if(time5>=1600){
  finalover = true;
  phase5 = false;
}
 if(finalover&&!phase5){
  image(imgfin,0,0);
  textSize(60);
  fill(0);
  text(`100/ ${score5}`, 730, 640);
  noFill();
 }
}
//draw함수 끝
function keyPressed() {
  // 점프 처리
//   if (keyCode === 32 && !isJumping) { // 점프 중이 아닐 때만
//     character.ySpeed = jumpPower;
//     isJumping = true;
//   }
//리로딩
if (keyCode === ENTER && reloading === false){
    count +=1;
  }
  
  if (keyCode === UP_ARROW && reloading === true){
    count2 +=1;
  }


  // 총알 발사 처리
  if (keyCode === ENTER && reloading === false) { // 위 화살표로 발사
    bullets.push({
      x: character.x + character.width / 2 - 5, // 총알 x
      y: character.y, // 총알 y
      width: 10, // 총알 너비
      height: 20, // 총알 높이
      speed: 10 // 총알 이동 속도
    });
  }

//phase2
  // if (key === ' ' && phase2) {
  //   if (player.y >= height - player.h) {
  //     player.vy = jumpForce;
      
  //   }
  // }

}
function mousePressed() {
  // 점프 시작
  if (!isjump && isrun) {
    isrun = false;
    isjump = true;
    jumpFrame = 0;
    player.vy = jumpForce;
  }
}

// 충돌 여부 확인 함수
function checkCollision(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.sizex &&
    rect1.x + rect1.sizex > rect2.x &&
    rect1.y < rect2.y + rect2.sizey &&
    rect1.y + rect1.sizey > rect2.y
  );
}

//phase2
function createObstacle() {
  return {
    x: width,
    y: height - 50,
    w: 50,
    h: 50,
    speed: 8,
  };
}

function updatePlayer() {
  player.y += player.vy;
  player.vy += gravity_2;
  player.y = constrain(player.y, 0, height - player.h); // 바닥 넘지 않도록 제한
  if (player.y >= height - player.h) {
    player.y = height - player.h;
    player.vy = 0;
    isjump = false;
    isrun = true;
  }

}

function displayPlayer() {
  noFill();
  rect(player.x, player.y, player.w, player.h); // 주인공 그리기
    //애니메이션
    push();
    scale(-1, 1);
     let flippedX = -player.x - player.w-200; 
    if(isrun){
    
    let frameWidth = img17.width / totalFrames_run;
    

    // 좌표 보정
   
    image(img17, flippedX, player.y-450 - player.h, frameWidth,img17.height, 
          frameWidth * floor(frame), 0, frameWidth, img17.height);

    
    frame += 0.2;
    if (frame >= totalFrames_run) {
      frame = 0;
    }
  }else if (isjump) {
    // jump 애니메이션
    let frameWidth = img18.width / totalFrames_jump;
    if (jumpFrame < jumpFirstFrameDuration) {
      image(img18, flippedX, player.y-450 - player.h, frameWidth, img18.height, 
            0, 0, frameWidth, img18.height);
    } else {
      image(img18, flippedX, player.y-450 - player.h, frameWidth, img18.height, 
            frameWidth, 0, frameWidth, img18.height);
    }
    jumpFrame++;
    if (jumpFrame >= jumpFirstFrameDuration + totalFrames_jump * 10) {
      jumpFrame = 0;
    }
  }
  pop();
}

function updateObstacle(obstacle) {
  obstacle.x -= obstacle.speed;
}

function displayObstacle(obstacle) {
  noFill();
  rect(obstacle.x, obstacle.y, obstacle.w, obstacle.h); // 장애물 그리기
   image(img19,obstacle.x-30, obstacle.y-140);
}

function checkCollision2(player, obstacle) {
  return (
    player.x < obstacle.x + obstacle.w &&
    player.x + player.w > obstacle.x &&
    player.y < obstacle.y + obstacle.h &&
    player.y + player.h > obstacle.y
  );
}

