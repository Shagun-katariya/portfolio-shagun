import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="project management" />
            </div>
            <div className="text-content">
              <h2>
                Project Management
              </h2>
              <p className="text-white-50 md:text-xl">
                Collaborative task tracking platform with real-time progress dashboards and robust backend architecture
              </p>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://github.com/Shagun-katariya/project-mangement" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-btn github-btn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="mr-2">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  GitHub
                </a>
                <a 
                  href="https://master.dz9rq7lb3yvcr.amplifyapp.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-btn live-demo-btn"
                >
                  <span className="live-indicator"></span>
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Ecommerce Platform"
                />
              </div>
              <h2>The Ecommerce Platform</h2>
              <div className="flex gap-3 mt-3">
                <a 
                  href="https://github.com/Shagun-katariya/Ecommerce" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-btn github-btn text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="mr-1">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  GitHub
                </a>
                <a 
                  href="https://ecommerce-frontend-olive-iota.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-btn live-demo-btn text-sm"
                >
                  <span className="live-indicator"></span>
                  Live Demo
                </a>
              </div>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="Path Finder" />
              </div>
              <h2>Shortest Path Finder</h2>
              <div className="flex gap-3 mt-3">
                <a 
                  href="https://github.com/Shagun-katariya/pathfinding-visualizer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-btn github-btn text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="mr-1">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  GitHub
                </a>
                <a 
                  href="https://pathfinding-visualizer-nu.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-btn live-demo-btn text-sm"
                >
                  <span className="live-indicator"></span>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for the buttons */}
      <style jsx>{`
        .project-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .github-btn {
          background-color: #24292e;
          color: white;
        }
        
        .github-btn:hover {
          background-color: #2c3137;
          transform: translateY(-2px);
        }
        
        .live-demo-btn {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          position: relative;
          overflow: hidden;
        }
        
        .live-demo-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 10px rgba(107, 114, 255, 0.3);
        }
        
        .live-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #22c55e;
          margin-right: 8px;
          display: inline-block;
          animation: blink 1.5s infinite;
        }
        
        @keyframes blink {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
};

export default AppShowcase;
