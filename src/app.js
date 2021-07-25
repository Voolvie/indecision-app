import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'

const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.children}
            <p> footer</p>
        </div>
    )
}

const appRoot = document.getElementById('app')
ReactDOM.render((
<Layout>
    <p>This is inline</p>
</Layout>), document.getElementById('app'))

// class OldSyntax {
//     constructor() {
//         this.name = 'Mike'
//         this.getGreeting = this.getGreeting.bind(this)
//     }
//     getGreeting() {
//         return `hi my name is ${this.name}`
//     }
// }
// const oldSyntax = new OldSyntax()
// const getGreeting = oldSyntax.getGreeting
// console.log(getGreeting())

// class NewSyntax {
//     name = 'Jen'
//     newgetGreeting = () => {
//         return `hi my name is ${this.name}`  
//     }
// }
// const newSyntaax = new NewSyntax
// const newgetGreeting = newSyntaax.newgetGreeting
// console.log(newgetGreeting())

// class Header extends React.Component {
//    render() {
//        return(
//            <div>
//                <h1>{this.props.title}</h1>
//                <h2>{this.props.subtitle}</h2>
//            </div>
//        )
//    }
// }



// class Action extends React.Component {

//     render() {
//         return(
//             <div>
//                 <button
//                 onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}
//                 >
//                 Randomize
//                 </button>
//             </div>
//         )
//     }
// }


// class Options extends React.Component {

//     render() {
//         return(
//             <div>
//                 <button onClick={this.props.handleRemoveAll}>Remove all</button>
//                 Options length: {this.props.options.length}
//                 {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
//             </div>
//         )
//     }
// }


// class Option extends React.Component {
//     render(){
//         return(
//             <div>
//                Option: {this.props.optionText}
//             </div>
//         )
//     }
// }


// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }

