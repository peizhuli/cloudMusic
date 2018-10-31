/**
 * Created by Y on 2018/10/19.
 */
import request from 'flyio';
request.interceptors.request.use( req => {
 req.withCredentials = true;
 return req;
});

request.interceptors.response.use( (response, promise) => {

  return promise.resolve(response.data);
}, (err, promise) => {
  alert('操作失败！');
  return promise.reject();
});

export default request;
