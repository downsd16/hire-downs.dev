import { Component, OnInit } from '@angular/core';
import { SanityService } from '../service/sanity.service';
import { Project } from '../service/project';

@Component({
  selector: 'project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  constructor(
    private sanityService: SanityService
  ) { }

    isExpanded: boolean = false;

  projects: Project[] = [];

  imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }

  async getProjects(): Promise<Project[]> {
    try {
      this.projects = await this.sanityService.getProjects();
      /* Sorting the projects by priority. */
      this.projects.sort((a, b) => {
        if (a.project_priority > b.project_priority) {
            return -1;
        } else if (a.project_priority < b.project_priority) {
            return 1;
        } else {
            return 0;
        }})
    } catch (e) {
      
    }
    
    return this.projects;
  }

  ngOnInit(): void {
    this.getProjects();
  }

}
