//img放大效果
{
    $('img').on('mouseenter', function () {
        // alert('aini')
        $(this).css('height', '100%')
        $(this).css('width', '100%')
    }).on('mouseleave', function () {
        // alert('aini')
        $(this).css('height', '95%')
        $(this).css('width', '95%')
    })
}
//轮播图
{
    var index = 0
    var items = $('.tp-item')
    var go = function () {
        items.removeClass('active')
        items.eq(index).addClass('active')
    }
    var gonext = function () {
        if (index == items.length - 1) {
            index = 0;
        } else {
            index++
        }
        go()
    }
    var goprev = function () {
        if (index == 0) {
            index = 1;
        } else {
            index--
        }
        go()
    }
    $('.point').on('click', function () {
        index = parseInt($(this).attr('num'))
        // console.log($(this).attr('num'))
        go()
    })
    var ismove = true
    setInterval(function () {
        if (ismove) {
            gonext()
        } else {
        }
    }, 2500)
    $('.lunbotu').on('mouseenter', function () {
        ismove = false
    }).on('mouseleave', function () {
        ismove = true
    })
}
//7组按钮弹起效果
{
    $('.no1').on('mouseenter', function () {
        $(this).css('top', '0px')
    }).on('mouseleave', function () {
        $(this).css('top', '8px')
    })
}

