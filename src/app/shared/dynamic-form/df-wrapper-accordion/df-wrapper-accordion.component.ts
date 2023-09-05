import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { DFField } from 'src/app/shared/dynamic-form/dynamic-forms';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'df-wrapper-accordion',
  templateUrl: './df-wrapper-accordion.component.html',
  styleUrls: ['./../dynamic-form.component.scss']
})
export class DFWrapperAccordionComponent {

  @Input() field!: DFField;
  @Input() appearance!: MatFormFieldAppearance;
  @Input() color!: ThemePalette;
  @Input() value!: any;

  formGroup!: FormGroup;

  constructor(
    private parentFormGroup: FormGroupDirective,
    private appSvc: AppService,
  ) {
    this.formGroup = this.parentFormGroup.form as FormGroup;
  }

  ngOnInit(): void { }

}