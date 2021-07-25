const appRoot = document.getElementById('app')
class Header extends React.Component {
   render() {
       return(
           <div>
               <h1>Indecision</h1>
               <h2>Randomize your tasks</h2>
           </div>
       )
   }
}
class Action extends React.Component {
    render() {
        return(
            <div>
                <button>Randomize</button>
            </div>
        )
    }
}
class Options extends React.Component {
    render() {
        return(
            <div>
                Options component
            </div>
        )
    }
}
class AddOption extends React.Component {
    render(){
        return(
            <div>
                <button>Add option</button>
            </div>
        )
    }
}

const jsx = (
    <div>
        <Header/>
        <Action/>
        <Options/>
        <AddOption/>
    </div>
)

ReactDOM.render(jsx, appRoot)