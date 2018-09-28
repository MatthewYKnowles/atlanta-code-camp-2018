import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Submission} from '../models/submission';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  constructor(private httpClient: HttpClient) { }

  postSubmission(submission: Submission): Observable<any> {
    return this.httpClient.post('http://localhost:51260/api/submissions', submission);
  }
}
