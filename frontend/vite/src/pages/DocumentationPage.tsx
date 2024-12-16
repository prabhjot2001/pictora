const DocumentationPage = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <h1 className="font-bold text-3xl mb-6">Project Documentation</h1>

      <p className="text-lg mb-6">
        This documentation provides instructions on how to run the project. If
        you plan to add new features or make changes to the project, please make
        sure to update this documentation accordingly to reflect the latest
        steps.
      </p>

      <div className="space-y-12">
        <div>
          <h2 className="font-semibold text-2xl mb-3">1. Project Setup</h2>
          <p className="text-lg leading-relaxed mb-6">
            To get started, you need to download the project folder and install
            the necessary dependencies for both the frontend and backend. The
            project folder structure is as follows:
          </p>
          <pre className="bg-secondary p-4 mb-6">
            image-generator-folder/ ├── frontend/ └── backend/
          </pre>
          <p className="text-lg leading-relaxed mb-6">
            Follow these steps to run the project locally:
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-3">
            2. Running the Frontend
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            The frontend is built using React, and it runs with Vite. To start
            the frontend server:
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              Navigate to the `frontend` directory:
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                cd frontend
              </code>
            </li>
            <li>
              Install the required dependencies:{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                npm install
              </code>
            </li>
            <li>
              Once the dependencies are installed, run the development server:{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                npm run dev
              </code>
            </li>
          </ol>
          <p className="text-lg leading-relaxed mb-6">
            After starting the frontend, the server will be running locally. You
            can access the frontend in your browser at{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              http://localhost:5173/
            </code>
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-3">
            3. Running the Backend
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            The backend consists of two main components: the server and the
            microservices. To set up the backend:
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              Navigate to the `backend/server` directory:{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                cd backend/server
              </code>
            </li>
            <li>
              Install the required dependencies:{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                npm install
              </code>
            </li>
            <li>
              Create a `.env` file in the `backend/server` directory and
              configure the environment variables based on the provided
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                .env.example
              </code>
              file.
            </li>
            <li>
              Now your server will be running on port based on PORT you
              mentioned in the .env file
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                http://localhost:8000
              </code>
              if you provided PORT=8000 in .env file.
            </li>
            <li>
              After setting up the `.env` file, start the backend server:{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                npm run dev
              </code>
            </li>
          </ol>
          <p className="text-lg leading-relaxed mb-6">
            This will start the backend server, and once both the frontend and
            backend are running, you can access the app in your browser at{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              http://localhost:5173
            </code>
            .
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-3">
            4. Running Microservices
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            The backend also contains microservices that need to be run
            separately. These services handle tasks like image generation or
            other background processes. Follow these steps to set up
            microservices:
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              Navigate to the microservices directory in{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                backend/microservices
              </code>
              .
            </li>
            <li>
              Now you need to start up the FastApi server with:
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                python -m uvicorn app.main:app --host 0.0.0.0 --port 8081
                --reload
              </code>
            </li>
            <li>
              Run this microservice independently as needed by server to connect
              and then generate the images
            </li>
            <li>
              You can modify port if port 8081 is already in use by another
              process, you just need to change the{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                --port &lt;your port number&gt;
              </code>
            </li>
          </ol>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-3">5. Final Steps</h2>
          <p className="text-lg leading-relaxed mb-6">
            After completing the above steps, both the frontend and backend will
            be up and running. You should now be able to open your browser and
            visit{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              http://localhost:5173
            </code>{" "}
            to see the project in action.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            If you encounter any issues, make sure you have all the environment
            variables set up correctly and check for any additional instructions
            in the README files inside the <code>frontend</code> and{" "}
            <code>backend</code> directories.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-3">
            6. Updating This Documentation
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            As the project evolves and new features are added, this
            documentation will need to be updated. If you add a new feature or
            make any changes that affect how the project is run, please edit
            this page to reflect the latest setup instructions. Make sure to
            include:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Any new setup steps or dependencies.</li>
            <li>New environment variables or configuration files.</li>
            <li>
              Details about new microservices or backend processes (if
              applicable).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
