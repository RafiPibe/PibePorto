import ProjectPageTemplate from "./ProjectPageTemplate";

export default function BCARevampPage() {
  return (
    <ProjectPageTemplate
      title="BCA Revamp"
      category="UI Redesign"
      description="My twist on the old mybca m-banking app — reimagining the user experience with a modern and clean interface."
      image="/projects/BCARevamp.svg"
      details={[
        "Redesign of the myBCA mobile banking app",
        "Modern and clean UI approach",
        "Improved navigation and user flow",
        "Fresh visual identity while maintaining familiarity",
      ]}
    />
  );
}
