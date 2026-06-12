import NoteList from "@/components/NoteList/NoteList";
import { getNotesByTag } from "@/lib/api";

interface Props {
  params: Promise<{ slug: string[] }>;
}

const NotesByTag = async ({ params }: Props) => {
  const { slug } = await params;
  const tag = slug[0] === "all" ? undefined : slug[0];
  const response = await getNotesByTag(tag);

  return (
    <div>
      <h1>Tags</h1>
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </div>
  );
};

export default NotesByTag;
