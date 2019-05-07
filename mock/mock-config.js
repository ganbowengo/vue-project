const Mock = require('mockjs');
import login from './login'

Mock.mock('/frontend/sys/login', 'post', login)