var lotto=[];

while(lotto.length < 6){
    var num=parseInt(Math.random()*45 +1);
    if(lotto.indexOf(num)==-1 ){ 
        lotto.push(num)
    }
}
document.write("<div class='ball ball1'>"+lotto[0]+"</div>");
document.write("<div class='ball ball2'>"+lotto[1]+"</div>");
document.write("<div class='ball ball3'>"+lotto[2]+"</div>");
document.write("<div class='ball ball4'>"+lotto[3]+"</div>");
document.write("<div class='ball ball5'>"+lotto[4]+"</div>");
document.write("<div class='ball ball6'>"+lotto[5]+"</div>");
/*
볼 배경화면 - 새로고침할 때마다 랜덤으로 색이 나오는거 
rgb(,,) - 숫자 랜덤으로 나와서 그걸 랜덤으로 rgb()에 숫자 넣는걸로

*/