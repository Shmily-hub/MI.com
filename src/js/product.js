import './library/jquery.js';
import { cookie } from './library/cookie.js';

let id = location.search.split('=')[1];

$.ajax({
    type: "get",
    url: "../../interface/getItem.php",
    data: {
        id: id
    },
    dataType: "json",
    success: function(res) {
        console.log(res);
        let picture = JSON.parse(res.picture);


        let temp = `
        <h2>${res.title}</h2>
        <p class="product">${res.details}</p>
        <p style="margin-top: 14px;color: #ff6700;font-size: 14px;">小米自营</p>
        <div class="price">
        <span>${res.price}元</span>
        `;
        let img = `<img  src="${picture[0].src}" alt="">`;
        let cun =
            $('.left-a').prepend(img)
        $('.particulars-right').prepend(temp)
        if (res.num > 0) {
            $(".site-b").html(`存货为 ${res.num}`);
            $(".love-a a").html("加入购物车");
        } else {
            $(".site-b").html(`该地区暂时缺货`);
            $(".love-a a").html("到货通知");
        }
        // 加入购物车
        let totalli = `<li class="nodeli">碎屏保障服务 <span>159元</span></li>`

        $('.love').on('click', function(ev) {
            //注册按钮按下的时候
            // window.localStorage.setItem("Phone", "自己的手机号")
            //登录的时候
            // if (window.localStorage.getItem("Phone" === input.value)


            //购物车
            //详情页加入购物车的时候
            // window.localStorage.setItem("buyName", "小米11")
            // window.localStorage.setItem("buyPrice", "4158")
            //在进入到购物车页面的时候，直接取值渲染
            //let aaa = window.localStorage.getItem("buyPrice");
            //渲染到页面
            //span.html(aaa);
            //点击增加物品的时候
            //aaa++，然后在点击事件内部进行一次渲染span.html(aaa);
            //点击付款按钮的时候，弹出框，提示您以支付多少元，价钱直接取span里面的值



            $('.nodeli').detach();
            if ($(ev.target).attr('class') === 'love-a') {
                if ($($('.space-a li .safeguard h3')[0]).attr('class') === 'colo') {
                    $('.total li').after(totalli);
                    // $('.total-a').html(`总计:${res.price} + 159`);
                    $('.total-a').html(+res.price + 159);
                    // console.log($('.total-a').val());
                }
            }

        });



        let totala = `
        <ul>
        <li>${res.title} <span>${res.price}元</span></li>
        </ul>
        <div>总计:<span class="total-a">${res.price}</span></div>
        `
        $('.total').prepend(totala)


        //碎屏保障服务
        let i = 1;
        $('.space-a li').on('click', function() {

            i++;
            $(this).toggleClass("boder");
            $(this).find('.safeguard h3').toggleClass("colo");
            if (i % 2) {
                $(this).find(".hasApply").prop("checked", false);
            } else {
                $(this).find(".hasApply").prop("checked", true);
            }


        })
        let i_b = 1;
        $('.space-b li').on('click', function() {
            i_b++;

            if (i_b % 2) {
                $(this).removeClass("boder");
                $(this).find('.safeguard h3').removeClass("colo");
                $(this).find(".hasApply").prop("checked", false);
            } else {
                $(this).find(".hasApply").prop("checked", true);
                $(this).addClass("boder");
                $(this).find('.safeguard h3').addClass("colo");
            }

            if ($(".space-b li input[name='applymentid']:checked").length > 2) {
                $(this).find(".hasApply").prop("checked", false);
                $(this).find('.safeguard h3').removeClass('colo');
                $(this).removeClass('boder');
            }
        })




        // let temp = `
        // <h1>${res.title}</h1>
        // <div class="p-picture">
        //     <img src="../${picture[1].src}">
        // </div>
        // <div class="p-price">
        //     <span class="yuan">￥</span>${res.price}
        // </div>
        // <div class="p-num">
        //     库存:${res.num}
        // </div>
        // <input type="number" value="1" min="1" max="${res.num}" id="num">
        // <input type="button" value="加入购物车" id="addItem">
        // <div>${res.details}</div>
        // `;

        // $('body').append(temp).find('#addItem').on('click', function() {
        //     addItem(res.id, res.price, $('#num').val());
        // });
    }
});

console.log($('.total-a').val());

function addItem(id, price, num) {
    let shop = cookie.get('shop'); // 获得cookie数据
    let product = {
        id,
        price,
        num
    };

    if (shop) { // 判断购物车是否有添加过数据
        shop = JSON.parse(shop); //将JSON字符串转回数组

        // 判断购物车中是否存在该商品
        if (shop.some(elm => elm.id == id)) {
            // 修改数量
            shop.forEach(el => {
                el.id == id ? el.num = num : null;
            });
        } else {
            shop.push(product);
        }

    } else {
        shop = []; // 初始没有数据 初始化一个空数组
        shop.push(product); // 将第一个商品添加进数组
    }


    cookie.set('shop', JSON.stringify(shop), 1);

}

// -------------------------