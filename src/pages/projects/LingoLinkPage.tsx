import ProjectPageTemplate from "./ProjectPageTemplate";

export default function LingoLinkPage() {
  return (
    <ProjectPageTemplate
      title="LingoLink"
      category="Mobile App"
      description="A mobile app focusing on connecting students and finding those with the same interests."
      image="/projects/LingoLink.svg"
      details={[
        "Student-focused social connection platform",
        "Interest-based matching system",
        "Community building features",
        "Intuitive onboarding experience",
      ]}
    />
  );
}
