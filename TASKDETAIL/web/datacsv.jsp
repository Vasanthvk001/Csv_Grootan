<%-- 
    Document   : datacsv
    Created on : Jul 31, 2021, 10:46:01 AM
    Author     : WINDOWS 10
--%>

<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Qrcode Based Airport System</title>
		<link href="screen.css" rel="stylesheet" type="text/css" media="screen" />
<!--[if IE 6]>
	<script type="text/javascript" src="unitpngfix.js"></script>
<![endif]--> <script type="text/javascript" src="js/datetimepicker_css.js"></script>
		<script type="text/javascript" src="js/general.js"></script>

        <style type="text/css">
<!--
.style1 {color: #FFFFFF}
.style2 {
	color: #993300;
	font-weight: bold;
}
.style3 {color: #990000; font-weight: bold; }
.style4 {color: #FF0000}
.style8 {font-size: 10px; }
.style9 {font-size: 12px; }
-->
        </style>
</head>
    <body bgcolor="#993333">
         <form action="csvdata" method="post"><%
   String ok=(String)request.getAttribute("ok");
   String msg="";
 
    if(ok!=null)
   {
   msg=(String)request.getAttribute("msg");

     }
    %><table width="1052" border="0" align="center" bgcolor="#FFFFFF">
  <tr>
    <td width="1046" height="206"><table width="1157" border="0">
  <tr>
   <td width="1151"><img src="image/banner.jpg" width="1150" height="406"/></td>
  </tr>
 
</table></td>
  </tr>
  <tr>
    <td><table width="1095" border="0" bgcolor="#663300">
      <tr>
        <td width="149" height="31"><div align="center"><a href="admin.jsp" class="style1">HOME</a></div></td>


		 <td width="188"><div align="center"><a href="datacsv.jsp" class="style1">DATA CSV </a></div></td>
		 
        <td width="181"><div align="center"><a href="login.jsp" class="style1">LOGOUT</a></div></td>
        
		 
      </tr>
    </table></td>
  </tr>
  <tr>
    <td height="263"><p class="style2">&nbsp;</p>
      <p class="style3">&nbsp;</p>
      <table width="504" border="1" bordercolor="#CC6600" align="center">
      <tr>
        <td width="494" height="41" align="center"  bgcolor="#CC6600"><span class="style8 style1"><strong>DATA CSV </strong></span></td>
      </tr>
      <tr>
        <td height="135"><table width="478" border="0" align="center">
          <tr>
            <td width="127" height="36">FileUpload  <span class="style4">*</span> </td>
            <td width="7">&nbsp;</td>
            <td width="330"><label>
              <input type="file" name="a1" size="30px;">
            </label></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td><label>
              <input type="submit" name="s1" value="Submit" style="background-color:#993300; border-bottom-color:#993333;">&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" name="s2" value="View" style="background-color:#993300; border-bottom-color:#993333; ">&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" name="s3" value="Cancel" style="background-color:#993300; border-bottom-color:#993333; ">
            </label></td>
          </tr>
        </table></td>
      </tr>
    </table>
      <p align="center"><%=msg%></p>
     
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p></td>
  </tr>
  <tr>
    <td height="21">&nbsp;</td>
  </tr>
</table>

	   </form>
    </body>
</html>

