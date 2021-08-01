package imports;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author admin
 */
import java.io.*;
import java.sql.*;
 
public class CsvDataexample {
 
 public CsvDataexample(String as){
        String jdbcURL = "jdbc:mysql://localhost:3306/ontology";
        String username = "root";
        String password = "root";
 
//        String csvFilePath = "E:\\cancer.csv";
 String csvFilePath = as;
        int batchSize = 20;

        Connection connection = null;
 
        try {
              File file = new File(csvFilePath);
               
                file.getName();
            connection = DriverManager.getConnection(jdbcURL, username, password);
            connection.setAutoCommit(false);
 Statement st=connection.createStatement(); 
 Statement st1=connection.createStatement(); 
           
             BufferedReader lineReader = new BufferedReader(new FileReader(csvFilePath));
            String lineText = null;
             int count = 0;String a1="",a2="",a3="";    String sql1="",sql2="";
             lineReader.lines();
             if ((lineText = lineReader.readLine()) != null) {
               String[] data = lineText.split(",");
      int a=data.length; 
        sql1 = "CREATE TABLE  " +file.getName().replace(".csv", "")+"(";
        for( int i=0; i<a;i++)
          {
//       System.out.println(data[i]);
//        statement.setString(i+1, data[i]);
 a1=data[i]+" VARCHAR(255)";
        a2=a2+data[i]+",";   
          int v=st.executeUpdate("insert into ddatabase values('"+data[i]+"','"+file.getName().replace(".csv", "")+"')");
        a3=a3+"?,";
sql1=sql1+" "+a1+",";
  
        }
        sql1=sql1+")"; 
        
       String sqls= sql1.replace(",)", ")");
       
               
//       System.out.println(sql1);
       System.out.println(sqls+";");
        st.executeUpdate(sqls);
        
             }
             sql2 = "INSERT INTO "+file.getName().replace(".csv", "")+"("+a2+") values ("+a3+")";
             String sqls1=sql2.replace(",)", ")");
             lineReader.readLine(); // skip header line
      // String sql = "INSERT INTO cancer VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            PreparedStatement statement = connection.prepareStatement(sqls1);
             while ((lineText = lineReader.readLine()) != null) {
                String[] data = lineText.split(",");
      int a=data.length;
   System.out.println(a);
   for( int i=0; i<=a-1;i++)
   {
       System.out.println(data[i]);
        statement.setString(i+1, data[i]);
               
                    
       
   }statement.executeUpdate();

            }
 
            lineReader.close();
 
           
            connection.commit();
            connection.close();
 
        } catch (IOException ex) {
            System.err.println(ex);
        } catch (SQLException ex) {
            ex.printStackTrace();
 
            try {
                connection.rollback();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
   }
       
 
    
}
