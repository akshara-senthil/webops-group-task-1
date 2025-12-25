import ChaitanyaImg from "./assets/team/Chaitanya.jpg";
import AksharaImg from "./assets/team/akshara.jpg";
import SiddharthImg from "./assets/team/Siddharth.jpg";
import PoorvikaImg from "./assets/team/Poorvika.jpg";


const teamMembers = [
  {
    name: "Chaitanya Raja",
    role: "Team & Timeline Developer",
    email: "me25m131@smail.iitm.ac.in",
    linkedin: "https://linkedin.com",
    avatar: ChaitanyaImg,
  },
  {
    name: "Akshara Senthil",
    role: "Navbar & Footer Developer",
    email: "member2@example.com",
    linkedin: "https://linkedin.com",
    avatar: AksharaImg,
  },
  {
    name: "Siddharth",
    role: "Login & Carousel Developer",
    email: "member3@example.com",
    linkedin: "https://linkedin.com",
    avatar: SiddharthImg,
  },
  {
    name: "Poorvika",
    role: "Footer & Testimonials Developer",
    email: "member4@example.com",
    linkedin: "https://linkedin.com",
    avatar: PoorvikaImg,
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-slate-950 text-slate-100 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Our Squad
          </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-yellow-400 
                via-orange-400 to-red-400 bg-clip-text text-transparent font-extrabold">
                  Meet the
                 </span>{" "}
                 <span className="bg-gradient-to-r 
                 from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                 Development Team
                </span>
            </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            We're a small team of learners building a modern React website
            with clean UI and smooth user experience.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl
               border border-slate-800 bg-slate-900/60 p-5 shadow-lg 
               backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="pointer-events-none absolute inset-0 
              opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute -inset-40 
                bg-[radial-gradient(circle_at_top,_#22c55e33,_transparent_60%)]" />
              </div>

              <div className="relative flex flex-col items-center text-center space-y-3">
               <img
  src={member.avatar}
  alt={member.name}
  className="h-24 w-24 rounded-full border border-slate-700 object-cover shadow-md"
/>

                <div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-emerald-400 font-medium">
                    {member.role}
                  </p>
                </div>

                <div className="h-px w-16 bg-gradient-to-r 
                from-transparent via-slate-600 to-transparent my-2" />

                
                <div className="space-y-1 text-xs sm:text-sm">
                  <a
                    href={`mailto:${member.email}`}
                    className="block text-slate-300 hover:text-emerald-400 transition"
                  >
                    {member.email}
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 
                    text-slate-300 hover:text-emerald-400 transition"
                  >
                    <span className="text-xs">in</span>
                    <span>LinkedIn</span>
                  </a>
                </div>
             

                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  <span className="rounded-full border border-emerald-500/40 
                  bg-emerald-500/10 px-3 py-1 text-[11px] uppercase 
                  tracking-wide text-emerald-300">
                    React
                  </span>
                  <span className="rounded-full border border-cyan-500/40 
                  bg-cyan-500/10 px-3 py-1 text-[11px] uppercase 
                  tracking-wide text-cyan-300">
                    Web Dev
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
