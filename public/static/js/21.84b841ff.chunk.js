(window["webpackJsonpele-app"]=window["webpackJsonpele-app"]||[]).push([[21],{354:function(e,t,a){},399:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p});var n=a(9),c=a(10),r=a(12),i=a(11),s=a(13),o=a(0),l=a.n(o),h=a(60),u=a(59),p=(a(354),function(e){function t(){var e,a;Object(n.a)(this,t);for(var c=arguments.length,s=new Array(c),o=0;o<c;o++)s[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={headerTitle:"",type:"",name:""},a.initData=function(e){var t,n=e.location.pathname.split("/")[2];switch(n){case"name":t="\u4fee\u6539\u7528\u6237\u540d";break;case"address":t="\u7f16\u8f91\u5730\u5740";break;case"add":t="\u65b0\u589e\u5730\u5740";break;case"add_detail":t="\u641c\u7d22\u5730\u5740";break;default:t=""}a.setState({headerTitle:t,type:n})},a.goBack=function(){a.props.history.push("/info")},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.initData(this.props)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"setting"},l.a.createElement(h.a,{goBack:this.goBack,title:this.state.headerTitle}),"\u4fee\u6539\u7528\u6237\u540d"===this.state.headerTitle&&l.a.createElement("section",{className:"setting-input"},l.a.createElement(u.f,null,l.a.createElement(u.e,{placeholder:"\u8bf7\u4fee\u6539"+this.state.headerTitle,value:this.state.name,onChange:function(t){e.setState({name:t})}})),l.a.createElement("p",null,"\u7528\u6237\u540d\u53ea\u80fd\u4fee\u6539\u4e00\u6b21\uff085-24\u5b57\u7b26\u4e4b\u95f4\uff09")),l.a.createElement("section",{className:"btn"},l.a.createElement(u.b,{disabled:""===this.state.name},"\u786e\u8ba4\u4fee\u6539")))}}]),t}(o.Component))},60:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(9),c=a(10),r=a(12),i=a(11),s=a(13),o=a(0),l=a.n(o),h=a(59),u=(a(61),function(e){function t(){var e,a;Object(n.a)(this,t);for(var c=arguments.length,s=new Array(c),o=0;o<c;o++)s[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).handleBack=function(){a.props.goBack()},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{className:"header-container"},this.props.goBack&&l.a.createElement(h.h,{mode:"dark",icon:this.props.icon?l.a.createElement(h.d,{type:"search"}):l.a.createElement(h.d,{type:"left"}),onLeftClick:this.handleBack},this.props.title))}}]),t}(o.Component))},61:function(e,t,a){}}]);
//# sourceMappingURL=21.84b841ff.chunk.js.map