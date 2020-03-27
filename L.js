class Person {

}

class Member  extends Person{
    acess(){
        console.log("you have acceess")
    }
}

class Guest extends Person{
    // isGuest = true
}

class Frontend extends Member{
    canCreateFrontend(){

    }
}

class Backend extends Member{
    canCreateBackend(){

    }
}


function  openSecretDoor(member) {
    member.acess()
}

class PersonFromDiffrentCompany extends Guest{
    acess() {
        throw new Error('You have no aceess,go to home')
    }
}
openSecretDoor(new Frontend())
openSecretDoor(new Frontend())
// openSecretDoor(new PersonFromDiffrentCompany())




class Component {

    // isComponent = true
}

class ComponentWithTemplate extends Component{
    render() {
        return `div`;
    }
}

class HighOrderComponent extends ComponentWithTemplate{
    
}

class HeaderComponent  extends ComponentWithTemplate{
    onInit(){

    }
}

class ForterCmponent extends ComponentWithTemplate{
    afterInit(){

    }
}


function renderComponent(component) {
    console.log(component.render());
}

class HOC extends HighOrderComponent{


    wrapComponent(){
        component.wrapper =true
        return component
    }
}

renderComponent(new HeaderComponent())
renderComponent(new ForterCmponent())
