import Mock from 'mockjs'
import mockData from './mockData.json'

Mock.mock('/mock',{status:0, msg:mockData})