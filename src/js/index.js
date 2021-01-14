    import '../js/library/jquery.js';
    import 'https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js';
    import 'https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js';
    // let id = location.search.split('=')[1];

$.ajax({
    type: "GET",
    url: "../../datainterface/getData.php",
    dataType: "json",
    success: function(res) {
        let temp = '';
        res.forEach((elm,i) => {
        let pic = JSON.parse(elm.img);
        temp += `
        <li>
        <a href="../Code/details.html?id=${elm.id}">
            <div class="figure">
                <img data-original="${pic[0].src}" alt="" class="thumb lazy">
            </div>
            <div class="cleafix-title">
                ${elm.pro_title}
            </div>
            <p class="price">1999元起</p>
        </a>
    </li>

        `;
        });
        $('.cleafix').append(temp);
    }
});


$(function() {
    $("img.lazy").lazyload({effect: "fadeIn"});
});

