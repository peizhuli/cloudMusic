/**
 * Created by Y on 2018/10/19.
 */
import request from 'flyio';
request.config.timeout = 5000;
request.config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
request.interceptors.request.use( req => {
 req.withCredentials = true;
 return req;
});

request.interceptors.response.use( (response, promise) => {
  if(response.data.code == 301) {
    alert('请先登录！');
  }
  return promise.resolve(response.data);
}, (err, promise) => {
  console.log(err);
  alert('操作失败！');
  return promise.reject();
});

export default request;
