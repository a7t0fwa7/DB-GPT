(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{50318:function(i,e,t){"use strict";t.d(e,{Z:function(){return y}});var r=t(46750),n=t(40431),a=t(86006),o=t(89791),l=t(53832),s=t(47562),c=t(50645),d=t(88930),v=t(18587);function u(i){return(0,v.d6)("MuiDivider",i)}(0,v.sI)("MuiDivider",["root","horizontal","vertical","insetContext","insetNone"]);var h=t(326),m=t(9268);let p=["className","children","component","inset","orientation","role","slots","slotProps"],g=i=>{let{orientation:e,inset:t}=i,r={root:["root",e,t&&`inset${(0,l.Z)(t)}`]};return(0,s.Z)(r,u,{})},f=(0,c.Z)("hr",{name:"JoyDivider",slot:"Root",overridesResolver:(i,e)=>e.root})(({theme:i,ownerState:e})=>(0,n.Z)({"--Divider-thickness":"1px","--Divider-lineColor":i.vars.palette.divider},"none"===e.inset&&{"--_Divider-inset":"0px"},"context"===e.inset&&{"--_Divider-inset":"var(--Divider-inset, 0px)"},{margin:"initial",marginInline:"vertical"===e.orientation?"initial":"var(--_Divider-inset)",marginBlock:"vertical"===e.orientation?"var(--_Divider-inset)":"initial",position:"relative",alignSelf:"stretch",flexShrink:0},e.children?{"--Divider-gap":i.spacing(1),"--Divider-childPosition":"50%",display:"flex",flexDirection:"vertical"===e.orientation?"column":"row",alignItems:"center",whiteSpace:"nowrap",textAlign:"center",border:0,fontFamily:i.vars.fontFamily.body,fontSize:i.vars.fontSize.sm,"&::before, &::after":{position:"relative",inlineSize:"vertical"===e.orientation?"var(--Divider-thickness)":"initial",blockSize:"vertical"===e.orientation?"initial":"var(--Divider-thickness)",backgroundColor:"var(--Divider-lineColor)",content:'""'},"&::before":{marginInlineEnd:"vertical"===e.orientation?"initial":"min(var(--Divider-childPosition) * 999, var(--Divider-gap))",marginBlockEnd:"vertical"===e.orientation?"min(var(--Divider-childPosition) * 999, var(--Divider-gap))":"initial",flexBasis:"var(--Divider-childPosition)"},"&::after":{marginInlineStart:"vertical"===e.orientation?"initial":"min((100% - var(--Divider-childPosition)) * 999, var(--Divider-gap))",marginBlockStart:"vertical"===e.orientation?"min((100% - var(--Divider-childPosition)) * 999, var(--Divider-gap))":"initial",flexBasis:"calc(100% - var(--Divider-childPosition))"}}:{border:"none",listStyle:"none",backgroundColor:"var(--Divider-lineColor)",inlineSize:"vertical"===e.orientation?"var(--Divider-thickness)":"initial",blockSize:"vertical"===e.orientation?"initial":"var(--Divider-thickness)"})),x=a.forwardRef(function(i,e){let t=(0,d.Z)({props:i,name:"JoyDivider"}),{className:a,children:l,component:s=null!=l?"div":"hr",inset:c,orientation:v="horizontal",role:u="hr"!==s?"separator":void 0,slots:x={},slotProps:y={}}=t,b=(0,r.Z)(t,p),j=(0,n.Z)({},t,{inset:c,role:u,orientation:v,component:s}),D=g(j),k=(0,n.Z)({},b,{component:s,slots:x,slotProps:y}),[w,Z]=(0,h.Z)("root",{ref:e,className:(0,o.Z)(D.root,a),elementType:f,externalForwardedProps:k,ownerState:j,additionalProps:(0,n.Z)({as:s,role:u},"separator"===u&&"vertical"===v&&{"aria-orientation":"vertical"})});return(0,m.jsx)(w,(0,n.Z)({},Z,{children:l}))});x.muiName="Divider";var y=x},69255:function(i,e,t){Promise.resolve().then(t.bind(t,93768))},93768:function(i,e,t){"use strict";t.r(e);var r=t(9268),n=t(89081),a=t(86006),o=t(50318),l=t(90545),s=t(77614),c=t(53113),d=t(35086),v=t(53047),u=t(54842),h=t(67830),m=t(19700),p=t(92391),g=t(78915),f=t(56008),x=t(76394),y=t.n(x);e.default=function(){var i;let e=p.z.object({query:p.z.string().min(1)}),t=(0,f.useRouter)(),[x,b]=(0,a.useState)(!1),j=(0,m.cI)({resolver:(0,h.F)(e),defaultValues:{}}),{data:D}=(0,n.Z)(async()=>await (0,g.Kw)("/v1/chat/dialogue/scenes")),k=async i=>{let{query:e}=i;try{var r,n;b(!0),j.reset();let i=await (0,g.Kw)("/v1/chat/dialogue/new",{chat_mode:"chat_normal"});(null==i?void 0:i.success)&&(null==i?void 0:null===(r=i.data)||void 0===r?void 0:r.conv_uid)&&t.push("/chat?id=".concat(null==i?void 0:null===(n=i.data)||void 0===n?void 0:n.conv_uid,"&initMessage=").concat(e))}catch(i){}finally{b(!1)}};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"mx-auto h-full justify-center flex max-w-3xl flex-col gap-8 px-5 pt-6",children:[(0,r.jsx)("div",{className:"my-0 mx-auto",children:(0,r.jsx)(y(),{src:"/LOGO.png",alt:"Revolutionizing Database Interactions with Private LLM Technology",width:856,height:160,className:"w-full",unoptimized:!0})}),(0,r.jsx)("div",{className:"grid gap-8 lg:grid-cols-3",children:(0,r.jsxs)("div",{className:"lg:col-span-3",children:[(0,r.jsx)(o.Z,{className:"text-[#878c93]",children:"Quick Start"}),(0,r.jsx)(l.Z,{className:"grid pt-7 rounded-xl gap-2 lg:grid-cols-3 lg:gap-6",sx:{["& .".concat(s.Z.root)]:{color:"var(--joy-palette-primary-solidColor)",backgroundColor:"var(--joy-palette-primary-solidBg)",height:"52px","&: hover":{backgroundColor:"var(--joy-palette-primary-solidHoverBg)"}},["& .".concat(s.Z.disabled)]:{cursor:"not-allowed",pointerEvents:"unset",color:"var(--joy-palette-primary-plainColor)",backgroundColor:"var(--joy-palette-primary-softDisabledBg)","&: hover":{backgroundColor:"var(--joy-palette-primary-softDisabledBg)"}}},children:null==D?void 0:null===(i=D.data)||void 0===i?void 0:i.map(i=>(0,r.jsx)(c.Z,{disabled:null==i?void 0:i.show_disable,size:"md",variant:"solid",className:"text-base rounded-none",onClick:async()=>{var e,r;let n=await (0,g.Kw)("/v1/chat/dialogue/new",{chat_mode:i.chat_scene});(null==n?void 0:n.success)&&(null==n?void 0:null===(e=n.data)||void 0===e?void 0:e.conv_uid)&&t.push("/chat?id=".concat(null==n?void 0:null===(r=n.data)||void 0===r?void 0:r.conv_uid,"&scene=").concat(i.chat_scene))},children:i.scene_name},i.chat_scene))})]})}),(0,r.jsx)("div",{className:"mt-6 mb-[10%] pointer-events-none inset-x-0 bottom-0 z-0 mx-auto flex w-full max-w-3xl flex-col items-center justify-center max-md:border-t xl:max-w-4xl [&>*]:pointer-events-auto",children:(0,r.jsx)("form",{style:{maxWidth:"100%",width:"100%",position:"relative",display:"flex",marginTop:"auto",overflow:"visible",background:"none",justifyContent:"center",marginLeft:"auto",marginRight:"auto",height:"52px"},onSubmit:i=>{j.handleSubmit(k)(i)},children:(0,r.jsx)(d.ZP,{sx:{width:"100%"},variant:"outlined",placeholder:"Ask anything",endDecorator:(0,r.jsx)(v.ZP,{type:"submit",disabled:x,children:(0,r.jsx)(u.Z,{})}),...j.register("query")})})})]})})}},78915:function(i,e,t){"use strict";t.d(e,{Tk:function(){return d},Kw:function(){return v},PR:function(){return u},Ej:function(){return h}});var r=t(21628),n=t(24214),a=t(52040);let o=n.Z.create({baseURL:a.env.API_BASE_URL});o.defaults.timeout=1e4,o.interceptors.response.use(i=>i.data,i=>Promise.reject(i));var l=t(84835);let s={"content-type":"application/json"},c=i=>{if(!(0,l.isPlainObject)(i))return JSON.stringify(i);let e={...i};for(let i in e){let t=e[i];"string"==typeof t&&(e[i]=t.trim())}return JSON.stringify(e)},d=(i,e)=>{if(e){let t=Object.keys(e).filter(i=>void 0!==e[i]&&""!==e[i]).map(i=>"".concat(i,"=").concat(e[i])).join("&");t&&(i+="?".concat(t))}return o.get("/api"+i,{headers:s}).then(i=>i).catch(i=>{r.ZP.error(i),Promise.reject(i)})},v=(i,e)=>{let t=c(e);return o.post("/api"+i,{body:t,headers:s}).then(i=>i).catch(i=>{r.ZP.error(i),Promise.reject(i)})},u=(i,e)=>(c(e),o.post(i,e,{headers:s}).then(i=>i).catch(i=>{r.ZP.error(i),Promise.reject(i)})),h=(i,e)=>o.post(i,e).then(i=>i).catch(i=>{r.ZP.error(i),Promise.reject(i)})}},function(i){i.O(0,[180,838,60,86,316,259,394,253,769,744],function(){return i(i.s=69255)}),_N_E=i.O()}]);