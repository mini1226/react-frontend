import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);


    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res) =>{
            console.log(res)
            this.setState({employees: res.data});

        });
    }

    editEmployee(id) {
        this.props.history.push(`/updateEmployees/${id}`);
    }

    addEmployee() {
        this.props.history.push('/addemployees')
    }
    render() {
        return (
            <div>
               <h2 className="text-center" >Employees List</h2>
               <div className="row">
                   <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                   <table className="table table-striped table-bordered">
                       <thead>
                           <tr>
                               <th>Employee First Name</th>
                               <th>Employee Last Name</th>
                               <th>Employee Email Id</th>
                               <th>Employee Actions</th>
                           </tr>
                       </thead>
                       <tbody>
                       {this.state.employees.map((employees) => {
                        return (
                            <tr key={employees.id}>
                                <td>{employees.firstname}</td>
                                <td>{employees.lastname}</td>
				                <td>{employees.email}</td>
                                <td>
                                    <button onClick = { () => this.editEmployee(employees.id)} className="btn btn-info">Update</button>
                                </td>
                            </tr>
                        )

                    })}
                       </tbody>
                   </table>
                   </div> 
            </div>
        );
    }
}

export default ListEmployeeComponent;