import { useState } from "react";
import Button from "../UI/Button";
import Data from "../../Data.json";
import { FaHome, FaBookmark, FaPlus, FaUser } from "react-icons/fa";
export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("All Items");

  const addActive = (text: string) => {
    setActiveItem(text);
  };

  return (
    <div className="ml-10">
      <ul>
        <li className="flex gap-2 justify-content-center align-items-center">
        <FaHome />
          <Button
            text="All Items"
            onClick={() => addActive("All Items")}
            disabled={false}
          />
        </li>

        <li className="flex gap-2 justify-content-center align-items-center">
        <FaBookmark />
          <Button
            text="Saved"
            onClick={() => addActive("Saved")}
            disabled={false}
          />
        </li>
      </ul>

      <hr className="my-4 w-50 border-[var(--color-border)]" />

      <h2 className="text-[var(--color-text-secondary)]"> CATEGORIES </h2>

      {Data.categories.map((category) => (
        <div key={category.name}>
          <h3 className="text-xl font-semibold text-[var(--color-accent)]">
            {category.name}
          </h3>

          {category.feeds.map((feed) => (
            <p key={feed.feedUrl}>{feed.title}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

