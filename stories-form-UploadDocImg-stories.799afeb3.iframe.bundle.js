"use strict";(self.webpackChunkssr=self.webpackChunkssr||[]).push([[7808],{"./src/stories/form/UploadDocImg.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UploadDocImg_stories});__webpack_require__("./node_modules/react/index.js");var StoreDecorator=__webpack_require__("./.storybook/StoreDecorator.js"),Row=__webpack_require__("./src/components/common/Layout/Row.jsx"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),appAction=__webpack_require__("./src/actions/appAction.js"),formAction=__webpack_require__("./src/actions/formAction.js"),AddPhoto=__webpack_require__("./src/components/common/AddPhoto/AddPhoto.jsx"),Text=__webpack_require__("./src/components/common/Text/Text.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UploadDocImg=props=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Row.X,{indent:"24px",children:(0,jsx_runtime.jsx)(Text.x,{size:"subheader",color:"mediumGray",children:props.field.placeholder})}),(0,jsx_runtime.jsx)(AddPhoto.Z,{field:props.field,formName:props.formName})]},`doc_${props.field.name}`);UploadDocImg.displayName="UploadDocImg";UploadDocImg.__docgenInfo={description:"",methods:[],displayName:"UploadDocImg"};const form_UploadDocImg=(0,es.$j)(((_ref,ownProps)=>{let{form,messages}=_ref;return{fields:form[ownProps.formName].fields}}),{changeFormField:formAction.Qd,changeFormFieldValue:formAction.Az,toggleSpinner:appAction.Qu,togglePopup:appAction.zI})(UploadDocImg);var _Example$parameters,_Example$parameters2;const UploadDocImg_stories={title:"Form Components/UploadDocImg",component:form_UploadDocImg,decorators:[StoreDecorator.Z],parameters:{state:{form:{UploadDocImgForm:{fields:{}}}}}},Template=args=>(0,jsx_runtime.jsx)(Row.X,{indent:"24px",children:(0,jsx_runtime.jsx)(form_UploadDocImg,{formName:"UploadDocImgForm",...args})});Template.displayName="Template";const Example=Template.bind({});Example.args={field:{placeholder:"Upload your file"}},Example.parameters={...Example.parameters,docs:{...null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs,source:{originalSource:"args => <Row indent=\"24px\">\n        <UploadDocImg formName={'UploadDocImgForm'} {...args} />\n    </Row>",...null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2=_Example$parameters2.docs)||void 0===_Example$parameters2?void 0:_Example$parameters2.source}}};const __namedExportsOrder=["Example"]}}]);