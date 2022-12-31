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
    return this.educations;
  }

  ngOnInit(): void {
    this.getEducations();
  }

}
