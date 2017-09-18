requirejs.config({
    // baseUrl: '../../',

    paths: {
        ajax: 'ajax',
        api: 'api',
        domUtil: 'domUtil',
        util: 'util'
    }
});

requirejs(['api', 'domUtil', 'util'], function (Api, DomUtil, Util) {

    var m_loading = document.getElementById('loadingDialog');
    var m_photo_info = document.getElementById('photo_info');
    var m_file;

    //監聽上傳圖片事件
    document.getElementById('inputFile').addEventListener('change', function (e) {
        for (var i = 0; i < this.files.length; i++) {
            m_loading.style.display = null;
            m_file = this.files[i];

            //將圖片顯示出來
            document.getElementById('photo_default_div').style.display = 'none';
            document.getElementById('photo').style.display = null;
            document.getElementById('photo').setAttribute('src', URL.createObjectURL(m_file));

            Api.getEmotion({
                body: m_file,
                success: function (data) {
                    m_loading.style.display = 'none';
                    if(data.length <= 0){
                        m_photo_info.innerHTML = '你不是人啊~~';
                        return;
                    }
                    var scores = data[0].scores;
                    var text = '';

                    console.log('data: ', scores);
                    text += '憤怒：' + Util.numberToPercent(scores.anger);
                    text += '　　蔑視：' + Util.numberToPercent(scores.contempt);
                    text += '<br>厭惡：' + Util.numberToPercent(scores.disgust);
                    text += '　　恐懼：' + Util.numberToPercent(scores.fear);
                    text += '<br>開心：' + Util.numberToPercent(scores.happiness);
                    text += '　　中立：' + Util.numberToPercent(scores.neutral);
                    text += '<br>悲傷：' + Util.numberToPercent(scores.sadness);
                    text += '　　驚訝：' + Util.numberToPercent(scores.surprise);

                    m_photo_info.innerHTML = text;
                },
                error: function (status, data) {
                    console.log('identifyFace status: ' + status + ', data: ' + data);
                    m_loading.style.display = 'none';
                    DomUtil.showErrorDialog('error: ' + data.error.message);
                }
            });
            //暫時只能單檔上傳所以只取一次
            break;
        }
    });
});
