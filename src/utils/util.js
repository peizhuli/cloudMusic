/**
 * Created by Y on 2018/10/25.
 */
export default {
  setSessionStore: (attr, value) => {
    if(!attr) return;
    if(typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    window.sessionStorage.setItem(attr, value);
  },
  getSessionStore: (attr) => {
    if(!attr) return;
    return window.sessionStorage.getItem(attr);
  },
  removeSessionStore: (attr) => {
    window.sessionStorage.removeItem(attr);
  },
  setLocalStore: (attr, value) => {
    if(!attr) return;
    if(typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    window.localStorage.setItem(attr, value);
  },
  getLocalStore: (attr) => {
    if(!attr) return;
    return window.localStorage.getItem(attr);
  },
  removeLocalStore: (attr) => {
    window.localStorage.removeItem(attr);
  },
  setCookie: (name,value,time) => {
    let strsec = time;
    let exp = new Date();
    exp.setTime(exp.getTime() + strsec*1);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
  },
  formatterDuration: (duration) => {
    let time = '';
    let mininus = '';
    let hour = parseInt(duration / 60 / 60);
    hour = hour > 0 ? hour < 10 ? '0' + hour : hour : 0;
    if(hour > 0) {
      mininus = parseInt(duration / (hour * 60 )) < 10 ? '0' +  parseInt(duration / (hour * 60)) : parseInt(duration / (hour * 60));
    } else {
      mininus = parseInt(duration / 60) < 10 ? '0' +  parseInt(duration / 60) : parseInt(duration / 60);
    }
    let sec = parseInt(duration % 60) < 10 ? '0' + parseInt(duration % 60) : parseInt(duration % 60);
    time = hour > 0 ? hour + ':' + mininus + ':' + sec : mininus + ':' + sec;
    return time;
  },
  formatterTime: function (time) {
    let currentTime = new Date(time);
    let year = currentTime.getFullYear();
    let month = currentTime.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = currentTime.getDay();
    day = day < 10 ? '0' + day : day;
    return year + '年' + month + '月' + day + '日';
  },
  timeToSec: function(time) {
    let hour = parseInt(time.substr(0,1));
    let minute = parseInt(time.substr(1,2));
    let sec = parseInt(time.substr(3,5));
    return (hour * 10 + minute) * 60 + sec;
  }
}
