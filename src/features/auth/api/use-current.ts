import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/rpc";

export const useCurrent = () => {
  const query = useQuery({
    queryKey: ["current"],
    queryFn: async () => {
      const Response = await client.api.auth.current.$get();
      if (!Response.ok) {
        return null;
      }
      const { data } = await Response.json();
      return data;
    },
  });
  return query;
};
