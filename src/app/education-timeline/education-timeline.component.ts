import { Component, OnInit } from '@angular/core';
import { Education } from '../service/education';
import { SanityService } from '../service/sanity.service';

@Component({
  selector: 'education-timeline',
  templateUrl: './education-timeline.component.html',
  styleUrls: ['./education-timeline.component.css']
})
export class EducationTimelineComponent implements OnInit {

  constructor(
    private sanityService: SanityService
  ) { }

  educations: Education[] = [];

  async getEducations(): Promise<Education[]> {
    this.educations = await this.sanityService.getEducations();

    this.educations.sort((a, b) => {
      if (a.education_priority < b.education_priority) {
          return -1;
      } else if (a.education_priority > b.education_priority) {
          return 1;
      } else {
          return 0;
      }})

    return this.educations;
  }

  ngOnInit(): void {
    this.getEducations();
  }

}
