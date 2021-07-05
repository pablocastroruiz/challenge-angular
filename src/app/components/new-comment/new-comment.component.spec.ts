import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { NewCommentComponent } from './new-comment.component';

describe('NewCommentComponent', () => {
  let component: NewCommentComponent;
  let fixture: ComponentFixture<NewCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCommentComponent ],
      providers: [FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('invalid form when required fields are empty', () => {
    expect(component.commentForm.valid).toBeFalsy();
  });

  it('invalid form when name length is greater than 50', () => {
    const nameTxt = "Lorem ipsum dolor sit amet, consectetur adipiscing.";

    component.commentForm.controls.name.setValue(nameTxt);
    component.commentForm.controls.email.setValue("test@mail.com");
    component.commentForm.controls.body.setValue("Test body");

    expect(component.commentForm.valid).toBeFalsy();
  });

  it('invalid form when email length is greater than 50', () => {
    const emailTxt = "loremipsum@dolorsitametconsecteturadipiscingelitsed";

    component.commentForm.controls.name.setValue("Test Name");
    component.commentForm.controls.email.setValue(emailTxt);
    component.commentForm.controls.body.setValue("Test body");

    expect(component.commentForm.valid).toBeFalsy();
  });

  it('invalid form when body length is greater than 200', () => {
    const bodyTxt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
    + " do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
    + " minim veniam, quis nostrud exercitation ullamco laboris nisi ut al";

    component.commentForm.controls.name.setValue("Test Name");
    component.commentForm.controls.email.setValue("test@mail.com");
    component.commentForm.controls.body.setValue(bodyTxt);

    expect(component.commentForm.valid).toBeFalsy();
  });

  it('invalid form when email is not a valid format', () => {
    component.commentForm.controls.name.setValue("Test Name");
    component.commentForm.controls.email.setValue("invalid email");
    component.commentForm.controls.body.setValue("Test body");

    expect(component.commentForm.valid).toBeFalsy();
  });
});
