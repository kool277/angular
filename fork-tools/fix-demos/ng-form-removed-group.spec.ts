// Fix 4 (forms): NgForm does not throw when a parent group is gone before a deferred registration.
// The crash depends on timing in real templates, so this test calls the directives directly, in
// the order that leads to it.
import {NgForm, NgModel, NgModelGroup} from '@angular/forms';

describe('fix 4: NgForm and a removed parent group', () => {
  it('skips the registration instead of throwing', async () => {
    // `process` without Node.js types, so that the test compiles in any Angular CLI workspace.
    const nodeProcess = (globalThis as any).process;
    const errors: unknown[] = [];
    const onRejection = (reason: unknown) => errors.push(reason);
    nodeProcess.on('unhandledRejection', onRejection);

    const ngForm = new NgForm([], []);
    const person = new NgModelGroup(ngForm, [], []);
    person.name = 'person';
    const login = new NgModel(person, [], [], null!);
    login.name = 'login';

    ngForm.addFormGroup(person);
    ngForm.removeFormGroup(person);
    ngForm.addControl(login);
    await new Promise((resolve) => setTimeout(resolve, 10));

    nodeProcess.off('unhandledRejection', onRejection);
    // Stock: TypeError: Cannot read properties of null (reading 'registerControl')
    expect(errors).toEqual([]);
    expect(ngForm.form.get('person')).toBeNull();
  });
});
