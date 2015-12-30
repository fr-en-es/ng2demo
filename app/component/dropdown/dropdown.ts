import {Component, HostListener, Directive, Input} from "angular2/core";
import {NgFor} from "angular2/common";
@Component({
    selector: "ng2dropdown",
    template: `<div class="dropdown" (click)="onSelect()" [ngClass] = {open:open}>
    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        {{selectedVal}}
        <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1" >
        <li *ngFor="#item of options;#i = index"><a href="#" (click)="onItemSelect(i)">{{item}}</a></li>
        
    </ul>
    </div>`
    
})

export class Dropdown{
  
  selectedVal:String = "Select";
   options:any = ["Action", "Comedy", "Romance", "Drama"];
    @Input() open = false;
   // @HostListener('click')
    onSelect()
    {
        this.open = !this.open;     
    }
    onItemSelect(index)
    {
        this.selectedVal = this.options[index];
    }
    
    
}
