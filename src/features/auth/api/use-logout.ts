import { QueryClient } from "./../../../../node_modules/@tanstack/query-core/src/queryClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/rpc";
import { InferRequestType, InferResponseType } from "hono/client";

type ResponseType = InferResponseType<(typeof client.api.auth.logout)["$post"]>;

export const useLogout = () => {
  const QueryClient = useQueryClient();
  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const response = await client.api.auth.logout["$post"]();
      return await response.json();
    },
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ["current"] });
    },
  });
  return mutation;
};
