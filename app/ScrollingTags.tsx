export const ScrollingTags = () => {
  const tags = [
    "时间管理大失",
    "DigitalNomad",
    "Frontend",
    "艺术之梦的安息者",
    "Backend",
    "DevOps",
    "Blockchain",
    "整活星人",
    "Ollie板混",
    "Rust",
    "Golang",
    "ASCII Artist",
    "白日梦想家",
    "Python",
    "纯爱战士",
    "PHP",
    "Hackathon刺客",
    "Java",
    "打标签的Punk",
    "C++",
    "DAO",
    "花里胡哨学家",
    "BUPT3DAO",
    "LXDAO网管"
  ];

  return (
    <div className="overflow-scroll border-y border-gray-300">
      <div className="flex gap-10 py-6 w-fit animate-[scroll_90s_linear_infinite]">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex gap-10 text-3xl font-bold">
            {tags.map((text, i) => (
              <div className="text-nowrap" key={i}>{text}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}; 