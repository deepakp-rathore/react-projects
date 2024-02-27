import { ChildComponent } from "./ChildComponent"

export const ParentComponent = () => {  

    const greetParent = (childName) => {
        alert(`hello parent component from ${childName}`)
    }

    return <ChildComponent greetHandler={greetParent} />    
}