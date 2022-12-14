import { Injectable } from '@angular/core';
import sanityClient from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";
import { Experience } from './experience';
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
      `*[_type == "projects"]{
        project_name,
        project_image,
        project_repo,
        project_tags
      }`
    )
  }

  async getExperiences(): Promise<Experience[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "experiences"]{
        title,
        institution,
        location,
        start_date,
        end_date,
        description
      }`
    )
  }
}