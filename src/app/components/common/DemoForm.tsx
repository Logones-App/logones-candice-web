"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ButtonPrimary } from "./Buttons";
import { BookingCalendar } from "./BookingCalendar";
import {
  demoFormSchema,
  type DemoFormValues,
  moduleIds,
  coversOptions,
  coversLabels,
} from "../../lib/validations";
import { siteConfig } from "../../lib/site-config";

const moduleLabels: Record<(typeof moduleIds)[number], string> = {
  caisse: "Caisse",
  stocks: "Stocks",
  haccp: "HACCP",
  rh: "RH",
  reservation: "Réservation",
};

export function DemoForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [step, setStep] = useState<"form" | "calendar">("form");
  const [formData, setFormData] = useState<DemoFormValues | null>(null);

  const form = useForm<DemoFormValues>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      restaurantName: "",
      city: "",
      covers: undefined as unknown as (typeof coversOptions)[number],
      modules: [],
      message: "",
      consent: undefined as unknown as true,
    },
  });

  function onSubmit(values: DemoFormValues) {
    setFormData(values);
    setStep("calendar");
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  async function handleBookingConfirm(date: Date, hour: number) {
    if (!formData) return;
    setSubmitting(true);
    // TODO: brancher l'API d'envoi
    await new Promise((r) => setTimeout(r, 600));
    const isoDate = date.toISOString().slice(0, 10);
    console.info("Demande démo confirmée :", {
      ...formData,
      bookingDate: isoDate,
      bookingHour: hour,
    });
    router.push(`/merci?date=${isoDate}&hour=${hour}`);
  }

  if (step === "calendar" && formData) {
    return (
      <BookingCalendar
        prospectName={formData.firstName}
        submitting={submitting}
        onBack={() => setStep("form")}
        onConfirm={handleBookingConfirm}
      />
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        noValidate
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom *</FormLabel>
                <FormControl>
                  <Input autoComplete="given-name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom *</FormLabel>
                <FormControl>
                  <Input autoComplete="family-name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email professionnel *</FormLabel>
                <FormControl>
                  <Input type="email" autoComplete="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Téléphone</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    autoComplete="tel"
                    placeholder="04 78 00 00 00"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Optionnel</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="restaurantName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom du restaurant *</FormLabel>
              <FormControl>
                <Input autoComplete="organization" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ville *</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="address-level2"
                    placeholder="Lyon"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="covers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de couverts *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner…" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {coversOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {coversLabels[opt]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="modules"
          render={() => (
            <FormItem>
              <FormLabel>Modules qui m&apos;intéressent *</FormLabel>
              <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {moduleIds.map((id) => (
                  <FormField
                    key={id}
                    control={form.control}
                    name="modules"
                    render={({ field }) => {
                      const checked = field.value?.includes(id);
                      return (
                        <FormItem className="flex items-center gap-3 rounded-lg border border-border bg-bg-surface p-3">
                          <FormControl>
                            <Checkbox
                              checked={checked}
                              onCheckedChange={(c) => {
                                const next = new Set(field.value ?? []);
                                if (c) next.add(id);
                                else next.delete(id);
                                field.onChange(Array.from(next));
                              }}
                              className="data-[state=checked]:bg-gold-light data-[state=checked]:border-gold-light"
                            />
                          </FormControl>
                          <FormLabel className="m-0 cursor-pointer text-sm font-normal text-text-primary">
                            {moduleLabels[id]}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message libre</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="Quelques mots sur votre situation actuelle, vos contraintes, vos questions…"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex items-start gap-3 rounded-xl border border-border bg-bg-surface p-4">
              <FormControl>
                <Checkbox
                  checked={field.value === true}
                  onCheckedChange={(c) =>
                    field.onChange(c === true ? true : undefined)
                  }
                  className="mt-0.5 data-[state=checked]:bg-gold-light data-[state=checked]:border-gold-light"
                />
              </FormControl>
              <div className="space-y-1 leading-relaxed">
                <FormLabel className="m-0 cursor-pointer text-sm font-normal text-text-secondary">
                  J&apos;accepte que mes données soient utilisées pour traiter
                  ma demande de démo, conformément à notre{" "}
                  <Link
                    href="/politique-confidentialite"
                    className="text-gold-light underline"
                  >
                    politique de confidentialité
                  </Link>
                  . Ces données ne seront jamais revendues.
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <ButtonPrimary type="submit" size="lg" className="w-full">
          Demander ma démo gratuite
          <ArrowRight className="h-4 w-4" aria-hidden />
        </ButtonPrimary>

        <p className="text-center text-[13px] leading-relaxed text-text-muted">
          Étape suivante : choisissez vous-même la date et l&apos;heure qui vous
          arrangent. Démo en visio ou sur site à {siteConfig.city}. Sans
          engagement. Disponibilité 7j/7.
        </p>
      </form>
    </Form>
  );
}
