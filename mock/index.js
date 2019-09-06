/**
 * create by yanle
 * create time 2019-09-05 23:21
 */

const path = require('path');

module.exports = {
  'GET /api/paper': {
    data: {
      id: 11,
    },
    time: null,
    message: '',
    status: 0,
  },

  'POST /api/users': function (req, res) {
    console.warn('post record:=========================');
    console.warn(req.body);
    res.json({
      data: {
        id: 14,
      },
      time: null,
      message: '',
      status: 0,
    });
  },
};
