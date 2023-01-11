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

  /* A variable that holds the credentials for the Sanity API. */
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

  /**
   * This function is an asynchronous function that returns a promise of an array of projects
   * @returns An array of objects
   */
  async getProjects(): Promise<Project[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "projects"] | order(project){
        project_priority,
        project_name,
        project_image,
        project_repo,
        project_tags,
        project_description
      }`
    )
  }

  /**
   * This function is an asynchronous function that returns a promise of an array of education experience
   * @returns An array of objects
   */
  async getEducations(): Promise<Education[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "educations"]{
        education_priority,
        title,
        institution,
        start_date,
        end_date
      }`
    )
  }

  /**
   * This function is an asynchronous function that returns a promise of an array of work experience
   * @returns An array of objects
   */
  async getWorks(): Promise<Work[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "works"]{
        work_priority,
        title,
        institution,
        start_date,
        end_date,
        description
      }`
    )
  }
}