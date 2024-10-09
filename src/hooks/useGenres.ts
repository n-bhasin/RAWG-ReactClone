import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres.js";
import apiClient from "../services/api-client.js";
import { FetchResponse } from "./useData.js";
export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genres>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
