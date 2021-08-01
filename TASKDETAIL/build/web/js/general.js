// JavaScript Document


var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;  

javascript:window.history.forward(1);

/*--Textbox Empty Validation--*/
function txt_empty(txt,errControl,msg) 
{

	
	if(document.getElementById(txt).value == "") 
	{ 
	//alert("hai");
	//document.getElementById(divid).style.display='block';
	document.getElementById(errControl).style.color="red";
    document.getElementById(errControl).innerHTML = msg;
	//document.getElementById(txt).focus();
	return false;
	} 
    else 
	{
		//document.getElementById(divid).style.display='none';
		document.getElementById(errControl).innerHTML = ""; 
	} 
		
}		 
function chkContentLength(txt,fldlength,stringmsg)		 
{
	if(document.getElementById(txt).length<fldlength){
		document.getElementById(span).style.color="red";
		document.getElementById(errControl).innerHTML = stringmsg; 
	}
	
}
		 
//dropdown onchange error message
function  onchange_ddl(ddl,span,msg)
{ 
//alert(document.getElementById(ddl).selectedIndex);
if(document.getElementById(ddl).selectedIndex==0)
{
//document.getElementById(divid).style.display='block';
document.getElementById(span).style.color="red";
document.getElementById(span).innerHTML=msg;
//document.getElementById(ddl).focus();
	return false;
}
else
{
//document.getElementById(divid).style.display='none';
document.getElementById(span).innerHTML="";
}
}
	
function duration()
{	
	if(document.getElementById('rbspecifyduration').checked==true)
	{		
		if((document.getElementById('specify_month').selectedIndex==0)||(document.getElementById('specify_year').selectedIndex==0))
		{	document.getElementById('err_duration').style.display='block';
			document.getElementById('e_duration').style.color="red";
			document.getElementById('e_duration').innerHTML="Please Enter Duration";
			return false;
		}	
	}
	else{
			document.getElementById('err_duration').style.display='none';
			document.getElementById('rbimmediately').checked==false;
			}
}

function val_phno(txt,spanid)
{
	var ctrlvalue=document.getElementById(txt);	
	
	if(ctrlvalue.value=='')
    {
		//document.getElementById(divid).style.display="block";
		document.getElementById(spanid).style.color="red";
    	document.getElementById(spanid).innerHTML="Phone No Should Not Be Blank";
		return false;
	}
      if((ctrlvalue.value!='') && (ctrlvalue.value.length<8 || ctrlvalue.value.length>15))
	{
		//document.getElementById(divid).style.display="block";
		document.getElementById(spanid).style.color="red";
   		document.getElementById(spanid).innerHTML="Should Be 8 To 15 Digit";
	}
	else
	{
		//document.getElementById(divid).style.display="none";
		document.getElementById(spanid).innerHTML="";
	}
  }
  
  

function val_mobile(txtctrl,span_id,divid)
{
	var ctrlValue=document.getElementById(txtctrl);
	if(ctrlValue.value=='')
    {
		document.getElementById(divid).style.display="block";
		document.getElementById(span_id).style.color="red";
    	document.getElementById(span_id).innerHTML="Please enter Your Mobile No.";
		return false;
	}
    if((ctrlValue.value.length>=1 && ctrlValue.value.length<10) || (ctrlValue.value.length>15))
	{
		document.getElementById(divid).style.display="block";
		document.getElementById(span_id).innerHTML="";
		document.getElementById(span_id).style.color="red";
		document.getElementById(span_id).innerHTML="Mobile No. should be 10 to 15 digit";	
	}
	else
	{ 
		document.getElementById(divid).style.display="none";
		document.getElementById(span_id).innerHTML="";
		return true;
	}
}

function TXTClear(passtxtValue) {
	var ValuetxtString=passtxtValue;
	for(i=0;i<ValuetxtString.split("|").length;i++) { 
	 document.getElementById(ValuetxtString.split("|")[i].toString()).value=""; } }
	 
	 function DISStylenone(passValue) {

	var ValueString=passValue;
	for(i=0;i<ValueString.split("|").length;i++) {
	document.getElementById(ValueString.split("|")[i].toString()).style.display='none'; } }
	
	function DIVClear(passDIVValue) { 
	var ValueDIVString=passDIVValue;
	for(i=0;i<ValueDIVString.split("|").length;i++) {
	  document.getElementById(ValueDIVString.split("|")[i].toString()).innerHTML=""; } }
	  
	  function ddlclear(passtxtValue) {
	var ValuetxtString=passtxtValue;
	for(i=0;i<ValuetxtString.split("|").length;i++) { 

	 document.getElementById(ValuetxtString.split("|")[i].toString()).selectedIndex=0; 	} }
	 

function val_pincode(txtctrl,spanid,divid)
{  
	var ctrlvalue=document.getElementById(txtctrl);
	if(ctrlvalue.value=="")
    {  
		document.getElementById(divid).style.display='block';
		document.getElementById(spanid).style.color="red";
    	document.getElementById(spanid).innerHTML="Please enter your Zip/Postalcode";
	}
    else if((ctrlvalue.value.length<6) || (ctrlvalue.value.length>15))
	{
		document.getElementById(divid).style.display='block';
		document.getElementById(spanid).innerHTML="";
		document.getElementById(spanid).style.color="red";
		document.getElementById(spanid).innerHTML="Postalcode should be 6 to 15 digit";
	}
	else
	{     
		document.getElementById(divid).style.display='none';
		document.getElementById(spanid).innerHTML="";
	}
}
//<!-- for email valdiation-->
		

function val_email1(txt,spanid)
{
	var email = document.getElementById(txt).value;
	if(email=='')
	{
	 //document.getElementById(divid).style.display='block';
     document.getElementById(spanid).style.color="red";	
     document.getElementById(spanid).innerHTML="";
  	 document.getElementById(spanid).innerHTML="Should Not Be Blank";
	}
   else if(!valemail1(email))
	{
	 //document.getElementById(divid).style.display='block';
     document.getElementById(spanid).style.color="red";	
     document.getElementById(spanid).innerHTML="";
  	 document.getElementById(spanid).innerHTML="Should Be Valid";
	}
	else if(valemail1(email))
	{
			document.getElementById(spanid).innerHTML="";
			//document.getElementById(divid).style.display='none';
	}
        return true;
}


function valemail1(email)
{
  var RegExp = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,3})(\]?)$/
    if(RegExp.test(email)){
    	//showemail(email,'emailid');
		return true;
    }else{
        return false;
    }
}

function val_address(txtCtrl1,MsgControl,divid,identity)
{
	var  txtCtrl=document.getElementById(txtCtrl1);
	if(txtCtrl.value=="" && identity=='Address1')
	{
	 document.getElementById(divid).style.display='block';
	 document.getElementById(MsgControl).style.color="red";
	 document.getElementById(MsgControl).innerHTML="Please enter your Contact Address";	
	} 
	else if(((txtCtrl.value!="")&&(txtCtrl.value.length<10) || (txtCtrl.value.length>150)))
	{
	 document.getElementById(divid).style.display='block';
     document.getElementById(MsgControl).innerHTML="";
	 document.getElementById(MsgControl).style.color="red";
 	 document.getElementById(MsgControl).innerHTML="Address should be  10 to 150 char";	
 	}
	else
	{
		document.getElementById(divid).style.display='none';
		document.getElementById(MsgControl).innerHTML="";
	}
}

function ontab_controls(txtaudio,MsgControl,strName,divid)	
{
 var  txtCtrl=document.getElementById(txtaudio).value;
    if(txtCtrl=="")
    {
		document.getElementById(divid).style.display='block';
    	document.getElementById(MsgControl).innerHTML=strName ;	
	} 
}



//Password validation	
function val_password(txtaudio,MsgControl,strName)
{  
   var  txtCtrl=document.getElementById(txtaudio);
     if(txtCtrl.value==""){
	 //document.getElementById(divid).style.display='block';
	 document.getElementById(MsgControl).style.color="red";
     document.getElementById(MsgControl).innerHTML=strName ;	
     return false; } 
   else if ((txtCtrl.value.length<6) || (txtCtrl.value.length>8)){
	//document.getElementById(divid).style.display='block';
	document.getElementById(MsgControl).style.color="red";
 	document.getElementById(MsgControl).innerHTML="Password Should be 6 to 8 char";}
   else
   {
   //document.getElementById(divid).style.display='none'; 
   document.getElementById(MsgControl).innerHTML="";}	
}

//Password and confirm password comparision
function pwd_compare(txtaudio1,txtaudio2,span_id)
{
	
    pass=document.getElementById(txtaudio1).value;
    pass1=document.getElementById(txtaudio2).value;
	
	var ctrlvalue1=document.getElementById(txtaudio2);	
	
	if(ctrlvalue1.value=='')
    {
		//document.getElementById(divid).style.display="block";
		document.getElementById(span_id).style.color="red";
    	document.getElementById(span_id).innerHTML="Confirm Password Should Not Be Blank";
		return false;
	}
	
    else if((pass.length>=1) && (pass1=="") ){
    document.getElementById(span_id).innerHTML="";
	//document.getElementById(divid).style.display='block';
	document.getElementById(span_id).style.color="red";
    document.getElementById(span_id).innerHTML="Should Not Be Blank";}
    else if(pass!=pass1){
   	document.getElementById(span_id).innerHTML="";
	//document.getElementById(divid).style.display='block';
	document.getElementById(span_id).style.color="red";
   	document.getElementById(span_id).innerHTML="Confirm pwd & pwd must be same";}
    else if(pass==pass1)
	{
		//document.getElementById(divid).style.display='none'; 
	document.getElementById(span_id).innerHTML="";}
}  
 
 
 
 /*----- Removes the unwanted spaces(more than one)-----*/
function trim(sStr)
{
   var s; sStr = sStr.toString();
   sStr = sStr.replace(/(^\s*)|(\s*$)/g,"");
   sStr = sStr.replace(/\s{2,}/g," ");
   return(sStr);
}

function specifychange()
 {
 	if(document.getElementById('rbspecifyduration').checked==true)
	{
		document.getElementById('spe').style.display='block';
		return true;
		
	}
	if(document.getElementById('rbimmediately').checked==true)
	{ 
		document.getElementById('spe').style.display='none';
		return true;
	}
	
 }
 
 function agesel()
 {
 	if(document.getElementById('ddlpro_age').selectedIndex==1)
	{
		document.getElementById('rbimmediately').disabled=true;
		document.getElementById('rbspecifyduration').checked=true;
		document.getElementById('spe').style.display='block';
		return true;
	}
	else
	{
		document.getElementById('rbimmediately').disabled=false;
		document.getElementById('rbspecifyduration').checked=false;
		document.getElementById('spe').style.display='none';
		return true;
	}
 }


function submitvalidation()
{
	if(document.getElementById('resi').checked==true){return validatePage('property1|owner1|trans1','err_property1|err_owner1|err_trans1','Please select property type|Please select Ownership type|Please select Transaction type','property1_err|owner1_err|trans1_err');} else { return validatePage('property2|owner2|trans2','err_property2|err_owner2|err_trans2','Please select property type|Please select Ownership type|Please select Transaction type','property2_err|owner2_err|trans2_err');}
	return true;
}


function validatePage(txtval,divval,errmsg)
{ 
//alert("hai");
	var k=0;
	var j=0;
	var ValueControl=txtval; var ValueDivs=divval; var ValueValues=errmsg;  
	for(i=0;i<ValueControl.split("|").length;i++) {
		var txtctrl=document.getElementById(ValueControl.split("|")[i].toString());
		if(((txtctrl.type=="text") && (txtctrl.value==""))||((txtctrl.type=="password") && (txtctrl.value==""))||((txtctrl.type=="textarea") && (txtctrl.value==""))||((txtctrl.type=="file") && (txtctrl.value==""))) {
			//document.getElementById(divvalues.split("|")[i].toString()).style.display='block';
			document.getElementById(ValueDivs.split("|")[i].toString()).style.color="#ff0000";
			document.getElementById(ValueDivs.split("|")[i].toString()).innerHTML=ValueValues.split("|")[i].toString();
		}
		else if((txtctrl.type=="select-one") && (txtctrl.selectedIndex==0)){
			document.getElementById(ValueDivs.split("|")[i].toString()).style.color="#ff0000";
			//document.getElementById(divvalues.split("|")[i].toString()).style.display='block';
			document.getElementById(ValueDivs.split("|")[i].toString()).innerHTML=ValueValues.split("|")[i].toString();
		}
		else if((txtctrl.type=="select-multiple") && (txtctrl.selectedIndex==-1) || (txtctrl.type=="select-multiple") && (txtctrl.selectedIndex==0)) {
			
			document.getElementById(ValueDivs.split("|")[i].toString()).style.color="#ff0000";
			//document.getElementById(divvalues.split("|")[i].toString()).style.display='block';
			document.getElementById(ValueDivs.split("|")[i].toString()).innerHTML=ValueValues.split("|")[i].toString();
		}
		if(document.getElementById(ValueDivs.split("|")[i].toString()).innerHTML!='&nbsp;') {
			
			if(((document.getElementById(ValueDivs.split("|")[i].toString()).innerHTML)!="")) { 
if((document.getElementById(ValueDivs.split("|")[i].toString()).style.color=="rgb(255, 0, 0)")||(document.getElementById(ValueDivs.split("|")[i].toString()).style.color=="#ff0000"))
{k++;}else{j++;	}} else {j++;}	}	}
	if((k==0)) { document.Register.submit();   return true; } else { return false; }
	
}



  
function ddlClear(ddlControl,errControl,divid) {
	if(document.getElementById(ddlControl).selectedIndex != 0) {
		
	   document.getElementById(divid).style.display='none';
	   document.getElementById(errControl).innerHTML = ""; 	}
	else if(document.getElementById(ddlControl).selectedIndex != -1) { 
		document.getElementById(divid).style.display='none';
	   document.getElementById(errControl).innerHTML = ""; }  }

  
function numbersonly(myfield,e,dec)
{
	
	var key;
	var keychar;
	if (window.event)
	   key = window.event.keyCode;
	else if (e)
	   key = e.which;
	else
	   return true;
	keychar = String.fromCharCode(key);
// control keys
	if ((key==null) || (key==0) || (key==8) || 
		(key==9) || (key==13) || (key==27)  || (key==43) || (key==45))
	   return true;
	// numbers
	else if ((("0123456789").indexOf(keychar) > -1))
	   return true;
	// decimal point jump
	else if (dec && (keychar == ".")) {
	   myfield.form.elements[dec].focus();
	   return false;
	} else
	   return false;
}

//onblur function for radio button
function onchange_radio(rad1,rad2,rad3,span,msg,divid)
{
	if((document.getElementById(rad1).checked==false)&&(document.getElementById(rad2).checked==false)&&(document.getElementById(rad3).checked==false))
	{
		document.getElementById(divid).style.display='block';
		document.getElementById(span).innerHTML="Please select "+msg;
	}
}
function clear_radio(rad1,rad2,rad3,span,msg,divid)
{
	if((document.getElementById(rad1).checked==true)||(document.getElementById(rad2).checked==true)||(document.getElementById(rad3).checked==true))
	{ 
		document.getElementById(divid).style.display='none';
		document.getElementById(span).innerHTML="";
	}	
}

// for textarea
function val_textArea(txtaudio,spanid,str,str1,divid)
{	alert('hai');
	if(txtaudio.value.length==0) 
	{
		document.getElementById(divid).style.display='block';
			document.getElementById(spanid).style.color='red';
		document.getElementById(spanid).innerHTML=str1;	}
	else if((txtaudio.value.length<20)||(txtaudio.value.length>500)) 
	{
		document.getElementById(divid).style.display='block';
		document.getElementById(spanid).innerHTML=str;	}
	else{
		document.getElementById(divid).style.display='none'; 
		document.getElementById(spanid).innerHTML="";}
}




function maxLengPaste(field,maxChars,textDesc)
 {
       if((field.length ) < maxChars) {
		  document.getElementById(textDesc).value=field;
		  var value100=  document.getElementById(textDesc).value; 
       }
	   else
	  {
		   var value1=document.getElementById(textDesc).value.substring(0,500);
		   document.getElementById(textDesc).value=value1;
	  }
 }
 
 
 function fileformat(txtaudio,errControl,msg,divid) 
{
	if(document.getElementById(txtaudio).value!='') 
	{

  		if((document.getElementById(txtaudio).value.lastIndexOf('.doc')=="-1")&&(document.getElementById(txtaudio).value.lastIndexOf('.DOC')=="-1"))
		{
				 document.getElementById(divid).style.display='block';
				 document.getElementById(errControl).style.color='red';
				 document.getElementById(errControl).innerHTML=msg;
				document.getElementById(txtaudio).focus;
				  return false;
		} 
		else 
			{ 
				document.getElementById(divid).style.display='none';
				document.getElementById(errControl).innerHTML=""; 
			}
    }
}


/*--------------------------Selectbox Empty Validation-------------------------*/
function ddlEmptyChk(ddlControl,errControl,msg){ 
	if(document.getElementById(ddlControl).selectedIndex ==0){
		document.getElementById(errControl).innerHTML = msg;	
	}
}
function ddlClear1(ddlControl,errControl){
	if(document.getElementById(ddlControl).selectedIndex != 0){
		document.getElementById(errControl).innerHTML = "";
	}	
}
 
 
  function capWords1(ctrl) { 
var inputString = document.getElementById(ctrl) // The input text field
var tmpStr, tmpChar, preString, postString, strlen;
tmpStr = inputString.value;
//alert(tmpStr);
stringLen = tmpStr.length;
if (stringLen > 0)
{
  for (i = 0; i < stringLen; i++)
  {
  	
    if (i == 0)
	{
   tmpChar = tmpStr.substring(0,1).toUpperCase();
   postString = tmpStr.substring(1,stringLen);
   //alert(postString);
   tmpStr = tmpChar + postString;
  // tmpStr = tmpChar;
   document.getElementById(ctrl).value=tmpStr;
    }
    else
	{
      tmpChar = tmpStr.substring(i,i+1);
      if (tmpChar == " " && i < (stringLen-1))
	  {
      tmpChar = tmpStr.substring(i+1,i+2).toUpperCase();
      preString = tmpStr.substring(0,i+1);
      postString = tmpStr.substring(i+2,stringLen);
      tmpStr = preString + tmpChar + postString;
    
      }
    }
  }
}
}


function name_val(e)
  {
	
	if (window.event)key = window.event.keyCode; else if (e) key = e.which; else  return true;
	var unicode=e.charCode? e.charCode : e.keyCode
	var	keychar = String.fromCharCode(key);
	if((keychar=='%')&&(unicode==37)||(keychar=='.')&&(unicode==46)){ return false; }else{
	document.all ? k = e.keyCode : k = e.which;
	return ((unicode > 64 && unicode < 91) || (unicode > 96 && unicode < 123) || unicode == 8 || unicode == 9 || unicode == 32 || unicode==46 || unicode==37 || unicode==39 || unicode==116);}
 }
 


function checkboxvalidation(txtval,divval,errmsg,divid)
{
	if(document.getElementById('txtval').checked==false)
	{
		document.getElementById(divid).style.display='block';
		document.getElementById(divval).innerHTML="Please select "+errmsg;
		return false;
	}
	else
    {
	  return true;
	}
}

 function header(divid)
 	{
			document.getElementById(divid).style.display='block';
	}
 
 
 function aboutus1(table_none,table_block)
{
	
document.getElementById(table_none).style.display='block';  
document.getElementById(table_block).style.display='none';
}


function aboutus2(table_none,table_block)
{
	
document.getElementById(table_none).style.display='none';
document.getElementById(table_block).style.display='block';  
}

function  vedioformat(txtaudio,errControl,msg,divid)  
{ 
	if(document.getElementById(txtaudio).value!='') 
	{

  		if((document.getElementById(txtaudio).value.lastIndexOf('.mpeg')=="-1")&&(document.getElementById(txtaudio).value.lastIndexOf('.MPEG')=="-1")&&(document.getElementById(txtaudio).value.lastIndexOf('.avi')=="-1")&&(document.getElementById(txtaudio).value.lastIndexOf('.AVI')=="-1")&&(document.getElementById(txtaudio).value.lastIndexOf('.mov')=="-1")&&(document.getElementById(txtaudio).value.lastIndexOf('.MOV')=="-1")&&																																																																																															(document.getElementById(txtaudio).value.lastIndexOf('.wmv')=="-1")&&(document.getElementById(txtaudio).value.lastIndexOf('.WMV')=="-1")&&(document.getElementById(txtaudio).value.lastIndexOf('.flv')=="-1")&&(document.getElementById(txtaudio).value.lastIndexOf('.FLV')=="-1"))
		{
				 document.getElementById(divid).style.display='block';
				 document.getElementById(errControl).style.color='red';
				 document.getElementById(errControl).innerHTML=msg;
				document.getElementById(txtaudio).focus;
				  return false;
		} 
		else 
			{ 
				document.getElementById(divid).style.display='none';
				document.getElementById(errControl).innerHTML=""; 
			}
    }
}


/*--------------------------Character Limit Check Validation for mobile and phone numbers--------------------*/
function valid_chk(txtControl,errControl,minval,maxval,msg)
{

	if(((document.getElementById(txtControl).value).length<minval) || ((document.getElementById(txtControl).value).length>maxval))	
	{
		document.getElementById(errControl).innerHTML = msg;	
	} else {
		document.getElementById(errControl).innerHTML = "";	
	}
}


 function val_zero(txt,span_id)
{
	var ctrlValue=document.getElementById(txt);
	if(eval(ctrlValue.value)=='0')
    {
		document.getElementById(span_id).style.color="red";
    	document.getElementById(span_id).innerHTML="Should Not Be Zero";
		return false;
	}else{
    	document.getElementById(span_id).innerHTML="";
		return true;
	}
}   



function nospecialcharacters(myfield,e,dec)
{
	
	var key;
	var keychar;
	if (window.event)
	   key = window.event.keyCode;
	else if (e)
	   key = e.which;
	else
	   return true;
	keychar = String.fromCharCode(key);
// control keys
	if ((key==null) || (key==0) || (key==8) || 
		(key==9) || (key==13) || (key==27) || (key > 64 && key < 91) || (key > 96 && key < 123))
	   return true;
	// numbers
	else if ((("0123456789").indexOf(keychar) > -1))
	   return true;
	// decimal point jump
	else if (dec && (keychar == ".")) {
	   myfield.form.elements[dec].focus();
	   return false;
	} else
	   return false;
}