import { ModuleCta } from "../../components/common/ModuleCta";
import { modules } from "../../lib/tokens";

export function HaccpCtaFinal() {
  return (
    <ModuleCta
      module="haccp"
      label="HACCP"
      title={
        <>
          Moins de stress au quotidien,
          <br />
          <span style={{ color: modules.haccp.accent }}>plus de temps</span> pour
          vos clients.
        </>
      }
      lead="Logones HACCP vous aide à rester conforme facilement, à chaque service."
    />
  );
}
