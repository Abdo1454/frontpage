import Data from "../../../Data.json"
import ArticleCard from "./ArticleCard"

export default function ArticleList() {
  return (
    <div>
        {
            Data.categories.map((category) => (
                <div key={category.name}>
                    {
                        category.feeds.map((feed) => (
                            <ArticleCard
                                key={feed.title}
                                title={feed.title}
                                description={feed.description}
                                feedUrl={feed.feedUrl}
                                siteUrl={feed.siteUrl}
                                format={feed.format}
                            />
                        ))
                    }
                    </div>
            ))
        }
    </div>
  )
}
