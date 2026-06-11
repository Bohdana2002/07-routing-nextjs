import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";

import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

const Notes = async () => {
  const queryClient = new QueryClient();
  const query = "";
  const currentPage = 1;
  const perPage = 12;
  await queryClient.prefetchQuery({
    queryKey: ["notes", query, currentPage, perPage],
    queryFn: () => fetchNotes(query, currentPage, perPage),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  );
};
export default Notes;
