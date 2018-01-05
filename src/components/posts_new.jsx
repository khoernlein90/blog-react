import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

class PostsNew extends Component {
    renderInput(field) {
        const { meta: { touched, error} } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                {touched ? error : ""}
                </div>
            </div>
        )
    }

    onSubmit(values){
        console.log(values)
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
                <Field
                    label="Title"
                    name="title"
                    component={this.renderInput}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderInput}
                />
                <Field
                    label="Content"
                    name="content"
                    component={this.renderInput}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-warning">Cancel</Link>
            </form>
        )
    }
}
function validate(values){
    const errors = {};

    if(!values.title){
        errors.title = "Please enter a title."
    }
    if(!values.categories){
        errors.categories = "Please enter a category."
    }
    if(!values.content){
        errors.content = "Please enter some content."
    }
    return errors;
}

export default reduxForm({
    validate,
    form: "PostsNewForm"
})(PostsNew);