// 答え


// 入力回数（予想回数）
let kaisu = 3;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();
hantei();
hantei();
hantei();
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;
  
  // 課題3-1: 正解判定する
  let h=0;
  let kotae;
    for(let i=0;i<2;i++){
      kotae = Math.floor(Math.random()*10) + 1;
      console.log('答え（デバッグ用）: ' + kotae);
      if(yoso==kotae){
         i=2;
         h=1;
         console.log("正解です．おめでとう!");
      }else if(yoso>kotae){
        console.log("まちがい．答えはもっと小さいですよ");
      }else if(yoso<kotae){
        console.log("まちがい．答えはもっと大きいですよ");
      }
    }
    /*if(h===0){
      kotae = Math.floor(Math.random()*10) + 1;
      console.log('答え（デバッグ用）: ' + kotae);
      if(yoso==kotae){
          if(yoso!=kotae){
            console.log("まちがい．残念でした答えは"+kotae+"です．");
          }else {
            console.log("正解です．おめでとう!");
          }
      }
      */
      
      
    }
    

  
  
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール

