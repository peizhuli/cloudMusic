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
    var strsec = time;
    var exp = new Date();
    exp.setTime(exp.getTime() + strsec*1);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
  },
  formatterDuration: (duration) => {
    let mininus = parseInt(duration / 60) < 10 ? '0' +  parseInt(duration / 60) : parseInt(duration / 60);
    let sec = parseInt(duration % 60) < 10 ? '0' + parseInt(duration % 60) : parseInt(duration % 60);
    let time = mininus + ':' + sec;
    return time;
  }
}
