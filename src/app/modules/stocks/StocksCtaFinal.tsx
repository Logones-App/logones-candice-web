import { ModuleCta } from "../../components/common/ModuleCta";
import { modules } from "../../lib/tokens";

export function StocksCtaFinal() {
  return (
    <ModuleCta
      module="stocks"
      label="Stocks"
      title={
        <>
          Gérez vos stocks{" "}
          <span style={{ color: modules.stocks.accent }}>sans y penser,</span>
          <br />
          pilotez vos marges sans stress.
        </>
      }
      lead="Logones Stocks transforme vos bons de livraison en pilotage de food cost, en temps réel et sans ressaisie."
    />
  );
}
