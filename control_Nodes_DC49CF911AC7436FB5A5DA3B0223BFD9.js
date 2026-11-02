function EXEC_027()
{
}
function EXEC_028()
{
}
function EXEC_029()
{
return;
}
function EXEC_030()
{
}
var vSD_FEB2FB1939DA436A9AD006D45FD4F15D = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("=UNKNOWN_FORM= - vHandle_ARRIVE", "SHARED.payload.action", SHARED.payload.action);
 switch (SHARED.payload.action) {
 case SHARED.action.navigate:
 let hasF1 = false;
 let hasF7 = false;
 let hasF3 = false;
 let hasF12 = false;
 let screenFunctionKeys = SHARED.UF_getFunctionKeys();
 for (i=0; i<screenFunctionKeys.length; i++) {
 keyStr = screenFunctionKeys[i].key;
 keyNumber = parseInt(keyStr, 10);
 if (keyNumber == 1) hasF1 = true;
 if (keyNumber == 7) hasF7 = true;
 if (keyNumber == 3) hasF3 = true;
 if (keyNumber == 12) hasF12 = true;
 }
 let navigateBackKey;
 if (hasF7) navigateBackKey = KeyF7;
 else if (hasF1) navigateBackKey = KeyF1;
 else if (!hasF1 && !hasF7 && (hasF3 || hasF12)) {
 if (hasF3) navigateBackKey = KeyF3;
 else if (hasF12) navigateBackKey = KeyF12;
 }
 else navigateBackKey = KeyEnter;
 HIDE_CURRENT_FORM();
 SENDKEY(navigateBackKey, SHARED.payload);
 break;
 default:
 SHARED.UF_unknownFormFunctionKeys();
 CLEAR_MESSAGES();
 SHOW_CURRENT_FORM(true);
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage.trim() != "") MESSAGE(uMessage);
 if (GLOBAL_oAXESInterface.Terminal.windows.length > 1) {
 SHOW_5250_BUTTONS();
 } else {
 HIDE_5250_BUTTONS();
 }
 SETBUSY(false);
 SHARED.UF_setCursorToScreen();
 SHARED.screenVisitId = Math.random();
 this.vOverrideExitJunction = SHARED.currentExitJunction
 break;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 switch (sButton)
 {
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 switch (sToForm)
 {
 }
 let hasF1 = false;
 let hasF7 = false;
 let screenFunctionKeys = SHARED.UF_getFunctionKeys();
 for (i=0; i<screenFunctionKeys.length; i++) {
 keyStr = screenFunctionKeys[i].key;
 keyNumber = parseInt(keyStr, 10);
 if (keyNumber == 1) hasF1 = true;
 if (keyNumber == 7) hasF7 = true;
 }
 let fnKeyArray = [];
 if (hasF7) {
 fnKeyArray.push( KeyF7 );
 } else if (hasF1) {
 fnKeyArray.push( KeyF1 );
 } else {
 fnKeyArray.push( KeyEnter );
 }
 SHARED.UF_commonReturn(fnKeyArray);
 return(bReturn);
 },
 vName      :  "=UNKNOWN_FORM=",
 vGUID      :  "6A126D33D30C45A4A7C8045BF45C7B5C",
 vFKC   :  Array("Continue","Back","F2","F3","F4","Save",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "1111111111111111111111111011000000000",
 vFKEVLF : "1111111111111111111111111000000000000",
 vFKSND     :   Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTYPE      :  "U"
 };
try{VF_SY420_REGISTER_FORM(vSD_FEB2FB1939DA436A9AD006D45FD4F15D);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_103.");}
var vSD_97DF5C0627B64EB0B63CD2342BD57BAD = { // Do not change or delete this line
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 switch (sToForm)
 {
 case "uMSTMEN":
 {
 let uPayload = {
 action: SHARED.navigate,
 screenType: '',
 status: 'OK',
 filterrebuildEvent: '',
 isSoftCodedCall: false
 };
 USERENV.isDesignMode = true;
 SETVALUE("loginUser",objUser.Name);
 let myPwdField = GLOBAL_oAXESInterface.Terminal.getElementBySymbolicName("loginPwd");
 myPwdField.setValue(objUser.Password);
 SETBUSY(false);
 SHOW_CURRENT_FORM(true);
 break;
 }
 default:
 alert("Form " + this.vName + " cannot navigate to form " + sToForm);
 bReturn = false;
 break;
 }
 return(bReturn);
 },
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonJunctionArrive(SHARED.payload);
 return(bReturn);
 },
 vName      :  "MainLogin",
 vGUID      :  "5EB9780ED84D42169CE7C56E9331681E",
 vFKC       :    null,
 vFKERTS    :    null,
 vFKEVLF    :    null,
 vFKSND     :    null,
 vFKSEQ     :    null,
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "J"
 };
try{VF_SY420_REGISTER_FORM(vSD_97DF5C0627B64EB0B63CD2342BD57BAD);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_104.");}
var vSD_289529E0AC3E42AA9EB7B99DBFD773AF = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 SHARED.applyJunctionMask = false;
 TRACE(CURRENT_FORM(), (" RAMP.objNodeGroup.uCaption " + RAMP.objNodeGroup.uCaption), ("SHARED.applyJunctionMask " + SHARED.applyJunctionMask));
 if (SHARED.payload.action == SHARED.action.navigate) {
 SETVALUE("utxtMenuorSelection","99");
 }
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF24:
 SETVALUE("utxtMenuorSelection","99");
 SENDKEY(KeyEnter, SHARED.UF_setPayload({action: SHARED.action.navigate}));
 break;
 default:
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 break;
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SETVALUE("utxtMenuorSelection","99");
 SENDKEY(KeyEnter, SHARED.UF_setPayload({action: SHARED.action.navigate}));
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uMSTMEN",
 vGUID      :  "7792271C59B84437867826F0FDF8C2C1",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","Exit","Prompt","F5",
 "F6","F7","F8","F9","F10","F11",
 "Cancel","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "Signoff","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10010000000000000000000000000000000000",
 vFKEVLF : "10010000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("MainLogin"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_289529E0AC3E42AA9EB7B99DBFD773AF);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_106.");}
var vSD_915C49F42762439F816A9FDEC4DAFD46 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("EMULATOR TMPMEN");
 if (SHARED.payload.action == SHARED.action.navigate) {
 SETVALUE("utxtMenuorSelection","99");
 }
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 switch (sButton)
 {
 case KeyEnter:
 SENDKEY(KeyEnter);
 break;
 default:
 SENDKEY(sButton);
 break;
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SETVALUE("utxtMenuorSelection","99");
 SENDKEY(KeyEnter, SHARED.UF_setPayload({action: SHARED.action.navigate}));
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uTMPMEN",
 vGUID      :  "3A3CB24621434F24B22729C4D9CCF95B",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","Exit","Prompt","F5",
 "F6","F7","F8","F9","F10","F11",
 "Cancel","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000000000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_915C49F42762439F816A9FDEC4DAFD46);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_113.");}
function EXEC_026()
{
objNodeGroup.uRampStamp="20260630-104339";
objNodeGroup.uIdentifier="DC49CF911AC7436FB5A5DA3B0223BFD9";
objNodeGroup.uCaption="Emulator Session";
objNodeGroup.uLayoutStyle="FLOW";
objNodeGroup.flagLockUnknown=false;
objNodeGroup.uScriptCount=4;
objNodeGroup.arrayobjSpecialFields=new Array();
var oSF=null;
if ( !(objNodeGroup.flagSessionManaged) ) objNodeGroup.flagLockUnknown=false;
return;
}
