"use strict";(self.webpackChunkssr=self.webpackChunkssr||[]).push([[9155],{"./src/stories/common/CardSmall.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardSmall_stories});__webpack_require__("./node_modules/react/index.js");var StoreDecorator=__webpack_require__("./.storybook/StoreDecorator.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styles=__webpack_require__("./src/components/common/Card/styles.jsx"),PaysendLogo=__webpack_require__("./src/components/common/PaysendLogo/PaysendLogo.jsx"),Text=__webpack_require__("./src/components/common/Text/Text.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CardSmall=props=>(0,jsx_runtime.jsxs)(styles.nV,{isPurple:props.isPurple,isLinked:props.isLinked,children:[(0,jsx_runtime.jsx)(PaysendLogo.Q,{color:props.isPurple?"white":"darkGray"}),(0,jsx_runtime.jsx)(Text.x,{color:props.isPurple?"whiteRgba48":"mediumGray",children:props.cardText})]});var _Example$parameters,_Example$parameters2;CardSmall.displayName="CardSmall",CardSmall.propTypes={isPurple:prop_types_default().bool,cardText:prop_types_default().string,isLinked:prop_types_default().bool},CardSmall.__docgenInfo={description:"",methods:[],displayName:"CardSmall",props:{isPurple:{description:"",type:{name:"bool"},required:!1},cardText:{description:"",type:{name:"string"},required:!1},isLinked:{description:"",type:{name:"bool"},required:!1}}};const CardSmall_stories={title:"Common Components/CardSmall",component:CardSmall,decorators:[StoreDecorator.Z]},Template=args=>(0,jsx_runtime.jsx)(CardSmall,{...args});Template.displayName="Template";const Example=Template.bind({});Example.args={cardText:"plastic",isLinked:!0,isPurple:!0},Example.parameters={...Example.parameters,docs:{...null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs,source:{originalSource:"args => <CardSmall {...args} />",...null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2=_Example$parameters2.docs)||void 0===_Example$parameters2?void 0:_Example$parameters2.source}}};const __namedExportsOrder=["Example"]}}]);