// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え(デバッグ用): ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
//hantei();
//hantei();
//hantei();
//hantei();
// ボタンを押した後の処理をする関数 hantei() の定義
let send = document.querySelector('button#print');
send.addEventListener('click', hantei);

function hantei() {
  kaisu = kaisu + 1;
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso= Math.floor(document.querySelector('input[name="seisu"]').value);
  let x = document.querySelector('p#result');
  let y = document.querySelector('span#answer');
  y.textContent=yoso;
  let z=document.querySelector('span#kaisu');
  z.textContent=kaisu;

  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール

 console.log(kaisu+'回目の予想'+yoso);
 

  
    if(kaisu > 3) {
    x.textContent = '答えは ' + kotae + ' でした．すでにゲームは終わっています';
    } else if(kotae === yoso) {
      x.textContent = '正解です．おめでとう!';
    kaisu = 4;
    } else {
      if(kaisu === 3) {
          x.textContent = 'まちがい．残念でした答えは ' + kotae + ' です．';
      } else if(kotae > yoso) {
          x.textContent = 'まちがい．答えはもっと大きいですよ';
      } else {
          x.textContent = 'まちがい．答えはもっと小さいですよ';
      }
  }  
  
}
    

  
  
  
