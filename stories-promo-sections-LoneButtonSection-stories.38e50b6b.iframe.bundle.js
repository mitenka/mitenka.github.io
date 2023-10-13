"use strict";(self.webpackChunkssr=self.webpackChunkssr||[]).push([[8237],{"./.storybook/StoreDecorator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>StoreDecorator});var react_redux__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-redux/es/index.js"),redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/redux/es/redux.js"),redux_thunk__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/redux-thunk/es/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function StoreDecorator(Story,context){var _customState$messages;const{parameters}=context,customState=parameters.state;__webpack_require__.g.__isBrowser__=!0,__webpack_require__.g.__localMode__=!1;const initialState={...customState,app:{isShowSpinner:!1,isShowModal:!1,...null==customState?void 0:customState.app},auth:{countryId:"GB",...null==customState?void 0:customState.auth},messages:{pageMessages:{accountsNoConnectionTitle:"No connection",tryAgain:"Try again",...null==customState||null===(_customState$messages=customState.messages)||void 0===_customState$messages?void 0:_customState$messages.pageMessages},jsMessages:{"site.js.validation.valid.error":"Поле заполнено неверно. Повторите ввод."}}},store=(0,redux__WEBPACK_IMPORTED_MODULE_2__.MT)((function reducer(){let state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(arguments.length>1?arguments[1]:void 0).type,state}),initialState,(0,redux__WEBPACK_IMPORTED_MODULE_2__.md)(redux_thunk__WEBPACK_IMPORTED_MODULE_3__.Z));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.VK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_0__.zt,{store,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})})}StoreDecorator.displayName="StoreDecorator",StoreDecorator.__docgenInfo={description:"",methods:[],displayName:"StoreDecorator"}},"./src/stories/promo/sections/LoneButtonSection.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LoneButtonSection_stories});__webpack_require__("./node_modules/react/index.js");var StoreDecorator=__webpack_require__("./.storybook/StoreDecorator.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),promoMedia=__webpack_require__("./src/theme/promoMedia.jsx"),PromoButtonExtended=__webpack_require__("./src/components/no-auth/common/PromoButton/PromoButtonExtended.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BtnContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"LoneButtonSection__BtnContainer",componentId:"sc-1f2gsx-0"})(["margin-bottom:32px;text-align:",";","{margin-bottom:48px;}","{margin-bottom:64px;text-align:",";}"],(props=>props.aligning||"center"),promoMedia.Z.tablet744,promoMedia.Z.desktop1440,(props=>props.desktopAlignLeft?"left":props.aligning||"center")),LoneButtonSection=props=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:props.btn&&(0,jsx_runtime.jsx)(BtnContainer,{aligning:props.aligning,desktopAlignLeft:props.desktopAlignLeft,children:(0,jsx_runtime.jsx)(PromoButtonExtended.Z,{btn:props.btn,btnMobile:props.btnMobile,isMobileBtn:props.isMobileBtn,iconName:props.iconName,variant:props.variant,sendFrom:props.sendFrom})})});LoneButtonSection.propTypes={aligning:prop_types_default().oneOf(["left","right","center"]),btn:prop_types_default().object,btnMobile:prop_types_default().object,iconName:prop_types_default().string,isMobileBtn:prop_types_default().bool,variant:prop_types_default().oneOf(["primary","secondary","tertiary"]),desktopAlignLeft:prop_types_default().bool},LoneButtonSection.__docgenInfo={description:"",methods:[],displayName:"LoneButtonSection",props:{aligning:{description:"",type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1},{value:"'center'",computed:!1}]},required:!1},btn:{description:"",type:{name:"object"},required:!1},btnMobile:{description:"",type:{name:"object"},required:!1},iconName:{description:"",type:{name:"string"},required:!1},isMobileBtn:{description:"",type:{name:"bool"},required:!1},variant:{description:"",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'tertiary'",computed:!1}]},required:!1},desktopAlignLeft:{description:"",type:{name:"bool"},required:!1}}};const sections_LoneButtonSection=LoneButtonSection;var _Example$parameters,_Example$parameters2;const LoneButtonSection_stories={title:"Landing Sections/LoneButtonSection",component:sections_LoneButtonSection,decorators:[StoreDecorator.Z]},Template=args=>(0,jsx_runtime.jsx)(sections_LoneButtonSection,{...args});Template.displayName="Template";const Example=Template.bind({});Example.args={btn:{title:"Check our open roles",url:"/careers"},aligning:"right",btnMobile:{title:"Check our open roles",url:"/careers"},desktopAlignLeft:!0,isMobileBtn:!0,variant:"primary",iconName:"arrow-right"},Example.parameters={...Example.parameters,docs:{...null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs,source:{originalSource:"args => <LoneButtonSection {...args} />",...null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2=_Example$parameters2.docs)||void 0===_Example$parameters2?void 0:_Example$parameters2.source}}};const __namedExportsOrder=["Example"]},"./src/components/no-auth/common/PromoText/PromoText.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>PromoText});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme_fonts__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/fonts.js"),theme_promoColors__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/theme/promoColors.jsx"),theme_promoMedia__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/theme/promoMedia.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CommonCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(["font-size:",";line-height:",";color:",";background:",";-webkit-background-clip:",";-webkit-text-fill-color:",";font-family:",";font-weight:",";white-space:",";overflow:",";text-overflow:",";text-align:",";text-transform:",";letter-spacing:",";text-decoration:",";cursor:",";&:link,&:visited{color:",";}&:hover{color:",";}","{font-size:",";line-height:",";}"],(props=>(props=>{switch(props.variant){case"h1":return"40px";case"h2":return"32px";case"h3":return"24px";case"h4":return"20px";case"subheader":return"18px";case"quote":return"16px";case"label":case"note":return"12px";default:return"14px"}})(props)),(props=>(props=>{switch(props.variant){case"h1":return"46px";case"h2":return"38px";case"h3":case"h4":case"link":return"normal";case"subheader":case"quote":return"24px";case"label":case"note":return"16px";default:return"20px"}})(props)),(props=>"link"===props.tag?theme_promoColors__WEBPACK_IMPORTED_MODULE_2__.Z.primary:props.gradientColor?null:theme_promoColors__WEBPACK_IMPORTED_MODULE_2__.Z[props.color]),(props=>props.gradientColor?(gradientColor=>{switch(gradientColor){case"aubergine01":return theme_promoColors__WEBPACK_IMPORTED_MODULE_2__.Z.aubergine01;case"aubergine02":return theme_promoColors__WEBPACK_IMPORTED_MODULE_2__.Z.aubergine02;case"aubergine03":return theme_promoColors__WEBPACK_IMPORTED_MODULE_2__.Z.aubergine03;case"passionFruit01":default:return theme_promoColors__WEBPACK_IMPORTED_MODULE_2__.Z.passionFruit01;case"passionFruit02":return theme_promoColors__WEBPACK_IMPORTED_MODULE_2__.Z.passionFruit02;case"passionFruit03":return theme_promoColors__WEBPACK_IMPORTED_MODULE_2__.Z.passionFruit03;case"oceanBlue01":return theme_promoColors__WEBPACK_IMPORTED_MODULE_2__.Z.oceanBlue01;case"oceanBlue02":return theme_promoColors__WEBPACK_IMPORTED_MODULE_2__.Z.oceanBlue02;case"oceanBlue03":return theme_promoColors__WEBPACK_IMPORTED_MODULE_2__.Z.oceanBlue03;case"blueberryBlue01":return theme_promoColors__WEBPACK_IMPORTED_MODULE_2__.Z.blueberryBlue01;case"blueberryBlue02":return theme_promoColors__WEBPACK_IMPORTED_MODULE_2__.Z.blueberryBlue02;case"blueberryBlue03":return theme_promoColors__WEBPACK_IMPORTED_MODULE_2__.Z.blueberryBlue03;case"jade01":return theme_promoColors__WEBPACK_IMPORTED_MODULE_2__.Z.jade01;case"jade02":return theme_promoColors__WEBPACK_IMPORTED_MODULE_2__.Z.jade02;case"jade03":return theme_promoColors__WEBPACK_IMPORTED_MODULE_2__.Z.jade03}})(props.gradientColor):null),(props=>props.gradientColor?"text":null),(props=>props.gradientColor?"transparent":null),(props=>(props=>props.isBold?theme_fonts__WEBPACK_IMPORTED_MODULE_1__.Z.bold:"h1"===props.variant||"h2"===props.variant||"h3"===props.variant||"h4"===props.variant||"label"===props.variant?theme_fonts__WEBPACK_IMPORTED_MODULE_1__.Z.medium:theme_fonts__WEBPACK_IMPORTED_MODULE_1__.Z.regular)(props)),(props=>props.isBold?"600":"400"),(props=>props.nowrap||props.ellipsis?"nowrap":null),(props=>props.ellipsis?"hidden":null),(props=>props.ellipsis?"ellipsis":null),(props=>props.textAlign?props.textAlign:null),(props=>"label"===props.variant?"uppercase":null),(props=>(props=>"h1"===props.variant||"h2"===props.variant||"h3"===props.variant||"h4"===props.variant?"0.01em":"label"===props.variant?"0.05em":"quote"===props.variant?"0.02em":null)(props)),(props=>"link"===props.tag?"none":null),(props=>props.cursorPointer?"pointer":null),theme_promoColors__WEBPACK_IMPORTED_MODULE_2__.Z.primary,(props=>"link"===props.tag?theme_promoColors__WEBPACK_IMPORTED_MODULE_2__.Z.purple40:null),theme_promoMedia__WEBPACK_IMPORTED_MODULE_3__.Z.desktop1440,(props=>(props=>{switch(props.variant){case"h1":return"56px";case"h2":return"44px";case"h3":return"36px";case"h4":return"32px";case"subheader":return"21px";case"quote":return"22px";case"label":case"note":return"12px";default:return"16px"}})(props)),(props=>(props=>{switch(props.variant){case"h1":case"h2":case"h3":case"h4":return"125%";case"subheader":return"28px";case"quote":return"32px";case"link":return"normal";case"label":case"note":return"16px";default:return"24px"}})(props))),TextHeader1=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.h1.withConfig({displayName:"PromoText__TextHeader1",componentId:"sc-oncfto-0"})(["",";"],CommonCss),TextHeader2=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.h2.withConfig({displayName:"PromoText__TextHeader2",componentId:"sc-oncfto-1"})(["",";"],CommonCss),TextHeader3=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.h3.withConfig({displayName:"PromoText__TextHeader3",componentId:"sc-oncfto-2"})(["",";"],CommonCss),TextHeader4=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.h4.withConfig({displayName:"PromoText__TextHeader4",componentId:"sc-oncfto-3"})(["",";"],CommonCss),TextDiv=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div.withConfig({displayName:"PromoText__TextDiv",componentId:"sc-oncfto-4"})(["",";"],CommonCss),TextSpan=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.span.withConfig({displayName:"PromoText__TextSpan",componentId:"sc-oncfto-5"})(["",";"],CommonCss),TextParagraph=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.p.withConfig({displayName:"PromoText__TextParagraph",componentId:"sc-oncfto-6"})(["",";"],CommonCss),TextLink=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.a.withConfig({displayName:"PromoText__TextLink",componentId:"sc-oncfto-7"})(["",";"],CommonCss),TextLabel=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.label.withConfig({displayName:"PromoText__TextLabel",componentId:"sc-oncfto-8"})(["",";"],CommonCss),TextListItem=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.li.withConfig({displayName:"PromoText__TextListItem",componentId:"sc-oncfto-9"})(["",";"],CommonCss),PromoText=props=>{const Wrapper=(tag=>{switch(tag){case"h1":return TextHeader1;case"h2":return TextHeader2;case"h3":return TextHeader3;case"h4":return TextHeader4;case"div":return TextDiv;case"link":return TextLink;case"label":return TextLabel;case"listItem":return TextListItem;case"p":return TextParagraph;default:return TextSpan}})(props.tag);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Wrapper,{...props,children:props.children})};PromoText.displayName="PromoText",PromoText.defaultProps={color:"baseColor"},PromoText.propTypes={variant:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["h1","h2","h3","h4","subheader","quote","div","span","link","label","note"]),tag:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["h1","h2","h3","h4","div","span","link","label","p","listItem"]),color:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["baseColor","primary","primaryB2B","purple80","purple40","purple20","gray80","gray40","gray20","white","error","success"]),gradientColor:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["aubergine01","aubergine02","aubergine03","passionFruit01","passionFruit02","passionFruit03","oceanBlue01","oceanBlue02","oceanBlue03","blueberryBlue01","blueberryBlue02","blueberryBlue03","jade01","jade02","jade03"]),nowrap:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,ellipsis:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,textAlign:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["left","center","right"]),isBold:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,href:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,cursorPointer:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool},PromoText.__docgenInfo={description:"",methods:[],displayName:"PromoText",props:{color:{defaultValue:{value:"'baseColor'",computed:!1},description:"",type:{name:"enum",value:[{value:"'baseColor'",computed:!1},{value:"'primary'",computed:!1},{value:"'primaryB2B'",computed:!1},{value:"'purple80'",computed:!1},{value:"'purple40'",computed:!1},{value:"'purple20'",computed:!1},{value:"'gray80'",computed:!1},{value:"'gray40'",computed:!1},{value:"'gray20'",computed:!1},{value:"'white'",computed:!1},{value:"'error'",computed:!1},{value:"'success'",computed:!1}]},required:!1},variant:{description:"",type:{name:"enum",value:[{value:"'h1'",computed:!1},{value:"'h2'",computed:!1},{value:"'h3'",computed:!1},{value:"'h4'",computed:!1},{value:"'subheader'",computed:!1},{value:"'quote'",computed:!1},{value:"'div'",computed:!1},{value:"'span'",computed:!1},{value:"'link'",computed:!1},{value:"'label'",computed:!1},{value:"'note'",computed:!1}]},required:!1},tag:{description:"",type:{name:"enum",value:[{value:"'h1'",computed:!1},{value:"'h2'",computed:!1},{value:"'h3'",computed:!1},{value:"'h4'",computed:!1},{value:"'div'",computed:!1},{value:"'span'",computed:!1},{value:"'link'",computed:!1},{value:"'label'",computed:!1},{value:"'p'",computed:!1},{value:"'listItem'",computed:!1}]},required:!1},gradientColor:{description:"",type:{name:"enum",value:[{value:"'aubergine01'",computed:!1},{value:"'aubergine02'",computed:!1},{value:"'aubergine03'",computed:!1},{value:"'passionFruit01'",computed:!1},{value:"'passionFruit02'",computed:!1},{value:"'passionFruit03'",computed:!1},{value:"'oceanBlue01'",computed:!1},{value:"'oceanBlue02'",computed:!1},{value:"'oceanBlue03'",computed:!1},{value:"'blueberryBlue01'",computed:!1},{value:"'blueberryBlue02'",computed:!1},{value:"'blueberryBlue03'",computed:!1},{value:"'jade01'",computed:!1},{value:"'jade02'",computed:!1},{value:"'jade03'",computed:!1}]},required:!1},nowrap:{description:"",type:{name:"bool"},required:!1},ellipsis:{description:"",type:{name:"bool"},required:!1},textAlign:{description:"",type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'center'",computed:!1},{value:"'right'",computed:!1}]},required:!1},isBold:{description:"",type:{name:"bool"},required:!1},href:{description:"",type:{name:"string"},required:!1},cursorPointer:{description:"",type:{name:"bool"},required:!1}}}},"./src/constants/Constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ASq:()=>XSS_FILTER_OPTIONS,CtM:()=>LOCATION,DiW:()=>VALID_ERROR,GyZ:()=>SUCCESS_TOAST,H8P:()=>SEND,H_b:()=>INFO,Jzs:()=>SOFT_BLOCK,MR9:()=>SUCCESS,P4A:()=>USER_LOGIN_COUNTRY_ID,QYy:()=>CLOUD_FLARE_FAILED_MESSAGE,WKs:()=>ERROR_TOAST,Xuy:()=>SPRING_REDIRECT_HEADER,YSc:()=>CHANGE_IDENT_STATUS,ZaX:()=>REQUEST,f8E:()=>HARD_BLOCK,ihi:()=>PROFILE,jnG:()=>GA_ACCOUNT,pnR:()=>ERROR,sfL:()=>CLOUD_FLARE_SUCCESS_MESSAGE,wy4:()=>XSS_HARSH_FILTER_OPTIONS,x$J:()=>REQ_ERROR,xT1:()=>GA_CARD});const USER_LOGIN_COUNTRY_ID="user_login_country_id",SUCCESS="SUCCESS",INFO="INFO",ERROR="ERROR",SUCCESS_TOAST="SUCCESS_TOAST",CHANGE_IDENT_STATUS="CHANGE_IDENT_STATUS",ERROR_TOAST="ERROR_TOAST",SPRING_REDIRECT_HEADER="spring-redirect-url",LOCATION="location",SEND="SEND",REQUEST="REQUEST",PROFILE="PROFILE",GA_CARD="GA_CARD",GA_ACCOUNT="GA_ACCOUNT",VALID_ERROR="site.js.validation.valid.error",REQ_ERROR="site.js.validation.req.error",SOFT_BLOCK="SOFT_BLOCK",HARD_BLOCK="HARD_BLOCK",XSS_FILTER_OPTIONS={whiteList:{a:["href","title","target","class","style","data-modal-id","data-action-id"],div:["class","style"],article:["class","style"],blockquote:["class","style"],span:["class","style"],i:["class","style"],p:["class","style"],br:["class","style"],b:["class","style"],ul:["class","style"],ol:["class","style","start"],li:["class","style"],strong:["class","style"],h1:["class","style"],h2:["class","style"],h3:["class","style"],h4:["class","style"],h5:["class","style"],h6:["class","style"],em:["class","style"],ins:["class","style"],sub:["class","style"],sup:["class","style"],img:["class","style","src"],iframe:["class","style","src"],u:["class","style"],figure:["class","style"],table:["class","style"],thead:["class","style"],tbody:["class","style"],tr:["class","style"],th:["class","style"],td:["class","style"]}},CLOUD_FLARE_SUCCESS_MESSAGE="Challenge solved",CLOUD_FLARE_FAILED_MESSAGE="Challenge failed",XSS_HARSH_FILTER_OPTIONS={whiteList:{span:["class","style"],i:["class","style"],p:["class","style"],br:["class","style"],b:["class","style"],ul:["class","style"],ol:["class","style","start"],li:["class","style"],strong:["class","style"]},stripIgnoreTag:!0}},"./src/theme/promoBreakpoints.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const promoBreakpoints=["375px","744px","1440px"];promoBreakpoints.mobile375=promoBreakpoints[0],promoBreakpoints.tablet744=promoBreakpoints[1],promoBreakpoints.desktop1440=promoBreakpoints[2];const __WEBPACK_DEFAULT_EXPORT__=promoBreakpoints},"./src/theme/promoColors.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={primary:"#7633FF",primaryB2B:"#0B3176",white:"#ffffff",baseColor:"#222222",purple80:"#925CFF",purple40:"#C8ADFF",purple20:"#E4D6FF",purple5:"#F8F5FF",gray80:"#4E4E4E",gray40:"#A7A7A7",gray20:"#D3D3D3",gray5:"#F2F1F0",sunflower:"#FF9B6A",cyan:"#2FB6FF",lavender:"#9CA0FF",turquoise:"#1CDAC3",shadow:"rgba(104, 104, 104, 0.08)",overlay:"rgba(0, 0, 0, 0.4)",error:"#FF6666",success:"#67AA66",transparent:"transparent",aubergine01:"linear-gradient(180deg, #7633FF 0%, #AF60E0 95.56%, #D4A0FF 199.14%)",aubergine02:"linear-gradient(180deg, #7633FF -49.79%, #AF60E0 51.08%, #D6A3FF 152.49%)",aubergine03:"linear-gradient(180deg, #7633FF -102.71%, #AF60E0 -5.26%, #DAABFF 100.36%)",eggshell01:"linear-gradient(180deg, #F5F5F5 0%, #FBFBFB 100%)",eggshell02:"linear-gradient(180deg, #FBFBFB 0%, #FAFBFA 100%)",eggshell03:"linear-gradient(180deg, #FAFAFA 0%, #FEFEFE 100%)",passionFruit01:"linear-gradient(180deg, #9F44FF -1.03%, #E482C9 100%)",passionFruit02:"linear-gradient(180deg, #C365E2 0%, #E482C9 49.71%, #EF8CA4 100%)",passionFruit03:"linear-gradient(180deg, #E482C9 0%, #FF9B6A 100%)",oceanBlue01:"linear-gradient(180deg, #7F2FFF 0.53%, #4D69FF 100%)",oceanBlue02:"linear-gradient(180deg, #6250FF 0%, #4D69FF 47.01%, #588FF8 100%)",oceanBlue03:"linear-gradient(180deg, #4D69FF 0%, #68C4EE 100%)",blueberryBlue01:"linear-gradient(180deg, #0F3596 -5.71%, #417EC7 100%)",blueberryBlue02:"linear-gradient(180deg, #1F4CA5 0%, #417EC7 48.15%, #7D94EC 100%)",blueberryBlue03:"linear-gradient(180deg, #417EC7 0%, #9CA0FF 100.36%)",jade01:"linear-gradient(180deg, #006B68 0.53%, #1CA69F 100%)",jade02:"linear-gradient(180deg, #11918A 0%, #71CFCE 100%)",jade03:"linear-gradient(180deg, #42B1AC 0%, #4780CA 100%)",shadowLoose:"0 0 24px 4px rgba(104, 104, 104, 0.08)",shadowCollected:"0 0 12px 2px rgba(78, 78, 78, 0.16)"}},"./src/theme/promoMedia.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _promoBreakpoints__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/theme/promoBreakpoints.jsx");const __WEBPACK_DEFAULT_EXPORT__={mobile375:`@media screen and (min-width: ${_promoBreakpoints__WEBPACK_IMPORTED_MODULE_0__.Z.mobile375})`,retina:"@media screen and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)",tablet744:`@media screen and (min-width: ${_promoBreakpoints__WEBPACK_IMPORTED_MODULE_0__.Z.tablet744})`,retina744:`@media screen and (min-width: ${_promoBreakpoints__WEBPACK_IMPORTED_MODULE_0__.Z.tablet744})   and (-webkit-min-device-pixel-ratio: 2), screen and (${_promoBreakpoints__WEBPACK_IMPORTED_MODULE_0__.Z.tablet744})   and (min-resolution: 192dpi)`,desktop1440:`@media screen and (min-width: ${_promoBreakpoints__WEBPACK_IMPORTED_MODULE_0__.Z.desktop1440})`,retina1440:`@media screen and (min-width: ${_promoBreakpoints__WEBPACK_IMPORTED_MODULE_0__.Z.desktop1440}) and (-webkit-min-device-pixel-ratio: 2), screen and (${_promoBreakpoints__WEBPACK_IMPORTED_MODULE_0__.Z.desktop1440}) and (min-resolution: 192dpi)`}}}]);