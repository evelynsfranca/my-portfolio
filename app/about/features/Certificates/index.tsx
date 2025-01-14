"use client";

import Slider from "@/components/Slider";
import { certificates } from "@/data/about/certificates";
import React, { useEffect, useState } from "react";
import CertificateCard from "./components/Card";
import styles from "./index.module.css";

export default function AboutCertificates() {

  const [slideItems, setSlideItems] = useState<number>(0);

  let totalItems =
    certificates
      .map(it => it.certificates.length)
      .reduce((a, b) => a + b);

  useEffect(() => {
    let documentSize = document.body.offsetWidth;

    if (documentSize >= 1000)
      setSlideItems(3);
    else if (documentSize < 1000 && documentSize > 800)
      setSlideItems(2);
    else
      setSlideItems(1);
  }, []);

  return (
    <article id="certificates" className={styles.content}>

      <header>
        <h2>Certificados</h2>
      </header>

      <article className={styles.contentBox}>

        <Slider
          itemsList={certificates}
          totalItems={totalItems}
          slideItemsQuantity={slideItems}
          gridRows={1}
          gridColumns={slideItems}
          gridFlow="column"
          gridGap={slideItems > 1 ? 2 : 0}
          heightAutoAdjust={true}
          cardClass="certificateCard"
        >
          {certificates.sort((a, b) => b.institution.relevance - a.institution.relevance)
            .map((it, i) => (
              <React.Fragment key={i}>

                {it.certificates.map(certificate => (
                  <CertificateCard
                    key={certificate.id}
                    institution={it.institution}
                    itemClass="certificateCard"
                    {...certificate}
                  />
                ))}

              </React.Fragment>
            ))}
        </Slider>
      </article>

    </article>
  );
}
