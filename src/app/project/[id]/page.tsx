import ProjectDetails from "@/component/pages/ProjectDetails";

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  return <ProjectDetails projectId={params.id} />;
}
