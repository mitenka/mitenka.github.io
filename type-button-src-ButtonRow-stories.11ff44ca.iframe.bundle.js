(self.webpackChunkpaysend_3_0=self.webpackChunkpaysend_3_0||[]).push([[873],{"./packages/type-button/src/ButtonRow.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Primary$parameters,_Primary$parameters2,_ButtonRow__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/type-button/src/ButtonRow.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_ButtonRow__WEBPACK_IMPORTED_MODULE_1__.V,title:"Widgets/ButtonRow"};var Primary={args:{widget:{data:{label:"ButtonRow"},options:{hierarchy:"primary",iconName:"ic_check",iconHierarchy:"primary",iconVariant:"simple"}},hooks:{useButton:function useButton(){}}},render:function render(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ButtonRow__WEBPACK_IMPORTED_MODULE_1__.V,Object.assign({as:"button",isWidget:!0},args))}};Primary.parameters=Object.assign({},Primary.parameters,{docs:Object.assign({},null==(_Primary$parameters=Primary.parameters)?void 0:_Primary$parameters.docs,{source:Object.assign({originalSource:"{\n  args: {\n    widget: {\n      data: {\n        label: 'ButtonRow'\n      },\n      options: {\n        hierarchy: 'primary',\n        iconName: 'ic_check',\n        iconHierarchy: 'primary',\n        iconVariant: 'simple'\n      }\n    },\n    hooks: {\n      useButton: () => undefined\n    }\n  },\n  render: args => <ButtonRow as=\"button\" isWidget={true} {...args} />\n}"},null==(_Primary$parameters2=Primary.parameters)||null==(_Primary$parameters2=_Primary$parameters2.docs)?void 0:_Primary$parameters2.source)})});var __namedExportsOrder=["Primary"]},"./packages/type-button/src/ButtonRow.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>ButtonRow});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"),objectWithoutPropertiesLoose_default=__webpack_require__.n(objectWithoutPropertiesLoose),ui=__webpack_require__("./packages/ui/index.tsx"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),theme=__webpack_require__("./packages/theme/index.tsx"),getColor=function getColor(props){return"destructive"===props.hierarchy?props.disabled?props.theme.pink_40_lc:props.theme.pink_100:props.disabled?props.theme.purple_40_tr:props.theme.purple_100},CommonButtonRow=(0,styled_components_browser_esm.ZP)(dist.rU).withConfig({displayName:"ButtonRow__CommonButtonRow",componentId:"hcsfhj-0"})(["font-family:",";border:none;width:100%;box-sizing:border-box;display:inline-flex;align-items:center;outline:none;text-align:",";overflow:hidden;text-overflow:ellipsis;white-space:nowrap;position:relative;vertical-align:top;cursor:",";pointer-events:auto;font-size:17px;line-height:24px;border-radius:0;padding:",";background:",";color:",";&:link,&:visited,&:focus{color:",";}&:hover{background:",";}&:active,&:focus{background:",";}"],theme.Rq.regular,(function(props){return"center"===props.alignment?"center":"left"}),(function(props){return props.disabled?"default":"pointer"}),(function(props){return function getPadding(props){return props.hasIcon?"large"===props.size?"16px 16px 16px 24px":"16px 24px":"large"===props.size?"24px 16px 24px 24px":"16px 24px"}(props)}),(function(props){return props.theme.white_0_tr}),(function(props){return getColor(props)}),(function(props){return getColor(props)}),(function(props){return props.disabled?props.theme.white_0_tr:"destructive"===props.hierarchy?props.theme.pink_16_tr:props.theme.purple_16_tr}),(function(props){return props.disabled?props.theme.white_0_tr:"destructive"===props.hierarchy?props.theme.pink_8_tr:props.theme.purple_8_tr})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["widget","hooks"];function ButtonRow(_ref){var _widget$data,_widget$options,_widget$options2,_widget$options$size,_widget$options3,_widget$options4,_widget$options5,_widget$options6,widget=_ref.widget,hooks=_ref.hooks,props=objectWithoutPropertiesLoose_default()(_ref,_excluded),label=props.label||(null==widget||null==(_widget$data=widget.data)?void 0:_widget$data.label),hook=hooks.useButton(widget),iconName=null==widget||null==(_widget$options=widget.options)?void 0:_widget$options.iconName;return(0,jsx_runtime.jsxs)(CommonButtonRow,{as:props.as,hierarchy:null==widget||null==(_widget$options2=widget.options)?void 0:_widget$options2.hierarchy,isEnabled:null==hook?void 0:hook.isEnabled,size:null!=(_widget$options$size=null==widget||null==(_widget$options3=widget.options)?void 0:_widget$options3.size)?_widget$options$size:"small",alignment:null==widget||null==(_widget$options4=widget.options)?void 0:_widget$options4.alignment,hasIcon:iconName,onClick:null==hook?void 0:hook.handleClick,children:[iconName&&(0,jsx_runtime.jsx)(ui.pv,{iconName,rightMargin:!0,iconHierarchy:null==widget||null==(_widget$options5=widget.options)?void 0:_widget$options5.iconHierarchy,iconVariant:null==widget||null==(_widget$options6=widget.options)?void 0:_widget$options6.iconVariant}),label]})}ButtonRow.displayName="ButtonRow";try{ButtonRow.displayName="ButtonRow",ButtonRow.__docgenInfo={description:"",displayName:"ButtonRow",props:{isWidget:{defaultValue:null,description:"",name:"isWidget",required:!0,type:{name:"boolean"}},hierarchy:{defaultValue:null,description:"",name:"hierarchy",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"destructive"'}]}},iconHierarchy:{defaultValue:null,description:"",name:"iconHierarchy",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"destructive"'},{value:'"emphasised"'}]}},iconVariant:{defaultValue:null,description:"",name:"iconVariant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"simple"'}]}},iconName:{defaultValue:null,description:"",name:"iconName",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},widget:{defaultValue:null,description:"",name:"widget",required:!1,type:{name:"TWidget | ({ data?: TData; options?: TOptions; id?: WidgetEnum; uid?: string; } & TWidget)"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},hooks:{defaultValue:null,description:"",name:"hooks",required:!0,type:{name:"THooks"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/type-button/src/ButtonRow.tsx#ButtonRow"]={docgenInfo:ButtonRow.__docgenInfo,name:"ButtonRow",path:"packages/type-button/src/ButtonRow.tsx#ButtonRow"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":module=>{module.exports=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target},module.exports.__esModule=!0,module.exports.default=module.exports}}]);