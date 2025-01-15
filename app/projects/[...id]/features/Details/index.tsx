import { fetchDetails } from "@/app/projects/api";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

export interface ProjectDetailsProps {
  projectId: string;
  versionTag: string;
}

export default function ProjectDetails(props: ProjectDetailsProps) {

  const { projectId, versionTag } = props;

  const [filePath, setFilePath] = useState<string>("");
  const [content, setContent] = useState<string | TrustedHTML>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

    async function fetchDetail() {
      return await fetchDetails(projectId, versionTag)
        .then(res => setFilePath(res.content));
    }

    fetchDetail();

  }, []);

  useEffect(() => {

    async function read(url: string) {
      await fetch(url)
        .then(res => res.text())
        .then(data => setContent(data));
    }

    filePath && read(filePath);

  }, [filePath]);

  useEffect(() => {
    content && setLoading(false);
  }, [content]);

  return (
    <>
      {loading ? (
        <Loading message="Carregando os detalhes do projeto..." />
      ) : (
        <article
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </>
  );
}
