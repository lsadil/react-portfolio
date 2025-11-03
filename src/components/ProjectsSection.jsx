import { ArrowRight, ExternalLink, Github, GithubIcon } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Somnia",
        description: "Somnia is a narrative-driven 2D platformer built in Unreal Engine 5.",
        image: "/projects/rNt52m.jpg",
        tags: ["Unreal Engine 5", "C++", "Blueprints", "Pixel Art", "Narrative Design"],
        demoUrl: "https://chaoticdreams.itch.io/somnia",
        githubUrl: "https://github.com/lsadil/Somnia",
    },
    {
        id: 2,
        title: "Unannounced ARPG",
        description: "Action-RPG developed in Unreal Engine 5.",
        image: "/projects/bmk.jpg",
        tags: ["Unreal Engine 5", "C++", "AI", "Animation", "Tools"],
        demoUrl: "https://www.bigmonkey-entertainment.com/",
        githubUrl: "https://www.bigmonkey-entertainment.com/",
    },
    {
        id: 3,
        title: "Carnet Magique",
        description: "An immersive, eco-digital story device blending AR/game mechanics and nature education.",
        image: "/projects/carnet_magique.png",
        tags: ["Unity", "C#", "AR/VR", "Interactive Learning"],
        demoUrl: "https://la-meduse-violette.com/carnet-magique/",
        githubUrl: "https://la-meduse-violette.com/carnet-magique/",
    }
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary">
                    Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) =>
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) =>
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                )}
                            </div>

                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a
                                        href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        target="_blank"
                                    >
                                        <ExternalLink />
                                    </a>
                                    <a
                                        href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        target="_blank"
                                    >
                                        <Github />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="text-centered mt-12">
                <a
                    href="https://github.com/lsadil"
                    target="_blank"
                    className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Check My Github <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
}