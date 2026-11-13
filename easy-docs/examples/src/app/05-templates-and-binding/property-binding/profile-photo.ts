import {Component} from '@angular/core';

@Component({
  selector: 'app-profile-photo',
  template: `
    <!-- #docregion bindings -->
    <img [src]="photoUrl" alt="Photo of {{ name }}" width="80" />
    <input [value]="name" [readOnly]="!editing" />
    <button type="button" [disabled]="editing" (click)="editing = true">Edit</button>
    <!-- #enddocregion bindings -->
  `,
})
export class TplProfilePhoto {
  name = 'Amina';
  photoUrl = '/images/amina.png';
  editing = false;
}
