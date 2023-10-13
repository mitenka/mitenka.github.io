"use strict";(self.webpackChunkssr=self.webpackChunkssr||[]).push([[6005],{"./src/stories/layout/FixedBottomPanel.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Example$parameters,_Example$parameters2,components_common_Button_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Button/Button.jsx"),components_common_Layout_FixedBottomPanel_FixedBottomPanel__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/Layout/FixedBottomPanel/FixedBottomPanel.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Layout Components/FixedBottomPanel",component:components_common_Layout_FixedBottomPanel_FixedBottomPanel__WEBPACK_IMPORTED_MODULE_2__.C},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{minHeight:"10vh"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(components_common_Layout_FixedBottomPanel_FixedBottomPanel__WEBPACK_IMPORTED_MODULE_2__.C,{...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(components_common_Button_Button__WEBPACK_IMPORTED_MODULE_1__.z,{caption:"Fixed button",type:"link",variant:"primary"})})});Template.displayName="Template";const Example=Template.bind({});Example.args={isRightAligned:!0},Example.parameters={...Example.parameters,docs:{...null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs,source:{originalSource:"args => <div style={{\n  minHeight: '10vh'\n}}>\n        <FixedBottomPanel {...args}>\n            <Button caption={'Fixed button'} type={'link'} variant={'primary'} />\n        </FixedBottomPanel>\n    </div>",...null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2=_Example$parameters2.docs)||void 0===_Example$parameters2?void 0:_Example$parameters2.source}}};const __namedExportsOrder=["Example"]},"./src/components/common/Button/Button.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colors=__webpack_require__("./src/theme/colors.js"),fonts=__webpack_require__("./src/theme/fonts.js"),media=__webpack_require__("./src/theme/media.js");const disabledLinearGradient=`linear-gradient(0deg, ${colors.Z.purpleRgba24}, ${colors.Z.purpleRgba24}), ${colors.Z.white}`,CommonCss=(0,styled_components_browser_esm.iv)(["font-family:",";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;border:none;width:",";box-sizing:border-box;display:",";outline:none;text-align:",";overflow:hidden;text-overflow:ellipsis;white-space:nowrap;position:relative;vertical-align:top;cursor:",";pointer-events:auto;font-size:17px;line-height:24px;border-radius:",";padding:",";color:",";background:",";box-shadow:",";visibility:",";margin:",";","{font-size:20px;line-height:32px;border-radius:",";padding:",";margin:",";width:",";}&:link,&:visited,&:focus{color:",";}&:hover,&:active,&:focus{background:",";color:",";}"],fonts.Z.regular,(props=>(props=>"row"===props.variant&&props.negativeMargin?"calc(100% + 48px)":"row"===props.variant?"100%":"auto")(props)),(props=>"hidden"===props.variant?"none":"inline-block"),(props=>"row"!==props.variant||props.textCenter?"center":"left"),(props=>props.disabled?"default":"pointer"),(props=>(props=>"row"===props.variant?"0":"tight"===props.size?"32px":"56px")(props)),(props=>(props=>"row"===props.variant?"tight"===props.size?"16px 24px":"24px":"tight"===props.size?"8px 16px":"16px 32px")(props)),(props=>(props=>{switch(props.variant){case"secondary":case"row":return props.disabled?colors.Z.purpleRgba40:colors.Z.purple;case"tertiary":return props.isInverted?colors.Z.white:props.disabled&&!props.isInverted?colors.Z.lightGray:colors.Z.baseColor;case"error":return props.disabled?colors.Z.wildWatermelon40:colors.Z.red;default:return colors.Z.white}})(props)),(props=>(props=>"primary"!==props.variant&&props.variant?"danger"===props.variant?props.disabled?colors.Z.superLightRed:colors.Z.red:props.isInverted?"transparent":colors.Z.white:props.disabled?disabledLinearGradient:colors.Z.purple)(props)),(props=>(props=>{const raised=props.raised&&!props.disabled;return"primary"!==props.variant&&props.variant?"danger"===props.variant?raised?`0 8px 24px ${colors.Z.wildWatermelon12}`:"none":raised?`0 0 1px ${colors.Z.codGray12}, 0 0 8px ${colors.Z.codGray04}, 0 8px 8px ${colors.Z.codGray04}`:"none":raised?`0px 8px 8px ${colors.Z.purpleRgba16}`:"none"})(props)),(props=>props.hidden?"hidden":"visible"),(props=>props.negativeMargin?"0 -24px":null),media.Z.desktop1920,(props=>(props=>"row"===props.variant?"0":"tight"===props.size?"56px":"72px")(props)),(props=>(props=>"row"===props.variant?"tight"===props.size?"20px 32px":"32px":"tight"===props.size?"12px 24px":"20px 40px")(props)),(props=>props.negativeMargin?"0 -32px":null),(props=>(props=>"row"===props.variant&&props.negativeMargin?"calc(100% + 64px)":"row"===props.variant?"100%":"auto")(props)),(props=>(props=>{switch(props.variant){case"secondary":case"row":return props.disabled?colors.Z.purpleRgba40:colors.Z.purple;case"tertiary":return props.isInverted?colors.Z.white:props.disabled&&!props.isInverted?colors.Z.lightGray:colors.Z.baseColor;case"error":return props.disabled?colors.Z.wildWatermelon40:colors.Z.red;default:return colors.Z.white}})(props)),(props=>(props=>{switch(props.variant){case"secondary":return props.disabled?colors.Z.white:colors.Z.purpleLight08;case"tertiary":return props.isInverted?"transparent":props.disabled&&!props.isInverted?colors.Z.white:colors.Z.porcelain;case"error":return props.disabled?colors.Z.white:colors.Z.wildWatermelon08;case"danger":return props.disabled?colors.Z.superLightRed:colors.Z.lightRed;case"row":return props.disabled?colors.Z.white:colors.Z.purpleRgba08;default:return props.disabled?disabledLinearGradient:`linear-gradient(0deg, ${colors.Z.whiteRgba24}, ${colors.Z.whiteRgba24}), ${colors.Z.purple}`}})(props)),(props=>"tertiary"===props.variant&&props.isInverted?colors.Z.whiteRgba48:null)),CommonButton=styled_components_browser_esm.ZP.button.withConfig({displayName:"styles__CommonButton",componentId:"sc-xhgykq-0"})(["",""],CommonCss),LinkButton=styled_components_browser_esm.ZP.a.withConfig({displayName:"styles__LinkButton",componentId:"sc-xhgykq-1"})(["",""],CommonCss),ReactLinkButton=(0,styled_components_browser_esm.ZP)(dist.rU).withConfig({displayName:"styles__ReactLinkButton",componentId:"sc-xhgykq-2"})(["",""],CommonCss);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=react.forwardRef(((props,ref)=>"link"===props.type?(0,jsx_runtime.jsx)(LinkButton,{ref,...props,children:props.caption}):"reactLink"===props.type?(0,jsx_runtime.jsx)(ReactLinkButton,{ref,...props,children:props.caption}):(0,jsx_runtime.jsx)(CommonButton,{ref,...props,children:props.caption})));Button.propTypes={type:prop_types_default().oneOf(["button","submit","link","reactLink"]),variant:prop_types_default().oneOf(["primary","secondary","tertiary","error","danger","hidden","row"]),size:prop_types_default().oneOf(["tight","fit"]),raised:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().bool]),disabled:prop_types_default().bool,isInverted:prop_types_default().bool,href:prop_types_default().string,to:prop_types_default().string,target:prop_types_default().string,title:prop_types_default().string,tabIndex:prop_types_default().string,form:prop_types_default().string,caption:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().element]),dataTestId:prop_types_default().string,negativeMargin:prop_types_default().bool,onClick:prop_types_default().func,textCenter:prop_types_default().bool},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{description:"",type:{name:"enum",value:[{value:"'button'",computed:!1},{value:"'submit'",computed:!1},{value:"'link'",computed:!1},{value:"'reactLink'",computed:!1}]},required:!1},variant:{description:"",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'tertiary'",computed:!1},{value:"'error'",computed:!1},{value:"'danger'",computed:!1},{value:"'hidden'",computed:!1},{value:"'row'",computed:!1}]},required:!1},size:{description:"",type:{name:"enum",value:[{value:"'tight'",computed:!1},{value:"'fit'",computed:!1}]},required:!1},raised:{description:"",type:{name:"union",value:[{name:"string"},{name:"bool"}]},required:!1},disabled:{description:"",type:{name:"bool"},required:!1},isInverted:{description:"",type:{name:"bool"},required:!1},href:{description:"",type:{name:"string"},required:!1},to:{description:"",type:{name:"string"},required:!1},target:{description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1},tabIndex:{description:"",type:{name:"string"},required:!1},form:{description:"",type:{name:"string"},required:!1},caption:{description:"",type:{name:"union",value:[{name:"string"},{name:"element"}]},required:!1},dataTestId:{description:"",type:{name:"string"},required:!1},negativeMargin:{description:"",type:{name:"bool"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},textCenter:{description:"",type:{name:"bool"},required:!1}}}},"./src/components/common/Layout/FixedBottomPanel/FixedBottomPanel.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>FixedBottomPanel});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),media=__webpack_require__("./src/theme/media.js"),zIndex=__webpack_require__("./src/theme/zIndex.js");const Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"styles__Container",componentId:"sc-1vvd2yf-0"})(["position:fixed;bottom:",";left:0;right:0;height:0;pointer-events:none;z-index:",";","{bottom:",";}","{bottom:",";left:",";}"],(props=>props.isPressedAboveMenu||props.forSpinner?"72px":"24px"),zIndex.Z.bottomPanelIndex,media.Z.tablet720,(props=>(props=>props.isPressedAboveMenu?"128px":props.forSpinner?"72px":"24px")(props)),media.Z.desktop1224,(props=>props.isPressedAboveMenu||props.forSpinner?"72px":"24px"),(props=>props.fullwidth?"360px":null)),Inner=styled_components_browser_esm.ZP.div.withConfig({displayName:"styles__Inner",componentId:"sc-1vvd2yf-1"})(["margin:0 auto;padding:0 24px;position:absolute;right:0;left:0;bottom:0;display:flex;justify-content:",";box-sizing:border-box;max-width:528px;","{padding:",";max-width:",";}","{max-width:",";}","{margin:",";}"],(props=>props.isRightAligned?"flex-end":"center"),media.Z.tablet720,(props=>props.fullwidth?"0 144px":"0 24px"),(props=>props.fullwidth?"100%":"552px"),media.Z.tablet1080,(props=>props.fullwidth?"1080px":"840px"),media.Z.desktop1224,(props=>props.fullwidth?"0":"0 auto"));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FixedBottomPanel=props=>(0,jsx_runtime.jsx)(Container,{isPressedAboveMenu:props.isPressedAboveMenu,forSpinner:props.forSpinner,fullwidth:props.fullwidth,children:(0,jsx_runtime.jsx)(Inner,{isRightAligned:props.isRightAligned,fullwidth:props.fullwidth,children:props.children})});FixedBottomPanel.displayName="FixedBottomPanel",FixedBottomPanel.propTypes={isPressedAboveMenu:prop_types_default().bool,forSpinner:prop_types_default().bool,isRightAligned:prop_types_default().bool,fullwidth:prop_types_default().bool,children:prop_types_default().oneOfType([prop_types_default().element,prop_types_default().arrayOf(prop_types_default().element)])},FixedBottomPanel.__docgenInfo={description:"",methods:[],displayName:"FixedBottomPanel",props:{isPressedAboveMenu:{description:"",type:{name:"bool"},required:!1},forSpinner:{description:"",type:{name:"bool"},required:!1},isRightAligned:{description:"",type:{name:"bool"},required:!1},fullwidth:{description:"",type:{name:"bool"},required:!1},children:{description:"",type:{name:"union",value:[{name:"element"},{name:"arrayOf",value:{name:"element"}}]},required:!1}}}},"./src/theme/colors.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={codGray:"#141414",red:"#ff4778",lightRed:"#ff7398",superLightRed:"#ffcbd9",purple:"#7633ff",lightPurple:"#9864ff",superLightPurple:"#d9c6ff",purpleLight08:"#f4efff",baseColor:"#141414",mediumGray:"#77767a",lightGray:"#9f9da3",superLightGray:"#f3f2f5",purpleRgba08:"rgba(118, 51, 255, 0.08)",purpleRgba16:"rgba(118, 51, 255, 0.16)",purpleRgba24:"rgba(118, 51, 255, 0.24)",purpleRgba40:"rgba(118, 51, 255, 0.4)",white:"#ffffff",whiteRgba24:"rgba(255, 255, 255, 0.24)",whiteRgba48:"rgba(255, 255, 255, 0.48)",whiteRgba64:"rgba(255, 255, 255, 0.64)",whiteRgba96:"rgba(255, 255, 255, 0.96)",greyRgba28:"rgba(159, 157, 163, 0.28)",wildWatermelon12:"rgba(255, 71, 120, 0.12)",wildWatermelon40:"rgba(255, 71, 120, 0.4)",wildWatermelon08:"rgba(255, 71, 120, 0.08)",lightGrayShadow:"rgba(157, 161, 163, 0.24)",porcelain:"#f4f6f7",codGray02:"rgba(20, 20, 20, 0.02)",codGray03:"rgba(20, 20, 20, 0.03)",codGray04:"rgba(20, 20, 20, 0.04)",codGray06:"rgba(20, 20, 20, 0.06)",codGray12:"rgba(20, 20, 20, 0.12)",codGray16:"rgba(20, 20, 20, 0.16)",codGray32:"rgba(20, 20, 20, 0.32)",oceanBlue01:"linear-gradient(180deg, #7F2FFF 0.53%, #4D69FF 100%)"}},"./src/theme/fonts.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={bold:'GerberaBold,   "Segoe UI", "Droid Sans", Roboto, Helvetica, Arial, sans-serif',black:'GerberaBlack,  "Segoe UI", "Droid Sans", Roboto, Helvetica, Arial, sans-serif',light:'GerberaLight,  "Segoe UI", "Droid Sans", Roboto, Helvetica, Arial, sans-serif',medium:'GerberaMedium, "Segoe UI", "Droid Sans", Roboto, Helvetica, Arial, sans-serif',regular:'GerberaRegular,"Segoe UI", "Droid Sans", Roboto, Helvetica, Arial, sans-serif'}},"./src/theme/media.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>theme_media});const breakpoints=["320px","481px","648px","720px","937px","1080px","1224px","1296px","1352px","1440px","1920px"];breakpoints.mobile320=breakpoints[0],breakpoints.mobile481=breakpoints[1],breakpoints.tablet648=breakpoints[2],breakpoints.tablet720=breakpoints[3],breakpoints.tablet937=breakpoints[4],breakpoints.tablet1080=breakpoints[5],breakpoints.desktop1224=breakpoints[6],breakpoints.desktop1296=breakpoints[7],breakpoints.desktop1352=breakpoints[8],breakpoints.desktop1440=breakpoints[9],breakpoints.desktop1920=breakpoints[10];const theme_breakpoints=breakpoints,theme_media={mobile320:`@media screen and (min-width: ${theme_breakpoints.mobile320})`,mobile481:`@media screen and (min-width: ${theme_breakpoints.mobile481})`,tablet648:`@media screen and (min-width: ${theme_breakpoints.tablet648})`,tablet720:`@media screen and (min-width: ${theme_breakpoints.tablet720})`,tablet937:`@media screen and (min-width: ${theme_breakpoints.tablet937})`,tablet1080:`@media screen and (min-width: ${theme_breakpoints.tablet1080})`,desktop1224:`@media screen and (min-width: ${theme_breakpoints.desktop1224})`,desktop1296:`@media screen and (min-width: ${theme_breakpoints.desktop1296})`,desktop1352:`@media screen and (min-width: ${theme_breakpoints.desktop1352})`,desktop1440:`@media screen and (min-width: ${theme_breakpoints.desktop1440})`,desktop1920:`@media screen and (min-width: ${theme_breakpoints.desktop1920})`,retina1352:`@media screen and (min-width: ${theme_breakpoints.desktop1352}) and (-webkit-min-device-pixel-ratio: 2), screen and (${theme_breakpoints.desktop1352}) and (min-resolution: 192dpi)`}},"./src/theme/zIndex.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={navTopMenuOverlay:"-1",bottomPanelIndex:"2",landingDropdown:"3",navTopMenu:"4",leftMenuIndex:"5",navBar:"5",modalIndex:"6",chatIndex:"7",spinnerOverlay:"100",promoBanner:"10"}}}]);