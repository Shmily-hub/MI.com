import './library/jquery.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js';
import 'https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js';
// import { cookie } from './library/cookie.js';
let id = location.search.split('=')[1];
$.ajax({
    type:"get",
    url:"../../datainterface/getItem.php",
    data:{
        id:id
    },
    dataType:"json",
    success:function(res){
        console.log(res);
        let pic = JSON.parse(res.img);
        let temp = `
        <h4>${res.pro_title}</h4>
            <p class="right-content_p">
                <span>「十年献礼，巅峰美学；最高享12期免息」</span>
                ${res.sale}
            </p>
            <p class="companf-info" title="企业名称：小米通讯技术有限公司
                企业执照注册号：91110108558521630L
                企业地址：北京市海淀区西二旗中路33号院6 号楼9层019号
                企业电话：400-100-5678
                营业期限：2010年08月25日 至 2040年08月24日
                经营范围：开发手机技术、计算机软件及信息技术；技术检测、技术咨询、技术服务、技术转让；计算机技术培训；系统集成；货物进出口、技术进出口、代理进出口；家用电器、通信设备、广播电视设备（不含卫星电视广播、地面接收装置）、机械设备、电子产品、文化用品的批发零售；维修仪器仪表；销售医疗器械I类、II、III类、针纺织品（含家纺家饰）、服装鞋帽、日用杂货、工艺品、文化用品、体育用品、照相器材、卫生用品（含个人护理用品）、钟表眼镜、箱包、家具（不从事实体店铺经营）、小饰品、日用品、乐器、自行车、智能卡；计算机、通讯设备、家用电器、电子产品、机械设备的技术开发、技术服务；销售金银饰品（不含金银质地纪念币）；家用空调的委托生产；委托生产翻译机；销售翻译机、五金交电（不含电动自行车）、厨房用品、陶瓷制品、玻璃制品、玩具、汽车零配件、食用农产品、花卉、苗木、宠物用品、建筑材料、装饰材料、化妆品、珠宝首饰、通讯设备、卫生间用品、农药；生产手机（仅限在海淀区永捷北路2号三层生产及外埠生产）；出版物批发；出版物零售；销售食品。（销售第三类医疗器械以及销售食品以及依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动。）">小米自营</p>
            <div class="price-info">
                <span class="yuan">
                    ${res.pro_price}
                </span>
            </div>
        `
        $('.right-content').append(temp);
    }
});


$(function() {
    $("img.lazy").lazyload({effect: "fadeIn"});
});