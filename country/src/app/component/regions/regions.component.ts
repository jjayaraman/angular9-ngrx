import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * Reusable component for dropdown
 * 
 * @author Jayakumar Jayaraman
 */
@Component({
  selector: 'regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {

  constructor() { }

  // Inputs for the reusable component
  @Input() label: string
  @Input() options: object[]
  @Input() optionLabel: string
  @Input() placeholder: string
  // Event 
  @Output() onChange = new EventEmitter()


  ngOnInit(): void {
  }

  // onChange event for dropdown
  onChangeEvent($event: MouseEvent) {
    this.onChange.emit($event)
  }

}
