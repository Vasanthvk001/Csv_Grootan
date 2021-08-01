/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author WINDOWS 10
 */
public class csvdata extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
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
  String a11=request.getParameter("a1");
       String s1=request.getParameter("s1");
 
       

       
   if(s1!=null){
       
       AesEncryption asc=new AesEncryption();
       int  v1=0;
      File file = new File(a11);
               
                file.getName();
        
           if(file.getName().contains(".csv")){
                BufferedReader lineReader = new BufferedReader(new FileReader(a11));
            String lineText = null;
             int count = 0;
             String a1="",a2="",a3="";   
             String sql1="",sql2="";
             lineReader.lines();
             if ((lineText = lineReader.readLine()) != null) {
               String[] data = lineText.split(",");
      int a=data.length; 
        sql1 = "CREATE TABLE  " +file.getName().replace(".csv", "")+"(";
        for( int i=0; i<a;i++)
          {
//       System.out.println(data[i]);
//        statement.setString(i+1, data[i]);
 
        if(data[i].equals("password")){
            count=i;
            
        }  System.out.println("Count"+count);
            a1=data[i]+" VARCHAR(255)";
        a2=a2+data[i]+",";  
          int v=st.executeUpdate("insert into ddatabase values('"+data[i]+"','"+file.getName().replace(".csv", "")+"')");
        a3=a3+"?,";
sql1=sql1+" "+a1+",";
          
        }
        sql1=sql1+")"; 
        
       String sqls= sql1.replace(",)", ")");
       
       System.out.println(sqls+";");
        st.executeUpdate(sqls.replaceAll("", ""));
        
             }
             sql2 = "INSERT INTO "+file.getName().replace(".csv", "")+"("+a2+") values ("+a3+")";
             String sqls1=sql2.replace(",)", ")");
             lineReader.readLine(); // skip header line
      
            PreparedStatement statement = con.prepareStatement(sqls1);
             while ((lineText = lineReader.readLine()) != null) {
                String[] data = lineText.split(",");
      int a=data.length;
   System.out.println(a);
     System.out.println("Count"+count);
   for( int i=0; i<count;i++)
   {
       System.out.println(data[i]);
        statement.setString(i+1, data[i]);
               
                    
       
   }
     for( int i=count; i==count;i++)
   {
       System.out.println(asc.toEncrypt(data[i].getBytes()));
        statement.setString(count+1, asc.toEncrypt(data[i].getBytes()));
               
                    
       
   }
    for( int i=count+1; i<=a-1;i++)
   {
       System.out.println(data[i]);
        statement.setString(i+1, data[i]);
               
                    
       
   }
  v1=statement.executeUpdate();

            }
 
            lineReader.close();
 
           
//            con.commit();
//            con.close();
          
                if((v1==1))  {

                    request.setAttribute("ok", "1");
                    request.setAttribute("msg", "Added  Successfully");
                    RequestDispatcher requestdispatcher = request.getRequestDispatcher("datacsv.jsp");
                    requestdispatcher.forward(request, response);
                }else{

                    request.setAttribute("ok", "1");
                    request.setAttribute("msg", "Adding data Failed");
                    RequestDispatcher requestdispatcher = request.getRequestDispatcher("datacsv.jsp");
                    requestdispatcher.forward(request, response);
                }

//            lineReader.close();
 
          
            statement.executeBatch();   
           }else{
                request.setAttribute("ok", "1");
                    request.setAttribute("msg", "please upload CSV format file alone");
                    RequestDispatcher requestdispatcher = request.getRequestDispatcher("datacsv.jsp");
                    requestdispatcher.forward(request, response);
           }
             
            
            
            
        }else{
            request.setAttribute("ok", "1");
                    request.setAttribute("msg", "please enter the button");
                    RequestDispatcher requestdispatcher = request.getRequestDispatcher("datacsv.jsp");
                    requestdispatcher.forward(request, response);
        }
          
// 
//            connection.commit();
//            connection.close();
 
        } catch (Exception ex) {
            System.err.println(ex);
        }
            finally {
            out.close();
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
