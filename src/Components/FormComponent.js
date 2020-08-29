import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class FormComponent extends React.Component {

    state = {
        userName: '',
        author: '',
        formError: {
            nameError: '',
            authorError: ''
        },
        formValidate: false
    }

    nameHandler = (event) => {
        this.setState({
            userName: event.target.value,
        });
        if (event.target.value.length > 0 && event.target.value.length <= 4) {
            this.setState({
                formError: {
                    nameError: "*Title needs to have at least 4 characters",
                    authorError: this.state.formError.authorError
                },
                formValidate: true
            })
        }
        else {
            this.setState({
                formError: {
                    nameError: "",
                    authorError: this.state.formError.authorError
                },
                formValidate: false
            })
        }
    }

    authorHandler = (event) => {
        this.setState({
            author: event.target.value
        });
        if (event.target.value.length > 0 && event.target.value.length <= 4) {
            this.setState({
                formError: {
                    nameError: this.state.formError.nameError,
                    authorError: "*Author needs to have at least 3 letters"
                },
                formValidate: true
            })
        }
        else {
            this.setState({
                formError: {
                    nameError: this.state.formError.nameError,
                    authorError: ""
                },
                formValidate: false
            })
        }
    }
    render() {
        return (
            <div className="container ">

                <div className="card mx-auto shadow-lg p-3 mb-5 text-white bg-secondary " style={{ width: "400px" }}>
                    <div className="caed-body ">
                        <form className="align-items-center">
                            <div className="form-group">
                                <label for="userName">Title:</label>
                                <h6 className="text-danger">{this.state.formError.nameError}</h6>
                                <input type="text" className="form-control" name="userName" id="userName" value={this.state.userName}
                                    onChange={this.nameHandler} placeholder="Title" ></input>
                                
                                
                                
                            </div>

                            <div className="form-group">
                                <label for="author">Author:</label>
                                <h6 className="text-danger">{this.state.formError.authorError}</h6>
                                <input type="text" className="form-control" name="author" id="author" value={this.state.author}
                                    onChange={this.authorHandler} placeholder="Author"></input>
                            </div>


                            <div class="form-group">
                                <label class="mr-md-4" for="inlineFormCustomSelect">Genre:</label>
                                <select name="option" id="inlineFormCustomSelect" className="form-control">
                                    <option selected value="0">select here</option>
                                    <option value="1">Mystery thriller</option>
                                    <option value="2">Fiction</option>
                                    <option value="3">Non-fiction</option>
                                </select>
                            </div>
                            <button type="button" className="btn btn-success" disabled={this.state.formValidate}>Save</button>
                        </form>
                       
                    </div>
                </div>

            </div>

        );
    }
}

export default FormComponent;