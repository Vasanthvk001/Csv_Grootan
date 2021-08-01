<%-- 
    Document   : login
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
        <td width="149" height="31"><div align="center"><a href="index.jsp" class="style1">HOME</a></div></td>


		 <td width="188"><div align="center"><a href="Aboutus.jsp" class="style1">ABOUT_US</a></div></td>
        <td width="181"><div align="center"><a href="login.jsp" class="style1">LOGIN</a></div></td>
        <td width="188"><div align="center"><a href="contactus.jsp" class="style1">CONTACT_US </a></div></td>
		 
      </tr>
    </table></td>
  </tr>
  <tr>
    <td height="263"><p>&nbsp;</p>
      <table width="412" border="1" bordercolor="#CC6600" align="center">
      <tr>
        <td width="406" height="41" align="center"  bgcolor="#CC6600"><span class="style8 style1"><strong>ADMIN LOGIN </strong></span></td>
      </tr>
      <tr>
        <td height="135"><table width="403" border="0" align="center">
          <tr>
            <td width="146" height="36"><strong>UserName * </strong></td>
            <td width="9">&nbsp;</td>
            <td width="234"><label>
              <input type="text" name="a1" size="30px;">
            </label></td>
          </tr>
          <tr>
            <td height="36"><strong>Password * </strong></td>
            <td>&nbsp;</td>
            <td><input type="password" name="a2" size="30px;"></td>
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
              <input type="submit" name="s1" value="Submit" style="background-color:#993300; border-bottom-color:#993333;">&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" name="s2" value="Cancel" style="background-color:#993300; border-bottom-color:#993333; ">
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
