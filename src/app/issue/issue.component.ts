import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssueService } from '../issue.service'; 

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  issues: Issue[] = [];

  constructor(private issueService: IssueService) { }
  
  //Ordena obtener los 'events' cuando se inicializa la pagina
  ngOnInit(): void {
    this.getIssues();
  }
  // Obtiene los 'heroes' proporcionados por el HeroService que a la vez le llegan del fichero de mock heroes
  getIssues(): void {
    this.issueService.getIssues()
    .subscribe(issues => this.issues = issues);
  }
  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.issueService.addIssue({ title } as Issue)
      .subscribe(issues => {
        this.issues.push(issues);
      });
  }
  delete(issue: Issue): void {
    this.issues = this.issues.filter(h => h !== issue);
    this.issueService.deleteIssue(issue._id).subscribe();
  }

  
}
