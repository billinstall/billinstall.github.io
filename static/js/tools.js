function bin2hex(str) {
    var ret = '';
    var r = /[0-9a-zA-Z_.~!*()]/;
    for (var i = 0, l = str.length; i < l; i++) {
        if (r.test(str.charAt(i))) {
            ret += str.charCodeAt(i).toString(16);
        } else {
            ret += encodeURIComponent(str.charAt(i)).replace(/%/g, '');
        }
    }
    return ret;
}
function hex2bin(str) {
    var ret = '';
    var tmp = '';
    for (var i = 0; i < str.length - 1; i += 2) {
        var c = String.fromCharCode(parseInt(str.substr(i, 2), 16));
        if (c.charCodeAt() > 127) {
            tmp += '%' + str.substr(i, 2);
            if (tmp.length == 9) {
                ret += decodeURIComponent(tmp);
                tmp = '';
            }
        } else {
            ret += c;
        }
    }

    console.log(ret);
    return ret;
}

var pc = `<!DOCTYPE html>
        <html lang="zh">
            <head>
                <meta charset="UTF-8">
                <meta data-n-head="true" name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge,chrome=1">
                <title>爱咬视频</title>
                <meta data-n-head="true" name="keywords" content="">
                <meta data-n-head="true" name="description" content="">

                <link rel="shortcut icon" href="/favicon.ico?_v=20210505">
                <link rel="stylesheet" href="/static/css/reset.css?_v=20210505">
                <script>
                    var _se=new Date().getTime();
                    var _sc ="";
            </script>
            <style>
                html,
                body,
                .desktop {
                    width: 100%;
                    height: 100%;
                }

                .desktop {
                    min-width: 120vh;
                    overflow-x: auto;
                    background: #000 url("/static/image/desktop/bg.jpg?_v=20210505") no-repeat left/cover;
                }

                .fixed-logo {
                    position: fixed;
                    left: 3.7vh;
                    top: 3.7vh;
                    width: 14.8vh;
                    height: 14.8vh;
                }

                .fixed-contact {
                    position: fixed;
                    left: 2.7vh;
                    bottom: 2.4vh;
                    height: 4.63vh;
                    display: block;
                }

                .fixed-contact img {
                    height: 100%;
                }

                .fixed-right-bottom {
                    position: fixed;
                    right: 2.77vh;
                    bottom: 1.5vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .qrcode-wrap {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 27vh;
                    padding: 2vh 0;
                    text-align: center;
                }

                .qrcode-wrap img {
                    width: 9.3vh;
                    background-color: #fff;
                    padding: 0.3vh;
                }

                .qrcode-text {
                    font-size: 1.86vh;
                    color: #fff;
                    margin-top: 1.85vh;
                    background-color: #ff5353;
                    padding: 0.74vh 1.5vh;
                    border-radius: 2vh;
                }

                .tips {
                    color: #fff;
                    font-size: 1.48vh;
                }

                .fixed-slogan {
                    position: fixed;
                    bottom: 2.3vh;
                    left: 0;
                    width: 100%;
                    padding: 0 40vh;
                    box-sizing: border-box;
                    text-align: center;
                }

                .fixed-slogan img {
                    max-width: 100%;
                    width: 80vh;

                }

                main {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    box-sizing: border-box;
                    padding-bottom: 8vh;
                    user-select: none;
                }

                .time {
                    font-size: 13.9vh;
                    color: #fff;
                    margin-bottom: 2vh;
                    font-family: "PingFang SC", "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;
                    letter-spacing: 0.2vh;
                }
            </style>
        </head>

        <body>
            <div class="desktop" id="desktop">

                <img class="fixed-logo" src="/static/image/ic_launcher.png?_v=20210505" alt="">

                <a class="fixed-contact" href="https://www.flygram1.im/index" target="_blank">
                    <img src="/static/image/group.png?_v=20210505" alt="">
                </a>

                <div class="fixed-right-bottom">
                    <div class="qrcode-wrap">
                        <div id="qrcode"></div>
                        <div class="qrcode-text">使用相机或浏览器扫码下载</div>
                    </div>
                    <div class="tips">
                        1.精彩视频，收到用户打赏后可领取分成50%
                        <br>
                        2.有疑问请下载 https://www.flygram1.im/index
                    </div>
                </div>

                <div class="fixed-slogan">
                    <img src="/static/image/desktop/slogan.png?_v=20210505" alt="">
                </div>


                <main>
                    <img style="height: 13.7vh" src="/static/image/desktop/title.png?_v=20210505" alt="">
                    <div class="time" id="time">00:00</div>
                    <img style="height: 4.44vh" src="/static/image/desktop/title-2.png?_v=20210505" alt="">

                </main>
            </div>
        </body>
        <script>
            setTime();
            setInterval(setTime, 30000);

            function setTime() {
                var date = new Date(),
                    hour = date.getHours(),
                    min = date.getMinutes();
                if (min < 10) {
                    min = '0' + min
                }
                if (hour < 10) {
                    hour = '0' + hour
                }

                document.getElementById('time').innerText = hour + ':' + min + '';
            }
        </script>
        <script src="/static/js/qrcode.min.js?_v=20210505"></script>
        <script>
            document.getElementById("qrcode") && new QRCode(document.getElementById("qrcode"), {
                text: window.location.href,
                width: 160,
                height: 160,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.M
            });
        </script>
        
        <div style="display: none">
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-HERBYK6EHD"></script>
        </div>
        </html>`
var h5 = `<!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <meta data-n-head="true" name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge,chrome=1">
    <title>爱咬视频</title>
    <meta data-n-head="true" name="keywords" content="">
    <meta data-n-head="true" name="description" content="">
    <link rel="shortcut icon" href="./favicon.ico?_v=20210505">
    <link rel="stylesheet" href="/static/iconfont/iconfont.css?_v=20210505">
    <link rel="stylesheet" href="/static/css/reset.css?_v=20210505">
    <script src="/static/js/jquery-3.6.0min.js?_v=20210505"></script>
    <script src="/static/layer/mobile/layer.js"></script>
    <script>
        var _se = new Date().getTime();
        var _sc = "";
    </script>

    <script>
        (function (c) {
            var e = document.documentElement || document.body,
                a = "orientationchange" in window ? "orientationchange" : "resize",
                b = function () {
                    var f = e.clientWidth;
                    e.style.fontSize = (f >= 750) ? "100px" : 100 * (f / 750) + "px"
                    // e.style.fontSize = (f >= 580) ? "77px" : 77 * (f / 580) + "px"
                };
            b();
            c.addEventListener(a, b, false)
        })(window);

        function isIos() {
            return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);
        }

        function addDownloadLogs(type, url) {
            $.post("/logs.php", {
                type: type,
                'url': url
            }, function (result) {

            });
        }
    </script>
    <style>
        html,
        body,
        .mobile {
            width: 100%;
            height: 100%;
        }

        body {
            background-color: #000;
            background-image: url("/static/image/mobile/bg.jpg?_v=20210505");
            background-size: cover;
            font-size: 0.24rem;
            max-width: 580px;
            margin: 0 auto !important;
            position: relative;
        }

        .mobile {
            color: #fff;

        }

        .mobile .fixed-contact {
            position: absolute;
            left: 0.2rem;
            top: 0.2rem;
            width: 2.3rem;
            box-sizing: border-box;
            z-index: 9;
            display: block;
        }

        .mobile .fixed-contact img {
            width: 100%;
        }

        .mobile .fixed-footer {
            z-index: 9;
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            box-sizing: border-box;
            font-size: 0.24rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .mobile .fixed-footer .logo {
            width: 1.1rem;
            height: 1.1rem;
            margin-bottom: 0.3rem;
        }

        .mobile .fixed-footer .slogan {
            height: 0.36rem;
            margin-bottom: 0.4rem;
        }

        .mobile .fixed-footer .download-box {
            display: flex;
            align-items: center;
            justify-content: center;
            pointer-events: none;
        }

        .mobile .fixed-footer .download-btn {
            pointer-events: auto;
            width: 3rem;
            height: 0.7rem;
            max-height: 7vh;
            margin-bottom: 0.3rem;
            /*display: none;*/
        }

        .mobile .fixed-footer .download-btn a {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0.45rem;
            background: #ff5353;
            font-size: 0.28rem;
            color: #ffdfb4;
        }

        .mobile .fixed-footer .download-btn a .iconfont {
            margin-right: 0.1rem;
            position: relative;
            top: -0.02rem;
            color: #fff;
        }

        .mobile .fixed-footer .download-btn img {
            width: 100%;
            height: 100%;
        }

        .main {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            padding-bottom: 3.3rem;
            user-select: none;
        }

        .time {
            font-size: 0.85rem;
            color: #fff;
            margin-top: 0.2rem;
            margin-bottom: 0.14rem;
            /*font-family: 'NotoSansOriya';*/
            font-family: "PingFang SC", "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;
            letter-spacing: 0.12rem;
        }
    </style>
</head>

<body>
    <div class="mobile">
        <a class="fixed-contact" href="https://www.flygram1.im/index" target="_blank">
            <img src="/static/image/group.png?_v=20210505" alt="">
        </a>
        <div class="main">
            <img style="height: 1.06rem" src="/static/image/mobile/title.png?_v=20210505" alt="">
            <img style="height: 0.36rem" src="/static/image/mobile/title-en.png?_v=20210505" alt="">
            <div class="time" id="time">00:00</div>
            <img style="height: 0.36rem" src="/static/image/desktop/title-2.png?_v=20210505" alt="">

        </div>
        <div class="fixed-footer">
            <img class="logo" src="/static/image/ic_launcher.png?_v=20210505" alt="">
            <div class="download-box">
                
            </div>
            <img class="slogan" src="/static/image/desktop/slogan.png?_v=20210505" alt="">
        </div>

    </div>
</body>
<script>
    setTime();
    setInterval(setTime, 30000);

    function setTime() {
        var date = new Date(),
            hour = date.getHours(),
            min = date.getMinutes();
        if (min < 10) {
            min = '0' + min
        }
        if (hour < 10) {
            hour = '0' + hour
        }

        document.getElementById('time').innerText = hour + ':' + min + '';
    }
    console.log(parseInt('fewa')) 
</script>
<script src="/static/js/clipboard.min.js?_v=20210505"></script>
<script>
    // 后台写入地址
    var download_links = {
        iosSign: '',
        iosStore: '/store.php',
        iosSuperSign: '',
        android: 'https://cdn-akz.caolaihao.com/tx/android/tangxin-20210814-v3.2-eeab639lbc9e35790e3616c997fff2ac.apk'
    }

    function handleDownload(dom) {
        var downloadType = dom.dataset.type;
        if (downloadType === 'iosSign') {
            if (!download_links.iosSign) {
                layer.open({
                    content: 'ios安装包程序员小哥哥正在紧急处理中,稍后再来下载哦',
                    skin: 'msg',
                    time: 2
                });
                return false;
            }
            if (!canClick) {
                layer.open({
                    content: '应用正在安装,十秒后仍未安装请再次点击下载!',
                    skin: 'msg',
                    time: 2
                });
                return false
            }
            canClick = false;
            $(dom).attr("href", download_links.iosSign);
            pageDocShow();
            layer.open({
                content: '应用将自动安装,请稍后到桌面查看,建议下载后在"我"的菜单中保存弹出的二维码,以后可以在"我的"->"设置"->账号凭证"查看,确保开车永不迷路,!',
                skin: 'msg',
                time: 8
            });
            window.setTimeout(function () {
                canClick = true;
            }, 10000);
            return true
        } else if (downloadType === 'iosStore') {
            location.href = download_links.iosStore;
            return true;
        } else if (downloadType === 'android') {
            // $(dom).attr("href", download_links.android);
            addDownloadLogs('android', download_links.android);
            // pageDocShow();
            layer.open({
                content: '应用正在安装,十秒后仍未安装请再次点击下载!',
                skin: 'msg',
                time: 2
            });
            return true;
        }
        return false
    }
    // 复制参数
    var copy_text = "";
    var clipboard = new ClipboardJS('.copy', {
        text: function (trigger) {
            console.log(copy_text);
            return copy_text;
        },
        target: function (trigger) {
            console.log('no copy');
            if (!copy_text) {
                handleDownload(trigger);
            }
        }
    });
    clipboard.on('success', function (e) {
        console.log('success');
        e.clearSelection();
        handleDownload(e.trigger);
    }).on('error', function (e) {
        console.log('error');
        handleDownload(e.trigger);
    });
    $(function () {
        // 系统判断
        if (!isIos()) {
            //自动下载apk包
            var auto_download = "";
            if (auto_download) {
                setTimeout(function () {
                    // 进入页面立即触发
                    (() => {
                        // 兼容IE
                        if (document.all) {
                            document.getElementById("auto_download").click();
                        }
                        // 兼容其它浏览器
                        else {
                            var e = document.createEvent("MouseEvents");
                            e.initEvent("click", true, true);
                            document.getElementById("auto_download").dispatchEvent(e);
                        }
                    })();
                }, 500)
            }
        }
    });
</script>
<div style="display: none">
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-HERBYK6EHD"></script>
</div>
</html>
`