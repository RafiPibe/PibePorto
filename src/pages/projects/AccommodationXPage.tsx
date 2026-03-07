import ProjectPageTemplate from "./ProjectPageTemplate";

export default function AccommodationXPage() {
  return (
    <ProjectPageTemplate
      title="AccommodationX"
      category="Mobile App"
      description="A mobile app that helps you in finding accommodation and helping you ease up your living."
      image="/projects/AccommodationX.svg"
      details={[
        "Accommodation search and discovery",
        "User-friendly booking flow",
        "Location-based recommendations",
        "Streamlined living experience",
      ]}
    />
  );
}
