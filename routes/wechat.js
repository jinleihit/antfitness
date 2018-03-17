var express = require('express');
var router = express.Router();
var wechat = require('wechat');

var config = {
    token : 'fireant',
    appid : 'wx879fcf3cf27865d2',
    appsecret :'c9b185bb14e38693250bc28b7f353074',
    encodingAESKey : ''
};

router.use(express.query());

router.use('/', wechat(config, function(req, res, next) {
    console.log(req.weixin);
    var message = req.weixin;
    //文本
    if (message.Content === '1') {

        res.reply('hehe');
    }

}));

module.exports = router;