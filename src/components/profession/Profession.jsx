import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "AI/ML Model Development",
    description:
      "I apply Machine Learning and Logistic Regression models (Scikit-Learn, IBM Watson APIs) to solve predictive challenges, focusing on achieving high accuracy and delivering actionable insights, such as customer conversion prediction.",
  },
  {
    id: 2,
    title: "Scalable Backend Engineering",
    description:
      "I build robust, scalable Python backends (Flask, REST APIs) and integrate database solutions (Firebase, PostgreSQL, MongoDB) to ensure reliable server-side application performance and real-time data flow.",
  },
  {
    id: 3,
    title: "Automation & Workflow Optimization",
    description:
      "I engineer automation workflows using Python and Selenium to streamline lead management, reducing manual work, and deliver efficient solutions that save significant operational time.",
  },
];

// ... (rolesData and imports remain the same)

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I Focus On</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            As a Computer Science student, I specialize in the convergence of
            backend development and beginner-level AI/ML to build smart, efficient systems.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach prioritizes scalability, clean, maintainable code, and
            delivering measurable impact in technical and business workflows.
          </p>
        </div>
        <a
          // --- START OF UPDATED CODE ---
          href="https://github.com/Mridul010?tab=repositories" // Direct link to your GitHub Repos
          target="_blank" // Opens the link in a new browser tab
          rel="noopener noreferrer" // Security best practice
          // --- END OF UPDATED CODE ---
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          View Projects
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;