import { Injectable } from '@angular/core';
import sanityClient from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";

import { Education } from './education';
import { Work } from './work';
import { Project } from './project';


@Injectable({
  providedIn: 'root'
})
export class SanityService {

  sanityClientCredentials = {
    option: sanityClient({
      projectId: "3lg2bbxt",
      dataset: "production",
      apiVersion: "2021-10-21",
      useCdn: true
    })
  }

  urlFor = (source: any) =>
  imageUrlBuilder(this.sanityClientCredentials.option).image(source);

  async getProjects(): Promise<Project[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "projects"] | order(project){
        project_name,
        project_image,
        project_repo,
        project_tags,
        project_description
      }`
    )
  }

  async getEducations(): Promise<Education[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "educations"]{
        title,
        institution,
        start_date,
        end_date
      }`
    )
  }

  async getWorks(): Promise<Work[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "works"]{
        title,
        institution,
        start_date,
        end_date,
        description
      }`
    )
  }
}