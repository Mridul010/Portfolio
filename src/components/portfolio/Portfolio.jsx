import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "AI/ML APPLICATION",
    title: "Smart Lead AI - Conversion Predictor",
    description:
      "Built an end-to-end ML application (Python/Scikit-Learn/Flask) to predict customer conversion. Achieved 91% accuracy and deployed the model via a user-friendly web interface for real-time marketing insights. ",
    link: "LINK_TO_SMART_LEAD_AI_PROJECT", // REPLACE THIS LINK
  },
  {
    id: 2,
    image: card2,
    category: "AI/ML APPLICATION",
    title: "Emotion Detection - Text Analysis",
    description:
      "Developed an AI web application using Python and Flask to classify and score emotions from text input. Integrated IBM Watson AI Libraries for core analysis via a RESTful API.",
    link: "LINK_TO_EMOTION_DETECTION_PROJECT", // REPLACE THIS LINK
  },
  {
    id: 3,
    image: card3,
    category: "AI/ML & BACKEND",
    title: "TrackEx - Finance & Stock Prediction",
    description:
      "Designed a stock market prediction feature using advanced ML models (Bi-LSTM, XGBoost, CNN), achieving 92% accuracy, and integrated with Firebase APIs for secure data flow. ",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "AUTOMATION & BACKEND",
    title: "Lead Management Automation (Internship)",
    description:
      "Engineered multi-platform automation workflows (OLX, Instagram, Facebook) using Selenium and Python, streamlining lead management and saving 40+ hours/month.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "BACKEND DEVELOPMENT",
    title: "Scalable Python Backend & Firebase",
    description:
      "Built a scalable Python backend with Firebase integration for real-time data, maintaining 99.9% uptime and reducing data latency by 200 ms.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "BACKEND & QA",
    title: "API Testing and Service Optimization",
    description:
      "Conducted thorough API testing with Postman, reducing production bugs by 20% and optimizing Python services to enhance overall server-side reliability.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            A selection of projects and accomplishments, showcasing hands-on experience in 
            <strong>AI/ML</strong>, <strong>Scalable Backend Engineering</strong>, and automation.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Projects
        </a>
      </div>
    </div>
  );
};

export default Portfolio;