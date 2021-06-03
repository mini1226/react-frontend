import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id, 
            firstname: '',
            lastname: '',
            emailid: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);

    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({firstname: employee.firstname},{lastname: employee.lastname},{emailid: employee.emailid});
        });
    }

    updateEmployee=(e)=> {
        alert('A name was submitted: ' + this.state.firstname + this.state.lastname + this.state.emailid);
        e.preventDefault();
        let employee = {firstname: this.state.firstname, lastname: this.state.lastname, emailid: this.state.emailid};
        console.log(`employee : `,employee)

    
    }

        
    changeFirstNameHandler= (event) =>{
        this.setState({firstname: event.target.value});
    }
    changeLastNameHandler= (event) =>{
        this.setState({lastname: event.target.value});
    }
    changeEmailHandler= (event) =>{
        this.setState({emailid: event.target.value});
    }
    cancel(){
        this.props.history.push('/employees')
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Employee Details</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name :</label>
                                        <input placeholder="First Name" name = "firstname" className = "form-control"
                                         value={this.state.firstname} onChange={this.changeFirstNameHandler}/>
                                    </div>


                                    <div className="form-group">
                                        <label>Last Name :</label>
                                        <input placeholder="Last Name" name = "lastname" className = "form-control"
                                         value={this.state.lastname} onChange={this.changeLastNameHandler}/>
                                    </div>


                                    <div className="form-group">
                                        <label>EmailId :</label>
                                        <input placeholder="Email" name = "emailid" className = "form-control"
                                         value={this.state.emailid} onChange={this.changeEmailHandler}/>
                                    </div>


                                    <button type="button" className="btn btn-success" onClick={this.updateEmployee}>UPDATE</button>
                                      
                                     
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>CANCEL</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        );
    }
}

export default UpdateEmployeeComponent;