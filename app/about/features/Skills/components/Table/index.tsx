
import { HabilityProps } from "../..";
import styles from "./index.module.css";

export interface SkillsTableProps {
  name: string,
  content: HabilityProps[]
}

export default function SkillsTable(props: Readonly<SkillsTableProps>) {
  return (
    <table aria-hidden="true" className={styles.table}>
      <thead className={styles.tableHead}>
        <tr>
          <td colSpan={2}>
            <span>{props.name}</span>
          </td>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        <tr></tr>
        {props.content.map(it => (
          <tr key={it.name}>
            <td>
              {it.name}
            </td>
            <td>
              <div className={styles.bar} style={{ width: `${it.average}%` }}>{it.average}%</div>
            </td>
          </tr>
        ))}
        <tr><td></td></tr>
      </tbody>
    </table>
  );
}
