import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selectedHeaderMenu = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSelect(feature: string){
    this.selectedHeaderMenu.emit(feature);
  }

}
