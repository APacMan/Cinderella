$(function () {
    scorllTool();
    lunbo();
    moreNews();
});

function lunbo() {
    var current = 0;

    function move() {
        var ulObj = $('.screen ul');
        current -= 1;
        if (current < -1168) {
            ulObj.css('left', '0px');
            current = 0;
        } else {
            ulObj.css('left', current + "px");
        }
    }

    var timeId = setInterval(move, 10);
    $('.screen').hover(function () {
        clearInterval(timeId);
    }, function () {
        timeId = setInterval(move, 10);
    });
}

// 获取滚动的距离
function getScorll() {
    return {
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    }
}

// 滚动条
function scorllTool() {
    window.onscroll = function () {
        $('.tool').css('bottom', (20 - getScorll().top) + 'px');
        $('.tool').css('right', (0 - getScorll().left) + 'px');
        // console.log(getScorll().left);
    };

    // 返回顶端
    $('.returnTop').on('click', function () {
        $('html,body').animate({scrollTop: 0}, 500);
    });

    $('.erweima').hover(function () {
        $('.erweima div').css('display', 'block');
    }, function () {
        $('.erweima div').css('display', 'none');
    });

    $('.contact').hover(function () {
        $('.contact div').css('display', 'block');
    }, function () {
        $('.contact div').css('display', 'none');
    });
}

function moreNews() {
    var $item = $('.news-con-item');
    var flag = true;
    $('.news-more').on('click', function () {
        if ($item.length > 6) {
            console.log("1");
            for (var i = 6; i < $item.length; i++) {
                $($item[i]).fadeToggle('slow');
            }
        }
        if (flag) {
            $('.news-more').text('');
            console.log($('.news-more').text());
            flag = false;
        } else {
            $('.news-more').text('');
            flag = true;
        }
    });
}


var isUser = false;//变量：标记用户名是否通过
var isPwd = false;//变量：标记密码是否通过
function checkUserName() {
    //第一步获取用户名的input框中的value值
    var iput = document.getElementsByName("user")[0];
    //input中的value值
    var inputValue = iput.value;
    //对值进行判断，如果为空inputValue.length==0
    if (inputValue.length == 0) {
        iput.style.border = "1px solid deeppink";
        document.getElementById("umsg").style.opacity = 1;
        isUser = false;
    } else {
        iput.style.border = "1px solid gainsboro";
        document.getElementById("umsg").style.opacity = 0;
        isUser = true;
    }
}

function checkPwdName() {
    //对当前的密码进行校验
    var pinput = document.getElementsByName("pwd")[0];
    var pinputValue = pinput.value;
    if (pinputValue.length == 0) {
        pinput.style.border = "1px solid deeppink";
        document.getElementById("pmsg").style.opacity = 1;
        isPwd = false;
    } else {
        pinput.style.border = "1px solid gainsboro";
        document.getElementById("pmsg").style.opacity = 0;
        isPwd = true;
    }
}

function checkAll() {
    if (isUser == true && isPwd == true) {
        return true;//允许表单发送请求给服务器
    }
    alert("请检查选项");
    return false;//不允许表单发送请求给服务器
}

// 为按钮绑定点击事件，控制音频播放
var audioDom = document.querySelector('audio');
$('.audioControl').click(function () {
    if (audioDom.paused) {
        audioDom.play();
        $(this).css('background-image', 'url("images/play.png")');
    } else {
        audioDom.pause();
        $(this).css('background-image', 'url("images/pause.png")');
    }
});