import Image from 'next/image';

const projects = [
  {
    image: "/images/freepik__glass-shower-box-corner-installation-frameless-gla__63816.png",
    category: "Shower Screen",
    title: "Frameless Glass Installation",
    location: "Beverly Hills, CA"
  },
  {
    image: "/images/freepik__glass-shower-box-frameless-clear-tempered-glass-ch__63815.png",
    category: "Mirrors",
    title: "Custom Vanity Mirror",
    location: "Santa Monica, CA"
  },
  {
    image: "/images/freepik__glass-shower-box-frosted-glass-panels-brushed-nick__63814.png",
    category: "Splashback",
    title: "Kitchen Glass Splashback",
    location: "West Hollywood, CA"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white text-zinc-900">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 animate-on-scroll">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Our Portfolio</span>
            </div>
            <h2 className="text-4xl font-medium tracking-tight">Recent Projects</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer animate-on-scroll">
              <div className="relative bg-zinc-100 aspect-[4/3] rounded-sm mb-6 overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-bold text-zinc-900 bg-white/90 backdrop-blur px-3 py-1.5 rounded-sm uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
                <Image
                  src={project.image}
                  alt={project.category}
                  fill
                  className="transition duration-700 group-hover:scale-105 object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium text-zinc-900">{project.title}</h3>
                <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wide">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
