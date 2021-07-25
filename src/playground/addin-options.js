console.log('App is running')

const object = {
    title: 'Book title',
    subtitle: 'Book subtitle',
    options: []
}


const onFormSubmit = (e) => {
    e.preventDefault() //stop page refresh
    console.log('form submitted')

    const option = e.target.elements.option.value

    if (option) {
        object.options.push(option)
        e.target.elements.option.value = ''
        renderFormApp()
    }
}
const wipeData = (e) => {
    e.preventDefault()
    console.log('data deleted')

    object.options = []
    renderFormApp()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * object.options.length)
    const option = object.options[randomNum]
    alert(option)
    renderFormApp()
}
const renderFormApp = () => {
const template = (
    <div>
        <h1>{object.title}</h1>
        {object.subtitle ? <p>Subtitle: {object.subtitle}</p> : 'No subtitle'}
        <p>{object.options.length > 0 ? 'Opcje:' : 'Brak opcji'}</p>
        <p>{object.options.length}</p>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add option</button>
            <button disabled={object.options.length === 0} onClick={wipeData}>Wipe all</button>
            <button disabled={object.options.length === 0} onClick={onMakeDecision}>Random option</button>
            <ol>
                {object.options.map((option) => {
                    return <li key={option}>Option: {option}</li>
                })}
            </ol>
        </form>
    </div>
)
ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById('app')

renderFormApp()



