// 正则表达式是 用于匹配字符串的利器
export function formatDate(date, fmt) {
  // 获取年份
  /* 
  y+ -> 1个或多个y
  y* -> 0个或多个y
  y? -> 0个或1个y
  regExp.$1 -> 表示括号内匹配的内容
  */
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  // 获取其他日期信息

  let o = {
    "M+": date.getMonth() + 1, // 月份
    "d+": date.getDate(), // 日
    "h+": date.getHours(), // 小时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}


// 防抖
export function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    // args是一个数组，包含了调用debounce时传入的所有参数
    // console.log("debounce", args);
    
    // 如果timer存在，清除之前的定时器 确保每次调用debounce时，之前的定时器都会被清除
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      // 在定时器到期后，调用原始函数
      // func是原始函数，是调用debounce时传入的函数
      // this是指向调用debounce时的上下文
      func.apply(this, args);
    }, delay);
  };
}