import { GitHubLogoIcon } from "@radix-ui/react-icons";

const AboutPage = () => {
  const contributors = [
    {
      name: "Prabhjot",
      initials: "PS",
      imageUrl: "https://ui-avatars.com/api/?name=p+s&background=0D8ABC&color=fff",
      github: "https://github.com/prabhjot2001",
    },
  ];
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <h1 className="font-bold text-3xl mb-6">About This Project</h1>

      <p className="text-lg mb-6">
        This project is an open-source AI Image Generator built with
        cutting-edge technologies . The goal of this project is to provide a
        powerful and easy-to-use tool for generating high-quality images from
        text prompts. Whether you're a designer, artist, or developer, this tool
        is designed to help you create visual content quickly and efficiently.
      </p>

      <div>
        <h1 className="font-bold text-xl">Contributors:</h1>
        <p className="font-semibold">Message for our contributors:</p>
        <p className="mb-6">
          Your dedication and hard work are the driving force behind this
          project. Thank you for your invaluable contributions — together,
          we&apos;re building something incredible!" "Every line of code you
          write makes this project better. We&apos;re deeply grateful for your
          time and expertise — let&apos;s continue to innovate and grow
          together!" "Thank you for being part of this journey. Your
          contributions make all the difference, and together, we&apos;ll
          continue to create something amazing!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {contributors.map((contributor, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-3 flex items-center justify-center bg-secondary rounded-full">
                {contributor.imageUrl ? (
                  <img
                    src={contributor.imageUrl}
                    alt={contributor.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <span className="text-xl font-bold text-gray-700">
                    {contributor.initials}
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-lg">{contributor.name}</h3>
              <a
                href={contributor.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary"
              >
                <GitHubLogoIcon className="inline mr-1" /> GitHub
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        <div>
          <h2 className="font-semibold text-2xl mb-3">Tech Stack</h2>
          <p className="text-lg leading-relaxed mb-6">
            This project is built using an open-source stack, ensuring
            flexibility, performance, and scalability. Below are the main
            technologies used:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Frontend:</strong> Vite, React, Tailwind CSS, Redux,
              TypeScript, ShadCN UI
            </li>
            <li>
              <strong>Backend:</strong> Bun, Prisma, TypeScript
            </li>
            <li>
              <strong>Microservices:</strong> FastAPI, Python
            </li>
          </ul>
          <p className="text-lg leading-relaxed mt-6">
            The frontend is built with <strong>React</strong> and styled using{" "}
            <strong>Tailwind CSS</strong>, ensuring a responsive and modern user
            interface. The project is powered by <strong>Redux</strong> for
            state management and <strong>ShadCN UI</strong> for pre-built UI
            components, while the backend is handled with <strong>Bun</strong>{" "}
            and <strong>Prisma</strong> for database management, and{" "}
            <strong>FastAPI</strong> and <strong>Python</strong> for the backend
            microservices.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-3">
            Contributing to This Project
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            This is an open-source project, and contributions are always
            welcome! Whether you want to improve the AI image generation
            capabilities, enhance the user interface, or add new features, feel
            free to fork the repository and submit a pull request.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            We encourage you to explore the project and contribute your ideas,
            code, or bug fixes. The more people involved, the better we can make
            this tool for everyone. Everyone is welcome to contribute,
            regardless of experience level.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            To contribute, simply visit the GitHub repository, check out the
            contributing guidelines, and start working on your feature. If you
            need help getting started, don't hesitate to reach out to the
            community or me directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
