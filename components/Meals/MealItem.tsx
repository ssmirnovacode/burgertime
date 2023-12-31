import Image from "next/image";

import styles from "./MealItem.module.css";
import { Meal } from "@/types";
import ButtonLink from "../common/ButtonLink";

export default function MealItem({
  title = "",
  slug = "",
  image = "",
  summary = "",
  creator = "",
}: Meal) {
  // TODO handle case of missing data
  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          {/* <Link href={`/meals/${slug}`}>View Details</Link> */}
          <ButtonLink endpoint={`/meals/${slug}`} label="View Details" />
        </div>
      </div>
    </article>
  );
}
