import { Component } from '@angular/core';

@Component({
  selector: 'app-issue-add',
  templateUrl: './issue-add.component.html',
  styleUrls: ['./issue-add.component.css']
})
export class IssueListComponent {
  issueAdd: any = {}; 

  constructor(
    //private route: ActivatedRoute,
    private IssueService: IssueListComponent,
    private location: Location,
    
  ) {
  }
  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {

    this.issueAdd.birthDate = new Date(this.issueAdd.birthDate);
    console.log(this.issueAdd.birthDate);
    //añadir al eventAdd el idUser despues de haberte registrado
      this.issueService.addUser(this.issueAdd)
        .subscribe(() => this.goBack());
    
  }
}
