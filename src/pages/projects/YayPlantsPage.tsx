import ProjectPageTemplate from "./ProjectPageTemplate";

export default function YayPlantsPage() {
  return (
    <ProjectPageTemplate
      title="YayPlants!"
      category="Mobile Web App"
      description="A mobile first web application focusing on finding your desired plants to take pictures of."
      image="/projects/YayPlants.svg"
      details={[
        "Mobile-first responsive web application",
        "Plant discovery and identification features",
        "Photography-focused user experience",
        "Clean and intuitive interface design",
      ]}
    />
  );
}
