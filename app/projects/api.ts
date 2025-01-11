import { Data } from "../api/list-project-images/route";
import { API_URL } from "../shared/utils/variables";

export async function fetchImages(projectId: string, projectVersion: string): Promise<Data> {
    return await fetch(API_URL + '/list-project-images?projectId=' + projectId + '&projectVersion=' + projectVersion)
        .then(res => res.json());
}