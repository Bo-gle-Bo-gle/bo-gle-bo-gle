// 몬스터와 마주치면 모션 변화

// plan A) 좌표 겹쳐지면 모션


// (() => {
  const $bobby = document.getElementById('bobby');
  const $monster = document.querySelector('.monster');

  document.onclick=()=>{
    console.log($bobby.offsetLeft);
    console.log($monster.offsetLeft);
  }

  if($bobby.offsetLeft>=$monster.offsetLeft){
    console.log('좌표 성공!!');

  };




/*
  const $bobbyX = $bobby.getBoundingClientRect().x;
  const $mstX = $mst.getBoundingClientRect().x;

  if ($bobbyX === $mstX) {
    console.log('성공!!');

    // $bobby.style.transform = 'rotate(360deg)';
  }
*/


// })();