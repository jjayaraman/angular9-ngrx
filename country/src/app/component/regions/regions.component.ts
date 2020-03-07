import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {

  constructor() { }

  @Input() options: object[]
  @Input() optionLabel: string
  @Input() placeholder: string
  @Output() onChange = new EventEmitter()


  ngOnInit(): void {
  }

  // onChange event for dtopdown
  onChangeEvent($event: MouseEvent) {
    this.onChange.emit($event)
  }

}
