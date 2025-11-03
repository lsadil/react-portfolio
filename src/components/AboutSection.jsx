import { Briefcase, Code, Gamepad2, ServerCog, Terminal, User, Wrench } from "lucide-react";



export const AboutSection = () => {
    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 ">
                        <h3 className="text-2xl font-semibold">Developer who loves making things work (and look) right</h3>
                        <p className="text-muted-foreground">
                            I’m a software engineer who enjoys turning complex problems into robust, maintainable systems. My background spans real-time/interactive apps, tooling, and modern web - always with an eye on performance, 
                            reliability, and developer experience.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> Get In Touch</a>
                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"> Download CV</a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Gamepad2 className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Real-Time & Gameplay</h4>
                                    <p className="text-muted-foreground">
                                        C++ systems design for gameplay and AI (pathfinding, behaviors, event systems) in small, agile teams. Focus on modeling, testing, and “shippable” builds. (UE5 ARPG at Big Monkey Entertainment)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <ServerCog className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Build, CI/CD & Collaboration</h4>
                                    <p className="text-muted-foreground">
                                        Set up and maintain stable pipelines with Perforce + CI/CD, deployments on cloud. Strong habits around code reviews, documentation, and QA.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Terminal className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web & Tools</h4>
                                    <p className="text-muted-foreground">
                                        Productive on the web side when needed: React, Tailwind, Laravel/TALL, Firebase auth/data; build internal tools that speed up team workflows.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}