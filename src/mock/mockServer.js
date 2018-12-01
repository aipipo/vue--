import Mock from 'mockjs'
import HomeData from './datahome'
import TopicData from './datatopic'
import NavData from './datanav'

Mock.mock('/homedata', {
  code: 0,
  data: HomeData
})
Mock.mock('/topicdata', {
  code: 0,
  data: TopicData
})
Mock.mock('/navdata', {
  code: 0,
  data: NavData.categoryL1List
})
