import {get, post } from './index'
export const postlogin = p => post('http://47.103.88.0:8080/', p);
export const getlogin= p => get('http://47.103.88.0:8080/', p);