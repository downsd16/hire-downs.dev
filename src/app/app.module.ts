import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { ExperienceComponent } from './experience/experience.component';
import { WorkTimelineComponent } from './work-timeline/work-timeline.component';
import { EducationTimelineComponent } from './education-timeline/education-timeline.component';
import { DividerComponent } from './divider/divider.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectViewComponent,
    ExperienceComponent,
    WorkTimelineComponent,
    EducationTimelineComponent,
    DividerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
