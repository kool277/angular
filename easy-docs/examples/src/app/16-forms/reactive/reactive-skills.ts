import {Component, inject} from '@angular/core';
import {NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-forms-reactive-skills',
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="skillsForm">
      <label>Name <input formControlName="name" /></label>
      <div formArrayName="skills">
        @for (skill of skillsForm.controls.skills.controls; track skill) {
          <input [formControlName]="$index" />
        }
      </div>
      <button type="button" (click)="addSkill()">Add a skill</button>
    </form>
  `,
})
export class FormsReactiveSkills {
  // #docregion builder
  private readonly fb = inject(NonNullableFormBuilder);

  readonly skillsForm = this.fb.group({
    name: ['', Validators.required],
    skills: this.fb.array([this.fb.control('Angular')]),
  });

  addSkill() {
    this.skillsForm.controls.skills.push(this.fb.control(''));
  }
  // #enddocregion builder
}
