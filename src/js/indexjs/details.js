import '../library/jquery.js';

let id = location.search.split('=')[1];

$.ajax({
    type: "get",
    url: "../../../datainterface/getItem.php",
    data: {
        id: id
    },
    dataType: "json",
    success: function(res) {
        let picture = JSON.parse(res.picture);

        let temp = `
        <h1>${res.title}</h1>
        <div class="p-picture">
            <img src="../${picture[1].src}">
        </div>
        <div class="p-price">
            <span class="yuan">￥</span>${res.price}
        </div>
        <div class="p-num">
            库存:${res.num}
        </div>
        <input type="number" value="1" min="1" max="${res.num}" id="num">
        <input type="button" value="加入购物车" id="addItem">
        <div>${res.details}</div>
        `;

        $('body').append(temp);
    }
});