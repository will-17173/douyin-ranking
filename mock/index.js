const Mock = require('mockjs')
const Random = Mock.Random;
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(Mock.mock({
    "result": "success",
    "messages": [],
    "fieldErrors": {},
    "errors": [],
    "data": {
      "pageSize": 5,
      "pageNo": 1,
      "totalPage": 0,
      "totalCount": 0,
      "listData": []
    }
  }))
})

router.get('/home', (req, res, next) => {
  res.json(Mock.mock({
    result: 'success',
    data: {
      "hotVideo|8": [
        {
          "id|+1": 0,
          "rate": 91.7,
          "img": "/static/img/1.png",
          "title": "09月24日"
        }
      ],
      "hotMusic|8": [
        {
          "id|+1": 0,
          "img": "/static/img/2.png",
          "title": "4394人参与"
        }
      ],
      "rank|3": [
        [
          {
            "id|+1": 0,
            "avatar": "/static/img/3.png",
            "name": "莉哥o3o",
            "rate": "989.5"
          }
        ]

      ]
    }
  }))
})

router.get('/videos', (req, res, next) => {
  setTimeout(() => {
    res.json(Mock.mock({
      result: 'success',
      data: {
        total: 999,
        pageSize: 10,
        totalPage: 100,
        'listData|10': [
          {
            'id|+1': 0,
            'title': '记住：你是公主殿下、你要是哭了。他们都该死…',
            'img': Random.image('207x276'),
            'rate': '99.9',
            'likes': 9999,
            'createAt': 1539062004010,
            'tags': '公主,公主,公主,公主,公主,公主'
          }
        ]
      }
    }))
  }, 1000);

})

router.get('/videoCategories', (req, res, next) => {
  res.json(Mock.mock({
    result: 'success',
    data: {
      'listData|30': [
        {
          'id|+1': 0,
          'name': '搞笑'
        }
      ]
    }
  }))  


})

module.exports = router;
