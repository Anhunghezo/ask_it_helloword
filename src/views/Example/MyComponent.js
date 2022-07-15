import React from "react"

class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: "",
    }

    handleFname = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLname = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("Data input : ", this.state )
    }

    render() {
        return(
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.firstName}
                        onChange = {(event) => this.handleFname(event) }
                        /><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.lastName}
                        onChange = {(event) => this.handleLname(event) }
                        /><br/><br/>
                    <input type="submit" value="Submit"
                        onClick= {(event)=> this.handleSubmit(event) }
                    />
                </form> 
            </>
        )
    }
}

export default MyComponent;