import type { Metadata } from "next";

import { VersionSwitch } from "../components/layout/VersionSwitch";
import { V2Links } from "../components/layout/V2Links";
import { ReglagesV2 } from "../components/layout/ReglagesV2";

/**
 * Espace de travail de la refonte.
 *
 * Tout ce qui vit sous /v2 est une proposition : le site en ligne reste
 * strictement inchangé. Ces pages ne doivent jamais être indexées tant que
 * l'arbitrage n'est pas rendu — sinon elles entrent en concurrence avec les
 * pages réelles sur les mêmes requêtes.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
};

export default function V2Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <V2Links />
      <VersionSwitch />
      <ReglagesV2 />
    </>
  );
}
