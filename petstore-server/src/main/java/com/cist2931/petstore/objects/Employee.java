package com.cist2931.petstore.objects;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Employee {
    private int empID;
    private String username;
    private String password;
    private String firstName;
    private String lastName;

    public Employee(ResultSet rs) throws SQLException {
        // initialize from result set
        empID = rs.getInt("EmpID");
        username = rs.getString("Username");
        password = rs.getString("Password");
        firstName = rs.getString("FirstName");
        lastName = rs.getString("LastName");
    }

    public boolean update(Connection dbConnection) throws SQLException {
        return updateEmployee(dbConnection, this);
    }

    public boolean insert(Connection dbConnection) throws SQLException {
        return insertEmployee(dbConnection, this);
    }

    public boolean delete(Connection dbConnection) throws SQLException {
        return deleteEmployee(dbConnection, this.empID);
    }

    @Override
    public String toString() {
        return "Employee{" +
                "empID=" + empID +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }

    public int getEmpID() {
        return empID;
    }

    public void setEmpID(int empID) {
        this.empID = empID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public static Employee getEmployeeByID(Connection dbConnection, int id) throws SQLException {
        final String selectQuery = "SELECT * FROM Employee WHERE EmpID = ?";
        PreparedStatement statement = dbConnection.prepareStatement(selectQuery);
        statement.setInt(1, id);

        ResultSet resultSet = statement.executeQuery();
        if (resultSet.next()) {
            return new Employee(resultSet);
        } else return null;
    }

    public static boolean insertEmployee(Connection dbConnection, Employee employee) throws SQLException {
        final String insertQuery = "INSERT INTO Employee(EmpID, Username, Password, FirstName, LastName) values (?, ?, ?, ?, ?)";
        PreparedStatement statement = dbConnection.prepareStatement(insertQuery);
        statement.setInt(1, employee.empID);
        statement.setString(2, employee.username);
        statement.setString(3, employee.password);
        statement.setString(4, employee.firstName);
        statement.setString(5, employee.lastName);

        return statement.executeUpdate() == 1;
    }

    public static boolean updateEmployee(Connection dbConnection, Employee employee) throws SQLException {
        final String updateQuery = "UPDATE Employee set Username = ?, Password = ?, FirstName = ?, LastName = ? WHERE EmpID = ?";
        PreparedStatement statement = dbConnection.prepareStatement(updateQuery);
        statement.setString(1, employee.username);
        statement.setString(2, employee.password);
        statement.setString(3, employee.firstName);
        statement.setString(4, employee.lastName);
        statement.setInt(5, employee.empID);

        return statement.executeUpdate() == 1;
    }

    public static boolean deleteEmployee(Connection dbConnection, int empID) throws SQLException {
        final String deleteQuery = "DELETE FROM Employee WHERE EmpID = ?";
        PreparedStatement statement = dbConnection.prepareStatement(deleteQuery);
        statement.setInt(1, empID);

        return statement.executeUpdate() == 1;
    }
}
