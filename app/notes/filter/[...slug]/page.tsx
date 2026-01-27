import { fetchNotes } from "@/lib/api";

type NotesByIdProps = {
  params: Promise<{ slug: string[] }>;
};

const NotesByTag = async ({ params }: NotesByIdProps) => {
  const { slug } = await params;
  const rawTag = slug[0];
  const tag =
    rawTag === "all"
      ? undefined
      : rawTag.charAt(0).toUpperCase() + rawTag.slice(1);

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
