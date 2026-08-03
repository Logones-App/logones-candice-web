import { ModuleCta } from "../../components/common/ModuleCta";
import { modules } from "../../lib/tokens";

export function ReservationCtaFinal() {
  return (
    <ModuleCta
      module="reservation"
      label="Réservation"
      title={
        <>
          Remplissez votre salle.
          <br />
          <span style={{ color: modules.reservation.light }}>
            Sans perdre le contrôle.
          </span>
        </>
      }
      lead="Logones Réservation vous aide à maximiser votre remplissage, réduire les no-shows et offrir une expérience irréprochable."
    />
  );
}
