(function(angular){
    "use strict";
    //定义模块
    var app = angular.module("myApp",[]);
    app.controller("myCtrl",["$scope",function($scope){
        $scope.addresslist = [ "安新","安国","安平","安泽","阿鲁科尔沁旗","敖汉旗","阿荣旗","阿尔山","阿巴嘎旗","阿拉善盟",
                    "阿拉善左旗","阿拉善右旗","鞍山","安图","安达","安吉","安庆","安溪","安义","安远","安福",
                    "安丘","安阳","安陆","安化","安乡","安仁","安岳","阿坝藏族羌族自治州","阿坝","安顺",
                    "安龙","安宁","昂仁","安多","阿里地区","安塞","安康","阿克塞哈萨克族自治县","阿拉尔","阿拉山口",
                    "阿克苏地区","阿克苏","阿瓦提","阿图什","阿克陶","阿合奇","阿勒泰地区","阿勒泰","澳门",
                "北京","霸州","保定","博野","泊头","柏乡","保德","包头","巴林左旗","巴林右旗","巴彦淖尔","北镇",
                "本溪","本溪满族自治县","北票","白城","白山","宾县","巴彦","拜泉","勃利","宝清", "北安","宝应",
                "滨海", "蚌埠","亳州", "滨州","博兴","博爱","宝丰","泌阳","保康","巴东","保靖","博罗","宾阳","百色",
                "北流","博白","北海","巴马瑶族自治县","白沙黎族自治县","保亭黎族苗族自治县","北川羌族自治县","宝兴",
                "巴中", "白玉","巴塘","布拖","毕节","保山","宾川","白朗","八宿","边坝",
        "昌黎","赤城","磁县","成安","承德","沧州","沧县","长治","赤峰","察哈尔右翼前旗",
            "察哈尔右翼中旗","察哈尔右翼后旗","陈巴尔虎旗","长海","朝阳","昌图","长春","长岭","长白朝鲜族自治县",
            "崇明","常熟","常州","淳安","慈溪","苍南","长兴","常山","巢湖","长丰","滁州","池州","长泰","长汀","柴桑",
            "崇义","崇仁","昌邑","昌乐","长岛","茌平","曹县","成武","长垣","长葛","长阳土家族自治县","赤壁","崇阳",
            "长沙","常宁","常德","茶陵","辰溪",
        "大城","大厂回族自治县","定州","定兴","大名","东光","大宁","大同","代县","定襄","达尔罕茂明安联合旗",
            "达拉特旗","磴口","东乌珠穆沁旗","多伦","大连","丹东","东港","灯塔","大石桥","调兵山","德惠","敦化","大安",
            "东丰","东辽","大庆","杜尔伯特蒙古族自治县","东宁","大兴安岭地区","丹阳", "东台","东海","德清","东阳","岱山",
            "定远","当涂","砀山","东至","德化","东山","大田","都昌","德安","德兴","大余","定南","东平","东阿","东营",
            "东明","德州","登封","郸城",
        "阜平","肥乡","丰宁满族自治县","阜城","浮山","汾西","繁","方山","汾阳","丰镇","法库","抚顺","阜新",
            "阜新蒙古族自治县","凤城","扶余","抚松","方正","富锦","抚远","富裕","丰县","阜宁", "肥东","肥西","繁昌",
            "凤台","凤阳","阜阳","阜南","福州","福清","福安","福鼎","浮梁","分宜","丰城","奉新","抚州","费县","肥城",
            "封丘","扶沟","方城","范县","房县","凤凰","佛山","丰顺","封开","佛冈","富川瑶族自治县","扶绥",
            "凤山","防城港",
        "高邑","固安","高碑店","高阳","沽源","广平","馆陶","广宗","故城","古交","古县","广灵","高平","固阳",
            "根河","盖州","公主岭","甘南","高邮","灌云","灌南","固镇","广德","光泽","古田","共青城","高安","赣州",
            "广昌","贵溪","高密","高青","冠县","高唐","广饶","巩义","固始","光山","公安","谷城","广水","桂阳","桂东",
            "古丈","广州","广宁","高州","桂林","灌阳","恭城瑶族自治县","贵港","桂平","高县","珙县","古蔺","广汉",
        "怀安","怀来","邯郸","河间","黄骅","海兴","衡水","和顺","河津","洪洞","侯马","霍州","浑源","壶关",
            "河曲","怀仁","呼和浩特","和林格尔","霍林郭勒","化德","杭锦旗","呼伦贝尔","杭锦后旗","海城","黑山","葫芦岛",
            "桓仁满族自治县","桦甸","珲春","和龙","辉南","哈尔滨","桦南","桦川","海林","虎林","海伦","鹤岗","黑河",
            "呼玛","睢宁","海门","海安","淮安","洪泽","杭州","海宁","海盐","湖州","合肥","淮南","怀宁","怀远",
            "霍邱","霍山",
        "蓟县","晋州","井陉","鸡泽","巨鹿","景县","冀州","晋中","介休","稷山","绛县","吉县","静乐","交城","交口",
            "晋城","锦州","建昌","建平","吉林","蛟河","集安","靖宇","佳木斯","鸡西","鸡东","嘉荫","集贤","句容","江阴",
            "建湖","靖江","金湖","建德","嘉兴","嘉善","金华","缙云","景宁畲族自治县","江山","金寨","界首","泾县",
            "绩溪","旌德","晋江","金门","建瓯","将乐","建宁","进贤","景德镇","九江","靖安","金溪","吉安",
        "康保","宽城满族自治县","岢岚","科尔沁左翼中旗","科尔沁左翼后旗","开鲁","库伦旗","克什克腾旗","喀喇沁旗",
            "科尔沁右翼前旗","科尔沁右翼中旗","康平","宽甸满族自治县","喀喇沁左翼蒙古族自治县","开原","克山","克东",
            "昆山", "开化","垦利","开封","开平","开州","开江","康定","开阳","凯里","昆明","开远","康马","康县","康乐",
            "克拉玛依","库尔勒","库车","柯坪","克孜勒苏柯尔克孜自治州","喀什地区", "喀什","奎屯","可克达拉","昆玉",
        "灵寿","廊坊","卢龙","滦县",
            "滦南","乐亭","涞水","涞源","蠡县","临漳","滦平","隆化","隆尧","临城","临西","娄烦","灵石","临猗",
            "临汾","灵丘","黎城","潞城","吕梁","临县","柳林","岚县","陵川","林西","凉城","凌海","辽阳","凌源",
            "龙井","梨树","辽源","柳河","临江","林甸","龙江","林口","兰西","萝北","溧阳","连云港","涟水","临海","兰溪",
            "丽水","龙泉","龙游","庐江","来安","六安","灵璧","临泉",
        "孟村回族自治县",
            "满洲里","莫力达瓦达斡尔族自治旗","梅河口","木兰","牡丹江","穆棱","密山","明水","漠河","明光","马鞍山",
            "蒙城","闽侯","闽清","明溪","蒙阴","孟津","孟州","民权","渑池","麻城","汨罗","麻阳苗族自治县","梅州","茂名",
            "马山","蒙山","绵阳","绵竹","沐川","马边彝族自治县","眉山","米易","茂县","马尔康","木里藏族自治县","冕宁",
            "美姑","湄潭","麻江", "马龙","墨江哈尼族自治县","孟连傣族拉祜族佤族自治县","牟定","蒙自","弥勒","麻栗坡",
            "马关","勐海","勐腊","弥渡","芒市","墨竹工卡","芒康", "米林",
        "南皮","宁晋","南宫","内丘","南和",
            "宁武","奈曼旗","宁城","农安","讷河","宁安","嫩江","南京","南通","宁波","宁海","南陵","宁国","南安",
            "南靖","南平","宁化","宁德","南昌","宁都","南城","南丰","宁阳","宁津","宁陵","南阳","南召","内乡",
            "内黄","南乐","南漳","南县","宁远","南雄","南澳","南宁","那坡","宁明","南丹","南沙群岛","南充","南部",
            "内江","南江","宁南","纳雍","宁蒗彝族自治县","宁洱哈尼族彝族自治县","南华","南涧彝族自治县",
        "平山","平泉","平乡","平遥","平陆","蒲县","平顺","偏关",
            "平定","盘锦","盘山","磐石","邳州","沛县","平阳","平湖","浦江","磐安","平潭","平和","浦城","莆田",
            "屏南","彭泽","鄱阳","萍乡","平阴","平度","平邑","蓬莱","平原","平顶山","濮阳","平舆","平江",
            "平远","普宁","平乐","平果","浦北","凭祥","平南","彭水苗族土家族自治县","彭州","蒲江","平武","蓬安",
            "屏山","蓬溪","攀枝花","平昌","普格","普定","盘县","平塘",
        "秦皇岛","青龙满族自治县","迁安","迁西","曲阳","邱县","曲周","青县","清河",
            "清徐","祁县","曲沃","沁县","沁源","沁水","清水河","清原满族自治县","前郭尔罗斯蒙古族自治县","乾安",
            "齐齐哈尔","青冈","庆安","七台河","启东","青田","庆元","衢州","潜山","全椒","祁门", "青阳","泉州","清流",
            "全南","青岛","曲阜","青州","栖霞","齐河","庆云","沁阳","杞县","清丰","确山","淇县","蕲春","潜江","祁东",
            "祁阳","清远","全州","钦州","琼海","琼中黎族苗族自治县","邛崃","渠县",
        "容城","任丘","任县","饶阳","芮城","饶河","如皋","如东","瑞安",
            "瑞昌","瑞金","荣成","乳山","日照","汝阳","汝州","汝南","汝城","仁化","乳源瑶族自治县","饶平","融安",
            "融水苗族自治县","容县","荣县","仁寿","壤塘","若尔盖","仁怀","榕江","瑞丽","日喀则","仁布","日土","若羌",
        "石家庄","深泽","三河","顺平","尚义","涉县","肃宁","沙河","深州","寿阳","神池","石楼","朔州",
            "山阴","商都","四子王旗","苏尼特左旗","苏尼特右旗","沈阳","绥中","舒兰","四平","双辽","松原","尚志","绥芬河",
            "绥化","绥棱","绥滨","双鸭山","孙吴","上海","苏州","射阳","宿迁","沭阳","泗洪","泗阳","三门","绍兴","嵊州",
            "遂昌","松阳","嵊泗","寿县","宿松","舒城","宿州","泗县","歙县","濉溪","石台","石狮","邵武","顺昌","松溪",
        "天津","唐山","唐县","太原","太谷","天镇","屯留","土默特右旗","土默特左旗","托克托","通辽",
            "突泉","太仆寺旗","台安","铁岭","图们","洮南","通榆","通化","通河","汤原","同江","泰来","铁力",
            "塔河","太仓","泰州","泰兴","桐庐","泰顺","台州","天台","桐乡","铜陵","桐城","太湖","天长","太和",
            "泰宁","铜鼓","泰和","滕州","郯城","泰安","通许","太康","唐河","桐柏","汤阴","台前","团风","通城","通山",
        "无极","文安","望都","武安","魏县","围场满族蒙古族自治县",
            "吴桥","威县","武邑","武强","闻喜","万荣","武乡","五台","五寨","文水","武川","翁牛特旗",
            "乌海","乌兰察布","乌审旗","五原","乌拉特前旗","乌拉特中旗","乌拉特后旗","乌兰浩特","瓦房店","汪清",
            "五常","望奎","五大连池","无锡","温州", "文成","温岭","武义","无为","芜湖","望江","五河","涡阳",
            "武夷山","武平","武宁","万年","婺源","万载","万安","威海","微山","汶上","潍坊","五莲","无棣","武城",
        "辛集","新乐","行唐","香河",
            "雄县","宣化","兴隆","献县","邢台","新河","昔阳","新绛","夏县","襄汾","乡宁","隰县","襄垣","忻州",
            "孝义","兴县","兴和","新巴尔虎左旗","新巴尔虎右旗","兴安","锡林郭勒","锡林浩特","西乌珠穆沁旗","镶黄旗",
            "新民","岫岩满族自治县","新宾满族自治县","兴城","西丰","逊克","徐州","新沂","响水","兴化","盱眙","象山",
            "仙居","新昌","萧县","休宁","宣城","厦门","仙游","霞浦", "修水","新余","信丰","兴国","寻乌","峡江","新干",
        "元氏","永清","玉田","易县","蔚县","阳原","永年","盐山","阳曲","榆社","运城","永济","垣曲","翼城","永和",
            "阳高","原平","应县","右玉","阳城","阳泉","盂县","伊金霍洛旗","牙克石","义县","营口","榆树","永吉",
            "延边","延吉","伊通满族自治县","依兰","延寿","依安","伊春","友谊","扬州","仪征","扬中","宜兴","盐城",
            "余姚","乐清","永嘉","玉环","义乌","永康","云和","岳西","颍上","黟县","永泰","永春","云霄","永安","尤溪", "正定", "赵县","赞皇",
            "遵化","涿州","张家口","张北","涿鹿","枣强","左权","左云","长子","中阳","泽州","扎鲁特旗","卓资",
            "准格尔旗","扎兰屯","扎赉特旗","正镶白旗","正蓝旗","庄河","彰武","镇赉","肇州","肇源","肇东","张家港",
            "镇江","诸暨", "舟山","枞阳","漳州","漳浦","诏安","政和", "漳平","柘荣","周宁","樟树","资溪","邹城",
            "诸城","淄博","枣庄","招远","邹平","郑州","中牟","周口","柘城","镇平","驻马店","正阳","枝江","秭归"];
        $scope.text = "";
        $scope.$watch("text",function(now,old){

        });
    }]);
})(angular)
