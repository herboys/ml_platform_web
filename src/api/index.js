
import axios from 'axios';
import qs from 'qs'
import store from '@/store/index';
// 环境的切换
axios.defaults.baseURL =""
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 请求拦截器
// axios.interceptors.request.use(
//   config => {
//     console.log(store.token,"查看token")
//     if(store.token!==undefined){
//       const tokens=store.token
//               config.headers = {
//             "Content-Type": "application/json",
//             "authorization": tokens
//         }
//         return config;
//     }
//       return config;
//   },
//   error => {
//     return Promise.error(error);
//   })
axios.interceptors.request.use((config) => {
    //在发送请求之前做某件事
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    // console.log(store.token,'store.token')
    //         const tokens = store.token
    //         config.headers.common['Authorization'] = 'Bearer ' + tokens
    return config;
},(error) =>{
    console.log('错误的传参')
    return Promise.reject(error);
});

axios.interceptors.response.use(
    response => {
        console.log(response)
        if(response.headers.authorization!==undefined){
            console.log(response.headers.authorization)
            store.token=response.headers.authorization
            return Promise.resolve(response);
        }else {
            return Promise.resolve(response);
        }

    },
    error => {
      if (error.response.status) {
        switch (error.response.status) {
          case 401:
            break;
          case 500:
            break;
          case 404:
            alert("404")
            break;
          default:
            alert("1")
        }
        return Promise.reject(error.response);
      }
    })
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data)
    })
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
    console.log(params)
  return new Promise((resolve, reject) => {
      axios.post(url, params)
          .then(response => {
              resolve(response);
          }, err => {
              reject(err);
          })
          .catch((error) => {
              reject(error)
          })
  })
}
