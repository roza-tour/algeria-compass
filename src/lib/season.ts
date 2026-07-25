// Typed facade over the seasonal calendar. The maths lives in season-calendar.mjs
// (plain JS) so the CLI (`npm run season:calendar`) can import the exact same
// logic the site builds with — no second implementation to drift.
export type Season =
  | 'spring' | 'summer' | 'autumn' | 'winter'
  | 'christmas' | 'ramadan' | 'eid' | 'mawlid' | 'yennayer' | 'national';
export type Window = { from: string; to: string; season: Season; label: string };

// @ts-ignore - plain JS module
import * as cal from './season-calendar.mjs';

export const windowsForYear = cal.windowsForYear as (y: number) => Window[];
export const seasonForMonth = cal.seasonForMonth as (m: number) => Season;
export const seasonForDate = cal.seasonForDate as (d: Date) => Season;
export const upcomingWindows = cal.upcomingWindows as (from: Date, months?: number) => Window[];
export const SEASON_LABEL = cal.SEASON_LABEL as Record<Season, string>;
