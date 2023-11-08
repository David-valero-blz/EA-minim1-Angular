import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  issues: Issue[];

  constructor(private issueService: IssueService) { }

  ngOnInit() {
    this.getIssues();
  }

  getIssues(): void {
    this.issueService.getIssues()
     .subscribe(issues => this.issues = issues);
  }

}