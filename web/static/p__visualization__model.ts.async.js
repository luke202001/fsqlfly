(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"Dz5+":function(e,a,t){"use strict";t.r(a);var r=t("gWZ8"),n=t.n(r),s=t("p0pE"),c=t.n(s),l=(t("miYZ"),t("tsqr")),i=t("d6i3"),u=t.n(i),o=t("1l/V"),p=t.n(o),d=t("sy1d");function b(){return f.apply(this,arguments)}function f(){return(f=p()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(d.a)(" /api/tables",{params:{_time:(new Date).getTime()}}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function m(){return v.apply(this,arguments)}function v(){return(v=p()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(d.a)(" /api/table_names",{params:{_time:(new Date).getTime()}}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function h(e){return y.apply(this,arguments)}function y(){return(y=p()(u.a.mark(function e(a){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=3===a.length?a[1]+"."+a[2]:"",e.abrupt("return",Object(d.a)("/api/table/".concat(t),{params:{_time:(new Date).getTime()}}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function x(e,a){return T.apply(this,arguments)}function T(){return(T=p()(u.a.mark(function e(a,t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(d.a)("/api/search/".concat(a),{params:c()({_time:(new Date).getTime()},t),data:t,method:"POST"}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}var w={namespace:"visualization",state:{tables:[],relatedTables:[],details:[],search:"",selectTable:[],limit:500,currentDisplayTables:[],selectRelatedTableKeys:[],errorDisplay:!1,errorCode:0,errorMsg:"",tableNames:[]},effects:{fetchTables:u.a.mark(function e(a,t){var r,n,s,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.payload,r=t.call,n=t.put,e.next=4,r(b);case 4:return s=e.sent,e.next=7,n({type:"save",payload:{tables:s.data.data}});case 7:return e.next=9,r(m);case 9:return c=e.sent,e.next=12,n({type:"save",payload:{tableNames:c.data}});case 12:case"end":return e.stop()}},e)}),doRefresh:u.a.mark(function e(a,t){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.call,r=t.put,e.next=3,r({type:"save",payload:{tables:[],relatedTables:[],details:[],selectTable:"",limit:-1,currentDisplayTables:[],selectRelatedTableKeys:[],errorDisplay:!1,errorCode:0,errorMsg:""}});case 3:return e.next=5,r({type:"fetchTables"});case 5:case"end":return e.stop()}},e)}),submitSearch:u.a.mark(function e(a,t){var r,n,s,c,i,o,p,d,b;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.payload,r=t.call,n=t.put,s=t.select,e.next=4,s(function(e){return e.visualization});case 4:return c=e.sent,i=c.limit,o=c.search,p=c.selectTable,d=3===p.length?p.slice(1,3).join("."):"",e.next=11,r(x,d,{limit:i,search:o});case 11:if(void 0!==(b=e.sent).code&&0===b.code){e.next=16;break}return e.next=15,n({type:"save",payload:{errorDisplay:!0,errorCode:b.code,errorMsg:b.msg}});case 15:return e.abrupt("return");case 16:return e.next=18,n({type:"saveTableSearch",payload:b.data});case 18:l.a.destroy();case 22:case"end":return e.stop()}},e)}),hiddenTableDetail:u.a.mark(function e(a,t){var r,n,s,l,i,o,p,d;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.payload,t.call,n=t.put,s=t.select,l=r.tableName,e.next=5,s(function(e){return e.visualization.details.filter(function(e){return e.tableName==l})});case 5:i=e.sent,o=0;case 7:if(!(o<i.length)){e.next=15;break}return p=i[o],d=c()({},p,{show:r.check}),e.next=12,n({type:"saveTableSearch",payload:d});case 12:o++,e.next=7;break;case 15:case"end":return e.stop()}},e)}),submitSelectTable:u.a.mark(function e(a,t){var r,n,s,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.payload,n=t.call,s=t.put,e.next=4,s({type:"save",payload:{selectTable:r,selectRelatedTableKeys:[]}});case 4:return e.next=6,n(h,r);case 6:return c=e.sent,e.next=9,s({type:"save",payload:{relatedTables:Array.isArray(c.data.data)?c.data.data:[]}});case 9:case 12:case"end":return e.stop()}},e)}),submitSearchAll:u.a.mark(function e(a,t){var r,n,s,c,l,i,o,p,d,b,f,m,v,h,y;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.payload,t.call,n=t.put,s=t.select,e.next=5,s(function(e){return e.visualization});case 5:return c=e.sent,l=c.selectTable,i=c.search,o=c.limit,e.next=11,s(function(e){return e.visualization});case 11:if(p=e.sent,void 0!==p.current){e.next=16;break}return e.next=16,n({type:"submitSearchOne",payload:{params:{selectTable:l,search:i,limit:o,table:l}}});case 16:d=!0,b=!1,f=void 0,e.prev=19,m=r[Symbol.iterator]();case 21:if(d=(v=m.next()).done){e.next=32;break}return h=v.value,e.next=26,n({type:"saveTableSearch",payload:{tableName:h,loading:!0,show:!0}});case 26:return y=3===l.length?l.slice(1,3).join("."):"",e.next=29,n({type:"submitSearchOne",payload:{params:{selectTable:y,search:i,limit:o,table:h}}});case 29:d=!0,e.next=21;break;case 32:e.next=38;break;case 34:e.prev=34,e.t0=e.catch(19),b=!0,f=e.t0;case 38:e.prev=38,e.prev=39,d||null==m.return||m.return();case 41:if(e.prev=41,!b){e.next=44;break}throw f;case 44:return e.finish(41);case 45:return e.finish(38);case 46:case"end":return e.stop()}},e,null,[[19,34,38,46],[39,,41,45]])}),submitSearchOne:u.a.mark(function e(a,t){var r,n,s,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.payload,n=t.call,s=t.put,e.next=4,n(x,r.params.table,r.params);case 4:if(void 0!==(l=e.sent).code&&0===l.code){e.next=9;break}return e.next=8,s({type:"save",payload:{errorDisplay:!0,errorCode:l.code,errorMsg:l.msg}});case 8:return e.abrupt("return");case 9:return e.next=11,s({type:"saveTableSearch",payload:c()({},l.data,{loading:!1})});case 11:case"end":return e.stop()}},e)}),startChangeCurrentTable:u.a.mark(function e(a,t){var r,n,s,c,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.tableNames,t.call,n=t.put,s=t.select,e.next=4,s(function(e){return e.visualization});case 4:if(c=e.sent,c.selectTable.join(".")===r.join(".")){e.next=9;break}return e.next=9,n({type:"submitSelectTable",payload:r});case 9:return l=3===r.length?r.slice(1,3).join("."):"",e.next=12,n({type:"changeCurrentTable",tableName:l});case 12:case"end":return e.stop()}},e)})},reducers:{save:function(e,a){var t=a.payload;return c()({},e,t)},saveTableSearch:function(e,a){var t,r=a.payload;if(void 0!==(t=void 0!==e&&3===e.selectTable.length&&r.tableName===e.selectTable.slice(1,3).join(".")?c()({},e,{current:r}):e)&&0===t.details.filter(function(e){return e.tableName===r.tableName}).length){var s=[].concat(n()(t.details),[r]);return c()({},t,{details:s})}if(void 0!==t){var l=t.details.map(function(e){return e.tableName===r.tableName?r:e});return c()({},t,{details:l})}},changeCurrentTable:function(e,a){var t=a.tableName;if(void 0!==e){var r=e.details.filter(function(e){return e.tableName===t});if(r.length>0){var n=r[0];return c()({},e,{current:n,selectTable:n.tableName,search:n.search,limit:n.limit})}}return e},deleteTable:function(e,a){var t=a.tableName;return c()({},e,{details:e.details.filter(function(e){return e.tableName!==t})})}}};a.default=w}}]);