
import { h, FunctionalComponent } from 'preact';

interface Project {
    title: string;
    description: string;
    imageUrl: string;
}

interface ProjectsProps {
    projects: Project[];
}

const Projects: FunctionalComponent<ProjectsProps> = ({ projects }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
                <div className="bg-white rounded-lg shadow-md p-4 border-solid border-gray-700" key={project.title}>
                    <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
                    <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                    <p className="text-gray-600">{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Projects;