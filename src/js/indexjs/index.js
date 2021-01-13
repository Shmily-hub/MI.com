import '../library/jquery';
$.ajax({
    type: "get",
    url: "../../../datainterface/getData.php",
    dataType: "json",
    success: function(res) {
        let temp = '';
        res.forEach((elm, i) => {
            let picture = JSON.parse(elm.picture);
            // console.log(picture);
            temp += `<li>
            <a href="#">
                <div class="figure">
                    <img data-original="${picture[0].src}" alt="" class="thumb lazy">
                </div>
                <div class="cleafix-title">
                    ${elm.title}
                </div>
                <p class="price">${elm.price}元起</p>
            </a>
        </li>`;
        });

        $('.list').append(temp);
    }
});

// (function(){
//     "use strict";
//     window.onload = function(){
//         // 首页时间计时器
//         let time1 = document.querySelector('.time1');
//         let time2 = document.querySelector('.time2');
//         let time3 = document.querySelector('.time3');
//         let times = setInterval(function(){
//             let date = new Date;
//             let hour,minute,second;
//             hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
//             minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
//             second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
//             let dateString = '';
//             time1.innerHTML = dateString.concat(hour);
//             time2.innerHTML = dateString.concat(minute);
//             time3.innerHTML = dateString.concat(second);
//         },1000);

//     }
// })();