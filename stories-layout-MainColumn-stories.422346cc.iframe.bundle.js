"use strict";(self.webpackChunkssr=self.webpackChunkssr||[]).push([[9882],{"./.storybook/StoreDecorator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>StoreDecorator});var react_redux__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-redux/es/index.js"),redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/redux/es/redux.js"),redux_thunk__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/redux-thunk/es/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function StoreDecorator(Story,context){var _customState$messages;const{parameters}=context,customState=parameters.state;__webpack_require__.g.__isBrowser__=!0,__webpack_require__.g.__localMode__=!1;const initialState={...customState,app:{isShowSpinner:!1,isShowModal:!1,...null==customState?void 0:customState.app},auth:{countryId:"GB",...null==customState?void 0:customState.auth},messages:{pageMessages:{accountsNoConnectionTitle:"No connection",tryAgain:"Try again",...null==customState||null===(_customState$messages=customState.messages)||void 0===_customState$messages?void 0:_customState$messages.pageMessages},jsMessages:{"site.js.validation.valid.error":"Поле заполнено неверно. Повторите ввод."}}},store=(0,redux__WEBPACK_IMPORTED_MODULE_2__.MT)((function reducer(){let state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(arguments.length>1?arguments[1]:void 0).type,state}),initialState,(0,redux__WEBPACK_IMPORTED_MODULE_2__.md)(redux_thunk__WEBPACK_IMPORTED_MODULE_3__.Z));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.VK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_0__.zt,{store,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})})}StoreDecorator.displayName="StoreDecorator",StoreDecorator.__docgenInfo={description:"",methods:[],displayName:"StoreDecorator"}},"./src/stories/layout/MainColumn.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Example$parameters,_Example$parameters2,_storybook_StoreDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/StoreDecorator.js"),_components_common_FlagIcon_FlagIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/FlagIcon/FlagIcon.jsx"),_components_common_Layout_MainColumn_MainColumn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/Layout/MainColumn/MainColumn.jsx"),_components_common_Text_Text__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/Text/Text.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Layout Components/MainColumn",component:_components_common_Layout_MainColumn_MainColumn__WEBPACK_IMPORTED_MODULE_3__.E,decorators:[_storybook_StoreDecorator__WEBPACK_IMPORTED_MODULE_1__.Z]},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_common_Layout_MainColumn_MainColumn__WEBPACK_IMPORTED_MODULE_3__.E,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_common_FlagIcon_FlagIcon__WEBPACK_IMPORTED_MODULE_2__.U,{size:"large",name:"rs"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_common_Text_Text__WEBPACK_IMPORTED_MODULE_4__.x,{size:"header",variant:"div",isPromo:!0,color:"purple",children:"Main column is used when we use BasePageWithLeftMenu"})]});Template.displayName="Template";const Example=Template.bind({});Example.args={},Example.parameters={...Example.parameters,docs:{...null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs,source:{originalSource:"args => <MainColumn {...args}>\n        <FlagIcon size={'large'} name={'rs'} />\n        <Text size={'header'} variant={'div'} isPromo color={'purple'}>\n            Main column is used when we use BasePageWithLeftMenu\n        </Text>\n    </MainColumn>",...null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2=_Example$parameters2.docs)||void 0===_Example$parameters2?void 0:_Example$parameters2.source}}};const __namedExportsOrder=["Example"]},"./src/components/common/Layout/MainColumn/MainColumn.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>MainColumn});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colors=__webpack_require__("./src/theme/colors.js"),media=__webpack_require__("./src/theme/media.js");const Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"styles__Container",componentId:"sc-4pfsee-0"})(["padding:72px 24px 92px 24px;max-width:480px;margin:0 auto;min-height:calc(100vh - 164px);position:relative;display:flex;flex-direction:column;","{padding:128px 144px 152px 144px;max-width:100%;min-height:calc(100vh - 280px);}","{max-width:792px;}","{padding-left:144px;padding-right:144px;margin:0;}"],media.Z.tablet720,media.Z.tablet1080,media.Z.desktop1224);styled_components_browser_esm.ZP.div.withConfig({displayName:"styles__BlockSubheader",componentId:"sc-4pfsee-1"})(["color:",";font-weight:500;font-size:14px;line-height:20px;letter-spacing:0.08em;text-transform:uppercase;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:16px 0;","{padding:24px 0;}","{width:216px;flex-shrink:0;}","{font-size:17px;line-height:24px;}"],colors.Z.mediumGray,media.Z.tablet720,media.Z.tablet937,media.Z.desktop1920),styled_components_browser_esm.ZP.div.withConfig({displayName:"styles__IntroBlock",componentId:"sc-4pfsee-2"})(["text-align:center;margin-bottom:32px;","{margin-bottom:48px;}"],media.Z.tablet720),styled_components_browser_esm.ZP.figure.withConfig({displayName:"styles__IntroBlockImg",componentId:"sc-4pfsee-3"})(["width:240px;margin:0 auto 24px;","{margin-bottom:32px;width:360px;}"],media.Z.tablet720),styled_components_browser_esm.ZP.div.withConfig({displayName:"styles__FeaturesBlock",componentId:"sc-4pfsee-4"})(["display:flex;flex-direction:column;","{flex-direction:row;}","{flex-direction:column;}","{flex-direction:row;}"],media.Z.tablet937,media.Z.desktop1224,media.Z.desktop1296),styled_components_browser_esm.ZP.ul.withConfig({displayName:"styles__FeaturesList",componentId:"sc-4pfsee-5"})(["font-size:17px;line-height:24px;margin-top:24px;","{font-size:20px;line-height:32px;}"],media.Z.desktop1920),styled_components_browser_esm.ZP.li.withConfig({displayName:"styles__FeaturesListItem",componentId:"sc-4pfsee-6"})(["display:flex;align-items:center;margin-bottom:32px;"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MainColumn=props=>(0,jsx_runtime.jsx)(Container,{children:props.children});MainColumn.displayName="MainColumn",MainColumn.__docgenInfo={description:"",methods:[],displayName:"MainColumn"}},"./src/components/common/Text/Text.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme_colors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/colors.js"),theme_fonts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/theme/fonts.js"),theme_media__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/theme/media.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const getTextColor=color=>{switch(color){case"darkGray":default:return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.baseColor;case"mediumGray":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.mediumGray;case"lightGray":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.lightGray;case"purple":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.purple;case"purpleRgba40":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.purpleRgba40;case"purpleRgba24":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.purpleRgba24;case"red":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.red;case"white":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.white;case"whiteRgba48":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.whiteRgba48;case"whiteRgba64":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.whiteRgba64}},getDesktopSize=props=>{switch(props.size){case"display1":return"40px";case"display2":return"48px";case"header":return"32px";case"main":default:return"20px";case"secondary":case"subheader":return"17px";case"tag":return"11px"}},getDesktopLineHeight=props=>{switch(props.size){case"display1":return"56px";case"display2":return"64px";case"header":return"48px";case"main":default:return"32px";case"secondary":case"subheader":return"24px";case"tag":return"16px"}},CommonCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(["font-family:",";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:",";line-height:",";font-variant:",";letter-spacing:",";text-transform:",";color:",";font-weight:",";margin-left:",";margin-bottom:",";white-space:",";overflow:",";text-overflow:",";max-width:",";text-decoration:",";text-align:",";flex-shrink:",";&:link,&:visited{color:",";}","{font-size:",";line-height:",";}","{font-size:",";line-height:",";margin-bottom:",";}"],theme_fonts__WEBPACK_IMPORTED_MODULE_2__.Z.regular,(props=>(props=>{switch(props.size){case"display1":return"32px";case"display2":return"40px";case"header":return"24px";case"main":default:return"17px";case"secondary":case"subheader":return"14px";case"tag":return"8px"}})(props)),(props=>(props=>{switch(props.size){case"display2":return"48px";case"display1":return"40px";case"header":return"36px";case"main":default:return"24px";case"secondary":case"subheader":return"20px";case"tag":return"10px"}})(props)),(props=>props.smallCaps?"small-caps":null),(props=>"subheader"===props.size||"tag"===props.size?"0.08em":null),(props=>"subheader"===props.size||"tag"===props.size?"uppercase":null),(props=>getTextColor(props.color)),(props=>"tag"===props.size?"bold":null),(props=>props.leftSpacer?"3px":null),(props=>(props=>{switch(props.indent){case"4px":return"4px";case"8px":case"adaptive-8-16":return"8px";case"16px":case"adaptive-16-24":return"16px";case"24px":case"adaptive-24-32":return"24px";case"32px":case"adaptive-32-48":return"32px";case"48px":return"48px";case"64px":return"64px";default:return null}})(props)),(props=>props.nowrap||props.ellipsis?"nowrap":null),(props=>props.ellipsis?"hidden":null),(props=>props.ellipsis?"ellipsis":null),(props=>props.ellipsis?"100%":null),(props=>props.lineThrough?"line-through":null),(props=>props.textAlign?props.textAlign:null),(props=>props.flexShrink?props.flexShrink:null),(props=>getTextColor(props.color)),theme_media__WEBPACK_IMPORTED_MODULE_3__.Z.tablet648,(props=>props.isPromo?getDesktopSize(props):null),(props=>props.isPromo?getDesktopLineHeight(props):null),theme_media__WEBPACK_IMPORTED_MODULE_3__.Z.desktop1920,(props=>getDesktopSize(props)),(props=>getDesktopLineHeight(props)),(props=>(props=>{switch(props.indent){case"4px":return"4px";case"8px":return"8px";case"16px":case"adaptive-8-16":return"16px";case"24px":case"adaptive-16-24":return"24px";case"32px":case"adaptive-24-32":return"32px";case"48px":case"adaptive-32-48":return"48px";case"64px":return"64px";default:return null}})(props))),TextSpan=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.span.withConfig({displayName:"Text__TextSpan",componentId:"sc-1kui6fu-0"})(["",";"],CommonCss),TextDiv=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div.withConfig({displayName:"Text__TextDiv",componentId:"sc-1kui6fu-1"})(["",";"],CommonCss),TextHeader1=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.h1.withConfig({displayName:"Text__TextHeader1",componentId:"sc-1kui6fu-2"})(["",";"],CommonCss),TextHeader2=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.h2.withConfig({displayName:"Text__TextHeader2",componentId:"sc-1kui6fu-3"})(["",";"],CommonCss),TextHeader3=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.h3.withConfig({displayName:"Text__TextHeader3",componentId:"sc-1kui6fu-4"})(["",";"],CommonCss),TextHeader4=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.h4.withConfig({displayName:"Text__TextHeader4",componentId:"sc-1kui6fu-5"})(["",";"],CommonCss),TextHeader5=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.h5.withConfig({displayName:"Text__TextHeader5",componentId:"sc-1kui6fu-6"})(["",";"],CommonCss),TextHeader6=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.h6.withConfig({displayName:"Text__TextHeader6",componentId:"sc-1kui6fu-7"})(["",";"],CommonCss),TextPre=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.pre.withConfig({displayName:"Text__TextPre",componentId:"sc-1kui6fu-8"})(["",";"],CommonCss),TextParagraph=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.p.withConfig({displayName:"Text__TextParagraph",componentId:"sc-1kui6fu-9"})(["",";"],CommonCss),TextLink=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.a.withConfig({displayName:"Text__TextLink",componentId:"sc-1kui6fu-10"})(["",";"],CommonCss),TextButton=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.button.withConfig({displayName:"Text__TextButton",componentId:"sc-1kui6fu-11"})(["",";width:auto;cursor:pointer;background:none;border:none;padding:0;text-align:left;&:hover,&:focus{background:none;}"],CommonCss),Text=props=>{const Wrapper=(variant=>{switch(variant){case"h1":return TextHeader1;case"h2":return TextHeader2;case"h3":return TextHeader3;case"h4":return TextHeader4;case"h5":return TextHeader5;case"h6":return TextHeader6;case"pre":return TextPre;case"paragraph":return TextParagraph;case"div":return TextDiv;case"link":return TextLink;case"button":return TextButton;default:return TextSpan}})(props.variant);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Wrapper,{...props,children:props.children})};Text.displayName="Text",Text.propTypes={variant:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["h1","h2","h3","h4","h5","h6","pre","paragraph","div","span","link","button"]),color:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["darkGray","mediumGray","lightGray","purple","purpleRgba40","purpleRgba24","red","white","whiteRgba48","whiteRgba64"]),size:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["display1","display2","header","main","secondary","subheader","tag"]),smallCaps:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,nowrap:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,leftSpacer:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,isPromo:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,ellipsis:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,href:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func,indent:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["4px","8px","16px","24px","32px","48px","64px","adaptive-8-16","adaptive-16-24","adaptive-24-32","adaptive-32-48"]),lineThrough:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,textAlign:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,flexShrink:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string},Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{variant:{description:"",type:{name:"enum",value:[{value:"'h1'",computed:!1},{value:"'h2'",computed:!1},{value:"'h3'",computed:!1},{value:"'h4'",computed:!1},{value:"'h5'",computed:!1},{value:"'h6'",computed:!1},{value:"'pre'",computed:!1},{value:"'paragraph'",computed:!1},{value:"'div'",computed:!1},{value:"'span'",computed:!1},{value:"'link'",computed:!1},{value:"'button'",computed:!1}]},required:!1},color:{description:"",type:{name:"enum",value:[{value:"'darkGray'",computed:!1},{value:"'mediumGray'",computed:!1},{value:"'lightGray'",computed:!1},{value:"'purple'",computed:!1},{value:"'purpleRgba40'",computed:!1},{value:"'purpleRgba24'",computed:!1},{value:"'red'",computed:!1},{value:"'white'",computed:!1},{value:"'whiteRgba48'",computed:!1},{value:"'whiteRgba64'",computed:!1}]},required:!1},size:{description:"",type:{name:"enum",value:[{value:"'display1'",computed:!1},{value:"'display2'",computed:!1},{value:"'header'",computed:!1},{value:"'main'",computed:!1},{value:"'secondary'",computed:!1},{value:"'subheader'",computed:!1},{value:"'tag'",computed:!1}]},required:!1},smallCaps:{description:"",type:{name:"bool"},required:!1},nowrap:{description:"",type:{name:"bool"},required:!1},leftSpacer:{description:"",type:{name:"bool"},required:!1},isPromo:{description:"",type:{name:"bool"},required:!1},ellipsis:{description:"",type:{name:"bool"},required:!1},href:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},indent:{description:"",type:{name:"enum",value:[{value:"'4px'",computed:!1},{value:"'8px'",computed:!1},{value:"'16px'",computed:!1},{value:"'24px'",computed:!1},{value:"'32px'",computed:!1},{value:"'48px'",computed:!1},{value:"'64px'",computed:!1},{value:"'adaptive-8-16'",computed:!1},{value:"'adaptive-16-24'",computed:!1},{value:"'adaptive-24-32'",computed:!1},{value:"'adaptive-32-48'",computed:!1}]},required:!1},lineThrough:{description:"",type:{name:"bool"},required:!1},textAlign:{description:"",type:{name:"string"},required:!1},flexShrink:{description:"",type:{name:"string"},required:!1}}}},"./src/theme/colors.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={codGray:"#141414",red:"#ff4778",lightRed:"#ff7398",superLightRed:"#ffcbd9",purple:"#7633ff",lightPurple:"#9864ff",superLightPurple:"#d9c6ff",purpleLight08:"#f4efff",baseColor:"#141414",mediumGray:"#77767a",lightGray:"#9f9da3",superLightGray:"#f3f2f5",purpleRgba08:"rgba(118, 51, 255, 0.08)",purpleRgba16:"rgba(118, 51, 255, 0.16)",purpleRgba24:"rgba(118, 51, 255, 0.24)",purpleRgba40:"rgba(118, 51, 255, 0.4)",white:"#ffffff",whiteRgba24:"rgba(255, 255, 255, 0.24)",whiteRgba48:"rgba(255, 255, 255, 0.48)",whiteRgba64:"rgba(255, 255, 255, 0.64)",whiteRgba96:"rgba(255, 255, 255, 0.96)",greyRgba28:"rgba(159, 157, 163, 0.28)",wildWatermelon12:"rgba(255, 71, 120, 0.12)",wildWatermelon40:"rgba(255, 71, 120, 0.4)",wildWatermelon08:"rgba(255, 71, 120, 0.08)",lightGrayShadow:"rgba(157, 161, 163, 0.24)",porcelain:"#f4f6f7",codGray02:"rgba(20, 20, 20, 0.02)",codGray03:"rgba(20, 20, 20, 0.03)",codGray04:"rgba(20, 20, 20, 0.04)",codGray06:"rgba(20, 20, 20, 0.06)",codGray12:"rgba(20, 20, 20, 0.12)",codGray16:"rgba(20, 20, 20, 0.16)",codGray32:"rgba(20, 20, 20, 0.32)",oceanBlue01:"linear-gradient(180deg, #7F2FFF 0.53%, #4D69FF 100%)"}}}]);