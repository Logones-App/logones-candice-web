import type { Metadata } from "next";
import { CalendarCheck, CheckCircle2, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Créneau confirmé — Logones",
  description: "Votre créneau de démo est confirmé.",
  robots: { index: false, follow: false },
};

const DAY_NAMES = [
  "dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
];
const MONTH_NAMES = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

function parseBooking(searchParams: { date?: string; hour?: string }) {
  if (!searchParams.date || !searchParams.hour) return null;
  const [year, month, day] = searchParams.date.split("-").map(Number);
  if (!year || !month || !day) return null;
  const date = new Date(Date.UTC(year, month - 1, day));
  if (isNaN(date.getTime())) return null;
  const hour = Number(searchParams.hour);
  if (!Number.isFinite(hour) || hour < 0 || hour > 23) return null;
  return { date, hour };
}

export default async function MerciPage({
  searchParams,
}: {
  searchParams: Promise<{ date?: string; hour?: string }>;
}) {
  const params = await searchParams;
  const booking = parseBooking(params);

  return (
    <section className="grain-overlay relative isolate min-h-[80vh] overflow-hidden pt-[160px] pb-32 ardoise-bg">
      <div className="relative mx-auto max-w-[680px] px-5 text-center sm:px-8">
        <CheckCircle2
          className="mx-auto h-14 w-14 text-haccp-accent"
          aria-hidden
        />
        <h1 className="mt-8 font-sans text-[clamp(32px,4vw,48px)] font-semibold leading-[1.15] text-text-primary">
          Votre créneau est confirmé.
        </h1>

        {booking && (
          <div className="mx-auto mt-10 max-w-md rounded-3xl border border-gold-light/30 bg-gold-pale/30 p-6 text-left backdrop-blur-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gold-light">
              Récapitulatif
            </p>
            <div className="mt-4 space-y-3 text-sm">
              <p className="flex items-start gap-3 text-text-primary">
                <CalendarCheck
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-light"
                  aria-hidden
                />
                <span>
                  <span className="font-medium capitalize">
                    {DAY_NAMES[booking.date.getUTCDay()]}
                  </span>{" "}
                  {booking.date.getUTCDate()}{" "}
                  {MONTH_NAMES[booking.date.getUTCMonth()]}{" "}
                  {booking.date.getUTCFullYear()}
                </span>
              </p>
              <p className="flex items-start gap-3 text-text-primary">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-light"
                  aria-hidden
                />
                <span>
                  {String(booking.hour).padStart(2, "0")} h 00 —{" "}
                  {String(booking.hour + 1).padStart(2, "0")} h 00
                </span>
              </p>
              <p className="flex items-start gap-3 text-text-secondary">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-light"
                  aria-hidden
                />
                <span>Visio ou sur site (Lyon et métropole lyonnaise)</span>
              </p>
            </div>
          </div>
        )}

        <p className="mx-auto mt-8 max-w-md text-[clamp(15px,1.5vw,17px)] leading-[1.65] text-text-secondary">
          Vous recevez une confirmation par email avec le lien visio. Si
          quelque chose change, on s&apos;adapte — répondez simplement au mail.
        </p>
      </div>
    </section>
  );
}
