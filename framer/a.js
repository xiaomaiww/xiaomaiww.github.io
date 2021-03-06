var ViewNavigationController, bg, dw, dy, exploreScroll, exploreView, featuredScroll, featuredView, home1, line_b, searchScroll, searchView, tabBar, tabBarModule, topChartcView, topChartsScroll, updatesScroll, updatesView, vnc, wrapper;

ViewNavigationController = require("ViewNavigationController").ViewNavigationController;

Screen.backgrongdColor = 'white';

if (window.screen.height < 769) {
  dw = 0.75;
  dy = -95;
} else if (window.screen.height < 901) {
  dw = 0.85;
  dy = -60;
} else {
  dw = 1;
  dy = 0;
}

bg = new Layer({
  x: Align.center,
  y: dy,
  image: 'https://img.alicdn.com/imgextra/i3/3332462371/O1CN01VJLW5M1TNxoi1VSTk_!!3332462371.png',
  height: 885,
  width: 678,
  scale: dw
});

wrapper = new ScrollComponent({
  parent: bg,
  width: 360,
  height: 675,
  backgroundColor: '#000',
  x: 137,
  y: 78
});

vnc = new ViewNavigationController({
  parent: wrapper,
  width: 360,
  height: 675
});

vnc.animationOptions = {
  curve: "ease-in-out",
  time: 0.3
};

home1 = new Layer({
  name: 'initialView',
  width: 360,
  height: 675,
  backgroundColor: ' ',
  parent: vnc
});

tabBarModule = require("tabBarModule");

featuredScroll = new ScrollComponent({
  superLayer: home1,
  width: 360,
  height: 675,
  scrollHorizontal: false
});

topChartsScroll = new ScrollComponent({
  superLayer: home1,
  width: 360,
  height: 675,
  backgroundColor: '#F0F0F0 ',
  scrollHorizontal: false
});

exploreScroll = new ScrollComponent({
  superLayer: home1,
  width: 360,
  height: 675,
  backgroundColor: '#F0F0F0',
  scrollHorizontal: false
});

searchScroll = new ScrollComponent({
  superLayer: home1,
  width: 360,
  height: 675,
  scrollHorizontal: false
});

updatesScroll = new ScrollComponent({
  superLayer: home1,
  width: 360,
  height: 675,
  scrollHorizontal: false
});


tabBar = new tabBarModule.tabBar({
  "详情": {
    icon: "https://xiaomaiww.github.io/framer/a/Tab/featured-icon@2x.png",
    selectedIcon: "https://xiaomaiww.github.io/framer/a/Tab/featured-selected@2x.png",
    view: featuredScroll
  },
  "主图": {
    icon: "https://xiaomaiww.github.io/framer/a/Tab/topcharts-icon@2x.png",
    selectedIcon: "https://xiaomaiww.github.io/framer/a/Tab/topcharts-selected@2x.png",
    view: topChartsScroll
  },
  "入口图": {
    icon: "https://xiaomaiww.github.io/framer/a/Tab/topcharts-icon@2x.png",
    selectedIcon: "https://xiaomaiww.github.io/framer/a/Tab/topcharts-selected@2x.png",
    view: exploreScroll
  },
  Search: {
    icon: "https://xiaomaiww.github.io/framer/a/Tab/search-icon@2x.png",
    selectedIcon: "https://xiaomaiww.github.io/framer/a/Tab/search-selected@2x.png",
    view: searchScroll
  },
  Updates: {
    icon: "https://xiaomaiww.github.io/framer/a/Tab/updates-icon@2x.png",
    selectedIcon: "https://xiaomaiww.github.io/framer/a/Tab/updates-selected@2x.png",
    view: updatesScroll
  }
});

tabBar.setBadgeValue("Updates", 2);

line_b = new Layer({
  width: tabBar.items[0].width,
  height: 2,
  y: 48,
  x: 0,
  backgroundColor: "#2aa1a1",
  parent: tabBar
});

tabBar.on("tabBarDidSwitch", function(name) {
  return line_b.animate({
    properties: {
      x: tabBar.getItemFromName(name).x
    },
    curve: "spring(200,23,0)"
  });
});

tabBar.setSelected("Featured");

// ---

var i, number, page, pageContent;

page = new PageComponent({
  width: 360,
  height: 675,
  scrollVertical: false,
  backgroundColor: "#F0F0F0",
  	superLayer: topChartsScroll 
});
 
 // ---------------------------------------------------
var pagination_bg  = new Layer({
	height:19,
	width:30,
	x:320, 
	y:330, 
	backgroundColor: '#000000',
    borderRadius :15,  
	opacity: 0.32,          
	parent:topChartsScroll
	
}); 	

 textA2= new TextLayer({
      x: Align.center,
      y: Align.center,
	  fontFamily: "Hiragino Kaku Gothic Pro', 'Segoe UI', 'Apple Gothic', Tahoma, 'Helvetica Neue', sans-serif;", //字体
      fontWeight: 50,
      fontSize: 12,
      text: '1/5',
      parent: pagination_bg  ,
	  color:  "#fff"
    });

var b_bg  = new Layer({
	height:519,
	width:340,
	x:Align.center, 
	y:372, 
	backgroundColor: '#ffffff',
    borderRadius :15,            
	parent:topChartsScroll
	
}); 
	

// generated by coffee-script 1.10.0-no-whitespace-mixing-strict