"use strict";(self.webpackChunkssr=self.webpackChunkssr||[]).push([[6870],{"./src/stories/common/Badge.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Example$parameters,_Example$parameters2;__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Common Components/Badge",component:__webpack_require__("./src/components/common/Badge/Badge.jsx").C},Example={args:{caption:"This is badge"}};Example.parameters={...Example.parameters,docs:{...null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs,source:{originalSource:"{\n  args: {\n    caption: 'This is badge'\n  }\n}",...null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2=_Example$parameters2.docs)||void 0===_Example$parameters2?void 0:_Example$parameters2.source}}};const __namedExportsOrder=["Example"]},"./src/components/common/Badge/Badge.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Badge});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colors=__webpack_require__("./src/theme/colors.js"),fonts=__webpack_require__("./src/theme/fonts.js"),media=__webpack_require__("./src/theme/media.js");const CommonCss=(0,styled_components_browser_esm.iv)(["background-color:",";border:2px solid ",";color:",";display:inline-block;letter-spacing:0.08em;"],(props=>(props=>{switch(props.variant){case"primary":default:return colors.Z.purple;case"secondary":return colors.Z.purpleRgba08;case"tertiary":return colors.Z.lightGray;case"negative":return colors.Z.red}})(props)),colors.Z.white,(props=>"secondary"===props.variant?colors.Z.purple:colors.Z.white)),TightCss=(0,styled_components_browser_esm.iv)(["border-radius:24px;font-family:",";font-weight:600;font-size:8px;line-height:10px;min-height:10px;min-width:4px;padding:1px 4px;text-transform:uppercase;","{border-radius:20px;font-size:11px;line-height:16px;min-height:16px;padding:0 6px;}"],fonts.Z.bold,media.Z.desktop1920),FitCss=(0,styled_components_browser_esm.iv)(["border-radius:24px;font-family:",";font-weight:600;font-size:8px;line-height:10px;padding:5px 8px;text-transform:uppercase;","{border-radius:30px;font-size:11px;line-height:16px;padding:6px 12px;}"],fonts.Z.bold,media.Z.desktop1920),PriceCss=(0,styled_components_browser_esm.iv)(["border-radius:32px;font-family:",";font-size:14px;line-height:20px;padding:6px 16px;","{border-radius:30px;font-size:17px;line-height:24px;padding:6px 20px;}"],fonts.Z.regular,media.Z.desktop1920),Container=styled_components_browser_esm.ZP.span.withConfig({displayName:"styles__Container",componentId:"sc-yu95qj-0"})([""," "," "," ",""],CommonCss,(props=>"tight"===props.size&&TightCss),(props=>"fit"===props.size&&FitCss),(props=>"price"===props.size&&PriceCss)),Currency=styled_components_browser_esm.ZP.span.withConfig({displayName:"styles__Currency",componentId:"sc-yu95qj-1"})(["font-variant:small-caps;margin-left:0.5ex;"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Badge=props=>(0,jsx_runtime.jsxs)(Container,{variant:props.variant,size:props.size,...props,children:[props.caption,props.currencyValue&&(0,jsx_runtime.jsx)(Currency,{children:props.currencyValue})]});Badge.displayName="Badge",Badge.defaultProps={size:"fit"},Badge.propTypes={size:prop_types_default().oneOf(["fit","tight","price"]),variant:prop_types_default().oneOf(["tertiary","primary","negative","secondary"]),caption:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number]),currencyValue:prop_types_default().string},Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{size:{defaultValue:{value:"'fit'",computed:!1},description:"",type:{name:"enum",value:[{value:"'fit'",computed:!1},{value:"'tight'",computed:!1},{value:"'price'",computed:!1}]},required:!1},variant:{description:"",type:{name:"enum",value:[{value:"'tertiary'",computed:!1},{value:"'primary'",computed:!1},{value:"'negative'",computed:!1},{value:"'secondary'",computed:!1}]},required:!1},caption:{description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},currencyValue:{description:"",type:{name:"string"},required:!1}}}},"./src/theme/colors.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={codGray:"#141414",red:"#ff4778",lightRed:"#ff7398",superLightRed:"#ffcbd9",purple:"#7633ff",lightPurple:"#9864ff",superLightPurple:"#d9c6ff",purpleLight08:"#f4efff",baseColor:"#141414",mediumGray:"#77767a",lightGray:"#9f9da3",superLightGray:"#f3f2f5",purpleRgba08:"rgba(118, 51, 255, 0.08)",purpleRgba16:"rgba(118, 51, 255, 0.16)",purpleRgba24:"rgba(118, 51, 255, 0.24)",purpleRgba40:"rgba(118, 51, 255, 0.4)",white:"#ffffff",whiteRgba24:"rgba(255, 255, 255, 0.24)",whiteRgba48:"rgba(255, 255, 255, 0.48)",whiteRgba64:"rgba(255, 255, 255, 0.64)",whiteRgba96:"rgba(255, 255, 255, 0.96)",greyRgba28:"rgba(159, 157, 163, 0.28)",wildWatermelon12:"rgba(255, 71, 120, 0.12)",wildWatermelon40:"rgba(255, 71, 120, 0.4)",wildWatermelon08:"rgba(255, 71, 120, 0.08)",lightGrayShadow:"rgba(157, 161, 163, 0.24)",porcelain:"#f4f6f7",codGray02:"rgba(20, 20, 20, 0.02)",codGray03:"rgba(20, 20, 20, 0.03)",codGray04:"rgba(20, 20, 20, 0.04)",codGray06:"rgba(20, 20, 20, 0.06)",codGray12:"rgba(20, 20, 20, 0.12)",codGray16:"rgba(20, 20, 20, 0.16)",codGray32:"rgba(20, 20, 20, 0.32)",oceanBlue01:"linear-gradient(180deg, #7F2FFF 0.53%, #4D69FF 100%)"}},"./src/theme/fonts.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={bold:'GerberaBold,   "Segoe UI", "Droid Sans", Roboto, Helvetica, Arial, sans-serif',black:'GerberaBlack,  "Segoe UI", "Droid Sans", Roboto, Helvetica, Arial, sans-serif',light:'GerberaLight,  "Segoe UI", "Droid Sans", Roboto, Helvetica, Arial, sans-serif',medium:'GerberaMedium, "Segoe UI", "Droid Sans", Roboto, Helvetica, Arial, sans-serif',regular:'GerberaRegular,"Segoe UI", "Droid Sans", Roboto, Helvetica, Arial, sans-serif'}},"./src/theme/media.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>theme_media});const breakpoints=["320px","481px","648px","720px","937px","1080px","1224px","1296px","1352px","1440px","1920px"];breakpoints.mobile320=breakpoints[0],breakpoints.mobile481=breakpoints[1],breakpoints.tablet648=breakpoints[2],breakpoints.tablet720=breakpoints[3],breakpoints.tablet937=breakpoints[4],breakpoints.tablet1080=breakpoints[5],breakpoints.desktop1224=breakpoints[6],breakpoints.desktop1296=breakpoints[7],breakpoints.desktop1352=breakpoints[8],breakpoints.desktop1440=breakpoints[9],breakpoints.desktop1920=breakpoints[10];const theme_breakpoints=breakpoints,theme_media={mobile320:`@media screen and (min-width: ${theme_breakpoints.mobile320})`,mobile481:`@media screen and (min-width: ${theme_breakpoints.mobile481})`,tablet648:`@media screen and (min-width: ${theme_breakpoints.tablet648})`,tablet720:`@media screen and (min-width: ${theme_breakpoints.tablet720})`,tablet937:`@media screen and (min-width: ${theme_breakpoints.tablet937})`,tablet1080:`@media screen and (min-width: ${theme_breakpoints.tablet1080})`,desktop1224:`@media screen and (min-width: ${theme_breakpoints.desktop1224})`,desktop1296:`@media screen and (min-width: ${theme_breakpoints.desktop1296})`,desktop1352:`@media screen and (min-width: ${theme_breakpoints.desktop1352})`,desktop1440:`@media screen and (min-width: ${theme_breakpoints.desktop1440})`,desktop1920:`@media screen and (min-width: ${theme_breakpoints.desktop1920})`,retina1352:`@media screen and (min-width: ${theme_breakpoints.desktop1352}) and (-webkit-min-device-pixel-ratio: 2), screen and (${theme_breakpoints.desktop1352}) and (min-resolution: 192dpi)`}}}]);