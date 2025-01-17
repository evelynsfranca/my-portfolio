"use client";

import { experiences } from '@/data/about/experiences';
import { ExperienceModel } from "@/models/ExperienceModel";
import { faArrowDownShortWide, faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ExperienceCard from "./components/ExperienceCard";
import styles from "./index.module.css";

export default function AboutExperience() {

  const [sort, setSort] = useState<'asc' | 'desc'>('desc');
  const [orderedList, setOrderedList] = useState<ExperienceModel[]>(experiences);

  const handleSort = () => setSort(sort === 'asc' ? 'desc' : 'asc');

  useEffect(() => {
    let list =
      sort === 'asc'
        ? orderedList.reverse()
        : experiences;

    setOrderedList([...list]);
  }, [sort]);

  return (
    <article id="experience" className={styles.content}>

      <header>
        <h2>Trajetória profissional</h2>
      </header>

      <article className={styles.contentBox}>

        <header>
          <button
            className={styles.sort}
            onClick={() => handleSort()}
          >
            <FontAwesomeIcon
              icon={sort === 'asc' ? faArrowDownWideShort : faArrowDownShortWide}
              style={{
                color: sort === 'asc' ? 'var(--secondary-color)' : 'var(--primary-color)'
              }}
            />
          </button>
        </header>

        <div>
          {orderedList.map((it, i) => (
            <ExperienceCard
              key={i}
              {...it}
            />
          ))}
        </div>

      </article>

    </article>
  );
}
