import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent implements OnInit {

  // `appearance` Input from datetime main component
  @Input() appearance!: MatFormFieldAppearance;

  // `color` Input from datetime main component
  @Input() color!: string;

  // `labelText` Input from datetime main component
  @Input() labelText!: any;

  // `placeholderText` Input from datetime main component
  @Input() placeholderText!: any;

  @Input() fieldControl!: FormControl;

  result!: string;

  constructor() { }

  ngOnInit(): void {
    this.labelText = this.labelText || 'Choose a date';
    this.placeholderText = this.placeholderText || 'Choose a date';
    this.result = this.result || '';
  }

}