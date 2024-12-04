import Link from "next/link";

import styles from "./Navigation.module.css";

import IconOverview from "@/components/Icons/Overview";
import IconQuestion from "@/components/Icons/Question";
import { Search } from "../Icons";
import { getLabel } from "@/lib/data";

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/help-and-about-tech-radar">
            <IconQuestion className={styles.icon} />
            <span className={styles.label}>{getLabel("pageAbout")}</span>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/overview">
            <Search className={styles.icon} />
            <span className={styles.label}>{getLabel("pageOverview")}</span>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/open-source-projects">
            <IconOverview className={styles.icon} />
            <span className={styles.label}>{getLabel("pageOssProjects")}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
