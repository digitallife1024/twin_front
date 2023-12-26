import{z as x,w as j,B as W,k as d,o as f,C as q,l as o,i as e,v as k,D as z,E as X,c as D,F as Q,m as Y,t as V,e as N,b as O,G as R,H,I as ee,A as te,J as ae}from"./index-6d2e3bad.js";import{i as L,h as oe}from"./util.common-7559d8cb.js";import{_ as G,Z as M,a as $,b as S,T as U,c as se,d as ne}from"./util.time-f709c52a.js";import{a as C}from"./server-ae9811eb.js";import{_ as re}from"./_plugin-vue_export-helper-c27b6911.js";import{Z as le}from"./ZySearchForm-e4416514.js";const ie=i=>C.get("/v1/common/files/delete/img/"+i),ce=i=>C.get("/v1/common/files/delete/media/"+i),de=i=>C.get("/v1/common/files/delete/files/"+i),me={__name:"ZyUpload",props:{url:{type:String},showUploadList:{type:Boolean,default(){return!1}}},emits:["update:url"],setup(i,{emit:T}){const t=i,m=x({fileList:[],showUploadListOpt:!1});j(()=>t.url,n=>{let l={uid:"1",name:"图片.png",status:"done",response:{},url:n};m.fileList.push(l)});const a=T,v={authorization:W.get("token")},w=({file:n,fileList:l})=>{n.status==="error"&&z.error(n.response.message||"上传失败"),n.status==="done"&&a("update:url",n.response.data.previewUrl)},g=n=>{var s,y;if(!((y=(s=n.response)==null?void 0:s.data)!=null&&y.filename))return console.log("删除失败");let l=null;n.type.startsWith("image/")&&n.type!=="image/svg+xml"?l=ie:n.type.startsWith("video/")?l=ce:l=de,console.log(n),l(n.response.data.filename).then(h=>{})},b=n=>{let l=n.response.data.downloadUrl;const s=document.createElement("a");s.href=l,s.click(),s.remove(),window.URL.revokeObjectURL(l)},_=n=>{let l=n.response.data.previewUrl;if(!l)return;const s=document.createElement("a");s.href=l,s.setAttribute("target","_blank"),s.click(),s.remove(),window.URL.revokeObjectURL(l)};return(n,l)=>{const s=d("IconFont"),y=d("a-button"),h=d("a-upload");return f(),q(h,{"file-list":m.fileList,"onUpdate:fileList":l[0]||(l[0]=p=>m.fileList=p),headers:v,onChange:w,onPreview:_,onDownload:b,onRemove:g,"list-type":"picture",showUploadList:i.showUploadList?{showDownloadIcon:!0,showRemoveIcon:!0}:!1,action:"/v1/common/files/upload"},{default:o(()=>[e(y,{size:"small",type:"primary"},{default:o(()=>[e(s,{type:"icon-upload"}),k(" 上传 ")]),_:1})]),_:1},8,["file-list","showUploadList"])}}};const pe={class:"zy-role-select"},ue={__name:"ZyRoleSelect",props:{value:{type:String,default:()=>""}},emits:["update:value"],setup(i,{emit:T}){const t=i,m=T,a=x({dataList:[],roleValue:[],query:{params:{},pagination:{current:1,pageSize:100},sort:{columnKey:"createdAt",order:"ascend"}}}),v=w=>{console.log(`selected ${w}`),m("update:value",w)};return X(()=>{t.value&&(a.roleValue=[t.value])}),(w,g)=>{const b=d("a-select-option"),_=d("a-select");return f(),D("section",pe,[e(_,{value:a.roleValue,"onUpdate:value":g[0]||(g[0]=n=>a.roleValue=n),placeholder:"请选择角色",onChange:v},{default:o(()=>[(f(!0),D(Q,null,Y(a.dataList,(n,l)=>(f(),q(b,{value:n._id,key:l},{default:o(()=>[k(V(n.roleName),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])])}}},ge=re(ue,[["__scopeId","data-v-57054941"]]),he=i=>C.post("/v1/sys/users/update",i),fe=i=>C.post("/v1/sys/users/delete",i),we={class:"zy-get"},ve={__name:"get-users-info",props:{updateData:{type:Object,default:()=>{}}},emits:["close"],setup(i,{emit:T}){const t={style:{width:"100px"}},m={span:14},a=x({form:{}}),v=i,w=T,g=N(),b=N(!v.updateData);b.value||(a.form=v.updateData||{});const _=async()=>{try{const l=await g.value.validateFields();b.value||delete a.form.password}catch(l){console.log("Failed:",l)}},n=()=>{R("还没保存数据，确认退出?").then(l=>{l&&w("close")})};return(l,s)=>{const y=d("a-image"),h=d("a-form-item"),p=d("a-input"),r=d("a-textarea"),u=d("a-form");return f(),D("section",we,[e(u,{model:a.form,class:"zy-form","label-col":t,ref_key:"formRef",ref:g,"wrapper-col":m},{default:o(()=>[e(h,{label:"头像",name:"avatar",rules:[{required:!0,message:"请上传头像!"}]},{default:o(()=>[a.form.avatar?(f(),q(y,{key:0,width:"80px",src:a.form.avatar},null,8,["src"])):O("",!0),e(me,{url:a.form.avatar,"onUpdate:url":s[0]||(s[0]=c=>a.form.avatar=c)},null,8,["url"])]),_:1}),e(h,{label:"昵称",name:"nickname",rules:[{required:!0,message:"请输入昵称!"}]},{default:o(()=>[e(p,{value:a.form.nickname,"onUpdate:value":s[1]||(s[1]=c=>a.form.nickname=c),allowClear:"",placeholder:"请输入昵称"},null,8,["value"])]),_:1}),e(h,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名!"}]},{default:o(()=>[e(p,{value:a.form.username,"onUpdate:value":s[2]||(s[2]=c=>a.form.username=c),allowClear:"",placeholder:"请输入用户名"},null,8,["value"])]),_:1}),a.form._id?O("",!0):(f(),q(h,{key:0,label:"密码",name:"password",rules:[{required:!0,message:"请输入密码!"}]},{default:o(()=>[e(p,{value:a.form.password,"onUpdate:value":s[3]||(s[3]=c=>a.form.password=c),allowClear:"",placeholder:"请输入密码"},null,8,["value"])]),_:1})),e(h,{label:"邮箱",name:"email"},{default:o(()=>[e(p,{value:a.form.email,"onUpdate:value":s[4]||(s[4]=c=>a.form.email=c),allowClear:"",placeholder:"请输入邮箱"},null,8,["value"])]),_:1}),e(h,{label:"备注",name:"remark"},{default:o(()=>[e(r,{value:a.form.remark,"onUpdate:value":s[5]||(s[5]=c=>a.form.remark=c),allowClear:"",placeholder:"请输入备注"},null,8,["value"])]),_:1}),e(h,{label:"角色",name:"roleId",rules:[{required:!0,message:"请选择角色!"}]},{default:o(()=>[e(ge,{value:a.form.roleId,"onUpdate:value":s[6]||(s[6]=c=>a.form.roleId=c)},null,8,["value"])]),_:1})]),_:1},8,["model"]),e(G,{onSave:_,onClose:n})])}}},be={class:"zy-view"},_e={__name:"view-users-info",props:{viewData:{type:Object,default:()=>{}}},emits:["close"],setup(i,{emit:T}){return console.log(i.viewData),(m,a)=>{const v=d("a-image"),w=d("a-tag"),g=d("a-textarea");return f(),D("section",be,[e($,null,{default:o(()=>[e(M,{label:"头像"},{default:o(()=>[e(v,{width:40,src:i.viewData.avatar},null,8,["src"])]),_:1}),e(M,{label:"昵称"},{default:o(()=>[k(V(i.viewData.nickname),1)]),_:1})]),_:1}),e($,null,{default:o(()=>[e(M,{label:"用户名"},{default:o(()=>[k(V(i.viewData.username),1)]),_:1}),e(M,{label:"密码"},{default:o(()=>[k(V(i.viewData.password),1)]),_:1})]),_:1}),e($,null,{default:o(()=>[e(M,{label:"角色"},{default:o(()=>[k(V(i.viewData.roleName),1)]),_:1}),e(M,{label:"状态"},{default:o(()=>[e(w,{color:"#f70"},{default:o(()=>[k(V(i.viewData.status===1?"正常":"禁用"),1)]),_:1})]),_:1})]),_:1}),e($,null,{default:o(()=>[e(M,{label:"备注"},{default:o(()=>[e(g,{value:i.viewData.remark,"onUpdate:value":a[0]||(a[0]=b=>i.viewData.remark=b),style:{width:"500px"},disabled:"",placeholder:"Autosize height based on content lines","auto-size":""},null,8,["value"])]),_:1})]),_:1})])}}},ye={class:"zy-get"},Ae={__name:"reset-users-info",props:{updateData:{type:Object,default:()=>{}}},emits:["close"],setup(i,{emit:T}){const t={style:{width:"100px"}},m={span:14},a=x({form:{}}),v=i,w=T,g=N();a.form=v.updateData||{};const b=async()=>{try{const n=await g.value.validateFields()}catch(n){console.log("Failed:",n)}},_=()=>{R("还没保存数据，确认退出?").then(n=>{n&&w("close")})};return(n,l)=>{const s=d("a-input"),y=d("a-form-item"),h=d("a-form");return f(),D("section",ye,[e(h,{model:a.form,class:"zy-form","label-col":t,ref_key:"formRef",ref:g,"wrapper-col":m},{default:o(()=>[e(y,{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码!"}]},{default:o(()=>[e(s,{value:a.form.password,"onUpdate:value":l[0]||(l[0]=p=>a.form.password=p),type:"password",disabled:"",allowClear:"",placeholder:"请输入密码"},null,8,["value"])]),_:1}),e(y,{label:"新密码",name:"newPassword",rules:[{required:!0,message:"请输入新密码!"}]},{default:o(()=>[e(s,{value:a.form.newPassword,"onUpdate:value":l[1]||(l[1]=p=>a.form.newPassword=p),allowClear:"",placeholder:"请输入新密码"},null,8,["value"])]),_:1})]),_:1},8,["model"]),e(G,{onSave:b,onClose:_})])}}},Ze={__name:"dir-users-info",setup(i){const T=[{title:"头像",dataIndex:"avatar",key:"avatar",align:"center"},{title:"昵称",dataIndex:"nickname",key:"nickname",align:"center"},{title:"用户名",dataIndex:"username",key:"username",align:"center"},{title:"备注",dataIndex:"remark",key:"remark",align:""},{title:"账号状态",dataIndex:"status",key:"status",align:"center"},{title:"创建时间",dataIndex:"createdAt",key:"createdAt",sorter:(r,u)=>{},align:"center"},{title:"操作",width:225,key:"action",align:"center",fixed:"right"}],t=x({show:{add:!1,edit:!1,view:!1},editTitle:"编辑用户",activeComponent:null,expandedRowKeys:[],updateData:{},resetData:{},viewData:{},query:{params:{},pagination:{current:1,pageSize:10,total:0,hideOnSinglePage:!0},sort:{columnKey:"createdAt",order:"ascend"}},dataList:[],loading:{spinning:!1,tip:"加载中"}}),m=(r=1)=>{t.query.pagination.current=r,_()},a=()=>{m()},v=(r,u)=>{},w=r=>{he({_id:r._id,status:r.status}).then(u=>{z.success(r.status?"启用成功":"停用成功"),m()})},g=({current:r,pageSize:u})=>{t.query.pagination=x({current:r,pageSize:u}),_()},b=({columnKey:r,order:u})=>{t.query.sort=x({current:r,order:u}),_()},_=()=>{t.loading.spinning=!0,ee(t.query);let r={status:1,message:"Success.",data:{result:[{_id:"64a7aab3a971facd0469625d",avatar:"http://localhost:3089/v1/common/files/preview/img/1694395434026.webp",username:"visitor",nickname:"亡命之徒",password:"$2a$10$d0MQyKMyvNcX8whJsF7O0OLqulGKo3GE0hS/WqoGFKpU.dmFRIHFO",roleId:"64a7aa20a971facd04696242",status:!0,createdAt:"2023-07-07T06:03:31.690Z",updatedAt:"2023-09-11T01:23:55.237Z",type:"admin",role:[{_id:"64a7aa20a971facd04696242",roleName:"访客",roleAuth:"VISITOR-ADMIN",perms:["index","components:echart:chinaMap","components:echart:worldMap","components:echart:line","components:echart:pie","pages","pages:all","dev:icon","dev:codes:list","components:editor","components:editor:Tinymce","components:editor:Vditor","components:editor:VMdEditor","components","components:echart","components:echart:guizhouMap","sys:permissions:list","blog:blog_articles:list","blog:portfolios:list","blog:messages:list","blog:messages:delete"],remark:"一般访客，更多的是有查看权限",status:!0,createdAt:"2023-07-07T06:01:04.121Z",updatedAt:"2023-08-08T05:25:44.071Z"}]},{_id:"64aabf3d28f413f08d51cc00",avatar:"http://localhost:3089/v1/common/files/preview/img/1694395422575.png",username:"admin",nickname:"ZY·Admin",password:"$2a$10$hdgL5ydnB8oLLcrgwjXdouAaZV/by32gWPOBiMl3wwFEzSVmdTvtG",roleId:"64a423816f4197cfc70375e3",status:!0,createdAt:"2023-07-09T14:07:57.766Z",updatedAt:"2023-09-11T01:23:43.856Z",type:"admin",email:"1840354092@qq.com",role:[{_id:"64a423816f4197cfc70375e3",roleName:"超级管理员",roleAuth:"SUPER-ADMIN",perms:["*"],remark:"拥有所有权限",status:!0,createdAt:"2023-07-04T13:49:53.993Z",updatedAt:"2023-07-04T13:50:42.566Z"}]},{_id:"64d0a524050d4e56664640a3",avatar:"https://q1.qlogo.cn/g?b=qq&nk=1840354099@qq.com&s=100",username:"1840354099@qq.com",nickname:"BraveTiger",password:"$2a$10$8Py3q427e4aOM3TSWDD68uNSjZMe/GYJcDGsClhIiy6LdBnJyJDaK",email:"1840354099@qq.com",roleId:"64a7aa20a971facd04696242",status:!0,type:"user",website:"www.zhouyi.run",platform:"Chrome.v115",userIp:"0.0.0.0",address:"保留地址",createdAt:"2023-08-07T08:02:44.055Z",updatedAt:"2023-08-07T08:02:44.055Z",role:[{_id:"64a7aa20a971facd04696242",roleName:"访客",roleAuth:"VISITOR-ADMIN",perms:["index","components:echart:chinaMap","components:echart:worldMap","components:echart:line","components:echart:pie","pages","pages:all","dev:icon","dev:codes:list","components:editor","components:editor:Tinymce","components:editor:Vditor","components:editor:VMdEditor","components","components:echart","components:echart:guizhouMap","sys:permissions:list","blog:blog_articles:list","blog:portfolios:list","blog:messages:list","blog:messages:delete"],remark:"一般访客，更多的是有查看权限",status:!0,createdAt:"2023-07-07T06:01:04.121Z",updatedAt:"2023-08-08T05:25:44.071Z"}]},{_id:"64d0a544050d4e56664640aa",avatar:"https://q1.qlogo.cn/g?b=qq&nk=18403099@qq.com&s=100",username:"18403099@qq.com",nickname:"LovelyLion",password:"$2a$10$wWHE4VDS/QzWmG4tjg16TeGoOoILOQGpDCFzoiAMKNrlF1TOwX24C",email:"18403099@qq.com",roleId:"64a7aa20a971facd04696242",status:!0,type:"user",website:"www.zhouyi.run",platform:"Chrome.v115",userIp:"0.0.0.0",address:"保留地址",createdAt:"2023-08-07T08:03:16.380Z",updatedAt:"2023-08-07T08:03:16.380Z",role:[{_id:"64a7aa20a971facd04696242",roleName:"访客",roleAuth:"VISITOR-ADMIN",perms:["index","components:echart:chinaMap","components:echart:worldMap","components:echart:line","components:echart:pie","pages","pages:all","dev:icon","dev:codes:list","components:editor","components:editor:Tinymce","components:editor:Vditor","components:editor:VMdEditor","components","components:echart","components:echart:guizhouMap","sys:permissions:list","blog:blog_articles:list","blog:portfolios:list","blog:messages:list","blog:messages:delete"],remark:"一般访客，更多的是有查看权限",status:!0,createdAt:"2023-07-07T06:01:04.121Z",updatedAt:"2023-08-08T05:25:44.071Z"}]},{_id:"64d0a556050d4e56664640b1",avatar:"https://gravatar.kuibu.net/avatar/703e25762b056e4da576c886e1059479?s=100",username:"18403099@xxx.com",nickname:"LovelyLion",password:"$2a$10$9Cdw1wgeqF9B8ULJoIrV9uihSs8AejRUIkBE8nU5fXUZz5oCRhpAC",email:"18403099@xxx.com",roleId:"64a7aa20a971facd04696242",status:!0,type:"user",website:"www.zhouyi.run",platform:"Chrome.v115",userIp:"0.0.0.0",address:"保留地址",createdAt:"2023-08-07T08:03:34.486Z",updatedAt:"2023-08-07T08:03:34.486Z",role:[{_id:"64a7aa20a971facd04696242",roleName:"访客",roleAuth:"VISITOR-ADMIN",perms:["index","components:echart:chinaMap","components:echart:worldMap","components:echart:line","components:echart:pie","pages","pages:all","dev:icon","dev:codes:list","components:editor","components:editor:Tinymce","components:editor:Vditor","components:editor:VMdEditor","components","components:echart","components:echart:guizhouMap","sys:permissions:list","blog:blog_articles:list","blog:portfolios:list","blog:messages:list","blog:messages:delete"],remark:"一般访客，更多的是有查看权限",status:!0,createdAt:"2023-07-07T06:01:04.121Z",updatedAt:"2023-08-08T05:25:44.071Z"}]},{_id:"64d0a6c3571bc80e84717c2a",avatar:"https://gravatar.kuibu.net/avatar/860254b3da9c08b769e5a62ae9628282?s=100",username:"18003099@xxx.com",nickname:"LovelyLion",password:"$2a$10$Udf3tAP0IE5y4Dci4kmGl.Oc.6keOGqq035QAXXLGuCFOsR8pJts6",email:"18003099@xxx.com",roleId:"64a7aa20a971facd04696242",status:!0,type:"user",website:"www.zhouyi.run",platform:"Chrome.v115",userIp:"0.0.0.0",address:"保留地址",createdAt:"2023-08-07T08:09:39.553Z",updatedAt:"2023-08-07T08:09:39.553Z",role:[{_id:"64a7aa20a971facd04696242",roleName:"访客",roleAuth:"VISITOR-ADMIN",perms:["index","components:echart:chinaMap","components:echart:worldMap","components:echart:line","components:echart:pie","pages","pages:all","dev:icon","dev:codes:list","components:editor","components:editor:Tinymce","components:editor:Vditor","components:editor:VMdEditor","components","components:echart","components:echart:guizhouMap","sys:permissions:list","blog:blog_articles:list","blog:portfolios:list","blog:messages:list","blog:messages:delete"],remark:"一般访客，更多的是有查看权限",status:!0,createdAt:"2023-07-07T06:01:04.121Z",updatedAt:"2023-08-08T05:25:44.071Z"}]},{_id:"64d0a6cc571bc80e84717c31",avatar:"https://gravatar.kuibu.net/avatar/32ad41830da9a7edab6cea138ff1ca44?s=100",username:"1800303299@xxx.com",nickname:"LovelyLion",password:"$2a$10$D2Y1kwDXqohcgR7CPG7Ov.GNFg/pwVPvaRWTwBlzxxf/5/PJ84JzC",email:"1800303299@xxx.com",roleId:"64a7aa20a971facd04696242",status:!0,type:"user",website:"www.zhouyi.run",platform:"Chrome.v115",userIp:"0.0.0.0",address:"保留地址",createdAt:"2023-08-07T08:09:48.789Z",updatedAt:"2023-08-07T08:09:48.789Z",role:[{_id:"64a7aa20a971facd04696242",roleName:"访客",roleAuth:"VISITOR-ADMIN",perms:["index","components:echart:chinaMap","components:echart:worldMap","components:echart:line","components:echart:pie","pages","pages:all","dev:icon","dev:codes:list","components:editor","components:editor:Tinymce","components:editor:Vditor","components:editor:VMdEditor","components","components:echart","components:echart:guizhouMap","sys:permissions:list","blog:blog_articles:list","blog:portfolios:list","blog:messages:list","blog:messages:delete"],remark:"一般访客，更多的是有查看权限",status:!0,createdAt:"2023-07-07T06:01:04.121Z",updatedAt:"2023-08-08T05:25:44.071Z"}]},{_id:"64d0a859ccf7303b30150025",avatar:"https://gravatar.kuibu.net/avatar/88361aff47cbf913225d05f04f8d108a?s=100",username:"1840354095@xxx.com",nickname:"Contact Me",password:"$2a$10$fGTwZlLg2R9KbpulSakGWOJYpe7QiSZO5xGfIQV4KfNKmcz8HsSFy",email:"1840354095@xxx.com",roleId:"64a7aa20a971facd04696242",status:!0,type:"user",website:"www.zhouyi.run",platform:"Chrome.v115",userIp:"0.0.0.0",address:"保留地址",createdAt:"2023-08-07T08:16:25.352Z",updatedAt:"2023-08-07T08:16:25.352Z",role:[{_id:"64a7aa20a971facd04696242",roleName:"访客",roleAuth:"VISITOR-ADMIN",perms:["index","components:echart:chinaMap","components:echart:worldMap","components:echart:line","components:echart:pie","pages","pages:all","dev:icon","dev:codes:list","components:editor","components:editor:Tinymce","components:editor:Vditor","components:editor:VMdEditor","components","components:echart","components:echart:guizhouMap","sys:permissions:list","blog:blog_articles:list","blog:portfolios:list","blog:messages:list","blog:messages:delete"],remark:"一般访客，更多的是有查看权限",status:!0,createdAt:"2023-07-07T06:01:04.121Z",updatedAt:"2023-08-08T05:25:44.071Z"}]},{_id:"64d0a863ccf7303b3015002c",avatar:"https://q1.qlogo.cn/g?b=qq&nk=1840354095@qq.com&s=100",username:"1840354095@qq.com",nickname:"Contact Me",password:"$2a$10$epwgGKjjO74kGY8QTNpiXuUebTaDcBVJKA4bDO5ueazHgv4xrTOqG",email:"1840354095@qq.com",roleId:"64a7aa20a971facd04696242",status:!0,type:"user",website:"https://blog.dandyweng.com/messages/",platform:"Chrome.v115",userIp:"0.0.0.0",address:"保留地址",createdAt:"2023-08-07T08:16:35.554Z",updatedAt:"2023-08-07T08:16:35.554Z",role:[{_id:"64a7aa20a971facd04696242",roleName:"访客",roleAuth:"VISITOR-ADMIN",perms:["index","components:echart:chinaMap","components:echart:worldMap","components:echart:line","components:echart:pie","pages","pages:all","dev:icon","dev:codes:list","components:editor","components:editor:Tinymce","components:editor:Vditor","components:editor:VMdEditor","components","components:echart","components:echart:guizhouMap","sys:permissions:list","blog:blog_articles:list","blog:portfolios:list","blog:messages:list","blog:messages:delete"],remark:"一般访客，更多的是有查看权限",status:!0,createdAt:"2023-07-07T06:01:04.121Z",updatedAt:"2023-08-08T05:25:44.071Z"}]},{_id:"64d0fc4e98c726a2d735bc4f",avatar:"https://q1.qlogo.cn/g?b=qq&nk=1840354093@qq.com&s=100",username:"1840354093@qq.com",nickname:"王俊凯",password:"$2a$10$MNNXu8zdOGg21V73ucSm4evgoFydreyvctqtQSxl2GzMPgk3VdYdG",email:"1840354093@qq.com",roleId:"64a7aa20a971facd04696242",status:!0,type:"user",website:"",platform:"Edge.v115",userIp:"0.0.0.0",address:"保留地址",createdAt:"2023-08-07T14:14:38.633Z",updatedAt:"2023-08-08T05:16:30.516Z",role:[{_id:"64a7aa20a971facd04696242",roleName:"访客",roleAuth:"VISITOR-ADMIN",perms:["index","components:echart:chinaMap","components:echart:worldMap","components:echart:line","components:echart:pie","pages","pages:all","dev:icon","dev:codes:list","components:editor","components:editor:Tinymce","components:editor:Vditor","components:editor:VMdEditor","components","components:echart","components:echart:guizhouMap","sys:permissions:list","blog:blog_articles:list","blog:portfolios:list","blog:messages:list","blog:messages:delete"],remark:"一般访客，更多的是有查看权限",status:!0,createdAt:"2023-07-07T06:01:04.121Z",updatedAt:"2023-08-08T05:25:44.071Z"}]}],current:1,pageSize:10,total:21},time:1694589183009};t.loading.spinning=!1;let u=[{_id:"64a7aab3a971facd0469625d",avatar:"http://localhost:3089/v1/common/files/preview/img/1694395434026.webp",username:"visitor",nickname:"亡命之徒",password:"$2a$10$d0MQyKMyvNcX8whJsF7O0OLqulGKo3GE0hS/WqoGFKpU.dmFRIHFO",roleId:"64a7aa20a971facd04696242",status:!0,createdAt:"2023-07-07T06:03:31.690Z",updatedAt:"2023-09-11T01:23:55.237Z",type:"admin",role:[{_id:"64a7aa20a971facd04696242",roleName:"访客",roleAuth:"VISITOR-ADMIN",perms:["index","components:echart:chinaMap","components:echart:worldMap","components:echart:line","components:echart:pie","pages","pages:all","dev:icon","dev:codes:list","components:editor","components:editor:Tinymce","components:editor:Vditor","components:editor:VMdEditor","components","components:echart","components:echart:guizhouMap","sys:permissions:list","blog:blog_articles:list","blog:portfolios:list","blog:messages:list","blog:messages:delete"],remark:"一般访客，更多的是有查看权限",status:!0,createdAt:"2023-07-07T06:01:04.121Z",updatedAt:"2023-08-08T05:25:44.071Z"}]},{_id:"64aabf3d28f413f08d51cc00",avatar:"http://localhost:3089/v1/common/files/preview/img/1694395422575.png",username:"admin",nickname:"ZY·Admin",password:"$2a$10$hdgL5ydnB8oLLcrgwjXdouAaZV/by32gWPOBiMl3wwFEzSVmdTvtG",roleId:"64a423816f4197cfc70375e3",status:!0,createdAt:"2023-07-09T14:07:57.766Z",updatedAt:"2023-09-11T01:23:43.856Z",type:"admin",email:"1840354092@qq.com",role:[{_id:"64a423816f4197cfc70375e3",roleName:"超级管理员",roleAuth:"SUPER-ADMIN",perms:["*"],remark:"拥有所有权限",status:!0,createdAt:"2023-07-04T13:49:53.993Z",updatedAt:"2023-07-04T13:50:42.566Z"}]},{_id:"64d0a524050d4e56664640a3",avatar:"https://q1.qlogo.cn/g?b=qq&nk=1840354099@qq.com&s=100",username:"1840354099@qq.com",nickname:"BraveTiger",password:"$2a$10$8Py3q427e4aOM3TSWDD68uNSjZMe/GYJcDGsClhIiy6LdBnJyJDaK",email:"1840354099@qq.com",roleId:"64a7aa20a971facd04696242",status:!0,type:"user",website:"www.zhouyi.run",platform:"Chrome.v115",userIp:"0.0.0.0",address:"保留地址",createdAt:"2023-08-07T08:02:44.055Z",updatedAt:"2023-08-07T08:02:44.055Z",role:[{_id:"64a7aa20a971facd04696242",roleName:"访客",roleAuth:"VISITOR-ADMIN",perms:["index","components:echart:chinaMap","components:echart:worldMap","components:echart:line","components:echart:pie","pages","pages:all","dev:icon","dev:codes:list","components:editor","components:editor:Tinymce","components:editor:Vditor","components:editor:VMdEditor","components","components:echart","components:echart:guizhouMap","sys:permissions:list","blog:blog_articles:list","blog:portfolios:list","blog:messages:list","blog:messages:delete"],remark:"一般访客，更多的是有查看权限",status:!0,createdAt:"2023-07-07T06:01:04.121Z",updatedAt:"2023-08-08T05:25:44.071Z"}]},{_id:"64d0a544050d4e56664640aa",avatar:"https://q1.qlogo.cn/g?b=qq&nk=18403099@qq.com&s=100",username:"18403099@qq.com",nickname:"LovelyLion",password:"$2a$10$wWHE4VDS/QzWmG4tjg16TeGoOoILOQGpDCFzoiAMKNrlF1TOwX24C",email:"18403099@qq.com",roleId:"64a7aa20a971facd04696242",status:!0,type:"user",website:"www.zhouyi.run",platform:"Chrome.v115",userIp:"0.0.0.0",address:"保留地址",createdAt:"2023-08-07T08:03:16.380Z",updatedAt:"2023-08-07T08:03:16.380Z",role:[{_id:"64a7aa20a971facd04696242",roleName:"访客",roleAuth:"VISITOR-ADMIN",perms:["index","components:echart:chinaMap","components:echart:worldMap","components:echart:line","components:echart:pie","pages","pages:all","dev:icon","dev:codes:list","components:editor","components:editor:Tinymce","components:editor:Vditor","components:editor:VMdEditor","components","components:echart","components:echart:guizhouMap","sys:permissions:list","blog:blog_articles:list","blog:portfolios:list","blog:messages:list","blog:messages:delete"],remark:"一般访客，更多的是有查看权限",status:!0,createdAt:"2023-07-07T06:01:04.121Z",updatedAt:"2023-08-08T05:25:44.071Z"}]},{_id:"64d0a556050d4e56664640b1",avatar:"https://gravatar.kuibu.net/avatar/703e25762b056e4da576c886e1059479?s=100",username:"18403099@xxx.com",nickname:"LovelyLion",password:"$2a$10$9Cdw1wgeqF9B8ULJoIrV9uihSs8AejRUIkBE8nU5fXUZz5oCRhpAC",email:"18403099@xxx.com",roleId:"64a7aa20a971facd04696242",status:!0,type:"user",website:"www.zhouyi.run",platform:"Chrome.v115",userIp:"0.0.0.0",address:"保留地址",createdAt:"2023-08-07T08:03:34.486Z",updatedAt:"2023-08-07T08:03:34.486Z",role:[{_id:"64a7aa20a971facd04696242",roleName:"访客",roleAuth:"VISITOR-ADMIN",perms:["index","components:echart:chinaMap","components:echart:worldMap","components:echart:line","components:echart:pie","pages","pages:all","dev:icon","dev:codes:list","components:editor","components:editor:Tinymce","components:editor:Vditor","components:editor:VMdEditor","components","components:echart","components:echart:guizhouMap","sys:permissions:list","blog:blog_articles:list","blog:portfolios:list","blog:messages:list","blog:messages:delete"],remark:"一般访客，更多的是有查看权限",status:!0,createdAt:"2023-07-07T06:01:04.121Z",updatedAt:"2023-08-08T05:25:44.071Z"}]},{_id:"64d0a6c3571bc80e84717c2a",avatar:"https://gravatar.kuibu.net/avatar/860254b3da9c08b769e5a62ae9628282?s=100",username:"18003099@xxx.com",nickname:"LovelyLion",password:"$2a$10$Udf3tAP0IE5y4Dci4kmGl.Oc.6keOGqq035QAXXLGuCFOsR8pJts6",email:"18003099@xxx.com",roleId:"64a7aa20a971facd04696242",status:!0,type:"user",website:"www.zhouyi.run",platform:"Chrome.v115",userIp:"0.0.0.0",address:"保留地址",createdAt:"2023-08-07T08:09:39.553Z",updatedAt:"2023-08-07T08:09:39.553Z",role:[{_id:"64a7aa20a971facd04696242",roleName:"访客",roleAuth:"VISITOR-ADMIN",perms:["index","components:echart:chinaMap","components:echart:worldMap","components:echart:line","components:echart:pie","pages","pages:all","dev:icon","dev:codes:list","components:editor","components:editor:Tinymce","components:editor:Vditor","components:editor:VMdEditor","components","components:echart","components:echart:guizhouMap","sys:permissions:list","blog:blog_articles:list","blog:portfolios:list","blog:messages:list","blog:messages:delete"],remark:"一般访客，更多的是有查看权限",status:!0,createdAt:"2023-07-07T06:01:04.121Z",updatedAt:"2023-08-08T05:25:44.071Z"}]},{_id:"64d0a6cc571bc80e84717c31",avatar:"https://gravatar.kuibu.net/avatar/32ad41830da9a7edab6cea138ff1ca44?s=100",username:"1800303299@xxx.com",nickname:"LovelyLion",password:"$2a$10$D2Y1kwDXqohcgR7CPG7Ov.GNFg/pwVPvaRWTwBlzxxf/5/PJ84JzC",email:"1800303299@xxx.com",roleId:"64a7aa20a971facd04696242",status:!0,type:"user",website:"www.zhouyi.run",platform:"Chrome.v115",userIp:"0.0.0.0",address:"保留地址",createdAt:"2023-08-07T08:09:48.789Z",updatedAt:"2023-08-07T08:09:48.789Z",role:[{_id:"64a7aa20a971facd04696242",roleName:"访客",roleAuth:"VISITOR-ADMIN",perms:["index","components:echart:chinaMap","components:echart:worldMap","components:echart:line","components:echart:pie","pages","pages:all","dev:icon","dev:codes:list","components:editor","components:editor:Tinymce","components:editor:Vditor","components:editor:VMdEditor","components","components:echart","components:echart:guizhouMap","sys:permissions:list","blog:blog_articles:list","blog:portfolios:list","blog:messages:list","blog:messages:delete"],remark:"一般访客，更多的是有查看权限",status:!0,createdAt:"2023-07-07T06:01:04.121Z",updatedAt:"2023-08-08T05:25:44.071Z"}]},{_id:"64d0a859ccf7303b30150025",avatar:"https://gravatar.kuibu.net/avatar/88361aff47cbf913225d05f04f8d108a?s=100",username:"1840354095@xxx.com",nickname:"Contact Me",password:"$2a$10$fGTwZlLg2R9KbpulSakGWOJYpe7QiSZO5xGfIQV4KfNKmcz8HsSFy",email:"1840354095@xxx.com",roleId:"64a7aa20a971facd04696242",status:!0,type:"user",website:"www.zhouyi.run",platform:"Chrome.v115",userIp:"0.0.0.0",address:"保留地址",createdAt:"2023-08-07T08:16:25.352Z",updatedAt:"2023-08-07T08:16:25.352Z",role:[{_id:"64a7aa20a971facd04696242",roleName:"访客",roleAuth:"VISITOR-ADMIN",perms:["index","components:echart:chinaMap","components:echart:worldMap","components:echart:line","components:echart:pie","pages","pages:all","dev:icon","dev:codes:list","components:editor","components:editor:Tinymce","components:editor:Vditor","components:editor:VMdEditor","components","components:echart","components:echart:guizhouMap","sys:permissions:list","blog:blog_articles:list","blog:portfolios:list","blog:messages:list","blog:messages:delete"],remark:"一般访客，更多的是有查看权限",status:!0,createdAt:"2023-07-07T06:01:04.121Z",updatedAt:"2023-08-08T05:25:44.071Z"}]},{_id:"64d0a863ccf7303b3015002c",avatar:"https://q1.qlogo.cn/g?b=qq&nk=1840354095@qq.com&s=100",username:"1840354095@qq.com",nickname:"Contact Me",password:"$2a$10$epwgGKjjO74kGY8QTNpiXuUebTaDcBVJKA4bDO5ueazHgv4xrTOqG",email:"1840354095@qq.com",roleId:"64a7aa20a971facd04696242",status:!0,type:"user",website:"https://blog.dandyweng.com/messages/",platform:"Chrome.v115",userIp:"0.0.0.0",address:"保留地址",createdAt:"2023-08-07T08:16:35.554Z",updatedAt:"2023-08-07T08:16:35.554Z",role:[{_id:"64a7aa20a971facd04696242",roleName:"访客",roleAuth:"VISITOR-ADMIN",perms:["index","components:echart:chinaMap","components:echart:worldMap","components:echart:line","components:echart:pie","pages","pages:all","dev:icon","dev:codes:list","components:editor","components:editor:Tinymce","components:editor:Vditor","components:editor:VMdEditor","components","components:echart","components:echart:guizhouMap","sys:permissions:list","blog:blog_articles:list","blog:portfolios:list","blog:messages:list","blog:messages:delete"],remark:"一般访客，更多的是有查看权限",status:!0,createdAt:"2023-07-07T06:01:04.121Z",updatedAt:"2023-08-08T05:25:44.071Z"}]},{_id:"64d0fc4e98c726a2d735bc4f",avatar:"https://q1.qlogo.cn/g?b=qq&nk=1840354093@qq.com&s=100",username:"1840354093@qq.com",nickname:"王俊凯",password:"$2a$10$MNNXu8zdOGg21V73ucSm4evgoFydreyvctqtQSxl2GzMPgk3VdYdG",email:"1840354093@qq.com",roleId:"64a7aa20a971facd04696242",status:!0,type:"user",website:"",platform:"Edge.v115",userIp:"0.0.0.0",address:"保留地址",createdAt:"2023-08-07T14:14:38.633Z",updatedAt:"2023-08-08T05:16:30.516Z",role:[{_id:"64a7aa20a971facd04696242",roleName:"访客",roleAuth:"VISITOR-ADMIN",perms:["index","components:echart:chinaMap","components:echart:worldMap","components:echart:line","components:echart:pie","pages","pages:all","dev:icon","dev:codes:list","components:editor","components:editor:Tinymce","components:editor:Vditor","components:editor:VMdEditor","components","components:echart","components:echart:guizhouMap","sys:permissions:list","blog:blog_articles:list","blog:portfolios:list","blog:messages:list","blog:messages:delete"],remark:"一般访客，更多的是有查看权限",status:!0,createdAt:"2023-07-07T06:01:04.121Z",updatedAt:"2023-08-08T05:25:44.071Z"}]}];for(const c of u)c.createdAt=U.formatTime(c.createdAt),c.updatedAt=U.formatTime(c.updatedAt);t.dataList=u,t.query.pagination.total=r.data.total,t.query.pagination.current=r.data.current,t.query.pagination.pageSize=r.data.pageSize},n=(r,u,c)=>{L(r)||g(r),L(c)||b(c)},l=r=>{t.show.view=!0,t.viewData=r},s=r=>{t.show.edit=!0,r&&r._id?t.editTitle="修改用户":t.editTitle="添加用户",t.updateData=r},y=r=>{R("确认删除该条数据?").then(u=>{u&&fe(r).then(c=>{z.success("删除成功"),m()}).catch(c=>{z.error("操作失败"),console.log(c)})})},h=r=>{t.resetData=r||{},t.show.reset=!0},p=r=>{t.show.add=!1,t.show.reset=!1,t.show.view=!1,t.show.edit=!1,r&&m()};return m(),(r,u)=>{const c=d("a-input"),E=d("a-form-item"),F=d("a-image"),P=d("a-switch"),K=d("a-button"),B=d("a-table"),J=H("permission");return f(),D("section",null,[e(le,{formValue:t.query.params,onSubmit:m,onReset:a},{default:o(()=>[e(E,{name:"name"},{default:o(()=>[e(c,{value:t.query.params.username,"onUpdate:value":u[0]||(u[0]=I=>t.query.params.username=I),allowClear:"",placeholder:"请输入用户名",onPressEnter:m,autocomplete:"off"},null,8,["value"])]),_:1})]),_:1},8,["formValue"]),e(se,{onAdd:s,addAuth:"sys:user:create",showDelete:!1}),e(B,{bordered:"",resizable:!0,loading:t.loading,columns:T,"row-key":I=>I._id,pagination:t.query.pagination,expandedRowRender:t.expandedRowKeys,onExpand:v,onChange:n,"row-class-name":(I,A)=>A%2===1?"table-striped":null,"data-source":t.dataList},{bodyCell:o(({column:I,record:A})=>[I.key==="avatar"?(f(),q(F,{key:0,width:40,src:A.avatar},null,8,["src"])):I.key==="status"?(f(),q(P,{key:1,checked:A.status,"onUpdate:checked":Z=>A.status=Z,disabled:!te(oe)("sys:users:update"),"checked-children":"正常","un-checked-children":"停用",onChange:Z=>w(A)},null,8,["checked","onUpdate:checked","disabled","onChange"])):I.key==="action"?(f(),q(ne,{key:2,viewAuth:"sys:user:list",editAuth:"sys:user:update",deleteAuth:"sys:user:delete",showView:!1,onView:Z=>l(A),showEdit:A.status,onEdit:Z=>s(A),onDelete:Z=>y(A)},{default:o(()=>[ae((f(),q(K,{type:"primary",size:"small",onClick:Z=>h(A)},{default:o(()=>[k("重置密码 ")]),_:2},1032,["onClick"])),[[J,"sys:users:reset"]])]),_:2},1032,["onView","showEdit","onEdit","onDelete"])):O("",!0)]),_:1},8,["loading","row-key","pagination","expandedRowRender","row-class-name","data-source"]),e(S,{minWidth:650,show:t.show.edit,title:t.editTitle,key:"GetUserInfo",onClose:p},{default:o(()=>[e(ve,{updateData:t.updateData,onClose:p},null,8,["updateData"])]),_:1},8,["show","title"]),e(S,{minWidth:650,show:t.show.view,title:"查看用户",key:"ViewUserInfo",onClose:p},{default:o(()=>[e(_e,{viewData:t.viewData,onClose:p},null,8,["viewData"])]),_:1},8,["show"]),e(S,{minWidth:650,show:t.show.reset,title:"重置密码",key:"ResetUserInfo",onClose:p},{default:o(()=>[e(Ae,{updateData:t.resetData,onClose:p},null,8,["updateData"])]),_:1},8,["show"])])}}};export{Ze as default};