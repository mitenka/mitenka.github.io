"use strict";(self.webpackChunkssr=self.webpackChunkssr||[]).push([[6280],{"./src/stories/common/AccountsList.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AccountsList_stories});__webpack_require__("./node_modules/react/index.js");var styles=__webpack_require__("./src/components/common/Panel/styles.jsx"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colors=__webpack_require__("./src/theme/colors.js"),media=__webpack_require__("./src/theme/media.js");const TopCutoutWhite="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNDgiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCA0OCAxNiI+PHJlY3QgZmlsbD0iI2ZmZiIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjE2Ii8+PHBhdGggZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjOWY5ZGEzIiBzdHJva2Utb3BhY2l0eT0iLjI4IiBkPSJNMCwwLjVoNy4xNzVjMi41ODMsMCw0Ljg1OSwxLjcwNSw2LjQxOCwzLjc2NUMxNS40NjEsNi43MzEsMTguNzMsOS41LDI0LDkuNSBzOC41MzktMi43NjksMTAuNDA2LTUuMjM1YzEuNTU5LTIuMDYsMy44MzYtMy43NjUsNi40MTktMy43NjVINDgiLz48L3N2Zz4=",AccountsListContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"styles__AccountsListContainer",componentId:"sc-1id74g0-0"})(["border:1px solid ",";border-radius:12px;padding:24px;position:relative;cursor:",";","{padding:32px;border-radius:16px;}&:before{display:",";content:'';position:absolute;left:50%;margin-left:-24px;top:-1px;width:48px;height:16px;background-image:url(",");}&:hover{background:",";&:before{background-image:url('","');}}"],colors.Z.greyRgba28,(props=>props.isHoverable?"pointer":null),media.Z.desktop1920,(props=>props.isLinked?"inline-block":"none"),TopCutoutWhite,(props=>props.isHoverable?colors.Z.superLightGray:null),(props=>props.isHoverable?"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCA0OCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjE2IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMCAxNS42OEg0OFYwLjMyMDAwN0gzOS4yMTMzQzM2LjQ1NSAwLjMyMDAwNyAzNC4yOTYyIDIuMDQyMjkgMzIuOTE5NyAzLjgyNzA5QzMxLjE0MzcgNi4xMjk3NyAyNy44MTQzIDcuNjgwMDEgMjQgNy42ODAwMUMyMC4xODU3IDcuNjgwMDEgMTYuODU2MyA2LjEyOTc3IDE1LjA4MDMgMy44MjcwOUMxMy43MDM4IDIuMDQyMjkgMTEuNTQ1IDAuMzIwMDA3IDguNzg2NjYgMC4zMjAwMDdIMFYxNS42OFoiIGZpbGw9IiNGM0YyRjUiLz4KPHBhdGggZD0iTTAgMC41SDcuMTc1QzkuNzU4IDAuNSAxMi4wMzQgMi4yMDUgMTMuNTkzIDQuMjY1QzE1LjQ2MSA2LjczMSAxOC43MyA5LjUgMjQgOS41QzI5LjI3IDkuNSAzMi41MzkgNi43MzEgMzQuNDA2IDQuMjY1QzM1Ljk2NSAyLjIwNSAzOC4yNDIgMC41IDQwLjgyNSAwLjVINDgiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0wIDAuNUg3LjE3NUM5Ljc1OCAwLjUgMTIuMDM0IDIuMjA1IDEzLjU5MyA0LjI2NUMxNS40NjEgNi43MzEgMTguNzMgOS41IDI0IDkuNUMyOS4yNyA5LjUgMzIuNTM5IDYuNzMxIDM0LjQwNiA0LjI2NUMzNS45NjUgMi4yMDUgMzguMjQyIDAuNSA0MC44MjUgMC41SDQ4IiBzdHJva2U9IiM5RjlEQTMiIHN0cm9rZS1vcGFjaXR5PSIwLjI4Ii8+Cjwvc3ZnPgo=":TopCutoutWhite));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AccountsList=props=>(0,jsx_runtime.jsx)(AccountsListContainer,{isLinked:props.isLinked,isHoverable:props.isHoverable,onClick:props.onAccountClick,children:props.children});AccountsList.displayName="AccountsList",AccountsList.propTypes={isLinked:prop_types_default().bool,isHoverable:prop_types_default().bool,onAccountClick:prop_types_default().func},AccountsList.__docgenInfo={description:"",methods:[],displayName:"AccountsList",props:{isLinked:{description:"",type:{name:"bool"},required:!1},isHoverable:{description:"",type:{name:"bool"},required:!1},onAccountClick:{description:"",type:{name:"func"},required:!1}}};var _Example$parameters,_Example$parameters2,FlagIcon=__webpack_require__("./src/components/common/FlagIcon/FlagIcon.jsx"),Text=__webpack_require__("./src/components/common/Text/Text.jsx");const AccountsList_stories={title:"Common Components/AccountsList",component:AccountsList},Template=args=>(0,jsx_runtime.jsx)(AccountsList,{...args,children:(0,jsx_runtime.jsxs)(styles.ne,{alignStart:!0,children:[(0,jsx_runtime.jsx)(styles.a1,{children:(0,jsx_runtime.jsx)(FlagIcon.U,{name:"ru",size:"small"})}),(0,jsx_runtime.jsx)(styles.VX,{children:(0,jsx_runtime.jsx)(Text.x,{color:"darkGray",children:"Main text"})})]})});Template.displayName="Template";const Example=Template.bind({});Example.args={isLinked:!0,isHoverable:!0},Example.parameters={...Example.parameters,docs:{...null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs,source:{originalSource:"args => <AccountsList {...args}>\n        <PanelRow alignStart>\n            <IconWrapper>\n                <FlagIcon name={'ru'} size={'small'} />\n            </IconWrapper>\n            <PanelText>\n                <Text color={'darkGray'}>Main text</Text>\n            </PanelText>\n        </PanelRow>\n    </AccountsList>",...null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2=_Example$parameters2.docs)||void 0===_Example$parameters2?void 0:_Example$parameters2.source}}};const __namedExportsOrder=["Example"]},"./src/components/common/Badge/Badge.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Badge});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colors=__webpack_require__("./src/theme/colors.js"),fonts=__webpack_require__("./src/theme/fonts.js"),media=__webpack_require__("./src/theme/media.js");const CommonCss=(0,styled_components_browser_esm.iv)(["background-color:",";border:2px solid ",";color:",";display:inline-block;letter-spacing:0.08em;"],(props=>(props=>{switch(props.variant){case"primary":default:return colors.Z.purple;case"secondary":return colors.Z.purpleRgba08;case"tertiary":return colors.Z.lightGray;case"negative":return colors.Z.red}})(props)),colors.Z.white,(props=>"secondary"===props.variant?colors.Z.purple:colors.Z.white)),TightCss=(0,styled_components_browser_esm.iv)(["border-radius:24px;font-family:",";font-weight:600;font-size:8px;line-height:10px;min-height:10px;min-width:4px;padding:1px 4px;text-transform:uppercase;","{border-radius:20px;font-size:11px;line-height:16px;min-height:16px;padding:0 6px;}"],fonts.Z.bold,media.Z.desktop1920),FitCss=(0,styled_components_browser_esm.iv)(["border-radius:24px;font-family:",";font-weight:600;font-size:8px;line-height:10px;padding:5px 8px;text-transform:uppercase;","{border-radius:30px;font-size:11px;line-height:16px;padding:6px 12px;}"],fonts.Z.bold,media.Z.desktop1920),PriceCss=(0,styled_components_browser_esm.iv)(["border-radius:32px;font-family:",";font-size:14px;line-height:20px;padding:6px 16px;","{border-radius:30px;font-size:17px;line-height:24px;padding:6px 20px;}"],fonts.Z.regular,media.Z.desktop1920),Container=styled_components_browser_esm.ZP.span.withConfig({displayName:"styles__Container",componentId:"sc-yu95qj-0"})([""," "," "," ",""],CommonCss,(props=>"tight"===props.size&&TightCss),(props=>"fit"===props.size&&FitCss),(props=>"price"===props.size&&PriceCss)),Currency=styled_components_browser_esm.ZP.span.withConfig({displayName:"styles__Currency",componentId:"sc-yu95qj-1"})(["font-variant:small-caps;margin-left:0.5ex;"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Badge=props=>(0,jsx_runtime.jsxs)(Container,{variant:props.variant,size:props.size,...props,children:[props.caption,props.currencyValue&&(0,jsx_runtime.jsx)(Currency,{children:props.currencyValue})]});Badge.displayName="Badge",Badge.defaultProps={size:"fit"},Badge.propTypes={size:prop_types_default().oneOf(["fit","tight","price"]),variant:prop_types_default().oneOf(["tertiary","primary","negative","secondary"]),caption:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number]),currencyValue:prop_types_default().string},Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{size:{defaultValue:{value:"'fit'",computed:!1},description:"",type:{name:"enum",value:[{value:"'fit'",computed:!1},{value:"'tight'",computed:!1},{value:"'price'",computed:!1}]},required:!1},variant:{description:"",type:{name:"enum",value:[{value:"'tertiary'",computed:!1},{value:"'primary'",computed:!1},{value:"'negative'",computed:!1},{value:"'secondary'",computed:!1}]},required:!1},caption:{description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},currencyValue:{description:"",type:{name:"string"},required:!1}}}},"./src/components/common/Panel/styles.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>PanelContainerButtonSubmit,KG:()=>PanelContent,L9:()=>SelectedDiskBadge,Nb:()=>PanelContainerReactLink,Nk:()=>PanelRightBlock,RE:()=>PanelBadge,Rk:()=>PanelContainerBlock,UD:()=>PanelContainerLink,VX:()=>PanelText,WF:()=>DiskBadgeWrapper,a1:()=>IconWrapper,aQ:()=>PanelFrame,ne:()=>PanelRow,vd:()=>PanelContainerButton});var react_router_dom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme_colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/theme/colors.js"),_theme_media__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/media.js"),_Badge_Badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/Badge/Badge.jsx"),_Text_Text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/Text/Text.jsx");const DiskButtonWrapper=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div.withConfig({displayName:"styles__DiskButtonWrapper",componentId:"sc-5i08zn-0"})(["display:none;margin-left:4px;"]),CommonCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.iv)(["display:flex;justify-content:",";align-items:center;cursor:",";padding:",";border:",";border-radius:",";margin:",";width:",";background:",";box-shadow:",";color:inherit;box-sizing:border-box;pointer-events:",";position:relative;font-family:inherit;line-height:inherit;font-size:inherit;text-align:left;","{display:",";}","{&:hover{","{display:block;}}}","{padding:",";margin:",";border-radius:",";width:",";}&:hover,&:active{background:",";}"],(props=>(props=>{switch(props.justify){case"start":return"flex-start";case"center":return"center";case"end":return"flex-end";case"between":return"space-between";default:return"start"}})(props)),(props=>props.$isDefaultCursor?"default":"pointer"),(props=>props.$isBordered||props.$hasIcon?"24px":"16px 24px"),(props=>props.$isSelectedBordered?`1px solid ${_theme_colors__WEBPACK_IMPORTED_MODULE_0__.Z.purple}`:props.$isBordered?`1px solid ${_theme_colors__WEBPACK_IMPORTED_MODULE_0__.Z.greyRgba28}`:"none"),(props=>props.$hasBorderRadius?"12px":"0"),(props=>props.$isNegativeMargin?"0 -24px":null),(props=>props.$isNegativeMargin?"calc(100% + 48px)":"100%"),(props=>props.$isSelectedPanel?_theme_colors__WEBPACK_IMPORTED_MODULE_0__.Z.purpleRgba08:"none"),(props=>props.$isSelectedBordered?`0px 0px 0px 1px ${_theme_colors__WEBPACK_IMPORTED_MODULE_0__.Z.purple}`:"none"),(props=>props.$isDisabled?"none":null),DiskButtonWrapper,(props=>props.$showDeleteIcon?"block":"none"),_theme_media__WEBPACK_IMPORTED_MODULE_1__.Z.tablet720,DiskButtonWrapper,_theme_media__WEBPACK_IMPORTED_MODULE_1__.Z.desktop1920,(props=>props.$hasIcon?"36px 32px":"20px 32px"),(props=>props.$isNegativeMargin?"0 -32px":null),(props=>props.$hasBorderRadius?"16px":null),(props=>props.$isNegativeMargin?"calc(100% + 64px)":"100%"),(props=>props.$isHoverable?_theme_colors__WEBPACK_IMPORTED_MODULE_0__.Z.superLightGray:"none")),PanelContainerBlock=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div.withConfig({displayName:"styles__PanelContainerBlock",componentId:"sc-5i08zn-1"})(["",""],CommonCss),PanelContainerLink=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.a.withConfig({displayName:"styles__PanelContainerLink",componentId:"sc-5i08zn-2"})(["",""],CommonCss),PanelContainerReactLink=(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.rU).withConfig({displayName:"styles__PanelContainerReactLink",componentId:"sc-5i08zn-3"})(["",""],CommonCss),PanelContainerButton=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.button.withConfig({displayName:"styles__PanelContainerButton",componentId:"sc-5i08zn-4"})(["",""],CommonCss),PanelContainerButtonSubmit=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.button.attrs({type:"submit"}).withConfig({displayName:"styles__PanelContainerButtonSubmit",componentId:"sc-5i08zn-5"})(["",""],CommonCss),PanelBadge=(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP)(_Badge_Badge__WEBPACK_IMPORTED_MODULE_2__.C).withConfig({displayName:"styles__PanelBadge",componentId:"sc-5i08zn-6"})(["position:absolute;right:-12px;top:-12px;"]),PanelText=(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP)(_Text_Text__WEBPACK_IMPORTED_MODULE_3__.x).withConfig({displayName:"styles__PanelText",componentId:"sc-5i08zn-7"})(["overflow:",";text-overflow:",";white-space:",";color:",";"],(props=>props.multiline?null:"hidden"),(props=>props.multiline?null:"ellipsis"),(props=>props.multiline?null:"nowrap"),(props=>(props=>props.purpletext&&props.isDisabled?_theme_colors__WEBPACK_IMPORTED_MODULE_0__.Z.superLightPurple:props.purpletext?_theme_colors__WEBPACK_IMPORTED_MODULE_0__.Z.purple:_theme_colors__WEBPACK_IMPORTED_MODULE_0__.Z.codGray)(props))),PanelRow=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div.withConfig({displayName:"styles__PanelRow",componentId:"sc-5i08zn-8"})(["display:flex;align-items:center;flex-grow:1;overflow:hidden;justify-content:",";"],(props=>(props=>props.alignStart?"start":props.alignEnd?"end":"space-between")(props))),PanelFrame=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div.withConfig({displayName:"styles__PanelFrame",componentId:"sc-5i08zn-9"})(["display:flex;align-items:center;width:100%;","{margin-bottom:4px;&:last-of-type{margin-bottom:0;}}"],PanelRow),IconWrapper=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.span.withConfig({displayName:"styles__IconWrapper",componentId:"sc-5i08zn-10"})(["display:inline-flex;margin-right:16px;position:relative;","{margin-right:24px;}"],_theme_media__WEBPACK_IMPORTED_MODULE_1__.Z.desktop1920),DiskBadgeWrapper=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.span.withConfig({displayName:"styles__DiskBadgeWrapper",componentId:"sc-5i08zn-11"})(["display:inline-flex;margin-right:16px;position:relative;","{margin-right:24px;}"],_theme_media__WEBPACK_IMPORTED_MODULE_1__.Z.desktop1920),SelectedDiskBadge=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.span.withConfig({displayName:"styles__SelectedDiskBadge",componentId:"sc-5i08zn-12"})(["position:absolute;left:0;top:0;"]),PanelContent=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div.withConfig({displayName:"styles__PanelContent",componentId:"sc-5i08zn-13"})(["width:100%;overflow:hidden;"]),PanelRightBlock=(styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div.withConfig({displayName:"styles__PanelLeftBlock",componentId:"sc-5i08zn-14"})(["overflow:hidden;"]),styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div.withConfig({displayName:"styles__PanelRightBlock",componentId:"sc-5i08zn-15"})(["margin-left:16px;text-align:right;white-space:nowrap;display:",";align-items:",";","{margin-left:24px;}"],(props=>props.flex?"flex":null),(props=>props.flex?"center":null),_theme_media__WEBPACK_IMPORTED_MODULE_1__.Z.desktop1920));styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.span.withConfig({displayName:"styles__CardAccountRow",componentId:"sc-5i08zn-16"})(["display:flex;flex:1;align-items:center;max-width:100%;","{flex-direction:column;align-items:stretch;}","{flex-direction:row;}","{flex-direction:column;}"],_theme_media__WEBPACK_IMPORTED_MODULE_1__.Z.tablet937,_theme_media__WEBPACK_IMPORTED_MODULE_1__.Z.desktop1224,_theme_media__WEBPACK_IMPORTED_MODULE_1__.Z.desktop1296),styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.span.withConfig({displayName:"styles__CardAccountSubrow",componentId:"sc-5i08zn-17"})(["display:flex;align-items:center;justify-content:space-between;flex-grow:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;","{margin-top:24px;}","{margin-top:0;}","{margin-top:24px;}"],_theme_media__WEBPACK_IMPORTED_MODULE_1__.Z.tablet937,_theme_media__WEBPACK_IMPORTED_MODULE_1__.Z.desktop1224,_theme_media__WEBPACK_IMPORTED_MODULE_1__.Z.desktop1296)},"./src/components/common/Text/Text.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme_colors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/colors.js"),theme_fonts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/theme/fonts.js"),theme_media__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/theme/media.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const getTextColor=color=>{switch(color){case"darkGray":default:return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.baseColor;case"mediumGray":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.mediumGray;case"lightGray":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.lightGray;case"purple":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.purple;case"purpleRgba40":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.purpleRgba40;case"purpleRgba24":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.purpleRgba24;case"red":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.red;case"white":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.white;case"whiteRgba48":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.whiteRgba48;case"whiteRgba64":return theme_colors__WEBPACK_IMPORTED_MODULE_1__.Z.whiteRgba64}},getDesktopSize=props=>{switch(props.size){case"display1":return"40px";case"display2":return"48px";case"header":return"32px";case"main":default:return"20px";case"secondary":case"subheader":return"17px";case"tag":return"11px"}},getDesktopLineHeight=props=>{switch(props.size){case"display1":return"56px";case"display2":return"64px";case"header":return"48px";case"main":default:return"32px";case"secondary":case"subheader":return"24px";case"tag":return"16px"}},CommonCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(["font-family:",";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:",";line-height:",";font-variant:",";letter-spacing:",";text-transform:",";color:",";font-weight:",";margin-left:",";margin-bottom:",";white-space:",";overflow:",";text-overflow:",";max-width:",";text-decoration:",";text-align:",";flex-shrink:",";&:link,&:visited{color:",";}","{font-size:",";line-height:",";}","{font-size:",";line-height:",";margin-bottom:",";}"],theme_fonts__WEBPACK_IMPORTED_MODULE_2__.Z.regular,(props=>(props=>{switch(props.size){case"display1":return"32px";case"display2":return"40px";case"header":return"24px";case"main":default:return"17px";case"secondary":case"subheader":return"14px";case"tag":return"8px"}})(props)),(props=>(props=>{switch(props.size){case"display2":return"48px";case"display1":return"40px";case"header":return"36px";case"main":default:return"24px";case"secondary":case"subheader":return"20px";case"tag":return"10px"}})(props)),(props=>props.smallCaps?"small-caps":null),(props=>"subheader"===props.size||"tag"===props.size?"0.08em":null),(props=>"subheader"===props.size||"tag"===props.size?"uppercase":null),(props=>getTextColor(props.color)),(props=>"tag"===props.size?"bold":null),(props=>props.leftSpacer?"3px":null),(props=>(props=>{switch(props.indent){case"4px":return"4px";case"8px":case"adaptive-8-16":return"8px";case"16px":case"adaptive-16-24":return"16px";case"24px":case"adaptive-24-32":return"24px";case"32px":case"adaptive-32-48":return"32px";case"48px":return"48px";case"64px":return"64px";default:return null}})(props)),(props=>props.nowrap||props.ellipsis?"nowrap":null),(props=>props.ellipsis?"hidden":null),(props=>props.ellipsis?"ellipsis":null),(props=>props.ellipsis?"100%":null),(props=>props.lineThrough?"line-through":null),(props=>props.textAlign?props.textAlign:null),(props=>props.flexShrink?props.flexShrink:null),(props=>getTextColor(props.color)),theme_media__WEBPACK_IMPORTED_MODULE_3__.Z.tablet648,(props=>props.isPromo?getDesktopSize(props):null),(props=>props.isPromo?getDesktopLineHeight(props):null),theme_media__WEBPACK_IMPORTED_MODULE_3__.Z.desktop1920,(props=>getDesktopSize(props)),(props=>getDesktopLineHeight(props)),(props=>(props=>{switch(props.indent){case"4px":return"4px";case"8px":return"8px";case"16px":case"adaptive-8-16":return"16px";case"24px":case"adaptive-16-24":return"24px";case"32px":case"adaptive-24-32":return"32px";case"48px":case"adaptive-32-48":return"48px";case"64px":return"64px";default:return null}})(props))),TextSpan=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.span.withConfig({displayName:"Text__TextSpan",componentId:"sc-1kui6fu-0"})(["",";"],CommonCss),TextDiv=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div.withConfig({displayName:"Text__TextDiv",componentId:"sc-1kui6fu-1"})(["",";"],CommonCss),TextHeader1=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.h1.withConfig({displayName:"Text__TextHeader1",componentId:"sc-1kui6fu-2"})(["",";"],CommonCss),TextHeader2=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.h2.withConfig({displayName:"Text__TextHeader2",componentId:"sc-1kui6fu-3"})(["",";"],CommonCss),TextHeader3=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.h3.withConfig({displayName:"Text__TextHeader3",componentId:"sc-1kui6fu-4"})(["",";"],CommonCss),TextHeader4=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.h4.withConfig({displayName:"Text__TextHeader4",componentId:"sc-1kui6fu-5"})(["",";"],CommonCss),TextHeader5=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.h5.withConfig({displayName:"Text__TextHeader5",componentId:"sc-1kui6fu-6"})(["",";"],CommonCss),TextHeader6=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.h6.withConfig({displayName:"Text__TextHeader6",componentId:"sc-1kui6fu-7"})(["",";"],CommonCss),TextPre=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.pre.withConfig({displayName:"Text__TextPre",componentId:"sc-1kui6fu-8"})(["",";"],CommonCss),TextParagraph=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.p.withConfig({displayName:"Text__TextParagraph",componentId:"sc-1kui6fu-9"})(["",";"],CommonCss),TextLink=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.a.withConfig({displayName:"Text__TextLink",componentId:"sc-1kui6fu-10"})(["",";"],CommonCss),TextButton=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.button.withConfig({displayName:"Text__TextButton",componentId:"sc-1kui6fu-11"})(["",";width:auto;cursor:pointer;background:none;border:none;padding:0;text-align:left;&:hover,&:focus{background:none;}"],CommonCss),Text=props=>{const Wrapper=(variant=>{switch(variant){case"h1":return TextHeader1;case"h2":return TextHeader2;case"h3":return TextHeader3;case"h4":return TextHeader4;case"h5":return TextHeader5;case"h6":return TextHeader6;case"pre":return TextPre;case"paragraph":return TextParagraph;case"div":return TextDiv;case"link":return TextLink;case"button":return TextButton;default:return TextSpan}})(props.variant);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Wrapper,{...props,children:props.children})};Text.displayName="Text",Text.propTypes={variant:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["h1","h2","h3","h4","h5","h6","pre","paragraph","div","span","link","button"]),color:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["darkGray","mediumGray","lightGray","purple","purpleRgba40","purpleRgba24","red","white","whiteRgba48","whiteRgba64"]),size:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["display1","display2","header","main","secondary","subheader","tag"]),smallCaps:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,nowrap:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,leftSpacer:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,isPromo:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,ellipsis:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,href:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func,indent:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["4px","8px","16px","24px","32px","48px","64px","adaptive-8-16","adaptive-16-24","adaptive-24-32","adaptive-32-48"]),lineThrough:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,textAlign:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,flexShrink:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string},Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{variant:{description:"",type:{name:"enum",value:[{value:"'h1'",computed:!1},{value:"'h2'",computed:!1},{value:"'h3'",computed:!1},{value:"'h4'",computed:!1},{value:"'h5'",computed:!1},{value:"'h6'",computed:!1},{value:"'pre'",computed:!1},{value:"'paragraph'",computed:!1},{value:"'div'",computed:!1},{value:"'span'",computed:!1},{value:"'link'",computed:!1},{value:"'button'",computed:!1}]},required:!1},color:{description:"",type:{name:"enum",value:[{value:"'darkGray'",computed:!1},{value:"'mediumGray'",computed:!1},{value:"'lightGray'",computed:!1},{value:"'purple'",computed:!1},{value:"'purpleRgba40'",computed:!1},{value:"'purpleRgba24'",computed:!1},{value:"'red'",computed:!1},{value:"'white'",computed:!1},{value:"'whiteRgba48'",computed:!1},{value:"'whiteRgba64'",computed:!1}]},required:!1},size:{description:"",type:{name:"enum",value:[{value:"'display1'",computed:!1},{value:"'display2'",computed:!1},{value:"'header'",computed:!1},{value:"'main'",computed:!1},{value:"'secondary'",computed:!1},{value:"'subheader'",computed:!1},{value:"'tag'",computed:!1}]},required:!1},smallCaps:{description:"",type:{name:"bool"},required:!1},nowrap:{description:"",type:{name:"bool"},required:!1},leftSpacer:{description:"",type:{name:"bool"},required:!1},isPromo:{description:"",type:{name:"bool"},required:!1},ellipsis:{description:"",type:{name:"bool"},required:!1},href:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},indent:{description:"",type:{name:"enum",value:[{value:"'4px'",computed:!1},{value:"'8px'",computed:!1},{value:"'16px'",computed:!1},{value:"'24px'",computed:!1},{value:"'32px'",computed:!1},{value:"'48px'",computed:!1},{value:"'64px'",computed:!1},{value:"'adaptive-8-16'",computed:!1},{value:"'adaptive-16-24'",computed:!1},{value:"'adaptive-24-32'",computed:!1},{value:"'adaptive-32-48'",computed:!1}]},required:!1},lineThrough:{description:"",type:{name:"bool"},required:!1},textAlign:{description:"",type:{name:"string"},required:!1},flexShrink:{description:"",type:{name:"string"},required:!1}}}},"./src/theme/colors.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={codGray:"#141414",red:"#ff4778",lightRed:"#ff7398",superLightRed:"#ffcbd9",purple:"#7633ff",lightPurple:"#9864ff",superLightPurple:"#d9c6ff",purpleLight08:"#f4efff",baseColor:"#141414",mediumGray:"#77767a",lightGray:"#9f9da3",superLightGray:"#f3f2f5",purpleRgba08:"rgba(118, 51, 255, 0.08)",purpleRgba16:"rgba(118, 51, 255, 0.16)",purpleRgba24:"rgba(118, 51, 255, 0.24)",purpleRgba40:"rgba(118, 51, 255, 0.4)",white:"#ffffff",whiteRgba24:"rgba(255, 255, 255, 0.24)",whiteRgba48:"rgba(255, 255, 255, 0.48)",whiteRgba64:"rgba(255, 255, 255, 0.64)",whiteRgba96:"rgba(255, 255, 255, 0.96)",greyRgba28:"rgba(159, 157, 163, 0.28)",wildWatermelon12:"rgba(255, 71, 120, 0.12)",wildWatermelon40:"rgba(255, 71, 120, 0.4)",wildWatermelon08:"rgba(255, 71, 120, 0.08)",lightGrayShadow:"rgba(157, 161, 163, 0.24)",porcelain:"#f4f6f7",codGray02:"rgba(20, 20, 20, 0.02)",codGray03:"rgba(20, 20, 20, 0.03)",codGray04:"rgba(20, 20, 20, 0.04)",codGray06:"rgba(20, 20, 20, 0.06)",codGray12:"rgba(20, 20, 20, 0.12)",codGray16:"rgba(20, 20, 20, 0.16)",codGray32:"rgba(20, 20, 20, 0.32)",oceanBlue01:"linear-gradient(180deg, #7F2FFF 0.53%, #4D69FF 100%)"}}}]);