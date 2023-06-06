import { useEffect, useState, useRef } from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { Image, Video } from "cloudinary-react";

type ProjectProps = {
  title: string;
  description: string;
  imageId: string;
  videoId: string;
  liveLink: string;
  githubLink: string;
};

const Project = ({
  title,
  description,
  imageId,
  videoId,
  liveLink,
  githubLink,
}: ProjectProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center max-w-lg p-6 my-6 overflow-hidden rounded-lg shadow-2xl">
      <h2 className="mb-2 text-lg font-semibold text-center text-white sm:text-xl">
        {title}
      </h2>
      <div className="h-[5rem] max-w-[23rem] overflow-auto text-sm text-center text-stone-200 sm:text-base">
        {description}
      </div>
      {isMobile ? (
        <Image
          cloudName="dwonrd0xx"
          publicId={`Portfolio/${imageId}`}
          alt="project image"
          crop="scale"
          className="object-cover mb-4 shadow-lg " // set both width and height here
        />
      ) : (
        <Video
          cloudName="dwonrd0xx"
          publicId={`Portfolio/${videoId}`}
          autoPlay
          muted
          loop
          crop="scale"
          className="object-cover mb-4 shadow-lg " // set both width and height here
        />
      )}
      <div className="flex justify-around w-full mt-4">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-white transition-colors duration-300 ease-in-out bg-transparent border-2 border-white rounded-full hover:cursor-pointer hover:bg-white hover:text-black"
        >
          View Live
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-white transition-colors duration-300 ease-in-out bg-transparent border-2 border-white rounded-full hover:cursor-pointer hover:bg-white hover:text-black"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoCycle, setAutoCycle] = useState(true);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 980);
    }

    // Set the initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const projectsData = [
    {
      title: "Web Design Agency",
      description:
        "A web design agency site featuring a contact form and an active blog...",
      imageId: "Screenshot_136_ubecz7",
      videoId: "ignite_qv6vwk",
      liveLink: "https://webdesignagency-live.com",
      githubLink: "https://github.com/user/webdesignagency",
    },
    {
      title: "Amazon.com Clone",
      description:
        "An e-commerce platform clone designed with React and CSS...",
      imageId: "Screenshot_133_pg7id1",
      videoId: "amzin_sdnkk6",
      liveLink: "https://amazonclone-live.com",
      githubLink: "https://github.com/user/amazonclone",
    },
    {
      title: "Birthday News Stories App",
      description:
        "An app that fetches news stories based on user's birthday...",
      imageId: "Screenshot_132_bcaoky",
      videoId: "bday_tmlenx",
      liveLink: "https://birthdaynews-live.com",
      githubLink: "https://github.com/user/birthdaynews",
    },
    {
      title: "Flashcard Generator App",
      description:
        "A user-friendly flashcard creation tool showcasing complex CSS styling...",
      imageId: "Screenshot_23_ymfj4c",
      videoId: "flash_f0hzat",
      liveLink: "https://flashcardgenerator-live.com",
      githubLink: "https://github.com/user/flashcardgenerator",
    },
  ];

  useEffect(() => {
    if (autoCycle) {
      const interval = setInterval(() => {
        setCurrentSlide((currentSlide + 1) % projectsData.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [currentSlide, projectsData.length, autoCycle]);

  const handleProjectSelection = (index: number) => {
    setAutoCycle(false);
    setCurrentSlide(index);
  };

  return (
    <div>
      {isMobile ? (
        <div
          className="flex flex-col items-center justify-center h-screen gap-10 mb-44 "
          id="projects"
        >
          <h1 className="mt-64 mb-5 text-4xl font-semibold text-white ">
            Projects
          </h1>
          <div className="flex flex-col items-center gap-10 ">
            <div className="flex flex-col items-center justify-center -mb-16">
              <div className="flex pt-6 flex-col justify-start w-full md:w-[18rem] p-4 rounded-lg  shadow-2xl ">
                {projectsData.map((project, index) => (
                  <button
                    key={index}
                    className={`flex items-center justify-start space-x-2 p-2 rounded-lg ${
                      index === currentSlide
                        ? "text-blue-500 font-semibold"
                        : "text-white hover:font-semibold"
                    }`}
                    onClick={() => handleProjectSelection(index)}
                  >
                    <ChevronRightIcon
                      className={`w-5 h-5 ${
                        index === currentSlide
                          ? "text-blue-500"
                          : "text-white hover:text-blue-500"
                      }`}
                    />
                    {project.title}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center md:flex-row md:gap-10">
              {projectsData.map((project, index) => (
                <div
                  key={index}
                  className={`${
                    index === currentSlide
                      ? "block transition-all duration-1000"
                      : "hidden"
                  }`}
                  ref={(el) => (projectsRef.current[index] = el)}
                >
                  <Project {...project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div
          className="flex flex-col items-center justify-center h-screen gap-10 "
          id="projects"
        >
          <h1 className="mb-5 text-4xl font-semibold text-white">Projects</h1>
          <div className="flex flex-row items-center gap-10">
            <div className="flex flex-col items-center justify-center">
              <div className="flex pt-6 flex-col justify-start w-full md:w-[18rem] p-4 rounded-lg  shadow-2xl">
                {projectsData.map((project, index) => (
                  <button
                    key={index}
                    className={`flex items-center justify-start space-x-2 p-2 rounded-lg ${
                      index === currentSlide
                        ? "text-blue-500 font-semibold"
                        : "text-white hover:font-semibold"
                    }`}
                    onClick={() => handleProjectSelection(index)}
                  >
                    <ChevronRightIcon
                      className={`w-5 h-5 ${
                        index === currentSlide
                          ? "text-blue-500"
                          : "text-white hover:text-blue-500"
                      }`}
                    />
                    {project.title}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center md:flex-row md:gap-10">
              {projectsData.map((project, index) => (
                <div
                  key={index}
                  className={`${index === currentSlide ? "block" : "hidden"}`}
                  ref={(el) => (projectsRef.current[index] = el)}
                >
                  <Project {...project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
