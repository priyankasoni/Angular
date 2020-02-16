import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, ViewChild } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{

  constructor(private elRef:ElementRef, private renderer: Renderer2) {}
  @ViewChild('dropdownMenu', {static:false}) dropDownMenuRef: ElementRef;
  ngOnInit(){
  }


  @HostBinding('class.show') isOpen=false;

  @HostListener('click') click(eventData : Event){
    this.isOpen = !this.isOpen;

    this.dropdownMenuToggle();

  }
  dropdownMenuToggle(){
    let dropdownMenu = this.elRef.nativeElement.querySelector('.dropdown-menu');
    if(this.isOpen){
      this.renderer.addClass(dropdownMenu, "show");
    } else {
      this.renderer.removeClass(dropdownMenu, "show");
    }
  }
}

