(function(){function d(a){this.t={};this.tick=function(a,c,b){b=void 0!=b?b:(new Date).getTime();this.t[a]=[b,c]};this.tick("start",null,a)}var a=new d;window.jstiming={Timer:d,load:a};if(window.performance&&window.performance.timing){var a=window.performance.timing,c=window.jstiming.load,b=a.navigationStart,a=a.responseStart;0<b&&a>=b&&(c.tick("_wtsrt",void 0,b),c.tick("wtsrt_","_wtsrt",a),c.tick("tbsd_","wtsrt_"))}try{a=null,window.chrome&&window.chrome.csi&&(a=Math.floor(window.chrome.csi().pageT),
c&&0<b&&(c.tick("_tbnd",void 0,window.chrome.csi().startE),c.tick("tbnd_","_tbnd",b))),null==a&&window.gtbExternal&&(a=window.gtbExternal.pageT()),null==a&&window.external&&(a=window.external.pageT,c&&0<b&&(c.tick("_tbnd",void 0,window.external.startE),c.tick("tbnd_","_tbnd",b))),a&&(window.jstiming.pt=a)}catch(e){}})();window.gettext=function(d){return d};window.interpolate=function(d,a){return d.replace(/%s/g,function(){return String(a.shift())})};


Math.random();var c=function(a,b,d){return a.call.apply(a.bind,arguments)},f=function(a,b,d){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(d,e);return a.apply(b,d)}}return function(){return a.apply(b,arguments)}},g=function(a,b,d){g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?c:f;return g.apply(null,arguments)};
Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var d=Array.prototype.slice.call(arguments,1);d.unshift(this,a);return g.apply(null,d)}return g(this,a)};var _movie='<article>\n  <figure>\n    <img src="$ROOT/links/movie.jpg">\n  </figure>\n  <section>\n    <h1 class="text-large">Movie</h1>\n    <p class="text-x-small">\n      <img class="icon-small" src="$ROOT/links/rated_r.png">\n      120 min / Drama\n    </p>\n    <hr>\n    <p class="text-normal">\n      1:15 2:10 4:15<br>\n      Movie Theatre\n    </p>\n  </section>\n</article>\n',_flight='<article>\n  <section>\n    <div class="layout-figure">\n      <div class="align-center">\n        <p class="text-x-large">BOS</p>\n        <img src="$ROOT/links/plane.png" width="50" height="50">\n        <p class="text-x-large">SFO</p>\n      </div>\n      <div>\n        <div class="text-normal">\n          <p>Virgin America 351</p>\n          <p>Gate B38</p>\n          <p>8:35am</p>\n          <p class="green">On Time</p>\n        </div>\n      </div>\n    </div>\n  </section>\n</article>\n',
_sports='<article>\n  <section>\n    <div class="layout-two-column">\n      <div class="align-center">\n        <p>Celtics</p>\n        <p class="text-x-large">101</p>\n      </div>\n      <div class="align-center">\n        <p>Bulls</p>\n        <p class="text-x-large">95</p>\n      </div>\n    </div>\n  </section>\n  <footer>\n    <p>Final Score</p>\n  </footer>\n</article>\n',_simpleEvent='<article>\n  <section>\n    <div class="text-x-large" style="">\n      <p class="yellow">8:00<sub>PM</sub></p>\n      <p>Dinner with folks tonight</p>\n    </div>\n  </section>\n  <footer>\n    <div>Their place</div>\n  </footer>\n</article>\n',
_knowledge='<article>\n  <figure>\n    <img src="$ROOT/links/lincoln.png">\n  </figure>\n  <section>\n    <table class="text-small align-justify"> \n      <tbody>\n        <tr>\n          <td>Born</td>\n          <td>Feb 12, 1809</td>\n        </tr>\n        <tr>\n          <td>Died</td>\n          <td>Apr 15, 1865</td>\n        </tr>\n        <tr>\n          <td>Height</td>\n          <td>6\' 4"</td>\n        </tr>\n      </tbody>\n    </table>\n  </section>\n</article>\n',_stock='<article>\n  <section>\n    <table class="align-justify"> \n      <tbody>\n        <tr>\n          <td>AAPL</td>\n          <td>503.73</td>\n          <td class="red">-16.57 (3.18%)</td>\n        </tr>\n        <tr>\n          <td>AMZN</td>\n          <td>274.03</td>\n          <td class="green">+6.09 (2.27%)</td>\n        </tr>\n        <tr>\n          <td>GOOG</td>\n          <td>727.58</td>\n          <td class="red">-12.41 (1.68%)</td>\n        </tr>\n      </tbody>\n    </table>\n  </section>\n</article>\n',
_transit='<article>\n  <section>\n    <table class="text-small">\n      <tbody>\n        <tr>\n          <td>\n            <img src="$ROOT/links/icons_30_0000_blue.png" class="icon-small">\n            Daly City <span class="muted">\u203a</span> Dublin\n          </td>\n          <td>\n            <div class="text-minor align-right muted">in 5 min</div>\n        </td>\n        </tr>\n        <tr>\n          <td>\n            <img src="$ROOT/links/icons_30_0001_green.png" class="icon-small">\n            Milbrae <span class="muted">\u203a</span> Richmond\n          </td>\n          <td>\n            <div class="text-minor align-right muted">in 7 min</div>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <img src="$ROOT/links/icons_30_0002_yellow.png" class="icon-small">\n            Fremont <span class="muted">\u203a</span> Daly City\n          </td>\n          <td>\n            <div class="text-minor align-right muted">in 16 min</div>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <img src="$ROOT/links/icons_30_0003_red.png" class="icon-small">\n            Pittsburg/Bay Point <span class="muted">\u203a</span> SFO\n          </td>\n          <td>\n            <div class="text-minor align-right muted">in 21 min</div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </section>\n  <footer>\n    <img src="$ROOT/links/icons_30_0025_geo_transit.png" class="left">\n    <p>Embarcadero BART</p>\n  </footer>\n</article>\n',
_list='<article>\n  <section>\n    <ul class="text-x-small">\n      <li>Gingerbread</li>\n      <li>Chocolate Chip Cookies</li>\n      <li>Tiramisu</li>\n      <li>Donuts</li>\n      <li>Sugar Plum Gummies</li>\n    </ul>\n  </section>\n  <footer>\n    <p>Grocery list</p>\n  </footer>\n</article>\n',_autoResize='<article>\n  <section>\n    <p class="text-auto-size">This <em class="yellow">paragraph</em> auto-resizes according to the <strong class="blue">HTML</strong> content length.\n    </p>\n  </section>\n</article>\n',
_hybrid='<article class="photo">\n  <img src="$ROOT/links/filoli-spring-fling.jpg" width="100%" height="100%">\n  <div class="photo-overlay"/>\n  <section>\n    <p class="text-auto-size">Spring Fling Fundraiser at Filoli</p>\n  </section>\n</article>\n',_multipage='<article class="cover-only">\n  <section>\n    <p class="text-auto-size">This is the cover card of a long list</p>\n  </section>\n  <footer>\n    <p>Hover to scroll</p>\n  </footer>\n</article>\n<article class="auto-paginate">\n  <ul class="text-x-small">\n    <li>First item</li>\n    <li>Second item</li>\n    <li>Third item</li>\n    <li>Fourth item</li>\n    <li>Fifth item</li>\n    <li>Sixth item</li>\n    <li>Seventh item</li>\n    <li>Eigth item</li>\n    <li>Ninth item</li>\n    <li>Tenth item</li>\n  </ul>\n</article>\n',
h=[{id:"TEXT",content:{text:"This item auto-resizes according to the text length",notification:{level:"DEFAULT"}}},{id:"AUTO_RESIZE",content:{html:_autoResize,notification:{level:"DEFAULT"}}},{id:"HYBRID",content:{html:_hybrid,notification:{level:"DEFAULT"}}},{id:"MULTIPAGE",content:{html:_multipage,notification:{level:"DEFAULT"}}},{id:"SIMPLE_EVENT",content:{html:_simpleEvent,notification:{level:"DEFAULT"}}},{id:"LIST",content:{html:_list,notification:{level:"DEFAULT"}}},{id:"KNOWLEDGE",content:{html:_knowledge,
notification:{level:"DEFAULT"}}},{id:"STOCK",content:{html:_stock,notification:{level:"DEFAULT"}}},{id:"SPORTS",content:{html:_sports,notification:{level:"DEFAULT"}}},{id:"FLIGHT",content:{html:_flight,notification:{level:"DEFAULT"}}},{id:"MOVIE",content:{html:_movie,notification:{level:"DEFAULT"}}},{id:"TRANSIT",content:{html:_transit,notification:{level:"DEFAULT"}}},{id:"SIMPLE_MESSAGE",content:{text:"Hello Explorers,\n\nWelcome to Glass!\n\n+Project Glass\n",creator:{displayName:"Project Glass",
imageUrls:["https://lh3.googleusercontent.com/-quy9Ox8dQJI/T3xUHhub6PI/AAAAAAAAHAQ/YvjqA3Pw1sM/glass_photos.jpg?sz=360"]},notification:{level:"DEFAULT"}}}];var m={},n={},p={},q={};m.b=null;m.p=!1;q.i=[{j:"minute",value:60},{j:"hour",value:60},{j:"day",value:24}];q.C=20;
n.t=function(){$("textarea").keydown(function(a){if(9===a.keyCode){var b=this.selectionStart,d=this.selectionEnd,e=$(this).val();$(this).val(e.substring(0,b)+"  "+e.substring(d));this.selectionStart=this.selectionEnd=b+2;a.preventDefault()}});$("#source-html").bind("input propertychange",function(){var a=$("#source-html").val(),b=JSON.parse($("#source-json").val())||{};b.html||null==b.text?b.html=a:b.text=a;$("#source-json").val(JSON.stringify(b,void 0,2));p.h(b,!1)});$("#source-json").bind("input propertychange",
function(){var a=JSON.parse($("#source-json").val());a.text&&0<a.text.length?($("#source-html").val(a.text),$("#html-text-button").text("Text")):($("#source-html").val(a.html||""),$("#html-text-button").text("HTML"));p.h(a,!1)});$(".sourceBox").focus(function(){$(".sourceContainer").addClass("editing")});$(".sourceBox").blur(function(){$(".sourceContainer").removeClass("editing")})};
n.B=function(){$("#clientId").change(p.c);$("#clientId").keyup(p.c);$("#authorizeApisButton").click(function(){q.l();return!1});$("#sendButton").click(q.G);$("#reloadButton").click(q.d);$("#deleteButton").click(q.F)};p.v=function(){$(".scrollBarInner").bind("scroll",function(){$(this).find(".shadow").css("opacity",$(this).scrollTop()/15)})};
p.I=function(a){$("#menuItemList").empty();if(a.menuItems){for(var b=0,d=0;d<a.menuItems.length;++d){var e=a.menuItems[d];if(e.values&&0<e.values.length){var k=e.values[0],l=$("<div>").addClass("menuItem"),v=$("<center>").addClass("menuItemValue"),w=$("<img>").addClass("menuItemIcon").attr("src",k.iconUrl),k=$("<p>").addClass("menuItemDisplayName").text(k.displayName);l.append(v.append(w).append(k));l.click(q.J);l.attr("data-item-id",a.id);l.attr("data-menu-id",e.id);$("#menuItemList").append(l);
b+=l.outerWidth(!0)}}$("#menuItemList").width(b)}0<$(".menuItem").length?($("#menuItemBox").show(),$(".topContainer").addClass("topContainerExtended")):($("#menuItemBox").hide(),$(".topContainer").removeClass("topContainerExtended"))};
p.D=function(a){$("#itemList").empty();if(a.items&&0<a.items.length){for(var b=0;b<a.items.length;++b){var d=a.items[b],e=$("<li>").addClass("carditem");e.append(q.o("item-"+d.id,d,q.m(d)));$("#itemList").append(e)}$("a","#bottomContainer .selector").each(function(){"timeline"==$(this).attr("value")&&$(this).click()});$("#item-"+a.items[0].id).load(function(){q.g("item-"+a.items[0].id,a.items[0])})}else $("#itemList").append($("<p>").text("No items found"))};p.f=function(){$("#butterbar").removeClass("shown")};
p.k=function(){$(".map-tooltip").each(function(){var a=this;$(this).parent().bind("mouseover",function(){a.r||$(a).addClass("visible");a.r=!1});$(this).parent().bind("mouseout",function(){$(a).removeClass("visible")});$(this).bind("mouseover",function(){$(a).removeClass("visible");a.r=!0});$(a).css("left",($(a).parent().width()-$(a).width())/2-2);$(a).css("top",$(a).parent().height()+6);var b=$(a).css("paddingLeft").replace("px",""),d=$(a).width()/2;$(".pointer",$(a)).css("left",parseInt(d,10)+parseInt(b,
10))})};p.w=function(){$(".map-segmentedcontrol").delegate(".map-button","click",function(a){a.preventDefault();$(this).addClass("selected").siblings().removeClass("selected");$("#"+$(this).attr("data-target")).show().siblings().hide()})};p.n=function(a){a.text?($("#source-html").val(a.text),$("#html-text-button").text("Text")):($("#source-html").val(a.html||""),$("#html-text-button").text("HTML"));$("#source-json").val(JSON.stringify(a,void 0,2))};
p.a=function(a,b,d){var e=$("#butterbar");e.empty();e.append($("<p>").text(a+"  ").append($("<a>").text("Dismiss").click(p.f)));b?e.addClass("error"):e.removeClass("error");e.addClass("shown");d&&setTimeout(p.f,d)};p.c=function(){m.p&&""!=$("#clientId").val()?$("#authorizeApisButton").removeClass("disabled"):$("#authorizeApisButton").addClass("disabled")};
p.h=function(a,b){$("#preview")[0].contentWindow.postMessage(q.q(null,a,q.m(a),b),"*");a.id?($("#sendButton").text("Update Item"),$("#deleteButton").show()):($("#sendButton").text("Insert Item"),$("#deleteButton").hide())};q.s=function(){var a=window.localStorage.clientId;a&&($("#clientId").val(a),p.f())};
q.l=function(a,b){var d={client_id:$("#clientId").val(),scope:"https://www.googleapis.com/auth/glass.timeline",immediate:a||!1};gapi.auth.authorize(d,function(a){a&&(window.localStorage.clientId=$("#clientId").val(),b?b():(q.d(),q.H(),$("#authSettings").hide(),$("#apiActions").show(),p.k()))})};q.q=function(a,b,d,e){a={id:a,event:"content",content:b,footer:d,selected:e};gapi&&gapi.auth&&(b=gapi.auth.getToken())&&(a.accessToken=b.access_token);return a};
q.o=function(a,b,d){var e=$("<iframe>").addClass("smallcard").attr("src","smallcard.html").attr("id",a);e.load(function(){this.contentWindow.postMessage(q.q(a,b,d,!0),"*")});return e};q.e=function(a,b){a.execute(function(d){d.error?q.l(!0,function(){a.execute(b)}):b(d.result)})};
q.m=function(a){var b="just now";if(a.displayTime||a.updated){a=Math.floor((new Date-new Date(a.displayTime||a.updated))/6E4);var d=0,e=!0;if(0==a)return b;0>a&&(a*=-1,e=!1);for(;d+1<q.i.length&&(b=Math.floor(a/q.i[d+1].value),0!=b);++d)a=b;b=a+" "+q.i[d].j;1!=a&&(b+="s");b=e?b+" ago":"in "+b}return b};
q.A=function(){var a=window.location.href,b=a.lastIndexOf("/");-1<b&&(a=a.substr(0,b));for(b=0;b<h.length;++b){var d=$("<li>").addClass("carditem"),e=h[b];e.content.html&&(e.content.html=e.content.html.replace(/\$ROOT/g,a));var k=e.id,k=k.replace("_"," ");d.append(q.o("template-"+e.id,e.content,e.id.replace("_"," ")));$("#templateList").append(d)}e=h[0];$("#template-"+e.id).load(function(){q.g("template-"+e.id,e.content)})};
q.u=function(a){a=a.originalEvent.data;"clicked"==a.event?q.g(a.id,a.content):"changed"==a.event&&p.n(a.content)};q.d=function(){p.a("Loading Timeline Items...");q.e(gapi.client.mirror.timeline.list({maxResults:q.C}),function(a){p.D(a);p.f()})};q.H=function(){var a=gapi.client.mirror.subscriptions.list({});q.e(a,function(a){if(a.items)for(var d=0;d<a.items.length;++d){var e=a.items[d];if("timeline"==e.collection){m.b=e;break}}})};
q.g=function(a,b){a&&b&&($(".smallcard").each(function(a,b){b.contentWindow.postMessage({event:"unselect"},"*")}),$("#"+a)[0].contentWindow.postMessage({event:"select"},"*"),p.n(b),p.I(b),p.h(b,!0))};q.G=function(){var a=JSON.parse($("#source-json").val()),b=null,b=a.id?gapi.client.mirror.timeline.update({id:a.id,resource:a}):gapi.client.mirror.timeline.insert({resource:a});p.a("Executing request...");q.e(b,q.d)};
q.F=function(){var a=JSON.parse($("#source-json").val()),b=null;a.id?(b=gapi.client.mirror.timeline["delete"]({id:a.id}),p.a("Deleting item..."),q.e(b,q.d)):p.a("Item not in Timeline",!0,2E3)};
q.J=function(){if(m.b){var a={itemId:$(this).attr("data-item-id"),menuActionId:$(this).attr("data-menu-id"),callbackUrl:m.b.callbackUrl,userToken:m.b.userToken,verifyToken:m.b.verifyToken};p.a("Sending notification...");$.post("/operation/notify",a,function(){p.a("Notification sent!",!1,5E3)})}else p.a("Unable to send notification, service is not subscribed",!0)};var r=function(){gapi.auth.init(function(){gapi.client.load("mirror","v1",function(){m.p=!0;p.c()})})},s=["initMirrorApi"],t=this;
s[0]in t||!t.execScript||t.execScript("var "+s[0]);for(var u;s.length&&(u=s.shift());)s.length||void 0===r?t=t[u]?t[u]:t[u]={}:t[u]=r;$(document).ready(function(){top==self&&"mirror-api-playground.appspot.com"==window.location.hostname&&window.location.replace("https://developers.google.com/glass/playground");n.B();n.t();q.A();q.s();p.v();p.k();p.w();p.c();$(window).bind("message",q.u)});
