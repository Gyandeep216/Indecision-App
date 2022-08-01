class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility : !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                <p>{this.state.visibility && 'Here are some details.'}</p>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// let visibility = false;

// const onDetails = () => {
//     visibility = !visibility;    

//     renderToggle();
// };

// const appRoot = document.getElementById('app');

// const renderToggle = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick = {onDetails}>
//                 {visibility ? 'Hide Details' : 'Show Details'}
//             </button>
//             {visibility && <p>Here are some details !</p>}
//         </div>
//     );

    
//     ReactDOM.render(template, appRoot);
// };

// renderToggle();