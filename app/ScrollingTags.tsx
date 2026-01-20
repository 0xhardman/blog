export const ScrollingTags = () => {
  const tags = [
    { text: "时间管理大师", accent: false },
    { text: "DigitalNomad", accent: true },
    { text: "Frontend", accent: false },
    { text: "艺术之梦的安息者", accent: false },
    { text: "Backend", accent: true },
    { text: "DevOps", accent: false },
    { text: "Blockchain", accent: true },
    { text: "整活星人", accent: false },
    { text: "Ollie板混", accent: false },
    { text: "Rust", accent: true },
    { text: "Golang", accent: false },
    { text: "ASCII Artist", accent: true },
    { text: "白日梦想家", accent: false },
    { text: "Python", accent: false },
    { text: "纯爱战士", accent: false },
    { text: "PHP", accent: true },
    { text: "Hackathon刺客", accent: true },
    { text: "Java", accent: false },
    { text: "打标签的Punk", accent: false },
    { text: "C++", accent: false },
    { text: "DAO", accent: true },
    { text: "花里胡哨学家", accent: false },
    { text: "BUPT3DAO", accent: false },
    { text: "LXDAO网管", accent: true },
  ];

  return (
    <div className="overflow-hidden border-y border-black/10 bg-gradient-to-r from-transparent via-white/50 to-transparent">
      <div className="flex py-6 w-fit animate-[scroll_90s_linear_infinite] hover:[animation-play-state:paused]">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex items-center text-2xl md:text-3xl font-bold tracking-tight">
            {tags.map((tag, i) => (
              <div key={i} className="flex items-center">
                <span
                  className={`text-nowrap transition-colors duration-200 hover:text-accent ${
                    tag.accent
                      ? 'text-accent-secondary'
                      : 'text-black/80'
                  }`}
                >
                  {tag.text}
                </span>
                <span className="mx-6 text-black/20 font-light select-none">/</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}; 