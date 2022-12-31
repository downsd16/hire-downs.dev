import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkTimelineComponent } from './work-timeline.component';

describe('EducationTimelineComponent', () => {
  let component: WorkTimelineComponent;
  let fixture: ComponentFixture<WorkTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkTimelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
