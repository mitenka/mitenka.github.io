"use strict";(self.webpackChunkssr=self.webpackChunkssr||[]).push([[1343],{"./.storybook/StoreDecorator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>StoreDecorator});var react_redux__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-redux/es/index.js"),redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/redux/es/redux.js"),redux_thunk__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/redux-thunk/es/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function StoreDecorator(Story,context){var _customState$messages;const{parameters}=context,customState=parameters.state;__webpack_require__.g.__isBrowser__=!0,__webpack_require__.g.__localMode__=!1;const initialState={...customState,app:{isShowSpinner:!1,isShowModal:!1,...null==customState?void 0:customState.app},auth:{countryId:"GB",...null==customState?void 0:customState.auth},messages:{pageMessages:{accountsNoConnectionTitle:"No connection",tryAgain:"Try again",...null==customState||null===(_customState$messages=customState.messages)||void 0===_customState$messages?void 0:_customState$messages.pageMessages},jsMessages:{"site.js.validation.valid.error":"Поле заполнено неверно. Повторите ввод."}}},store=(0,redux__WEBPACK_IMPORTED_MODULE_2__.MT)((function reducer(){let state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(arguments.length>1?arguments[1]:void 0).type,state}),initialState,(0,redux__WEBPACK_IMPORTED_MODULE_2__.md)(redux_thunk__WEBPACK_IMPORTED_MODULE_3__.Z));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.VK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_0__.zt,{store,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})})}StoreDecorator.displayName="StoreDecorator",StoreDecorator.__docgenInfo={description:"",methods:[],displayName:"StoreDecorator"}},"./src/actions/formAction.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Az:()=>changeFormFieldValue,DV:()=>updateFields,HU:()=>removeFields,Qd:()=>changeFormField,YK:()=>setFieldVisible,Yq:()=>setFieldError,ZD:()=>setNewForm,zt:()=>scrollToField});__webpack_require__("./src/constants/Constants.js"),__webpack_require__("./src/constants/fieldsName.js"),__webpack_require__("./src/helpers/utils.js");const getClearFieldName=fieldName=>{if(-1===fieldName.indexOf("toValues["))return fieldName;{const m=fieldName.match("toValues\\[(.*)\\]");return m&&m[1]?m[1]:fieldName}},setFieldVisible=function(formName,fieldName){let visible=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return dispatch=>Promise.resolve(dispatch({type:"SET_FIELD_VISIBLE",formName,fieldName,visible}))},scrollToField=(formName,fieldName)=>dispatch=>(dispatch({type:"SCROLL_TO_FIELD",formName,fieldName}),setTimeout((()=>dispatch({type:"SCROLL_TO_FIELD",formName,fieldName:null})),1e3),Promise.resolve()),setFieldError=(formName,fieldName,error)=>dispatch=>Promise.resolve(dispatch({type:"SET_FIELD_ERROR",formName,fieldName:getClearFieldName(fieldName),error})),changeFormField=(formName,field)=>dispatch=>Promise.resolve(dispatch({type:"CHANGE_FIELD",formName,field})),changeFormFieldValue=(formName,value,fieldName)=>dispatch=>Promise.resolve(dispatch({type:"CHANGE_FIELD_VALUE",formName,value,fieldName:getClearFieldName(fieldName)})),setNewForm=function(formName){let fields=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},action=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",visibleFields=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return dispatch=>Promise.resolve(dispatch({type:"SET_NEW_FORM",formName,fields,action,visibleFields}))},updateFields=function(formName){let fields=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},newfields={};return Array.isArray(fields)?fields.forEach((f=>{newfields[f.name]=f})):newfields=fields,dispatch=>Promise.resolve(dispatch({type:"UPDATE_FIELDS",formName,fields:newfields}))},removeFields=function(formName){let fieldNames=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return dispatch=>Promise.resolve(dispatch({type:"REMOVE_FIELD",formName,fieldNames}))}},"./src/components/common/AddPhoto/AddPhoto.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>AddPhoto_AddPhoto});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),appAction=__webpack_require__("./src/actions/appAction.js"),Row=__webpack_require__("./src/components/common/Layout/Row.jsx"),ComplexPopup=__webpack_require__("./src/components/common/Popup/ComplexPopup.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Image=styled_components_browser_esm.ZP.img.withConfig({displayName:"FileUploadPopup__Image",componentId:"sc-1n1r622-0"})(["max-width:100%;"]),FileUploadPopup=props=>{var _props$file;return(0,jsx_runtime.jsx)(ComplexPopup.Z,{primaryButtonText:props.send,onPrimaryButtonClick:props.uploadFile,secondaryButtonText:props.cancel,onSecondaryButtonClick:()=>props.togglePopup(!1,{}),children:(0,jsx_runtime.jsx)(Row.X,{flex:!0,justify:"center",children:(0,jsx_runtime.jsx)(Image,{src:props.imageUrl,alt:null===(_props$file=props.file)||void 0===_props$file?void 0:_props$file.name})})})};FileUploadPopup.displayName="FileUploadPopup";FileUploadPopup.__docgenInfo={description:"",methods:[],displayName:"FileUploadPopup"};const AddPhoto_FileUploadPopup=(0,es.$j)((state=>{var _state$messages,_state$messages2;return{send:null===(_state$messages=state.messages)||void 0===_state$messages?void 0:_state$messages.jsMessages["chat.js.message.upload.send"],cancel:null===(_state$messages2=state.messages)||void 0===_state$messages2?void 0:_state$messages2.jsMessages["chat.js.message.upload.cancel"]}}),{togglePopup:appAction.zI})(FileUploadPopup);var colors=__webpack_require__("./src/theme/colors.js"),media=__webpack_require__("./src/theme/media.js");const InputContainer=styled_components_browser_esm.ZP.label.withConfig({displayName:"styles__InputContainer",componentId:"sc-10en28n-0"})(["height:166px;border-radius:12px;flex-direction:column;align-items:center;justify-content:center;font-size:17px;line-height:24px;color:",";border:1px solid ",";cursor:pointer;box-sizing:border-box;display:",";&:hover{background:",";}","{height:308px;}","{font-size:20px;line-height:32px;}"],colors.Z.purple,colors.Z.greyRgba28,(props=>""===props.imgUrl||null===props.imgUrl||void 0===props.imgUrl?"flex":"none"),colors.Z.purpleRgba08,media.Z.tablet720,media.Z.desktop1920),ReplaceContainer=(styled_components_browser_esm.ZP.input.withConfig({displayName:"styles__Input",componentId:"sc-10en28n-1"})(["opacity:0;height:0;"]),styled_components_browser_esm.ZP.div.withConfig({displayName:"styles__ReplaceContainer",componentId:"sc-10en28n-2"})(["display:none;text-align:center;"])),ImageContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"styles__ImageContainer",componentId:"sc-10en28n-3"})(["height:166px;border-radius:12px;border:1px solid ",";background:url(",") no-repeat center;background-size:cover;cursor:pointer;display:",";align-items:center;justify-content:center;position:relative;","{height:308px;}&:hover{background:linear-gradient(0deg,rgba(55,57,57,0.64),rgba(55,57,57,0.64)),url(",") no-repeat center;background-size:cover;","{display:block;}}"],colors.Z.greyRgba28,(props=>props.dir+props.imgUrl),(props=>""===props.imgUrl||null===props.imgUrl||void 0===props.imgUrl?"none":"flex"),media.Z.tablet720,(props=>props.dir+props.imgUrl),ReplaceContainer);var formAction=__webpack_require__("./src/actions/formAction.js"),UrlConstants=__webpack_require__("./src/constants/UrlConstants.js"),api=__webpack_require__("./src/helpers/api.js"),utils=__webpack_require__("./src/components/form-multi/utils.js"),Icon=__webpack_require__("./src/components/common/Icon/Icon.jsx"),PopupButton=__webpack_require__("./src/components/common/Popup/PopupButton.jsx"),SimplePopup=__webpack_require__("./src/components/common/Popup/SimplePopup.jsx"),Text=__webpack_require__("./src/components/common/Text/Text.jsx");const AddPhoto=props=>{const inputFile=(0,react.useRef)(null),file=(0,react.useRef)(null),imageUrlRef=(0,react.useRef)(null);(0,react.useEffect)((()=>()=>{null!=imageUrlRef&&imageUrlRef.current&&URL.revokeObjectURL(imageUrlRef.current)}),[]);const uploadFile=e=>{e.preventDefault(),props.togglePopup(!1),props.toggleSpinner(!0),(0,api.zO)(UrlConstants.IdP,{file:(0,utils.rz)("file",file.current)}).then((json=>{"OK"===json.result?(props.togglePopup(!1,{}),props.changeFormFieldValue(props.formName,null==imageUrlRef?void 0:imageUrlRef.current,props.field.name)):"ERROR"===json.result&&props.addErrorMessageBody(json.message)})).catch((e=>{console.warn(e)})).finally((()=>{file.current=null,props.toggleSpinner(!1)}))};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(InputContainer,{imgUrl:props.field.value,children:[(0,jsx_runtime.jsx)(Row.X,{indent:"16px",onClick:e=>{e.stopPropagation(),inputFile.current.click()},children:(0,jsx_runtime.jsx)(Icon.J,{name:"plus",color:"purple"})}),props.field.info,(0,jsx_runtime.jsx)("input",{type:"file",name:"file",className:"hidden",onChange:e=>{e.preventDefault(),e.stopPropagation(),file.current=e.target.files[0];if((file.current.size||file.current.fileSize)>5242880)return console.log("Max file size : 5Mb"),void props.addErrorMessageBody("Max file size : 5Mb");imageUrlRef.current=URL.createObjectURL(file.current),props.togglePopup(!0,(0,jsx_runtime.jsx)(AddPhoto_FileUploadPopup,{file:file.current,uploadFile,imageUrl:null==imageUrlRef?void 0:imageUrlRef.current})),e.target.value=null},ref:inputFile})]}),(0,jsx_runtime.jsx)(ImageContainer,{dir:"",imgUrl:props.field.value,onClick:e=>{e.preventDefault(),props.togglePopup(!0,(0,jsx_runtime.jsx)(SimplePopup.Z,{withoutBorder:!0,children:(0,jsx_runtime.jsx)(PopupButton.Z,{iconName:"cross",text:props.removePhoto,onClick:()=>{props.changeFormFieldValue(props.formName,"",props.field.name),props.togglePopup(!1)}})}))},children:(0,jsx_runtime.jsxs)(ReplaceContainer,{children:[(0,jsx_runtime.jsx)(Row.X,{indent:"16px",children:(0,jsx_runtime.jsx)(Icon.J,{name:"retry",color:"white"})}),(0,jsx_runtime.jsx)(Text.x,{size:"main",color:"white",children:props.replacePhoto})]})})]})};AddPhoto.propTypes={onClick:prop_types_default().func};AddPhoto.__docgenInfo={description:"",methods:[],displayName:"AddPhoto",props:{onClick:{description:"",type:{name:"func"},required:!1}}};const AddPhoto_AddPhoto=(0,es.$j)((state=>({removePhoto:state.messages.pageMessages.removePhoto,replacePhoto:state.messages.pageMessages.replacePhoto})),{addErrorMessageBody:appAction.AK,changeFormFieldValue:formAction.Az,togglePopup:appAction.zI,addOfakimImg:appAction.YI,toggleSpinner:appAction.Qu})(AddPhoto)},"./src/components/common/Popup/PopupButton.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Popup/styles.jsx"),_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/Icon/Icon.jsx"),_Text_Text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/Text/Text.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PopupButton=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:["submit"!==props.type&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__.Jr,{href:props.href?props.href:null,rel:props.rel?props.rel:null,title:props.title?props.title:null,target:props.target?props.target:null,id:props.id?props.id:null,isAlertButton:props.isAlertButton,onClick:e=>{props.onClick&&props.onClick(e)},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_1__.aO,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__.J,{name:props.iconName,color:props.isAlertButton?"red":"purple",size:"24px"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Text_Text__WEBPACK_IMPORTED_MODULE_3__.x,{ellipsis:!0,color:props.isAlertButton?"red":"purple",children:props.text})]}),"submit"===props.type&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__.Mm,{id:props.id?props.id:null,type:props.type,tabIndex:props.tabIndex,form:props.buttonForm?props.buttonForm:null,isAlertButton:props.isAlertButton,value:props.value,onClick:e=>{props.onClick&&props.onClick(e)},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_1__.aO,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__.J,{name:props.iconName,color:props.isAlertButton?"red":"purple",size:"24px"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Text_Text__WEBPACK_IMPORTED_MODULE_3__.x,{ellipsis:!0,color:props.isAlertButton?"red":"purple",children:props.text})]})]});PopupButton.__docgenInfo={description:"",methods:[],displayName:"PopupButton",props:{type:{description:"",type:{name:"string"},required:!1},href:{description:"",type:{name:"string"},required:!1},rel:{description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1},target:{description:"",type:{name:"string"},required:!1},id:{description:"",type:{name:"string"},required:!1},dataTestId:{description:"",type:{name:"string"},required:!1},isAlertButton:{description:"",type:{name:"bool"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},iconName:{description:"",type:{name:"string"},required:!1},text:{description:"",type:{name:"string"},required:!1},tabIndex:{description:"",type:{name:"string"},required:!1},value:{description:"",type:{name:"string"},required:!1},buttonForm:{description:"",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=PopupButton;PopupButton.propTypes={type:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,href:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,rel:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,title:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,target:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,id:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,isAlertButton:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,onClick:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func,iconName:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,text:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,tabIndex:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,value:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,buttonForm:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string}},"./src/components/common/Popup/SimplePopup.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-redux/es/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),actions_appAction__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/actions/appAction.js"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/Popup/styles.jsx"),_DiskButton_DiskButton__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/DiskButton/DiskButton.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SimplePopup=props=>((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>()=>{props.onPopupClose&&props.onPopupClose()}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[!props.withoutCloseButton&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.yq,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_DiskButton_DiskButton__WEBPACK_IMPORTED_MODULE_4__.E,{onClick:()=>{var _props$popupRef;if(props.handleClose)props.handleClose();else if(null!==(_props$popupRef=props.popupRef)&&void 0!==_props$popupRef&&_props$popupRef.current){var _props$popupRef$curre;null===(_props$popupRef$curre=props.popupRef.current)||void 0===_props$popupRef$curre||_props$popupRef$curre.close()}else props.togglePopup(!1)},iconName:"cross",iconColor:"mediumGray",size:"small",type:"button",variant:"tertiary",raised:!1})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__.pP,{children:[props.text&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.Cd,{variant:"div",textAlign:props.textAlign,children:props.text}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.u2,{withoutBorder:props.withoutBorder,children:props.children})]})]}));SimplePopup.propTypes={text:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,prop_types__WEBPACK_IMPORTED_MODULE_6___default().node]),withoutCloseButton:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,withoutBorder:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,textAlign:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,popupRef:prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({current:prop_types__WEBPACK_IMPORTED_MODULE_6___default().object}),handleClose:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func},SimplePopup.defaultProps={popupRef:null},SimplePopup.__docgenInfo={description:"",methods:[],displayName:"SimplePopup",props:{popupRef:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"shape",value:{current:{name:"object",required:!1}}},required:!1},text:{description:"",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1},withoutCloseButton:{description:"",type:{name:"bool"},required:!1},withoutBorder:{description:"",type:{name:"bool"},required:!1},textAlign:{description:"",type:{name:"string"},required:!1},handleClose:{description:"",type:{name:"func"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.$j)(null,{togglePopup:actions_appAction__WEBPACK_IMPORTED_MODULE_2__.zI})(SimplePopup)},"./src/components/utils/AmplitudeUtils.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{VM:()=>amplitudeLogout});var amplitude_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/amplitude-js/amplitude.esm.js");__webpack_require__("./src/constants/amplitude/AmplitudeParamValues.js");const amplitudeLogout=()=>{amplitude_js__WEBPACK_IMPORTED_MODULE_0__.Z.getInstance().clearUserProperties(),amplitude_js__WEBPACK_IMPORTED_MODULE_0__.Z.getInstance().setUserId(null),amplitude_js__WEBPACK_IMPORTED_MODULE_0__.Z.getInstance().regenerateDeviceId()}},"./src/constants/Constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ASq:()=>XSS_FILTER_OPTIONS,CtM:()=>LOCATION,DiW:()=>VALID_ERROR,GyZ:()=>SUCCESS_TOAST,H8P:()=>SEND,H_b:()=>INFO,Jzs:()=>SOFT_BLOCK,MR9:()=>SUCCESS,P4A:()=>USER_LOGIN_COUNTRY_ID,QYy:()=>CLOUD_FLARE_FAILED_MESSAGE,WKs:()=>ERROR_TOAST,Xuy:()=>SPRING_REDIRECT_HEADER,YSc:()=>CHANGE_IDENT_STATUS,ZaX:()=>REQUEST,f8E:()=>HARD_BLOCK,ihi:()=>PROFILE,jnG:()=>GA_ACCOUNT,pnR:()=>ERROR,sfL:()=>CLOUD_FLARE_SUCCESS_MESSAGE,wy4:()=>XSS_HARSH_FILTER_OPTIONS,x$J:()=>REQ_ERROR,xT1:()=>GA_CARD});const USER_LOGIN_COUNTRY_ID="user_login_country_id",SUCCESS="SUCCESS",INFO="INFO",ERROR="ERROR",SUCCESS_TOAST="SUCCESS_TOAST",CHANGE_IDENT_STATUS="CHANGE_IDENT_STATUS",ERROR_TOAST="ERROR_TOAST",SPRING_REDIRECT_HEADER="spring-redirect-url",LOCATION="location",SEND="SEND",REQUEST="REQUEST",PROFILE="PROFILE",GA_CARD="GA_CARD",GA_ACCOUNT="GA_ACCOUNT",VALID_ERROR="site.js.validation.valid.error",REQ_ERROR="site.js.validation.req.error",SOFT_BLOCK="SOFT_BLOCK",HARD_BLOCK="HARD_BLOCK",XSS_FILTER_OPTIONS={whiteList:{a:["href","title","target","class","style","data-modal-id","data-action-id"],div:["class","style"],article:["class","style"],blockquote:["class","style"],span:["class","style"],i:["class","style"],p:["class","style"],br:["class","style"],b:["class","style"],ul:["class","style"],ol:["class","style","start"],li:["class","style"],strong:["class","style"],h1:["class","style"],h2:["class","style"],h3:["class","style"],h4:["class","style"],h5:["class","style"],h6:["class","style"],em:["class","style"],ins:["class","style"],sub:["class","style"],sup:["class","style"],img:["class","style","src"],iframe:["class","style","src"],u:["class","style"],figure:["class","style"],table:["class","style"],thead:["class","style"],tbody:["class","style"],tr:["class","style"],th:["class","style"],td:["class","style"]}},CLOUD_FLARE_SUCCESS_MESSAGE="Challenge solved",CLOUD_FLARE_FAILED_MESSAGE="Challenge failed",XSS_HARSH_FILTER_OPTIONS={whiteList:{span:["class","style"],i:["class","style"],p:["class","style"],br:["class","style"],b:["class","style"],ul:["class","style"],ol:["class","style","start"],li:["class","style"],strong:["class","style"]},stripIgnoreTag:!0}},"./src/constants/amplitude/AmplitudeParamValues.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S2:()=>FRAUD_HARD_BLOCK,_n:()=>FRAUD_SOFT_BLOCK});const FRAUD_SOFT_BLOCK="soft_block",FRAUD_HARD_BLOCK="hard_block"},"./src/helpers/api.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bd:()=>processResponseForCloudFlare,yk:()=>getFullEncodeApiUrl,zO:()=>apiFetchFormData});var constants_Constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/Constants.js"),constants_UrlConstants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/UrlConstants.js"),_components_utils_AmplitudeUtils__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/components/form-multi/utils.js"),__webpack_require__("./src/components/utils/AmplitudeUtils.js"));const getFullEncodeApiUrl=function(){let url=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";return url.indexOf(constants_UrlConstants__WEBPACK_IMPORTED_MODULE_1__.epD)>0&&(url=`${constants_UrlConstants__WEBPACK_IMPORTED_MODULE_1__.epD}`),encodeURI("/api"+url)},processResponseForCloudFlare=(response,path,options,actions)=>{if(497===response.status&&null!=actions&&actions.toggleCloudFlareModal)throw actions.toggleCloudFlareModal(!0,path,options),new Error("CloudFlare error")};function apiFetchFormData(){let path=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",fields=arguments.length>1?arguments[1]:void 0,controllerRef=arguments.length>2?arguments[2]:void 0;const params=new FormData;fields&&Object.values(fields).forEach((field=>{field.value&&params.append(field.canonicalPath?field.canonicalPath:field.name,field.value)}));const options={method:"POST",mode:"cors",credentials:"include",body:params,headers:{Accept:"application/json"}};if(controllerRef){controllerRef.current||(controllerRef.current=new AbortController);try{controllerRef.current.abort()}catch(e){console.warn(e)}finally{controllerRef.current=new AbortController}options.signal=controllerRef.current.signal}return fetch(getFullEncodeApiUrl(path),options).then((response=>{if(403===response.status)throw window.location.replace(constants_UrlConstants__WEBPACK_IMPORTED_MODULE_1__.ymf),(0,_components_utils_AmplitudeUtils__WEBPACK_IMPORTED_MODULE_3__.VM)(),new Error(`redirect to ${constants_UrlConstants__WEBPACK_IMPORTED_MODULE_1__.ymf}`);if(response.headers.has(constants_Constants__WEBPACK_IMPORTED_MODULE_0__.Xuy))throw window.location.replace(response.headers.get(constants_Constants__WEBPACK_IMPORTED_MODULE_0__.Xuy)),new Error(`redirect to ${constants_UrlConstants__WEBPACK_IMPORTED_MODULE_1__.ymf}`);if(response.headers.has(constants_Constants__WEBPACK_IMPORTED_MODULE_0__.CtM))throw window.location.replace(response.headers.get(constants_Constants__WEBPACK_IMPORTED_MODULE_0__.CtM)),new Error(`redirect to ${response.headers.get(constants_Constants__WEBPACK_IMPORTED_MODULE_0__.CtM)}`);return response.json()}))}},"./src/theme/promoBreakpoints.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const promoBreakpoints=["375px","744px","1440px"];promoBreakpoints.mobile375=promoBreakpoints[0],promoBreakpoints.tablet744=promoBreakpoints[1],promoBreakpoints.desktop1440=promoBreakpoints[2];const __WEBPACK_DEFAULT_EXPORT__=promoBreakpoints},"./src/theme/promoMedia.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _promoBreakpoints__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/theme/promoBreakpoints.jsx");const __WEBPACK_DEFAULT_EXPORT__={mobile375:`@media screen and (min-width: ${_promoBreakpoints__WEBPACK_IMPORTED_MODULE_0__.Z.mobile375})`,retina:"@media screen and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)",tablet744:`@media screen and (min-width: ${_promoBreakpoints__WEBPACK_IMPORTED_MODULE_0__.Z.tablet744})`,retina744:`@media screen and (min-width: ${_promoBreakpoints__WEBPACK_IMPORTED_MODULE_0__.Z.tablet744})   and (-webkit-min-device-pixel-ratio: 2), screen and (${_promoBreakpoints__WEBPACK_IMPORTED_MODULE_0__.Z.tablet744})   and (min-resolution: 192dpi)`,desktop1440:`@media screen and (min-width: ${_promoBreakpoints__WEBPACK_IMPORTED_MODULE_0__.Z.desktop1440})`,retina1440:`@media screen and (min-width: ${_promoBreakpoints__WEBPACK_IMPORTED_MODULE_0__.Z.desktop1440}) and (-webkit-min-device-pixel-ratio: 2), screen and (${_promoBreakpoints__WEBPACK_IMPORTED_MODULE_0__.Z.desktop1440}) and (min-resolution: 192dpi)`}}}]);