import { getArticle } from "@/api/articles";
import EditForm from "@/components/freeboard/EditForm";

export default async function EditPost({ params }) {
  const { id } = await params;
  const post = await getArticle(id);

  return (
    <EditForm id={id} initialTitle={post.title} initialContent={post.content} />
  );
}
