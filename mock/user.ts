import Mock from 'mockjs'

Mock.mock('/api/user/login', 'post', { username: 'admin', password: '123456' })
