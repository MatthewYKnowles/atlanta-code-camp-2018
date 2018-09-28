import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkSubmissionComponent } from './talk-submission.component';
import {ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {of} from 'rxjs';
import {SubmissionService} from '../services/submission.service';
import {Submission} from '../models/submission';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TalkSubmissionComponent', () => {
  let component: TalkSubmissionComponent;
  let fixture: ComponentFixture<TalkSubmissionComponent>;
  let submissionService: SubmissionService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkSubmissionComponent ],
      imports: [ReactiveFormsModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkSubmissionComponent);
    component = fixture.componentInstance;
    submissionService = fixture.debugElement.injector.get(SubmissionService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit a talk with all fields filled in', () => {
    fixture.debugElement.query(By.css('[id=firstName]')).nativeElement.value = 'Matthew';
    fixture.debugElement.query(By.css('[id=firstName]')).nativeElement.dispatchEvent(new Event('input'));
    fixture.debugElement.query(By.css('[id=lastName]')).nativeElement.value = 'Knowles';
    fixture.debugElement.query(By.css('[id=lastName]')).nativeElement.dispatchEvent(new Event('input'));
    fixture.debugElement.query(By.css('[id=email]')).nativeElement.value = 'Matthew@GreaterSum.com';
    fixture.debugElement.query(By.css('[id=email]')).nativeElement.dispatchEvent(new Event('input'));
    fixture.debugElement.query(By.css('[id=submission-title]')).nativeElement.value = 'Test Drive Angular';
    fixture.debugElement.query(By.css('[id=submission-title]')).nativeElement.dispatchEvent(new Event('input'));
    fixture.debugElement.query(By.css('[id=abstract]')).nativeElement.value = 'Using tests';
    fixture.debugElement.query(By.css('[id=abstract]')).nativeElement.dispatchEvent(new Event('input'));
    expect(component.form.valid).toBeTruthy();
    spyOn(submissionService, 'postSubmission').and.returnValue(of({}));
    component.onSubmit();
    const expectedSubmission: Submission = new Submission('Matthew', 'Knowles',
      'Matthew@GreaterSum.com', 'Test Drive Angular', 'Using tests');
    expect(submissionService.postSubmission).toHaveBeenCalledWith(expectedSubmission);
  });

  it('should make the form invalid if blockchain is in the title', () => {
    fixture.debugElement.query(By.css('[id=firstName]')).nativeElement.value = 'Matthew';
    fixture.debugElement.query(By.css('[id=firstName]')).nativeElement.dispatchEvent(new Event('input'));
    fixture.debugElement.query(By.css('[id=lastName]')).nativeElement.value = 'Knowles';
    fixture.debugElement.query(By.css('[id=lastName]')).nativeElement.dispatchEvent(new Event('input'));
    fixture.debugElement.query(By.css('[id=email]')).nativeElement.value = 'Matthew@GreaterSum.com';
    fixture.debugElement.query(By.css('[id=email]')).nativeElement.dispatchEvent(new Event('input'));
    fixture.debugElement.query(By.css('[id=submission-title]')).nativeElement.value = 'Fun with blockchain';
    fixture.debugElement.query(By.css('[id=submission-title]')).nativeElement.dispatchEvent(new Event('input'));
    fixture.debugElement.query(By.css('[id=abstract]')).nativeElement.value = 'Using tests';
    fixture.debugElement.query(By.css('[id=abstract]')).nativeElement.dispatchEvent(new Event('input'));
    expect(component.form.valid).toBeFalsy();
  });
});
