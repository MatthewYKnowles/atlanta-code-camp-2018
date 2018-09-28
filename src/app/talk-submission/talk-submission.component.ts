import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SubmissionService} from '../services/submission.service';
import {Submission} from '../models/submission';
import {submissionTitleValidator} from '../validators/submission-title-validator';

@Component({
  selector: 'app-talk-submission',
  templateUrl: './talk-submission.component.html',
  styleUrls: ['./talk-submission.component.css']
})
export class TalkSubmissionComponent implements OnInit {
  form: FormGroup;
  successfulSubmission: boolean;

  constructor(private submissionService: SubmissionService) {
    this.setForm();
  }

  ngOnInit() {
  }

  setForm() {
    this.form = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'submissionTitle': new FormControl('', submissionTitleValidator),
      'abstract': new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    const form = this.form.value;
    const submission: Submission = new Submission(form.firstName, form.lastName, form.email, form.submissionTitle, form.abstract);
    this.submissionService.postSubmission(submission).subscribe(response => {
      if (response) {
        this.successfulSubmission = true;
      }
    });
  }
}
