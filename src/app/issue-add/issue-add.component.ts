import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-add',
  templateUrl: './issue-add.component.html',
  styleUrls: ['./issue-add.component.css'] //issueAdd: any = {}; 
})
export class IssueAddComponent {
  issueAdd: any = {}; 


  constructor(
    //private route: ActivatedRoute,
    private route: ActivatedRoute,
    private IssueService:IssueService,
    
  ) {
  }
  ngOnInit(): void {
  }

  goBack(): void {
   // this.location.back();
  }

  save(): void {

    //this.issueAdd.birthDate = new Date(this.issueAdd.birthDate);
    //console.log(this.issueAdd.birthDate);
    //añadir al eventAdd el idUser despues de haberte registrado
      this.IssueService.addIssue(this.issueAdd)
        .subscribe(() => this.goBack());
    
  }
}
