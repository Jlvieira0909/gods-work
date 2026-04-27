"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Clock } from "lucide-react";

const agenda = [
  { day: 0, time: "08:00", name: "Santa Missa", local: "Matriz & Sta Luzia" },
  { day: 0, time: "09:30", name: "Santa Missa", local: "Jesus Misericordioso" },
  {
    day: 0,
    time: "19:00",
    name: "Santa Missa",
    local: "Matriz Imaculada Conceição",
  },
  {
    day: 1,
    time: "20:00",
    name: "Terço dos Homens",
    local: "Matriz Imaculada Conceição",
  },
  {
    day: 2,
    time: "19:30",
    name: "Grupo de Oração",
    local: "Comunidade Santa Luzia",
  },
  {
    day: 3,
    time: "19:30",
    name: "Novena Perpétua",
    local: "Matriz Imaculada Conceição",
  },
  {
    day: 4,
    time: "08:00",
    name: "Adoração ao Santíssimo",
    local: "Matriz Imaculada Conceição",
  },
  {
    day: 4,
    time: "16:00",
    name: "Missa da Saúde",
    local: "Matriz Imaculada Conceição",
  },
  {
    day: 5,
    time: "14:00",
    name: "Atendimento de Confissões",
    local: "Secretaria Paroquial",
  },
  {
    day: 6,
    time: "09:00",
    name: "Catequese Paroquial",
    local: "Todas as Comunidades",
  },
  {
    day: 6,
    time: "17:00",
    name: "Santa Missa",
    local: "Comunidade Santa Luzia",
  },
  {
    day: 6,
    time: "19:00",
    name: "Santa Missa",
    local: "Matriz Imaculada Conceição",
  },
];

const dayNames = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export default function NextEvent() {
  const [nextEvent, setNextEvent] = useState<{
    name: string;
    local: string;
    label: string;
  } | null>(null);

  useEffect(() => {
    const now = new Date();
    const currentDay = now.getDay();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    let found = null;
    let dayLabel = "";

    const sorted = [...agenda].sort((a, b) => {
      if (a.day !== b.day) return a.day - b.day;
      const [aH, aM] = a.time.split(":").map(Number);
      const [bH, bM] = b.time.split(":").map(Number);
      return aH * 60 + aM - (bH * 60 + bM);
    });

    for (const ev of sorted) {
      const [h, m] = ev.time.split(":").map(Number);
      const evMinutes = h * 60 + m;

      if (ev.day === currentDay && evMinutes > currentMinutes) {
        found = ev;
        dayLabel = "Hoje";
        break;
      } else if (ev.day > currentDay) {
        found = ev;
        dayLabel = ev.day === currentDay + 1 ? "Amanhã" : dayNames[ev.day];
        break;
      }
    }

    if (!found) {
      found = sorted[0];
      dayLabel = dayNames[found.day];
    }

    setNextEvent({
      name: found.name,
      local: found.local,
      label: `${dayLabel}, ${found.time.replace(":", "h")}`,
    });
  }, []);

  if (!nextEvent) {
    return (
      <div className="bg-zinc-950/50 backdrop-blur-md border border-zinc-800/50 p-8 rounded-[2.5rem] w-full md:w-96 shrink-0 h-[240px] animate-pulse"></div>
    );
  }

  return (
    <div className="bg-zinc-950/80 backdrop-blur-md border border-zinc-800 p-8 rounded-[2.5rem] w-full md:w-96 shrink-0 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[50px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-amber-500/20"></div>

      <div className="flex items-center gap-3 mb-6 text-amber-500">
        <Clock className="w-4 h-4" />
        <span className="text-xs font-medium uppercase tracking-[0.2em]">
          {nextEvent.name === "Santa Missa"
            ? "Próxima Missa"
            : "Próximo Evento"}
        </span>
      </div>

      <div className="font-serif text-4xl text-zinc-100 mb-2">
        {nextEvent.label}
      </div>

      <div className="text-zinc-300 font-medium text-lg mb-1">
        {nextEvent.name}
      </div>

      <div className="text-zinc-500 text-sm mb-10 font-light">
        {nextEvent.local}
      </div>

      <a
        href="/horarios"
        className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-100 hover:text-amber-400 transition-colors group/link w-fit"
      >
        Ver agenda completa
        <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
      </a>
    </div>
  );
}
