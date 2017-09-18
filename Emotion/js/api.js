define(["ajax"], function(Ajax) {
    var host = 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize';
    var key = '23f057866fcd4db09d29c83895ac7698';

    return {
        //取得臉部資料
        getEmotion: function(option) {
            Ajax.post({
                url: host,
                key: key,
                headerType: 2,
                body: option.body,
                success: option.success,
                error: option.error
            })
        }
    }
});
