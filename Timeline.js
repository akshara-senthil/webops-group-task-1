
import bgTimeline from "./assets/bg-timeline.jpg"; 

const timelineEvents = [
  {
    date: "2012",
    title: `Outreach & Social Impact`,
    description:
      `Shaastra strengthens its presence outside campus 
      through school and city outreach initiatives like 
      Sampark and Sparsh, taking hands-on engineering and 
      tech to a wider audience.`,
  },
  {
    date: "2013",
    title: `“Ignite the Imagination” & Envisage"`,
    description:
      `With the theme “Ignite the Imagination”, Shaastra 
      introduces Envisage, a techno-entertainment show, 
      and restructures events to focus on depth, quality, 
      and stronger participant experience.`,
  },
  {
    date: "2014",
    title: `“Breaking Boundaries” & ISO Recognition`,
    description:
      `Shaastra 2014 runs from Jan 4-7 with the theme 
      “Breaking Boundaries”, launches a pan-IIT research expo,
       and earns ISO certification, cementing its reputation 
       as a premier student-run tech festival.`,
  },
  {
    date: "2015",
    title: `Bigger Competitions & Stronger Industry Links`,
    description:
      `Robotics, coding, design, and hardware competitions 
      grow in scale. Industry-backed contests, workshops, 
      and lectures become a core part of the festival experience.`,
  },
  {
    date: "2016",
    title: `“Challenging Conventions”`,
    description:
      `Under the theme “Challenging Conventions”, 
      Shaastra pushes unconventional problem statements, 
      cross-disciplinary contests, and more immersive tech 
      demonstrations across campus.`,
  },
  {
    date: "2017",
    title: `Innovation, Start-ups & Entrepreneurship`,
    description:
      `Hackathons, case competitions, and start-up focused 
      events gain prominence,giving students a platform to 
      prototype ideas, pitch to mentors, and interact with 
      founders and investors.`,
  },
  {
    date: "2018",
    title: `National Footprint & School Engagement`,
    description:
      `Shaastra's national reach grows with more participants 
      from colleges across India, while school-oriented events 
      and workshops make engineering and science more approachable 
      for younger students.`,
  },
  {
    date: "2019",
    title: `Deep Tech & Industry Connect`,
    description:
      `Events in AI, machine learning, cybersecurity, finance,
      and automation expand. Collaborations with companies help 
      bring real-world problem statements and high-stakes 
      competitions to the fest.`,
  },
  {
    date: "2020",
    title: `Pandemic-Era Online Transition`,
    description:
      `With the onset of the pandemic, Shaastra experiments 
      with fully online events, remote hackathons, lecture series,
       and social campaigns, keeping the spirit of the fest alive despite lockdowns.`,
  },
  {
    date: "2021",
    title: `Hybrid Formats & Wider Accessibility`,
    description:
      `Building on its online experience, Shaastra explores 
      hybrid formats—mixing virtual and limited on-ground 
      events—making competitions, talks, and workshops more 
      accessible to students nationwide.`,
  },
  {
    date: "2022",
    title: `Rebuilding the On-Campus Experience`,
    description:
      `As in-person life returns, Shaastra brings back large 
      on-campus crowds, refreshed competitions, and signature 
      shows like Envisage, while retaining popular online elements 
      for remote participants.`,
  },
  {
    date: "2023",
    title: `“Schrödinger's Realms” - Future of Tech`,
    description:
      `With the theme often described as exploring parallel 
      possibilities of technology, Shaastra hosts events around 
      AI, sustainability, robotics, fintech, and policy, imagining 
      multiple futures of innovation.`,
  },
  {
    date: "2024",
    title: `25th Edition - “Spokes of Time”`,
    description:
      `The Silver Jubilee edition (25th) runs from Jan 3-7 
      with the theme “Spokes of Time”, featuring 110+ events 
      on AI, ML, cybersecurity, robotics, and more, along 
      with high-profile speakers and major competitions.`,
  },
  {
    date: "2025",
    title: `Beyond the Silver Jubilee`,
    description:
      `Shaastra continues as one of Asia's largest 
      student-run techno-managerial festivals, building 
      on its legacy with deeper focus on next-gen tech, 
      ethics, sustainability, and nationwide outreach initiatives.`,
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative py-16 sm:py-20  bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgTimeline})`, backgroundSize: 'cover' }} 
    >

    <div className="absolute inset-0 bg-slate-950/60" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-slate-100">
            {/* Title */}
        <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Shaastra Journey
            </p>
                <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
                    <span className="relative inline-block">
                        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                         bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient 
                         font-black drop-shadow-[0_0_30px_rgba(168,85,247,0.9)]">
                         Shaastra
                         
                        </span>
                        <span className="absolute -inset-3 bg-gradient-to-r 
                        from-pink-500/40 via-purple-500/40 to-indigo-500/40 blur-2xl -z-10 
                        animate-pulse"></span>
                    </span>{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 
                        bg-clip-text text-transparent font-black">
                          Timeline (2012-2025)
                        </span>
                </h2>
        <p className="mt-3 text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            A quick look at how Shaastra, IIT Madras; annual
            techno-managerial festival, has evolved from outreach and
            experimentation to a massive, ISO-certified, Silver Jubilee edition.
        </p>
    </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-slate-600/70 sm:left-1/2" />

          <div className="space-y-10">
            {timelineEvents.map((event, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className="relative flex items-start sm:items-center"
                >
                  {/* Dot */}
                  <div className="relative z-10 ml-4 sm:ml-0 sm:left-1/2 sm:-translate-x-1/2">
                    <div className="flex h-4 w-4 items-center justify-center 
                    rounded-full border border-cyan-400 bg-slate-950/80 
                    shadow-[0_0_12px_rgba(34,211,238,0.6)]">
                      <div className="h-2 w-2 rounded-full bg-cyan-400" />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`mt-3 sm:mt-0 sm:w-1/2 ${
                      isLeft
                        ? "sm:pr-10 sm:text-right sm:mr-auto"
                        : "sm:pl-10 sm:text-left sm:ml-auto"
                    }`}
                  >
                    <div className="rounded-2xl border border-slate-700/80 
                    bg-slate-950/80 p-4 sm:p-5 shadow-xl shadow-black/40 
                    hover:shadow-cyan-500/40 transition">
                      <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
                        {event.date}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-slate-50">
                        {event.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-200/90">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
