"use strict";(self.webpackChunkssr=self.webpackChunkssr||[]).push([[1079],{"./src/stories/form/InputText.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Example$parameters,_Example$parameters2,_storybook_StoreDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/StoreDecorator.js"),_components_common_Layout_Row__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/Layout/Row.jsx"),_components_form_multi_InputText__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/form-multi/InputText.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Form Components/InputText",component:_components_form_multi_InputText__WEBPACK_IMPORTED_MODULE_3__.Z,decorators:[_storybook_StoreDecorator__WEBPACK_IMPORTED_MODULE_1__.Z],parameters:{state:{messages:{pageMessages:{morePopupButtonClose:"Ok"}},form:{InputForm:{}}}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_common_Layout_Row__WEBPACK_IMPORTED_MODULE_2__.X,{indent:"24px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_form_multi_InputText__WEBPACK_IMPORTED_MODULE_3__.Z,{formName:"InputForm",isNewInput:!0,...args})});Template.displayName="Template";const Example=Template.bind({});Example.args={isLinedInput:!1,isPseudoSelect:!1,isSmsInput:!1,isCenteredInput:!1,isCalculatorInput:!1,hasArrowButton:!1,field:{placeholder:"Input placeholder",isReadOnly:!1,longTitle:!1,comment:"Input comment",commentLong:"Input long comment",isError:!1,errorMessage:"Error message"}},Example.parameters={...Example.parameters,docs:{...null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs,source:{originalSource:"args => <Row indent=\"24px\">\n        <InputText formName={'InputForm'} isNewInput {...args} />\n    </Row>",...null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2=_Example$parameters2.docs)||void 0===_Example$parameters2?void 0:_Example$parameters2.source}}};const __namedExportsOrder=["Example"]},"./src/components/form-multi/InputText.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var constants_FieldType__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/constants/FieldType.js"),helpers_customPropTypes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/helpers/customPropTypes.js"),_InputBase__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/form-multi/InputBase.js"),_constants_formName__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/constants/formName.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const InputText=props=>{const field=props.field;null===field.value&&(field.value="");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",{id:props.id?props.id:field.name,name:field.canonicalPath?field.canonicalPath:field.name,maxLength:props.setMaxLength&&field.maxLength?field.maxLength:"",value:props.customValue||field.value,type:field.type,className:props.isNewInput?null:"field field-duo",autoComplete:(()=>{const fieldName=null==field?void 0:field.name;let autocompleteValue="off";if(props.formName===_constants_formName__WEBPACK_IMPORTED_MODULE_4__.dJ)switch(fieldName){case"name":autocompleteValue="given-name";break;case"name_f":autocompleteValue="family-name";break;case"address":autocompleteValue="street-address";break;case"email":autocompleteValue="email";break;default:autocompleteValue="disabled"}return autocompleteValue})(),readOnly:props.isReadOnly||field.isReadOnly,autoFocus:props.focus,onClick:props.onClick,onFocus:props.onFocus,onChange:props.onChange,onBlur:props.onBlur})};InputText.displayName="InputText",InputText.propTypes=(0,helpers_customPropTypes__WEBPACK_IMPORTED_MODULE_1__.$k)([constants_FieldType__WEBPACK_IMPORTED_MODULE_5__.si,"tel","email","number","upload_doc","password","search","digital",constants_FieldType__WEBPACK_IMPORTED_MODULE_5__.RL,constants_FieldType__WEBPACK_IMPORTED_MODULE_5__.lD,"short_text","url",constants_FieldType__WEBPACK_IMPORTED_MODULE_5__.Hu,"hidden",constants_FieldType__WEBPACK_IMPORTED_MODULE_5__.fd,constants_FieldType__WEBPACK_IMPORTED_MODULE_5__.qz,constants_FieldType__WEBPACK_IMPORTED_MODULE_5__.fQ,constants_FieldType__WEBPACK_IMPORTED_MODULE_5__.JO]),InputText.__docgenInfo={description:"",methods:[],displayName:"InputText",composes:["helpers/customPropTypes"]};const __WEBPACK_DEFAULT_EXPORT__=(0,_InputBase__WEBPACK_IMPORTED_MODULE_2__.Z)(InputText)},"./node_modules/react-swipeable/es/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{QS:()=>useSwipeable});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const LEFT="Left",RIGHT="Right",UP="Up",DOWN="Down",defaultProps={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},initialState={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},mouseMove="mousemove",mouseUp="mouseup",touchEnd="touchend",touchMove="touchmove",touchStart="touchstart";function rotateXYByAngle(pos,angle){if(0===angle)return pos;const angleInRadians=Math.PI/180*angle;return[pos[0]*Math.cos(angleInRadians)+pos[1]*Math.sin(angleInRadians),pos[1]*Math.cos(angleInRadians)-pos[0]*Math.sin(angleInRadians)]}function getHandlers(set,handlerProps){const onStart=event=>{const isTouch="touches"in event;isTouch&&event.touches.length>1||set(((state,props)=>{props.trackMouse&&!isTouch&&(document.addEventListener(mouseMove,onMove),document.addEventListener(mouseUp,onUp));const{clientX,clientY}=isTouch?event.touches[0]:event,xy=rotateXYByAngle([clientX,clientY],props.rotationAngle);return props.onTouchStartOrOnMouseDown&&props.onTouchStartOrOnMouseDown({event}),Object.assign(Object.assign(Object.assign({},state),initialState),{initial:xy.slice(),xy,start:event.timeStamp||0})}))},onMove=event=>{set(((state,props)=>{const isTouch="touches"in event;if(isTouch&&event.touches.length>1)return state;if(event.timeStamp-state.start>props.swipeDuration)return state.swiping?Object.assign(Object.assign({},state),{swiping:!1}):state;const{clientX,clientY}=isTouch?event.touches[0]:event,[x,y]=rotateXYByAngle([clientX,clientY],props.rotationAngle),deltaX=x-state.xy[0],deltaY=y-state.xy[1],absX=Math.abs(deltaX),absY=Math.abs(deltaY),time=(event.timeStamp||0)-state.start,velocity=Math.sqrt(absX*absX+absY*absY)/(time||1),vxvy=[deltaX/(time||1),deltaY/(time||1)],dir=function getDirection(absX,absY,deltaX,deltaY){return absX>absY?deltaX>0?RIGHT:LEFT:deltaY>0?DOWN:UP}(absX,absY,deltaX,deltaY),delta="number"==typeof props.delta?props.delta:props.delta[dir.toLowerCase()]||defaultProps.delta;if(absX<delta&&absY<delta&&!state.swiping)return state;const eventData={absX,absY,deltaX,deltaY,dir,event,first:state.first,initial:state.initial,velocity,vxvy};eventData.first&&props.onSwipeStart&&props.onSwipeStart(eventData),props.onSwiping&&props.onSwiping(eventData);let cancelablePageSwipe=!1;return(props.onSwiping||props.onSwiped||props[`onSwiped${dir}`])&&(cancelablePageSwipe=!0),cancelablePageSwipe&&props.preventScrollOnSwipe&&props.trackTouch&&event.cancelable&&event.preventDefault(),Object.assign(Object.assign({},state),{first:!1,eventData,swiping:!0})}))},onEnd=event=>{set(((state,props)=>{let eventData;if(state.swiping&&state.eventData){if(event.timeStamp-state.start<props.swipeDuration){eventData=Object.assign(Object.assign({},state.eventData),{event}),props.onSwiped&&props.onSwiped(eventData);const onSwipedDir=props[`onSwiped${eventData.dir}`];onSwipedDir&&onSwipedDir(eventData)}}else props.onTap&&props.onTap({event});return props.onTouchEndOrOnMouseUp&&props.onTouchEndOrOnMouseUp({event}),Object.assign(Object.assign(Object.assign({},state),initialState),{eventData})}))},onUp=e=>{document.removeEventListener(mouseMove,onMove),document.removeEventListener(mouseUp,onUp),onEnd(e)},attachTouch=(el,props)=>{let cleanup=()=>{};if(el&&el.addEventListener){const baseOptions=Object.assign(Object.assign({},defaultProps.touchEventOptions),props.touchEventOptions),tls=[[touchStart,onStart,baseOptions],[touchMove,onMove,Object.assign(Object.assign({},baseOptions),props.preventScrollOnSwipe?{passive:!1}:{})],[touchEnd,onEnd,baseOptions]];tls.forEach((([e,h,o])=>el.addEventListener(e,h,o))),cleanup=()=>tls.forEach((([e,h])=>el.removeEventListener(e,h)))}return cleanup},output={ref:el=>{null!==el&&set(((state,props)=>{if(state.el===el)return state;const addState={};return state.el&&state.el!==el&&state.cleanUpTouch&&(state.cleanUpTouch(),addState.cleanUpTouch=void 0),props.trackTouch&&el&&(addState.cleanUpTouch=attachTouch(el,props)),Object.assign(Object.assign(Object.assign({},state),{el}),addState)}))}};return handlerProps.trackMouse&&(output.onMouseDown=onStart),[output,attachTouch]}function useSwipeable(options){const{trackMouse}=options,transientState=react__WEBPACK_IMPORTED_MODULE_0__.useRef(Object.assign({},initialState)),transientProps=react__WEBPACK_IMPORTED_MODULE_0__.useRef(Object.assign({},defaultProps)),previousProps=react__WEBPACK_IMPORTED_MODULE_0__.useRef(Object.assign({},transientProps.current));let defaultKey;for(defaultKey in previousProps.current=Object.assign({},transientProps.current),transientProps.current=Object.assign(Object.assign({},defaultProps),options),defaultProps)void 0===transientProps.current[defaultKey]&&(transientProps.current[defaultKey]=defaultProps[defaultKey]);const[handlers,attachTouch]=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>getHandlers((stateSetter=>transientState.current=stateSetter(transientState.current,transientProps.current)),{trackMouse})),[trackMouse]);return transientState.current=function updateTransientState(state,props,previousProps,attachTouch){return props.trackTouch&&state.el?state.cleanUpTouch?props.preventScrollOnSwipe!==previousProps.preventScrollOnSwipe||props.touchEventOptions.passive!==previousProps.touchEventOptions.passive?(state.cleanUpTouch(),Object.assign(Object.assign({},state),{cleanUpTouch:attachTouch(state.el,props)})):state:Object.assign(Object.assign({},state),{cleanUpTouch:attachTouch(state.el,props)}):(state.cleanUpTouch&&state.cleanUpTouch(),Object.assign(Object.assign({},state),{cleanUpTouch:void 0}))}(transientState.current,transientProps.current,previousProps.current,attachTouch),handlers}}}]);