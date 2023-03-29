export default function moveCharacter({style, offsetWidth, offsetLeft, offsetParent}, direction) {

    const WALL_WIDTH = document.querySelector('.sidewall li').clientWidth;


    // 지원 몬스터 kill
    const $bobby = document.getElementById('bobby');
    const $mst = document.querySelector('.monsterkArea');

    if($bobby.offsetLeft>=$mst.offsetLeft){
        console.log('meet');
        $mst.style.zIndex='-100';
      };
    
    // 적 죽일 때 스코어 올리기
    const $myscore = document.getElementById('myscore');
    const addScore = () => {
    $myscore.innerText = +$myscore.innerText+50;
    }
  
    console.log(addScore());
  


      // end kill
    
    switch (direction) {
        case 'ArrowRight':
            style.transform = 'scaleX(-1)';
            if (offsetLeft + offsetWidth + 15 > -WALL_WIDTH + offsetParent.offsetWidth)
                style.left = (-WALL_WIDTH + offsetParent.offsetWidth - offsetWidth) + 'px';
            else
                style.left = (offsetLeft + 15) + 'px';
            return;
        case 'ArrowLeft':
            style.transform = 'scaleX(1)';
            if (offsetLeft - 15 - WALL_WIDTH < 0) 
                style.left = WALL_WIDTH + 'px';
            else 
                style.left = (offsetLeft - 15) + 'px';
            return;
    }
}