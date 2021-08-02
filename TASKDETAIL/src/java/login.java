

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author WINDOWS 10
 */
public class login extends HttpServlet {

   
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
                    String url = "jdbc:mysql://localhost:3306/ontology";
            Class.forName("com.mysql.jdbc.Driver");
            Connection con = DriverManager.getConnection(url, "root", "root");
            PreparedStatement ps;
            Statement st = con.createStatement();
            String s1=request.getParameter("s1");
            String s2 = request.getParameter("s2");
            String a1= request.getParameter("a1");
            String a2 = request.getParameter("a2");
            String a3,a4,a5=null,a6=null;
                 HttpSession so = request.getSession(true);
              
            int flag=0;
           if((s1!=null) )
            {
            if((a1!=null)|| (a2!=null) )
            {
                
                 
              ResultSet rs = (ResultSet) st.executeQuery("select * from login where name='"+a1+"'");
        
                 
	        if(rs.next())
	   	      {
	   		a3=rs.getString(1);
                        a4=rs.getString(2);
                         	   
	        if((a1.equalsIgnoreCase(a3))&&(a2.equalsIgnoreCase(a4))) {
                     
	   	 flag=1;
                }
                      }
              
                   so.setAttribute("un", a1);
                so.setAttribute("un1", a2);
             
                if((flag==1)){
                  
                  
                         request.setAttribute("ok", "1");
                    request.setAttribute("msg", "Welcome to Admin Login");
                    RequestDispatcher requestdispatcher = request.getRequestDispatcher("admin.jsp");
                    requestdispatcher.forward(request, response);
                   
                }else {
           request.setAttribute("ok", "1");
               request.setAttribute("msg", "Invalid Username && Password");
	       RequestDispatcher requestdispatcher = request.getRequestDispatcher("login.jsp");
	       requestdispatcher.forward(request, response); 
            }
               
               
              
            }else {
           request.setAttribute("ok", "1");
               request.setAttribute("msg", "Please Enter all the Values");
	       RequestDispatcher requestdispatcher = request.getRequestDispatcher("login.jsp");
	       requestdispatcher.forward(request, response); 
            }
                                    
            
            }else {
                 request.setAttribute("ok", "1");
			request.setAttribute("msg", "Please Enter all the Values");
			RequestDispatcher requestdispatcher = request.getRequestDispatcher("login.jsp");
			requestdispatcher.forward(request, response);
            }
            
            
            
            
            
            
        }catch(Exception e) {
        e.printStackTrace();
        }

            finally {
            out.close();
        }
    }

    
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

   
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    
    public String getServletInfo() {
        return "Short description";
    }

}
