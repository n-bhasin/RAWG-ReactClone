import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres.js";
import APIClient from "../services/api-client.js";

const apiClient = new APIClient<Genres>("/genres");
export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
