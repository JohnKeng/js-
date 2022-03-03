function getDateTime(date = new Date()) {
  let arr = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()];

  arr = arr.map(item => item < 10 ? `0${item}` : item);

  return `${arr.slice(0, 3).join('-')} ${arr.slice(3).join(':')}`;
}

function getDateTime2(date = new Date()) {
  const times = date.getTime() - date.getTimezoneOffset() * 6e4;
  return new Date(times).toISOString().slice(0,19).replace('T', ' ')
}


const cn = ['年', '月','日 ', '時', '分', '秒'];

// const ret = getDateTime2(date= new Date()).split(/[-:\s]/).map((val, index) => val + cn[index]).join('');
