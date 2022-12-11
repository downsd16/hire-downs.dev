import { Component, OnInit } from '@angular/core';
import { SanityService } from '../service/sanity.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { Project } from '../service/project';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  constructor(
    private sanityService: SanityService
  ) { }

  projects: Project[] = [];

  imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }

  async getProjects(): Promise<Project[]> {
    this.projects = await this.sanityService.getProjects();
    return this.projects;
  }

  ngOnInit(): void {
    this.getProjects();
  }

}
