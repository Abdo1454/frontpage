import Data from "../../../Data.json";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  return (
    <div>
      {Data.categories.map((category) => (
        <div key={category.name}>
          {category.feeds.map((feed) => (
            <ArticleCard
              key={feed.feedUrl}
              title={feed.title}
              description={feed.description}
              source={feed.title}
              publishedAt="Today"
              category={category.name}
            />
          ))}
        </div>
      ))}
    </div>
  );
}