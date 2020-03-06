import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * Reusable drop down component
 * @author Jayakumar Jayaraman
 */
@Component({
  selector: 'drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  constructor() { }

  @Input() options: object[]
  @Input() optionalLabel: string
  @Input() placeholder: string
  @Output() onChange = new EventEmitter()


  ngOnInit(): void {
  }

  // onChange event for dtopdown
  onChangeEvent($event: MouseEvent) {
    this.onChange.emit($event)
  }

}
