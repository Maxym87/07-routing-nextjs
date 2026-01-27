import { fetchNotes } from "@/lib/api";
import { NoteTag } from "@/types/note";

type NotesByIdProps = {
  params: Promise<{ slug: string[] }>;
};

const NotesByTag = async ({ params }: NotesByIdProps) => {
  const { slug } = await params;
  const tag = slug[0] === "all" ? undefined : (slug[0] as NoteTag);

  const data = await fetchNotes(1, "", tag);
  console.log(data);
  return (
    <div>
      <h1>Filter Page</h1>
      <p>Current path: {slug}</p>
    </div>
  );
};
export default NotesByTag;
