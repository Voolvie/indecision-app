class VisibilityToggle extends React.Component {
    constructor(props){
        super(props)
        this.toggleVisibility = this.toggleVisibility.bind(this)
        this.state = {
        visibility: false
        }
    }
    toggleVisibility(e){
        e.preventDefault()
        this.setState((prevState) => {
           return {
               visibility: !prevState.visibility
           }
        })
    }
    render(){
        return(
            <div>
            <h1>Visibility toggle</h1>
            <form>
                <button onClick={this.toggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                <p>{this.state.visibility ? 'Hidden text' : ''}</p>
            </form>
            </div> 
        )
    }
}
ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'))








