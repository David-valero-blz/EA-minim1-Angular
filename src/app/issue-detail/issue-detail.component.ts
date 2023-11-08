import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent {
  issue: Issue | undefined;

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getIssue();
  }
  // Función que obtiene los detalles del user que ha sido especificado por el usuario
  getIssue(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    console.log("id", id);
    this.issueService.getIssue(id)
      .subscribe(issue => this.issue = issue);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.issue) {
      //deconstrucció
        let{_id, createdAt, updatedAt, ...savedIssue} = this.issue;
        this.issueService.updateIssue(this.issue._id, savedIssue)
          .subscribe(() => this.goBack());
      }
  }
  
}



  