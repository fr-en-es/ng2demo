import {Component} from "angular2/core";
import {Dropdown} from "./component/dropdown/dropdown";
import {DropdownDirective} from "./directive/dropdown/dropdown";
@Component({
    selector: 'my-app',
    template: `<h1>Angular 2 App</h1> <ng2dropdown></ng2dropdown>`,
    directives:[Dropdown]
    
})

export class AppComponent{}
