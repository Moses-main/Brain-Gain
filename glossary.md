# JSX =

Combination of html and js
e.g `return <h1>{name}</h1>;`

# Components

Javascript function that returns a
jsx object.

<!-- This is a component -->
<!-- Components returns a ui -->

`function GetNameComponent=()=>{
    return <h1>{name}</h1>;
}`

<!-- while this is a javascript function -->

`function GetName=()=>{
    return "Pedro";
}`

# props

These are javascript objects that exist as a function argument.
`
const User= (props)=>{
return {

<div>props.name</div>
 <div>props.agename</div>
 <div>props.enail</div>
}}
`

# State

A variable that hold data
`const [name, setName] = useState(<default valu>)`

Then defining a function that works with the state

````const changeName =() =>{
setName(!name); }```
// this ends up toogling the default value and the given value of the property
````

Then passing the function to an element on the page
`<button onClick={changeName}>`
