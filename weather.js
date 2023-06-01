let b = document.querySelector('#print');
b.addEventListener('click',sendRequest);

function sendRequest(){
    let i = document.querySelector('input[name="basyo"]');
    let id = i.value;
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+id+'.json';
    
    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);

    }

    // data をコンソールに出力
    console.log(data);

    // data.x を出力
    console.log(data.x);




    let names = data.name;
    let a = document.querySelector('dd#names');
    a.textContent = names;

    
    
    for (let n of data.weather){
        let weather = (n.description);
    let b = document.querySelector('dd#weather');
    b.textContent =  weather;
    }
    let temp_max = data.main.temp_max;
    let c = document.querySelector('dd#temp_max');
    c.textContent =  temp_max + '℃';
    
    let temp_min = data.main.temp_min;
    let d = document.querySelector('dd#temp_min');
    d.textContent =  temp_min + '℃';

    let humidity = data.main.humidity
    let e = document.querySelector('dd#humidity');
    e.textContent =  humidity ;

    let windspeed = data.wind.speed;
    let f = document.querySelector('dd#windspeed');
    f.textContent =  windspeed ;
    
    let lon = data.coord.lon;
    let o = document.querySelector('dd#lon');
    o.textContent =  lon ;

    let lat= data.coord.lat;
    let t = document.querySelector('dd#lat');
    t.textContent =  lat;
    



}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
    
    
}

