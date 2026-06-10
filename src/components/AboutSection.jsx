
import { Brain, Layers, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Software Developer & AI Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I am a Computer Science student with a strong interest in software development,
              artificial intelligence, and data analytics. I enjoy building real-world projects
              that combine problem-solving with modern technologies, focusing on creating efficient,
              scalable, and user-friendly solutions.
            </p>

            <p className="text-muted-foreground">
            Through hands-on experience with full-stack development and AI-based applications, I have 
            developed a solid foundation in both frontend and backend technologies. I am particularly
            interested in leveraging data and machine learning to create intelligent systems that can 
            make a meaningful impact.
            </p>

             <p className="text-muted-foreground">
            I am a continuous learner who actively explores new tools, frameworks, and technologies.
            I believe in learning by building, and I am always motivated to improve my skills and take
            on new challenges in the ever-evolving tech landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1lR5A8uQffc2TefrTbhGtsTNBoN2ZK9fq/view?usp=drive_link"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Software Development </h4>
                  <p className="text-muted-foreground">
                   Building scalable and efficient software solutions using modern technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full Stack Developer</h4>
                  <p className="text-muted-foreground">
                    Developing end-to-end web applications with modern technologies and seamless user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg"> AI / Data Analytics </h4>
                  <p className="text-muted-foreground">
                   Leveraging data and machine learning to build intelligent and impactful solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};