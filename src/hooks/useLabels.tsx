import { githubApi } from "../api/githubApi"
import { sleep } from "../helpers/sleep";
import { Label } from "../interfaces/label"
import { useQuery } from '@tanstack/react-query';

const getLabels = async():Promise<Label[]> => {

    await sleep(2)

    const {data} = await githubApi.get<Label[]>('/labels?per_page=100')
    return data
  }

export const useLabels = () => {
   
    const labelsQuery = useQuery(
        ['labels'],
        getLabels,
        {
            staleTime: 1000 * 60 * 60, // 1hr
            //placeholderData: [],
            placeholderData: [
              {
                id: 69105358,
                node_id: "MDU6TGFiZWw2OTEwNTM1OA==",
                url: "https://api.github.com/repos/facebook/react/labels/Browser:%20Safari",
                name: "Browser: Safari",
                color: "c7def8",
                default: false,
              },
              {
                id: 1155972012,
                node_id: "MDU6TGFiZWwxMTU1OTcyMDEy",
                url: "https://api.github.com/repos/facebook/react/labels/Component:%20Scheduler",
                name: "Component: Scheduler",
                color: "9de8f9",
                default: false,
              }
            ]
        }
      )
    

    return {
        labelsQuery
    }
}