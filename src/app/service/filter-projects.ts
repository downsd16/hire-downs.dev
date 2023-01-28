import { Pipe, PipeTransform } from "@angular/core";
import { Project } from "./project";

@Pipe({
    name: 'filterProjects'
  })
  export class FilterProjectsPipe implements PipeTransform {
    transform(projects: Project[], skill: string): Project[] {
      if (!projects) {
        return [];
      }
      if (!skill) {
        return projects;
      }
      return projects.filter(project => project.project_tags.indexOf(skill) !== -1);
    }
  }
  