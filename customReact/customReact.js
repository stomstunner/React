// now we make the custom reder fucntion woh kcuh nahi karege bass hamre object ko tag me convert kar denge aur usse page pe render kar denge 

function customRender(reactElement, container){
    /*
    // lets make the element 
    const domElement = document.createElement(reactElement.type)
    // yaha ham hard coded value bhi de sakte the  'a'

    // put the vlaue in its inner html 
    domElement.innerHTML = reactElement.children

    // now we set the attribute of the elements 
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    // now we render this things to page 
    container.appendChild(domElement)
    */

    // lets do the above work but using the for in loop 

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const  prop  in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])    
    }
    container.appendChild(domElement)


}



const container = document.querySelector('#root')

// now we make the object that will eventually converted to the tag by react 
const reactElement ={
    type:'a',
    props:{
        target:"_blank",
        href:"https://www.google.com"
    },
    children : 'Click me & go to google'
}

// and we call the customrender funtion that takes the kya object lena hai aur kaha render karna hai 
customRender(reactElement, container)