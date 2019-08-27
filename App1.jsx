import React from 'react';

class App1 extends React.Component {
    constructor(){
        super();
        this.state = {
            data: [
                {
                    "id":1,
                    "name":"foo",
                    "age":"20"
                },
                {
                    "id":2,
                    "name":"boo",
                    "age":"30"
                },
                {
                    "id":3,
                    "name":"voo",
                    "age":"30"
                },
            ]
        }
    }
	render(){
		return (
            <div>
                <Header headerProp={this.props.headerProp} />
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
                    </tbody>
                </table>
                <Content contentProp={this.props.contentProp}/>
            </div>
        );
	}
}

class Header extends React.Component {
    render(){
        return(
            <div>
                <h1>Header = {this.props.headerProp}</h1>
            </div>
        );
    }
}

class Content extends React.Component {
    render(){
        return(
            <div>
                <h1>Content = {this.props.contentProp}</h1>
                <p>This is my content!!! Wow!</p>
            </div>
        );
    }
}

class TableRow extends React.Component {
    render(){
        return(
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}

App1.defaultProps = {
    headerProp: "Header from props...",
    contentProp:"Content from props..."
 }

export default App1;

