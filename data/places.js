var PLACES = [
  {
    id:'huizhou', city:'惠州', province:'广东',
    coord:[113.51,22.24], date:'2025-05-03',
    images:['images/huizhou1.jpg','images/huizhou2.jpg','images/huizhou3.jpg','images/huizhou4.jpg','images/huizhou5.jpg','images/huizhou6.jpg','images/huizhou7.jpg','images/huizhou8.jpg','images/huizhou9.jpg','images/huizhou10.jpg'],
    story:'妈庙村，不是景点的景点，人山人海的时节空无一人，问了十来个当地村民才找到路。300年的古建筑群就在党群中心附近，但没受到任何保护。紫色的瀑布倾泻而下，走进去是一片漆黑和脚下的杂草，远处的小门流着光。在清泉古寺留下了一封信，等待陌生旅人的回复。',
    tags:['古建筑','痕迹','光'], mood:'沉静'
  },
  {
    id:'zhaoqing', city:'肇庆', province:'广东',
    coord:[112.27,23.03], date:'2024-06-06',
    images:['images/zhaoqing1.jpg','images/zhaoqing2.jpg','images/zhaoqing3.jpg','images/zhaoqing4.jpg','images/zhaoqing5.jpg','images/zhaoqing6.jpg','images/zhaoqing7.jpg','images/zhaoqing8.jpg'],
    story:'青藤流溢，白珠淋漓。寥落风声惹蝉烦，疏影游鱼寄心安。',
    tags:['绿','风','雨'], mood:'舒适'
  }
];
/* ============================================================
   5b. 旅行（续）
   ============================================================ */
PLACES.push(
  {
    id:'chongqing', city:'重庆', province:'重庆',
    coord:[106.55,29.56], date:'2026-07-14',
    images:['images/chongqing1.jpg','images/chongqing2.jpg','images/chongqing3.jpg','images/chongqing4.jpg','images/chongqing5.jpg','images/chongqing6.jpg','images/chongqing7.jpg'],
    story:'好热。三峡博物馆很有趣，载魂之舟很美，如果没有游客扶着文物拍照就更好了。老居民楼看起来非常适合养老呀，楼里街边的火锅好好吃，就是辣得不行。江景让我感到舒服。罗汉寺商业化过了头。非景区比景区好玩得多。',
    tags:['高温','阳光','美食'], mood:'热死'
  },
  {
    id:'leshan', city:'乐山', province:'四川',
    coord:[102.99,29.04], date:'2026-07-18',
    images:['images/leshan1.jpg','images/leshan2.jpg','images/leshan3.jpg','images/leshan4.jpg','images/leshan5.jpg','images/leshan6.jpg','images/leshan7.jpg','images/leshan8.jpg','images/leshan9.jpg','images/leshan10.jpg','images/leshan11.jpg','images/leshan12.jpg','images/leshan13.jpg','images/leshan14.jpg','images/leshan15.jpg','images/leshan16.jpg','images/leshan17.jpg','images/leshan18.jpg','images/leshan19.jpg'],
    story:'白云满地江湖阔，著我逍遥自在行。峨边黑竹沟是我梦中出现的地方，晴雨风景不同。古井村的人都非常好，村书记与我讲述着这些年来的变化，彝族老板娘的酸菜土豆汤很好喝，那一队一起徒步的宜宾名师性格好热情。野猴、松鼠、蝴蝶、蛇、马、野猪……连跳上身的虫也显得可爱。野山啊。',
    tags:['浓绿','自然','民风'], mood:'宁静'
  },
  {
    id:'xiamen', city:'厦门', province:'福建',
    coord:[118.089,24.479], date:'2026-06-09',
    images:['images/xiamen1.jpg','images/xiamen2.jpg','images/xiamen3.jpg','images/xiamen4.jpg','images/xiamen5.jpg','images/xiamen6.jpg'],
    story:'鼓浪屿的光斑斑驳驳。',
    tags:['光斑','岛','晴空'], mood:'愉快'
  },
  {
    id:'chengdu', city:'成都', province:'四川',
    coord:[104.066,30.572], date:'2026-07-21',
    images:['images/chengdu1.jpg','images/chengdu2.jpg','images/chengdu3.jpg','images/chengdu4.jpg','images/chengdu5.jpg','images/chengdu6.jpg','images/chengdu7.jpg','images/chengdu8.jpg','images/chengdu9.jpg'],
    story:'火锅很麻，青羊宫的道长脾气怪得可以。在武侯祠刘备陵寝边收到了录取短信。三星堆的文物很有趣，太阳崇拜、凤凰鸟的地位……很喜欢。',
    tags:['历史','火锅','文化'], mood:'松弛'
  }
);
PLACES.push(
  {
    id:'quanzhou', city:'泉州', province:'福建',
    coord:[117.8,25.3], date:'2025-06-06',
    images:['images/quanzhou1.jpg','images/quanzhou2.jpg','images/quanzhou3.jpg','images/quanzhou4.jpg','images/quanzhou5.jpg'],
    story:'好想再跟你们研一次学，在酒店的沙滩散散步，唱唱歌，喝喝酒。',
    tags:['海','落日','朋友'], mood:'幸福'
  },
  {
    id:'changsha', city:'长沙', province:'湖南',
    coord:[112.53,27.803], date:'2026-08-13',
    images:['images/changsha1.jpg','images/changsha2.jpg','images/changsha3.jpg','images/changsha4.jpg','images/changsha5.jpg','images/changsha6.jpg','images/changsha7.jpg','images/changsha8.jpg','images/changsha9.jpg','images/changsha10.jpg','images/changsha11.jpg','images/changsha12.jpg','images/changsha13.jpg','images/changsha14.jpg'],
    story:'赶上了雨天，岳麓山的爱心线没能顺利徒步完。省博的辛追夫人有一个死后幸福的愿望，奈何似乎事与愿违，希望博物馆和游客都可以多给她一点尊重。在简牍博物馆遇到了非常好的解说员奶奶，带着我一对一看过每一处。跟着盗墓笔记走过一些地方，感受很奇妙。',
    tags:['登山','历史','书'], mood:'自由'
  }
);