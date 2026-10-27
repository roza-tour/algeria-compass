// The eight civilisation skins' art, redrawn October 2026.
//
// The first set was a lozenge, a stick cross, two arches, an L-shaped key...
// the owner called all eight "primitive". Each is redrawn here as something
// the civilisation actually made, in fine line-art:
//
//   01 Amazigh            emblem: the Tifinagh yaz ⵣ        pattern: Kabyle pottery lozenges
//   02 Tuareg & Sahara    emblem: the cross of Agadez        pattern: Tuareg leather triangles
//   03 Mozabite M'Zab     emblem: Ghardaia's minaret         pattern: crenellated arcade
//   04 Numidian & Roman   emblem: the Medracen mausoleum     pattern: Roman guilloche braid
//   05 Islamic-Berber     emblem: Beni Hammad's minaret      pattern: Almohad sebka net
//   06 Andalusian         emblem: horseshoe arch in alfiz    pattern: Cordoba interlaced arches
//   07 Ottoman Algiers    emblem: Ketchaoua's dome & towers  pattern: Ottoman tulip tile
//   08 Modern Algeria     emblem: Maqam Echahid              pattern: deco fan
//
// Same contract as before: CCC -> accent, DDD -> accent2, patterns carry
// their own opacity, emblems are on a 48 viewBox. Every emblem shape has
// pathLength="1" so a page can draw it in.
const g = (body, w = 2) => `<g fill='none' stroke='CCC' stroke-width='${w}' stroke-linecap='round' stroke-linejoin='round'>${body}</g>`;
const gd = (body, w = 2) => `<g fill='none' stroke='DDD' stroke-width='${w}' stroke-linecap='round' stroke-linejoin='round'>${body}</g>`;
const em = body => `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>${body}</svg>`
  .replace(/<(path|circle|rect)\b/g, "<$1 pathLength='1'");
const pat = (w, h, body, op = .26) => `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'><g fill='none' stroke='CCC' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round' opacity='${op}'>${body}</g></svg>`;

export const CIV_ART = {
  '01': {
    pw: 48, ph: 48,
    pattern: pat(48, 48, `<path d='M24 4L44 24L24 44L4 24Z'/><path d='M24 13L35 24L24 35L13 24Z'/><path d='M24 20L28 24L24 28L20 24Z'/><path d='M24 4V0M24 44V48M4 24H0M44 24H48'/><path d='M0 0L8 0L0 8ZM48 0L40 0L48 8ZM0 48L8 48L0 40ZM48 48L40 48L48 40Z'/><path d='M14 14L10 10M34 14L38 10M14 34L10 38M34 34L38 38'/>`),
    emblem: em(g(`<path d='M24 5V43'/><path d='M12 8Q12 20 24 20Q36 20 36 8'/><path d='M12 40Q12 28 24 28Q36 28 36 40'/>`, 2.4) + gd(`<path d='M5 24L8 21L11 24L8 27Z'/><path d='M37 24L40 21L43 24L40 27Z'/>`, 1.6)),
  },
  '02': {
    pw: 40, ph: 40,
    pattern: pat(40, 40, `<path d='M0 40L5 32L10 40L15 32L20 40L25 32L30 40L35 32L40 40'/><path d='M0 0L5 8L10 0L15 8L20 0L25 8L30 0L35 8L40 0'/><path d='M20 12L28 20L20 28L12 20Z'/><path d='M20 16V24M16 20H24'/><path d='M0 20H6M34 20H40'/>`, .3),
    emblem: em(g(`<circle cx='24' cy='10' r='5.5'/><circle cx='24' cy='10' r='2.4'/><path d='M21.6 15.5L19 17.5L13 15.5L15 20.5L20 21L16 28.5L24 43L32 28.5L28 21L33 20.5L35 15.5L29 17.5L26.4 15.5'/>`, 2) + gd(`<path d='M24 23.5L28 29.5L24 37L20 29.5Z'/>`, 1.6)),
  },
  '03': {
    pw: 48, ph: 34,
    pattern: pat(48, 34, `<path d='M0 4H4V0H8V4H12V0H16V4H20V0H24V4H28V0H32V4H36V0H40V4H44V0H48V4'/><path d='M3 34V20A9 9 0 0 1 21 20V34'/><path d='M27 34V20A9 9 0 0 1 45 20V34'/><path d='M0 9H48'/>`),
    emblem: em(g(`<path d='M4 44H44'/><path d='M6 44L11 39H16V36H21'/><path d='M42 44L37 39H32V36H27'/><path d='M21 44V36L22.5 11H25.5L27 36V44'/><path d='M22.5 11L21.8 7M24 11V5M25.5 11L26.2 7'/>`) + gd(`<path d='M23.2 17H24.8M23 23H25M22.8 29H25.2'/>`, 1.6)),
  },
  '04': {
    pw: 40, ph: 20,
    pattern: pat(40, 20, `<path d='M0 1H40M0 19H40'/><path d='M0 10C6 3 14 3 20 10S34 17 40 10'/><path d='M0 10C6 17 14 17 20 10S34 3 40 10'/><circle cx='10' cy='10' r='2.2'/><circle cx='30' cy='10' r='2.2'/>`),
    emblem: em(g(`<path d='M5 42H43'/><path d='M8 42V31H40V42'/><path d='M7 31H41'/><path d='M10 31L13 27H35L38 31'/><path d='M13 27L16 23H32L35 27'/><path d='M16 23L19 19H29L32 23'/><path d='M19 19L22 15H26L29 19'/>`) + gd(`<path d='M13 33V40M18 33V40M24 33V40M30 33V40M35 33V40'/>`, 1.5)),
  },
  '05': {
    pw: 40, ph: 40,
    pattern: pat(40, 40, `<path d='M0 20A7.5 7.5 0 0 1 10 10A7.5 7.5 0 0 1 20 0'/><path d='M20 0A7.5 7.5 0 0 1 30 10A7.5 7.5 0 0 1 40 20'/><path d='M40 20A7.5 7.5 0 0 1 30 30A7.5 7.5 0 0 1 20 40'/><path d='M20 40A7.5 7.5 0 0 1 10 30A7.5 7.5 0 0 1 0 20'/><path d='M20 15L22 20L20 25L18 20ZM15 20L20 18L25 20L20 22Z'/>`),
    emblem: em(g(`<path d='M17 44V12H31V44'/><path d='M15 12H33'/><path d='M19 12V7H29V12'/><path d='M22 7Q24 2 26 7'/><path d='M21 36V32A3 3 0 0 1 27 32V36'/><path d='M14 44H34'/>`) + gd(`<path d='M24 15L28 20L24 26L20 20Z'/>`, 1.6)),
  },
  '06': {
    pw: 40, ph: 30,
    pattern: pat(40, 30, `<path d='M0 30V16A10 10 0 0 1 20 16V30'/><path d='M20 30V16A10 10 0 0 1 40 16V30'/><path d='M10 30V16A10 10 0 0 1 30 16' opacity='.7'/><path d='M30 30V16A10 10 0 0 1 50 16' opacity='.7'/><path d='M-10 30V16A10 10 0 0 1 10 16' opacity='.7'/><circle cx='10' cy='3' r='1.2'/><circle cx='30' cy='3' r='1.2'/>`),
    emblem: em(g(`<path d='M7 44V7H41V44'/><path d='M12 44V25A12 12 0 1 1 36 25V44'/>`) + gd(`<path d='M17 44V27A7 7 0 1 1 31 27V44'/><path d='M11 11L13 13M37 11L35 13'/>`, 1.6)),
  },
  '07': {
    pw: 44, ph: 44,
    pattern: pat(44, 44, `<path d='M22 36V22'/><path d='M22 22C16 20 15 12 18 8C20 12 22 10 22 6C22 10 24 12 26 8C29 12 28 20 22 22Z'/><path d='M22 32Q14 30 12 23M22 32Q30 30 32 23'/><circle cx='0' cy='0' r='6'/><circle cx='44' cy='0' r='6'/><circle cx='0' cy='44' r='6'/><circle cx='44' cy='44' r='6'/><circle cx='0' cy='0' r='2'/><circle cx='44' cy='0' r='2'/><circle cx='0' cy='44' r='2'/><circle cx='44' cy='44' r='2'/>`),
    emblem: em(g(`<path d='M4 44H44'/><path d='M13 44V27H35V44'/><path d='M14 27A10 10 0 0 1 34 27'/><path d='M24 17V12'/><path d='M7 44V18H11V44M37 44V18H41V44'/><path d='M6 18L9 13L12 18M36 18L39 13L42 18'/>`) + gd(`<path d='M21 44V37A3 3 0 0 1 27 37V44'/><circle cx='24' cy='10.5' r='1.4'/>`, 1.6)),
  },
  '08': {
    pw: 40, ph: 40,
    pattern: pat(40, 40, `<path d='M0 28A12 12 0 0 1 12 40M0 20A20 20 0 0 1 20 40M0 12A28 28 0 0 1 28 40M0 4A36 36 0 0 1 36 40'/><path d='M40 12A12 12 0 0 1 28 0M40 20A20 20 0 0 1 20 0M40 28A28 28 0 0 1 12 0' opacity='.6'/>`, .24),
    emblem: em(g(`<path d='M5 43H43'/><path d='M24 6C18 16 12 30 10 43M24 6C21 18 18 30 16 43'/><path d='M24 6C30 16 36 30 38 43M24 6C27 18 30 30 32 43'/><path d='M24 6C23.5 20 23 32 22 43M24 6C24.5 20 25 32 26 43'/>`) + gd(`<path d='M18 37H30'/><circle cx='24' cy='40' r='1.6'/>`, 1.6)),
  },
};
