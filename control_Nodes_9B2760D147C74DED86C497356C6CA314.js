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
var vSD_FFB3263CD05E4578A2AB0D7AC3BF4CAA = { // Do not change or delete this line
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
 SHARED.UF_get5250Message();
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
 let uPayload = SHARED.payload;
 let functionKeys = SHARED.UF_getFunctionKeys();
 switch (sButton)
 {
 case KeyF3:
 for (i=0; i<functionKeys.length; i++) {
 if ((functionKeys[i].key == "3") && (functionKeys[i].caption.toUpperCase().indexOf("DELETE") != -1) ) {
 SHARED.alertSaveMessage = SHARED.message.deleteAlert;
 uPayload = SHARED.UF_setPayload({action: SHARED.action.save,
 screenType: SHARED.screenType.delete,
 filterRebuildEvent: SHARED.filterRebuildEvent.deleteListEntry});
 break;
 }
 }
 break;
 case KeyF5:
 for (i=0; i<functionKeys.length; i++) {
 if ((functionKeys[i].key == "5") && ((functionKeys[i].caption.toUpperCase().indexOf("SAVE") != -1) || (functionKeys[i].caption.toUpperCase().indexOf("PROCEED") != -1))) {
 SHARED.alertSaveMessage = SHARED.message.updateAlert;
 if ((objCommand.uUserObjectType.indexOf("NEW") != -1) || (objCommand.uUserObjectType.indexOf("CREATE") != -1)) {
 SHARED.AKey = ("", "", "", "", "");
 SHARED.NKey = (0, 0, 0, 0, 0);
 uPayload = SHARED.UF_setPayload({action: SHARED.action.save,
 screenType: SHARED.screenType.create,
 filterRebuildEvent: SHARED.filterRebuildEvent.refreshInstanceList});
 } else {
 uPayload = SHARED.UF_setPayload({action: SHARED.action.save,
 screenType: SHARED.screenType.change,
 filterRebuildEvent: SHARED.filterRebuildEvent.updateListEntry});
 }
 Q_SENDKEY("=uPRTEDTSCR01", KeyEnter, SHARED.payload);
 break;
 }
 }
 break;
 default:
 if (SHARED.payload.action == SHARED.action.save) {
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 }
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 switch (sToForm)
 {
 }
 SHARED.UF_setCursorToScreen();
 let hasF1 = false;
 let hasF7 = false;
 let screenFunctionKeys = SHARED.UF_getFunctionKeys();
 for (i=0; i<screenFunctionKeys.length; i++) {
 keyStr = screenFunctionKeys[i].key;
 keyNumber = parseInt(keyStr, 10);
 if (keyNumber == 1) hasF1 = true;
 if (keyNumber == 7) hasF7 = true;
 }
 let uPayload = SHARED.UF_setPayload({action: SHARED.action.navigate});
 if (hasF1) {
 if (!hasF7) {
 SENDKEY(KeyF1, uPayload);
 } else {
 Q_SENDKEY("=" + CURRENT_FORM(), KeyF1, uPayload);
 }
 }
 if (!hasF1 && !hasF7) {
 SENDKEY(KeyEnter, uPayload);
 } else {
 Q_SENDKEY("=" + CURRENT_FORM(), KeyEnter, uPayload);
 }
 if (hasF7) {
 SENDKEY(KeyF7, uPayload);
 }
 return(bReturn);
 },
 vName      :  "=UNKNOWN_FORM=",
 vGUID      :  "8467D3CCEBD94021B029BE85A29959BA",
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
try{VF_SY420_REGISTER_FORM(vSD_FFB3263CD05E4578A2AB0D7AC3BF4CAA);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_26.");}
var vSD_8C7B5AC40AB44366A2BB9591E6937A93 = { // Do not change or delete this line
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 HIDE_CURRENT_FORM();
 if (objGlobal.mfa != undefined) {return(bReturn);}
 SETBUSY(true);
 switch (sToForm)
 {
 case "uMSTMEN":
 {
 let isDesignMode = AVRESTOREAVALUE("NOT_FOUND","UDESIGNMODE","","",1,"ALL");
 if (isDesignMode == "TRUE") {
 TRACE("Design mode - telling aXes to turn off mask for uMSTMEN")
 USERENV.isDesignMode = true;
 }
 let uPayload = {
 action: SHARED.navigate,
 screenType: '',
 status: 'OK',
 filterrebuildEvent: '',
 navigationLastKeyStroke: false
 };
 Q_SENDKEY("=uDisplayProgramMessages", KeyEnter, uPayload);
 SETVALUE("loginUser",objUser.Name);
 let myPwdField = GLOBAL_oAXESInterface.Terminal.getElementBySymbolicName("loginPwd");
 myPwdField.setValue(objUser.Password);
 SENDKEY(KeyEnter, SHARED.UF_setPayload({action: SHARED.action.initialise}));
 Q_CHECK_CURRENT_FORM("uMSTMEN","Unable to navigate to form uMSTMEN");
 }
 break;
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
 SHOW_CURRENT_FORM(false);
 return(bReturn);
 },
 vName      :  "MainLogin",
 vGUID      :  "BC488255D90E419CBBF67728B71D0C0A",
 vFKC       :    null,
 vFKERTS    :    null,
 vFKEVLF    :    null,
 vFKSND     :    null,
 vFKSEQ     :    null,
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "J"
 };
try{VF_SY420_REGISTER_FORM(vSD_8C7B5AC40AB44366A2BB9591E6937A93);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_27.");}
var vSD_46342C5F72CF4B95B1B8D03A3561178F = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (SHARED.payload.action ==  SHARED.action.navigate) {
 if (CHECK_FIELD_EXISTS("utxtMenuorSelection")) SETVALUE("utxtMenuorSelection", "C");
 }
 if (objBusinessObject.uUserObjectType == "N/A") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 if (SHARED.payload.action !=  SHARED.action.navigate) {
 SETBUSY(false);
 }
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload)
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 switch (sToForm)
 {
 }
 if (CHECK_FIELD_EXISTS("utxtMenuorSelection")) {
 Q_SETVALUE("=uDisplayProgramMessage", "utxtMenuorSelection", "C");
 Q_SENDKEY("=uDisplayProgramMessage", KeyEnter, SHARED.UF_setPayload({action: SHARED.action.navigate}));
 SETVALUE("utxtMenuorSelection", "C");
 SENDKEY(KeyEnter, SHARED.UF_setPayload({action: SHARED.action.navigate}));
 } else {
 SHARED.UF_commonReturn();
 }
 return(bReturn);
 },
 vName      :  "uDisplayProgramMessages",
 vGUID      :  "143B46427D8B4F668E36E2C10A70F16E",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
try{VF_SY420_REGISTER_FORM(vSD_46342C5F72CF4B95B1B8D03A3561178F);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_28.");}
var vSD_1B196B6E6DAA4E9A9FDF411BBE83CB66 = { // Do not change or delete this line
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 HIDE_CURRENT_FORM();
 if (objGlobal.mfa != undefined) {return(bReturn);}
 SETBUSY(true);
 SHARED.applyJunctionMask = true;
 TRACE(CURRENT_FORM(), (" RAMP.objNodeGroup.uCaption " + RAMP.objNodeGroup.uCaption), ("SHARED.applyJunctionMask " + SHARED.applyJunctionMask));
 objGlobal.ustrReportCL = false;
 var strPartition = AVRESTOREAVALUE("DEV","SERVER","PARTITION");
 objGlobal.uglblPartition = strPartition;
 SHARED.lastDestinationForm = sToForm;
 SHARED.currentReportName = "";
 let screenTo = SCREEN(sToForm);
 let uProgramToCall = "NA";
 TRACE(CURRENT_FORM() + " sToForm " + sToForm + " screenTo.vTYP " + screenTo.vTYPE);
 if (screenTo.vTYPE == "D") {
 uProgramToCall = SHARED.UF_getProgram();
 }
 let uApplication = sToForm.substring(0,4) ;
 let screenFound = false;
 TRACE("T_BUSOBJgrain " + objBusinessObject.uUserObjectType);
 TRACE("T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_CurrentForm " + CURRENT_FORM());
 TRACE("T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_uApplication " + uApplication + " sToForm " + sToForm + " uProgramToCall " + uProgramToCall);
 switch (uApplication) {
 case "uBIN":
 screenFound = this.NAVIGATETO_uBIN(sToForm, uProgramToCall);
 break;
 case "uCOM":
 screenFound = this.NAVIGATETO_uCOM(sToForm, uProgramToCall);
 break;
 case "uFRT":
 screenFound = this.NAVIGATETO_uFRT(sToForm, uProgramToCall);
 break;
 case "uGRN":
 screenFound = this.NAVIGATETO_uGRN(sToForm, uProgramToCall);
 break;
 case "uOUT":
 screenFound = this.NAVIGATETO_uOUT(sToForm, uProgramToCall);
 break;
 }
 TRACE(CURRENT_FORM(), sToForm, "screenFound " + screenFound);
 if (screenFound) {
 return(bReturn);
 }
 switch (sToForm)
 {
 case "uEXP310FBSCR01":
 SHARED.UF_NavigateToAttachedDestination("", "CALL EXP310FC");
 break;
 case "uHED100SCRLSTC":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true );
 break;
 case "uHED240ONE":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 break;
 case "uRTVLOCASCR01PrintBinMasterList":
 SHARED.UF_NavigateToAttachedDestination("", objListManager.AKey1[0]);
 break;
 case "uRTVLOCASCR01UpdateBatchScaleTickets":
 if(objBusinessObject.uUserObjectType == "OUTBOUND_BATCH_SCALE_TICKETS") {
 SHARED.UF_NavigateToAttachedDestination("", "CALL GRN350C");
 } else {
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 }
 break;
 case "uRTVLOCASCR01ImportAgrisScaleTicketFile":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 break;
 case "uCommonSelectInquiry":
 {
 if(objBusinessObject.uUserObjectType == "FREIGHT_LOADS"){
 if(objCommand.uUserObjectType == "DETAILS"){
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 }
 }
 }
 break;
 case "MainLogin":
 {
 SETVALUE("utxtMenuorSelection","99");
 SENDKEY(KeyEnter, SHARED.UF_setPayload({action: SHARED.action.navigate}));
 Q_CHECK_CURRENT_FORM("MainLogin","Unable to navigate to form MainLogin");
 }
 break;
 default:
 if (uProgramToCall != "NA") {
 TRACE(CURRENT_FORM() + " - soft coded call to navigate to " + sToForm);
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true );
 } else {
 alert("Form " + this.vName + " cannot navigate to form " + sToForm);
 bReturn = false;
 }
 break;
 }
 return(bReturn);
 },
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE(objApplication.uUserObjectType, CURRENT_FORM(), 'vHandle_ARRIVE');
 TRACE("T_BUSOBJ GRAIN " + objBusinessObject.uUserObjectType + " T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action + " T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM() + " T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage + " T_alertSaveMessage  " + SHARED.alertSaveMessage);
 TRACE("T_ustrSpecialMessage  " + SHARED.ustrSpecialMessage);
 if((objBusinessObject.uUserObjectType == "INBOUND_REPORTS") && (objCommand.uUserObjectType == "DETAILS")) {
 if ((objListManager.AKey1[0] == "CALL GRN601C") || (objListManager.AKey1[0] == "CALL COM500C") || (objListManager.AKey1[0] == "CALL COM316C")) {
 SHARED.ustrSpecialMessage = "";
 }
 if ((objListManager.AKey1[0] == "CALL GRN335C")) {
 SHARED.ustrSpecialMessage = "";
 }
 if ((objListManager.AKey1[0] == "CALL GRN605C") || (objListManager.AKey1[0] == "CALL GRN530C")) {
 SHARED.ustrSpecialMessage = "Your request has been submitted to batch.";
 }
 }
 if ((objBusinessObject.uUserObjectType == "CONTRACTS") && (objCommand.uUserObjectType == "REISSUE_DELAY_PRICE")) {
 SHARED.ustrSpecialMessage = "";
 }
 SHARED.UF_commonJunctionArrive(SHARED.payload, oPreviousForm);
 let txtCompany = SHARED.UF_getCompany();
 TRACE(CURRENT_FORM(), 'vHandle_ARRIVE - current Company', SHARED.company);
 if (SHARED.company != txtCompany) {
 TRACE(CURRENT_FORM(), 'vHandle_ARRIVE - new company ', txtCompany);
 SHARED.company = txtCompany;
 SETVALUE("utxtMenuorSelection", SHARED.UF_getSetCompanyCommand() );
 if(objBusinessObject.uUserObjectType != "SET_PRINTER") {
 SENDKEY(KeyEnter, {action: SHARED.action.initialise, isSoftCodedCall: false});
 }
 } else if ((SHARED.payload.action == SHARED.action.initialise) && (SHARED.ustrSpecialMessage != "")) {
 HIDE_CURRENT_FORM(SHARED.ustrSpecialMessage);
 SETBUSY(false);
 }
 SHARED.ustrSpecialMessage = "";
 if(objBusinessObject.uUserObjectType == "SET_PRINTER"){SETBUSY(false);}
 return(bReturn);
 },
 NAVIGATETO_uBIN: function(sToForm, uProgramToCall)
 {
 let screenFound = true;
 switch (sToForm) {
 case "uBIN010SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true );
 break;
 case "uBIN100SCR01":
 if(objCommand.uUserObjectType == "NEW"){
 SHARED.UF_NavigateToAttachedDestination("", "CALL BIN100C");
 } else {
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 }
 break;
 case "uBIN110SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true );
 break;
 case "uBIN200SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true );
 break;
 case "uBIN210SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true );
 break;
 case "uBIN220SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true );
 break;
 default:
 screenFound = false;
 break;
 }
 return(screenFound);
 },
 NAVIGATETO_uCOM: function(sToForm, uProgramToCall)
 {
 let screenFound = true;
 switch (sToForm) {
 case "uCOM145SCR01":
 SHARED.UF_NavigateToAttachedDestination("", "CALL COM145C");
 break;
 case "uCOM150SCR01CreateContracts":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 break;
 case "uCOM150SCR01MaintainContracts":
 SHARED.UF_NavigateToAttachedDestination("", "CALL GRN201C");
 break;
 case "uCOM155SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 break;
 case "uCOM162SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, "CALL COM162C");
 break;
 case "uCOM160SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 break;
 case "uCOM161SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 break;
 case "uCOM200SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 break;
 case "uCOM210SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 break;
 case "uCOM240SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 break;
 case "uCOM250SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 break;
 case "uCOM315SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 break;
 case "uCOM316SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, objListManager.AKey1[0]);
 break;
 case "uCOM330SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, "CALL COM330C");
 break;
 case "uCOM350SCR01":
 if (SHARED.saveBetweenScreens == null) SHARED.saveBetweenScreens = "N";
 if ((SHARED.saveBetweenScreens.Reprun == "Y") && (objListManager.AKey1[0] == "CALL GRN507C"))
 {
 SHARED.saveBetweenScreens.Reprun = "N";
 HIDE_CURRENT_FORM("");
 }
 else if((objListManager.AKey1[0] == "CALL GRN507C") && (objGlobal.Reprun = "N"))
 {
 SHARED.saveBetweenScreens.Reprun = "Y";
 var answer;
 answer = confirm("Are you sure you want to print?");
 if(answer)
 {
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 SHARED.notifySaveMessage = objListManager.VisualId1[0] + " has completed.";
 SHARED.UF_NavigateToAttachedDestination(sToForm, objListManager.AKey1[0], true, SHARED.payload);
 }
 else
 {
 HIDE_CURRENT_FORM("Printing has been canceled.");
 SETBUSY(false);
 }
 }
 else
 {
 SHARED.UF_NavigateToAttachedDestination(sToForm, objListManager.AKey1[0], true);
 }
 break;
 case "uCOM310SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 break;
 case "uCOM500SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, objListManager.AKey1[0]);
 break;
 case "uCOM540SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, objListManager.AKey1[0]);
 break;
 default:
 screenFound = false;
 break;
 }
 return(screenFound);
 },
 NAVIGATETO_uFRT: function(sToForm, uProgramToCall)
 {
 let screenFound = true;
 switch (sToForm) {
 case "uFRT010SCR01":
 if(objBusinessObject.uUserObjectType == "FREIGHT_COMMENTS"){
 SHARED.UF_NavigateToAttachedDestination("", "CALL FRT010C");
 }
 else if(objBusinessObject.uUserObjectType == "FREIGHT_CONTRACTS"){
 if(objListManager.AColumn9[0] == "A"){
 SHARED.UF_NavigateToAttachedDestination("", "CALL FRT010C");
 }
 else if(objListManager.AColumn9[0] == "D"){
 SHARED.UF_NavigateToAttachedDestination("", "CALL FRT010CD");
 }
 }
 break;
 case "uFRT100SCR01":
 if(objCommand.uUserObjectType == "NEW"){
 SHARED.UF_NavigateToAttachedDestination("", "CALL FRT100C");
 } else {
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 }
 break;
 default:
 screenFound = false;
 break;
 }
 TRACE("T_screenFound " + screenFound);
 return(screenFound);
 },
 NAVIGATETO_uGRN: function(sToForm, uProgramToCall)
 {
 let screenFound = true;
 switch (sToForm) {
 case "uGRN005SCR01":
 if (objBusinessObject.uUserObjectType == "CUSTOMER_POSITION") {
 let ustrControl = ('0000000' + objListManager.NColumn2[0]).slice(-7);
 if(objListManager.VisualId1[0] == "D/P")
 {
 ustrCommand = "CALL PGM(GRN006W) PARM('" + "DEF " + "' X'" + ustrControl + "F' 'D' 'O' 'N' ' ')"
 }
 else
 {
 objGlobal.cposType = objListManager.VisualId1[0];
 objGlobal.cposAccount = objListManager.NColumn3[0];
 ustrCommand = "CALL PGM(GRN006W) PARM('" + objListManager.VisualId1[0] + "' X'" + ustrControl + "F' 'P' 'O' 'N' ' ')"
 }
 SHARED.UF_NavigateToAttachedDestination(sToForm, ustrCommand, true);
 } else if (objBusinessObject.uUserObjectType == "INQUIRE_CUSTOMER_POSITION") {
 SHARED.UF_NavigateToAttachedDestination(sToForm, "call grn005c");
 }
 break;
 case "uGRN020SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 break;
 case "uGRN030SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 break;
 case "uGRN095SCRMRK":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 break;
 case "uGRN100SCR01":
 if(objCommand.uUserObjectType == "MESSAGE_2") {
 HIDE_CURRENT_FORM("You are now back at the master menu.");
 SETBUSY(false);
 UNLOCK_FRAMEWORK();
 } else {
 AVSIGNALEVENT("Get_Last_Settlement", "BUSINESSOBJECT");
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 }
 break;
 case "uGRN107SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 break;
 case "uGRN110SCR01":
 SHARED.UF_NavigateToAttachedDestination("", "CALL GRN110C");
 break;
 case "uGRN115SCR01":
 if(objBusinessObject.uUserObjectType == "TICKET_SPLITS")
 {
 SHARED.UF_NavigateToAttachedDestination("", "CALL GRN115C");
 }
 else
 {
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 }
 break;
 case "uGRN118SCR01":
 if(objBusinessObject.uUserObjectType == "INBOUND_BATCH_SCALE_TICKETS")
 {
 SHARED.UF_NavigateToAttachedDestination(sToForm, "CALL GRN118C");
 }
 else
 {
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 }
 break;
 case "uGRN119SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true );
 break;
 case "uGRN120SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 break;
 case "uGRN125SCR01":
 if ( (objBusinessObject.uUserObjectType == "OUTBOUND_BATCH_SCALE_TICKETS") || (objCommand.uUserObjectType == "NEW")) {
 SHARED.UF_NavigateToAttachedDestination("", "CALL GRN125C");
 } else if ((objBusinessObject.uUserObjectType == "BATCH_TICKETS_OUTBOUND") && (objListManager.AColumn9[0] == "O")) {
 SHARED.UF_NavigateToAttachedDestination("", "CALL GRN142C");
 } else {
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 }
 break;
 case "uGRN131SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 break;
 case "uGRN1140SCR01-1":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 break;
 case "uGRN142SCR01":
 SHARED.UF_NavigateToAttachedDestination("", "CALL GRN142C");
 break;
 case "uGRN205ONE":
 if (objCommand.uUserObjectType != "NEW") {
 if(objListManager.AKey1[0] != "D/" && objListManager.AKey1[0] != "DEF") {
 HIDE_CURRENT_FORM("Please choose a valid position");
 SETBUSY(false);
 } else if (objListManager.AKey1[0] == "D/")  {
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 } else {
 SHARED.UF_NavigateToAttachedDestination("", "CALL GRN205C");
 }
 } else {
 SHARED.UF_NavigateToAttachedDestination("", "CALL GRN205C");
 }
 break;
 case "uGRN220ONE":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 break;
 case "uGRN225SCR01":
 if ((objCommand.uUserObjectType == "NEW")) {
 SHARED.UF_NavigateToAttachedDestination("", "CALL GRN225C");
 } else{
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 }
 break;
 case "uGRN250SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 break;
 case "uGRN335SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, objListManager.AKey1[0]);
 break;
 case "uGRN370SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true );
 break;
 case "uGRN510SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, objListManager.AKey1[0]);
 break;
 case "uGRN516SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true );
 break;
 case "uCOM600SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, objListManager.AKey1[0]);
 break;
 case "uGRN605ONE":
 SHARED.UF_NavigateToAttachedDestination(sToForm, objListManager.AKey1[0]);
 break;
 case "uGRN610GRN61001":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true );
 break;
 case "uGRN633SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, objListManager.AKey1[0]);
 break;
 case "uGRN625ONE":
 SHARED.UF_NavigateToAttachedDestination(sToForm, objListManager.AKey1[0]);
 break;
 case "uGRN635G5N63501":
 SHARED.UF_NavigateToAttachedDestination(sToForm, objListManager.AKey1[0]);
 break;
 case "uGRN680SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, objListManager.AKey1[0]);
 break;
 case "uGRN700GRN70001":
 SHARED.UF_NavigateToAttachedDestination(sToForm, objListManager.AKey1[0], true);
 break;
 case "uGRN740SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, objListManager.AKey1[0], true);
 break;
 case "uGRN850ONE":
 SHARED.UF_NavigateToAttachedDestination(sToForm, objListManager.AKey1[0]);
 break;
 default:
 screenFound = false;
 break;
 }
 return(screenFound);
 },
 NAVIGATETO_uOUT: function(sToForm, uProgramToCall)
 {
 let screenFound = true;
 switch (sToForm) {
 case "uOUT010SCR01":
 if(objBusinessObject.uUserObjectType == "SALES_CONTRACTS_COMMENT"){
 SHARED.UF_NavigateToAttachedDestination("", "CALL OUT010C");
 }
 else if(objBusinessObject.uUserObjectType == "SALES_CONTRACTS"){
 if(objListManager.AColumn9[0] == "A"){
 SHARED.UF_NavigateToAttachedDestination("", "CALL OUT010C");
 }
 else if(objListManager.AColumn9[0] == "D"){
 SHARED.UF_NavigateToAttachedDestination("", "CALL OUT010CD");
 }
 }
 break;
 case "uOUT020SCR01":
 if(objBusinessObject.uUserObjectType == "SHIPMENT_COMMENTS")
 {
 SHARED.UF_NavigateToAttachedDestination("", "CALL OUT020C");
 } else if(objCommand.uUserObjectType == "DETAILS") {
 if(objListManager.AColumn9[0] == "A") {
 SHARED.UF_NavigateToAttachedDestination("", "CALL OUT020C");
 } else if(objListManager.AColumn9[0] == "D") {
 SHARED.UF_NavigateToAttachedDestination("", "CALL OUT020CD");
 }
 } else if (objCommand.uUserObjectType == "PRINT") {
 SHARED.UF_NavigateToAttachedDestination("", "CALL OUT020C");
 }
 break;
 case "uOUT030SCR01":
 if((objBusinessObject.uUserObjectType == "SETTLEMENTS_COMMENTS") || (objCommand.uUserObjectType == "PRINT") || (objCommand.uUserObjectType == "REVERSE")) {
 SHARED.UF_NavigateToAttachedDestination("", "CALL OUT030C");
 } else {
 if(objListManager.AColumn9[0] == "A") {
 SHARED.UF_NavigateToAttachedDestination("", "CALL OUT030C");
 } else if(objListManager.AColumn9[0] == "D") {
 SHARED.UF_NavigateToAttachedDestination("", "CALL OUT030CD");
 }
 }
 break;
 case "uOUT105SCR01":
 if ((objBusinessObject.uUserObjectType == "SALES_CONTRACTS") && (objCommand.uUserObjectType == "EDIT")) {
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 } else {
 SHARED.UF_NavigateToAttachedDestination("", "CALL OUT105C");
 }
 break;
 case "uOUT110SCR01":
 if (objCommand.uUserObjectType == "NEW") {
 SHARED.UF_NavigateToAttachedDestination("", "CALL OUT110C");
 } else {
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 }
 break;
 case "uOUT115SCR01":
 SHARED.UF_NavigateToAttachedDestination(sToForm, uProgramToCall, true);
 break;
 default:
 screenFound = false;
 break;
 }
 return(screenFound);
 },
 vName      :  "uMSTMEN",
 vGUID      :  "2DFF6E3C11D140BCA1B025692A67F40A",
 vFKC       :    null,
 vFKERTS    :    null,
 vFKEVLF    :    null,
 vFKSND     :    null,
 vFKSEQ     :    null,
 vTargets   :  Array("MainLogin","uCOM150SCR01MaintainContracts","uCOM145SCR01","uDATRGNSCR01"
 ,"uCOM550SLSCR01","uCOM162SCR01","uCOM350SCR01","uCOM330SCR01"
 ,"uGRN020SCR01","uGRN566SCR01","uGRN522SCR01","uGRN340ONE"
 ,"uGRN518SCR01","uCOM500SCR01","uGRN365SCR01","uGRN115SCR01"
 ,"uGRN516SCR01","uGRN118SCR01","uFRT500SCR01","uOUT505SCR01"
 ,"uOUT510SCR01","uGRN740SCR01","uCOM155SCR01","uCOM200SCR01"
 ,"uCOM210SCR01","uGRN120SCR01","uGRN205ONE","uGRN220ONE"
 ,"uGRN610GRN61001","uEXP310FBSCR01","uGRN250SCR01","uGRN125SCR01"
 ,"uCOM250SCR01","uOUT110SCR01","uOUT020SCR01","uCOM310SCR01"
 ,"uGRN370SCR01","uGRN222ONE","uCOM160SCR01","uCOM315SCR01"
 ,"uHED240ONE","uRTVLOCASCR01ImportAgrisScaleTicketFile","uGRN100SCR01","uOUT105SCR01"
 ,"uGRN005SCR01","uGRN140SCR01-1","uGRN142SCR01","uGRN110SCR01"
 ,"uFRT010SCR01","uFRT100SCR01","uFRT100SCR02C","uFRT110SCR01"
 ,"uCommonSelectInquiry","uOUT010SCR01","uOUT115SCR01","uOUT030SCR01"
 ,"uGRN030SCR01","uGRN131SCR01","uCOM240SCR01","uCOM161SCR01"
 ,"uHED100SCRLSTC","uRTVLOCASCR01PrintBinMasterList","uGRN225SCR01","uBIN010SCR01"
 ,"uBIN100SCR01","uBIN110SCR01","uBIN200SCR01","uBIN210SCR01C"
 ,"uBIN220SCR01C","uGRN107SCR01C","uGRN095SCRMRK","uCOM150SCR01CreateContracts"
 ,"uRTVLOCASCR01UpdateBatchScaleTickets"),
 vTYPE      :  "J"
 };
try{VF_SY420_REGISTER_FORM(vSD_1B196B6E6DAA4E9A9FDF411BBE83CB66);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_33.");}
var vSD_0103FF62BF4C4B8D894F43433374E58E = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 HIDE_CURRENT_FORM();
 SETBUSY(true);
 SENDKEY(KeyEnter, SHARED.payload);
 return(bReturn);
 },
 vName      :  "uPCOEXE",
 vGUID      :  "66127CB4F7854D3C82592319CEA7110B",
 vFKC       :    null,
 vFKERTS    :    null,
 vFKEVLF    :    null,
 vFKSND     :    null,
 vFKSEQ     :    null,
 vTargets   :  Array("uPCOEXE"),
 vTYPE      :  "S"
 };
try{VF_SY420_REGISTER_FORM(vSD_0103FF62BF4C4B8D894F43433374E58E);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_34.");}
var vSD_6E7C4551BE414E9CA69CA98463CE5A7A = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType);
 TRACE("T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action);
 TRACE("T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_SHARED.payload.filterRebuildEvent " + SHARED.payload.filterRebuildEvent);
 TRACE("T_CurrentForm " + CURRENT_FORM());
 TRACE("T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_SHARED.saveBetweenScreens.contractObjectmessage  " + SHARED.saveBetweenScreens.contractObjectmessage);
 let isHiddenDestination = false;
 let hideScreenMessage = "";
 switch (SHARED.payload.action) {
 case SHARED.action.save:
 isHiddenDestination = true;
 hideScreenMessage = SHARED.notifySaveMessage;
 break;
 case SHARED.action.initialise:
 if (oPreviousForm.vName == CURRENT_FORM()) {
 isHiddenDestination = false;
 } else {
 isHiddenDestination = true;
 SHARED.saveBetweenScreens.contractObject = {
 contractUnits: 0,
 triggeredUnits: 0,
 settledUnits: 0,
 triggerFlag: false,
 contract: GETVALUE("utxtContract"),
 type: GETVALUE("utxtType"),
 triggeringContract: ""
 };
 SETVALUE("utxtType",objListManager.AKey1[0]);
 SETVALUE("utxtContract",objListManager.NKey1[0]);
 Q_SENDKEY("=" + CURRENT_FORM(), KeyEnter, SHARED.payload);
 }
 break;
 }
 if ((objBusinessObject.uUserObjectType == "CONTRACT_MAINTENANCE") || (objBusinessObject.uUserObjectType == "CONTRACTS")) {
 SHARED.UF_linkedToCommandTabDestinationArrive( {payload: SHARED.payload,
 isHiddenDestination: isHiddenDestination,
 enableExitKeys: false,
 hideScreenMessage: hideScreenMessage } );
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload,
 enableExitKeys: true,
 isHiddenDestination: isHiddenDestination,
 hideScreenMessage: hideScreenMessage});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 switch (sButton)
 {
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM150SCR01MaintainContracts",
 vGUID      :  "6B0B11E5CFA446FBB23981A5C29763E6",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_6E7C4551BE414E9CA69CA98463CE5A7A);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_35.");}
var vSD_2BC7BDA8C7194C62986B3CD4DFB4C62D = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType + " T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action + " T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM() + " T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage + " T_alertSaveMessage  " + SHARED.alertSaveMessage);
 TRACE("Message " + SHARED.saveBetweenScreens.uglblActiveFormMessageCOM150);
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive( {payload: SHARED.payload,  isHiddenDestination: isHiddenDestination, enableExitKeys: false } );
 } else {
 let uMessageLine = 24; // SHARED.commonMessageLine
 let allowKeyArray = [KeyF6];
 let hideKeyArray = [KeyF1];
 GET_FORM_MESSAGE(uMessageLine, SHARED.moreIndicator, false);
 SHARED.saveBetweenScreens.uglblActiveFormMessageCOM150 = this.vLastMessage;
 if(SHARED.saveBetweenScreens.uglblActiveFormMessageCOM150.search(/F11 to accept/) != -1)
 {
 allowKeyArray.push(KeyF11);
 }
 else if(SHARED.saveBetweenScreens.uglblActiveFormMessageCOM150.search(/F4 to accept/) != -1)
 {
 allowKeyArray.push(KeyF4);
 }
 else if(SHARED.saveBetweenScreens.uglblActiveFormMessageCOM150.search(/F14 to accept/) != -1)
 {
 allowKeyArray.push(KeyF14);
 }
 switch (SHARED.payload.action) {
 case SHARED.action.save:
 if (SHARED.saveBetweenScreens.contractObject.triggeringContract == "Triggering Contract") {
 let ustrTriggeringContractTest = GETVALUE("utxtTriggeringContract");
 if ( (ustrTriggeringContractTest != "Triggering Contract") && (CURRENT_FORM() != oPreviousForm.vName))
 {
 let type = SHARED.saveBetweenScreens.contractObject.type;
 let contract = parseInt(SHARED.saveBetweenScreens.contractObject.contract, 10);
 SHARED.saveBetweenScreens.uglblTriggerFlag = false;
 SHARED.saveBetweenScreens.uglblTriggerDeleteFlag = true;
 TRACE("type ", type,"contract", contract);
 AVSIGNALEVENT("Add_List_Entry","FRAMEWORK",type,"","","","",contract);
 ALERT_MESSAGE("New contract " + contract + " has been added.");
 Q_SENDKEY("=" + CURRENT_FORM(), KeyF5, SHARED.payload);
 SHARED.saveBetweenScreens.uglblTriggerDeleteFlag = true;
 }
 }
 break;
 default:
 break;
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, allowKeyArray: allowKeyArray,hideKeyArray: hideKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF1:
 SHARED.saveBetweenScreens.uglblTriggerFlag = false;
 break;
 case KeyF5:
 let ustrContractUnits = GETVALUE("utxtContractUnits");
 let ustrTriggeredUnits = GETVALUE("utxtTriggeredUnits");
 let ustrSettledUnits = GETVALUE("utxtSettledUnits");
 ustrContractUnits = ustrContractUnits.replace(/,/,"");
 ustrTriggeredUnits = ustrTriggeredUnits.replace(/,/,"");
 ustrSettledUnits = ustrSettledUnits.replace(/,/,"");
 SHARED.saveBetweenScreens.contractObject.contractUnits = parseInt(ustrContractUnits, 10);
 SHARED.saveBetweenScreens.contractObject.triggeredUnits = parseInt(ustrTriggeredUnits, 10);
 SHARED.saveBetweenScreens.contractObject.settledUnits = parseInt(ustrSettledUnits, 10);
 if(SHARED.saveBetweenScreens.uglblTriggerFlag == true) {
 let ustrContract = GETVALUE("utxtContract");
 let ustrType = GETVALUE("utxtType");
 let ustrTriggeringContract = GETVALUE("utxtTriggeringContract");
 SHARED.saveBetweenScreens.contractObject.contract = ustrContract;
 SHARED.saveBetweenScreens.contractObject.type = ustrType;
 SHARED.saveBetweenScreens.contractObject.triggeringContract = ustrTriggeringContract;
 }
 let ustrTotalUnits = ustrContractUnits - ustrTriggeredUnits - ustrSettledUnits;
 if(ustrTotalUnits == 0)
 {
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.delete, filterRebuildEvent: SHARED.filterRebuildEvent.deleteListEntry});
 SHARED.notifySaveMessage = "Contract " + objListManager.AKey1[0] + " " + objListManager.NKey1[0] + " has been moved to history, please select another record.";
 }
 else
 {
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.delete, filterRebuildEvent: SHARED.filterRebuildEvent.updateListEntry});
 SHARED.notifySaveMessage = "Contract has been updated.";
 }
 break;
 case KeyF6:
 if(objBusinessObject.uUserObjectType == "CONTRACT_MAINTENANCE")
 {
 AVSIGNALEVENT("DISPLAY_SIGS","FRAMEWORK",objListManager.AKey1[0],"","CONTRACT_MAINTENANCE","","",objListManager.NKey1[0]);
 }
 else
 {
 var ustrCustomer = GETVALUE("utxtAccount");
 ustrCustomer = parseInt(ustrCustomer);
 AVSIGNALEVENT("DISPLAY_SIGS","FRAMEWORK",objListManager.VisualId1[0],"","","","",objListManager.VisualId2[0],"",ustrCustomer);
 }
 return(bReturn);
 break;
 case KeyF10:
 SHARED.saveBetweenScreens.uglblTriggerFlag = true;
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 }
 return(bReturn);
 },
 vName      :  "uCOM150SCR02CMaintainContracts",
 vGUID      :  "A8C5BBF08C62425596819064244151A5",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","Price","Delete","Accept","Save",
 "Authorize Sigs","F7","Comments","F9","Trigger","Accept",
 "F12","F13","Accept","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405111008090706121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uCOM150SCR05"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_2BC7BDA8C7194C62986B3CD4DFB4C62D);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_36.");}
var vSD_B87A99DC37F746F3871CCF1CCF5FA753 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "N/A") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 switch (sButton)
 {
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM751SCR01CSignsByApp",
 vGUID      :  "889259EBCE454391B1D5F7C0D1519EAC",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Send To Print","F2","F3","F4","Proceed",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000100000000000000000000000000000000",
 vFKEVLF : "11000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uCOM150SCR01MaintainContracts"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_B87A99DC37F746F3871CCF1CCF5FA753);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_37.");}
var vSD_6CA7D2AFAEF54FE4AE0FCBBEBECD2B55 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "N/A") {
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
 switch (sButton)
 {
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM005SCR01C",
 vGUID      :  "31A8DDCA60894FA58626663A8A25B218",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
try{VF_SY420_REGISTER_FORM(vSD_6CA7D2AFAEF54FE4AE0FCBBEBECD2B55);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_38.");}
var vSD_9CAD9C62D2CD4D099C8FB304657BC5F3 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_allowScreenFunctionKeys( false );
 if (objBusinessObject.uUserObjectType == "N/A") {
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
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload)
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
 SHARED.UF_commonReturn();
 return(bReturn);
 },
 vName      :  "uCommonPrompt",
 vGUID      :  "642526E3C0B3415A9115593474DB8967",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","Show Inactive","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
try{VF_SY420_REGISTER_FORM(vSD_9CAD9C62D2CD4D099C8FB304657BC5F3);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_39.");}
var vSD_267BBBCDEACD435A954BD43B092C8CF5 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload});
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
 SHARED.UF_commonReturn();
 return(bReturn);
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM150SCR03C",
 vGUID      :  "664E01D6089043AD9CBD46EC94E0B264",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","F4","Proceed",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000100000000000000000000000000000000",
 vFKEVLF : "01000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_267BBBCDEACD435A954BD43B092C8CF5);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_40.");}
var vSD_19E46430B0B74DA59BBA5BA69D3D51E1 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 SHARED.saveBetweenScreens.uglblCOM150SCR05StartingUnits = GETVALUE("utxtUnits");
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF1:
 SHARED.saveBetweenScreens.uglblTriggerFlag = false;
 break;
 case KeyF5:
 SHARED.saveBetweenScreens.uglblCOM150SCR05EndingUnits = GETVALUE("utxtUnits");
 SHARED.saveBetweenScreens.uglblTriggerFlag = true;
 if(SHARED.saveBetweenScreens.uglblCOM150SCR05StartingUnits == SHARED.saveBetweenScreens.uglblCOM150SCR05EndingUnits) {
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.delete, filterRebuildEvent: SHARED.filterRebuildEvent.deleteListEntry});
 SHARED.notifySaveMessage = "The original contract has been moved to history, please select another record.";
 } else {
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.delete, filterRebuildEvent: SHARED.filterRebuildEvent.updateListEntry});
 SHARED.notifySaveMessage = "Contract has been updated.";
 }
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 return(bReturn);
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM150SCR05",
 vGUID      :  "8EC258B67A6B4AFE8F5E7C24B145697F",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
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
try{VF_SY420_REGISTER_FORM(vSD_19E46430B0B74DA59BBA5BA69D3D51E1);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_41.");}
var vSD_A63AC7B2CE924265BCD42149AC8A3770 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 SHARED.UF_commonReturn();
 return(bReturn);
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN002SCR01C",
 vGUID      :  "C4A4A1A9A74D46A9BC200421004EA931",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000000000000000000000000000000000",
 vFKEVLF : "00000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_A63AC7B2CE924265BCD42149AC8A3770);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_42.");}
var vSD_CB2BEC449F2A46E79E48C31E2D058509 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_allowScreenFunctionKeys( false );
 if (objBusinessObject.uUserObjectType == "N/A") {
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
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload)
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
 SHARED.UF_commonReturn();
 return(bReturn);
 },
 vName      :  "uCommonPromptSearch",
 vGUID      :  "8EBA18E796184691B18FE2998804BB68",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","F2","F3","F4","F5",
 "F6","F7","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000000010000000000000000000000000000",
 vFKEVLF : "11000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_CB2BEC449F2A46E79E48C31E2D058509);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_43.");}
var vSD_BC207C34524F4AF8A611065E926773D5 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uSYS400SCR01",
 vGUID      :  "3AEAEDE27A214B20B96A40F31A5F01E5",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Back","F2","F3","F4","Save",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000000000000000000000000000000000000",
 vFKEVLF : "11000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_BC207C34524F4AF8A611065E926773D5);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_44.");}
var vSD_ACF97B2B84D14490A9066BEED3E1F7F5 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCONFIRMDLTSCRDLT",
 vGUID      :  "D7EE82BCA0834E8EAF6C2E7D327B86C8",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
try{VF_SY420_REGISTER_FORM(vSD_ACF97B2B84D14490A9066BEED3E1F7F5);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_45.");}
var vSD_B77081D0BFE442DA940669B7167A53E8 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let isHiddenDestination = false;
 let hideScreenMessage = "";
 switch (SHARED.payload.action) {
 case SHARED.action.save:
 hideScreenMessage = SHARED.notifySaveMessage;
 isHiddenDestination = true;
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 break;
 case SHARED.action.initialise:
 if (oPreviousForm.vName == CURRENT_FORM()) {
 isHiddenDestination = false;
 } else {
 isHiddenDestination = true;
 SETVALUE("utxtType",objListManager.AKey1[0]);
 SETVALUE("utxtContract",objListManager.NKey1[0]);
 SENDKEY(KeyEnter, {action: SHARED.action.initialise});
 return(bReturn);
 }
 break;
 }
 if ((objBusinessObject.uUserObjectType == "CONTRACTS") || (objBusinessObject.uUserObjectType == "CONTRACT_MAINTENANCE")) {
 SHARED.UF_linkedToCommandTabDestinationArrive( {payload: SHARED.payload,
 enableExitKeys: false,
 hideScreenMessage: hideScreenMessage,
 isHiddenDestination: isHiddenDestination } );
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, isHiddenDestination: isHiddenDestination});
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM145SCR01",
 vGUID      :  "3FFE55150C9440F69D4E274047E9FEFB",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_B77081D0BFE442DA940669B7167A53E8);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_46.");}
var vSD_843AF1571BD24CF99128089949F39652 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload});
 } else {
 let enableExitKeys = true;
 if ((objBusinessObject.uUserObjectType == "CONTRACTS") || (objBusinessObject.uUserObjectType == "CONTRACT_MAINTENANCE")) {
 enableExitKeys = false;
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: enableExitKeys});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change, filterRebuildEvent: SHARED.filterRebuildEvent.updateListEntry});
 SHARED.notifySaveMessage = "Contract has been updated.";
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM145SCR02C",
 vGUID      :  "A7DC115F4CDB4319A923C19422D358F6",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Save",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000000000000000000000110000000000",
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
try{VF_SY420_REGISTER_FORM(vSD_843AF1571BD24CF99128089949F39652);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_50.");}
var vSD_3CD0E0460462434491156D6265BCBD6B = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("GRAIN TMPMEN");
 HIDE_CURRENT_FORM();
 SETBUSY(true);
 SETVALUE("utxtSelectionorCommand","10");
 SENDKEY(KeyEnter, SHARED.UF_setPayload({action: SHARED.action.initialise}));
 return(bReturn);
 },
 vName      :  "uTMPMEN",
 vGUID      :  "565BCB49996A48E19CEDF3EECA91DAD9",
 vFKC       :    null,
 vFKERTS    :    null,
 vFKEVLF    :    null,
 vFKSND     :    null,
 vFKSEQ     :    null,
 vTargets   :  Array("uTMPMEN"),
 vTYPE      :  "S"
 };
try{VF_SY420_REGISTER_FORM(vSD_3CD0E0460462434491156D6265BCBD6B);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_97.");}
var vSD_D5200119E52F4457BEC5A186E2A9F206 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 HIDE_CURRENT_FORM();
 SETBUSY(true);
 var env = objFramework.Partition.substring(1, 0);
 if(env == "D")
 {
 SETVALUE("utxtAreatoTest","I");
 }
 else if(env == "Q")
 {
 SETVALUE("utxtAreatoTest","Q");
 }
 else if(env == "R")
 {
 SETVALUE("utxtAreatoTest","S");
 }
 SENDKEY(KeyEnter, SHARED.UF_setPayload({action: SHARED.action.initialise}));
 return(bReturn);
 },
 vName      :  "uSelectEnvironment",
 vGUID      :  "14BBACFF5A7F44A7A998FB01F499B689",
 vFKC       :    null,
 vFKERTS    :    null,
 vFKEVLF    :    null,
 vFKSND     :    null,
 vFKSEQ     :    null,
 vTargets   :  Array(),
 vTYPE      :  "S"
 };
try{VF_SY420_REGISTER_FORM(vSD_D5200119E52F4457BEC5A186E2A9F206);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_98.");}
var vSD_1465B3254D1E43438204EE49D42EA6E0 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 HIDE_CURRENT_FORM();
 SETBUSY(true);
 SETVALUE("utxtMenuorSelectionV5R1","S",1);
 SENDKEY(KeyEnter, SHARED.UF_setPayload({action: SHARED.action.initialise}));
 return(bReturn);
 },
 vName      :  "uSelectTestEnvironment",
 vGUID      :  "3C85931183164C938E6EBB1B3B3F2D1A",
 vFKC       :    null,
 vFKERTS    :    null,
 vFKEVLF    :    null,
 vFKSND     :    null,
 vFKSEQ     :    null,
 vTargets   :  Array(),
 vTYPE      :  "S"
 };
try{VF_SY420_REGISTER_FORM(vSD_1465B3254D1E43438204EE49D42EA6E0);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_99.");}
var vSD_AA417DAEB86D485881314368844AA715 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 HIDE_CURRENT_FORM();
 SETBUSY(true);
 SENDKEY(KeyEnter, SHARED.UF_setPayload({action: SHARED.action.initialise}));
 return(bReturn);
 },
 vName      :  "uEditLibraryList",
 vGUID      :  "89C71A9AA9AB45AAA29B98F262628FD9",
 vFKC       :    null,
 vFKERTS    :    null,
 vFKEVLF    :    null,
 vFKSND     :    null,
 vFKSEQ     :    null,
 vTargets   :  Array(),
 vTYPE      :  "S"
 };
try{VF_SY420_REGISTER_FORM(vSD_AA417DAEB86D485881314368844AA715);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_100.");}
var vSD_2AFCA14A87FB4EA7AA93431306AD1761 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType.indexOf("REPORTS") > -1)  {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 SHARED.returnDestinationForm = SHARED.lastDestinationForm;
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
 case KeyF5:
 SHARED.notifySaveMessage = "Advance Listing has been printed";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN625ONE",
 vGUID      :  "8ECC55B534154234AC525EF15BA8E5AB",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_2AFCA14A87FB4EA7AA93431306AD1761);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_107.");}
var vSD_CA91980E2BEC45038A6BE98F4011634A = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType.indexOf("REPORTS") > -1)  {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 SHARED.returnDestinationForm = SHARED.lastDestinationForm;
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
 case KeyF5:
 SHARED.notifySaveMessage = "Delivery Number Listing has been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN510SCR01",
 vGUID      :  "B4DE847991594E7DA245B4647ADBDFE4",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_CA91980E2BEC45038A6BE98F4011634A);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_113.");}
var vSD_DF57738C015F4F558DC3186CBAF31754 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType.indexOf("REPORTS") > -1)  {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 SHARED.returnDestinationForm = SHARED.lastDestinationForm;
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
 case KeyF5:
 SHARED.notifySaveMessage = "Daily Position Record has been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM600SCR01",
 vGUID      :  "4B196B5EF2A744AF84CF8BC5A44991BA",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_DF57738C015F4F558DC3186CBAF31754);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_114.");}
var vSD_A83278B4A58644ED83D46C85E02C2E3E = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType.indexOf("REPORTS") > -1)  {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 SHARED.returnDestinationForm = SHARED.lastDestinationForm;
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
 case KeyF5:
 SHARED.notifySaveMessage = "Daily Position Summary has been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN633SCR01",
 vGUID      :  "62112AAFBEC14ECC91E14607D2E1F618",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_A83278B4A58644ED83D46C85E02C2E3E);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_115.");}
var vSD_0F817C103C8D4AC4906EFDFB1044C085 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType.indexOf("REPORTS") > -1)  {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 SHARED.returnDestinationForm = SHARED.lastDestinationForm;
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
 case KeyF5:
 SHARED.notifySaveMessage = "Deferred Payment Listing has been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN605ONE",
 vGUID      :  "038C35BE0AE4424D8EF83ABEE3A60187",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_0F817C103C8D4AC4906EFDFB1044C085);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_116.");}
var vSD_3D4C9D83D860427CB68B5B4ED6B909FE = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType.indexOf("REPORTS") > -1)  {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 SHARED.returnDestinationForm = SHARED.lastDestinationForm;
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
 case KeyF5:
 SHARED.notifySaveMessage = "List Incoming Grain/Avg Factors has been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN850ONE",
 vGUID      :  "CCB2B6A119ED44CFA7C89526120319B0",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_3D4C9D83D860427CB68B5B4ED6B909FE);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_118.");}
var vSD_1E8BDB4DC51A4EBD9D97F8C485AF9593 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "INBOUND_REPORTS") {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 SHARED.returnDestinationForm = SHARED.lastDestinationForm;
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
 case KeyF5:
 SHARED.notifySaveMessage = objListManager.VisualId1[0] + " has been printed";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN635G5N63501",
 vGUID      :  "504C6E8DE5404A2DB5C79A4B04FA4E48",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_1E8BDB4DC51A4EBD9D97F8C485AF9593);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_119.");}
var vSD_A0B7F6C77FE64CF3AE22AB2F87CAEF11 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType.indexOf("REPORTS") > -1)  {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 SHARED.returnDestinationForm = SHARED.lastDestinationForm;
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
 case KeyF5:
 SHARED.notifySaveMessage = "Numerical Listing has been printed.";
 let myScreen = SHARED.UF_getSelectElementSelectedItem("uselectNumericalListing");
 if (myScreen) SHARED.notifySaveMessage = "Numerical Listing" + " - " + myScreen.text.trim() + " has been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN680SCR01",
 vGUID      :  "04AFB6AD706949CE814D3118480C7B11",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_A0B7F6C77FE64CF3AE22AB2F87CAEF11);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_120.");}
var vSD_102BAFC7DB514037B92DC51D0D68DD0F = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType.indexOf("REPORTS") > -1)  {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 SHARED.returnDestinationForm = SHARED.lastDestinationForm;
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
 case KeyF5:
 SHARED.notifySaveMessage = "Daily Position Record has been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN335SCR01",
 vGUID      :  "2C07C0FDB9B64C8E9528870010CFB2C5",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_102BAFC7DB514037B92DC51D0D68DD0F);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_123.");}
var vSD_84A15460DF124FF6B0A8C12C888299F3 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType.indexOf("REPORTS") > -1)  {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 SHARED.returnDestinationForm = SHARED.lastDestinationForm;
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
 case KeyF5:
 SHARED.notifySaveMessage = "Prices Not Paid Listing has been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM316SCR01",
 vGUID      :  "5D90A45ADFAA432389E5E32CE226B2CB",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_84A15460DF124FF6B0A8C12C888299F3);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_122.");}
var vSD_FD7AC26799644141B7870AC4337A1D8E = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType.indexOf("REPORTS") > -1)  {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 SHARED.returnDestinationForm = SHARED.lastDestinationForm;
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
 case KeyF5:
 SHARED.notifySaveMessage = "Vat Receipt Listing has been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM540SCR01",
 vGUID      :  "ABEB4E7393F341F290DD23BE1BFC95CD",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100000000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_FD7AC26799644141B7870AC4337A1D8E);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_110.");}
var vSD_598C396064954011A2781D7BCF70D332 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType + " T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action + " T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM() + " T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage + " T_alertSaveMessage  " + SHARED.alertSaveMessage);
 let isHiddenDestination = false;
 if ((objBusinessObject.uUserObjectType == "OUTBOUND_BATCH_SCALE_TICKETS") || (objBusinessObject.uUserObjectType == "BATCH_TICKETS_OUTBOUND")) {
 if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 if((objBusinessObject.uUserObjectType == "BATCH_TICKETS_OUTBOUND") && (objCommand.uUserObjectType == "DETAILS")) {
 SETVALUE("utxtBranch",objListManager.NKey1[0]);
 SETVALUE("utxtTicket",objListManager.NKey2[0]);
 if (oPreviousForm.vName != "uGRN142SCR02") {
 isHiddenDestination = true;
 Q_SENDKEY("=uGRN142SCR01", KeyEnter, SHARED.payload);
 }
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false, isHiddenDestination: isHiddenDestination});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, isHiddenDestination: isHiddenDestination});
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
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN142SCR01",
 vGUID      :  "E480C4CD534C4F5B9D38E33CB8FBE3BD",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_598C396064954011A2781D7BCF70D332);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_101.");}
var vSD_A5A11DC439BF48B3900DB2764B3CA476 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType);
 TRACE("T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action);
 TRACE("T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_SHARED.payload.filterRebuildEvent " + SHARED.payload.filterRebuildEvent);
 TRACE("T_CurrentForm " + CURRENT_FORM());
 TRACE("T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_alertSaveMessage  " + SHARED.alertSaveMessage);
 TRACE("T_objGlobal.ustrSpecialMessage " + objGlobal.ustrSpecialMessage);
 TRACE("T_SHARED.notifySaveMessage " + SHARED.notifySaveMessage);
 if (objBusinessObject.uUserObjectType == "DEFERRED_PAYMENT_CHECKS") {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
 if (objGlobal.ustrSpecialMessage != undefined) {
 let usMessage = objGlobal.ustrSpecialMessage;
 if (usMessage.search(/No record selected/) != -1) {
 SHARED.notifySaveMessage = "";
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 }
 }
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
 case KeyEnter:
 break;
 case KeyF5:
 SHARED.notifySaveMessage = "Deferred Payment Checks have been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 case KeyF7:
 break;
 case KeyF9:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN610GRN61001",
 vGUID      :  "FB57A81F9BDE46118A7565E83276609D",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_A5A11DC439BF48B3900DB2764B3CA476);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_104.");}
var vSD_49AA333EBAB24C0CB0B9BB7D56F9E523 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "INBOUND_SCALE_TICKETS") {
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
 case KeyF5:
 SHARED.notifySaveMessage = "Today Scale Tickets have been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN516SCR01",
 vGUID      :  "327322BE65E34D579E30F69559A17B6A",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_49AA333EBAB24C0CB0B9BB7D56F9E523);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_109.");}
var vSD_6523FAE1232242CDA7FC45126257788B = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "APPLY_ARBITRAGE") {
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
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 case "uMSTMEN":
 {
 SENDKEY(KeyF7);
 Q_CHECK_CURRENT_FORM("uMSTMEN","Unable to navigate to form uMSTMEN");
 }
 break;
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN119SCR01",
 vGUID      :  "3B6AAB5DB6564B8EAF5BC1D032C27DB6",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","F1","F2","F3","F4","Apply",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "00000000010000000000000000000000000000",
 vFKEVLF : "00000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_6523FAE1232242CDA7FC45126257788B);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_95.");}
var vSD_A61CCE4D230D4B17A1B1AC5B0EEACB75 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "INBOUND_SETTLEMENTS") {
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
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN020SCR01",
 vGUID      :  "48BA8598769E4739BF3F0BECF1494331",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_A61CCE4D230D4B17A1B1AC5B0EEACB75);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_104.");}
var vSD_A9C29B579D024E7C86F5B117B55A6347 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyEnter:
 for ( idx = 1; CHECK_FIELD_EXISTS("Column1", idx);  idx++ )
 {
 let uSelection = GETVALUE("Column1", idx);
 if (uSelection != "") {
 SETVALUE("Column1","S", idx);
 }
 }
 break;
 case KeyF24:
 var Selection = false;
 let utxtSelect, utxtSettlement;
 for ( Index = 1; CHECK_FIELD_EXISTS("Column1", Index);  Index++ ) {
 utxtSelect = GETVALUE("Column1", Index);
 if (utxtSelect.trim() != "") {
 utxtSettlement = (CHECK_FIELD_EXISTS("Settle", Index)) ? GETVALUE("Settle", Index) : "";
 if (utxtSettlement.trim() != "") {
 SETVALUE("Column1","",Index);
 AVSAVEVALUE(parseInt(utxtSettlement, 10),"IBC","PDF","SETTLE");
 let w_set = parseInt(utxtSettlement, 10);
 AVSIGNALEVENT("DISPLAYSETPDF","FRAMEWORK","","","","","",w_set);
 break;
 }
 }
 }
 return(bReturn);
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN020SCR02C",
 vGUID      :  "8B7434C3C13749F580BC774DC0D91B1C",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","F2","F3","Select","F5",
 "Print","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "PDF","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0402221501062208091011121314151617221920212223240326272829303132333435363738",
 vFKERTS : "10000000000000000000000000110000000000",
 vFKEVLF : "10000000000000000000000010000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_A9C29B579D024E7C86F5B117B55A6347);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_105.");}
var vSD_77CE30F2D5914FF98C6692E7FD8C41D6 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN020SCRSUB",
 vGUID      :  "90AF1AC6DD4B43869624628ABDA8AD6E",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","F2","F3","Select","Proceed",
 "Print","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
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
try{VF_SY420_REGISTER_FORM(vSD_77CE30F2D5914FF98C6692E7FD8C41D6);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_107.");}
var vSD_5A88C8518F0C4DEE89D5C38532EF0E28 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType + " T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action + " T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM() + " T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage + " T_alertSaveMessage  " + SHARED.alertSaveMessage);
 TRACE("T_SHARED.saveBetweenScreens.scposType " + SHARED.saveBetweenScreens.scposType);
 let aXesWindow = GLOBAL_oAXESInterface.Terminal.windows[ GLOBAL_oAXESInterface.Terminal.windows.length -1];
 let screenHeader = aXesWindow.header.text;
 let allowKeyArray= [];
 switch (screenHeader) {
 case "Cash Priced":
 objGlobal.wcposType = "CP";
 break
 case "Open Storage":
 objGlobal.wcposType = "OS";
 break;
 case "Warehouse Receipt":
 objGlobal.wcposType = "WH";
 break;
 case "Spot Priced":
 objGlobal.wcposType = "SP";
 break;
 case "Minimum Price":
 objGlobal.wcposType = "MP";
 break;
 case "Basis Priced":
 objGlobal.wcposType = "BP";
 break;
 case "Delay Price":
 objGlobal.wcposType = "DP";
 break;
 case "Extend Price":
 objGlobal.wcposType = "EP";
 break;
 case "Grain Bank":
 objGlobal.wcposType = "GB";
 break;
 case "Delivered":
 objGlobal.wcposType = "DL";
 allowKeyArray = [KeyF5,KeyF8,KeyF11];
 break;
 case "Defer Payment":
 objGlobal.wcposType = "D/P";
 break;
 default:
 break;
 }
 let hideKeyArray = [];
 if (objBusinessObject.uUserObjectType == "CUSTOMER_POSITION") {
 hideKeyArray = [KeyEnter];
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload,
 enableExitKeys: false,
 hideKeyArray: hideKeyArray,
 allowKeyArray:allowKeyArray,
 showPopupButtons: true});
 if (GLOBAL_LastNavigationTarget != "") {
 SHARED.returnDestinationForm = GLOBAL_LastNavigationTarget;
 }
 } else {
 let allowKeyArray= [KeyF8];
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload,
 enableExitKeys: false,
 allowKeyArray: allowKeyArray,
 showPopupButtons: true});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 SETCURSORTOFIELD("utxtControl");
 break;
 case KeyF24:
 TRACE("T_SHARED.saveBetweenScreens.scposType " + SHARED.saveBetweenScreens.scposType);
 if(SHARED.saveBetweenScreens.scposType != "") {
 objGlobal.cposType = objGlobal.wcposType;
 SHARED.saveBetweenScreens.scposType = "";
 }
 let ustxtControl = (CHECK_FIELD_EXISTS("utxtControl")) ? parseInt(GETVALUE("utxtControl")): 0;
 AVSAVEVALUE(ustxtControl,"CPOS","CONTROL");
 AVSAVEVALUE(objGlobal.cposType,"CPOS","TYPE");
 AVSAVEVALUE(objGlobal.cposAccount,"CPOS","ACCOUNT");
 AVSWITCH("BUSINESSOBJECT",objBusinessObject.uUserObjectType,"WHAT_IF");
 break;
 default:
 break;
 }
 if(sButton != KeyF24) {SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);}
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn([KeyEnter]);
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN006SCROGD",
 vGUID      :  "29020545819B49C0B273CE08F931C30A",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Back","Back","F2","F3","Discounts","Advances",
 "Print","F7","Splits","F9","Tickets","Settlements",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "What If","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030402040708051007061314151617181920212223240326272829303132333435363738",
 vFKERTS : "10000000000000000000000000000000000000",
 vFKEVLF : "10000000000000000000000010000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_5A88C8518F0C4DEE89D5C38532EF0E28);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_108.");}
var vSD_95C9777D413D4DB988FE0A11918142C2 = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF4:
 SENDKEY(KeyF4);
 break;
 case KeyF6:
 SENDKEY(KeyF6);
 break;
 case KeyF7:
 SENDKEY(KeyF7);
 break;
 case KeyF4:
 SENDKEY(KeyF4);
 break;
 case KeyF8:
 SENDKEY(KeyF8);
 break;
 case KeyF10:
 SENDKEY(KeyF10);
 break;
 case KeyF11:
 SENDKEY(KeyF11);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN006SCRSEC",
 vGUID      :  "3B100C6404494FC99AE311B53E8ACD22",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Back","F2","F3","Discounts","F5",
 "Print","Exit","Splits","F9","Tickets","Set",
 "F12","F13","F14","F15","F16","F17",
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
try{VF_SY420_REGISTER_FORM(vSD_95C9777D413D4DB988FE0A11918142C2);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_119.");}
var vSD_0C5F04E6B7214AF7BAAEA1863B1E1939 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyEnter:
 objGlobal.cposAccount = parseInt(GETVALUE("utxtAccount"));
 let txtOpt = "";
 let result = false;
 let txtcol1,txtcol2,txtcol3,txtcol4 = false;
 for (Index = 1; CHECK_FIELD_EXISTS("utxtOpt", Index);  Index++ ) {
 txtcol1 = isNaN(parseInt(GETVALUE("utxtCol1", Index)));
 txtcol2 = isNaN(parseInt(GETVALUE("utxtCol2", Index)));
 txtcol3 = isNaN(parseInt(GETVALUE("utxtCol3", Index)));
 txtcol4 = isNaN(parseInt(GETVALUE("utxtCol4", Index)));
 result = ((txtcol1) && (txtcol2) && (txtcol3) && (txtcol4));
 if(!result) {
 txtOpt = GETVALUE("utxtOpt", Index);
 if ((txtOpt.toUpperCase() != "")) {
 objGlobal.cposType = GETVALUE("utxtPOSType", Index);
 break;
 }
 }
 }
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN005SCR02C",
 vGUID      :  "44F01503BB9C4764BC9E88A02F77458D",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","F2","F3","F4","F5",
 "Print","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0401050703060208091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000010000000000000000000110000000000",
 vFKEVLF : "10000010000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_0C5F04E6B7214AF7BAAEA1863B1E1939);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_103.");}
var vSD_C1E6AF4628064818A9C8C8C0B7CED95B = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyEnter:
 SETCURSORTOFIELD("utxtControl");
 break;
 case KeyF24:
 let ustxtControl = (CHECK_FIELD_EXISTS("utxtControl")) ? parseInt(GETVALUE("utxtControl")): 0;
 AVSAVEVALUE(ustxtControl,"CPOS","CONTROL");
 AVSAVEVALUE(objGlobal.cposType,"CPOS","TYPE");
 AVSAVEVALUE(objGlobal.cposAccount,"CPOS","ACCOUNT");
 AVSWITCH("BUSINESSOBJECT",objBusinessObject.uUserObjectType,"WHAT_IF");
 break;
 default:
 break;
 }
 if(sButton != KeyF24) {SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);}
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN006SCRSFCScaleTickets",
 vGUID      :  "886B64B503B14183A98400056D508FC0",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","F2","F3","Discounts","F5",
 "Print","Exit","F8","F9","Tickets","F11",
 "F12","F13","F14","F15","F16","F17",
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
try{VF_SY420_REGISTER_FORM(vSD_C1E6AF4628064818A9C8C8C0B7CED95B);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_115.");}
var vSD_01964BA87CBD4A9CA8E0BD67EE3491A6 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN006SCRCMT",
 vGUID      :  "8CF98F807A9648B3BD1CA69FE25A5925",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","Price","F3","F4","F5",
 "Print","Exit","Comments","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000000000000000000000000000000000000",
 vFKEVLF : "11000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_01964BA87CBD4A9CA8E0BD67EE3491A6);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_101.");}
var vSD_DF5E353D87DD4A4C9120343B7BC245C9 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType + " T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action + " T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM() + " T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage + " T_alertSaveMessage  " + SHARED.alertSaveMessage);
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 if((CURRENT_FORM() ==  oPreviousForm.vName) && (SHARED.alertSaveMessage != "")) {
 ALERT_MESSAGE(SHARED.alertSaveMessage);
 SHARED.alertSaveMessage = "";
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false, showPopupButtons: true});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF6:
 SHARED.alertSaveMessage = "Your request has been printed.";
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN006SCRGEN",
 vGUID      :  "8F7C415472F248CD8273541B29664359",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","Price","F3","F4","F5",
 "Print","Exit","Comments","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
try{VF_SY420_REGISTER_FORM(vSD_DF5E353D87DD4A4C9120343B7BC245C9);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_99.");}
var vSD_DB074F62E52C46D684FA4D2B8BA3CF79 = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF4:
 SENDKEY(KeyF4);
 break;
 case KeyF6:
 SENDKEY(KeyF6);
 break;
 case KeyF7:
 SENDKEY(KeyF7);
 break;
 case KeyF4:
 SENDKEY(KeyF4);
 break;
 case KeyF10:
 SENDKEY(KeyF10);
 break;
 case KeyF6:
 SENDKEY(KeyF6);
 break;
 case KeyF4:
 SENDKEY(KeyF4);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN006SCRSFC",
 vGUID      :  "917498F851E34F7FB1E16214D5185DE4",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","F2","F3","Applied","F5",
 "Print","Exit","F8","F9","Tickets","F11",
 "F12","F13","F14","F15","F16","F17",
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
try{VF_SY420_REGISTER_FORM(vSD_DB074F62E52C46D684FA4D2B8BA3CF79);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_116.");}
var vSD_12E841274BC84041BBCBCCF0C42C5240 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN006SCRPRI",
 vGUID      :  "91F64B213B6341F3AE3860FAADEFEA99",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","Price","F3","F4","F5",
 "Print","Exit","Comments","F9","F10","Settlements",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000000000000000000000000000000000",
 vFKEVLF : "11000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_12E841274BC84041BBCBCCF0C42C5240);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_100.");}
var vSD_ECE103F558BF434E803AF0C3473A66D4 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 objGlobal.cposAccount = parseInt(GETVALUE("utxtAccount"));
 let hideKeyArray = [];
 if (objCommand.uUserObjectType == "DETAILS") {
 hideKeyArray = [ KeyF3 ];
 }
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, hideKeyArray: hideKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 OVERRIDE_KEY_CAPTION_SCREEN("uSAL011SCR01C", KeyF1, "Refresh");
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN020ASCRSETC",
 vGUID      :  "BA091E7257E342D59E1E700FAF593EE0",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","Delete Info","Reverse","F4","F5",
 "Print","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0201040505060308091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000000000000000000000000000000000000",
 vFKEVLF : "01000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_ECE103F558BF434E803AF0C3473A66D4);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_106.");}
var vSD_B8614A27FA7244A0AD8F431483441191 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if ((objBusinessObject.uUserObjectType == "CUSTOMER_POSITION") || (objBusinessObject.uUserObjectType == "INQUIRE_CUSTOMER_POSITION")) {
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
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN005SCR01",
 vGUID      :  "DCB31E2EDDE74AF19FA1AD0312930FA6",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000001010000000000000000000000000000",
 vFKEVLF : "10000001000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_B8614A27FA7244A0AD8F431483441191);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_97.");}
var vSD_5C955D9073364D41B2C9FDC83937E7E9 = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF4:
 SENDKEY(KeyF4);
 break;
 case KeyF6:
 SENDKEY(KeyF6);
 break;
 case KeyF7:
 SENDKEY(KeyF7);
 break;
 case KeyF4:
 SENDKEY(KeyF4);
 break;
 case KeyF10:
 SENDKEY(KeyF10);
 break;
 case KeyF6:
 SENDKEY(KeyF6);
 break;
 case KeyF4:
 SENDKEY(KeyF4);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN006SCRAPC",
 vGUID      :  "DD0A29EB481B4519A0E6D5A6E6436335",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","Price","F3","Applied","F5",
 "Print","Exit","F8","F9","Tickets","F11",
 "F12","F13","F14","F15","F16","F17",
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
try{VF_SY420_REGISTER_FORM(vSD_5C955D9073364D41B2C9FDC83937E7E9);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_117.");}
var vSD_BCEE34B124234DE99024F40560DD677C = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let hideKeyArray = [];
 if (objBusinessObject.uUserObjectType == "CUSTOMER_POSITION") {
 hideKeyArray = [KeyEnter];
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload,
 enableExitKeys: false,
 hideKeyArray: hideKeyArray,
 showPopupButtons: true});
 if (GLOBAL_LastNavigationTarget != "") {
 SHARED.returnDestinationForm = GLOBAL_LastNavigationTarget;
 }
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, showPopupButtons: true});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 SETCURSORTOFIELD("utxtControl");
 break;
 case KeyF24:
 let ustxtControl = (CHECK_FIELD_EXISTS("utxtControl")) ? parseInt(GETVALUE("utxtControl")): 0;
 AVSAVEVALUE(ustxtControl,"CPOS","CONTROL");
 AVSAVEVALUE(objGlobal.cposType,"CPOS","TYPE");
 AVSAVEVALUE(objGlobal.cposAccount,"CPOS","ACCOUNT");
 AVSWITCH("BUSINESSOBJECT",objBusinessObject.uUserObjectType,"WHAT_IF");
 break;
 default:
 break;
 }
 if(sButton != KeyF24) {SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);}
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn([KeyEnter]);
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN006SCRWHDOpenStorage",
 vGUID      :  "DD928D5B7CB0441091B130AE1C13090F",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","F2","F3","Discounts","F5",
 "Print","Exit","F8","F9","Tickets","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "What If","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000000000000000000000000000000000",
 vFKEVLF : "10000000000000000000000010000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_BCEE34B124234DE99024F40560DD677C);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_114.");}
var vSD_699AD9C6D67B4A3E962AC323CCE64E39 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType + " T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action + " T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM() + " T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage + " T_alertSaveMessage  " + SHARED.alertSaveMessage);
 TRACE("T_SHARED.saveBetweenScreens.scposType " + SHARED.saveBetweenScreens.scposType);
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let aXesWindow = GLOBAL_oAXESInterface.Terminal.windows[ GLOBAL_oAXESInterface.Terminal.windows.length -1];
 let screenHeader = aXesWindow.header.text;
 let allowKeyArray= [];
 switch (screenHeader) {
 case "Cash Priced":
 objGlobal.wcposType = "CP";
 break
 case "Open Storage":
 objGlobal.wcposType = "OS";
 break;
 case "Warehouse Receipt":
 allowKeyArray= [KeyF8];
 objGlobal.wcposType = "WH";
 break;
 case "Spot Priced":
 objGlobal.wcposType = "SP";
 break;
 case "Minimum Price":
 objGlobal.wcposType = "MP";
 break;
 case "Basis Priced":
 objGlobal.wcposType = "BP";
 break;
 case "Delay Price":
 objGlobal.wcposType = "DP";
 break;
 case "Extend Price":
 allowKeyArray= [];
 objGlobal.wcposType = "EP";
 break;
 case "Grain Bank":
 objGlobal.wcposType = "GB";
 break;
 case "Delivered":
 objGlobal.wcposType = "DL";
 break;
 case "Defer Payment":
 objGlobal.wcposType = "D/P";
 break;
 default:
 allowKeyArray= [KeyF8];
 break;
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload,
 enableExitKeys: false,
 allowKeyArray: allowKeyArray,
 showPopupButtons: true});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 SETCURSORTOFIELD("utxtControl");
 break;
 case KeyF24:
 TRACE("T_SHARED.saveBetweenScreens.scposType " + SHARED.saveBetweenScreens.scposType);
 if(SHARED.saveBetweenScreens.scposType != "") {
 objGlobal.cposType = objGlobal.wcposType;
 SHARED.saveBetweenScreens.scposType = "";
 }
 let ustxtControl = (CHECK_FIELD_EXISTS("utxtControl")) ? parseInt(GETVALUE("utxtControl")): 0;
 AVSAVEVALUE(ustxtControl,"CPOS","CONTROL");
 AVSAVEVALUE(objGlobal.cposType,"CPOS","TYPE");
 AVSAVEVALUE(objGlobal.cposAccount,"CPOS","ACCOUNT");
 AVSWITCH("BUSINESSOBJECT",objBusinessObject.uUserObjectType,"WHAT_IF");
 break;
 default:
 break;
 }
 if(sButton != KeyF24) SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn([KeyEnter]);
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN006SCRWHD",
 vGUID      :  "E82114CA3E0C4D39BF30019155E9971D",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Back","Back","F2","F3","Discounts","Advances",
 "Print","Exit","Splits","F9","Tickets","Settlements",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "What If","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0138383802050708041007061314151617181920212223240326272829303132333435363738",
 vFKERTS : "10000000000000000000000000000000000000",
 vFKEVLF : "10000000000000000000000010000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_699AD9C6D67B4A3E962AC323CCE64E39);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_118.");}
var vSD_FE0E35C8A67E4AF38F9FECA5C80106A4 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN005SCRDIC",
 vGUID      :  "F7C4E1BF0EAC4EA4BEEE84A9BBB2643B",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Restart","F2","F3","Discounts","F5",
 "Print","F7","F8","F9","Tickets","Settlements",
 "F12","F13","F14","F15","F16","F17",
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
try{VF_SY420_REGISTER_FORM(vSD_FE0E35C8A67E4AF38F9FECA5C80106A4);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_109.");}
var vSD_2DBD6F1D853E40A8978B683CF544B037 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "INBOUND_SETTLEMENTS") {
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
 case KeyF5:
 SHARED.notifySaveMessage = "Pay Daily has been run.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM330SCR01",
 vGUID      :  "F333B652407F43BDB832140D234B8512",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_2DBD6F1D853E40A8978B683CF544B037);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_123.");}
var vSD_70A2721A873B4934B618B9EEDA3C3279 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "GROUP_TICKETS") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
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
 case KeyF3:
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.delete, filterRebuildEvent: SHARED.filterRebuildEvent.deleteListEntryy});
 break;
 case KeyF5:
 if (objCommand.uUserObjectType == "NEW") {
 let myAkey1 = GETVALUE("<utxtAlphaField>");
 SHARED.Akey = (myAKey1,"","","","");
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.create, filterRebuildEvent: SHARED.filterRebuildEvent.addListEntry});
 } else {
 }
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM162SCR01",
 vGUID      :  "2A8DEDD93F304146994138338D1A7634",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "00000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_70A2721A873B4934B618B9EEDA3C3279);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_124.");}
var vSD_5D9322A995644B9A8F435525C39BE329 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType.indexOf("REPORTS") > -1)  {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 SHARED.returnDestinationForm = SHARED.lastDestinationForm;
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
 case KeyF5:
 let selectElement = SHARED.UF_getSelectElementSelectedItem("uselectPrintBill");
 if ( selectElement && (selectElement.row == 0)) {
 SHARED.notifySaveMessage = "Bill/Drying Discounts has been printed.";
 } else {
 SHARED.notifySaveMessage = "Bill/Drying Discounts has been run.";
 }
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM350SCR01",
 vGUID      :  "C38D40ECEC2742AEA067E22D7A74A117",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_5D9322A995644B9A8F435525C39BE329);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_125.");}
var vSD_39A5B20CD27E45BE8A2E1A491070EF34 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if( (SHARED.payload.action == SHARED.payload.initialise) && (CURRENT_FORM() != oPreviousForm.vName) ){
 var today = new Date();
 var dateToday = ('0' + (today.getMonth()+1)).slice(-2)
 + ('0' + today.getDate()).slice(-2)
 + today.getFullYear();
 SETVALUE("utxtEndDate", dateToday);
 }
 if (objBusinessObject.uUserObjectType.indexOf("REPORTS") > -1)  {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 SHARED.returnDestinationForm = SHARED.lastDestinationForm;
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
 case KeyF5:
 SHARED.notifySaveMessage = "Assessment Variances has been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uDATRGNSCR01",
 vGUID      :  "A62187F5A7B144F7B031460EAA387878",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100000000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_39A5B20CD27E45BE8A2E1A491070EF34);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_231.");}
var vSD_531F9390BEF44D38B2411F40F8739682 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 hideKeyArray = [KeyF7];
 objGlobal.ustrReportCL = true;
 SHARED.saveBetweenScreens.caption = objListManager.VisualId1[0];
 if (objBusinessObject.uUserObjectType.indexOf("REPORTS") > -1)  {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false,hideKeyArray: hideKeyArray});
 SHARED.returnDestinationForm = SHARED.lastDestinationForm;
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false, hideKeyArray: hideKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 TRACE("NC TEST uCOM550SLSSCR01 - DOES IT GET HERE");
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 let myScreen = SHARED.UF_getSelectElementSelectedItem("uselectContractListing");
 if (myScreen) SHARED.saveBetweenScreens.caption = objListManager.VisualId1[0] + " - " + myScreen.text.trim();
 SHARED.saveBetweenScreens.caption = "Contract Listing has been printed.";
 TRACE(CURRENT_FORM() + " SHARED.saveBetweenScreens.caption " + SHARED.saveBetweenScreens.caption);
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM550SLSCR01",
 vGUID      :  "2CD97F609ADB4F968AF79ED8A1F33B9D",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_531F9390BEF44D38B2411F40F8739682);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_232.");}
var vSD_9A355A5C7A5643ED9A70D334E3D89EC1 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 hideKeyArray = [KeyF7];
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, hideKeyArray: hideKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 SHARED.notifySaveMessage = SHARED.saveBetweenScreens.caption;
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 case KeyF7:
 Q_NAVIGATE_TO_SCREEN("=uMSTMEN",SHARED.returnDestinationForm);
 SHARED.UF_setPayload({action: SHARED.action.navigate});
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM550SCRALL",
 vGUID      :  "729B89A143C24F4EB87204C2DD97B4BD",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_9A355A5C7A5643ED9A70D334E3D89EC1);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_233.");}
var vSD_8F18C131EBB1445F8AAE46A6124DFEBE = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF5:
 SHARED.notifySaveMessage = SHARED.saveBetweenScreens.caption + " has been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 case KeyF7:
 Q_NAVIGATE_TO_SCREEN("=uMSTMEN",SHARED.returnDestinationForm);
 SHARED.UF_setPayload({action: SHARED.action.navigate});
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM550SCRParameters",
 vGUID      :  "8B94398D2CE84545BD37AB445D71AF78",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_8F18C131EBB1445F8AAE46A6124DFEBE);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_234.");}
var vSD_542DD660A1084C68A63E3CA81173F320 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let lastNavigationTarget = SHARED.UF_getLastNavigationTarget();
 let isAttachedToCH = (lastNavigationTarget == CURRENT_FORM());
 TRACE(CURRENT_FORM(), "lastNavigationTarget " + lastNavigationTarget);
 let isHiddenDestination = false;
 let doNavigation = false;
 if ( (SHARED.payload.action == SHARED.action.initialise) && (oPreviousForm.vName != CURRENT_FORM() ) ) {
 TRACE(CURRENT_FORM(), ("objListManager.NColumn10[0] " + objListManager.NColumn10[0]), ("objBusinessObject.uUserObjectType " + objBusinessObject.uUserObjectType));
 switch (objBusinessObject.uUserObjectType) {
 case "FREIGHT_CONTRACTS":
 case "FREIGHT_COMMENTS":
 case "SALES_CONTRACTS":
 case "SALES_CONTRACTS_COMMENT":
 case "SHIPMENTS":
 case "OUTBOUND_SETTLEMENTS":
 case "SETTLEMENTS_COMMENTS":
 case "TRANSFER_SETTLEMENTS":
 case "SHIPMENT_COMMENTS":
 switch (objListManager.NColumn10[0]) {
 case 1:
 SHARED.UF_setSelectElementSelectedItemByText( "uSelectionOptions", SHARED.commonSelectionOptions.open );
 break;
 case 2:
 SHARED.UF_setSelectElementSelectedItemByText( "uSelectionOptions", SHARED.commonSelectionOptions.thisYTD );
 break;
 case 3:
 SHARED.UF_setSelectElementSelectedItemByText( "uSelectionOptions", SHARED.commonSelectionOptions.priorYear );
 SHARED.UF_setSelectElementSelectedItemByText( "uSelectionYear", objListManager.AColumn10[0] );
 break;
 case 4:
 SHARED.UF_setSelectElementSelectedItemByText( "uSelectionOptions", SHARED.commonSelectionOptions.all );
 break;
 }
 doNavigation = true;
 isHiddenDestination = true;
 break;
 case "FREIGHT_LOADS":
 isAttachedToCH = true;
 break;
 }
 }
 if (isAttachedToCH) {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload,  isHiddenDestination: isHiddenDestination, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, isHiddenDestination: isHiddenDestination, enableExitKeys: true});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 if (doNavigation) {
 SENDKEY(KeyEnter, SHARED.payload);
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF7:
 SHARED.notifySaveMessage = "";
 SHARED.alertSaveMessage = "";
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 TRACE("T_objGlobal.ustrReportCL " + objGlobal.ustrReportCL);
 if  (objGlobal.ustrReportCL == true) {
 Q_NAVIGATE_TO_SCREEN("", "uCOM350SCR01");
 break;
 }
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCommonSelectInquiry",
 vGUID      :  "067B347763CE4FB49B821EA42FF591A3",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_542DD660A1084C68A63E3CA81173F320);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_235.");}
var vSD_FDD667D362284336894B6434C0AAF274 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 HIDE_CURRENT_FORM();
 SETBUSY(true);
 objGlobal.ustrSpecialMessage = GETVALUE("utxtSpecialMessage");
 var flagSaveCheckState = GLOBAL_flagRecursionCheck;
 if(objBusinessObject.uUserObjectType == "DEFERRED_PAYMENT_CHECKS")
 {
 ALERT_MESSAGE(objGlobal.ustrSpecialMessage);
 } else {
 SHARED.ustrSpecialMessage = objGlobal.ustrSpecialMessage;
 }
 GLOBAL_flagRecursionCheck = false;
 SENDKEY(KeyEnter, SHARED.payload);
 GLOBAL_flagRecursionCheck  = flagSaveCheckState;
 return(bReturn);
 },
 vName      :  "uDSPINTMSGSCR01",
 vGUID      :  "B2A7173B979746C7854239768687D8D7",
 vFKC       :    null,
 vFKERTS    :    null,
 vFKEVLF    :    null,
 vFKSND     :    null,
 vFKSEQ     :    null,
 vTargets   :  Array(),
 vTYPE      :  "S"
 };
try{VF_SY420_REGISTER_FORM(vSD_FDD667D362284336894B6434C0AAF274);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_236.");}
var vSD_0D56B0AAD70B400F98A26A9CFFFC0D58 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType.indexOf("REPORTS") > -1)  {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 SHARED.returnDestinationForm = SHARED.lastDestinationForm;
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
 case KeyF5:
 SHARED.notifySaveMessage = "Customer Delivery History has been printed";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN566SCR01",
 vGUID      :  "82A8696FA2B54EDF96B17162BE518A95",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_0D56B0AAD70B400F98A26A9CFFFC0D58);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_237.");}
var vSD_D718F61001DE430BA71C53CFE80389E6 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 SHARED.currentReportName = CURRENT_FORM();
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType + " T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action + " T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM() + " T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage + " T_alertSaveMessage  " + SHARED.alertSaveMessage);
 TRACE("T_currentReportName " + SHARED.currentReportName);
 if (objBusinessObject.uUserObjectType.indexOf("REPORTS") > -1)  {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage !== "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise");
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
 if(oPreviousForm.vName == "uDSPINTMSGSCR01") {
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 ALERT_MESSAGE(SHARED.alertSaveMessage);
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 SHARED.returnDestinationForm = SHARED.lastDestinationForm;
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
 case KeyF5:
 SHARED.alertSaveMessage = "Delivered Scale Tickets has been printed";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN522SCR01",
 vGUID      :  "7FEE9615F8784CAFAD6EB9D6E9201A30",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_D718F61001DE430BA71C53CFE80389E6);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_238.");}
var vSD_807F0BF160554BFD8CB5CE50F49E8060 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType.indexOf("REPORTS") > -1)  {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 SHARED.returnDestinationForm = SHARED.lastDestinationForm;
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
 case KeyF5:
 SHARED.notifySaveMessage = "Grain inspection report has been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN340ONE",
 vGUID      :  "1E08B15EE7324A2B80347DF90630BE7F",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_807F0BF160554BFD8CB5CE50F49E8060);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_239.");}
var vSD_31A827F221674CC48AF5F82A96D6E47C = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uILEERRHDLILEERRO1",
 vGUID      :  "4D9FDD96446941C9A6B2D3027A5702C9",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
try{VF_SY420_REGISTER_FORM(vSD_31A827F221674CC48AF5F82A96D6E47C);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_240.");}
var vSD_4A45207FE6D84E369FAEA1141C3BC209 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (SHARED.payload.action == SHARED.action.initialise) {
 let today = new Date();
 let dateToday = ('0' + (today.getMonth()+1)).slice(-2)
 + ('0' + today.getDate()).slice(-2)
 + today.getFullYear();
 }
 if (objBusinessObject.uUserObjectType.indexOf("REPORTS") > -1)  {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 SHARED.returnDestinationForm = SHARED.lastDestinationForm;
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
 case KeyF5:
 SHARED.notifySaveMessage = "Numeric Scale Tickets has been printed";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN518SCR01",
 vGUID      :  "CAF13FDEDD0B4A9C82EA21AC873AB5EA",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_4A45207FE6D84E369FAEA1141C3BC209);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_241.");}
var vSD_002DB28B939C42A8AE77B4B66E693F51 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType.indexOf("REPORTS") > -1)  {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 SHARED.returnDestinationForm = SHARED.lastDestinationForm;
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
 case KeyF5:
 SHARED.notifySaveMessage = "Position Listing has been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM500SCR01",
 vGUID      :  "BFB7ABE05E2241C3B1EE70BC5D9C9A56",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_002DB28B939C42A8AE77B4B66E693F51);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_242.");}
var vSD_0C96D8D6D45A4F23898D8F4AAFF50D69 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType.indexOf("REPORTS") > -1)  {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 SHARED.returnDestinationForm = SHARED.lastDestinationForm;
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
 case KeyF5:
 SHARED.notifySaveMessage = "Recalculate Inbound Discounts has been run.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN365SCR01",
 vGUID      :  "B31930AAE38449A486BC4DB9BB5CCC5D",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_0C96D8D6D45A4F23898D8F4AAFF50D69);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_243.");}
var vSD_2D2A352531384CBC9A8CF11D580B7897 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType + " T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action + " T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM() + " T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage + " T_alertSaveMessage  " + SHARED.alertSaveMessage);
 let isHiddenDestination = false;
 let hideScreenMessage = "";
 SHARED.saveBetweenScreens.utxtBranch = "";
 SHARED.saveBetweenScreens.utxtTicket = "";
 if ((objBusinessObject.uUserObjectType == "INBOUND_SCALE_TICKETS") || (objBusinessObject.uUserObjectType == "TICKET_SPLITS"))  {
 if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)){
 if (objCommand.uUserObjectType == "DETAILS"){
 isHiddenDestination = true;
 SETVALUE("utxtBranch",objListManager.NKey1[0]);
 SETVALUE("utxtTicket",objListManager.NKey2[0]);
 SHARED.saveBetweenScreens.utxtBranch = GETVALUE("utxtBranch");
 SHARED.saveBetweenScreens.utxtTicket = GETVALUE("utxtTicket");
 Q_SENDKEY("=" + CURRENT_FORM(), KeyEnter, SHARED.payload);
 } else {
 SHARED.saveBetweenScreens.utxtBranch = GETVALUE("utxtBranch");
 SHARED.saveBetweenScreens.utxtTicket = GETVALUE("utxtTicket");
 }
 SHARED.saveBetweenScreens.uApplyOptCount = 1;
 } else if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() == oPreviousForm.vName)) {
 hideScreenMessage = SHARED.UF_get5250Message();
 if (objCommand.uUserObjectType == "DETAILS"){
 isHiddenDestination = true;
 } else {
 MESSAGE(hideScreenMessage);
 }
 } else if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() != oPreviousForm.vName)) {
 AVSIGNALEVENT("Refresh_Child_Splits","FRAMEWORK","","","","","",objListManager.NKey1[0],objListManager.NKey2[0]);
 if ((objCommand.uUserObjectType == "DETAILS") && (SHARED.saveBetweenScreens.uApplyOptCount > 0)) {
 AVSIGNALEVENT("Enter_Note","FRAMEWORK","","","","","",objListManager.NKey1[0],objListManager.NKey2[0]);
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false, isHiddenDestination: isHiddenDestination, hideScreenMessage: hideScreenMessage});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 SHARED.saveBetweenScreens.utxtBranch = GETVALUE("utxtBranch");
 SHARED.saveBetweenScreens.utxtTicket = GETVALUE("utxtTicket");
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN115SCR01",
 vGUID      :  "B815C0659D284F259BDEEFE5D9D4F9A1",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","Create Delivery","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000011000000000000000000000000000",
 vFKEVLF : "10000000001000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_2D2A352531384CBC9A8CF11D580B7897);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_260.");}
var vSD_FD6962BB0E464FFF89050105E98D2619 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType + " T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action + " T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM() + " T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage + " T_alertSaveMessage  " + SHARED.alertSaveMessage);
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let enableExitKeys = true;
 if (objCommand.uUserObjectType == "DETAILS"){
 enableExitKeys = false;
 }
 if (objCommand.uUserObjectType == "NEW"){
 SETKEYENABLED("uGRN115SCR02C",KeyF16,false,false);
 } else {SETKEYENABLED("uGRN115SCR02C",KeyF16,true,true);}
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: enableExitKeys});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType + " T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action + " T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM());
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage + " T_alertSaveMessage  " + SHARED.alertSaveMessage + " " + sButton);
 SHARED.saveBetweenScreens.uApplyOptCount = 0;
 SHARED.saveBetweenScreens.uApplyAccSave = "";
 TRACE("T_uApplyOptCount 2C buttonclick " + SHARED.saveBetweenScreens.uApplyOptCount);
 switch (sButton)
 {
 case KeyF5:
 if(objCommand.uUserObjectType == "NEW")
 {
 let utxtTicket = CHECK_FIELD_EXISTS("utxtTicket") ? GETVALUE("utxtTicket") : 0;
 let utxtBranch = CHECK_FIELD_EXISTS("utxtBranch") ? GETVALUE("utxtBranch") : 0;
 TRACE("T_utxtTicket " + utxtTicket + " brname " + utxtBranch);
 SHARED.AKey = [utxtBranch,"","","",""];
 SHARED.NKey = [0,parseInt(utxtTicket, 10),0,0,0];
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.create, filterRebuildEvent: SHARED.filterRebuildEvent.addListEntry});
 }
 break;
 case KeyF16:
 if (objCommand.uUserObjectType != "NEW"){
 let ustxtTicket = parseInt(SHARED.saveBetweenScreens.utxtTicket);
 let ustxtBranch = parseInt(SHARED.saveBetweenScreens.utxtBranch);
 TRACE("T_Ticket " + ustxtTicket + " Branch " + ustxtBranch );
 AVSAVEVALUE(ustxtTicket,"MFILE","TICKET");
 AVSAVEVALUE(ustxtBranch,"MFILE","LOC");
 AVSAVEVALUE("SCALETIX","MFILE","INTERFACE");
 AVSWITCH("BUSINESSOBJECT",objBusinessObject.uUserObjectType,"MFILE");
 }
 break;
 case KeyF12:
 if(objCommand.uUserObjectType == "DETAILS")
 {
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.delete, filterRebuildEvent: SHARED.filterRebuildEvent.updateListEntry});
 SHARED.notifySaveMessage = "Scale Ticket " + objListManager.NKey2[0] + " has been updated.";
 }
 else if(objCommand.uUserObjectType == "NEW")
 {
 let utxtTicket = CHECK_FIELD_EXISTS("utxtTicket") ? GETVALUE("utxtTicket") : 0;
 let utxtBranch = CHECK_FIELD_EXISTS("utxtBranch") ? GETVALUE("utxtBranch") : 0;
 SHARED.AKey = [utxtBranch, "","","",""];
 SHARED.NKey = [0,parseInt(utxtTicket, 10),0,0,0];
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.create, filterRebuildEvent: SHARED.filterRebuildEvent.addListEntry});
 }
 break;
 }
 if(sButton != KeyF16) {SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);}
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN115SCR02C",
 vGUID      :  "C165A196AFEE4F74A2206A2C1BDA925F",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","Delete","F4","Save",
 "F6","F7","F8","Srch","Other Info","Freight",
 "Apply","F13","F14","F15","M-Files","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102130315171108091004050614151607181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000001000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_FD6962BB0E464FFF89050105E98D2619);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_261.");}
var vSD_E256BBE13B074551A9FF1772B7B98C2B = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType + " T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action + " T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM() + " T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage + " T_alertSaveMessage  " + SHARED.alertSaveMessage);
 TRACE("T_uApplyOptCount " + SHARED.saveBetweenScreens.uApplyOptCount + " acct " + SHARED.saveBetweenScreens.uApplyAccSave);
 let enableExitKeys = true;
 TRACE("T_uApplyOptCount 5 arrive " + SHARED.saveBetweenScreens.uApplyOptCount);
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 if (SHARED.saveBetweenScreens.uApplyOptCount == 0) {
 enableExitKeys = true;
 SHARED.saveBetweenScreens.uApplyOptCount++; }
 else {
 enableExitKeys = false;
 SHARED.saveBetweenScreens.uApplyOptCount++ }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: enableExitKeys});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 SHARED.notifySaveMessage = "Scale Ticket " + objListManager.NKey2[0] + " has been updated.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.delete});
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN115SCR05",
 vGUID      :  "E1CCBA1BFEA84B0C9EF60F947269CFE3",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","F4","Proceed",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
try{VF_SY420_REGISTER_FORM(vSD_E256BBE13B074551A9FF1772B7B98C2B);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_262.");}
var vSD_9928C66C62FD486A9CAE9EBFD97719B9 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if ((objBusinessObject.uUserObjectType == "INBOUND_SCALE_TICKETS") || (objBusinessObject.uUserObjectType == "INBOUND_BATCH_SCALE_TICKETS")) {
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
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN118SCR01",
 vGUID      :  "A2E85E7623594D978639B64E852346EC",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_9928C66C62FD486A9CAE9EBFD97719B9);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_264.");}
var vSD_0998E0E821394265944CE2A3400CFF3A = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF5:
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN118SCR02",
 vGUID      :  "09F8D0CE9C7A4FA7B63BC2E6584FA132",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","F2","Delete","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0401030205060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000000000000000000000000000000000000",
 vFKEVLF : "11000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_0998E0E821394265944CE2A3400CFF3A);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_265.");}
var vSD_F5CCC48873834715A11D82B03F2F2D46 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType.indexOf("REPORTS") > -1)  {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
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
 case KeyF5:
 SHARED.notifySaveMessage = "Out/Tfr Scale Ticket List has been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN740SCR01",
 vGUID      :  "7FA275C69D014331A95857B20E2CFB9E",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_F5CCC48873834715A11D82B03F2F2D46);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_246.");}
var vSD_0E46027A49464080927C6188D3EC671C = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType.indexOf("REPORTS") > -1)  {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 SHARED.returnDestinationForm = SHARED.lastDestinationForm;
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
 case KeyF5:
 SHARED.notifySaveMessage = "Freight Contract List has been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uFRT500SCR01",
 vGUID      :  "1A4A1EC9D2754E6D8917F197D0A2E15C",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_0E46027A49464080927C6188D3EC671C);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_266.");}
var vSD_67E1B8D4E0FF41C2A5A2A7FE431FDAB6 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType.indexOf("REPORTS") > -1)  {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 SHARED.returnDestinationForm = SHARED.lastDestinationForm;
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
 case KeyF5:
 SHARED.notifySaveMessage = "Sales Contract List has been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT505SCR01",
 vGUID      :  "58CE53AEFDA3411A90F90B66BA2CB2D9",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_67E1B8D4E0FF41C2A5A2A7FE431FDAB6);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_267.");}
var vSD_6F5C2CAC4EB6420C9C1513358CA9E287 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType.indexOf("REPORTS") > -1)  {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 SHARED.returnDestinationForm = SHARED.lastDestinationForm;
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
 case KeyF5:
 SHARED.notifySaveMessage = "Shipment Listing has been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT510SCR01",
 vGUID      :  "B7C40B08B08C48789C7BA581C9EB23D0",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_6F5C2CAC4EB6420C9C1513358CA9E287);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_268.");}
var vSD_EA95E62674294A5BB6FDB9413426F511 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyEnter:
 break;
 case KeyF1:
 break;
 case KeyF5:
 SHARED.alertSaveMessage = "This record has been updated";
 SHARED.notifySaveMessage = "Transfer complete.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change, filterRebuildEvent: "Refresh_Instance_List"});
 break;
 case KeyF9:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM155SCRTFRC",
 vGUID      :  "282454409DD64E81B9D665A4A2EAD581",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","F4","Save",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102130405030708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_EA95E62674294A5BB6FDB9413426F511);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_327.");}
var vSD_322B221BDB124A34A597E66ADE8A0A66 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 break;
 case KeyF1:
 break;
 case KeyF4:
 break;
 case KeyF5:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM155SCRFPTOCS",
 vGUID      :  "70038845C40F46ED969E37FF349F1C83",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Restart","F2","F3","Select","Continue",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0302030401020708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10001100000000000000000000000000000000",
 vFKEVLF : "00001100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_322B221BDB124A34A597E66ADE8A0A66);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_326.");}
var vSD_DA4D06FFAAEF418799A39562D85A148B = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let isHiddenDestination = false;
 let hideScreenMessage = "Test";
 if (objBusinessObject.uUserObjectType == "CUSTOMER_POSITION") {
 if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 if(objCommand.uUserObjectType == "TRANSFER"){
 if((objListManager.AKey1[0] != "OS") && (objListManager.AKey1[0] != "GB") && (objListManager.AKey1[0] != "WH") && (objListManager.AKey1[0] != "DL") &&
 (objListManager.AKey1[0] != "DP") && (objListManager.AKey1[0] != "SP"))
 {
 isHiddenDestination = true;
 hideScreenMessage = "Please choose a valid position";
 } else {
 SETVALUE("utxtAccount",objListManager.NColumn3[0]);
 SETVALUE("utxtControl",objListManager.NKey1[0]);
 if(objListManager.AKey1[0] == "OS"){
 SHARED.UF_setSelectElementSelectedItemByText("utxtPosOpt","Open Storage");
 }
 else if(objListManager.AKey1[0] == "GB"){
 SHARED.UF_setSelectElementSelectedItemByText("utxtPosOpt","Grain Bank");
 }
 else if(objListManager.AKey1[0] == "WH"){
 SHARED.UF_setSelectElementSelectedItemByText("utxtPosOpt","Warehouse Receipt");
 }
 else if(objListManager.AKey1[0] == "DL"){
 SHARED.UF_setSelectElementSelectedItemByText("utxtPosOpt","Delivered");
 }
 else if(objListManager.AKey1[0] == "DP"){
 SHARED.UF_setSelectElementSelectedItemByText("utxtPosOpt","Delay Price");
 }
 else if(objListManager.AKey1[0] == "SP"){
 SHARED.UF_setSelectElementSelectedItemByText("utxtPosOpt","Spot Price");
 }
 Q_SENDKEY("=uCOM155SCR01",KeyEnter,SHARED.payload);
 }
 }
 } else if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() == oPreviousForm.vName)) {
 if(objCommand.uUserObjectType == "TRANSFER"){
 isHiddenDestination = true;
 hideScreenMessage = SHARED.UF_get5250Message();
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload,
 isHiddenDestination: isHiddenDestination,
 hideScreenMessage: hideScreenMessage,
 enableExitKeys: false});
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
 case KeyEnter:
 break;
 case KeyF7:
 break;
 case KeyF9:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM155SCR01",
 vGUID      :  "9018F56CA6324A02A706FAB93F7A5FCD",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "00000000000000000000000000000000000000",
 vFKEVLF : "00000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_DA4D06FFAAEF418799A39562D85A148B);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_325.");}
var vSD_99E4703118DD436EA48F1FF10C935DCE = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let enableExitKeys = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false,  hideKeyArray: hideKeyArray});
 } else {
 if ((objBusinessObject.uUserObjectType == "CUSTOMER_POSITION") && (objCommand.uUserObjectType == "MAINTAIN")) {
 enableExitKeys = false;
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: enableExitKeys});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 break;
 case KeyF1:
 break;
 case KeyF5:
 SHARED.returnDestinationCH = "DETAILS";
 SHARED.alertSaveMessage = "This record has been updated.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 case KeyF9:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM200SCRDP",
 vGUID      :  "1473A6DCFDC1440E8ABEB007157939B8",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Restart","F2","F3","F4","Save",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
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
try{VF_SY420_REGISTER_FORM(vSD_99E4703118DD436EA48F1FF10C935DCE);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_334.");}
var vSD_7190C8B456304D1194639FD34840AC68 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let enableExitKeys = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false,  hideKeyArray: hideKeyArray});
 } else {
 if ((objBusinessObject.uUserObjectType == "CUSTOMER_POSITION") && (objCommand.uUserObjectType == "MAINTAIN")) {
 enableExitKeys = false;
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: enableExitKeys});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 break;
 case KeyF1:
 break;
 case KeyF5:
 SHARED.returnDestinationCH = "DETAILS";
 SHARED.alertSaveMessage = "This record has been updated.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 case KeyF9:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM200SCRWH",
 vGUID      :  "293A7ED5936347BFB6215563CFBCB160",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Restart","F2","F3","F4","Save",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
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
try{VF_SY420_REGISTER_FORM(vSD_7190C8B456304D1194639FD34840AC68);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_331.");}
var vSD_34FBE7AB55724515953851371ED9F101 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let enableExitKeys = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false,  hideKeyArray: hideKeyArray});
 } else {
 if ((objBusinessObject.uUserObjectType == "CUSTOMER_POSITION") && (objCommand.uUserObjectType == "MAINTAIN")) {
 enableExitKeys = false;
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: enableExitKeys});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 break;
 case KeyF1:
 break;
 case KeyF5:
 SHARED.returnDestinationCH = "DETAILS";
 SHARED.alertSaveMessage = "This record has been updated.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 case KeyF9:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM200SCRDL",
 vGUID      :  "46AD14DAD4EA4B29B042DA74D9810335",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Restart","F2","F3","F4","Save",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
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
try{VF_SY420_REGISTER_FORM(vSD_34FBE7AB55724515953851371ED9F101);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_330.");}
var vSD_30F1325EA18A4456A1BB6490A11A1D3C = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let enableExitKeys = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false,  hideKeyArray: hideKeyArray});
 } else {
 if ((objBusinessObject.uUserObjectType == "CUSTOMER_POSITION") && (objCommand.uUserObjectType == "MAINTAIN")) {
 enableExitKeys = false;
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: enableExitKeys});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 break;
 case KeyF1:
 break;
 case KeyF5:
 SHARED.returnDestinationCH = "DETAILS";
 SHARED.alertSaveMessage = "This record has been updated.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 case KeyF9:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM200SCRGB",
 vGUID      :  "4CFB75495DC348E3A9DAB7F3DD4347A8",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Restart","F2","F3","F4","Save",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
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
try{VF_SY420_REGISTER_FORM(vSD_30F1325EA18A4456A1BB6490A11A1D3C);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_333.");}
var vSD_FD6853638D6D4517B9EF1AA4AE91D053 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType);
 TRACE("T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action);
 TRACE("T_CurrentForm " + CURRENT_FORM());
 TRACE("T_PreviousForm " + oPreviousForm.vName);
 let ustrMessage = SHARED.UF_get5250Message();
 if ((objBusinessObject.uUserObjectType == "CUSTOMER_POSITION") && (objCommand.uUserObjectType == "NEW") && (SHARED.payload.action == "SAVE")) {
 if (ustrMessage.length > 0) {
 TRACE("T_ustrMessage_01C " + ustrMessage);
 var ustrFirstSpace = ustrMessage.indexOf(" ");
 var ustrSecondSpace = ustrMessage.indexOf(" ",(ustrFirstSpace + 1))
 var ustrThirdSpace = ustrMessage.indexOf(" ",(ustrSecondSpace + 1))
 var ustrPosition = ustrMessage.substring(ustrFirstSpace,ustrSecondSpace);
 var ustrControl = ustrMessage.substring(ustrSecondSpace,ustrThirdSpace);
 ustrPosition = ustrPosition.toString();
 ustrControl = parseInt(ustrControl);
 ustrPosition = ustrPosition.replace(" ","");
 AVSIGNALEVENT("Add_List_Entry","FRAMEWORK",ustrPosition,"","","","",ustrControl);
 }
 }
 if (objBusinessObject.uUserObjectType == "CUSTOMER_POSITION") {
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
 case KeyEnter:
 break;
 case KeyF7:
 break;
 case KeyF9:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM210SCR01",
 vGUID      :  "61E88F3A406F479C9605963B58F22185",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_FD6853638D6D4517B9EF1AA4AE91D053);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_322.");}
var vSD_93F2B988C4A44A85828D90B9E0F8E2BB = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let isHiddenDestination = false;
 let hideScreenMessage = "";
 if (objBusinessObject.uUserObjectType == "CUSTOMER_POSITION") {
 if ((SHARED.payload.action == SHARED.action.initialise) && (oPreviousForm.vName == "uMSTMEN")) {
 if((objListManager.AKey1[0] != "OS") && (objListManager.AKey1[0] != "GB") && (objListManager.AKey1[0] != "WH") && (objListManager.AKey1[0] != "DL") &&
 (objListManager.AKey1[0] != "DP") && (objListManager.AKey1[0] != "SP"))
 {
 isHiddenDestination = true;
 hideScreenMessage = "Please choose a valid position";
 } else if(objCommand.uUserObjectType == "MAINTAIN"){
 isHiddenDestination = true;
 SETVALUE("utxtControl",objListManager.NKey1[0]);
 if(objListManager.AKey1[0] == "OS"){
 SHARED.UF_setSelectElementSelectedItemByText("utxtMaintPos","Open Storage");
 }
 else if(objListManager.AKey1[0] == "GB"){
 SHARED.UF_setSelectElementSelectedItemByText("utxtMaintPos","Grain Bank");
 }
 else if(objListManager.AKey1[0] == "WH"){
 SHARED.UF_setSelectElementSelectedItemByText("utxtMaintPos","Warehouse Receipt");
 }
 else if(objListManager.AKey1[0] == "DL"){
 SHARED.UF_setSelectElementSelectedItemByText("utxtMaintPos","Delivered");
 }
 else if(objListManager.AKey1[0] == "DP"){
 SHARED.UF_setSelectElementSelectedItemByText("utxtMaintPos","Delay Price");
 }
 Q_SENDKEY("=uCOM200SCR01",KeyEnter,SHARED.payload);
 }
 } else if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() == oPreviousForm.vName)) {
 if(objCommand.uUserObjectType == "MAINTAIN"){
 isHiddenDestination = true;
 hideScreenMessage = SHARED.UF_get5250Message();
 }
 } else if ((SHARED.payload.action == SHARED.action.save)) {
 if(objCommand.uUserObjectType == "MAINTAIN"){
 isHiddenDestination = true;
 AVSIGNALEVENT("SWITCH","FRAMEWORK","","CUSTOMER_POSITION","DETAILS","","BusinessObject");
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload,
 isHiddenDestination: isHiddenDestination,
 hideScreenMessage: hideScreenMessage,
 enableExitKeys: false});
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
 case KeyEnter:
 break;
 case KeyF7:
 break;
 case KeyF9:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM200SCR01",
 vGUID      :  "7EC093C35A234A76A0D5D97A5E5AA139",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_93F2B988C4A44A85828D90B9E0F8E2BB);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_329.");}
var vSD_81C25D26C5404D569447662DAFAD829C = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let enableExitKeys = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false,  hideKeyArray: hideKeyArray});
 } else {
 if ((objBusinessObject.uUserObjectType == "CUSTOMER_POSITION") && (objCommand.uUserObjectType == "MAINTAIN")) {
 enableExitKeys = false;
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: enableExitKeys});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 break;
 case KeyF1:
 break;
 case KeyF5:
 SHARED.returnDestinationCH = "DETAILS";
 SHARED.alertSaveMessage = "This record has been updated.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 case KeyF9:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM200SCROS",
 vGUID      :  "DD959A7895B44EB582F5BB6B2023D678",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Restart","F2","F3","F4","Save",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
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
try{VF_SY420_REGISTER_FORM(vSD_81C25D26C5404D569447662DAFAD829C);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_332.");}
var vSD_9F32CCB6CCF74317B09CDB7412C6077F = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 TRACE("T_uCOM210SCR02C Button Click Execution");
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType);
 TRACE("T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action);
 TRACE("T_CurrentForm " + CURRENT_FORM());
 switch (sButton)
 {
 case KeyEnter:
 break;
 case KeyF1:
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 break;
 case KeyF5:
 let ustrMessage = SHARED.UF_get5250Message();
 TRACE("T_ustrMessage_02C " + ustrMessage);
 SHARED.notifySaveMessage = ustrMessage;
 SHARED.NKey = [objListManager.NKey1[0],0,0,0,0];
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.create, filterRebuildEvent: SHARED.filterRebuildEvent.addListEntry});
 break;
 case KeyF9:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM210SCR02C",
 vGUID      :  "FE7BEDC5D3A7474781CF257B99A97B51",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","F4","Continue",
 "F6","F7","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_9F32CCB6CCF74317B09CDB7412C6077F);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_323.");}
var vSD_2A5CF54176E94EC5AE4C0F2D8E8F9A22 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "CUSTOMER_POSITION") {
 SETVALUE("utxtAccount",objListManager.NColumn3[0]);
 SETVALUE("utxtCommodity",objListManager.NColumn10[0]);
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
 case KeyEnter:
 break;
 case KeyF7:
 break;
 case KeyF9:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN120SCR01",
 vGUID      :  "16E10543D82E4E3E9EED8EBF7A8A6942",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_2A5CF54176E94EC5AE4C0F2D8E8F9A22);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_335.");}
var vSD_F356A7D5A5504BBCB74121B762865B42 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyEnter:
 break;
 case KeyF1:
 break;
 case KeyF4:
 break;
 case KeyF5:
 break;
 case KeyF9:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN120SCR02C",
 vGUID      :  "20E0047E3D534309B2651E7C9303734F",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","Select","Continue",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11001100010000000000000000000000000000",
 vFKEVLF : "11001100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_F356A7D5A5504BBCB74121B762865B42);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_357.");}
var vSD_B810C5BB6D994AD6AF5828381775712E = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyEnter:
 break;
 case KeyF1:
 break;
 case KeyF4:
 break;
 case KeyF5:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN120SCR03C",
 vGUID      :  "3E580B7115BC49CD8E895E7D7BE8542E",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Back","F2","F3","Select","Continue",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11001100000000000000000000110000000000",
 vFKEVLF : "01001100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_B810C5BB6D994AD6AF5828381775712E);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_358.");}
var vSD_A4AE840D92254E9080898F04374D09EA = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyEnter:
 SHARED.alertSaveMessage = "Transaction is complete.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change, filterRebuildEvent: SHARED.filterRebuildEvent.refreshInstanceList});                 break;
 case KeyF1:
 break;
 case KeyF5:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN120SCR05",
 vGUID      :  "8814B1ED6A5A43E9ABC578287F7AC7B6",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","F4","Continue",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000100000000000000000000000000000000",
 vFKEVLF : "11000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_A4AE840D92254E9080898F04374D09EA);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_360.");}
var vSD_08FCF0DC90754CFB947E6D83CA3B4692 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType + " T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action + " T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM() + " T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage + " T_alertSaveMessage  " + SHARED.alertSaveMessage);
 if ((objBusinessObject.uUserObjectType == "CUSTOMER_POSITION") || (objBusinessObject.uUserObjectType == "CONTRACT_MAINTENANCE")) {
 let isHiddenDestination = false;
 let hideScreeMessage = "";
 if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 if(objCommand.uUserObjectType == "NEW"){
 Q_SENDKEY("=uGRN205ONE",KeyEnter,SHARED.payload);
 isHiddenDestination = true;
 }
 else if ((objCommand.uUserObjectType == "DEFER_PAY") || (objCommand.uUserObjectType == "D/P_EDIT")) {
 isHiddenDestination = true;
 let utxtControlNumber;
 if(objListManager.AKey1[0] == "D/") {
 utxtControlNumber = ("0000000" + objListManager.NKey1[0]).slice(-7);
 } else {
 utxtControlNumber = ("0000000" + objListManager.NKey2[0]).slice(-7);
 }
 SETVALUE("utxtControlNumber", utxtControlNumber);
 Q_SENDKEY("=uGRN205ONE",KeyEnter,SHARED.payload);
 }
 }
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() != oPreviousForm.vName)) {
 if (objCommand.uUserObjectType == "DEFER_PAY") {
 isHiddenDestination = true;
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false, isHiddenDestination: isHiddenDestination, hideScreeMessage:hideScreeMessage});
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
 case KeyEnter:
 break;
 case KeyF7:
 break;
 case KeyF9:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN205ONE",
 vGUID      :  "8FFA76E83D6A4DF5A3D87DB8A4F86A64",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_08FCF0DC90754CFB947E6D83CA3B4692);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_351.");}
var vSD_71084160F3954366BDFA6BAE0BC67818 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if(objCommand.uUserObjectType != "NEW"){
 SETKEYENABLED("uGRN205TWO",KeyF8,true,true);
 }
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 SHARED.alertSaveMessage = "This record has been updated.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 case "uGRN205ONE":
 {
 SENDKEY(KeyF5);
 Q_CHECK_CURRENT_FORM("uGRN205ONE","Unable to navigate to form uGRN205ONE");
 }
 break;
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN205TWO",
 vGUID      :  "B181703D0F0645AD858AF064D3B6EF97",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Restart","F2","Delete","F4","Save",
 "F6","F7","Roll","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_71084160F3954366BDFA6BAE0BC67818);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_352.");}
var vSD_BC8C2F35BCDC42D1A8EC1692A701FE0C = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyEnter:
 break;
 case KeyF1:
 break;
 case KeyF5:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN220TWO",
 vGUID      :  "08A0DF1BB4764BF19BC23015FD0EA1E2",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","F4","Save",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000100000000000000000000000000000000",
 vFKEVLF : "11000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_BC8C2F35BCDC42D1A8EC1692A701FE0C);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_338.");}
var vSD_50479F40F5B94FE5BD4126E4494B81A6 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "DAILY_POSITION_(DPR)") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: true});
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
 case KeyEnter:
 break;
 case KeyF7:
 SHARED.alertSaveMessage = "DPR adjustment has been printed";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 break;
 case KeyF9:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN220ONE",
 vGUID      :  "FD542048B38945AD9C5A2CDA6A4EECE2",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Print","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000001000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_50479F40F5B94FE5BD4126E4494B81A6);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_337.");}
var vSD_EB5D6748227442CF8F3D1BE826D2F523 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "DELIVERIES") {
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
 case KeyEnter:
 break;
 case KeyF5:
 SHARED.notifySaveMessage = "Export Cust/Delv Master for Scale has been run.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 case KeyF7:
 break;
 case KeyF9:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uEXP310FBSCR01",
 vGUID      :  "20016C9A53304ADC92C25667ACE7D5C9",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "00000100010000000000000000000000000000",
 vFKEVLF : "00000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_EB5D6748227442CF8F3D1BE826D2F523);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_350.");}
var vSD_C924916FE2F24ACAAF97A972AFCFDDB6 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let hideKeyArray = [KeyF7];
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, hideKeyArray: hideKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 SHARED.notifySaveMessage = "Export Cust/Delv/Wrk Order Master for Scale has been run.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uEXP310FBSCR02",
 vGUID      :  "E7A6A9BCDD3E4F5C84F45FEE5A829AEB",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Back","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "01000100010000000000000000000000000000",
 vFKEVLF : "01000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_C924916FE2F24ACAAF97A972AFCFDDB6);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_353.");}
var vSD_16C2D7E089AB4D65829C560BD08570C0 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType + " T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action + " T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM() + " T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage + " T_alertSaveMessage  " + SHARED.alertSaveMessage);
 let enableExitKeys = true;
 let allowKeyArray = [], disableKeyArray=[];
 let uMessage = SHARED.UF_get5250Message();
 let uFlag = false;
 if(uMessage.search(/Invalid customer/) != -1)  { uFlag = true; }
 if ((SHARED.payload.action == SHARED.action.save) && (SHARED.payload.screenType == SHARED.screenType.delete ) ) {
 if(!uFlag) {
 Q_SENDKEY("=" +CURRENT_FORM(), KeyF1, SHARED.payload);
 }
 }
 if((objCommand.uUserObjectType == "DETAILS") || (objCommand.uUserObjectType == "SPLITS")){
 if (objListManager.AColumn6[0] != "Yes"){
 allowKeyArray =[KeyF24];
 }
 enableExitKeys = false;
 }
 if((objBusinessObject.uUserObjectType == "BATCH_TICKETS_OUTBOUND") && (objCommand.uUserObjectType == "DETAILS")) {
 allowKeyArray =[KeyF1];
 }
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 }
 else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: enableExitKeys, allowKeyArray: allowKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 break;
 case KeyF1:
 break;
 case KeyF3:
 SHARED.notifySaveMessage = "Delivery " + objListManager.NKey1[0] + " has been deleted.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.delete, filterRebuildEvent: SHARED.filterRebuildEvent.addListEntry});
 break;
 case KeyF4:
 break;
 case KeyF5:
 case KeyF24:
 if(objCommand.uUserObjectType == "NEW"){
 let delivery = GETVALUE("utxtDelivery");
 let uintDelivery = parseInt(delivery,10);
 SHARED.NKey = [uintDelivery,0,0,0,0];
 SHARED.alertSaveMessage = "Delivery " + uintDelivery + " has been created.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.create, filterRebuildEvent: SHARED.filterRebuildEvent.addListEntry});
 }
 else{
 SHARED.alertSaveMessage = "This record has been updated";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change, filterRebuildEvent: SHARED.filterRebuildEvent.updateListEntry});
 }
 if (sButton == KeyF24){
 SENDKEY(KeyF24, SHARED.payload);
 return(bReturn);
 }
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN110SCR02C",
 vGUID      :  "016F5795BCD244588A16B624BF58DA6E",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","Delete","Reactivate","Save",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "Duplicate","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000110000000000",
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
try{VF_SY420_REGISTER_FORM(vSD_16C2D7E089AB4D65829C560BD08570C0);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_349.");}
var vSD_9384FBF500534875BD6B47530CE8E5BF = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let isHiddenDestination = false;
 if ((objBusinessObject.uUserObjectType == "DELIVERIES")  || (objBusinessObject.uUserObjectType == "DELIVERY_SPLITS")){
 if((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 if(objCommand.uUserObjectType == "NEW"){
 SENDKEY(KeyEnter, SHARED.payload);
 }
 else if((objCommand.uUserObjectType == "DETAILS") || (objCommand.uUserObjectType == "SPLITS")){
 isHiddenDestination = true;
 SETVALUE("utxtDelivery", objListManager.NKey1[0]);
 Q_SENDKEY("=uGRN110SCR01", KeyEnter, SHARED.payload);
 }
 }
 else if((SHARED.payload.action == SHARED.action.save) || (CURRENT_FORM() != oPreviousForm.vName)){
 if (((objCommand.uUserObjectType == "DETAILS") || (objCommand.uUserObjectType == "SPLITS")) && (SHARED.payload.screenType == SHARED.screenType.change)) {
 isHiddenDestination = true;
 AVSIGNALEVENT("Refresh_Child_Splits", "FRAMEWORK",
 objListManager.AKey1[0], objListManager.AKey2[0], objListManager.AKey3[0], objListManager.AKey4[0], objListManager.AColumn10[0],
 objListManager.NKey2[0],objListManager.NKey1[0], objListManager.NKey3[0], objListManager.NKey4[0], objListManager.NKey5[0]);
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false, isHiddenDestination: isHiddenDestination});
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
 case KeyEnter:
 break;
 case KeyF7:
 break;
 case KeyF9:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN110SCR01",
 vGUID      :  "65A397C9471A41C3A2F7641251F38F3D",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000000000000000000100000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_9384FBF500534875BD6B47530CE8E5BF);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_347.");}
var vSD_799B7DCF3E294AA0B9DCC3AF0EE1944C = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 break;
 case KeyF9:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN110SCR03",
 vGUID      :  "F366B1C1C2214C949FD38E79F541614F",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","F7","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
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
try{VF_SY420_REGISTER_FORM(vSD_799B7DCF3E294AA0B9DCC3AF0EE1944C);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_348.");}
var vSD_2402A18DA4894792902DEE4A815C6AC4 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType + " T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action + " T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM() + " T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage + " T_alertSaveMessage  " + SHARED.alertSaveMessage);
 let isHiddenDestination = false;
 let hideScreenMessage = "";
 if(objBusinessObject.uUserObjectType == "CUSTOMER_POSITION") {
 if ((SHARED.payload.action == SHARED.action.save) && (SHARED.payload.screenType == SHARED.screenType.change)) {
 if(objCommand.uUserObjectType == "PREPAY_STORAGE"){
 isHiddenDestination = true;
 hideScreenMessage = SHARED.notifySaveMessage;
 }
 }
 if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 if(objCommand.uUserObjectType == "PREPAY_STORAGE"){
 if((objListManager.AKey1[0] != "OS") && (objListManager.AKey1[0] != "GB") && (objListManager.AKey1[0] != "WH") && (objListManager.AKey1[0] != "DP")){
 hideScreenMessage = "Please choose a valid position";
 } else {
 SETVALUE("utxtControl",objListManager.NKey1[0]);
 if(objListManager.AKey1[0] == "OS"){
 SHARED.UF_setSelectElementSelectedItemByText("utxtStorageOpt","Open Storage");
 }
 else if(objListManager.AKey1[0] == "GB"){
 SHARED.UF_setSelectElementSelectedItemByText("utxtStorageOpt","Grain Bank");
 }
 else if(objListManager.AKey1[0] == "WH"){
 SHARED.UF_setSelectElementSelectedItemByText("utxtStorageOpt","Warehouse Receipt");
 }
 else if(objListManager.AKey1[0] == "DP"){
 SHARED.UF_setSelectElementSelectedItemByText("utxtStorageOpt","Delay Price");
 }
 Q_SENDKEY("=uGRN250SCR01",KeyEnter,SHARED.payload);
 }
 isHiddenDestination = true;
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false, isHiddenDestination: isHiddenDestination, hideScreenMessage: hideScreenMessage});
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
 case KeyEnter:
 break;
 case KeyF7:
 break;
 case KeyF9:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN250SCR01",
 vGUID      :  "77E3D9E92670400199D73E46F8F39F19",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_2402A18DA4894792902DEE4A815C6AC4);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_343.");}
var vSD_6D113C8FF5F84CF18BE3651789D59D88 = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF9:
 SENDKEY(KeyF9);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uSAL100SCR02C",
 vGUID      :  "B7F380558F8241CB93EF00065D400688",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","F2","F3","F4","F5",
 "F6","F7","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0201030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000000010000000000000000000000000000",
 vFKEVLF : "11000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_6D113C8FF5F84CF18BE3651789D59D88);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_356.");}
var vSD_68B58250892940E8B109657A46D9B1B4 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let hideKeyArray = [KeyF12];
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let allowKeyArray = [];
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage.search(/F14 to accept/) != -1) {
 allowKeyArray = [KeyF14];
 }
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, allowKeyArray: allowKeyArray, hideKeyArray: hideKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 if((objBusinessObject.uUserObjectType == "CUSTOMER_POSITION") && (objCommand.uUserObjectType == "CUSTOM_DRY/RETURN_TO_FARM")) {
 SHARED.alertSaveMessage = "Transaction is complete.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change, filterRebuildEvent: SHARED.filterRebuildEvent.refreshInstanceList});
 } else if((objBusinessObject.uUserObjectType == "CUSTOMER_POSITION") && (objCommand.uUserObjectType == "PREPAY_STORAGE")) {
 SHARED.notifySaveMessage = "Storage has been billed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.delete});
 }
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uSAL100SCR05C",
 vGUID      :  "CFCCD87831EF4006A553CA0863833AE3",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","F4","Save",
 "Prior Sales","F7","Fold/Drop","Search","Ageing","Contract",
 "Discounts","F13","Accept","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0103120709110208051006041314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000010010000000000000000000000000000",
 vFKEVLF : "10000010000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_68B58250892940E8B109657A46D9B1B4);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_357.");}
var vSD_DF05E99FE3C640B1A549E23A01641F1C = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let enableExitKeys = true;
 if (objBusinessObject.uUserObjectType == "CUSTOMER_POSITION") {
 if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 if(objCommand.uUserObjectType == "PREPAY_STORAGE"){
 enableExitKeys = false;
 }
 }
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: enableExitKeys});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN250SCR02",
 vGUID      :  "94C2725070054A3F916816FAF25FC497",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","F4","Continue",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000100000000000000000000000000000000",
 vFKEVLF : "11000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_DF05E99FE3C640B1A549E23A01641F1C);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_358.");}
var vSD_964EDD186A1945F48F9D7A8E6498C8A3 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType);
 TRACE("T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action);
 TRACE("T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_SHARED.payload.filterRebuildEvent " + SHARED.payload.filterRebuildEvent);
 TRACE("T_CurrentForm " + CURRENT_FORM());
 TRACE("T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_alertSaveMessage  " + SHARED.alertSaveMessage);
 let uMessage = SHARED.UF_get5250Message();
 var isHiddenDestination;
 var hideScreenMessage;
 switch (objBusinessObject.uUserObjectType) {
 case "BATCH_TICKETS_INBOUND":
 case "BATCH_TICKETS_OUTBOUND":
 isHiddenDestination = false;
 hideScreenMessage = "";
 if (SHARED.payload.action == SHARED.action.initialise) {
 if (objCommand.uUserObjectType == "DETAILS") {
 TRACE("T_IO " + objListManager.AColumn1[0]);
 SETVALUE("utxtBranch",objListManager.NKey1[0]);
 SETVALUE("utxtTicket",objListManager.NKey2[0]);
 objGlobal.uftxtBranch = objListManager.NKey1[0];
 objGlobal.uftxtTicket = objListManager.NKey2[0];
 TRACE("T_objGlobal.uftxtBranch " + objGlobal.uftxtBranch);
 TRACE("T_objGlobal.uftxtTicket " + objGlobal.uftxtTicket);
 TRACE("T_IO " + objListManager.AColumn1[0]);
 if (objListManager.AColumn1[0] != "-1") {
 if (uMessage === "")   {
 Q_SENDKEY("=" + CURRENT_FORM(), KeyEnter, SHARED.payload);
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 } else {
 Q_NAVIGATE_TO_SCREEN("","uGRN142SCR01");
 }
 }
 }
 if ((SHARED.payload.action == SHARED.action.save) && (SHARED.payload.screenType == SHARED.screenType.change)) {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 else {
 if ((SHARED.payload.action == SHARED.action.navigate)) {
 SHARED.ustrSpecialMessage = SHARED.notifySaveMessage;
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 }
 }
 break;
 case "INBOUND_BATCH_SCALE_TICKETS":
 case "OUTBOUND_BATCH_SCALE_TICKETS":
 isHiddenDestination = false;
 hideScreenMessage = "";
 if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 if (objCommand.uUserObjectType == "DETAILS") {
 isHiddenDestination = true;
 SETVALUE("utxtBranch",objListManager.NKey1[0]);
 SETVALUE("utxtTicket",objListManager.NKey2[0]);
 Q_SENDKEY("=" + CURRENT_FORM(), KeyEnter, SHARED.payload);
 }
 } else if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() == oPreviousForm.vName)) {
 if (objCommand.uUserObjectType == "DETAILS") {
 isHiddenDestination = true;
 hideScreenMessage = SHARED.UF_get5250Message();
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload,
 enableExitKeys: false,
 hideScreenMessage: hideScreenMessage,
 isHiddenDestination: isHiddenDestination});
 break;
 default:
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 break;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 SHARED.saveBetweenScreens.utxtBranch = GETVALUE("utxtBranch");
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 switch (sButton)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN125SCR01",
 vGUID      :  "91019BDB26A343F58D05E804FFDFA34F",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","Create Delivery","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_964EDD186A1945F48F9D7A8E6498C8A3);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_359.");}
var vSD_4B4373C9CC4E43FF950E6BB5EB15BE5C = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType + " T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action + " T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM() + " T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage + " T_alertSaveMessage  " + SHARED.alertSaveMessage);
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let enableExitKeys = true;
 let hideKeyArray = [];
 let allowKeyArray = [];
 if (objCommand.uUserObjectType == "DETAILS") {
 enableExitKeys = false;
 } else if (objCommand.uUserObjectType == "NEW") {
 hideKeyArray = [KeyF3];
 }
 let uMessage = SHARED.UF_get5250Message();
 if(uMessage.search(/F8 to accept/) != -1)
 {
 allowKeyArray = [KeyF8];
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: enableExitKeys, hideKeyArray: hideKeyArray, allowKeyArray: allowKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF3:
 SHARED.notifySaveMessage = "Batch Scale Ticket " + objListManager.NKey2[0] + " has been deleted.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.delete, filterRebuildEvent: "Delete_Child_List_Entry"});
 break;
 case KeyF5:
 if(objCommand.uUserObjectType == "NEW")
 {
 let utxtTicket = CHECK_FIELD_EXISTS("utxtTicket") ? GETVALUE("utxtTicket") : 0;
 let utxtBranch = CHECK_FIELD_EXISTS("utxtbrname") ? GETVALUE("utxtbrname") : 0;
 TRACE("T_utxtTicket " + utxtTicket + " brname " + utxtBranch);
 SHARED.AKey = [utxtBranch,"","","",""];
 SHARED.NKey = [0,parseInt(utxtTicket, 10),0,0,0];
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.create, filterRebuildEvent: "Add_Child_List_Entry"});
 }
 else {
 SHARED.notifySaveMessage = "Scale Ticket " + objListManager.NKey2[0] + " has been updated.";
 SHARED.UF_setPayload({action: SHARED.action.navigate, screenType: SHARED.screenType.change, filterRebuildEvent: "Update_Child_List_Entry"});
 }
 break;
 case KeyF8:
 if (objCommand.uUserObjectType == "NEW") {
 let ustrTicket = GETVALUE("utxtTicket");
 let uintTicket = 0;
 if (ustrTicket != "") {
 uintTicket = parseInt( ustrTicket, 10);
 }
 SHARED.NKey = [uintTicket,0,0,0,0];
 let ustrBranch = SHARED.saveBetweenScreens.utxtBranch;
 SHARED.AKey = [ustrBranch,"","","",""];
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.create, filterRebuildEvent: "Add_Child_List_Entry"});
 }
 else {
 SHARED.alertSaveMessage = "Scale Ticket " + objListManager.NKey2[0] + " has been updated.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change, filterRebuildEvent: "Update_Child_List_Entry"});
 }
 break;
 case KeyF16:
 let upTicket = (CHECK_FIELD_EXISTS("utxtTicket")) ? parseInt(GETVALUE("utxtTicket")): 0;
 AVSAVEVALUE(upTicket,"MFILE","TICKET");
 AVSAVEVALUE(objGlobal.uftxtBranch,"MFILE","LOC");
 AVSAVEVALUE("SCALETIX","MFILE","INTERFACE");
 AVSWITCH("BUSINESSOBJECT",objBusinessObject.uUserObjectType,"MFILE");
 break;
 default:
 break;
 }
 if(sButton != KeyF16) {SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);}
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN125SCR02C",
 vGUID      :  "72444BB404A24D3BA59746D2B14D5458",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","Delete","F4","Save",
 "F6","F7","Accept","Search","Other Info","Freight",
 "F12","F13","F14","F15","M-Files","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102110405100708121703061314151609181920212223242526272829303132333435363738",
 vFKERTS : "11000000110000000000000000000000000000",
 vFKEVLF : "11000000000000001000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_4B4373C9CC4E43FF950E6BB5EB15BE5C);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_360.");}
var vSD_F9402B4429AE451EBEE9942AE35A753F = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "BRING_COMMODITIES_TO_MARKET") {
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
 default:
 break;
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM250SCR01",
 vGUID      :  "4F4FC2ECF52B46AA9C655D5E22C79FCD",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000001000000000000000000000000000000",
 vFKEVLF : "10000001000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_F9402B4429AE451EBEE9942AE35A753F);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_361.");}
var vSD_575838FC2FB44233AB412540252CC6A2 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF5:
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM250SCRBASC",
 vGUID      :  "4703C61C65774AC894C55FE9B7C58BFC",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","F4","Continue",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000000000000000000000000000000000000",
 vFKEVLF : "11000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_575838FC2FB44233AB412540252CC6A2);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_362.");}
var vSD_D041619052C943DA88761F4A0D3A465C = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF5:
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM250SCRFUTC",
 vGUID      :  "E66969DE15D944A99DFFF274A66356FB",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","F4","Continue",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000100000000000000000000000000000000",
 vFKEVLF : "11000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_D041619052C943DA88761F4A0D3A465C);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_363.");}
var vSD_12DF87018BAD4E3F998E1F8939838274 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType);
 TRACE("T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action);
 TRACE("T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_SHARED.payload.filterRebuildEvent " + SHARED.payload.filterRebuildEvent);
 TRACE("T_CurrentForm " + CURRENT_FORM());
 TRACE("T_PreviousForm " + oPreviousForm.vName);
 if ((objBusinessObject.uUserObjectType == "SHIPMENTS" ) || (objBusinessObject.uUserObjectType == "BARGE_SHIPMENT_CHILD")) {
 let isHiddenDestination = false;
 let hideScreenMessage = "";
 if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 if(objListManager.AColumn9[0] == "D") {
 hideScreenMessage = "Shipment is deleted cannot be maintained";
 }
 if (objBusinessObject.uUserObjectType == "SHIPMENTS") {
 if (objCommand.uUserObjectType != "NEW") {
 SETVALUE("utxtShipment",objListManager.NKey1[0]);
 }
 } else if (objBusinessObject.uUserObjectType == "BARGE_SHIPMENT_CHILD") {
 SETVALUE("utxtShipment",objListManager.NKey2[0]);
 }
 } else if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() != oPreviousForm.vName)) {
 if ((objBusinessObject.uUserObjectType == "SHIPMENTS") && (objCommand.uUserObjectType == "EDIT")) {
 AVSIGNALEVENT("SWITCH","FRAMEWORK","","SHIPMENTS","DETAILS","","BusinessObject");
 return(bReturn);
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false, isHiddenDestination: isHiddenDestination, hideScreenMessage: hideScreenMessage});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 let usavshipments = GETVALUE("utxtShipment");
 if (usavshipments == "0"){SETVALUE("utxtShipment","");}
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 switch (sButton)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT110SCR01",
 vGUID      :  "1259FF84176D4A33B782E9060A4AAAB2",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_12DF87018BAD4E3F998E1F8939838274);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_364.");}
var vSD_CFAB8D2A35B341B2A468D0140770B1B8 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let enableExitKeys = true;
 if (objCommand.uUserObjectType == "EDIT") {
 enableExitKeys = false;
 }
 let allowKeyArray = [];
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage.search(/F10 to accept/) != -1) {
 allowKeyArray = [KeyF10];
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: enableExitKeys, allowKeyArray: allowKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF3:
 SHARED.notifySaveMessage = "Shipment " + objListManager.NKey1[0] + " has been deleted.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.delete, filterRebuildEvent: SHARED.filterRebuildEvent.refreshInstanceList});
 break;
 case KeyF5:
 if (objCommand.uUserObjectType == "NEW") {
 let utxtShipment = GETVALUE("utxtShipment");
 let uintShipment = (utxtShipment == "") ? 0 : parseInt(utxtShipment, 10);
 SHARED.AKey = ["","","","",""];
 SHARED.NKey = [uintShipment,0,0,0,0];
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.create, filterRebuildEvent: SHARED.filterRebuildEvent.addListEntry});
 }
 else if(objCommand.uUserObjectType == "EDIT") {
 let filterRebuildEvent = "";
 if (objBusinessObject.uUserObjectType == "BARGE_SHIPMENT_CHILD") {
 filterRebuildEvent = "Refresh_Barge_Shipment"
 }
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change, filterRebuildEvent: filterRebuildEvent});
 }
 break;
 default:
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT110SCR02C",
 vGUID      :  "85F829A1C4B94E0D95D5BE61DB35986E",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","Delete","F4","Continue",
 "Import Loads","F7","F8","Search","Accept","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000000010000000000000000110000000000",
 vFKEVLF : "11000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_CFAB8D2A35B341B2A468D0140770B1B8);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_365.");}
var vSD_D7C41DDA277348338F63CEA8206491C3 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let allowKeyArray = [];
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage.search(/F10 to accept/) != -1) {
 allowKeyArray = [KeyF10];
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, allowKeyArray: allowKeyArray});
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
 default:
 break;
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT110SCR03C",
 vGUID      :  "B8708BD35FAA4FF692BA32B0D5791C61",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","Delete","F4","Save",
 "F6","F7","Fold/Drop","Search","Accept","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","Left","Right","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102200321070808041011121314151617181906052223242526272829303132333435363738",
 vFKERTS : "11000000010000000000000000110000000000",
 vFKEVLF : "11000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_D7C41DDA277348338F63CEA8206491C3);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_366.");}
var vSD_9E701C1C5F5E4D00A8A595978A64E14D = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 if((SHARED.payload.action == SHARED.action.navigate) && (CURRENT_FORM() != oPreviousForm.vName)) {
 Q_SENDKEY("=" + CURRENT_FORM(), KeyF5, SHARED.payload);
 }
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
 case KeyF5:
 SENDKEY(KeyF5);
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
 SHARED.UF_commonReturn([KeyF5]);
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT512SCR01",
 vGUID      :  "5E930F32458F4959B6C7FC0476E66AB8",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","F1","F2","F3","F4","Continue",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100000000000000000000000000000000",
 vFKEVLF : "00000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_9E701C1C5F5E4D00A8A595978A64E14D);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_367.");}
var vSD_F465D7BDC1B74173947D948BA70334FC = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF1:
 SENDKEY(KeyF1);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT110SCRDEL",
 vGUID      :  "731E3F39DFE54800999A50D50ECFAA8E",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Back","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000000000000000000000000000000000000",
 vFKEVLF : "11000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_F465D7BDC1B74173947D948BA70334FC);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_368.");}
var vSD_9DF021CFA8C9482BA5371071C14E176A = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType);
 TRACE("T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action);
 TRACE("T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM());
 TRACE("T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage);
 TRACE("T_alertSaveMessage  " + SHARED.alertSaveMessage);
 if ((objBusinessObject.uUserObjectType == "SHIPMENTS") && (objCommand.uUserObjectType == "PRINT") && (SHARED.payload.action == SHARED.action.save))  {
 let isHiddenDestination = false;
 let hideScreenMessage = "";
 SHARED.notifySaveMessage = "";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.other});
 }
 if ((objBusinessObject.uUserObjectType == "SHIPMENT_COMMENTS") || (objBusinessObject.uUserObjectType == "SHIPMENTS"))  {
 let isHiddenDestination = false;
 let hideScreenMessage = "";
 if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 if ((objCommand.uUserObjectType == "DETAILS") || (objCommand.uUserObjectType == "PRINT") || (objCommand.uUserObjectType == "COMMENTS")) {
 SETVALUE("utxtShipment",objListManager.NKey1[0]);
 Q_SENDKEY("=" + CURRENT_FORM(), KeyEnter, SHARED.payload);
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false, isHiddenDestination: isHiddenDestination, hideScreenMessage: hideScreenMessage});
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
 default:
 break;
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT020SCR01",
 vGUID      :  "78377D4CE65541DFA97631389B893B91",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_9DF021CFA8C9482BA5371071C14E176A);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_369.");}
var vSD_C05A7A8E5E974C28A40B04FDC43A0859 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType);
 TRACE("T_CMDOBJ " + objCommand.uUserObjectType);
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let isHiddenDestination = false;
 let hideKeyArray = [];
 let allowKeyArray = [];
 let enableExitKeys = true;
 TRACE("T_SHARED.payload.action " + SHARED.payload.action);
 TRACE("T_CurrentForm " + CURRENT_FORM());
 TRACE("T_PreviousForm " + oPreviousForm.vName);
 if (objBusinessObject.uUserObjectType == "SHIPMENTS" )  {
 if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 if ((objCommand.uUserObjectType == "PRINT")) {
 enableExitKeys = false;
 TRACE("T_cmd_object_print executed");
 isHiddenDestination = true;
 SHARED.notifySaveMessage = "Shipment " + objListManager.NKey1[0] + " has been printed."
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 Q_SENDKEY("=" + CURRENT_FORM(), KeyF6, SHARED.payload);
 Q_SENDKEY("=uCONFIRMCSVSCRCSV", KeyEnter, SHARED.payload);
 } else if ((objCommand.uUserObjectType == "DETAILS")) {
 enableExitKeys = false;
 hideKeyArray = [KeyF6];
 TRACE("T_cmd_object_details executed");
 }
 } else if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() != oPreviousForm.vName)) {
 if ((objCommand.uUserObjectType == "PRINT")) {
 TRACE("T_action_save executed");
 hideKeyArray = [KeyF6];
 allowKeyArray = [KeyF2];
 }
 }
 }
 if (objBusinessObject.uUserObjectType == "OUTBOUND_SETTLEMENTS" )  {
 if ((objCommand.uUserObjectType == "DETAILS")) {
 hideKeyArray = [KeyF6];
 TRACE("T_cmd_object_details_outbound_settlements executed");
 }
 if ((objCommand.uUserObjectType == "NEW") && (SHARED.payload.action == SHARED.action.prompt)) {
 hideKeyArray = [KeyF6];
 allowKeyArray = [KeyF2];
 }
 }
 if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() == oPreviousForm.vName)) {
 if ((objBusinessObject.uUserObjectType == "SHIPMENTS") && (objCommand.uUserObjectType == "DETAILS"))  {
 enableExitKeys = false;
 hideKeyArray = [KeyF6];
 }
 }
 if ((objBusinessObject.uUserObjectType == "FREIGHT_LOADS") && (objCommand.uUserObjectType == "EDIT"))  {
 allowKeyArray = [KeyF2];
 hideKeyArray = [KeyF6];
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload,
 isHiddenDestination: isHiddenDestination,
 hideKeyArray: hideKeyArray,
 enableExitKeys: enableExitKeys, allowKeyArray: allowKeyArray});
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF6:
 SENDKEY(KeyF6);
 break;
 case KeyF10:
 SENDKEY(KeyF10);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT021SCR01C",
 vGUID      :  "79D959C6B6E5477C8A3A6D9D138B17E7",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Back","Delete Info","F3","F4","F5",
 "Print","F7","F8","F9","Drill","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000000001000000000000000000000000000",
 vFKEVLF : "01000000001000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_C05A7A8E5E974C28A40B04FDC43A0859);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_370.");}
var vSD_497A331CC08045F4B5A0BE1D90961BC0 = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUTSCR011CMT",
 vGUID      :  "B6C5040A6673485A845DB907B4B9A8B0",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
try{VF_SY420_REGISTER_FORM(vSD_497A331CC08045F4B5A0BE1D90961BC0);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_372.");}
var vSD_9A83099E79774DA0BBBE3DE2BA7630CD = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "CONTRACTS") {
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
 case KeyF5:
 SHARED.notifySaveMessage =  "Close/Print Open Ended Contracts has been run.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM310SCR01",
 vGUID      :  "B6FE6A9CCF9F4184B48F2E8F8E8CBBAF",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_9A83099E79774DA0BBBE3DE2BA7630CD);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_373.");}
var vSD_185E92116D364919BD6CEE99E4A198A6 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "CONTRACTS") {
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
 case KeyF5:
 SHARED.notifySaveMessage =  "Reissue Delay Price Contracts has been run.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN370SCR01",
 vGUID      :  "928F0F0AEC85488EAF910B11350453E9",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_185E92116D364919BD6CEE99E4A198A6);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_374.");}
var vSD_55208CF7D34D4B54A63120EFBFD6F681 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "GRAIN_MOVEMENTS") {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() != oPreviousForm.vName)) {
 if (SHARED.payload.screenType == SHARED.screenType.print) {
 HIDE_CURRENT_FORM();
 Q_SENDKEY("=uGRN222ONE", KeyF7, SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change}));
 return(bReturn);
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: true});
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
 case KeyF7:
 SHARED.alertSaveMessage =  "Movement has been printed";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN222ONE",
 vGUID      :  "565EE456BB1D44C99FDB5AACF8D18AC1",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Print","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000001010000000000000000000000000000",
 vFKEVLF : "10000001000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_55208CF7D34D4B54A63120EFBFD6F681);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_375.");}
var vSD_E1C4A223222C4DCAB3F477D8E7F4CF89 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF5:
 SHARED.alertSaveMessage =  "Commodity has been reduced";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.create});
 break;
 case KeyF23:
 SHARED.alertSaveMessage =  "Commodity has been reduced and printed";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.print});
 SENDKEY( KeyF5, SHARED.payload);
 return(bReturn);
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN222THREE",
 vGUID      :  "674C81E3FE8A41D88263D8AF70C64EC6",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","F4","Save",
 "F6","F7","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","Save/Print",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000100010000000000000000000000000000",
 vFKEVLF : "11000100000000000000000100000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_E1C4A223222C4DCAB3F477D8E7F4CF89);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_376.");}
var vSD_8651A5FEADFC414A85EF627D670810DB = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF5:
 SHARED.alertSaveMessage =  "Transfer record added";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.create});
 break;
 case KeyF23:
 SHARED.alertSaveMessage =  "Transfer has been added and printed";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.print});
 SENDKEY( KeyF5, SHARED.payload);
 return(bReturn);
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN222TWO",
 vGUID      :  "9F7101D15AC04A7193CDF33C8E03EA65",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","F4","Save",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","Save/Print",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000100010000000000000000000000000000",
 vFKEVLF : "11000100000000000000000100000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_8651A5FEADFC414A85EF627D670810DB);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_377.");}
var vSD_ABA7F7FACEB14EEAB9C69DC6BB9A014E = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "GROUP_TICKETS") {
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
 default:
 break;
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM160SCR01",
 vGUID      :  "AD7D4185FFB9443398E11CEBFA27A6DE",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_ABA7F7FACEB14EEAB9C69DC6BB9A014E);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_378.");}
var vSD_2C8FA7ECD3DC496B9082E4298A5DF3EE = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let allowKeyArray = [];
 let uMessage = SHARED.UF_get5250Message();
 if(uMessage.search(/F8 to accept/) != -1)
 {
 allowKeyArray = [KeyF8];
 SHARED.UF_setScreenFocus();
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, allowKeyArray: allowKeyArray});
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF5:
 SENDKEY(KeyF5);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM160SCR02C",
 vGUID      :  "0083704AFFAD49F680BFF3789E5415BA",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Back","F2","F3","F4","Continue",
 "F6","F7","Accept","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000100000000000000000000000000000000",
 vFKEVLF : "01000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_2C8FA7ECD3DC496B9082E4298A5DF3EE);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_379.");}
var vSD_143F1B41D81F43F78B72CE27808D431D = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF5:
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM160SCR04C",
 vGUID      :  "80E5017639C7408E87B8FE72B32304DF",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","Select","Continue",
 "F6","F7","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11001100010000000000000000110000000000",
 vFKEVLF : "11001100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_143F1B41D81F43F78B72CE27808D431D);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_380.");}
var vSD_B71C5DADC796450D98793874B2BFC60D = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "GROUP_TICKETS") {
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
 case KeyF7:
 SENDKEY(KeyF7);
 break;
 case KeyF9:
 SENDKEY(KeyF9);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM161SCR01",
 vGUID      :  "C48C3A78FF994A0EB759AFD7D477D694",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_B71C5DADC796450D98793874B2BFC60D);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_381.");}
var vSD_81416647E7EE4D51AC4A1AE0EB9FB215 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "GROUP_TICKETS") {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
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
 case KeyF5:
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM315SCR01",
 vGUID      :  "13AC060E9A5643A9B17CBFFDDFAA74FF",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_81416647E7EE4D51AC4A1AE0EB9FB215);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_382.");}
var vSD_651F5016EA9E4E51BCED51D45D7D0470 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let today = new Date();
 let dateToday = ('0' + (today.getMonth()+1)).slice(-2)
 + ('0' + today.getDate()).slice(-2)
 + today.getFullYear();
 SETVALUE("utxtActDate", dateToday);
 if (objBusinessObject.uUserObjectType == "HEDGES") {
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
 default:
 break;
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uHED240ONE",
 vGUID      :  "7C0A363647F646BA829C991ABB82AAC6",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100000000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_651F5016EA9E4E51BCED51D45D7D0470);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_383.");}
var vSD_7BF52B726D1E4AD39CBAEB39A7A6B350 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyEnter:
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uHED240TWO",
 vGUID      :  "DC3D28952FD04593963B8C3D5D049150",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0201030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000000000000000000000000000000000000",
 vFKEVLF : "11000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_7BF52B726D1E4AD39CBAEB39A7A6B350);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_384.");}
var vSD_829DC28AC20F44B29DB9F47D3A8E3179 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "INBOUND_BATCH_SCALE_TICKETS") {
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
 case KeyF5:
 SHARED.notifySaveMessage =  "Import Agris Scale Ticket file has been run.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uRTVLOCASCR01ImportAgrisScaleTicketFile",
 vGUID      :  "0DB333245C7846C7AA0D15E44E80B60C",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "00000100010000000000000000000000000000",
 vFKEVLF : "00000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_829DC28AC20F44B29DB9F47D3A8E3179);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_386.");}
var vSD_5C7C5E3170834A47AE9F64297FDFA4F6 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "INBOUND_SETTLEMENTS") {
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
 case KeyEnter:
 var strCust = (CHECK_FIELD_EXISTS("utxtAccount")) ? GETVALUE("utxtAccount") : 0;
 if (strCust.trim() == "") strCust = 0;
 AVSAVEVALUE(parseInt(strCust, 10),"CUSTPSN","Customer","Code");
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN100SCR01",
 vGUID      :  "5A3C2FF4243E414586601198F996B4A0",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_5C7C5E3170834A47AE9F64297FDFA4F6);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_387.");}
var vSD_0A6C7424D65946C98A0A2DE1F4F265EE = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let allowKeyArray = [];
 uMessage = SHARED.UF_get5250Message();
 if(uMessage.search(/F8 to accept/) != -1) {
 allowKeyArray = [KeyF8];
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, allowKeyArray: allowKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF6:
 var ustrCustomer = AVRESTORENVALUE(0,"CUSTPSN","Customer","Code");
 AVSIGNALEVENT("DISPLAY_SIGS","FRAMEWORK","","","","","",ustrCustomer);
 return(bReturn);
 break;
 case KeyF8:
 Q_SENDKEY("=" + CURRENT_FORM(), KeyF5, SHARED.payload);
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN100SCRFPOC",
 vGUID      :  "8F92399F77154448A4C76CCA164459BB",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","Select","Continue",
 "Authorized Sigs","F7","Accept","Drill","Accept","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102131303060508090407141314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000010110000000000000000110000000000",
 vFKEVLF : "11000010010000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_0A6C7424D65946C98A0A2DE1F4F265EE);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_388.");}
var vSD_E4D1F7F135F44CDCA196E3D1744EE8FF = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let hideKeyArray = [KeyF4];
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, hideKeyArray: hideKeyArray});
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
 default:
 break;
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN100SCRFPTOC",
 vGUID      :  "E76D2335E82B478582FF1590E3DAEB52",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","Select","Continue",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000110000000000",
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
try{VF_SY420_REGISTER_FORM(vSD_E4D1F7F135F44CDCA196E3D1744EE8FF);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_389.");}
var vSD_6FB5819A799A4F429B620D6895E97E23 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType);
 TRACE("T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action);
 TRACE("T_CurrentForm " + CURRENT_FORM());
 TRACE("T_PreviousForm " + oPreviousForm.vName);
 TRACE("Continue " + objGlobal.utxtscrtpocontinue);
 allowKeyArray = [];
 if ((objBusinessObject.uUserObjectType == "INBOUND_SETTLEMENTS") && (objCommand.uUserObjectType == "NEW")) {
 if (objGlobal.utxtscrtpocontinue == "Y") {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage.search(/F8 to accept/) != -1) {
 allowKeyArray = [KeyF8];
 }
 }
 }
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true,allowKeyArray: allowKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 objGlobal.utxtscrtpocontinue = "N";
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 if (sButton == "F5") {objGlobal.utxtscrtpocontinue = "Y";}
 return(bReturn);
 switch (sButton)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN100SCRTPO",
 vGUID      :  "CE7C80B4410343E2A0D1FD8DAB6437D8",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","F4","Continue",
 "F6","F7","Accept","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000100110000000000000000110000000000",
 vFKEVLF : "11000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_6FB5819A799A4F429B620D6895E97E23);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_390.");}
var vSD_0125F53429344B779B8EFC0ED45083DC = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF5:
 SHARED.AKey = ["","","","",""];
 SHARED.NKey = [0,0,0,0,0];
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.create, filterRebuildEvent: "Sign_Settlements"});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN100SCRSETC",
 vGUID      :  "F7642A2F2E2148238C5E4363D438DE6C",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","F4","Save",
 "F6","F7","F8","F9","Printers","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405110708091006121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000100011000000000000000110000000000",
 vFKEVLF : "11000100001000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_0125F53429344B779B8EFC0ED45083DC);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_391.");}
var vSD_85A349BEB62340269F7785DB25C99436 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let hideKeyArray = [KeyF4];
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, hideKeyArray: hideKeyArray});
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF4:
 SENDKEY(KeyF4);
 break;
 case KeyF5:
 SENDKEY(KeyF5);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN100SCRFPTC",
 vGUID      :  "CAE486772489467FA1F7364CFED402EC",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","Select","Continue",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000100010000000000000000110000000000",
 vFKEVLF : "01000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_85A349BEB62340269F7785DB25C99436);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_392.");}
var vSD_48DAEF346536413DA0E0528F31AF0562 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let allowKeyArray = [];
 uMessage = SHARED.UF_get5250Message();
 if(uMessage.search(/F8 to accept/) != -1) {
 allowKeyArray = [KeyF8];
 GLOBAL_RegainFocus = true;
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, allowKeyArray: allowKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 SHARED.AKey = ["","","","",""];
 SHARED.NKey = [0,0,0,0,0];
 switch (sButton)
 {
 case KeyF5:
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.create, filterRebuildEvent: "Sign_Settlements"});
 break;
 case KeyF8:
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.create, filterRebuildEvent: "Sign_Settlements"});
 Q_SENDKEY("=uGRN100SCRCONC", KeyF5, SHARED.payload);
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN100SCRCONC",
 vGUID      :  "3638BBB9D6044985B37909589066E7F8",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","Select","Continue",
 "F6","F7","Accept","F9","F10","Toggle Delivery Date",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10001000010000000000000000110000000000",
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
try{VF_SY420_REGISTER_FORM(vSD_48DAEF346536413DA0E0528F31AF0562);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_393.");}
var vSD_F0C46A1B79994DA8B8EBBFF841F7B427 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let hideKeyArray = [KeyF4];
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, hideKeyArray: hideKeyArray});
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF4:
 SENDKEY(KeyF4);
 break;
 case KeyF5:
 SENDKEY(KeyF5);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN100SCRFPTCS",
 vGUID      :  "3A919F526B0449D48521C3D366731973",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","Select","Continue",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000100010000000000000000110000000000",
 vFKEVLF : "01000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_F0C46A1B79994DA8B8EBBFF841F7B427);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_394.");}
var vSD_01CF64B483D74124BC81DAE4DFB2049B = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let hideKeyArray = [KeyF4];
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, hideKeyArray: hideKeyArray});
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
 default:
 break;
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN100SCRFPTOCS",
 vGUID      :  "DE2A97D10C42465A9B3C9D53DB18F41F",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","Select","Continue",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000000010000000000000000110000000000",
 vFKEVLF : "01000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_01CF64B483D74124BC81DAE4DFB2049B);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_395.");}
var vSD_EED6A98AD95948329F0D56955D9ACCE5 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if ((objBusinessObject.uUserObjectType == "OB_CONTRACT_MAINTENANCE") || (objBusinessObject.uUserObjectType == "SALES_CONTRACTS")) {
 let isHiddentDestination = false;
 if((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 if (objCommand.uUserObjectType == "EDIT") {
 SETVALUE("utxtControlNumber", objListManager.NKey1[0]);
 isHiddentDestination = true;
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false, isHiddentDestination: isHiddentDestination});
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
 default:
 break;
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT105SCR01",
 vGUID      :  "7B7EAF10DBA04E9F9E94C31A03B9DD69",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_EED6A98AD95948329F0D56955D9ACCE5);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_396.");}
var vSD_F3AC85572CD745BE88AB87C8CF7E3AB1 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType);
 TRACE("T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action);
 TRACE("T_CurrentForm " + CURRENT_FORM());
 TRACE("T_PreviousForm " + oPreviousForm.vName);
 let hideKeyArray = [];
 let allowKeyArray =[];
 if ((objCommand.uUserObjectType == "EDIT") && (objBusinessObject.uUserObjectType == "OB_CONTRACT_MAINTENANCE"))
 {
 hideKeyArray = [KeyF3];
 allowKeyArray =[KeyF2];
 }
 if ((objCommand.uUserObjectType == "EDIT") && (objBusinessObject.uUserObjectType == "SALES_CONTRACTS"))
 {
 hideKeyArray = [KeyF2];
 allowKeyArray =[KeyF3];
 }
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false, hideKeyArray: hideKeyArray, allowKeyArray: allowKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 if (objCommand.uUserObjectType == "NEW") {
 let utxtControl = parseInt(GETVALUE("utxtControl"), 10);
 SHARED.NKey = [utxtControl,0,0,0,0];
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.create, filterRebuildEvent: SHARED.filterRebuildEvent.addListEntry});
 }
 else {
 SHARED.alertSaveMessage = "This record has been updated";
 SHARED.NKey = [objListManager.NKey1[0],objListManager.NColumn10[0],0,0,0];
 SHARED.AKey = [objListManager.AColumn10[0],"","","",""];
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.create, filterRebuildEvent: SHARED.filterRebuildEvent.updateListEntry});
 }
 break;
 case KeyF23:
 if (objCommand.uUserObjectType == "NEW") {
 let utxtControl = parseInt(GETVALUE("utxtControl"), 10);
 SHARED.NKey = [utxtControl,0,0,0,0];
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.create, filterRebuildEvent: SHARED.filterRebuildEvent.addListEntry});
 }
 else {
 SHARED.alertSaveMessage = "This record has been updated";
 SHARED.NKey = [objListManager.NKey1[0],objListManager.NColumn10[0],0,0,0];
 SHARED.AKey = [objListManager.AColumn10[0],"","","",""];
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.create, filterRebuildEvent: SHARED.filterRebuildEvent.updateListEntry});
 }
 Q_SENDKEY("=" + CURRENT_FORM(), KeyF5, SHARED.payload);
 return(bReturn);
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT105SCR02C",
 vGUID      :  "8D7DDB887CA34C7686AF0CB3DC6244D4",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Restart","Copy","Delete","Attribute","Save",
 "F6","F7","Fold/Drop","Search","Disc. Schedule","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","Save/Print Edit",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405230708091011121314151617181920212206242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000100000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_F3AC85572CD745BE88AB87C8CF7E3AB1);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_397.");}
var vSD_11906B76E8EC487A917F2D1C5BE23CFB = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyEnter:
 SHARED.alertSaveMessage = "Sales Contract Control " + objListManager.NKey1[0] + " has been deleted.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.delete, filterRebuildEvent: SHARED.filterRebuildEvent.refreshInstanceList});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT105SCRDEL",
 vGUID      :  "61D1B70054B24F41A782D94EE789EF95",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000000000000000000000000000000000000",
 vFKEVLF : "11000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_11906B76E8EC487A917F2D1C5BE23CFB);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_399.");}
var vSD_BE570D61D8964440B554CA4E66E0858A = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF5:
 SHARED.alertSaveMessage = "Defer roll is complete.";
 SHARED.notifySaveMessage = "Defer roll is complete.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.delete, filterRebuildEvent: SHARED.filterRebuildEvent.refreshInstanceList});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN205THREE",
 vGUID      :  "75DEE0266A2F41D8AAAA0046A23EB83C",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","F4","Proceed",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000100000000000000000000000000000000",
 vFKEVLF : "11000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_BE570D61D8964440B554CA4E66E0858A);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_402.");}
var vSD_7F644F4E7F0C48079C710226BEDF1908 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "OUTBOUND_BATCH_SCALE_TICKETS") {
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
 case KeyF8:
 sButton = KeyF7;
 HIDE_CURRENT_FORM("Printing Completed");
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN140SCR01-1",
 vGUID      :  "30124827768F4C57B7CA60D670E05B81",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","Print","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0902030405060708011011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000110000000000000000000000000000",
 vFKEVLF : "10000000100000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_7F644F4E7F0C48079C710226BEDF1908);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_404.");}
var vSD_FF871CD0187A45979D700EECECFB712C = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF5:
 SENDKEY(KeyF5);
 break;
 case KeyF9:
 SENDKEY(KeyF9);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN140SCR01-2",
 vGUID      :  "7F22ED6FBD7146CEBDEB21BA9A2E6F04",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","F4","Continue",
 "F6","F7","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000100010000000000000000110000000000",
 vFKEVLF : "11000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_FF871CD0187A45979D700EECECFB712C);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_405.");}
var vSD_756F9C71B2E34EDFB1887DF9357AEF80 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType + " T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action + " T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM() + " T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage + " T_alertSaveMessage  " + SHARED.alertSaveMessage);
 let hideKeyArray = [KeyF1];
 if ((objBusinessObject.uUserObjectType == "OUTBOUND_BATCH_SCALE_TICKETS") && (objCommand.uUserObjectType == "BILL/SHIP_OUT_TICKETS")) {
 hideKeyArray = [];
 }
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true,hideKeyArray: hideKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN140SCR04C",
 vGUID      :  "C933F762BF824BD3A6A711391DA5A880",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","F4","Save",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0201030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000110000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_756F9C71B2E34EDFB1887DF9357AEF80);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_406.");}
var vSD_CCC547DF6E3E4164A90CF0C270D01776 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType);
 TRACE("T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action);
 TRACE("T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_SHARED.payload.filterRebuildEvent " + SHARED.payload.filterRebuildEvent);
 TRACE("T_CurrentForm " + CURRENT_FORM());
 TRACE("T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_alertSaveMessage  " + SHARED.alertSaveMessage);
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 isHiddenDestination = false;
 hideScreenMessage = "";
 TRACE("T_SHARED.currentExitJunction " + SHARED.currentExitJunction);
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, hideScreenMessage: hideScreenMessage, isHiddenDestination: isHiddenDestination});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF3:
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN142SCR02",
 vGUID      :  "9E5FAB1E537743C1A630A45BE9BEE56A",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Back","F2","Delete","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "01010000000000000000000000110000000000",
 vFKEVLF : "01010000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_CCC547DF6E3E4164A90CF0C270D01776);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_407.");}
var vSD_C4B3C404DE694729A67DD5FE36E1B770 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let isHiddenDestination = false;
 if ((objBusinessObject.uUserObjectType == "FREIGHT_CONTRACTS") || (objBusinessObject.uUserObjectType == "FREIGHT_COMMENTS")) {
 if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 isHiddenDestination = true;
 if((objCommand.uUserObjectType == "DETAILS") || (objCommand.uUserObjectType == "COMMENTS")){
 SETVALUE("utxtControl",objListManager.NKey1[0]);
 }
 else if(objCommand.uUserObjectType == "PRINT"){
 SETVALUE("utxtVendor",objListManager.VisualId1[0]);
 }
 Q_SENDKEY("=uFRT010SCR01", KeyEnter, SHARED.payloads);
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false, isHiddenDestination: isHiddenDestination});
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
 case KeyEnter:
 break;
 case KeyF7:
 break;
 case KeyF9:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uFRT010SCR01",
 vGUID      :  "5D3D1720C1CD411295DA7BFE7E27F359",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_C4B3C404DE694729A67DD5FE36E1B770);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_363.");}
var vSD_1C756C9360FE4DFA803CF058130E8409 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let hideScreenMessage = "";
 let returnValue = {found: false, pageDownPressed: false};
 if ((SHARED.payload.action == SHARED.action.initialise)
 && ((SHARED.pageDownPressed) || (CURRENT_FORM() != oPreviousForm.vName)) )
 {
 if(objCommand.uUserObjectType == "PRINT"){
 SHARED.notifySaveMessage = "Control "+ objListManager.NKey1[0] +" has been printed";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 returnValue = SHARED.UF_findInList({selectFieldName: "Opt",
 option: "P",
 searchNKeyFieldNameArray: ["Control","","","",""],
 pageDownIfNotFound: true});
 if (!returnValue.found) {
 if (!returnValue.pageDownPressed) {
 hideScreenMessage = objCommand.uCaption + " could not be displayed";
 }
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 }
 }
 } else if (SHARED.payload.action == SHARED.action.save ) {
 Q_SENDKEY("=" + CURRENT_FORM(), KeyF1, SHARED.payload);
 }
 SHARED.pageDownPressed = returnValue.pageDownPressed;
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false, isHiddenDestination: true, hideScreenMessage: hideScreenMessage});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 break;
 case KeyF1:
 break;
 case KeyF7:
 break;
 case KeyF8:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uFRT010SCR03",
 vGUID      :  "7259141CA2DA498B88DCF07409BBABBD",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Restart","F2","F3","F4","F5",
 "F6","Exit","Fold/Drop","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
try{VF_SY420_REGISTER_FORM(vSD_1C756C9360FE4DFA803CF058130E8409);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_373.");}
var vSD_B38F2B8E439049CA9BA9E71066525614 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let hideKeyArray = [KeyF6,KeyF2];
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false, hideKeyArray: hideKeyArray});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false, hideKeyArray: hideKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 break;
 case KeyF1:
 break;
 case KeyF6:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 /* <NAVIGATESWITCH> - Do not remove or alter this line */        case "uFRT010SCR01":
 case "uFRT010SCR01":
 {
 SENDKEY(KeyF1);
 Q_CHECK_CURRENT_FORM("uFRT010SCR01","Unable to navigate to form uFRT010SCR01");
 }
 break;
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uFRT011SCR01C",
 vGUID      :  "CBE5D544F3224E2BB59B33C2AF31AF96",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Restart","F2","F3","F4","F5",
 "Print","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "00000000000000000000000000110000000000",
 vFKEVLF : "00000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_B38F2B8E439049CA9BA9E71066525614);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_364.");}
var vSD_67E78717419A414EA0203FD857703CB0 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let hideKeyArray = [];
 let allowKeyArray = [];
 if(objCommand.uUserObjectType == "NEW"){
 }
 else{
 hideKeyArray = [KeyF2];
 }
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false,hideKeyArray: hideKeyArray});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false, allowKeyArray: allowKeyArray, hideKeyArray: hideKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 if(objCommand.uUserObjectType == "NEW"){
 SETKEYENABLED("uFRT100SCR02C",KeyF4,false,false);
 SETKEYENABLED("uFRT100SCR02C",KeyF3,false,false);
 SHOW_CURRENT_FORM(true);
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 break;
 case KeyF1:
 break;
 case KeyF2:
 break;
 case KeyF5:
 if(objCommand.uUserObjectType == "NEW"){
 let ustrFrtControl = GETVALUE("utxtFrtControl");
 let uintFrtControl = parseInt(ustrFrtControl, 10);
 SHARED.NKey = [uintFrtControl,0,0,0,0];
 SHARED.alertSaveMessage = "This record has been save.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.create, filterRebuildEvent: SHARED.filterRebuildEvent.addListEntry});
 }
 else if(objCommand.uUserObjectType == "EDIT"){
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change, filterRebuildEvent: SHARED.filterRebuildEvent.updateListEntry});
 }
 break;
 case KeyF9:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uFRT100SCR02C",
 vGUID      :  "58E7064BBF4C4324B81C0F08DEDE51E5",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Restart","Copy","Delete","Sell","Save",
 "F6","F7","F8","F9","Accept","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10011100010000000000000000000000000000",
 vFKEVLF : "10011100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_67E78717419A414EA0203FD857703CB0);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_362.");}
var vSD_49C79ED134B640B09D14F82CA2F53844 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "FREIGHT_CONTRACTS") {
 if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 if(objCommand.uUserObjectType == "EDIT"){
 SETVALUE("utxtControlNumber",objListManager.NKey1[0]);
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 break;
 case KeyF7:
 break;
 case KeyF9:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uFRT100SCR01",
 vGUID      :  "B972AFC95874457080E597435BE53158",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_49C79ED134B640B09D14F82CA2F53844);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_361.");}
var vSD_D964D82DC212494F91235F5701848667 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let allowKeyArray = [];
 if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 let uglblActiveFormMessageFRT1105c = SHARED.UF_get5250Message();
 if(uglblActiveFormMessageFRT1105c.find(/F10 to accept/) != -1){
 allowKeyArray = [KeyF10];
 }
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, allowKeyArray: allowKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 AVSAVEVALUE("FRT110-05C","FRT110","FLGFORM");
 SHARED.currentReportName = "";
 let uglblActiveFormMessageFRT1105c;
 switch (sButton)
 {
 case KeyF5:
 SHARED.currentReportName = "FRT110-05C";
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uFRT110SCR05C",
 vGUID      :  "1919864835504029821AC58059678C7D",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","F4","Continue",
 "F6","F7","F8","F9","Accept","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000110000000000",
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
try{VF_SY420_REGISTER_FORM(vSD_D964D82DC212494F91235F5701848667);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_371.");}
var vSD_B2C29542414A4EE5BB7419F9A08FFADF = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let allowKeyArray = [];
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType + " T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action + " T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM() + " T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage + " T_alertSaveMessage  " + SHARED.alertSaveMessage);
 TRACE("T_SHARED.currentReportName " + SHARED.currentReportName);
 let usrDeviceName = AVRESTOREAVALUE("NONE","FRT110","DEVICE");
 if(usrDeviceName !== "NONE") {
 let usrSaveFlag = AVRESTOREAVALUE("","FRT110","FLGSAVE",usrDeviceName);
 let usrSavePrint = AVRESTOREAVALUE("","FRT110","FLGPRINT",usrDeviceName);
 let usrSaveForm = AVRESTOREAVALUE("","FRT110","FLGFORM");
 TRACE("T_usrSaveFlag " + usrSaveFlag);
 if ((usrSaveFlag === "Y") && (oPreviousForm.vName != "uFRT110SCR02C")) {
 SETVALUE("utxtVendor",AVRESTOREAVALUE("","FRT110","VENDOR",usrDeviceName));
 SETVALUE("utxtShipmentControl",AVRESTOREAVALUE("","FRT110","SHIPCONTROL",usrDeviceName));
 SETVALUE("utxtCommodity",AVRESTOREAVALUE("","FRT110","COMMODITY",usrDeviceName));
 SETVALUE("utxtFreightControl",AVRESTOREAVALUE("","FRT110","FCONTROL",usrDeviceName));
 SETVALUE("utxtBranch",AVRESTOREAVALUE("","FRT110","BRANCH",usrDeviceName));
 AVSAVEVALUE("","FRT110","FLGSAVE",usrDeviceName);
 if ((usrSavePrint != "Y") && (usrSaveForm == "FRT110-05C")) {
 allowKeyArray = [KeyF10];
 AVSAVEVALUE("","FRT110","FLGFORM");
 }
 }
 }
 let hideKeyArray = [];
 if (objBusinessObject.uUserObjectType == "FREIGHT_LOADS") {
 if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 if(objCommand.uUserObjectType == "EDIT"){
 hideKeyArray = [KeyF24];
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false, hideKeyArray: hideKeyArray, allowKeyArray: allowKeyArray});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 if((objBusinessObject.uUserObjectType == "FREIGHT_LOADS") && (objCommand.uUserObjectType == "EDIT")) {
 let usrDevice = GETVALUE("utxtDevice").trim();
 AVSAVEVALUE(usrDevice ,"FRT110","DEVICE");
 AVSAVEVALUE(GETVALUE("utxtActionCode"),"FRT110","ACTIONCODE",usrDevice);
 AVSAVEVALUE(GETVALUE("utxtVendor"),"FRT110","VENDOR",usrDevice);
 AVSAVEVALUE(GETVALUE("utxtShipmentControl"),"FRT110","SHIPCONTROL",usrDevice);
 AVSAVEVALUE(GETVALUE("utxtCommodity"),"FRT110","COMMODITY",usrDevice);
 AVSAVEVALUE(GETVALUE("utxtFreightControl"),"FRT110","FCONTROL",usrDevice);
 AVSAVEVALUE(GETVALUE("utxtBranch"),"FRT110","BRANCH",usrDevice);
 AVSAVEVALUE("","FRT110","FLGSAVE",usrDevice);
 }
 AVSAVEVALUE("","FRT110","FLGFORM");
 SHARED.currentReportName = "";
 switch (sButton)
 {
 case KeyF10:
 sButton = KeyF7;
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 break;
 case KeyF24:
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 SENDKEY(KeyF7, SHARED.payload);
 return(bReturn);
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uFRT110SCR01",
 vGUID      :  "D7179E41EEA9497CA1F919C2735B6359",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","Print","F9","Print","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "Print","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000011000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_B2C29542414A4EE5BB7419F9A08FFADF);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_369.");}
var vSD_439D4CC08E5149AB80A556D7E29E5C2F = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType + " T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action + " T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM() + " T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage + " T_alertSaveMessage  " + SHARED.alertSaveMessage);
 let allowKeyArray = [];
 let usrDeviceName = GETVALUE("utxtDevice").trim();
 let usrSaveFlag = AVRESTOREAVALUE("","FRT110","FLGSAVE",usrDeviceName);
 if(objCommand.uUserObjectType == "EDIT"){
 if ((SHARED.currentReportName == "FRT110-05C") || ((usrSaveFlag == "Y") && (SHARED.currentReportName == "FRT110-05C"))){
 allowKeyArray = [KeyF10];
 }
 let flagRecord = false;
 for ( Index = 1; CHECK_FIELD_EXISTS("Load", Index);  Index++ ){flagRecord = true;}
 }
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false, allowKeyArray: allowKeyArray});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, allowKeyArray: allowKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 let usrDevice = GETVALUE("utxtDevice").trim();
 AVSAVEVALUE("Y","FRT110","FLGSAVE",usrDevice);
 AVSAVEVALUE("","FRT110","FLGPRINT",usrDevice);
 switch (sButton)
 {
 case KeyF1:
 break;
 case KeyF5:
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 break;
 case KeyF10:
 AVSAVEVALUE("Y","FRT110","FLGPRINT",usrDevice);
 sButton = KeyF7;
 break;
 case KeyF24:
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 SENDKEY(KeyF7, SHARED.payload);
 return(bReturn);
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uFRT110SCR02C",
 vGUID      :  "ED0C8B434D0C4AFEA7B182088D88B1C2",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Back","Add Load","F3","F4","Continue",
 "F6","Exit","Fold/Drop","F9","Print","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "Print","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102032021060708041005121314151617181920212223242526272829303132333435363738",
 vFKERTS : "00000000000000000000000000110000000000",
 vFKEVLF : "00000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_439D4CC08E5149AB80A556D7E29E5C2F);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_370.");}
var vSD_93895AA3A5784A51AE985236DDFEB424 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let isHiddenDestination = false;
 if ((objBusinessObject.uUserObjectType == "SALES_CONTRACTS") || (objBusinessObject.uUserObjectType == "SALES_CONTRACTS_COMMENT")){
 if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 if ((objCommand.uUserObjectType == "DETAILS") || (objCommand.uUserObjectType == "PRINT") || (objCommand.uUserObjectType == "COMMENTS")){
 isHiddenDestination = true;
 if (objCommand.uUserObjectType == "PRINT") {
 SETVALUE("utxtAccount",objListManager.VisualId1[0]);
 } else {
 SETVALUE("utxtControl",objListManager.NKey1[0]);
 }
 Q_SENDKEY("=uOUT010SCR01", KeyEnter, SHARED.payload);
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false, isHiddenDestination: isHiddenDestination});
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
 case KeyEnter:
 break;
 case KeyF7:
 break;
 case KeyF9:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT010SCR01",
 vGUID      :  "10A68EBDDDC0455FA732F823E52B25C4",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_93895AA3A5784A51AE985236DDFEB424);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_376.");}
var vSD_175CA542A5994F07927A4A7F04EE1C3F = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF10:
 SENDKEY(KeyF10);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT011SCR04C",
 vGUID      :  "3F33DA9A48F74ED8BDF3E7C93B1B2CB0",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Back","F2","F3","F4","F5",
 "F6","F7","F8","F9","Disc Level","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000000001000000000000000000000000000",
 vFKEVLF : "11000000001000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_175CA542A5994F07927A4A7F04EE1C3F);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_379.");}
var vSD_1B9A3AF9ABEF4BC88547FBE6608F7A55 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType);
 TRACE("T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action);
 TRACE("T_CurrentForm " + CURRENT_FORM());
 TRACE("T_PreviousForm " + oPreviousForm.vName);
 let allowKeyArray = [];
 let hideKeyArray = [];
 if ((objBusinessObject.uUserObjectType == "SALES_CONTRACTS") && (objCommand.uUserObjectType == "NEW")) {
 allowKeyArray = [KeyF1,KeyF2];
 hideKeyArray = [KeyF6];
 }
 if ((objBusinessObject.uUserObjectType == "OUTBOUND_SETTLEMENTS") && (objCommand.uUserObjectType == "NEW")) {
 allowKeyArray = [KeyF1,KeyF2];
 hideKeyArray = [KeyF6];
 }
 if ((objBusinessObject.uUserObjectType == "OUTBOUND_BATCH_SCALE_TICKETS") && (objCommand.uUserObjectType == "NEW")) {
 allowKeyArray = [KeyF1,KeyF2,KeyF10];
 hideKeyArray = [KeyF6];
 }
 if ((objBusinessObject.uUserObjectType == "INBOUND_BATCH_SCALE_TICKETS") && (objCommand.uUserObjectType == "NEW")) {
 allowKeyArray = [KeyF1,KeyF2,KeyF10];
 hideKeyArray = [KeyF6];
 }
 if(objCommand.uUserObjectType == "DETAILS"){
 allowKeyArray = [KeyF1,KeyF2];
 hideKeyArray = [KeyF6];
 if (objBusinessObject.uUserObjectType == "SALES_CONTRACTS") {
 allowKeyArray = [KeyF10];
 hideKeyArray = [KeyF6,KeyF2];
 }
 } else if(objCommand.uUserObjectType == "COMMENTS"){
 hideKeyArray = [KeyF2, KeyF3, KeyF6];
 }
 if ((objBusinessObject.uUserObjectType == "FREIGHT_LOADS") && (objCommand.uUserObjectType == "EDIT"))  {
 allowKeyArray = [KeyF1,KeyF2];
 hideKeyArray = [KeyF6];
 }
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false, allowKeyArray: allowKeyArray, hideKeyArray: hideKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 break;
 case KeyF1:
 break;
 case KeyF3:
 break;
 case KeyF4:
 break;
 case KeyF6:
 break;
 case KeyF8:
 break;
 case KeyF10:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT011SCR01C",
 vGUID      :  "5F4C7C111D074112A56DBB2402D2183E",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Back","Delete Info","Comments","Disc. Schedule","F5",
 "Print","F7","Attributes","F9","Drill","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "00000000000000000000000000000000000000",
 vFKEVLF : "00000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_1B9A3AF9ABEF4BC88547FBE6608F7A55);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_377.");}
var vSD_0E39DBD920FC4924B1925324822C69CC = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF12:
 SENDKEY(KeyF12);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT012SCR01C",
 vGUID      :  "EB11575A6E27457592A53EFC7CD084F6",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Back","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "Cancel","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000000000010000000000000000000000000",
 vFKEVLF : "11000000000010000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_0E39DBD920FC4924B1925324822C69CC);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_380.");}
var vSD_9D2912378A684F57B617C2F12FC4125E = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 AVSAVEVALUE("NONE","FRT110","DEVICE");
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 break;
 case KeyF7:
 break;
 case KeyF9:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uFRT020SCR01",
 vGUID      :  "1DA244DDAAA84034A738591BD891CF42",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
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
try{VF_SY420_REGISTER_FORM(vSD_9D2912378A684F57B617C2F12FC4125E);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_408.");}
var vSD_8DEB2E4DE479469187D16B199E969FBF = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF6:
 SENDKEY(KeyF6);
 break;
 case KeyF7:
 SENDKEY(KeyF7);
 break;
 case KeyF8:
 SENDKEY(KeyF8);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uFRT020SCR03C",
 vGUID      :  "4FACB90FE87C4A619A442EC109F13B09",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","F2","F3","F4","F5",
 "Print","Exit","Fold/Drop","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0401030405060308021011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000000000000000000000110000000000",
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
try{VF_SY420_REGISTER_FORM(vSD_8DEB2E4DE479469187D16B199E969FBF);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_409.");}
var vSD_E5CA8D6DDDDC42F89C3434F5E0FB4DB3 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let hideScreenMessage = "";
 let returnValue = {found: false, pageDownPressed: false};
 if ((SHARED.payload.action == SHARED.action.initialise)
 && ((SHARED.pageDownPressed) || (CURRENT_FORM() != oPreviousForm.vName)) )
 {
 if(objCommand.uUserObjectType == "PRINT"){
 SHARED.notifySaveMessage = "Control "+ objListManager.NKey1[0] +" has been printed";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 returnValue = SHARED.UF_findInList({selectFieldName: "Opt",
 option: "P",
 searchNKeyFieldNameArray: ["Control","","","",""],
 pageDownIfNotFound: true});
 if (!returnValue.found) {
 if (!returnValue.pageDownPressed) {
 hideScreenMessage = objCommand.uCaption + " could not be displayed";
 }
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 }
 }
 } else if (SHARED.payload.action == SHARED.action.save ) {
 Q_SENDKEY("=" + CURRENT_FORM(), KeyF1, SHARED.payload);
 }
 SHARED.pageDownPressed = returnValue.pageDownPressed;
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false, isHiddenDestination: true, hideScreenMessage: hideScreenMessage});
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF7:
 SENDKEY(KeyF7);
 break;
 case KeyF8:
 SENDKEY(KeyF8);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT010SCR03C",
 vGUID      :  "BB8D5721002D42BF89AB44AA066D5FFB",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Back","F2","F3","F4","F5",
 "F6","Exit","Fold/Drop","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000100000000000000000000000000000",
 vFKEVLF : "10000000100000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_E5CA8D6DDDDC42F89C3434F5E0FB4DB3);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_410.");}
var vSD_F527713FB815460C820BA4487BDB5A4E = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "OUTBOUND_SETTLEMENTS") {
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
 case KeyF7:
 SENDKEY(KeyF7);
 break;
 case KeyF9:
 SENDKEY(KeyF9);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT115SCR01",
 vGUID      :  "905F10304D13462CB5AA7DF61443F170",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_F527713FB815460C820BA4487BDB5A4E);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_411.");}
var vSD_6517A75230494AC0B1D9CCB2E6EB8B6E = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let allowKeyArray = [];
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage.search(/F10 to accept/) != -1) {
 allowKeyArray = [KeyF10];
 }
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, allowKeyArray:allowKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 switch (sButton)
 {
 case KeyF5:
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 break;
 case KeyF7:
 var answer;
 answer = confirm("Are you sure you want to end this settlement ?");
 if(!answer)
 {
 return(bReturn);
 }
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT115SCR04C",
 vGUID      :  "16C9A8A6AEEF4626BE21EF84C110FDDB",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Restart","Direct","F3","Unit/Dollar","Continue",
 "F6","Exit","Fold/Drop","Srch","Accept","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","Left","Rght","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0122032104080702051011121314151617181907062223242526272829303132333435363738",
 vFKERTS : "10100101111000000001100000110000000000",
 vFKEVLF : "10100101100000000001100000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_6517A75230494AC0B1D9CCB2E6EB8B6E);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_412.");}
var vSD_3DFEFAE8374C4384BD7B47CEEBCE5FDB = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF5:
 SENDKEY(KeyF5);
 break;
 case KeyF6:
 SENDKEY(KeyF6);
 break;
 case KeyF10:
 SENDKEY(KeyF10);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT115SCR05C",
 vGUID      :  "97E11846EDAB43879766A690837880A4",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","F4","Continue",
 "Print","F7","F8","F9","Comments","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102010405060708091003121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000110001000000000000000000000000000",
 vFKEVLF : "11000110001000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_3DFEFAE8374C4384BD7B47CEEBCE5FDB);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_413.");}
var vSD_A4E79975523A4B9DBF1DFFF163A47BB7 = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF5:
 SENDKEY(KeyF5);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT115SCR02",
 vGUID      :  "FF7C5B43247041C9A0F5358C9AFF5402",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Back","F2","F3","F4","Continue",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100000000000000000000000000000000",
 vFKEVLF : "00000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_A4E79975523A4B9DBF1DFFF163A47BB7);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_414.");}
var vSD_42A7C015031D445ABBF237C47FEEB568 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if ((objBusinessObject.uUserObjectType == "OUTBOUND_SETTLEMENTS") ||(objBusinessObject.uUserObjectType == "SETTLEMENTS_COMMENTS")) {
 let isHiddenDestination = false;
 let hideScreenMessage = "";
 if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 SETVALUE("utxtSettle",objListManager.NKey1[0]);
 Q_SENDKEY("=" + CURRENT_FORM(), KeyEnter, SHARED.payload);
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false, isHiddenDestination: isHiddenDestination, hideScreenMessage: hideScreenMessage});
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
 case KeyF7:
 SENDKEY(KeyF7);
 break;
 case KeyF9:
 SENDKEY(KeyF9);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT030SCR01",
 vGUID      :  "14E55C5E7AB749F8AD5A2825DFE87941",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000110000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_42A7C015031D445ABBF237C47FEEB568);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_416.");}
var vSD_C7879719F72C4C7F9CAB13749F440CD0 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let hideKeyArray = [KeyF4, KeyF6];
 let isHiddenDestination = false;
 let hideScreenMessage = "";
 if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 if(objCommand.uUserObjectType == "PRINT")
 {
 isHiddenDestination = true;
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 SHARED.notifySaveMessage = "Outbound Settlement " + objListManager.NKey1[0] + " has been printed."
 Q_SENDKEY("=" + CURRENT_FORM(), KeyF6, SHARED.payload);
 }
 if(objCommand.uUserObjectType == "REVERSE")
 {
 isHiddenDestination = true;
 Q_SENDKEY("=" + CURRENT_FORM(), KeyF4, SHARED.payload);
 }
 } else if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 if (objCommand.uUserObjectType == "PRINT") {
 isHiddenDestination = true;
 Q_SENDKEY("=" + CURRENT_FORM(), KeyF1, SHARED.payload);
 }
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload,
 enableExitKeys: false,
 hideKeyArray: hideKeyArray,
 isHiddenDestination: isHiddenDestination});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 SETKEYENABLED("uOUT031SCR01C",KeyF1,true,true);
 SHOW_CURRENT_FORM(true);
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF2:
 SENDKEY(KeyF2);
 break;
 case KeyF4:
 SENDKEY(KeyF4);
 break;
 case KeyF6:
 SENDKEY(KeyF6);
 break;
 case KeyF10:
 SENDKEY(KeyF10);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT031SCR01C",
 vGUID      :  "B48208958FAE4A4D931BBC9ECE3E4427",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Back","Load Info","F3","Reverse","F5",
 "Print","F7","F8","F9","Drill","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102110405060708091003121314151617181920212223242526272829303132333435363738",
 vFKERTS : "01100000001000000000000000110000000000",
 vFKEVLF : "01100000001000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_C7879719F72C4C7F9CAB13749F440CD0);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_417.");}
var vSD_2900572F79F04FE796DB64DEBC904895 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let enableExitKeys = true;
 if (objCommand.uUserObjectType == "REVERSE") {
 enableExitKeys = false;
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: enableExitKeys});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 SHARED.notifySaveMessage = "Outbound Settlement " + objListManager.NKey1[0] + " has been reversed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.delete, filterRebuildEvent: SHARED.filterRebuildEvent.deleteListEntry});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT999SCR01",
 vGUID      :  "C92BEA049C4E482CA777C82690B4407F",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Back","F2","F3","F4","Proceed",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "01000100000000000000000000000000000000",
 vFKEVLF : "01000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_2900572F79F04FE796DB64DEBC904895);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_418.");}
var vSD_B49044CD48F74A09A473CDBAA3DD0DE2 = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF1:
 SENDKEY(KeyF1);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT031SCR04C",
 vGUID      :  "C5822E8D34F4462CAE12F06592471A76",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0201030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000000000000000000000000110000000000",
 vFKEVLF : "11000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_B49044CD48F74A09A473CDBAA3DD0DE2);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_419.");}
var vSD_C490D71D993C4701AEEC71A8AF96221A = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF12:
 SENDKEY(KeyF12);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT032SCR01C",
 vGUID      :  "904379EDC0FA43F5BF248C2CE708C64E",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "Cancel","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000000000000000000000000000000000000",
 vFKEVLF : "11000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_C490D71D993C4701AEEC71A8AF96221A);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_420.");}
var vSD_2A390498D98F436BA199FCBE325D682F = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 switch (sButton)
 {
 case KeyF5:
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 break;
 case KeyF7:
 var answer;
 answer = confirm("Are you sure you want to end this settlement ?");
 if(!answer)
 {
 return(bReturn);
 }
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT115SCR03C",
 vGUID      :  "83C1EE8F8E724AA8890BA24356181CB0",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","Direct","F3","Grades","Continue",
 "F6","Exit","Fold/Drop","Srch","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","Left","Rght","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0108030405220702061011121314151617181921200623242526272829303132333435363738",
 vFKERTS : "10000000010000000001100000110000000000",
 vFKEVLF : "10000000000000000001100000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_2A390498D98F436BA199FCBE325D682F);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_421.");}
var vSD_9D3AB01E2DA14D29A4C6C79DCCBCEBB3 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "TRANSFER_SETTLEMENTS") {
 let isHiddenDestination = false;
 let hideScreenMessage = "";
 if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 SETVALUE("utxtSettlement",objListManager.NKey1[0]);
 Q_SENDKEY("=" + CURRENT_FORM(), KeyEnter, SHARED.payload);
 }
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() != oPreviousForm.vName)) {
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false, isHiddenDestination: isHiddenDestination, hideScreenMessage: hideScreenMessage});
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
 case KeyF7:
 SENDKEY(KeyF7);
 break;
 case KeyF9:
 SENDKEY(KeyF9);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN030SCR01",
 vGUID      :  "7BA674740BF94B79AC09BF52616CB01F",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_9D3AB01E2DA14D29A4C6C79DCCBCEBB3);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_422.");}
var vSD_D3BE9226F3D242ADB0FDDCA9B3A107A0 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let allowKeyArray = [];
 let enableExitKeys = true;
 if (objCommand.uUserObjectType == "REVERSE") {
 enableExitKeys = false;
 allowKeyArray =[KeyF3];
 }
 if (objCommand.uUserObjectType == "DETAILS") {
 enableExitKeys = false;
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: enableExitKeys, allowKeyArray: allowKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF3:
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.delete});
 break;
 case KeyF24:
 var strDataGridName = "uDataGrid";
 var Selection = false;
 var intRowCount = TONUMBER(GETVALUE(strDataGridName + ".RowCount"));
 for (intRow = 0; intRow < intRowCount; intRow++)
 {
 var strContract = GETVALUE(strDataGridName + ".Columns(" + 0 + ").Cells(" + intRow + ").Text");
 if((strContract != ""))
 {
 var strSettlement = GETVALUE(strDataGridName + ".Columns(" + 1 + ").Cells(" + intRow + ").Text");
 SETVALUE("uDataGrid.Rows(" + intRow + ").Cells(0).Text","");
 Selection = true;
 }
 }
 if(Selection == true)
 {
 AVSAVEVALUE(parseInt(strSettlement),"IBC","PDF","SETTLE");
 AVSIGNALEVENT("SWITCH","FRAMEWORK","","INBOUND_SETTLEMENTS","PDF","","BusinessObject");
 }
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN030SCR03C",
 vGUID      :  "D92E9C02F8D24A7691906BC20BD65EBA",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Restart","F2","Reverse","F4","F5",
 "Print","F7","Fold/Drop","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "PDF","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102031005060708041011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "00000010100000000000000000110000000000",
 vFKEVLF : "00000010100000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_D3BE9226F3D242ADB0FDDCA9B3A107A0);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_423.");}
var vSD_AF217FF0B57341E898D9C3A6534738C6 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "TRANSFER_SETTLEMENTS") {
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
 case KeyF7:
 SENDKEY(KeyF7);
 break;
 case KeyF9:
 SENDKEY(KeyF9);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN131SCR01",
 vGUID      :  "CBC8A36C185D41EB9319178FFAB75A88",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_AF217FF0B57341E898D9C3A6534738C6);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_424.");}
var vSD_62EA7A81692D44CDA0E774021B924634 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF5:
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN131SCR02C",
 vGUID      :  "404964AF0EAE45E1A8294CCC099504D6",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","Match","F3","Un-Match","Continue",
 "F6","F7","Fold","F9","F10","Match 1 Side",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030407120708091011051314151617181920212223242526272829303132333435363738",
 vFKERTS : "11101100110100000000000000110000000000",
 vFKEVLF : "01101100100100000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_62EA7A81692D44CDA0E774021B924634);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_425.");}
var vSD_2DDA9DFC9A174B8690C6CE6F07B2EF57 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "VAT_RECEIPTS") {
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
 case KeyF7:
 SENDKEY(KeyF7);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM240SCR01",
 vGUID      :  "80EF90B87B0E4FDAA087FDB567145D4F",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_2DDA9DFC9A174B8690C6CE6F07B2EF57);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_426.");}
var vSD_08562D9F2CCC48AFA4F10CE3C27D763D = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF3:
 case KeyF5:
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM240SCR02C",
 vGUID      :  "15065BA7EB204543A1504CAB531AEAE4",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","Delete","F4","Save",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11010100010000000000000000110000000000",
 vFKEVLF : "11010100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_08562D9F2CCC48AFA4F10CE3C27D763D);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_427.");}
var vSD_EAD3D7FB575B4814919E49D49BE06FAE = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "HEDGES") {
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
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn([KeyF7]);
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uHED100SCRLSTC",
 vGUID      :  "C48D0BEAF47F4072A305493BF47D6002",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","F5",
 "F6","Exit Print","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000001000000000000000000000000000000",
 vFKEVLF : "10000001000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_EAD3D7FB575B4814919E49D49BE06FAE);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_106.");}
var vSD_ADEDF4483D5F4A159D6BDA17E8595D1C = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType.indexOf("REPORTS") > -1)  {
 if ((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() == oPreviousForm.vName)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage != "") {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.notifySaveMessage = "";
 }
 }
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
 case KeyF5:
 SHARED.notifySaveMessage =  "Bin Master has been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uRTVLOCASCR01PrintBinMasterList",
 vGUID      :  "945306B10AE545DB95C627FB104C3D2A",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_ADEDF4483D5F4A159D6BDA17E8595D1C);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_428.");}
var vSD_43C728D30A2B4E4A9B3A7D7CB2971130 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let hideScreenMessage = "";
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType + " T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action + " T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM() + " T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage + " T_alertSaveMessage  " + SHARED.alertSaveMessage);
 if (objBusinessObject.uUserObjectType == "ADVANCES") {
 let isHiddentDestination = false;
 if((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 if (objCommand.uUserObjectType == "EDIT") {
 SETVALUE("utxtAdvance",objListManager.NKey1[0]);
 Q_SENDKEY("=" + CURRENT_FORM(), KeyEnter, SHARED.payload);
 isHiddentDestination = true;
 } else if (objCommand.uUserObjectType == "NEW") {
 Q_SENDKEY("=" + CURRENT_FORM(), KeyEnter, SHARED.payload);
 isHiddentDestination = true;
 }
 }
 if((SHARED.payload.action == SHARED.action.save) && (CURRENT_FORM() != oPreviousForm.vName)) {
 if ((objCommand.uUserObjectType == "NEW") || (objCommand.uUserObjectType == "EDIT")) {
 Q_SENDKEY("=" + CURRENT_FORM(), KeyF7, SHARED.payload);
 isHiddentDestination = true;
 hideScreenMessage = SHARED.alertSaveMessage;
 SHARED.ustrSpecialMessage = SHARED.alertSaveMessage;
 SHARED.alertSaveMessage = "";
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false, isHiddentDestination: isHiddentDestination});
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
 default:
 break;
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN225SCR01",
 vGUID      :  "431A64868DD849198720ECA7867282DD",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_43C728D30A2B4E4A9B3A7D7CB2971130);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_473.");}
var vSD_F67136252FCB41DE9F8AC89E4EEA06D0 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let enableExitKeys = true;
 if (objBusinessObject.uUserObjectType == "ADVANCES") enableExitKeys = false;
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: enableExitKeys});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 SHARED.alertSaveMessage = "";
 SHARED.notifySaveMessage = "";
 switch (sButton)
 {
 case KeyF3:
 SHARED.notifySaveMessage = "Advance " + objListManager.NKey1[0] + " has been deleted.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.delete, filterRebuildEvent: SHARED.filterRebuildEvent.deleteListEntry});
 break;
 case KeyF5:
 case KeyF6:
 if (objCommand.uUserObjectType == "NEW") {
 let ustrAdvance = (CHECK_FIELD_EXISTS("utxtAdvance")) ? parseInt( GETVALUE("utxtAdvance"), 10) : 0;
 SHARED.NKey = [ustrAdvance,0,0,0,0];
 SHARED.alertSaveMessage = "Advance " + ustrAdvance + " to customer was created.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.create, filterRebuildEvent: SHARED.filterRebuildEvent.addListEntry});
 }
 else {
 SHARED.alertSaveMessage = SHARED.message.updateAlert;
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.create, filterRebuildEvent: SHARED.filterRebuildEvent.updateListEntry});
 }
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN225SCR02",
 vGUID      :  "D7F7F3D501B9455F8C5603256593C3E6",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","Delete","F4","Save",
 "Print Check","F7","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405070608091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
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
try{VF_SY420_REGISTER_FORM(vSD_F67136252FCB41DE9F8AC89E4EEA06D0);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_474.");}
var vSD_472C781E4DB94F1A827EE9E26AEEF472 = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF1:
 SENDKEY(KeyF1);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN225SCR04",
 vGUID      :  "4CD6BD6E9E2B4D02BEDF709F752146FA",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Back","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000000000000000000000000000000000",
 vFKEVLF : "00000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_472C781E4DB94F1A827EE9E26AEEF472);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_476.");}
var vSD_5AD7B404DFFA43FA8364D234C11AB3EB = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "BIN_MASTER") {
 let isHiddentDestination = false;
 if((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 if (objCommand.uUserObjectType == "DETAILS") {
 SETVALUE("utxtSection",objListManager.AKey1[0]);
 SETVALUE("utxtBinNumber",objListManager.NKey1[0]);
 SETVALUE("utxtBinDesignation",objListManager.AKey2[0]);
 Q_SENDKEY("=" + CURRENT_FORM(), KeyEnter, SHARED.payload);
 isHiddentDestination = true;
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false, isHiddentDestination: isHiddentDestination});
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
 case KeyF7:
 SENDKEY(KeyF7);
 break;
 case KeyF9:
 SENDKEY(KeyF9);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uBIN010SCR01",
 vGUID      :  "19B0761829994D10B91BB9D0125EDA77",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_5AD7B404DFFA43FA8364D234C11AB3EB);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_477.");}
var vSD_679BE2FE28244E54AF0E71470EE7A94D = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let enableExitKeys = true;
 if (objBusinessObject.uUserObjectType == "BIN_MASTER") enableExitKeys = false;
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: enableExitKeys});
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF2:
 SENDKEY(KeyF2);
 break;
 case KeyF4:
 SENDKEY(KeyF4);
 break;
 case KeyF9:
 SENDKEY(KeyF9);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uBIN010SCR02C",
 vGUID      :  "C3E4EFBA3E7F4B9AB058031A295E712F",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","Next Bin","F3","Prev Bin","F5",
 "F6","F7","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102050403060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10101000010000000000000000000000000000",
 vFKEVLF : "10101000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_679BE2FE28244E54AF0E71470EE7A94D);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_478.");}
var vSD_F910A07B010F4360870D689A56A75B63 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "BIN_MASTER") {
 let isHiddentDestination = false;
 if((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 if (objCommand.uUserObjectType == "MASTER_BIN") {
 SETVALUE("utxtSection",objListManager.AKey1[0]);
 Q_SENDKEY("=" + CURRENT_FORM(), KeyEnter, SHARED.payload);
 isHiddentDestination = true;
 }
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false, isHiddentDestination: isHiddentDestination});
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
 case KeyF7:
 SENDKEY(KeyF7);
 break;
 case KeyF9:
 SENDKEY(KeyF9);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uBIN100SCR01",
 vGUID      :  "FFBBEDB1CCDC4FD08540AAFC96F9E4C6",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_F910A07B010F4360870D689A56A75B63);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_479.");}
var vSD_F778D722ADA04B9EBE89C7D47035D714 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let enableExitKeys = true;
 if (objBusinessObject.uUserObjectType == "BIN_MASTER") enableExitKeys = false;
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: enableExitKeys});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 if (objCommand.uUserObjectType == "NEW") {
 let utxtSection = GETVALUE("utxtSection");
 SHARED.AKey = [utxtSection,"","","",""];
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.create, filterRebuildEvent: "Refresh_Instance_List_New"});
 }
 else {
 SHARED.alertSaveMessage = SHARED.message.updateAlert;
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change, filterRebuildEvent: SHARED.filterRebuildEvent.refreshInstanceList});
 }
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uBIN100SCR02C",
 vGUID      :  "AD3AC9AC25774E4BB601D150BCB838BD",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","F4","Save",
 "F6","F7","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000110000000000",
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
try{VF_SY420_REGISTER_FORM(vSD_F778D722ADA04B9EBE89C7D47035D714);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_480.");}
var vSD_F9894E023BA5495FB07A5410AE4265C6 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "BIN_MEASUREMENTS") {
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
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uBIN110SCR01",
 vGUID      :  "309D8613CE5446C78330337CB3CD847A",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_F9894E023BA5495FB07A5410AE4265C6);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_481.");}
var vSD_F7F434FC713740BE99AD8AE482A40EC0 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF5:
 SHARED.alertSaveMessage = SHARED.message.updateAlert;
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uBIN110SCR02C",
 vGUID      :  "ACAF88821FD34703B9F3939716FDF81A",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","F4","Save",
 "F6","F7","F8","Search","Bin Info","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100011000000000000000000000000000",
 vFKEVLF : "10000100001000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_F7F434FC713740BE99AD8AE482A40EC0);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_482.");}
var vSD_7FB33F3781E9402CAA4AF67D2424DCE8 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "BIN_SETUP") {
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
 case KeyF7:
 SENDKEY(KeyF7);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uBIN200SCR01",
 vGUID      :  "BA9A63E53D3E49C689F5CCF1BEA6669F",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_7FB33F3781E9402CAA4AF67D2424DCE8);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_483.");}
var vSD_F21ADFBD927F4C0095AA1E392FE5A046 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, enablePrintKeys: true});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 SHARED.alertSaveMessage = SHARED.message.updateAlert;
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uBIN200SCR02C",
 vGUID      :  "46F0CC15F83A47B5AAD37C9511B8A264",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","F4","Save",
 "F6","F7","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000100010000000000000000110000000000",
 vFKEVLF : "11000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_F21ADFBD927F4C0095AA1E392FE5A046);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_484.");}
var vSD_B69A16D8BB7E4410AF2F35CF8CF5858F = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 switch (SHARED.payload.action) {
 case SHARED.action.print:
 HIDE_CURRENT_FORM();
 SETVALUE(SHARED.printControl.printPromptField,"Y");
 Q_NAVIGATE_TO_SCREEN("!=" + SHARED.printControl.returnToScreen, SHARED.printControl.returnToScreen);
 SENDKEY(KeyEnter, SHARED.UF_setPayload({action: SHARED.action.print}));
 if (SHARED.printControl.isAlsoUpdate) {
 SHARED.UF_UpdatePrintAlert()
 } else {
 SHARED.UF_PrintAlert();
 }
 break;
 default:
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
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
 case KeyEnter:
 SENDKEY(KeyEnter);
 break;
 case KeyF7:
 SENDKEY(KeyF7);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uPRTEDTSCR01",
 vGUID      :  "81949841AF754A229AB494A090152C49",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
try{VF_SY420_REGISTER_FORM(vSD_B69A16D8BB7E4410AF2F35CF8CF5858F);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_485.");}
var vSD_BE39ECF45AEB435F8C7F7A89BBF80D57 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "BIN_SETUP") {
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
 case KeyF5:
 SHARED.alertSaveMessage = SHARED.message.updateAlert;
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uBIN210SCR01C",
 vGUID      :  "9B7A075D3E1D4742849A2081BA836224",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Save",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100000000000000000000110000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_BE39ECF45AEB435F8C7F7A89BBF80D57);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_486.");}
var vSD_9A4B0E3234704617812D735BFFB8D4FA = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "BIN_SETUP") {
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
 case KeyF5:
 SHARED.alertSaveMessage = SHARED.message.updateAlert;
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uBIN220SCR01C",
 vGUID      :  "F879AD1B6E85413197D693639E4362A2",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Save",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100000000000000000000110000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_9A4B0E3234704617812D735BFFB8D4FA);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_487.");}
var vSD_76B2A4CA461940D88F0ADCC4A83A3FA7 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "INBOUND_SETTLEMENTS") {
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
 case KeyF4:
 SENDKEY(KeyF4);
 break;
 case KeyF7:
 SENDKEY(KeyF7);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN107SCR01C",
 vGUID      :  "7DAC1A088AF648B49E2243265A790F73",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","Select","F5",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10001000000000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_76B2A4CA461940D88F0ADCC4A83A3FA7);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_532.");}
var vSD_9AF9E20C216D46CCB4688253FB7F5132 = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF4:
 SENDKEY(KeyF4);
 break;
 case KeyF5:
 SENDKEY(KeyF5);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN107SCR02C",
 vGUID      :  "E956213B8E174390AEC6175DB1FAF481",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","Select","Continue",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11001100010000000000000000110000000000",
 vFKEVLF : "11001100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_9AF9E20C216D46CCB4688253FB7F5132);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_533.");}
var vSD_8D8D81C5C3B54F92A13E36B433AE3964 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType + " T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action + " T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM() + " T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage + " T_alertSaveMessage  " + SHARED.alertSaveMessage);
 let hideKeyArray = [];
 if (objBusinessObject.uUserObjectType == "CUSTOMER_POSITION") {
 if ((oPreviousForm.vName != "uGRN020ASCRSETC") && (oPreviousForm.vName != "uGRN006SCRSEC"))   {
 hideKeyArray = [KeyEnter];
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload,
 enableExitKeys: true,
 hideKeyArray: hideKeyArray,
 showPopupButtons: true});
 if (GLOBAL_LastNavigationTarget != "") {
 SHARED.returnDestinationForm = GLOBAL_LastNavigationTarget;
 }
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, showPopupButtons: true});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 CLEAR_MESSAGES();
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
 case KeyF6:
 SENDKEY(KeyF6);
 break;
 case KeyF11:
 SENDKEY(KeyF11);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN006SCRDPD",
 vGUID      :  "4495B9AE63F941358A67AD4B30E9CDA5",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Back","F1","F2","F3","F4","F5",
 "Print","F7","F8","F9","F10","Settlements",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405061208091011071314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000010000100000000000000110000000000",
 vFKEVLF : "10000010000100000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_8D8D81C5C3B54F92A13E36B433AE3964);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_535.");}
var vSD_FE80B03767024E35A79FA61F1E9ADE64 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 SETKEYENABLED("uGRN005SCR03C",KeyF19, false,true);
 SETKEYENABLED("uGRN005SCR03C",KeyF20, false,true);
 SETKEYENABLED("uGRN005SCR03C",KeyEnter, false,true);
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
 case KeyEnter:
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN005SCR03C",
 vGUID      :  "00F5EA254D6C4D6C9D0EC6ECE6A0784F",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Back","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","Left","Right","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000000000000000000000110000000000",
 vFKEVLF : "00000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_FE80B03767024E35A79FA61F1E9ADE64);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_541.");}
var vSD_2A3E3612828E410497273440F53D2E41 = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF4:
 SENDKEY(KeyF4);
 break;
 case KeyF5:
 SENDKEY(KeyF5);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN120SCR04C",
 vGUID      :  "01B02195016A4416A89404F94CDB71DA",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Back","F2","F3","Select","Continue",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11001100000000000000000000110000000000",
 vFKEVLF : "01001100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_2A3E3612828E410497273440F53D2E41);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_542.");}
var vSD_CBB71A73F8B4409383D75434E5F7003C = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "LONG/SHORT_INQUIRY") {
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
 case KeyF7:
 SENDKEY(KeyF7);
 break;
 case KeyF19:
 SENDKEY(KeyF19);
 break;
 case KeyF20:
 SENDKEY(KeyF20);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN095SCRMRK",
 vGUID      :  "178B8DD589AC422D9544FEEC67E300F3",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","F1","F2","F3","F4","F5",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","Left","Right","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181921202223242526272829303132333435363738",
 vFKERTS : "10000000000000000001100000110000000000",
 vFKEVLF : "00000000000000000001100000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_CBB71A73F8B4409383D75434E5F7003C);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_549.");}
var vSD_12EB105DBA3141D8BCE48A06EB7209EC = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType + " T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action + " T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM() + " T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage + " T_alertSaveMessage  " + SHARED.alertSaveMessage);
 if (objBusinessObject.uUserObjectType == "CONTRACTS") {
 let ustrMessage = SHARED.UF_get5250Message();
 if ((objCommand.uUserObjectType == "NEW") && (SHARED.payload.action == "SAVE")) {
 if (ustrMessage.length > 0) {
 TRACE("T_ustrMessage_150scr01_CreateContracts " + ustrMessage);
 var ustrFirstSpace = ustrMessage.indexOf(" ");
 var ustrSecondSpace = ustrMessage.indexOf(" ",(ustrFirstSpace + 1));
 var ustrThirdSpace = ustrMessage.indexOf(" ",(ustrSecondSpace + 1));
 var ustrPosition = ustrMessage.substring(ustrFirstSpace,ustrSecondSpace);
 var ustrControl = ustrMessage.substring(ustrSecondSpace,ustrThirdSpace);
 ustrPosition = ustrPosition.toString();
 ustrControl = parseInt(ustrControl);
 ustrPosition = ustrPosition.replace(" ","");
 SHARED.NKey[0] = ustrControl;
 }
 }
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
 case KeyF7:
 SENDKEY(KeyF7);
 break;
 case KeyF9:
 SENDKEY(KeyF9);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM150SCR01CreateContracts",
 vGUID      :  "ED7CA258D2CB45CAA503C1E78E573FC6",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","F5",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_12EB105DBA3141D8BCE48A06EB7209EC);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_556.");}
var vSD_7A9D9D19317F49A781FECA17F674E689 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let allowKeyArray = [];
 let uMessage = SHARED.UF_get5250Message();
 if(uMessage.search(/F11 to accept/) != -1) {
 allowKeyArray.push(KeyF11);
 }
 if(uMessage.search(/F4 to accept/) != -1) {
 allowKeyArray.push(KeyF4);
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, allowKeyArray: allowKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 let utxtType = (CHECK_FIELD_EXISTS("utxtType")) ? GETVALUE("utxtType") : "";
 let utxtContract = (CHECK_FIELD_EXISTS("utxtContract")) ? parseInt( GETVALUE("utxtContract"), 10) : 0;
 switch (sButton)
 {
 case KeyF4:
 case KeyF5:
 case KeyF11:
 if (objCommand.uUserObjectType == "NEW") {
 SHARED.AKey = [utxtType,"","","",""];
 SHARED.NKey = [utxtContract,0,0,0,0];
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.create, filterRebuildEvent: SHARED.filterRebuildEvent.addListEntry});
 }
 break;
 case KeyF6:
 var ustrCustomer = (CHECK_FIELD_EXISTS("utxtAccount")) ? GETVALUE("utxtAccount") : "";
 ustrCustomer = parseInt(ustrCustomer);
 if (isNaN(ustrCustomer))
 {
 MESSAGE("Invalid customer account number.")
 }
 else
 {
 AVSIGNALEVENT("DISPLAY_SIGS","FRAMEWORK",utxtType,"","","","",utxtContract,"",ustrCustomer);
 }
 return(bReturn);
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM150SCR02CCreateContracts",
 vGUID      :  "B2B7AE297B8D404CAFD327F39FAD1AEF",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","Price","F3","Accept","Save",
 "Authorize Sigs","F7","Comments","Search","F10","Accept",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030411090708061005121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000000010000000000000000110000000000",
 vFKEVLF : "11000010000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_7A9D9D19317F49A781FECA17F674E689);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_557.");}
var vSD_1F4C856730F44982B6304DA60B11EC09 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let isHiddentDestination = false;
 if((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 var ustrMessage = GETVALUE("utxtMessage");
 if(ustrMessage == "There are no settlement payables") {
 isHiddentDestination = true;
 SHARED.notifySaveMessage =  "There are no settlement payables";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 Q_SENDKEY("=" + CURRENT_FORM(), KeyEnter, SHARED.payload);
 }
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, isHiddentDestination: isHiddentDestination});
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN107SCRNONE",
 vGUID      :  "5E4BB3F8A5134D36AE65DC47D507FBAB",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
try{VF_SY420_REGISTER_FORM(vSD_1F4C856730F44982B6304DA60B11EC09);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_562.");}
var vSD_2BF2BEDEC9B441EEA1CFB72849624CDF = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF5:
 SENDKEY(KeyF5);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM162SCR02C",
 vGUID      :  "6CDDF2FF7F914FC4A0B138361A78B3A7",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","F4","Continue",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000110000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_2BF2BEDEC9B441EEA1CFB72849624CDF);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_563.");}
var vSD_F9EA37DF7E294356B7E8E12719B14B93 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let allowKeyArray = [];
 if ((SHARED.payload.action != SHARED.action.navigate)) {
 let uMessage = SHARED.UF_get5250Message();
 if (uMessage.search(/F8 to accept/) != -1) {
 allowKeyArray = [KeyF8];
 }
 }
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, allowKeyArray: allowKeyArray});
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM162SCRCONC",
 vGUID      :  "713B1E2138B04035B7711F7E1CBC84CC",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Back","F2","F3","Select","Continue",
 "F6","F7","Accept","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "00000000000000000000000000110000000000",
 vFKEVLF : "00000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_F9EA37DF7E294356B7E8E12719B14B93);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_564.");}
var vSD_C2E385F2A5A6423DB02E0C5CF30142E6 = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF5:
 SENDKEY(KeyF5);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM161SCR02C",
 vGUID      :  "8C4CFB7A2186460FA1D3FABB3EE35ADA",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Back","F2","F3","F4","Continue",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000100000000000000000000110000000000",
 vFKEVLF : "01000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_C2E385F2A5A6423DB02E0C5CF30142E6);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_565.");}
var vSD_E881CEE32B0A435DB446E7F07AF5F67B = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF5:
 SENDKEY(KeyF5);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM161SCR04C",
 vGUID      :  "1AD7E48849A84468B722A3E9D4C69339",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Back","F2","F3","F4","Continue",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "01000100000000000000000000110000000000",
 vFKEVLF : "01000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_E881CEE32B0A435DB446E7F07AF5F67B);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_566.");}
var vSD_71C32B4F5413482089293F8355F1AED6 = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF6:
 SENDKEY(KeyF6);
 break;
 case KeyF7:
 SENDKEY(KeyF7);
 break;
 case KeyF8:
 SENDKEY(KeyF8);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uFRT020SCR02C",
 vGUID      :  "4EE62B75A249432A82AA7B8B10387A06",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","F2","F3","F4","F5",
 "Print","Exit","Fold/Drop","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0401060705090308021011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000100000000000000000000000000000",
 vFKEVLF : "10000000100000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_71C32B4F5413482089293F8355F1AED6);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_568.");}
var vSD_8AFC00EC86C84E96A09D4AE68927DDD6 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyEnter:
 break;
 case KeyF1:
 break;
 case KeyF4:
 break;
 case KeyF6:
 break;
 case KeyF7:
 break;
 case KeyF24:
 var Selection = false;
 let utxtSelect2, utxtSettlement2;
 for ( Index = 1; CHECK_FIELD_EXISTS("utxtSelect", Index);  Index++ ) {
 utxtSelect2 = GETVALUE("utxtSelect", Index);
 if (utxtSelect2.trim() != "") {
 utxtSettlement2 = (CHECK_FIELD_EXISTS("utxtSettlement", Index)) ? GETVALUE("utxtSettlement", Index) : "";
 if (utxtSettlement2.trim() != "") {
 SETVALUE("utxtSelect","",Index);
 AVSAVEVALUE(parseInt(utxtSettlement2, 10),"IBC","PDF","SETTLE");
 let w_set = parseInt(utxtSettlement2, 10);
 AVSIGNALEVENT("DISPLAYSETPDF","FRAMEWORK","","","","","",w_set);
 break;
 }
 }
 }
 return(bReturn);
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN020SCR03C",
 vGUID      :  "595FE7FBC2A3476AAE9B05036E8025FF",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","F2","F3","Select","F5",
 "Print","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "PDF","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0402131401060508091011121314151617181920212223240326272829303132333435363738",
 vFKERTS : "10001010000000000000000000000000000000",
 vFKEVLF : "10001010000000000000000010000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_8AFC00EC86C84E96A09D4AE68927DDD6);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_569.");}
var vSD_C97DE636AB3D49CF90759B826D4BB22A = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF5:
 SENDKEY(KeyF5);
 break;
 case KeyF7:
 SENDKEY(KeyF7);
 break;
 case KeyF9:
 SENDKEY(KeyF9);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uRTVLOCASCR01ImportOBShipment",
 vGUID      :  "34B00035CB0A48B1B5AE4BECD89CB4A3",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","F4","Continue",
 "F6","Back","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0106030405020708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
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
try{VF_SY420_REGISTER_FORM(vSD_C97DE636AB3D49CF90759B826D4BB22A);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_573.");}
var vSD_F957AB04D8F74D6CA58EA2B5BBE51B45 = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF4:
 SENDKEY(KeyF4);
 break;
 case KeyF5:
 SENDKEY(KeyF5);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM155SCRFPTOC",
 vGUID      :  "31244B4FE4654FC38CCA378F99EB6C63",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","Back","F2","F3","Select","Continue",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11001100000000000000000000110000000000",
 vFKEVLF : "11001100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_F957AB04D8F74D6CA58EA2B5BBE51B45);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_578.");}
var vSD_C5AACD5826704BA9A668330D03A2AE1C = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let hideKeyArray = [KeyF7];
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: true});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false, hideKeyArray: hideKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 SETKEYENABLED("uINV825SCR01",KeyF7,false,false);
 SHOW_CURRENT_FORM(true);
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 SHARED.notifySaveMessage = "Inventory Value by Group has been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uINV825SCR01",
 vGUID      :  "8C7122DC4DA84436A42272A05CC8C4FD",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_C5AACD5826704BA9A668330D03A2AE1C);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_587.");}
var vSD_5B92DB867B73437AAEC6A809EA59C8D5 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_GRAIN");
 let allowKeyArray = [KeyF7];
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: true});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false, allowKeyArray: allowKeyArray});
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
 case KeyF7:
 SENDKEY(KeyF7);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uDATSESSCR01ApplyFinanceCharges",
 vGUID      :  "C6F89F0FF2D44FC98AB9260EB17BDF4A",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Back","F1","F2","F3","F4","Continue",
 "F6","Back","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "00000001000000000000000000000000000000",
 vFKEVLF : "00000001000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_5B92DB867B73437AAEC6A809EA59C8D5);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_608.");}
var vSD_B3C3AE2733434F62BD77536E5F5D9E3E = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: true});
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
 case KeyF5:
 SHARED.notifySaveMessage = "This record has been updated.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uFRM020SCR03C",
 vGUID      :  "6D4AFCD785F6475081A5F42BB0E55093",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","F2","F3","F4","F5",
 "Print","Exit","Fold/Drop","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0901030405060708021011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000000100000000000000000000000000000",
 vFKEVLF : "11000000100000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_B3C3AE2733434F62BD77536E5F5D9E3E);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_619.");}
var vSD_967F37A52700449CA34744977C5C21B1 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 hideKeyArray = [KeyF7];
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, hideKeyArray: hideKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 SHARED.notifySaveMessage = SHARED.saveBetweenScreens.caption;
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 case KeyF7:
 Q_NAVIGATE_TO_SCREEN("=uMSTMEN",SHARED.returnDestinationForm);
 SHARED.UF_setPayload({action: SHARED.action.navigate});
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM550SCRPRI",
 vGUID      :  "B0D01AB5740747BCAC668F6082D30362",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_967F37A52700449CA34744977C5C21B1);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_655.");}
var vSD_ECA75E7F345D46FA939D174405A05A35 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 hideKeyArray = [KeyF7];
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, hideKeyArray: hideKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 SHARED.notifySaveMessage = SHARED.saveBetweenScreens.caption;
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 case KeyF7:
 Q_NAVIGATE_TO_SCREEN("=uMSTMEN",SHARED.returnDestinationForm);
 SHARED.UF_setPayload({action: SHARED.action.navigate});
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM550SCRBAS",
 vGUID      :  "9451191C5ABE4DA7B0F98DBDD3155B0C",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_ECA75E7F345D46FA939D174405A05A35);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_656.");}
var vSD_0DE8450B4AFD446384BF8279BE7F042A = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 hideKeyArray = [KeyF7];
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, hideKeyArray: hideKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 SHARED.notifySaveMessage = SHARED.saveBetweenScreens.caption;
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 case KeyF7:
 Q_NAVIGATE_TO_SCREEN("=uMSTMEN",SHARED.returnDestinationForm);
 SHARED.UF_setPayload({action: SHARED.action.navigate});
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM550SCRDP",
 vGUID      :  "FEEEF52BB6C44B218FB23F18C2229E6A",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_0DE8450B4AFD446384BF8279BE7F042A);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_657.");}
var vSD_5BC2FF5EA8964B438F60321A7E0B61DA = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 hideKeyArray = [KeyF7];
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, hideKeyArray: hideKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 SHARED.notifySaveMessage = SHARED.saveBetweenScreens.caption;
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 case KeyF7:
 Q_NAVIGATE_TO_SCREEN("=uMSTMEN",SHARED.returnDestinationForm);
 SHARED.UF_setPayload({action: SHARED.action.navigate});
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM550SCRNBE",
 vGUID      :  "7D49D42DF8D54E2FA6DE801EC63BE982",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_5BC2FF5EA8964B438F60321A7E0B61DA);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_658.");}
var vSD_0F2D12DDC6F641B3BC04B96B90B51047 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 hideKeyArray = [KeyF7];
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, hideKeyArray: hideKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 SHARED.notifySaveMessage = SHARED.saveBetweenScreens.caption;
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 case KeyF7:
 Q_NAVIGATE_TO_SCREEN("=uMSTMEN",SHARED.returnDestinationForm);
 SHARED.UF_setPayload({action: SHARED.action.navigate});
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM550SCREXT",
 vGUID      :  "298A2B7CB9EB405C93595BC6A588F3E1",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_0F2D12DDC6F641B3BC04B96B90B51047);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_659.");}
var vSD_60081FCD40604A498CF4EC7E9C209E7C = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 hideKeyArray = [KeyF7];
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, hideKeyArray: hideKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 SHARED.notifySaveMessage = SHARED.saveBetweenScreens.caption;
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 case KeyF7:
 Q_NAVIGATE_TO_SCREEN("=uMSTMEN",SHARED.returnDestinationForm);
 SHARED.UF_setPayload({action: SHARED.action.navigate});
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM550SCRMIN",
 vGUID      :  "392E216E8FFF4FE28D10D5A444AE15D9",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_60081FCD40604A498CF4EC7E9C209E7C);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_660.");}
var vSD_E2B391E788DE446C9844209C08DC35CB = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 hideKeyArray = [KeyF7];
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, hideKeyArray: hideKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 SHARED.notifySaveMessage = SHARED.saveBetweenScreens.caption;
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 case KeyF7:
 Q_NAVIGATE_TO_SCREEN("=uMSTMEN",SHARED.returnDestinationForm);
 SHARED.UF_setPayload({action: SHARED.action.navigate});
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM550SCRCOFR",
 vGUID      :  "5863492420CF46F6BBFE9588444D94B0",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_E2B391E788DE446C9844209C08DC35CB);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_661.");}
var vSD_9A55BF7F162B4ADB995C55634F6C62E9 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 hideKeyArray = [KeyF7];
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, hideKeyArray: hideKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 SHARED.notifySaveMessage = SHARED.saveBetweenScreens.caption;
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 case KeyF7:
 Q_NAVIGATE_TO_SCREEN("=uMSTMEN",SHARED.returnDestinationForm);
 SHARED.UF_setPayload({action: SHARED.action.navigate});
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM550SCRFOFR",
 vGUID      :  "64FB1C573D2B467A91B8E631C80BFB72",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_9A55BF7F162B4ADB995C55634F6C62E9);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_662.");}
var vSD_3C464182EEA94A48969C4E9865AC2228 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 hideKeyArray = [KeyF7];
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, hideKeyArray: hideKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 SHARED.notifySaveMessage = SHARED.saveBetweenScreens.caption;
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 case KeyF7:
 Q_NAVIGATE_TO_SCREEN("=uMSTMEN",SHARED.returnDestinationForm);
 SHARED.UF_setPayload({action: SHARED.action.navigate});
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM550SCRSTG",
 vGUID      :  "AB4943E0C5FE45478AF9738A05E5149A",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_3C464182EEA94A48969C4E9865AC2228);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_663.");}
var vSD_A462CB8DC8BB4461A43E85B01A54EFD4 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 hideKeyArray = [KeyF7];
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, hideKeyArray: hideKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 SHARED.notifySaveMessage = SHARED.saveBetweenScreens.caption;
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 case KeyF7:
 Q_NAVIGATE_TO_SCREEN("=uMSTMEN",SHARED.returnDestinationForm);
 SHARED.UF_setPayload({action: SHARED.action.navigate});
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM550SCRACP",
 vGUID      :  "6919D666E24F4FA5B319879B91ED4536",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_A462CB8DC8BB4461A43E85B01A54EFD4);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_664.");}
var vSD_56C053DF293049BFAD830F51D4EBFCD2 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 hideKeyArray = [KeyF7];
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, hideKeyArray: hideKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 SHARED.notifySaveMessage = SHARED.saveBetweenScreens.caption;
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 case KeyF7:
 Q_NAVIGATE_TO_SCREEN("=uMSTMEN",SHARED.returnDestinationForm);
 SHARED.UF_setPayload({action: SHARED.action.navigate});
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM550SCRABP",
 vGUID      :  "2646D6EBAC9C4C8E82C795E5AAB1F58C",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_56C053DF293049BFAD830F51D4EBFCD2);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_665.");}
var vSD_9D008CEF61FE4C85B42B785841F32775 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 hideKeyArray = [KeyF7];
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, hideKeyArray: hideKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 SHARED.notifySaveMessage = SHARED.saveBetweenScreens.caption;
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 case KeyF7:
 Q_NAVIGATE_TO_SCREEN("=uMSTMEN",SHARED.returnDestinationForm);
 SHARED.UF_setPayload({action: SHARED.action.navigate});
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM550SCRAFP",
 vGUID      :  "0BCFE578302A446AB961748B936560B4",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_9D008CEF61FE4C85B42B785841F32775);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_666.");}
var vSD_84CE943AE2854233B2EDE2D3F217BDA0 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let hideKeyArray = [];
 SETCURSORTOFIELD("utxtUnits");
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: true});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false, hideKeyArray: hideKeyArray});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 SETCURSORTOFIELD("utxtUnits");
 switch (sButton)
 {
 case KeyEnter:
 SENDKEY(KeyEnter);
 break;
 case KeyF5:
 SENDKEY(KeyEnter);
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
 SENDKEY(KeySysReq, SHARED.UF_setPayload({action: SHARED.action.navigate}));
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN555SCRGEN",
 vGUID      :  "78EA3773BCB344AB8F84B1303BEBB750",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100000000000000000000000010000000",
 vFKEVLF : "00000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_84CE943AE2854233B2EDE2D3F217BDA0);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_672.");}
var vSD_D24A685549FC4AAEB078272AFC2CE11C = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: true});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
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
 case KeyF5:
 SENDKEY(KeyF5);
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
 SETVALUE("utxtReceipt","1");
 SHARED.UF_commonReturn([KeyF5]);
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN555SCRMAN",
 vGUID      :  "BF1F50595FE844C791FEF92BF4CA1F9B",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100000000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_D24A685549FC4AAEB078272AFC2CE11C);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_673.");}
var vSD_DD57FEE3DD7747ABBF74647B7DF42EBB = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: true});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 SENDKEY(KeyEnter);
 AVCLOSEFORM();
 break;
 default:
 SENDKEY(KeyEnter);
 AVCLOSEFORM();
 break;
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uAPY010SCR03",
 vGUID      :  "510DFC2C45F948278C59BE8E804F08C9",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000000000000000000000000000000000",
 vFKEVLF : "00000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_DD57FEE3DD7747ABBF74647B7DF42EBB);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_679.");}
var vSD_55DC4EA1CED44099B4D277A589D620D3 = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF4:
 SENDKEY(KeyF4);
 break;
 case KeyF5:
 SENDKEY(KeyF5);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uOUT115SCRLODC",
 vGUID      :  "E8316C4A85ED44B597AF67F85D7D1846",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","Back","F2","F3","Select","Continue",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11001100000000000000000000000000000000",
 vFKEVLF : "01001100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_55DC4EA1CED44099B4D277A589D620D3);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_686.");}
var vSD_DFE7C71A056F4E1C97CDD3C004EF3FBC = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let hideKeyArray = [];
 if (objBusinessObject.uUserObjectType == "CUSTOMER_POSITION") {
 hideKeyArray = [KeyEnter];
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload,
 enableExitKeys: false,
 hideKeyArray: hideKeyArray,
 showPopupButtons: true});
 if (GLOBAL_LastNavigationTarget != "") {
 SHARED.returnDestinationForm = GLOBAL_LastNavigationTarget;
 }
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true, showPopupButtons: true});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 SETCURSORTOFIELD("utxtControl");
 break;
 case KeyF24:
 let ustxtControl = (CHECK_FIELD_EXISTS("utxtControl")) ? parseInt(GETVALUE("utxtControl")): 0;
 AVSAVEVALUE(ustxtControl,"CPOS","CONTROL");
 AVSAVEVALUE(objGlobal.cposType,"CPOS","TYPE");
 AVSAVEVALUE(objGlobal.cposAccount,"CPOS","ACCOUNT");
 AVSWITCH("BUSINESSOBJECT",objBusinessObject.uUserObjectType,"WHAT_IF");
 break;
 default:
 break;
 }
 if(sButton != KeyF24) {SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);}
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn([KeyEnter]);
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN006SCRWHDWarehouseReceipt",
 vGUID      :  "705DC2E2DB5A425B93E3E34EFB236126",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","F2","F3","Discounts","F5",
 "F6","F7","F8","F9","Tickets","Settlements",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "What If","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000000000000000000000000000000000",
 vFKEVLF : "10000000000000000000000010000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_DFE7C71A056F4E1C97CDD3C004EF3FBC);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_689.");}
var vSD_8754C99DC6B244E9A9DFAC59DA5D9688 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let hideKeyArray = [];
 if (objBusinessObject.uUserObjectType == "CUSTOMER_POSITION") {
 hideKeyArray = [KeyEnter];
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload,
 enableExitKeys: false,
 hideKeyArray: hideKeyArray,
 showPopupButtons: true});
 if (GLOBAL_LastNavigationTarget != "") {
 SHARED.returnDestinationForm = GLOBAL_LastNavigationTarget;
 }
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false, showPopupButtons: true});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 SETCURSORTOFIELD("utxtControl");
 break;
 case KeyF24:
 let ustxtControl = (CHECK_FIELD_EXISTS("utxtControl")) ? parseInt(GETVALUE("utxtControl")): 0;
 AVSAVEVALUE(ustxtControl,"CPOS","CONTROL");
 AVSAVEVALUE(objGlobal.cposType,"CPOS","TYPE");
 AVSAVEVALUE(objGlobal.cposAccount,"CPOS","ACCOUNT");
 AVSWITCH("BUSINESSOBJECT",objBusinessObject.uUserObjectType,"WHAT_IF");
 break;
 default:
 break;
 }
 if(sButton != KeyF24) {SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);}
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn([KeyEnter]);
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN006SCRWHDDelayPrice",
 vGUID      :  "4628D58CBCEC4B99A2F43278C9E5D303",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Back","F1","F2","F3","Discounts","Advances",
 "F6","F7","F8","F9","Tickets","Settlements",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "What If","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030402040708091006051314151617181920212223240326272829303132333435363738",
 vFKERTS : "10001000000000000000000000000000000000",
 vFKEVLF : "10000000000000000000000010000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_8754C99DC6B244E9A9DFAC59DA5D9688);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_690.");}
var vSD_371EA7F4692E430B9835F48CF3282D1D = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false, showPopupButtons: true});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 SETCURSORTOFIELD("utxtControl");
 break;
 case KeyF24:
 let ustxtControl = (CHECK_FIELD_EXISTS("utxtControl")) ? parseInt(GETVALUE("utxtControl")): 0;
 AVSAVEVALUE(ustxtControl,"CPOS","CONTROL");
 AVSAVEVALUE(objGlobal.cposType,"CPOS","TYPE");
 AVSAVEVALUE(objGlobal.cposAccount,"CPOS","ACCOUNT");
 AVSWITCH("BUSINESSOBJECT",objBusinessObject.uUserObjectType,"WHAT_IF");
 break;
 default:
 break;
 }
 if(sButton != KeyF24) {SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);}
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn([KeyEnter]);
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN006SCRWHDBasisPriced",
 vGUID      :  "336D314A77054CB79488AA45C1347430",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Back","Back","F2","F3","Discounts","Advances",
 "F6","F7","F8","F9","Tickets","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "What If","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102230402060708091011121314151617181920212223240326272829303132333435363738",
 vFKERTS : "10000000000000000000000000000000000000",
 vFKEVLF : "10000000000000000000000010000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_371EA7F4692E430B9835F48CF3282D1D);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_691.");}
var vSD_531A5EF6DBD24F14BA8871B3E951F526 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 let allowKeyArray= [KeyF8];
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload,
 enableExitKeys: false,
 allowKeyArray: allowKeyArray,
 showPopupButtons: true});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 SETCURSORTOFIELD("utxtControl");
 break;
 case KeyF24:
 let ustxtControl = (CHECK_FIELD_EXISTS("utxtControl")) ? parseInt(GETVALUE("utxtControl")): 0;
 AVSAVEVALUE(ustxtControl,"CPOS","CONTROL");
 AVSAVEVALUE(objGlobal.cposType,"CPOS","TYPE");
 AVSAVEVALUE(objGlobal.cposAccount,"CPOS","ACCOUNT");
 AVSWITCH("BUSINESSOBJECT",objBusinessObject.uUserObjectType,"WHAT_IF");
 break;
 default:
 break;
 }
 if(sButton != KeyF24) {SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);}
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn([KeyEnter]);
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN006SCRWHDCashPriced",
 vGUID      :  "FB21B45D19934510ADB22B95CB4A7B14",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Back","F1","F2","F3","Discounts","F5",
 "F6","F7","Splits","F9","Tickets","Settlements",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "What If","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030402060708040611051314151617181920212223240326272829303132333435363738",
 vFKERTS : "10000000000000000000000000000000000000",
 vFKEVLF : "10000000000000000000000010000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_531A5EF6DBD24F14BA8871B3E951F526);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_694.");}
var vSD_1CD9AE7D74014A43AB546D9B83FAEA27 = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uWhatIfURL",
 vGUID      :  "BC4768F8CF354377B6B0B75491FD5A31",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
try{VF_SY420_REGISTER_FORM(vSD_1CD9AE7D74014A43AB546D9B83FAEA27);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_695.");}
var vSD_70D8B9D2432A449F9133D70A376011B4 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 let hideKeyArray = [];
 if (objBusinessObject.uUserObjectType == "CUSTOMER_POSITION") {
 hideKeyArray = [KeyEnter];
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload,
 enableExitKeys: false,
 hideKeyArray: hideKeyArray,
 showPopupButtons: true});
 if (GLOBAL_LastNavigationTarget != "") {
 SHARED.returnDestinationForm = GLOBAL_LastNavigationTarget;
 }
 } else {
 let allowKeyArray= [KeyF8];
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload,
 enableExitKeys: false,
 allowKeyArray: allowKeyArray,
 showPopupButtons: true});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 SETCURSORTOFIELD("utxtControl");
 break;
 case KeyF24:
 let ustxtControl = (CHECK_FIELD_EXISTS("utxtControl")) ? parseInt(GETVALUE("utxtControl")): 0;
 AVSAVEVALUE(ustxtControl,"CPOS","CONTROL");
 AVSAVEVALUE(objGlobal.cposType,"CPOS","TYPE");
 AVSAVEVALUE(objGlobal.cposAccount,"CPOS","ACCOUNT");
 AVSWITCH("BUSINESSOBJECT",objBusinessObject.uUserObjectType,"WHAT_IF");
 break;
 default:
 break;
 }
 if(sButton != KeyF24) {SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);}
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN006SCRGBDGrainBank",
 vGUID      :  "50F270DCEB854F6798BD232A1A89802E",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","F2","F3","Discounts","Advances",
 "F6","F7","Splits","F9","Tickets","Settlements",
 "Usage","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "What If","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030402050708061005070814151617181920212223240326272829303132333435363738",
 vFKERTS : "10000000000000000000000000000000000000",
 vFKEVLF : "10000000000000000000000010000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_70D8B9D2432A449F9133D70A376011B4);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_697.");}
var vSD_4233539F29C642ABA7B991921079262C = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (SHARED.payload.action ==  SHARED.action.navigate) {
 if (CHECK_FIELD_EXISTS("utxtOption")) SETVALUE("utxtOption", "1");
 } else {
 }
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 if (SHARED.payload.action !=  SHARED.action.navigate) {
 SETBUSY(false);
 }
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
 if (CHECK_FIELD_EXISTS("utxtMenuorSelection")) {
 Q_SETVALUE("=uILEERRHDLILEERR02", "utxtOption", "2");
 Q_SENDKEY("=uILEERRHDLILEERR02", KeyEnter, UF_setPayload({action: SHARED.action.navigate}));
 SETVALUE("utxtOption", "1");
 SENDKEY(KeyEnter, UF_setPayload({action: SHARED.action.navigate}));
 } else {
 SHARED.UF_commonReturn();
 }
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uILEERRHDLILEERR02",
 vGUID      :  "BF43F80AAC1742FFAC50CDC580DB08B0",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
try{VF_SY420_REGISTER_FORM(vSD_4233539F29C642ABA7B991921079262C);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_698.");}
var vSD_96DD23C07D844D3288B047A3E250C3CB = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN006SCRSPC",
 vGUID      :  "55FC73AA89EA4AA1A44F9F15C6D623BD",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
try{VF_SY420_REGISTER_FORM(vSD_96DD23C07D844D3288B047A3E250C3CB);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_700.");}
var vSD_0423FB21B61347A38014206136F3130F = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 SETCURSORTOFIELD("uButtonContinue");
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uSAL100SCR019C",
 vGUID      :  "1410AC4B90B445809ADE7862A8B16211",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000100000000000000000000000000000000",
 vFKEVLF : "00000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_0423FB21B61347A38014206136F3130F);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_701.");}
var vSD_2DA3D98168C94551A5CF28EFC7636DA7 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType + " T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action + " T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM() + " T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage + " T_alertSaveMessage  " + SHARED.alertSaveMessage);
 let hideKeyArray = [KeyF4,KeyF8];
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true,hideKeyArray: hideKeyArray});
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
 case KeyF1:
 SENDKEY(KeyF1);
 break;
 case KeyF2:
 SENDKEY(KeyF2);
 break;
 case KeyF4:
 SENDKEY(KeyF4);
 break;
 case KeyF6:
 SENDKEY(KeyF6);
 break;
 case KeyF8:
 SENDKEY(KeyF8);
 break;
 case KeyF11:
 SENDKEY(KeyF11);
 break;
 case KeyF12:
 SENDKEY(KeyF12);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uSAL011SCR02C",
 vGUID      :  "2CDEE1B671564BB38C73862EBBA1F1B7",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","Payment","F3","Reverse","F5",
 "Print","Exit","Copy","Searrch","F10","Additional Info",
 "Maintain Disc","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "1301041205060807091011030214151617181920212223242526272829303132333435363738",
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
try{VF_SY420_REGISTER_FORM(vSD_2DA3D98168C94551A5CF28EFC7636DA7);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_703.");}
var vSD_C277A1573A974F839768A4DEA693882C = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if ((objBusinessObject.uUserObjectType == "INBOUND_BATCH_SCALE_TICKETS") || (objBusinessObject.uUserObjectType == "OUTBOUND_BATCH_SCALE_TICKETS")) {
 let isHiddenDestination = true;
 if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() == oPreviousForm.vName)) {
 TRACE(CURRENT_FORM(), "validation error exists - payload reset to initialise")
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 SHARED.alertSaveMessage = "";
 }
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false, isHiddenDestination: isHiddenDestination});
 if ((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 SETVALUE("utxtBranch",objListManager.NKey1[0]);
 SHARED.alertSaveMessage =  "Batch Scale Tickets for Branch " + objListManager.NKey1[0] + " have been updated";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change, filterRebuildEvent: SHARED.filterRebuildEvent.refreshInstanceList});
 SHARED.returnDestinationForm = "";
 SHARED.returnDestinationCH = "PRINT_BATCH";
 Q_SENDKEY("=" + CURRENT_FORM(), KeyF5, SHARED.payload);
 }
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
 case KeyF5:
 SETVALUE("utxtBranch",objListManager.NKey1[0]);
 SHARED.alertSaveMessage =  "Batch Scale Tickets for Branch " + objListManager.NKey1[0] + " have been updated";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.change, filterRebuildEvent: SHARED.filterRebuildEvent.refreshInstanceList});
 SHARED.returnDestinationForm = "";
 SHARED.returnDestinationCH = "PRINT_BATCH";
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uRTVLOCASCR01UpdateBatchScaleTickets",
 vGUID      :  "5A7547A00C2F433BA34D86085CB2E423",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","F1","F2","F3","F4","Proceed",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000000010000000000000000000000000000",
 vFKEVLF : "10000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array("uMSTMEN"),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_C277A1573A974F839768A4DEA693882C);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_704.");}
var vSD_5A185D2C3E8F405D8BAF62095F5AD67F = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false, showPopupButtons: true});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyEnter:
 SETCURSORTOFIELD("utxtControl");
 break;
 case KeyF24:
 let ustxtControl = (CHECK_FIELD_EXISTS("utxtControl")) ? parseInt(GETVALUE("utxtControl")): 0;
 AVSAVEVALUE(ustxtControl,"CPOS","CONTROL");
 AVSAVEVALUE(objGlobal.cposType,"CPOS","TYPE");
 AVSAVEVALUE(objGlobal.cposAccount,"CPOS","ACCOUNT");
 AVSWITCH("BUSINESSOBJECT",objBusinessObject.uUserObjectType,"WHAT_IF");
 break;
 default:
 break;
 }
 if(sButton != KeyF24) SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 HIDE_CURRENT_FORM();
 SETBUSY(true);
 switch (sToForm)
 {
 default:
 alert("Form " + this.vName + " cannot navigate to form " + sToForm);
 bReturn = false;
 break;
 }
 return(bReturn);
 },
 vName      :  "uGRN006SCRWHDExtendPrice",
 vGUID      :  "43A10B5972C34776B0E0190194C478D7",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Back","F1","F2","F3","Discounts","F5",
 "F6","F7","Splits","F9","Tickets","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "What If","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030402060708091011121314151617181920212223240326272829303132333435363738",
 vFKERTS : "10000000000000000000000000000000000000",
 vFKEVLF : "10000000000000000000000010000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_5A185D2C3E8F405D8BAF62095F5AD67F);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_706.");}
var vSD_4960183679FB4022B46B2EDBD60C329B = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: true});
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
 case KeyF5:
 SHARED.notifySaveMessage = "Measurement Company Summary has been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uBIN515ONE",
 vGUID      :  "17974177DFD94C7A991513E5E5C0002F",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000101000000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_4960183679FB4022B46B2EDBD60C329B);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_710.");}
var vSD_C4B28C74278E4A339356BE0032377A5F = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: true});
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
 case KeyF5:
 SHARED.notifySaveMessage = "Measurement Worksheet has been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uRTVLOCASCR01PrintMeasurementWorksheet",
 vGUID      :  "6887B99B08D443C29763CF993E7F9E91",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000101010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_C4B28C74278E4A339356BE0032377A5F);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_711.");}
var vSD_DE3AB66D829B49D5AC75AD115773D1E7 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: true});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: true});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 OVERRIDE_KEY_CAPTION_SCREEN (CURRENT_FORM(), KeyF1, "Restart");
 SHOW_CURRENT_FORM(true);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uSAL011SCR01C",
 vGUID      :  "22E53750B25846ACB6AB973F668D110C",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Restart","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "11000000000000000000000000000000000000",
 vFKEVLF : "11000000000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_DE3AB66D829B49D5AC75AD115773D1E7);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_713.");}
var vSD_C769BCDBCC1F4E978DFA016F4845AA0F = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: true});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 SHARED.notifySaveMessage = "Measurement Edit has been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uBIN510ONE",
 vGUID      :  "73568CFCFEAB40B488383DD4725CC894",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000101010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_C769BCDBCC1F4E978DFA016F4845AA0F);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_717.");}
var vSD_00A7FD73999642828AD3A5FC69EE7B03 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 if (objBusinessObject.uUserObjectType == "NA") {
 SHARED.UF_linkedToCommandTabDestinationArrive({payload: SHARED.payload, enableExitKeys: true});
 } else {
 SHARED.UF_nestedDestinationArrive({payload: SHARED.payload, enableExitKeys: false});
 this.vOverrideExitJunction = SHARED.currentExitJunction;
 }
 return(bReturn);
 },
 vHandle_BUTTONCLICK: function(sButton)
 {
 var bReturn = true;
 switch (sButton)
 {
 case KeyF5:
 SHARED.notifySaveMessage = "Measurement Location has been printed.";
 SHARED.UF_setPayload({action: SHARED.action.save, screenType: SHARED.screenType.submit});
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uBIN520ONE",
 vGUID      :  "73CCEF8EFBCB4DA68483E7A9D815BC7D",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Print",
 "F6","Exit","F8","Search","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000101010000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_00A7FD73999642828AD3A5FC69EE7B03);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_718.");}
var vSD_23A0167D405E43648C99FEC1F97A66FF = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 HIDE_CURRENT_FORM();
 SETBUSY(true);
 TRACE("Company",AVRESTOREAVALUE("99", "COMPANY"),"Company Name",AVRESTOREAVALUE("xxx", "COMPANYNAME"));
 if((SHARED.payload.action == SHARED.action.initialise) && (CURRENT_FORM() != oPreviousForm.vName)) {
 SENDKEY(KeyEnter, SHARED.payload);
 }
 return(bReturn);
 },
 vName      :  "uSYS240SCR01C",
 vGUID      :  "4925537F009B443FA7409BA62578530A",
 vFKC       :    null,
 vFKERTS    :    null,
 vFKEVLF    :    null,
 vFKSND     :    null,
 vFKSEQ     :    null,
 vTargets   :  Array(),
 vTYPE      :  "S"
 };
try{VF_SY420_REGISTER_FORM(vSD_23A0167D405E43648C99FEC1F97A66FF);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_705.");}
var vSD_0DA5C7497FC74E809F9ECE2AA32C3895 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 HIDE_CURRENT_FORM();
 SETBUSY(true);
 if (SHARED.payload.action == SHARED.action.navigate) {
 SETVALUE("utxtSelection","2");
 SENDKEY(KeyEnter, SHARED.payload);
 }
 return(bReturn);
 },
 vName      :  "uSystemRequest",
 vGUID      :  "03D870181E5D42D69187D3C644BB11DF",
 vFKC       :    null,
 vFKERTS    :    null,
 vFKEVLF    :    null,
 vFKSND     :    null,
 vFKSEQ     :    null,
 vTargets   :  Array(),
 vTYPE      :  "S"
 };
try{VF_SY420_REGISTER_FORM(vSD_0DA5C7497FC74E809F9ECE2AA32C3895);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_721.");}
var vSD_1D6CF1A8F39A406DA69E95BC30924D07 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 SETBUSY(false);
 CLEAR_MESSAGES();
 HIDE_CURRENT_FORM("This user is not set up for Control.","Please login with a Control user or contact your system administrator");
 objGlobal.mfa = true;
 return(bReturn);
 },
 vName      :  "uMFA",
 vGUID      :  "5CEBB4852AE248B6AA11078A2539E64D",
 vFKC       :    null,
 vFKERTS    :    null,
 vFKEVLF    :    null,
 vFKSND     :    null,
 vFKSEQ     :    null,
 vTargets   :  Array(),
 vTYPE      :  "S"
 };
try{VF_SY420_REGISTER_FORM(vSD_1D6CF1A8F39A406DA69E95BC30924D07);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_722.");}
var vSD_8417A4AF06294FBFA774BFBE599EC306 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF8:
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uFRT100SCRAR",
 vGUID      :  "B9CB432C42124A3FA3AD85E3DE2A02EE",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
try{VF_SY420_REGISTER_FORM(vSD_8417A4AF06294FBFA774BFBE599EC306);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_728.");}
var vSD_D004561956AE4CDAAB3DD736F7211149 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 case KeyF8:
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 break;
 default:
 break;
 }
 SHARED.UF_commonBUTTONCLICK(sButton, SHARED.payload);
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uFRT100SCRAP",
 vGUID      :  "27AE56F8E0CF484F9A3ACD24EF9632C5",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
try{VF_SY420_REGISTER_FORM(vSD_D004561956AE4CDAAB3DD736F7211149);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_729.");}
var vSD_E2E497BC666B4DB48F2BEDF838D70F08 = {
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCONFIRMDLTSCRDLTR",
 vGUID      :  "568BE26B65B54D58B67AD690F799BAB0",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Continue","Back","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
try{VF_SY420_REGISTER_FORM(vSD_E2E497BC666B4DB48F2BEDF838D70F08);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_730.");}
var vSD_C746AB4545F5476093E25EB3507A35A2 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 SHARED.notifySaveMessage =  "";
 SHARED.UF_setPayload({action: SHARED.action.initialise});
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType + " T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action + " T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM() + " T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage + " T_alertSaveMessage  " + SHARED.alertSaveMessage);
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
 switch (sButton)
 {
 case KeyEnter:
 break;
 default:
 break;
 }
 return(bReturn);
 },
 vHandle_NAVIGATETO: function(sToForm, oPreviousForm)
 {
 var bReturn = true;
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uCOM310SCR02",
 vGUID      :  "E9C2C0BB195C44178BD268FC1089260D",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
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
try{VF_SY420_REGISTER_FORM(vSD_C746AB4545F5476093E25EB3507A35A2);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_731.");}
var vSD_EE1A470E30024995AE1350CD4350282D = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 HIDE_CURRENT_FORM();
 SETBUSY(true);
 TRACE("GRAIN Signon Password Expire");
 SENDKEY(KeyEnter, SHARED.UF_setPayload({action: SHARED.action.initialise}));
 return(bReturn);
 },
 vName      :  "SignOnPasswordExpire",
 vGUID      :  "317A3FF6BEB243DAB7A759A3379602AF",
 vFKC       :    null,
 vFKERTS    :    null,
 vFKEVLF    :    null,
 vFKSND     :    null,
 vFKSEQ     :    null,
 vTargets   :  Array(),
 vTYPE      :  "S"
 };
try{VF_SY420_REGISTER_FORM(vSD_EE1A470E30024995AE1350CD4350282D);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_733.");}
var vSD_D1BF59C80BF64A6BB550EE3974699756 = { // Do not change or delete this line
 vHandle_ARRIVE: function(oPayload, oPreviousForm)
 {
 var bReturn = true;
 TRACE("T_BUSOBJ " + objBusinessObject.uUserObjectType + " T_CMDOBJ " + objCommand.uUserObjectType);
 TRACE("T_SHARED.payload.action " + SHARED.payload.action + " T_SHARED.payload.screenType " + SHARED.payload.screenType);
 TRACE("T_CurrentForm " + CURRENT_FORM() + " T_PreviousForm " + oPreviousForm.vName);
 TRACE("T_notifySaveMessage  " + SHARED.notifySaveMessage + " T_alertSaveMessage  " + SHARED.alertSaveMessage);
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
 case KeyF5:
 SENDKEY(KeyF5);
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
 SHARED.UF_commonReturn();
 switch (sToForm)
 {
 default:
 break;
 }
 return(bReturn);
 },
 vName      :  "uRTVPRTDEVRSCR01C",
 vGUID      :  "AC6DD711F0604CF7ABCE659EADD3AAF9",
 vOverrideExitJunction : "", /* You may change this property dynamically */
 vFKC   :  Array("Refresh","F1","F2","F3","F4","Continue",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","Clear","Page Up","Page Down","Print","Help",
 "Attention","PA1"),
 vFKSEQ : "0102030405060708091011121314151617181920212223242526272829303132333435363738",
 vFKERTS : "10000100000000000000000000000000000000",
 vFKEVLF : "10000100000000000000000000000000000000",
 vFKSND   :     Array("Enter","F1","F2","F3","F4","F5",
 "F6","F7","F8","F9","F10","F11",
 "F12","F13","F14","F15","F16","F17",
 "F18","F19","F20","F21","F22","F23",
 "F24","ClearScreen","PageUp","PageDown","Print","Help",
 "Attention","PA1"),
 vTargets   :  Array(),
 vTYPE      :  "D"
 };
try{VF_SY420_REGISTER_FORM(vSD_D1BF59C80BF64A6BB550EE3974699756);}
catch(oE){window.alert(oE.description+" when loading FORMSCRIPT_735.");}
function EXEC_026()
{
objNodeGroup.uRampStamp="20260630-104339";
objNodeGroup.uIdentifier="9B2760D147C74DED86C497356C6CA314";
objNodeGroup.uCaption="Grain Session";
objNodeGroup.uLayoutStyle="FLOW";
objNodeGroup.flagLockUnknown=false;
objNodeGroup.uScriptCount=259;
objNodeGroup.arrayobjSpecialFields=new Array();
var oSF=null;
oSF=new Object();
oSF.uKey="F9";
oSF.uHandler="TS2RPRMPT";
oSF.uHandlerONE="";
oSF.uName="utxtAccount";
oSF.uHandlerInfo1="";
oSF.uHandlerInfo2="";
oSF.uHandlerInfo3="";
objNodeGroup.arrayobjSpecialFields["F9UTXTACCOUNT"]=oSF;
oSF=new Object();
oSF.uKey="F9";
oSF.uHandler="TS2RPRMPT";
oSF.uHandlerONE="";
oSF.uName="utxtAccounttwo";
oSF.uHandlerInfo1="";
oSF.uHandlerInfo2="";
oSF.uHandlerInfo3="";
objNodeGroup.arrayobjSpecialFields["F9UTXTACCOUNTTWO"]=oSF;
oSF=new Object();
oSF.uKey="F9";
oSF.uHandler="TS2RPRMPT";
oSF.uHandlerONE="";
oSF.uName="Account";
oSF.uHandlerInfo1="";
oSF.uHandlerInfo2="";
oSF.uHandlerInfo3="";
objNodeGroup.arrayobjSpecialFields["F9ACCOUNT"]=oSF;
if ( !(objNodeGroup.flagSessionManaged) ) objNodeGroup.flagLockUnknown=false;
return;
}
