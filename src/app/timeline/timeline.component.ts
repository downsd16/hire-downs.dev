import { Component, OnInit } from '@angular/core';
import { Experience } from '../service/experience';
import { SanityService } from '../service/sanity.service';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor(
    private sanityService: SanityService
  ) { }

  experiences: Experience[] = [];

  async getExperiences(): Promise<Experience[]> {
    this.experiences = await this.sanityService.getExperiences();
    return this.experiences;
  }

  ngOnInit(): void {
    this.getExperiences();
  }

}
