/**
 * 接口通用配置
 */

import Vue from 'vue'
import axios from 'axios'

Vue.prototype.axios = axios
/* ------------------------------ 网站baseURL ------------------------------ */
const baseURL = 'http://localhost:83/api'
Vue.prototype.host = 'http://localhost:83'
axios.defaults.baseURL = baseURL
