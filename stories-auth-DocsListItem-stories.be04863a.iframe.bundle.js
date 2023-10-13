"use strict";(self.webpackChunkssr=self.webpackChunkssr||[]).push([[5769],{"./src/stories/auth/DocsListItem.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Example$parameters,_Example$parameters2,_components_auth_common_components_DocsList_DocsListItem__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/auth/common/components/DocsList/DocsListItem.jsx"),_components_common_Text_Text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/Text/Text.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Auth/DocsListItem",component:_components_auth_common_components_DocsList_DocsListItem__WEBPACK_IMPORTED_MODULE_1__.i},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ol",{style:{counterReset:"item",listStyleType:"none",padding:0,margin:"0 0 48px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_auth_common_components_DocsList_DocsListItem__WEBPACK_IMPORTED_MODULE_1__.i,{...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_common_Text_Text__WEBPACK_IMPORTED_MODULE_2__.x,{color:"darkGray",isPromo:!0,size:"main",variant:"paragraph",children:"Share your invite code or referral link with your friends."})})});Template.displayName="Template";const Example=Template.bind({});Example.args={},Example.parameters={...Example.parameters,docs:{...null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs,source:{originalSource:"args => <ol style={{\n  counterReset: 'item',\n  listStyleType: 'none',\n  padding: 0,\n  margin: '0 0 48px'\n}}>\n        <DocsListItem {...args}>\n            <Text color={'darkGray'} isPromo size={'main'} variant={'paragraph'}>\n                Share your invite code or referral link with your friends.\n            </Text>\n        </DocsListItem>\n    </ol>",...null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2=_Example$parameters2.docs)||void 0===_Example$parameters2?void 0:_Example$parameters2.source}}};const __namedExportsOrder=["Example"]},"./src/components/auth/common/components/DocsList/DocsListItem.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>DocsListItem});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/auth/common/components/DocsList/styles.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DocsListItem=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__.om,{blackText:props.blackText,children:[props.title&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_1__.Dx,{children:props.title}),props.children]});DocsListItem.displayName="DocsListItem",DocsListItem.propTypes={title:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,blackText:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool},DocsListItem.__docgenInfo={description:"",methods:[],displayName:"DocsListItem",props:{title:{description:"",type:{name:"string"},required:!1},blackText:{description:"",type:{name:"bool"},required:!1}}}},"./src/components/auth/common/components/DocsList/styles.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dx:()=>Title,mW:()=>DocsListContainer,om:()=>ItemContainer});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme_colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/theme/colors.js"),_theme_media__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/media.js");const DocsListContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.ol.withConfig({displayName:"styles__DocsListContainer",componentId:"sc-1f62fr0-0"})(["counter-reset:item;list-style-type:none;margin:0 0 48px;padding:0;"]),ItemContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.li.withConfig({displayName:"styles__ItemContainer",componentId:"sc-1f62fr0-1"})(["font-size:17px;line-height:24px;color:",";margin:0 0 48px;&:last-child{margin-bottom:0;}&:before{color:",";font-size:24px;line-height:36px;content:counter(item) '. ';counter-increment:item;display:block;}","{font-size:20px;line-height:32px;&:before{font-size:32px;line-height:48px;}}"],(props=>props.blackText?_theme_colors__WEBPACK_IMPORTED_MODULE_0__.Z.codGray:_theme_colors__WEBPACK_IMPORTED_MODULE_0__.Z.mediumGray),_theme_colors__WEBPACK_IMPORTED_MODULE_0__.Z.purple,_theme_media__WEBPACK_IMPORTED_MODULE_1__.Z.desktop1920),Title=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.withConfig({displayName:"styles__Title",componentId:"sc-1f62fr0-2"})(["font-size:24px;line-height:36px;margin-bottom:16px;color:",";","{font-size:32px;line-height:48px;}"],_theme_colors__WEBPACK_IMPORTED_MODULE_0__.Z.codGray,_theme_media__WEBPACK_IMPORTED_MODULE_1__.Z.desktop1920)},"./src/components/common/Text/Text.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme_colors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/colors.js"),theme_fonts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/theme/fonts.js"),theme_media__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/theme/media.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const getTextColor=color=>{switch(color){case"darkGray":default:return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.baseColor;case"mediumGray":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.mediumGray;case"lightGray":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.lightGray;case"purple":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.purple;case"purpleRgba40":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.purpleRgba40;case"purpleRgba24":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.purpleRgba24;case"red":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.red;case"white":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.white;case"whiteRgba48":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.whiteRgba48;case"whiteRgba64":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.whiteRgba64}},getDesktopSize=props=>{switch(props.size){case"display1":return"40px";case"display2":return"48px";case"header":return"32px";case"main":default:return"20px";case"secondary":case"subheader":return"17px";case"tag":return"11px"}},getDesktopLineHeight=props=>{switch(props.size){case"display1":return"56px";case"display2":return"64px";case"header":return"48px";case"main":default:return"32px";case"secondary":case"subheader":return"24px";case"tag":return"16px"}},CommonCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(["font-family:",";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:",";line-height:",";font-variant:",";letter-spacing:",";text-transform:",";color:",";font-weight:",";margin-left:",";margin-bottom:",";white-space:",";overflow:",";text-overflow:",";max-width:",";text-decoration:",";text-align:",";flex-shrink:",";&:link,&:visited{color:",";}","{font-size:",";line-height:",";}","{font-size:",";line-height:",";margin-bottom:",";}"],theme_fonts__WEBPACK_IMPORTED_MODULE_2__.Z.regular,(props=>(props=>{switch(props.size){case"display1":return"32px";case"display2":return"40px";case"header":return"24px";case"main":default:return"17px";case"secondary":case"subheader":return"14px";case"tag":return"8px"}})(props)),(props=>(props=>{switch(props.size){case"display2":return"48px";case"display1":return"40px";case"header":return"36px";case"main":default:return"24px";case"secondary":case"subheader":return"20px";case"tag":return"10px"}})(props)),(props=>props.smallCaps?"small-caps":null),(props=>"subheader"===props.size||"tag"===props.size?"0.08em":null),(props=>"subheader"===props.size||"tag"===props.size?"uppercase":null),(props=>getTextColor(props.color)),(props=>"tag"===props.size?"bold":null),(props=>props.leftSpacer?"3px":null),(props=>(props=>{switch(props.indent){case"4px":return"4px";case"8px":case"adaptive-8-16":return"8px";case"16px":case"adaptive-16-24":return"16px";case"24px":case"adaptive-24-32":return"24px";case"32px":case"adaptive-32-48":return"32px";case"48px":return"48px";case"64px":return"64px";default:return null}})(props)),(props=>props.nowrap||props.ellipsis?"nowrap":null),(props=>props.ellipsis?"hidden":null),(props=>props.ellipsis?"ellipsis":null),(props=>props.ellipsis?"100%":null),(props=>props.lineThrough?"line-through":null),(props=>props.textAlign?props.textAlign:null),(props=>props.flexShrink?props.flexShrink:null),(props=>getTextColor(props.color)),theme_media__WEBPACK_IMPORTED_MODULE_3__.Z.tablet648,(props=>props.isPromo?getDesktopSize(props):null),(props=>props.isPromo?getDesktopLineHeight(props):null),theme_media__WEBPACK_IMPORTED_MODULE_3__.Z.desktop1920,(props=>getDesktopSize(props)),(props=>getDesktopLineHeight(props)),(props=>(props=>{switch(props.indent){case"4px":return"4px";case"8px":return"8px";case"16px":case"adaptive-8-16":return"16px";case"24px":case"adaptive-16-24":return"24px";case"32px":case"adaptive-24-32":return"32px";case"48px":case"adaptive-32-48":return"48px";case"64px":return"64px";default:return null}})(props))),TextSpan=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.span.withConfig({displayName:"Text__TextSpan",componentId:"sc-1kui6fu-0"})(["",";"],CommonCss),TextDiv=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div.withConfig({displayName:"Text__TextDiv",componentId:"sc-1kui6fu-1"})(["",";"],CommonCss),TextHeader1=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.h1.withConfig({displayName:"Text__TextHeader1",componentId:"sc-1kui6fu-2"})(["",";"],CommonCss),TextHeader2=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.h2.withConfig({displayName:"Text__TextHeader2",componentId:"sc-1kui6fu-3"})(["",";"],CommonCss),TextHeader3=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.h3.withConfig({displayName:"Text__TextHeader3",componentId:"sc-1kui6fu-4"})(["",";"],CommonCss),TextHeader4=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.h4.withConfig({displayName:"Text__TextHeader4",componentId:"sc-1kui6fu-5"})(["",";"],CommonCss),TextHeader5=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.h5.withConfig({displayName:"Text__TextHeader5",componentId:"sc-1kui6fu-6"})(["",";"],CommonCss),TextHeader6=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.h6.withConfig({displayName:"Text__TextHeader6",componentId:"sc-1kui6fu-7"})(["",";"],CommonCss),TextPre=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.pre.withConfig({displayName:"Text__TextPre",componentId:"sc-1kui6fu-8"})(["",";"],CommonCss),TextParagraph=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.p.withConfig({displayName:"Text__TextParagraph",componentId:"sc-1kui6fu-9"})(["",";"],CommonCss),TextLink=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.a.withConfig({displayName:"Text__TextLink",componentId:"sc-1kui6fu-10"})(["",";"],CommonCss),TextButton=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.button.withConfig({displayName:"Text__TextButton",componentId:"sc-1kui6fu-11"})(["",";width:auto;cursor:pointer;background:none;border:none;padding:0;text-align:left;&:hover,&:focus{background:none;}"],CommonCss),Text=props=>{const Wrapper=(variant=>{switch(variant){case"h1":return TextHeader1;case"h2":return TextHeader2;case"h3":return TextHeader3;case"h4":return TextHeader4;case"h5":return TextHeader5;case"h6":return TextHeader6;case"pre":return TextPre;case"paragraph":return TextParagraph;case"div":return TextDiv;case"link":return TextLink;case"button":return TextButton;default:return TextSpan}})(props.variant);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Wrapper,{...props,children:props.children})};Text.displayName="Text",Text.propTypes={variant:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["h1","h2","h3","h4","h5","h6","pre","paragraph","div","span","link","button"]),color:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["darkGray","mediumGray","lightGray","purple","purpleRgba40","purpleRgba24","red","white","whiteRgba48","whiteRgba64"]),size:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["display1","display2","header","main","secondary","subheader","tag"]),smallCaps:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,nowrap:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,leftSpacer:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,isPromo:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,ellipsis:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,href:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func,indent:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["4px","8px","16px","24px","32px","48px","64px","adaptive-8-16","adaptive-16-24","adaptive-24-32","adaptive-32-48"]),lineThrough:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,textAlign:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,flexShrink:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string},Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{variant:{description:"",type:{name:"enum",value:[{value:"'h1'",computed:!1},{value:"'h2'",computed:!1},{value:"'h3'",computed:!1},{value:"'h4'",computed:!1},{value:"'h5'",computed:!1},{value:"'h6'",computed:!1},{value:"'pre'",computed:!1},{value:"'paragraph'",computed:!1},{value:"'div'",computed:!1},{value:"'span'",computed:!1},{value:"'link'",computed:!1},{value:"'button'",computed:!1}]},required:!1},color:{description:"",type:{name:"enum",value:[{value:"'darkGray'",computed:!1},{value:"'mediumGray'",computed:!1},{value:"'lightGray'",computed:!1},{value:"'purple'",computed:!1},{value:"'purpleRgba40'",computed:!1},{value:"'purpleRgba24'",computed:!1},{value:"'red'",computed:!1},{value:"'white'",computed:!1},{value:"'whiteRgba48'",computed:!1},{value:"'whiteRgba64'",computed:!1}]},required:!1},size:{description:"",type:{name:"enum",value:[{value:"'display1'",computed:!1},{value:"'display2'",computed:!1},{value:"'header'",computed:!1},{value:"'main'",computed:!1},{value:"'secondary'",computed:!1},{value:"'subheader'",computed:!1},{value:"'tag'",computed:!1}]},required:!1},smallCaps:{description:"",type:{name:"bool"},required:!1},nowrap:{description:"",type:{name:"bool"},required:!1},leftSpacer:{description:"",type:{name:"bool"},required:!1},isPromo:{description:"",type:{name:"bool"},required:!1},ellipsis:{description:"",type:{name:"bool"},required:!1},href:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},indent:{description:"",type:{name:"enum",value:[{value:"'4px'",computed:!1},{value:"'8px'",computed:!1},{value:"'16px'",computed:!1},{value:"'24px'",computed:!1},{value:"'32px'",computed:!1},{value:"'48px'",computed:!1},{value:"'64px'",computed:!1},{value:"'adaptive-8-16'",computed:!1},{value:"'adaptive-16-24'",computed:!1},{value:"'adaptive-24-32'",computed:!1},{value:"'adaptive-32-48'",computed:!1}]},required:!1},lineThrough:{description:"",type:{name:"bool"},required:!1},textAlign:{description:"",type:{name:"string"},required:!1},flexShrink:{description:"",type:{name:"string"},required:!1}}}},"./src/theme/colors.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={codGray:"#141414",red:"#ff4778",lightRed:"#ff7398",superLightRed:"#ffcbd9",purple:"#7633ff",lightPurple:"#9864ff",superLightPurple:"#d9c6ff",purpleLight08:"#f4efff",baseColor:"#141414",mediumGray:"#77767a",lightGray:"#9f9da3",superLightGray:"#f3f2f5",purpleRgba08:"rgba(118, 51, 255, 0.08)",purpleRgba16:"rgba(118, 51, 255, 0.16)",purpleRgba24:"rgba(118, 51, 255, 0.24)",purpleRgba40:"rgba(118, 51, 255, 0.4)",white:"#ffffff",whiteRgba24:"rgba(255, 255, 255, 0.24)",whiteRgba48:"rgba(255, 255, 255, 0.48)",whiteRgba64:"rgba(255, 255, 255, 0.64)",whiteRgba96:"rgba(255, 255, 255, 0.96)",greyRgba28:"rgba(159, 157, 163, 0.28)",wildWatermelon12:"rgba(255, 71, 120, 0.12)",wildWatermelon40:"rgba(255, 71, 120, 0.4)",wildWatermelon08:"rgba(255, 71, 120, 0.08)",lightGrayShadow:"rgba(157, 161, 163, 0.24)",porcelain:"#f4f6f7",codGray02:"rgba(20, 20, 20, 0.02)",codGray03:"rgba(20, 20, 20, 0.03)",codGray04:"rgba(20, 20, 20, 0.04)",codGray06:"rgba(20, 20, 20, 0.06)",codGray12:"rgba(20, 20, 20, 0.12)",codGray16:"rgba(20, 20, 20, 0.16)",codGray32:"rgba(20, 20, 20, 0.32)",oceanBlue01:"linear-gradient(180deg, #7F2FFF 0.53%, #4D69FF 100%)"}},"./src/theme/fonts.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={bold:'GerberaBold,   "Segoe UI", "Droid Sans", Roboto, Helvetica, Arial, sans-serif',black:'GerberaBlack,  "Segoe UI", "Droid Sans", Roboto, Helvetica, Arial, sans-serif',light:'GerberaLight,  "Segoe UI", "Droid Sans", Roboto, Helvetica, Arial, sans-serif',medium:'GerberaMedium, "Segoe UI", "Droid Sans", Roboto, Helvetica, Arial, sans-serif',regular:'GerberaRegular,"Segoe UI", "Droid Sans", Roboto, Helvetica, Arial, sans-serif'}},"./src/theme/media.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>theme_media});const breakpoints=["320px","481px","648px","720px","937px","1080px","1224px","1296px","1352px","1440px","1920px"];breakpoints.mobile320=breakpoints[0],breakpoints.mobile481=breakpoints[1],breakpoints.tablet648=breakpoints[2],breakpoints.tablet720=breakpoints[3],breakpoints.tablet937=breakpoints[4],breakpoints.tablet1080=breakpoints[5],breakpoints.desktop1224=breakpoints[6],breakpoints.desktop1296=breakpoints[7],breakpoints.desktop1352=breakpoints[8],breakpoints.desktop1440=breakpoints[9],breakpoints.desktop1920=breakpoints[10];const theme_breakpoints=breakpoints,theme_media={mobile320:`@media screen and (min-width: ${theme_breakpoints.mobile320})`,mobile481:`@media screen and (min-width: ${theme_breakpoints.mobile481})`,tablet648:`@media screen and (min-width: ${theme_breakpoints.tablet648})`,tablet720:`@media screen and (min-width: ${theme_breakpoints.tablet720})`,tablet937:`@media screen and (min-width: ${theme_breakpoints.tablet937})`,tablet1080:`@media screen and (min-width: ${theme_breakpoints.tablet1080})`,desktop1224:`@media screen and (min-width: ${theme_breakpoints.desktop1224})`,desktop1296:`@media screen and (min-width: ${theme_breakpoints.desktop1296})`,desktop1352:`@media screen and (min-width: ${theme_breakpoints.desktop1352})`,desktop1440:`@media screen and (min-width: ${theme_breakpoints.desktop1440})`,desktop1920:`@media screen and (min-width: ${theme_breakpoints.desktop1920})`,retina1352:`@media screen and (min-width: ${theme_breakpoints.desktop1352}) and (-webkit-min-device-pixel-ratio: 2), screen and (${theme_breakpoints.desktop1352}) and (min-resolution: 192dpi)`}}}]);