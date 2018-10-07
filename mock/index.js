const Mock = require('mockjs')
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

module.exports = router;
