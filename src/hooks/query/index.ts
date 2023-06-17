import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export function useAnnotate() {
  return useQuery({
    queryKey: ["annotate"],
    queryFn() {
      return axios.get("/annotate").then((x) => x.data);
    },
  });
}
