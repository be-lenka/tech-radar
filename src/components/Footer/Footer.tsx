import styles from "./Footer.module.css";

import { SocialLinks } from "@/components/SocialLinks/SocialLinks";
import { getAppName, getImprintUrl, getLabel, getLogoUrl } from "@/lib/data";

export function Footer() {
  const logoUrl = getLogoUrl();
  return (
    <div className={styles.footer}>
      <div className={styles.branding}>
        <img src={logoUrl} className={styles.logo} alt={getAppName()} />
      </div>
      <div style={{ textAlign: "center", color: "#bbb" }}>
        <SocialLinks className={styles.socialLinks} />
      </div>
      <a href={getImprintUrl()} className={styles.imprint} target="_blank">
        {getLabel("imprint")}
      </a>
      <div style={{ textAlign: "center", color: "#bbb" }}>
        <p className={styles.description}>{getLabel("footer")}</p>
      </div>
    </div>
  );
}
