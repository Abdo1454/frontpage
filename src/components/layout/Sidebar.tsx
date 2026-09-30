import { useState } from "react";
import Button from "../UI/Button";
import Data from "../../Data.json";
import { FaHome, FaBookmark } from "react-icons/fa";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("All Items");

  const addActive = (text: string) => {
    setActiveItem(text);
  };

  return (
    <div className="pl-10 w-60 bg-[var(--color-bg-secondary)]">
     <ul className="flex flex-col">
  <li className="flex items-center gap-2">
    <FaHome />

    <Button
      text="All Items"
      onClick={() => addActive("All Items")}
      disabled={false}
    />
  </li>

  <li className="flex items-center gap-2">
    <FaBookmark />

    <Button
      text="Saved"
      onClick={() => addActive("Saved")}
      disabled={false}
    />
  </li>
</ul>

      <hr className="my-4 w-50 border-[var(--color-border)]" />

      <h2 className="text-[var(--color-text-secondary)]">
        CATEGORIES
      </h2>

      {Data.categories.map((category) => (
        <div key={category.name}>
          <div className="flex items-center justify-start gap-1 rounded-lg">
            <h4
              className="bg-red-600"
              style={{
                width: 15,
                height: 15,
              }}
            />

            <h3 className="text-xl font-semibold text-[var(--color-accent)]">
              {category.name}
            </h3>
          </div>

          {category.feeds.map((feed) => (
            <div
              key={feed.feedUrl}
              className="m-2 flex items-center gap-3"
            >
              <p className="rounded bg-red-500 px-1">
                {feed.title.slice(0, 1)}
              </p>

              <p>{feed.title}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

