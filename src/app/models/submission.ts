export class Submission {
  LastName: string;
  FirstName: string;
  Email: string;
  Title: string;
  Abstract: string;

  constructor(firstName: string, lastName: string, email: string, title: string, abstract: string) {
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Email = email;
    this.Title = title;
    this.Abstract = abstract;

  }
}
