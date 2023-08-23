import useData from "./useData"

export interface Platform {
  id: number
  slug: string
  name: string
}

function usePlatforms() {
  return useData<Platform>('/platforms/lists/parents')
}


export default usePlatforms
