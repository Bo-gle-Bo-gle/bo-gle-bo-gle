(() => {
  function move() {
    console.log('+');
    const $monster = document.querySelector('.area1');

// 간격이 점점 넓어짐..
      setInterval(function() {
        $monster.style.left = `${$monster.offsetLeft + 10}px`;
        console.log($monster.style.left);
        i++;
        if (i===20) clearInterval(interval);
      }, 200);

      $monster.style.left='400px';
  }
  function move2() {
    console.log('+');
    const $monster2 = document.querySelector('.area1-2');

      setInterval(function () {
        $monster2.style.left = `${$monster2.offsetLeft - 10}px`;
      }, 200);
  }
  setInterval(move, 3000);
  // setInterval(move2, 10000);

})();

/*
(() => {
  const $monster = document.querySelector('.monster');

  for (let i = 0; i < 20; i++) {
    for (let i = 1; i <= 20; i++) {
      console.log('+');
      setTimeout(function() {
      $monster.style.left = `${$monster.offsetLeft + 10}px`;
    }, 1000);
    }
    for (let i = 1; i <= 20; i++) {
      console.log('-');
      setTimeout(function() {
      $monster.style.left = `${$monster.offsetLeft - 10}px`;
    }, 1000);
    }
  }
})();

*/


//  if문 안됨
/*
(() => {

  const $monster = document.querySelector('.monster');

  let Change = true;
  if (Change) {
    for (let i = 1; i <= 20; i++) {
      setTimeout(() => {
        console.log('+');
        $monster.style.left = `${$monster.offsetLeft + i}px`;
      }, 20 * i);
      Change = false;
    }
  }

  if (!Change) {
    for (let i = 1; i <= 20; i++) {
      setTimeout(() => {
        console.log('-');
        $monster.style.left = `${$monster.offsetLeft - i}px`;
      }, 20 * i);
    }
  }
})();

*/
/*
(() => {

  const $monster = document.querySelector('.area1');

  for (let i = 1; i <= 20; i++) {
    setTimeout(() => {
      console.log('+');
      $monster.style.left = `${$monster.offsetLeft + i}px`;
    }, 20 * i);
  }

  //610
  const $monsterBack = document.querySelector('.area1-2');

  for (let i = 1; i <= 20; i++) {
    setTimeout(() => {
      console.log('+');
      $monsterBack.style.left = `${$monsterBack.offsetLeft + i}px`;
    }, 20 * i);
  }
})();
*/
/*
(() => {

  const $monster = document.querySelector('.monster');
setInterval
    for (let i = 1; i <= 20; i++) {
      setTimeout(() => {
        console.log('+');
        $monster.style.left = `${$monster.offsetLeft + i}px`;
      }, 20 * i);

    }
  }, 1000);
  setInterval(() => {
    for (let i = 1; i <= 20; i++) {
      setTimeout(() => {
        console.log('-');
        $monster.style.left = `${$monster.offsetLeft - i}px`;
      }, 20 * i);
    }
  }, 1000);
})();

*/
/*

(() => {
  const $monster = document.querySelector('.area1');
  let n = 0;
  //오른쪽 이동

  setTimeout(() => {
    setIn terval(() => {
      console.log('-');
      $monster.style.left = `${$monster.offsetLeft +10}px`;
    }, 500);
  }, 3000);

  if (n === 3) {
    console.log('-');
  }
})();

*/
/*
(() => {
  const $monster = document.querySelector('.area1');
  let n = 0,x=3;
  //오른쪽 이동


  setInt erval(() => {
    console.log('-');
    $monster.style.left = `${$monster.offsetLeft +10}px`;
    
    if (n === x) {
      console.log('-');
      x+=x;
    }
  }, 500);


})();
*/