<%-- 
    Document   : admin
      Created on : Jul 31, 2021, 10:46:01 AM
    Author     : WINDOWS 10
--%>

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
.style4 {
	font-weight: bold;
	color: #990000;
	font-style: italic;
	font-size: 24px;
}
-->
        </style>
</head>
    <body bgcolor="#993333">
         <form action="login" method="post"><%
   String ok=(String)request.getAttribute("ok");
   String msg="";
 
    if(ok!=null)
   {
   msg=(String)request.getAttribute("msg");

     }
    %><table width="1052" border="0" align="center" bgcolor="#FFFFFF">
  <tr>
    <td width="1046" height="206"><table width="1046" border="0">
  <tr>
   <td width="923"><img src="image/banner.jpg" width="1092" height="406"/></td>
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
      <p align="center" class="style4">Welcome to Admin Login</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
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

