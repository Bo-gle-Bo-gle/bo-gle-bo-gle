export default function attack({
  offsetTop,
  offsetLeft,
  style
}) {
  makeBubble(offsetTop, offsetLeft, style);
  setTimeout(() => style.backgroundImage = 'url(../img/icon/bobby01.png)', 500);
}

// 가장 가까운 적을 찾는 함수

// 적을 감지하는 함수
function touchesMonster($bubble, $monster) {

  return ($bubble.offsetLeft > $monster.offsetLeft - 20 
              && $bubble.offsetLeft < $monster.offsetLeft + 20)
    && ($bubble.offsetTop > $monster.offsetTop - 20
              && $bubble.offsetTop < $monster.offsetTop + 20);
  
}

// 방울 만드는 함수들
function makeBubble(offsetTop, offsetLeft, style) {

  /* 공격 모션 */
  style.backgroundImage = 'url(../img/icon/bobby03.png)';

  const $playGround = document.querySelector('.content');

  const $bubble = document.createElement('div');
  $bubble.classList.add('bubble');
  $bubble.style.position = 'absolute';
  $bubble.style.top = offsetTop + 'px';

  const isLeft = () => style.transform === 'scaleX(1)';

  if (isLeft())
    $bubble.style.left = (offsetLeft - 50) + 'px';
  else
    $bubble.style.left = (offsetLeft + 50) + 'px';

  $playGround.appendChild($bubble);

  moveBubble($bubble, isLeft);
}

function moveBubble($bubble, isLeft) {

  // 물방울 움직이는 거리
  const BUBBLE_MOVE_AMOUNT = 25;

  // 적 DOM
  // 지금은 하나지만 여러 적의 경우 배열로 받아서 처리할 예정
  const $monsters = [...document.querySelectorAll('.monster')];
  const $monster = $monsters[0];

  if (isLeft()) {
    for (let i = 1; i <= BUBBLE_MOVE_AMOUNT; i++) {
      setTimeout(() => {
        
        if ($bubble.offsetLeft < 50) return;
    
        if (touchesMonster($bubble, $monster)) {
          $monster.classList.add('getBubbled');
          return;
        }

        $bubble.style.left = `${$bubble.offsetLeft - i}px`;

      }, 20 * i);
    }
  } else {
    for (let i = 1; i <= BUBBLE_MOVE_AMOUNT; i++) {
      setTimeout(() => {

        if ($bubble.offsetLeft + $bubble.offsetWidth > $bubble.offsetParent.offsetWidth - 50) return;
        
        if (touchesMonster($bubble, $monster)) {
          $monster.classList.add('getBubbled');
          return;
        }

        $bubble.style.left = `${$bubble.offsetLeft + i}px`;

      }, 20 * i);
    }
  }
  removeBubble($bubble);
}

function removeBubble($bubble) {
  setTimeout(() => {
    $bubble.classList.add('getUp');
  }, 600);
  setTimeout(() => {
    $bubble.parentElement.removeChild($bubble);
  }, 3600);
}