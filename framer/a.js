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
  height: 640,
  backgroundColor: '#000',
  x: 137,
  y: 108
});

vnc = new ViewNavigationController({
  parent: wrapper,
  width: 360,
  height: 640
});

vnc.animationOptions = {
  curve: "ease-in-out",
  time: 0.3
};

home1 = new Layer({
  name: 'initialView',
  width: 360,
  height: 640,
  backgroundColor: ' ',
  parent: vnc
});

tabBarModule = require("tabBarModule");

featuredScroll = new ScrollComponent({
  superLayer: home1,
  width: 360,
  height: 640,
  scrollHorizontal: false
});

topChartsScroll = new ScrollComponent({
  superLayer: home1,
  width: 360,
  height: 640,
  scrollHorizontal: false
});

exploreScroll = new ScrollComponent({
  superLayer: home1,
  width: 360,
  height: 640,
  backgroundColor: '#fff',
  scrollHorizontal: false
});

searchScroll = new ScrollComponent({
  superLayer: home1,
  width: 360,
  height: 640,
  scrollHorizontal: false
});

updatesScroll = new ScrollComponent({
  superLayer: home1,
  width: 360,
  height: 640,
  scrollHorizontal: false
});


tabBar = new tabBarModule.tabBar({
  "详情": {
    icon: "./a/Tab/featured-icon@2x.png",
    selectedIcon: "./a/Tab/featured-selected@2x.png",
    view: featuredScroll
  },
  "主图": {
    icon: "./a/Tab/topcharts-icon@2x.png",
    selectedIcon: "./a/Tab/topcharts-selected@2x.png",
    view: topChartsScroll
  },
  "入口图": {
    icon: "./a/Tab/topcharts-icon@2x.png",
    selectedIcon: "./a/Tab/topcharts-selected@2x.png",
    view: exploreScroll
  },
  Search: {
    icon: "./a/Tab/search-icon@2x.png",
    selectedIcon: "./a/Tab/search-selected@2x.png",
    view: searchScroll
  },
  Updates: {
    icon: "./a/Tab/updates-icon@2x.png",
    selectedIcon: "./a/Tab/updates-selected@2x.png",
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
  height: 640,
  scrollVertical: false,
  backgroundColor: "#fff",
  	superLayer: topChartsScroll 
});
 
	

// generated by coffee-script 1.10.0-no-whitespace-mixing-strict