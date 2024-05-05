import React from 'react'

// class 的概念以后会在caleb 那里再学。这里不要纠结。能大致看懂就可以了

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        console.log('mounted!');
    }

    componentDidUpdate() {
        console.log('updated!');
    }

    componentWillUnmount() {
        console.log('cleanup');
    }


    clickedBotton() {
        this.setState({count: this.state.count + 1});
        console.log("clicked");
        this.props.destroy(false);
    }


    render() {
        return (
            <div>
                <p>Clicked: {this.state.count}</p>
                <button onClick={()=> this.clickedBotton()}  className='bg-yellow-500 text-white rounded-lg py-1 px-2 mt-4'>Click Me!</button>
            </div>
        );
    }
}