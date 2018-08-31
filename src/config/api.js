/**
 * 接口通用配置
 */

import Vue from 'vue'
import axios from 'axios'

Vue.prototype.axios = axios
/* ------------------------------ 网站baseURL ------------------------------ */
const baseURL = 'http://192.168.115.247:83/api'
Vue.prototype.host = 'http://192.168.115.247:83'
axios.defaults.baseURL = baseURL
