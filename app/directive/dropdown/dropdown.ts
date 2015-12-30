import {HostListener, Directive, Input} from "angular2/core";
// this works on dom routing with depth first search for selector
@Directive({
    selector:"[ng2bdd]",
    host:{'[class.open]':'open'}
})
export class DropdownDirective{

    @Input() open = false;
    @HostListener('click')
    toggle()
    {
        this.open = !this.open;
        
        
    }
        
}