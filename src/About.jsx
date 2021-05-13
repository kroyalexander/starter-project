import React from 'react';

const divStyle = {
    color:'white'
};

class About extends React.Component {
    
    render() {
        /*return (
            <div style={divStyle}>
                <h2>About Page</h2>
                <main>
                    <p>This section contains information about...</p>
                </main>
            </div>
        )*/
        return (
            <div className="test">
              <h1>Test of {this.props.name}</h1>
              <ul>
                <li>let</li>
                <li>me</li>
                <li>cri</li>
              </ul>
            </div>
        );
    }
}



export default About;