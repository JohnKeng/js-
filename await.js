function getn(guess){
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      let n = parseInt(Math.random() * 6 + 1, 10); // 1~6
      if (n > 3) {
        if (guess === "大") {
          resolve(n);
        } else {
          reject(n);
        }
      } else {
        if (guess === "小") {
          resolve(n);
        } else {
          reject(n);
        }
      }
    }, 1000)
  })
}


async function play(){
  try {
    let n = await Promise.all([getn("大"), getn("大")]);
    console.log("好嗨哦 " + n);
  } catch (error) {
    console.log("输光了 " + error);
  }
}


play()
