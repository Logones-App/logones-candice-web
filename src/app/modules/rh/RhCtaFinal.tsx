import { ModuleCta } from "../../components/common/ModuleCta";
import { modules } from "../../lib/tokens";

export function RhCtaFinal() {
  return (
    <ModuleCta
      module="rh"
      label="RH"
      title={
        <>
          Et si votre équipe fonctionnait
          <br />
          enfin <span style={{ color: modules.rh.accent }}>sans friction</span> ?
        </>
      }
      lead="Reprenez le contrôle de vos plannings, de votre masse salariale et de vos obligations RH. Logones vous simplifie la vie."
    />
  );
}
