"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, Check, Clock, Loader2, MapPin } from "lucide-react";
import { ButtonPrimary } from "./Buttons";
import { cn } from "../../lib/utils";

const HOURS = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
const DAYS_TO_SHOW = 14;

const DAY_SHORT = ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."];
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

function startOfTomorrow(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 1);
  return d;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatLongDate(d: Date) {
  return `${DAY_SHORT[d.getDay()].replace(".", "")}${DAY_SHORT[d.getDay()].includes(".") ? "" : ""} ${d.getDate()} ${MONTH_NAMES[d.getMonth()]}`;
}

function formatHour(h: number) {
  return `${String(h).padStart(2, "0")}h00`;
}

export function BookingCalendar({
  onConfirm,
  onBack,
  submitting,
  prospectName,
}: {
  onConfirm: (date: Date, hour: number) => void;
  onBack: () => void;
  submitting: boolean;
  prospectName?: string;
}) {
  const days = useMemo(() => {
    const start = startOfTomorrow();
    return Array.from({ length: DAYS_TO_SHOW }, (_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return d;
    });
  }, []);

  const [selectedDate, setSelectedDate] = useState<Date>(days[0]);
  const [selectedHour, setSelectedHour] = useState<number | null>(null);

  const canConfirm = selectedHour !== null && !submitting;

  function handleConfirm() {
    if (selectedHour === null) return;
    onConfirm(selectedDate, selectedHour);
  }

  // Group days by month for the label
  const currentMonthLabel = `${MONTH_NAMES[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`;

  return (
    <div className="space-y-8">
      <header className="flex items-start justify-between gap-4">
        <div>
          <button
            type="button"
            onClick={onBack}
            disabled={submitting}
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary disabled:opacity-40"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Modifier mes informations
          </button>
          <h2 className="mt-3 font-display text-2xl font-semibold text-text-primary sm:text-3xl">
            Choisissez votre créneau{prospectName ? `, ${prospectName}` : ""}.
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            Démos disponibles 7j/7 entre 9 h et 22 h — créneaux d&apos;1 heure.
          </p>
        </div>
      </header>

      {/* Days picker */}
      <div>
        <div className="flex items-baseline justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gold-light">
            Date
          </p>
          <p className="text-xs text-text-muted capitalize">
            {currentMonthLabel}
          </p>
        </div>

        <div
          className="mt-3 -mx-1 grid grid-flow-col auto-cols-[88px] gap-2 overflow-x-auto px-1 pb-2 sm:auto-cols-auto sm:grid-flow-row sm:grid-cols-7"
          role="radiogroup"
          aria-label="Sélectionnez une date"
        >
          {days.map((day) => {
            const selected = isSameDay(day, selectedDate);
            return (
              <button
                key={day.toISOString()}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setSelectedDate(day)}
                className={cn(
                  "flex flex-col items-center gap-1 rounded-2xl border px-3 py-3 transition-all",
                  selected
                    ? "border-gold-light bg-gold-pale shadow-[var(--shadow-glow-gold)]"
                    : "border-border bg-bg-surface hover:border-gold-light/40 hover:bg-bg-elevated",
                )}
              >
                <span
                  className={cn(
                    "text-[10px] font-semibold uppercase tracking-wider",
                    selected ? "text-gold-light" : "text-text-muted",
                  )}
                >
                  {DAY_SHORT[day.getDay()]}
                </span>
                <span
                  className={cn(
                    "font-display text-xl font-semibold leading-none",
                    selected ? "text-text-primary" : "text-text-primary",
                  )}
                >
                  {day.getDate()}
                </span>
                <span className="text-[10px] uppercase text-text-muted">
                  {MONTH_NAMES[day.getMonth()].slice(0, 4)}.
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Hours picker */}
      <div>
        <div className="flex items-baseline justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gold-light">
            Heure
          </p>
          <p className="inline-flex items-center gap-1 text-xs text-text-muted">
            <Clock className="h-3 w-3" aria-hidden />
            Créneaux d&apos;1 heure
          </p>
        </div>

        <div
          className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-7"
          role="radiogroup"
          aria-label="Sélectionnez une heure"
        >
          {HOURS.map((h) => {
            const selected = selectedHour === h;
            return (
              <button
                key={h}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setSelectedHour(h)}
                className={cn(
                  "rounded-xl border px-3 py-3 text-sm font-medium transition-all",
                  selected
                    ? "border-gold-light bg-gold-light text-bg-base shadow-[var(--shadow-glow-gold)]"
                    : "border-border bg-bg-surface text-text-primary hover:border-gold-light/40 hover:bg-bg-elevated",
                )}
              >
                {formatHour(h)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Summary + confirm */}
      <div className="rounded-2xl border border-border bg-bg-elevated p-5 sm:p-6">
        {selectedHour !== null ? (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gold-light">
                Votre créneau
              </p>
              <p className="mt-1.5 font-display text-lg font-semibold text-text-primary">
                <span className="capitalize">
                  {DAY_SHORT[selectedDate.getDay()].replace(".", "")}
                </span>{" "}
                {selectedDate.getDate()}{" "}
                {MONTH_NAMES[selectedDate.getMonth()]} à {formatHour(selectedHour)}
              </p>
              <p className="mt-1 inline-flex items-center gap-1 text-xs text-text-muted">
                <MapPin className="h-3 w-3" aria-hidden />
                Visio ou sur site (Lyon et métropole)
              </p>
            </div>
            <ButtonPrimary
              size="lg"
              onClick={handleConfirm}
              disabled={!canConfirm}
              className="w-full sm:w-auto"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  Confirmation…
                </>
              ) : (
                <>
                  Confirmer le créneau
                  <Check className="h-4 w-4" aria-hidden />
                </>
              )}
            </ButtonPrimary>
          </div>
        ) : (
          <p className="text-center text-sm text-text-muted">
            Sélectionnez une heure pour confirmer votre créneau.
          </p>
        )}
      </div>

      <p className="text-center text-[12px] text-text-muted">
        Si le créneau choisi est déjà pris, nous vous proposons l&apos;heure
        suivante par email — sans relance commerciale.
      </p>
    </div>
  );
}
