import { Check, Minus } from "lucide-react";
import { FEATURE_MATRIX } from "../../lib/pricing-data";

export function FeatureMatrix() {
  const groups = Array.from(new Set(FEATURE_MATRIX.map((r) => r.group)));

  return (
    <div className="overflow-x-auto rounded-2xl border border-border-light bg-white">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-border-light bg-bg-light-alt">
            <th className="p-4 text-xs font-semibold uppercase tracking-wider text-text-dark-sec">
              Fonctionnalité
            </th>
            <th className="p-4 text-center text-xs font-semibold uppercase tracking-wider text-text-dark-sec">
              Starter
            </th>
            <th className="p-4 text-center text-xs font-semibold uppercase tracking-wider text-gold-mid">
              Pro
            </th>
            <th className="p-4 text-center text-xs font-semibold uppercase tracking-wider text-text-dark-sec">
              Premium
            </th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => (
            <tbody key={group}>
              <tr className="bg-bg-light-alt/50">
                <td
                  colSpan={4}
                  className="px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-gold-mid"
                >
                  {group}
                </td>
              </tr>
              {FEATURE_MATRIX.filter((r) => r.group === group).map(
                (row, i) => (
                  <tr
                    key={row.feature}
                    className="border-b border-border-light last:border-b-0"
                  >
                    <td className="p-4 text-text-dark">{row.feature}</td>
                    <td className="p-4 text-center">
                      <Cell value={row.starter} />
                    </td>
                    <td className="bg-gold-pale/40 p-4 text-center">
                      <Cell value={row.pro} highlight />
                    </td>
                    <td className="p-4 text-center">
                      <Cell value={row.premium} />
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Cell({ value, highlight = false }: { value: boolean; highlight?: boolean }) {
  if (value)
    return (
      <Check
        className={`mx-auto h-5 w-5 ${highlight ? "text-gold-mid" : "text-haccp-bright"}`}
        aria-label="Inclus"
      />
    );
  return (
    <Minus
      className="mx-auto h-5 w-5 text-text-dark-sec/30"
      aria-label="Non inclus"
    />
  );
}
