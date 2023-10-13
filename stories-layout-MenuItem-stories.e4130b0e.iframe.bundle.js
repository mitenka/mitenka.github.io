"use strict";(self.webpackChunkssr=self.webpackChunkssr||[]).push([[2776],{"./.storybook/StoreDecorator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>StoreDecorator});var react_redux__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-redux/es/index.js"),redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/redux/es/redux.js"),redux_thunk__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/redux-thunk/es/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function StoreDecorator(Story,context){var _customState$messages;const{parameters}=context,customState=parameters.state;__webpack_require__.g.__isBrowser__=!0,__webpack_require__.g.__localMode__=!1;const initialState={...customState,app:{isShowSpinner:!1,isShowModal:!1,...null==customState?void 0:customState.app},auth:{countryId:"GB",...null==customState?void 0:customState.auth},messages:{pageMessages:{accountsNoConnectionTitle:"No connection",tryAgain:"Try again",...null==customState||null===(_customState$messages=customState.messages)||void 0===_customState$messages?void 0:_customState$messages.pageMessages},jsMessages:{"site.js.validation.valid.error":"Поле заполнено неверно. Повторите ввод."}}},store=(0,redux__WEBPACK_IMPORTED_MODULE_2__.MT)((function reducer(){let state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(arguments.length>1?arguments[1]:void 0).type,state}),initialState,(0,redux__WEBPACK_IMPORTED_MODULE_2__.md)(redux_thunk__WEBPACK_IMPORTED_MODULE_3__.Z));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.VK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_0__.zt,{store,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})})}StoreDecorator.displayName="StoreDecorator",StoreDecorator.__docgenInfo={description:"",methods:[],displayName:"StoreDecorator"}},"./src/stories/layout/MenuItem.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Example$parameters,_Example$parameters2,_storybook_StoreDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/StoreDecorator.js"),_components_common_Layout_MenuSideBar_subcomponents_MenuItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/Layout/MenuSideBar/subcomponents/MenuItem.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Layout Components/MenuItem",component:_components_common_Layout_MenuSideBar_subcomponents_MenuItem__WEBPACK_IMPORTED_MODULE_2__.s,decorators:[_storybook_StoreDecorator__WEBPACK_IMPORTED_MODULE_1__.Z]},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_common_Layout_MenuSideBar_subcomponents_MenuItem__WEBPACK_IMPORTED_MODULE_2__.s,{...args});Template.displayName="Template";const Example=Template.bind({});Example.args={title:"Transfers",link:"#",iconId:"transfers",isHidden:!1,isHiddenMobile:!1,isSelected:!0,testId:"first",notificationAmount:1},Example.parameters={...Example.parameters,docs:{...null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs,source:{originalSource:"args => <MenuItem {...args} />",...null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2=_Example$parameters2.docs)||void 0===_Example$parameters2?void 0:_Example$parameters2.source}}};const __namedExportsOrder=["Example"]},"./src/components/common/Icon/Icon.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Icon});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme_colors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/colors.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Container=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.span.withConfig({displayName:"Icon__Container",componentId:"sc-1rd964c-0"})(["display:inline-block;height:",";margin-right:",";margin-left:",";svg{width:",";height:",";--accent:",";}"],(props=>props.size?props.size:"24px"),(props=>props.rightIndent?props.rightIndent:null),(props=>props.leftIndent?props.leftIndent:null),(props=>props.size?props.size:"24px"),(props=>props.size?props.size:"24px"),(props=>(color=>{switch(color){case"darkGray":default:return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.baseColor;case"mediumGray":return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.mediumGray;case"lightGray":return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.lightGray;case"superLightGray":return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.superLightGray;case"greyRgba28":return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.greyRgba28;case"purple":return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.purple;case"purpleRgba24":return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.purpleRgba24;case"purpleRgba40":return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.purpleRgba40;case"red":return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.red;case"white":return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.white;case"whiteRgba64":return _theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.whiteRgba64}})(props.color)));function renderSVG(_ref){let{id}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("use",{xlinkHref:`/i/svg-icons/icons.svg#${id}`})})}renderSVG.displayName="renderSVG";const StyledSVGIcon=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)(renderSVG).withConfig({displayName:"Icon__StyledSVGIcon",componentId:"sc-1rd964c-1"})(["display:inline-block;"]),Icon=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Container,{rightIndent:props.rightIndent,leftIndent:props.leftIndent,color:props.color,size:props.size,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledSVGIcon,{id:props.name})});Icon.displayName="Icon",Icon.propTypes={name:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,color:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["darkGray","mediumGray","lightGray","superLightGray","greyRgba28","purple","purpleRgba24","purpleRgba40","red","white","whiteRgba64"]),size:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["16px","20px","24px","32px","48px","56px","64px","80px","96px","100%"]),rightIndent:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["4px","8px","12px","16px","24px","32px"]),leftIndent:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["4px","8px","12px","16px","24px","32px"])},Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{name:{description:"",type:{name:"string"},required:!1},color:{description:"",type:{name:"enum",value:[{value:"'darkGray'",computed:!1},{value:"'mediumGray'",computed:!1},{value:"'lightGray'",computed:!1},{value:"'superLightGray'",computed:!1},{value:"'greyRgba28'",computed:!1},{value:"'purple'",computed:!1},{value:"'purpleRgba24'",computed:!1},{value:"'purpleRgba40'",computed:!1},{value:"'red'",computed:!1},{value:"'white'",computed:!1},{value:"'whiteRgba64'",computed:!1}]},required:!1},size:{description:"",type:{name:"enum",value:[{value:"'16px'",computed:!1},{value:"'20px'",computed:!1},{value:"'24px'",computed:!1},{value:"'32px'",computed:!1},{value:"'48px'",computed:!1},{value:"'56px'",computed:!1},{value:"'64px'",computed:!1},{value:"'80px'",computed:!1},{value:"'96px'",computed:!1},{value:"'100%'",computed:!1}]},required:!1},rightIndent:{description:"",type:{name:"enum",value:[{value:"'4px'",computed:!1},{value:"'8px'",computed:!1},{value:"'12px'",computed:!1},{value:"'16px'",computed:!1},{value:"'24px'",computed:!1},{value:"'32px'",computed:!1}]},required:!1},leftIndent:{description:"",type:{name:"enum",value:[{value:"'4px'",computed:!1},{value:"'8px'",computed:!1},{value:"'12px'",computed:!1},{value:"'16px'",computed:!1},{value:"'24px'",computed:!1},{value:"'32px'",computed:!1}]},required:!1}}}},"./src/components/common/Layout/MenuSideBar/subcomponents/MenuItem.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>MenuItem});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colors=__webpack_require__("./src/theme/colors.js"),media=__webpack_require__("./src/theme/media.js");const Container=styled_components_browser_esm.ZP.li.withConfig({displayName:"styles__Container",componentId:"sc-15ya9qh-0"})(["width:25%;color:",";display:",";","{width:auto;display:block;}"],(props=>props.isSelected?colors.Z.purple:colors.Z.mediumGray),(props=>props.isHiddenMobile?"none":"block"),media.Z.desktop1224),MenuLink=styled_components_browser_esm.ZP.a.withConfig({displayName:"styles__MenuLink",componentId:"sc-15ya9qh-1"})(["display:flex;flex-direction:column;align-items:center;height:auto;font-size:8px;font-weight:bold;letter-spacing:0.09em;line-height:10px;padding-bottom:4px;padding-top:6px;text-transform:uppercase;","{font-size:11px;letter-spacing:0.08em;line-height:16px;padding-bottom:8px;padding-top:10px;}","{flex-direction:row;font-size:17px;line-height:24px;font-weight:normal;letter-spacing:normal;padding:28px 32px;text-transform:none;&:hover{background:",";}}","{font-size:20px;line-height:32px;padding:32px;}"],media.Z.tablet720,media.Z.desktop1224,colors.Z.superLightGray,media.Z.desktop1920),IconWrapper=styled_components_browser_esm.ZP.span.withConfig({displayName:"styles__IconWrapper",componentId:"sc-15ya9qh-2"})(["height:24px;position:relative;margin-bottom:4px;","{margin-bottom:6px;}","{margin-bottom:0;margin-right:24px;}"],media.Z.tablet720,media.Z.desktop1224),Notification=styled_components_browser_esm.ZP.span.withConfig({displayName:"styles__Notification",componentId:"sc-15ya9qh-3"})(["border-radius:12px;display:inline-block;font-size:8px;height:12px;line-height:12px;min-width:4px;padding:0 4px;text-align:center;position:absolute;right:-6px;top:-4px;background-color:",";border:2px solid #fff;color:",";letter-spacing:normal;","{right:-9px;top:-7px;border-width:1px;font-size:11px;height:18px;line-height:17px;padding:0 6px;min-width:6px;}"],colors.Z.red,colors.Z.white,media.Z.desktop1224),NavigationMenuText=styled_components_browser_esm.ZP.span.withConfig({displayName:"styles__NavigationMenuText",componentId:"sc-15ya9qh-4"})(["display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:100%;","{white-space:normal;max-width:150px;}"],media.Z.desktop1224);var Icon=__webpack_require__("./src/components/common/Icon/Icon.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MenuItem=props=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:props.isHidden?null:(0,jsx_runtime.jsx)(Container,{isSelected:props.isSelected,isHiddenMobile:props.isHiddenMobile,children:(0,jsx_runtime.jsxs)(MenuLink,{href:props.link,onClick:e=>props.onClick(e),children:[(0,jsx_runtime.jsxs)(IconWrapper,{children:[(0,jsx_runtime.jsx)(Icon.J,{name:props.iconId,color:props.isSelected?"purple":"mediumGray"}),props.notificationAmount&&0!==props.notificationAmount&&(0,jsx_runtime.jsx)(Notification,{children:props.notificationAmount})]}),(0,jsx_runtime.jsx)(NavigationMenuText,{children:props.title})]})})});MenuItem.propTypes={isSelected:prop_types_default().bool.isRequired,link:prop_types_default().string.isRequired,title:prop_types_default().string,onClick:prop_types_default().func.isRequired,testId:prop_types_default().string.isRequired,notificationAmount:prop_types_default().number,isHidden:prop_types_default().bool,isHiddenMobile:prop_types_default().bool},MenuItem.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{isSelected:{description:"",type:{name:"bool"},required:!0},link:{description:"",type:{name:"string"},required:!0},title:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!0},testId:{description:"",type:{name:"string"},required:!0},notificationAmount:{description:"",type:{name:"number"},required:!1},isHidden:{description:"",type:{name:"bool"},required:!1},isHiddenMobile:{description:"",type:{name:"bool"},required:!1}}}},"./src/theme/colors.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={codGray:"#141414",red:"#ff4778",lightRed:"#ff7398",superLightRed:"#ffcbd9",purple:"#7633ff",lightPurple:"#9864ff",superLightPurple:"#d9c6ff",purpleLight08:"#f4efff",baseColor:"#141414",mediumGray:"#77767a",lightGray:"#9f9da3",superLightGray:"#f3f2f5",purpleRgba08:"rgba(118, 51, 255, 0.08)",purpleRgba16:"rgba(118, 51, 255, 0.16)",purpleRgba24:"rgba(118, 51, 255, 0.24)",purpleRgba40:"rgba(118, 51, 255, 0.4)",white:"#ffffff",whiteRgba24:"rgba(255, 255, 255, 0.24)",whiteRgba48:"rgba(255, 255, 255, 0.48)",whiteRgba64:"rgba(255, 255, 255, 0.64)",whiteRgba96:"rgba(255, 255, 255, 0.96)",greyRgba28:"rgba(159, 157, 163, 0.28)",wildWatermelon12:"rgba(255, 71, 120, 0.12)",wildWatermelon40:"rgba(255, 71, 120, 0.4)",wildWatermelon08:"rgba(255, 71, 120, 0.08)",lightGrayShadow:"rgba(157, 161, 163, 0.24)",porcelain:"#f4f6f7",codGray02:"rgba(20, 20, 20, 0.02)",codGray03:"rgba(20, 20, 20, 0.03)",codGray04:"rgba(20, 20, 20, 0.04)",codGray06:"rgba(20, 20, 20, 0.06)",codGray12:"rgba(20, 20, 20, 0.12)",codGray16:"rgba(20, 20, 20, 0.16)",codGray32:"rgba(20, 20, 20, 0.32)",oceanBlue01:"linear-gradient(180deg, #7F2FFF 0.53%, #4D69FF 100%)"}},"./src/theme/media.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>theme_media});const breakpoints=["320px","481px","648px","720px","937px","1080px","1224px","1296px","1352px","1440px","1920px"];breakpoints.mobile320=breakpoints[0],breakpoints.mobile481=breakpoints[1],breakpoints.tablet648=breakpoints[2],breakpoints.tablet720=breakpoints[3],breakpoints.tablet937=breakpoints[4],breakpoints.tablet1080=breakpoints[5],breakpoints.desktop1224=breakpoints[6],breakpoints.desktop1296=breakpoints[7],breakpoints.desktop1352=breakpoints[8],breakpoints.desktop1440=breakpoints[9],breakpoints.desktop1920=breakpoints[10];const theme_breakpoints=breakpoints,theme_media={mobile320:`@media screen and (min-width: ${theme_breakpoints.mobile320})`,mobile481:`@media screen and (min-width: ${theme_breakpoints.mobile481})`,tablet648:`@media screen and (min-width: ${theme_breakpoints.tablet648})`,tablet720:`@media screen and (min-width: ${theme_breakpoints.tablet720})`,tablet937:`@media screen and (min-width: ${theme_breakpoints.tablet937})`,tablet1080:`@media screen and (min-width: ${theme_breakpoints.tablet1080})`,desktop1224:`@media screen and (min-width: ${theme_breakpoints.desktop1224})`,desktop1296:`@media screen and (min-width: ${theme_breakpoints.desktop1296})`,desktop1352:`@media screen and (min-width: ${theme_breakpoints.desktop1352})`,desktop1440:`@media screen and (min-width: ${theme_breakpoints.desktop1440})`,desktop1920:`@media screen and (min-width: ${theme_breakpoints.desktop1920})`,retina1352:`@media screen and (min-width: ${theme_breakpoints.desktop1352}) and (-webkit-min-device-pixel-ratio: 2), screen and (${theme_breakpoints.desktop1352}) and (min-resolution: 192dpi)`}}}]);