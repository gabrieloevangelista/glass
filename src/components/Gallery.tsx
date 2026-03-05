import Image from 'next/image';

const projects = [
  {
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b59f3086-f7ff-4bc7-b336-47ebebbc293d_800w.jpg",
    category: "Shower Screen",
    title: "Frameless Glass Installation",
    location: "Beverly Hills, CA"
  },
  {
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e737cde-8e7c-4f70-83f5-5c0df30de623_800w.jpg",
    category: "Mirrors",
    title: "Custom Vanity Mirror",
    location: "Santa Monica, CA"
  },
  {
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d669b1c-c409-4688-b6a4-b01c343a8401_800w.jpg",
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
