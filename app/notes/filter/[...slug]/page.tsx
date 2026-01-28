import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

type NotesByIdProps = {
  params: Promise<{ slug: string[] }>;
};

const NotesByTag = async ({ params }: NotesByIdProps) => {
  const { slug } = await params;
  const initalPage = 1;
  const initialQuery = "";
  const rawTag = slug[0];
  const InitialTag =
    rawTag === "all"
      ? undefined
      : rawTag.charAt(0).toUpperCase() + rawTag.slice(1);

  const data = await fetchNotes(initalPage, initialQuery, InitialTag);
  return <NotesClient initialData={data} initialTag={InitialTag} />;
};
export default NotesByTag;
