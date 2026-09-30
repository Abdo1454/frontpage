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
  <li  className={`${
    activeItem === "All Items"
      ? "bg-[var(--color-accent-subtle)] flex items-center gap-2 text-[var(--color-accent)]"
      : "flex items-center gap-2 text-[var(--color-text-secondary)]"
  }`}>
    <FaHome />

  <Button
  text="All Items"
  onClick={() => addActive("All Items")}
  disabled={false}
  
/>
  </li>

  <li  className={`${
    activeItem === "Saved"
      ? "bg-[var(--color-accent-subtle)] flex items-center gap-2 text-[var(--color-accent)]"
      : "flex items-center gap-2 text-[var(--color-text-secondary)]"
  }`}>
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
          <div className="flex items-center justify-start gap-4 rounded-lg">
            <h4
              className="bg-red-600"
              style={{
                width: 15,
                height: 15,
              }}
            />

            <h3 className="text-md font-semibold text-[var(--color-text-secondary)]">
              {category.name}
            </h3>
           <h3>{category.feeds.length}</h3>
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

