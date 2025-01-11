import { useEffect, useState } from "react";
import styles from "./index.module.css";

export interface ProjectDetailsProps {
  filePath: string;
}

export default function ProjectDetails(props: ProjectDetailsProps) {

  const { filePath } = props;

  const [content, setContent] = useState<string | ArrayBuffer>("");

  const readFile = () => {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", filePath, false);

    xhr.onreadystatechange = () => {
      xhr.readyState === 4
        && (xhr.status === 200 || xhr.status == 0)
        && setContent(xhr.responseText);
    }

    xhr.send(null)
  }

  useEffect(() => { readFile() }, []);

  return (
    <article
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
