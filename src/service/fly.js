/**
 * Created by Y on 2018/10/19.
 */
import request from 'flyio';
request.interceptors.request.use( request => {

 return request;
});

request.interceptors.response.use( (response, promise) => {

  return promise.resolve(response.data);
}, (err, promise) => {
  return promise.reject();
});

export default request;
