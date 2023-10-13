"use strict";(self.webpackChunkssr=self.webpackChunkssr||[]).push([[7414],{"./src/stories/promo/sections/SingleIconSection.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SingleIconSection_stories});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),promoMedia=__webpack_require__("./src/theme/promoMedia.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Icons=styled_components_browser_esm.ZP.ul.withConfig({displayName:"SingleIconSection__Icons",componentId:"sc-9cuemh-0"})(["list-style-type:none;margin:0 auto;padding-top:32px;text-align:center;","{padding-top:48px;}","{padding-top:64px;}"],promoMedia.Z.tablet744,promoMedia.Z.desktop1440),SingleIconSection=props=>(0,jsx_runtime.jsx)(Icons,{children:Array.isArray(props.data)&&props.data.filter((item=>null!==item)).map((item=>(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("img",{alt:item.alternativeText,src:item.url,height:item.height,width:item.width})},item.id)))});var _Example$parameters,_Example$parameters2;SingleIconSection.displayName="SingleIconSection",SingleIconSection.propTypes={data:prop_types_default().array},SingleIconSection.__docgenInfo={description:"",methods:[],displayName:"SingleIconSection",props:{data:{description:"",type:{name:"array"},required:!1}}};const SingleIconSection_stories={title:"Landing Sections/SingleIconSection",component:SingleIconSection},icon=[{id:1,alternativeText:"Paysend Plus logo",url:"https://cloud.paysend.com/strapi/test/plus_logo_a05041f2e8.svg"}],Template=args=>(0,jsx_runtime.jsx)(SingleIconSection,{...args,data:icon});Template.displayName="Template";const Example=Template.bind({});Example.args={},Example.parameters={...Example.parameters,docs:{...null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs,source:{originalSource:"args => <SingleIconSection {...args} data={icon} />",...null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2=_Example$parameters2.docs)||void 0===_Example$parameters2?void 0:_Example$parameters2.source}}};const __namedExportsOrder=["Example"]},"./src/theme/promoBreakpoints.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const promoBreakpoints=["375px","744px","1440px"];promoBreakpoints.mobile375=promoBreakpoints[0],promoBreakpoints.tablet744=promoBreakpoints[1],promoBreakpoints.desktop1440=promoBreakpoints[2];const __WEBPACK_DEFAULT_EXPORT__=promoBreakpoints},"./src/theme/promoMedia.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _promoBreakpoints__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/theme/promoBreakpoints.jsx");const __WEBPACK_DEFAULT_EXPORT__={mobile375:`@media screen and (min-width: ${_promoBreakpoints__WEBPACK_IMPORTED_MODULE_0__.Z.mobile375})`,retina:"@media screen and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)",tablet744:`@media screen and (min-width: ${_promoBreakpoints__WEBPACK_IMPORTED_MODULE_0__.Z.tablet744})`,retina744:`@media screen and (min-width: ${_promoBreakpoints__WEBPACK_IMPORTED_MODULE_0__.Z.tablet744})   and (-webkit-min-device-pixel-ratio: 2), screen and (${_promoBreakpoints__WEBPACK_IMPORTED_MODULE_0__.Z.tablet744})   and (min-resolution: 192dpi)`,desktop1440:`@media screen and (min-width: ${_promoBreakpoints__WEBPACK_IMPORTED_MODULE_0__.Z.desktop1440})`,retina1440:`@media screen and (min-width: ${_promoBreakpoints__WEBPACK_IMPORTED_MODULE_0__.Z.desktop1440}) and (-webkit-min-device-pixel-ratio: 2), screen and (${_promoBreakpoints__WEBPACK_IMPORTED_MODULE_0__.Z.desktop1440}) and (min-resolution: 192dpi)`}}}]);