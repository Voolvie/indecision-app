import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    handleClearSelectedOption = () => {
        this.setState(()=> ({selectedOption: undefined}))
    }
    handleRemoveAll = () =>  {
        this.setState(() => ({options: []}))  
    }
    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value'
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        } 
        this.setState((prevState)=> ({options: prevState.options.concat([option])}))
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState)=> ({
            options: prevState.options.filter((option)=> optionToRemove !== option )
        }))
    }
    handlePick = () => {
        const randomOption = Math.floor(Math.random() * this.state.options.length)  
        const option = this.state.options[randomOption]
        this.setState(() => ({selectedOption: option}))
    }
    componentDidMount = () => {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            
            if (options){
                this.setState(()=> ({options}))
            }
        } catch (e) {
            //Do Nothing :)
        }
        
    }
    componentDidUpdate = (prevProps, prevState) => {
            if (prevState.options.length != this.state.options.length){
                const json = JSON.stringify(this.state.options)
                localStorage.setItem('options', json)
            }
    }
    componentWillUnmount = () => {
        console.log('component will unmount')
    }
    render(){
        const subtitle = 'Randomize your tasks'
        
        return(
        <div>
            <Header subtitle={subtitle}/>
            <Action
             hasOptions={this.state.options.length > 0}
             handlePick={this.handlePick}
             />
            <Options
             options={this.state.options}
             handleRemoveAll={this.handleRemoveAll}
             handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
             handleAddOption={this.handleAddOption}
            />
            <OptionModal 
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption={this.handleClearSelectedOption}
            />
        </div>

        )
    }
}
