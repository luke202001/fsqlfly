(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{YqIF:function(e,t){ace.define("ace/theme/github",["require","exports","module","ace/lib/dom"],function(e,t,a){t.isDark=!1,t.cssClass="ace-github",t.cssText='.ace-github .ace_gutter {background: #e8e8e8;color: #AAA;}.ace-github  {background: #fff;color: #000;}.ace-github .ace_keyword {font-weight: bold;}.ace-github .ace_string {color: #D14;}.ace-github .ace_variable.ace_class {color: teal;}.ace-github .ace_constant.ace_numeric {color: #099;}.ace-github .ace_constant.ace_buildin {color: #0086B3;}.ace-github .ace_support.ace_function {color: #0086B3;}.ace-github .ace_comment {color: #998;font-style: italic;}.ace-github .ace_variable.ace_language  {color: #0086B3;}.ace-github .ace_paren {font-weight: bold;}.ace-github .ace_boolean {font-weight: bold;}.ace-github .ace_string.ace_regexp {color: #009926;font-weight: normal;}.ace-github .ace_variable.ace_instance {color: teal;}.ace-github .ace_constant.ace_language {font-weight: bold;}.ace-github .ace_cursor {color: black;}.ace-github.ace_focus .ace_marker-layer .ace_active-line {background: rgb(255, 255, 204);}.ace-github .ace_marker-layer .ace_active-line {background: rgb(245, 245, 245);}.ace-github .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-github.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-github.ace_nobold .ace_line > span {font-weight: normal !important;}.ace-github .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-github .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-github .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-github .ace_gutter-active-line {background-color : rgba(0, 0, 0, 0.07);}.ace-github .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-github .ace_invisible {color: #BFBFBF}.ace-github .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-github .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}',e("../lib/dom").importCssString(t.cssText,t.cssClass)})},oQQD:function(e,t,a){"use strict";a.r(t);a("BoS7");var n=a("Sdc0"),i=(a("jCWc"),a("kPKH")),r=(a("14J3"),a("BMrR")),c=(a("Telt"),a("Tckk")),l=(a("Mwp2"),a("VXEj")),s=(a("IzEo"),a("bx4M")),o=(a("lUTK"),a("BvKs")),u=(a("qVdP"),a("jsC+")),d=(a("MXD1"),a("CFYs")),m=(a("+BJd"),a("mr32")),h=(a("+L6B"),a("2/Rp")),g=(a("7Kak"),a("9yH6")),b=(a("2qtc"),a("kLXV")),p=a("p0pE"),f=a.n(p),E=a("2Taf"),v=a.n(E),y=a("vZ4D"),k=a.n(y),C=a("l4Ni"),S=a.n(C),_=a("ujKo"),w=a.n(_),A=a("MhPg"),I=a.n(A),x=(a("OaEy"),a("2fM7")),N=(a("5NDa"),a("5rEg")),B=a("q1tI"),D=a.n(B),O=a("wd/R"),L=a.n(O),V=a("MuoO"),M=a("8Skl"),q=a("xvlK"),j=a("WsrF"),F=(a("XlDN"),a("rLCj")),Y=a("P5Jw"),R=a("4NGg"),T=a.n(R),P=a("i8i4"),K=a("WnL9"),J=a("xM2q"),H=a("lc5D"),W=a.n(H),z=(a("KWgm"),a("bHNl"),a("YqIF"),a("whJP")),Q=N.a.Search,U=x.a.Option,X="transform",G=function(e){function t(){var e;return v()(this,t),(e=S()(this,w()(t).apply(this,arguments))).state={visible:!1,done:!1,current:void 0,search:"",msg:"",success:!1,submitted:!1,searchResult:[],tag:0,editVisible:!1,edithDone:!1,edithSubmit:!1},e.formLayout={labelCol:{span:5},wrapperCol:{span:17}},e.normFile=function(e){return Array.isArray(e)?e:e&&e.fileList},e.doRefresh=function(){(0,e.props.dispatch)({type:"".concat(X,"/fetch")})},e.showModal=function(){e.setState({editVisible:!0,current:void 0})},e.showRunModal=function(t,a){e.setState({visible:!0,done:!1,msg:""}),(0,e.props.dispatch)({type:"transform/run",payload:f()({},t,{method:a,model:"transform"}),callback:function(t){e.setState({msg:t.msg,done:!0,success:t.success})}})},e.showDebugResult=function(){e.setState({edithSubmit:!0});var t=e.props,a=t.form,n=t.dispatch,i=e.state.current;a.validateFields(function(t,a){t?e.setState({edithSubmit:!1}):(e.setState({submitted:!0}),n({type:"transform/run",payload:f()({},a,i,{method:"debug",id:0,model:"transform"}),callback:function(t){e.setState({edithSubmit:!1}),t.success?window.open(t.data.url):e.setState({msg:t.msg,success:!1,done:!0,visible:!0})}}))})},e.showEditModal=function(t){e.setState({editVisible:!0,current:t})},e.handleDone=function(){setTimeout(function(){return e.addBtn&&e.addBtn.blur()},0),e.setState({done:!1,visible:!1})},e.handleCancel=function(){setTimeout(function(){return e.addBtn&&e.addBtn.blur()},0),e.setState({editVisible:!1})},e.handleSubmit=function(){var t=e.props,a=t.form,n=t.dispatch,i=e.state.current;e.setState({visible:!0,done:!1,msg:"..."}),a.validateFields(function(t,a){t||(e.setState({submitted:!0}),n({type:"transform/submit",payload:f()({},i,a),callback:function(t){t.success?e.setState({edithDone:!1,editVisible:!1,success:t.success,msg:t.msg,visible:!1,edithSubmit:!1}):e.setState({done:!0,visible:!0,success:t.success,msg:t.msg,edithSubmit:!1})}}))})},e.handleChange=function(t){var a=e.state.current,n=t.join(","),i=void 0===a?{require:n}:f()({},a,{require:n});e.setState({current:i})},e.deleteItem=function(t){(0,e.props.dispatch)({type:"transform/submit",payload:{id:t}})},e.getNamespace=function(t){var a=e.props.namespaces.filter(function(e){return e.id===t});return a.length>0?a[0]:{name:"DEFAULT",id:0,avatar:""}},e}return I()(t,e),k()(t,[{key:"componentDidMount",value:function(){this.doRefresh()}},{key:"render",value:function(){var e=this,t=this.props,a=t.loading,p=t.namespaces,E=this.state,v=E.search,y=E.current,k=E.edithSubmit,C=this.props.listBasicList,S=g.a.Group,_=g.a.Button,w=D.a.createElement("div",{className:T.a.extraContent},D.a.createElement(h.a,{onClick:this.doRefresh},D.a.createElement(F.a,null)),D.a.createElement(S,{defaultValue:null,onChange:function(t){return e.setState({tag:t.target.value})}},D.a.createElement(_,{value:0},"全部"),p.length>0&&p.map(function(e){return D.a.createElement(_,{key:e.id,value:e.id},e.name)})),D.a.createElement(Q,{defaultValue:v,className:T.a.extraContentSearch,placeholder:"请输入项目名或者命名空间搜索",onSearch:function(t){return e.setState({search:t})}})),A=function(t){var a=t.data,n=(a.name,a.info,a.isAvailable),i=a.isPublish,r=a.createAt,c=a.updateAt,l=a.namespaceId;return D.a.createElement("div",{className:T.a.listContent},D.a.createElement("div",{className:T.a.listContentItem},D.a.createElement(m.a,null,e.getNamespace(l).name)),D.a.createElement("div",{className:T.a.listContentItem},D.a.createElement("span",null,"创建时间"),D.a.createElement("p",null,L()(r).format("YYYY-MM-DD HH:mm"))),D.a.createElement("div",{className:T.a.listContentItem},D.a.createElement("span",null,"修改时间"),D.a.createElement("p",null,L()(c).format("YYYY-MM-DD HH:mm"))),D.a.createElement("div",{className:T.a.listContentItem},D.a.createElement(d.a,{type:"circle",percent:100,status:n?i?"success":"normal":"exception",strokeWidth:1,width:50,style:{width:180}})))},I=function(t){var a=t.item;return D.a.createElement(u.a,{overlay:D.a.createElement(o.a,{onClick:function(t){return function(t,a){"run"===t||"stop"===t||"restart"===t?e.showRunModal(a,t):"delete"===t&&b.a.confirm({title:"删除任务",content:"确定删除该任务吗？",okText:"确认",cancelText:"取消",onOk:function(){return e.deleteItem(void 0!==a.id?a.id:0)}})}(t.key,a)}},D.a.createElement(o.a.Item,{key:"delete"},"删除"),D.a.createElement(o.a.Item,{key:"run"},"运行"),D.a.createElement(o.a.Item,{key:"stop"},"停止"),D.a.createElement(o.a.Item,{key:"restart"},"停止"),D.a.createElement(o.a.Item,{key:"copy"},D.a.createElement(Y.CopyToClipboard,{text:a.require,onCopy:function(){return e.setState({edithDone:!0})}},D.a.createElement("span",null,"复制依赖"))))},D.a.createElement("a",null,"更多 ",D.a.createElement(M.a,null)))},B=j.a.Item,O=x.a.Option,V={okText:"保存",onOk:this.handleSubmit,onCancel:this.handleCancel,footer:[D.a.createElement(h.a,{key:"back",onClick:this.handleCancel},"取消"),D.a.createElement(h.a,{key:"submit",type:"primary",loading:k,onClick:this.handleSubmit},"保存"),D.a.createElement(h.a,{type:"primary",onClick:function(t){return e.showDebugResult()},loading:k},"调试")]},R=this.props,H=R.form.getFieldDecorator,X=R.resources,G=function(e){return void 0!==e.namespaceId&&null!==e.namespaceId?(t=e.namespaceId,a=e.name,0===(n=p.filter(function(e){return e.id===t})).length?a:n[0].name+"."+a):e.name;var t,a,n},Z=Array.isArray(X)?X.map(function(e){return D.a.createElement(U,{key:e.id,title:e.info,value:G(e)},G(e))}):[];return D.a.createElement(D.a.Fragment,null,D.a.createElement("div",{className:T.a.standardList},D.a.createElement(s.a,{className:T.a.listCard,bordered:!1,title:"资源",style:{marginTop:24},bodyStyle:{padding:"0 32px 40px 32px"},extra:w},D.a.createElement(h.a,{type:"dashed",style:{width:"100%",marginBottom:8},icon:D.a.createElement(q.a,null),onClick:this.showModal,ref:function(t){e.addBtn=Object(P.findDOMNode)(t)}},"添加"),D.a.createElement(l.a,{size:"large",rowKey:"id",loading:a,dataSource:C.filter(function(t){return t.name.indexOf(v)>=0&&(0===e.state.tag||t.namespaceId===e.state.tag)}),renderItem:function(t){return D.a.createElement(l.a.Item,{actions:[D.a.createElement("a",{key:"edit",onClick:function(a){a.preventDefault(),e.showEditModal(t)}},"编辑"),D.a.createElement(I,{key:"more",item:t})]},D.a.createElement(l.a.Item.Meta,{avatar:D.a.createElement(c.a,{src:e.getNamespace(t.namespaceId).avatar,shape:"square",size:"large"}),title:D.a.createElement("a",{href:e.getNamespace(t.namespaceId).avatar},t.name.length<8?t.name:t.name.substring(0,8)+"..."),description:t.info.length<10?t.info:t.info.substring(0,10)}),D.a.createElement(A,{data:t}))}}))),D.a.createElement(b.a,{title:"运行结果",className:T.a.standardListForm,width:1080,bodyStyle:{padding:"72px 0"},destroyOnClose:!0,visible:this.state.visible,onCancel:function(t){return e.setState({visible:!1})},footer:null,confirmLoading:this.state.done},D.a.createElement(K.a,{type:this.state.done?this.state.success?"success":"error":"line",title:this.state.done?this.state.success?"运行成功":"运行失败":"提交中...",description:this.state.msg,actions:D.a.createElement(h.a,{loading:!this.state.done,type:"primary",onClick:function(t){return e.setState({visible:!1})}},"知道了"),className:T.a.formResult})),D.a.createElement(b.a,Object.assign({title:void 0===y?null:void 0===y.id?"新增":"编辑",className:T.a.standardListForm,width:1080,bodyStyle:{padding:"72px 0"},destroyOnClose:!0,visible:this.state.editVisible},V),D.a.createElement(j.a,{onSubmit:this.handleSubmit},D.a.createElement(B,Object.assign({label:"名称"},this.formLayout),H("name",{rules:J.a,initialValue:void 0===y?"":y.name})(D.a.createElement(N.a,{placeholder:"请输入"}))),D.a.createElement(B,Object.assign({label:"介绍"},this.formLayout),H("info",{initialValue:void 0===y?"":y.info})(D.a.createElement(z.a,{placeholder:"请输入"}))),D.a.createElement(B,Object.assign({label:"依赖"},this.formLayout),D.a.createElement(x.a,{mode:"tags",style:{width:"100%"},onChange:this.handleChange,tokenSeparators:[","],defaultValue:void 0===y||void 0===y.require?void 0:y.require.split(",")},Z)),D.a.createElement(B,Object.assign({label:"命名空间"},this.formLayout),H("namespaceId",{initialValue:void 0===y||null===y.namespaceId?0:y.namespaceId,rules:[{required:!1}]})(D.a.createElement(x.a,{placeholder:"请选择",size:"default",style:{width:120}},D.a.createElement(O,{key:-1,value:0},"默认"),p.length>0&&p.map(function(e){return D.a.createElement(O,{key:e.id,value:e.id},e.name)})))),D.a.createElement(B,Object.assign({label:"SQL"},this.formLayout),D.a.createElement(W.a,{mode:"sql",theme:"github",onChange:function(t){return e.setState({current:f()({},y,{sql:t})})},name:"functionConstructorConfig",editorProps:{$blockScrolling:!0},readOnly:!1,placeholder:"请输入Yaml配置",defaultValue:void 0===y?"":y.sql,value:void 0===y?"":y.sql,width:765,height:650})),D.a.createElement(B,Object.assign({label:"配置文件"},this.formLayout),D.a.createElement(W.a,{mode:"yaml",theme:"solarized_dark",onChange:function(t){return e.setState({current:f()({},y,{config:t})})},name:"functionConstructorConfig",editorProps:{$blockScrolling:!0},readOnly:!1,placeholder:"请输入Yaml配置",defaultValue:void 0===y?"":y.config,value:void 0===y?"":y.config,width:765,height:650})),D.a.createElement(B,Object.assign({label:"其他"},this.formLayout),D.a.createElement(r.a,{gutter:16},D.a.createElement(i.a,{span:3},H("isAvailable",{initialValue:void 0!==y&&y.isAvailable,valuePropName:"checked"})(D.a.createElement(n.a,{checkedChildren:"启用",unCheckedChildren:"禁止"}))),D.a.createElement(i.a,{span:3},H("isPublish",{initialValue:void 0!==y&&y.isPublish,valuePropName:"checked"})(D.a.createElement(n.a,{checkedChildren:"发布",unCheckedChildren:"开发"}))))))))}}]),t}(B.Component),Z=j.a.create()(G);t.default=Object(V.connect)(function(e){var t=e.transform,a=e.loading;return{listBasicList:t.list,namespaces:t.dependence,loading:a.models.namespace,resources:t.dependence1}})(Z)}}]);