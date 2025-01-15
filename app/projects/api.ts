import { ProjectDetails } from "../api/projects/get-details/route";
import { Data } from "../api/projects/list-images/route";
import { API_URL } from "../shared/utils/variables";

export async function fetchImages(projectId: string, projectVersion: string, mobile?: boolean): Promise<Data> {
    return await fetch(API_URL + '/projects/list-images?projectId=' + projectId + '&projectVersion=' + projectVersion + '&mobile=' + mobile)
        .then(res => res.json());
}

export async function fetchDetails(projectId: string, projectVersion: string): Promise<ProjectDetails> {
    return await fetch(API_URL + '/projects/get-details?projectId=' + projectId + '&projectVersion=' + projectVersion)
        .then(res => res.json());
}