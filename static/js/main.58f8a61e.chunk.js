(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(3),i=a.n(s),c=(a(15),a(1)),l=a.n(c),o=a(4),m=a(5),u=a(6),p=a(8),d=a(7),E=a(9),f=(a(17),a(18),a(19),function(){return r.a.createElement("div",{className:"container-loading"},r.a.createElement("p",{className:"loading"},"Loading..."))}),v=(a(20),function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("h2",{className:"title"},e.title),r.a.createElement("div",{className:"picture",style:{backgroundImage:"url(".concat(e.image,")")}}),r.a.createElement("div",{className:"box"},r.a.createElement("p",{className:"rating"},"Rating: ",r.a.createElement("span",null,e.rating)),r.a.createElement("p",{className:"year"},"Year: ",r.a.createElement("span",null,e.year))),r.a.createElement("div",{className:"description"},e.description))}),h=(a(21),function(e){return r.a.createElement("div",{className:"container-error"},r.a.createElement("p",{className:"error"},e.displayError))}),g=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[],loading:!0,displayError:!1,search:""},a.componentDidMount=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://yts.mx/api/v2/list_movies.json");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a.setState({movies:n.data.movies}),console.log(a.state.movies),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),a.setState({displayError:"ERROR: Something seems to be wrong"});case 14:a.setState({loading:!1});case 15:case"end":return e.stop()}}),e,null,[[0,11]])}))),a.filterMovies=function(e){a.setState({search:e.target.value})},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;if(!0===this.state.loading)return r.a.createElement(f,null);if(!1!==this.state.displayError)return r.a.createElement(h,{displayError:this.state.displayError});var t=this.state.movies.filter((function(t){return-1!==t.title.toLocaleLowerCase().indexOf(e.state.search.toLocaleLowerCase())}));return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Blockbuster"),r.a.createElement("form",{action:"#"},r.a.createElement("label",{htmlFor:"films"},r.a.createElement("span",null,"Filter"),r.a.createElement("input",{type:"text",id:"films",onChange:this.filterMovies}))),r.a.createElement("div",{className:"wrapper"},t.map((function(e,t){return r.a.createElement(v,{key:t,title:e.title,image:e.medium_cover_image,rating:e.rating,year:e.year,description:e.summary})}))))}}]),t}(n.Component);i.a.render(r.a.createElement(g,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.58f8a61e.chunk.js.map