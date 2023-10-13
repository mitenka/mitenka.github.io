"use strict";(self.webpackChunkssr=self.webpackChunkssr||[]).push([[5971],{"./src/stories/promo/sections/PromoCountriesColumns.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PromoCountriesColumns_stories});__webpack_require__("./node_modules/react/index.js");var FlagIcon=__webpack_require__("./src/components/common/FlagIcon/FlagIcon.jsx"),styles=__webpack_require__("./src/components/no-auth/common/PromoCountries/styles.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PromoCountriesColumns=props=>(0,jsx_runtime.jsx)(styles.nh,{children:props.children});PromoCountriesColumns.displayName="PromoCountriesColumns",PromoCountriesColumns.__docgenInfo={description:"",methods:[],displayName:"PromoCountriesColumns"};var _Example$parameters,_Example$parameters2,PromoText=__webpack_require__("./src/components/no-auth/common/PromoText/PromoText.jsx"),CountriesArray=__webpack_require__("./src/stories/promo/CountriesArray.jsx");const PromoCountriesColumns_stories={title:"Landing Sections/PromoCountriesColumns",component:PromoCountriesColumns},List=args=>(0,jsx_runtime.jsx)(PromoCountriesColumns,{children:Object.keys(CountriesArray.Z).map(((key,index)=>(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsxs)(styles.jh,{href:"#",children:[(0,jsx_runtime.jsx)(styles.vt,{children:(0,jsx_runtime.jsx)(FlagIcon.U,{name:key,...args})}),(0,jsx_runtime.jsx)(PromoText.n,{tag:"div",variant:"subheader",color:"gray40",ellipsis:!0,nowrap:!0,children:CountriesArray.Z[key]})]})},index)))});List.displayName="List";const Example=List.bind({});Example.args={size:"24px"},Example.parameters={...Example.parameters,docs:{...null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs,source:{originalSource:"args => <PromoCountriesColumns>\n        {Object.keys(countries).map((key, index) => {\n    return <li key={index}>\n                    <CountryLink href=\"#\">\n                        <FlagWrapper>\n                            <FlagIcon name={key} {...args} />\n                        </FlagWrapper>\n                        <PromoText tag={'div'} variant={'subheader'} color={'gray40'} ellipsis nowrap>\n                            {countries[key]}\n                        </PromoText>\n                    </CountryLink>\n                </li>;\n  })}\n    </PromoCountriesColumns>",...null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2=_Example$parameters2.docs)||void 0===_Example$parameters2?void 0:_Example$parameters2.source}}};const __namedExportsOrder=["Example"]},"./src/components/no-auth/common/PromoCountries/styles.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i6:()=>CountryName,jh:()=>CountryLink,nh:()=>Countries,vt:()=>FlagWrapper});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme_promoColors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/theme/promoColors.jsx"),theme_promoMedia__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/promoMedia.jsx"),_PromoText_PromoText__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/no-auth/common/PromoText/PromoText.jsx");const Countries=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.ul.withConfig({displayName:"styles__Countries",componentId:"sc-grluyc-0"})(["list-style-type:none;margin:0 0 32px 0;padding:0;& > li{margin:0;padding:0;white-space:nowrap;","{-webkit-column-break-inside:avoid;break-inside:avoid;}}","{column-count:2;column-gap:85px;margin:0 0 48px 0;}","{column-count:3;column-gap:80px;margin:0 0 64px 0;}"],theme_promoMedia__WEBPACK_IMPORTED_MODULE_1__.Z.tablet744,theme_promoMedia__WEBPACK_IMPORTED_MODULE_1__.Z.tablet744,theme_promoMedia__WEBPACK_IMPORTED_MODULE_1__.Z.desktop1440),CountryName=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)(_PromoText_PromoText__WEBPACK_IMPORTED_MODULE_2__.n).withConfig({displayName:"styles__CountryName",componentId:"sc-grluyc-1"})([""]),CountryLink=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.a.withConfig({displayName:"styles__CountryLink",componentId:"sc-grluyc-2"})(["display:flex;align-items:center;outline:none;padding-bottom:8px;padding-top:8px;text-decoration:none;&:link,&:visited{color:",";}&:hover{","{color:",";}}"],theme_promoColors__WEBPACK_IMPORTED_MODULE_0__.Z.gray40,CountryName,theme_promoColors__WEBPACK_IMPORTED_MODULE_0__.Z.primary),FlagWrapper=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.span.withConfig({displayName:"styles__FlagWrapper",componentId:"sc-grluyc-3"})(["margin-right:24px;"])}}]);