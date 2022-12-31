import { Component, OnInit } from '@angular/core';
import { SanityService } from '../service/sanity.service';
import { Work } from '../service/work';

@Component({
  selector: 'work-timeline',
  templateUrl: './work-timeline.component.html',
  styleUrls: ['./work-timeline.component.css']
})
export class WorkTimelineComponent implements OnInit {

  constructor(
    private sanityService: SanityService
  ) { }

  works: Work[] = [];

  async getWorks(): Promise<Work[]> {
    this.works = await this.sanityService.getWorks();
    return this.works;
  }

  ngOnInit(): void {
    this.getWorks();
  }

}
