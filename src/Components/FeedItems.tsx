interface FeedProps {
  item: {
    id: number;
    name: string;
    title: string;
    role: string;
    date: string;
    text: string;
    image: string;
    profilePic: string;
  };
}

const FeedItems = ({ item }: FeedProps) => {
  return (
    <div className="mx-2 border">
      <div className="m-7 max-w-xl md:px-5">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-5">
            <img
              src={item.profilePic}
              alt="article-avi"
              className="h-16 w-16 rounded-full"
            />
            <div>
              <h4 className="mb-1 text-xl font-bold">{item.name}</h4>
              <p className="text-xs font-normal md:text-sm">
                {item.role} .May 25th, 2023
              </p>
            </div>
          </div>
          <h1 className="text-lg font-bold md:text-xl">{item.title}</h1>
          <div>
            <span className="text-sm">10 mins read</span>
          </div>
          <p className="my-3 text-xs !leading-6 md:text-sm">{item.text}</p>
        </div>
        <div>
          <img src={item.image} alt="article1" className="pb-2" />
        </div>
        <div className="flex justify-between text-sm">
          <div>
            <span>200</span>
          </div>
          <div>
            <span>120</span>
          </div>
          <div>
            <span>2980 views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedItems;
