// French versions of the destination guides. Same places, same photography as
// the English collection — this file only carries language, so a destination
// can never drift between the two versions.
//
// Slugs match src/content/destination/*.md so the pair is unambiguous, and the
// French URL uses a French path segment (/fr/destinations/<slug-fr>/) with an
// explicit `en` slug for the hreflang pairing.

export interface DestFr {
  slug: string;          // French URL segment
  en: string;            // English collection slug (for hreflang + image lookup)
  name: string;
  eyebrow: string;
  intro: string;
  quick: string;
  sections: { h: string; p: string }[];
  facts: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
  seoTitle: string;
  seoDescription: string;
}

export const DESTINATIONS_FR: DestFr[] = [
  {
    slug: 'timgad', en: 'timgad',
    name: 'Timgad', eyebrow: 'Patrimoine mondial · Batna',
    intro: "La cité romaine en damier la plus complète qui subsiste, fondée par Trajan vers 100 après J.-C. et souvent appelée la Pompéi de l'Afrique.",
    quick: "Timgad, l'antique Thamugadi, est une colonie romaine fondée vers 100 après J.-C. par l'empereur Trajan pour ses vétérans, dans la wilaya de Batna. Ensevelie par les sables pendant des siècles, elle a conservé son plan en damier intact : l'arc de Trajan, le théâtre, le forum, les thermes et une bibliothèque publique. Elle est inscrite au patrimoine mondial de l'UNESCO depuis 1982.",
    sections: [
      { h: "Pourquoi Timgad est unique", p: "La plupart des villes romaines ont été réoccupées, démolies et rebâties. Timgad, elle, a été abandonnée puis recouverte par le sable, ce qui a figé son plan d'origine. On y lit encore le damier militaire romain dans son intégralité : le cardo et le decumanus, les îlots réguliers, les portes et le rempart. C'est ce degré de lisibilité, plus que la hauteur des vestiges, qui en fait un site exceptionnel." },
      { h: "Que voir sur place", p: "L'arc de Trajan, à l'ouest, est la carte postale du site. Le théâtre, adossé à la pente, accueille encore un festival en été. Le forum, les thermes du nord et du sud, le marché de Sertius et surtout la bibliothèque publique — l'une des rares connues du monde romain — jalonnent la visite. Le musée de site conserve un ensemble remarquable de mosaïques trouvées dans les maisons." },
      { h: "Le contexte : l'Aurès", p: "Timgad se trouve au pied des Aurès, massif berbère chaoui qui domine l'est algérien. À une vingtaine de kilomètres se dresse le mausolée numide d'Imedghassen, antérieur à la présence romaine, qui rappelle que la région avait ses royaumes bien avant Rome." },
      { h: "Comment s'y rendre", p: "Timgad est à environ 35 km à l'est de Batna, soit une demi-heure de route. Batna dispose d'un aéroport avec des vols depuis Alger, et se rejoint aussi par l'autoroute est-ouest. Le site est vaste et sans ombre : prévoyez de bonnes chaussures, un chapeau et de l'eau, et privilégiez le printemps ou l'automne." },
    ],
    facts: [
      { label: 'Wilaya', value: 'Batna' },
      { label: 'Fondation', value: 'Vers 100 apr. J.-C., par Trajan' },
      { label: 'UNESCO', value: 'Inscrit en 1982' },
      { label: 'Durée de visite', value: 'Une demi-journée' },
      { label: 'Meilleure saison', value: 'Mars-juin, septembre-novembre' },
    ],
    faqs: [
      { q: 'Pourquoi appelle-t-on Timgad la Pompéi de l\'Afrique ?', a: "Parce que, comme Pompéi, la ville a été conservée par un recouvrement — le sable plutôt que les cendres — et qu'on y retrouve un plan urbain complet plutôt que des monuments isolés." },
      { q: 'Combien de temps faut-il pour visiter Timgad ?', a: "Comptez une demi-journée pour le site et le musée. En combinant avec le mausolée d'Imedghassen et une incursion dans les Aurès, la journée est bien remplie." },
      { q: 'Y a-t-il beaucoup de visiteurs ?', a: "Très peu. Il est fréquent de parcourir le site en ne croisant qu'une poignée de personnes, ce qui est devenu introuvable ailleurs en Méditerranée." },
      { q: 'Peut-on visiter Timgad depuis Alger dans la journée ?', a: "C'est très long : environ 450 km. Mieux vaut passer une nuit à Batna ou à Constantine, ou intégrer Timgad à un circuit dans l'est du pays." },
    ],
    seoTitle: 'Timgad, Algérie : la cité romaine classée UNESCO',
    seoDescription: "Timgad, cité romaine fondée par Trajan et classée UNESCO : l'arc de Trajan, le théâtre, la bibliothèque et le plan en damier intact. Que voir et y aller.",
  },
  {
    slug: 'djemila', en: 'djemila',
    name: 'Djémila', eyebrow: 'Patrimoine mondial · Sétif',
    intro: "Cuicul, cité romaine posée dans un cirque de collines à 900 mètres d'altitude — l'un des ensembles les mieux conservés d'Afrique du Nord.",
    quick: "Djémila, l'antique Cuicul, est une cité romaine de la wilaya de Sétif, installée sur un éperon entre deux oueds à 900 mètres d'altitude. Fondée au Ier siècle, elle conserve un forum, des temples, des basiliques, des maisons à mosaïques et un ensemble chrétien tardif. Elle est inscrite au patrimoine mondial de l'UNESCO depuis 1982.",
    sections: [
      { h: "Le site et son cadre", p: "Djémila doit son nom actuel — « la belle » en arabe — à son cadre. La cité épouse un relief accidenté, ce qui l'écarte du plan romain théorique et donne une ville qui s'adapte à la montagne : rues en pente, places décalées, quartiers qui s'étagent. Le résultat est plus pittoresque et plus lisible que bien des sites de plaine." },
      { h: "Que voir sur place", p: "Le forum des Sévères et l'arc de Caracalla forment le cœur monumental. Le temple de la famille sévérienne, le théâtre creusé dans la pente en dehors des murs, le marché de Cosinius avec ses tables de mesure, les thermes et les basiliques chrétiennes complètent l'ensemble. Le musée de site abrite l'une des plus belles collections de mosaïques romaines d'Afrique du Nord." },
      { h: "Le contexte : les hauts plateaux", p: "Djémila se rattache à Sétif, l'antique Sitifis, capitale régionale romaine puis ville des hauts plateaux céréaliers. La région est fraîche, verte au printemps et enneigée certains hivers — un contraste utile avec l'image saharienne de l'Algérie." },
      { h: "Comment s'y rendre", p: "Djémila est à environ 50 km au nord-est de Sétif, sur une route de montagne. Sétif se rejoint par vol depuis Alger, par le train ou par l'autoroute est-ouest. Le site se visite en deux à trois heures, musée compris ; l'altitude rend les matinées fraîches hors été." },
    ],
    facts: [
      { label: 'Wilaya', value: 'Sétif' },
      { label: 'Nom antique', value: 'Cuicul' },
      { label: 'UNESCO', value: 'Inscrit en 1982' },
      { label: 'Altitude', value: 'Environ 900 m' },
      { label: 'Durée de visite', value: '2 à 3 heures' },
    ],
    faqs: [
      { q: 'Djémila ou Timgad ?', a: "Les deux, si possible. Timgad impressionne par l'intégralité de son plan, Djémila par son cadre et ses mosaïques. Elles sont à environ trois heures de route l'une de l'autre." },
      { q: 'Le musée vaut-il la visite ?', a: "Oui, sans hésiter. Les mosaïques de Djémila comptent parmi les plus belles conservées en Afrique du Nord et éclairent la vie quotidienne de la cité." },
      { q: 'Quand visiter Djémila ?', a: "Au printemps et en automne. À 900 mètres, les hivers sont froids et humides et les étés peuvent être chauds en milieu de journée." },
      { q: 'Faut-il un guide ?', a: "C'est vivement conseillé : la signalétique est minimale et l'organisation de la ville, adaptée au relief, se comprend beaucoup mieux avec des explications." },
    ],
    seoTitle: 'Djémila, Algérie : la cité romaine de Cuicul (UNESCO)',
    seoDescription: "Djémila (Cuicul), cité romaine classée UNESCO dans la wilaya de Sétif : forum des Sévères, arc de Caracalla, théâtre et mosaïques. Que voir et comment y aller.",
  },
  {
    slug: 'tipaza', en: 'tipaza',
    name: 'Tipaza', eyebrow: 'Patrimoine mondial · Tipaza',
    intro: "Des ruines romaines et puniques posées au bord de la Méditerranée, à une heure d'Alger — le site archéologique le plus accessible du pays.",
    quick: "Tipaza est un site archéologique du littoral algérien, à environ 70 km à l'ouest d'Alger. Comptoir punique devenu colonie romaine, la ville conserve un théâtre, des basiliques, des thermes et des nécropoles directement en bord de mer. Elle est inscrite au patrimoine mondial de l'UNESCO depuis 1982, avec le Mausolée royal de Maurétanie tout proche.",
    sections: [
      { h: "Un site en bord de mer", p: "Ce qui distingue Tipaza, c'est sa situation : les ruines descendent jusqu'à la roche et à l'eau, si bien que l'on visite un site antique avec la Méditerranée pour arrière-plan permanent. Albert Camus, qui y venait, en a tiré l'un de ses textes les plus connus, Noces à Tipasa." },
      { h: "Que voir sur place", p: "Le parc archéologique réunit le théâtre, l'amphithéâtre, les thermes, la basilique d'Alexandre et la grande basilique chrétienne, ainsi que le decumanus qui traverse la ville. Le musée présente mosaïques et objets issus des fouilles. À quelques kilomètres, sur la crête, le Mausolée royal de Maurétanie — vaste tombeau circulaire à degrés attribué à Juba II et Cléopâtre Séléné — domine la plaine." },
      { h: "Le contexte : Cherchell", p: "Une trentaine de kilomètres plus à l'ouest, Cherchell est l'antique Caesarea, capitale de la Maurétanie césarienne. Son musée archéologique conserve des sculptures et des mosaïques de premier ordre, et se combine naturellement avec Tipaza sur une même journée." },
      { h: "Comment s'y rendre", p: "Tipaza est à environ une heure de route d'Alger par la côte, ce qui en fait l'excursion d'une journée la plus simple depuis la capitale. Le site est en plein air et peu ombragé : chapeau, eau et bonnes chaussures. Le printemps et l'automne sont les meilleures périodes." },
    ],
    facts: [
      { label: 'Wilaya', value: 'Tipaza' },
      { label: "Distance d'Alger", value: 'Environ 70 km' },
      { label: 'UNESCO', value: 'Inscrit en 1982' },
      { label: 'À combiner avec', value: 'Cherchell et le Mausolée royal' },
      { label: 'Durée de visite', value: 'Une demi-journée' },
    ],
    faqs: [
      { q: "Peut-on visiter Tipaza depuis Alger dans la journée ?", a: "Oui, c'est l'excursion classique : une heure de route, une demi-journée sur le site, et le retour dans l'après-midi. En ajoutant Cherchell, la journée est complète." },
      { q: "Qu'est-ce que le Mausolée royal de Maurétanie ?", a: "Un tombeau monumental circulaire à degrés, sur la crête au-dessus de la côte, traditionnellement attribué au roi Juba II et à son épouse Cléopâtre Séléné, fille de Cléopâtre VII et de Marc Antoine." },
      { q: 'Peut-on se baigner à Tipaza ?', a: "La côte tout autour compte des plages, et la région est une destination balnéaire pour les Algérois en été. La baignade n'est pas prévue dans le site archéologique lui-même." },
      { q: 'Faut-il un guide à Tipaza ?', a: "Le site se parcourt agréablement seul, mais un guide donne la chronologie punique, romaine puis chrétienne, qui n'est pas évidente à lire sur place." },
    ],
    seoTitle: 'Tipaza, Algérie : ruines romaines au bord de la mer',
    seoDescription: "Tipaza, site romain classé UNESCO au bord de la Méditerranée à une heure d'Alger : théâtre, basiliques, Mausolée royal de Maurétanie et musée de Cherchell.",
  },
  {
    slug: 'vallee-du-mzab', en: 'mzab-valley',
    name: "La vallée du M'Zab", eyebrow: 'Patrimoine mondial · Ghardaïa',
    intro: "Cinq cités fortifiées bâties au XIe siècle par la communauté ibadite mozabite — un urbanisme si cohérent que Le Corbusier y est revenu plusieurs fois.",
    quick: "La vallée du M'Zab, dans la wilaya de Ghardaïa, réunit cinq ksour fortifiés — Ghardaïa, Beni Isguen, Melika, Bounoura et El Atteuf — fondés à partir du XIe siècle par les Ibadites mozabites. Chaque cité s'organise en cercles concentriques autour de sa mosquée, avec sa palmeraie et son système d'eau. L'ensemble est inscrit au patrimoine mondial de l'UNESCO depuis 1982.",
    sections: [
      { h: "Un urbanisme complet", p: "Le M'Zab n'est pas un décor : c'est un système. Mosquée-forteresse au sommet, habitat en cercles concentriques descendant la colline, remparts, cimetière à l'extérieur, palmeraie en contrebas avec les maisons d'été, et un dispositif de captage et de partage des eaux de crue qui alimente les jardins. Chaque élément répond à une contrainte — défense, chaleur, rareté de l'eau, égalité communautaire — et l'ensemble fonctionne encore." },
      { h: "L'influence sur l'architecture moderne", p: "Le Corbusier a visité le M'Zab à plusieurs reprises dans les années 1930 et y a puisé des principes qu'il a revendiqués : économie de moyens, formes pures, rapport entre l'espace privé et la lumière. Le site est régulièrement cité comme une référence majeure de l'architecture vernaculaire." },
      { h: "Que voir sur place", p: "Ghardaïa et son marché en amphithéâtre sont le point d'entrée. Beni Isguen, la cité sainte, se visite avec un guide mandaté par la communauté, à des horaires précis et avec des règles de photographie strictes. El Atteuf, la plus ancienne, conserve la mosquée Sidi Brahim. Melika domine la vallée depuis sa colline et son cimetière." },
      { h: "Comment s'y rendre et se comporter", p: "Ghardaïa se rejoint en une heure de vol depuis Alger. La vallée est nettement plus conservatrice que le nord : tenue couvrante pour tous, photographie discrète et jamais des personnes sans autorisation, et respect absolu des règles à Beni Isguen. La meilleure période va d'octobre à avril." },
    ],
    facts: [
      { label: 'Wilaya', value: 'Ghardaïa' },
      { label: 'Fondation', value: 'À partir du XIe siècle' },
      { label: 'UNESCO', value: 'Inscrit en 1982' },
      { label: 'Cités', value: '5 ksour fortifiés' },
      { label: 'Accès', value: 'Vol Alger-Ghardaïa, environ 1 h' },
    ],
    faqs: [
      { q: "Peut-on visiter Beni Isguen librement ?", a: "Non. La cité sainte se visite accompagné d'un guide local mandaté, à des horaires définis, et la photographie y est restreinte. Il s'agit d'une règle communautaire, pas d'une formalité touristique." },
      { q: "Qui sont les Mozabites ?", a: "Une communauté berbère de rite ibadite, branche de l'islam distincte du sunnisme et du chiisme, installée dans la vallée depuis le XIe siècle et connue pour son organisation sociale et son commerce." },
      { q: "Combien de jours prévoir ?", a: "Deux à trois jours permettent de voir plusieurs cités, la palmeraie et le système d'eau sans se presser, avec éventuellement une sortie dans le désert." },
      { q: "Quelle tenue adopter ?", a: "Couvrante pour les hommes comme pour les femmes : épaules et genoux couverts, vêtements amples. C'est la région la plus conservatrice d'un itinéraire algérien classique." },
    ],
    seoTitle: "Vallée du M'Zab, Ghardaïa : le guide (UNESCO)",
    seoDescription: "La vallée du M'Zab à Ghardaïa, classée UNESCO : les cinq cités ibadites, Beni Isguen, les palmeraies et l'urbanisme qui a inspiré Le Corbusier.",
  },
  {
    slug: 'casbah-alger', en: 'casbah-of-algiers',
    name: "La Casbah d'Alger", eyebrow: "Patrimoine mondial · Alger",
    intro: "La médina ottomane d'Alger, dévalant la colline jusqu'à la baie en un labyrinthe de ruelles, d'escaliers et de palais.",
    quick: "La Casbah d'Alger est la vieille ville de la capitale, bâtie sur une colline qui descend vers la Méditerranée. Cité ottomane fortifiée développée à partir du XVIe siècle sur des fondations plus anciennes, elle conserve des palais, des mosquées, des hammams et un tissu urbain dense de ruelles et d'escaliers. Elle est inscrite au patrimoine mondial de l'UNESCO depuis 1992.",
    sections: [
      { h: "Une ville verticale", p: "La Casbah n'a pas de rue plate. Tout y est pente, marche et passage couvert, et la trame est conçue pour la vie communautaire autant que pour la défense : maisons à patio tournées vers l'intérieur, terrasses communicantes, impasses privées. On ne la traverse pas, on y entre." },
      { h: "Que voir sur place", p: "La citadelle qui couronne la colline, le palais des Raïs (Bastion 23) sur le front de mer, la mosquée Ketchaoua à la charnière avec la ville coloniale, la Djamaa el-Kebir, plusieurs demeures ottomanes restaurées et les points de vue sur la baie depuis les terrasses. Beaucoup de ce qui compte se trouve derrière des portes : la visite dépend largement de qui vous accompagne." },
      { h: "Histoire et mémoire", p: "La Casbah est aussi un lieu de mémoire de la guerre d'indépendance : ses ruelles ont abrité la Bataille d'Alger, épisode central de 1957, et le quartier reste étroitement associé à cette histoire dans l'imaginaire algérien." },
      { h: "Comment la visiter", p: "Avec un guide, sans hésitation. Non pour des raisons de sécurité — le quartier est habité et accueillant — mais parce qu'il est impossible de s'y repérer et que l'accès aux palais et aux terrasses passe par des personnes qui y vivent. Chaussures adaptées : les pavés sont raides et glissants par temps de pluie." },
    ],
    facts: [
      { label: 'Wilaya', value: 'Alger' },
      { label: 'UNESCO', value: 'Inscrit en 1992' },
      { label: 'Période', value: 'Ottomane, à partir du XVIe siècle' },
      { label: 'Durée de visite', value: '2 à 4 heures' },
      { label: 'Conseil', value: 'Guide local vivement recommandé' },
    ],
    faqs: [
      { q: "La Casbah est-elle sûre ?", a: "Oui. C'est un quartier habité et hospitalier ; la difficulté est de s'y orienter, pas de s'y sentir en danger. Comme partout, gardez téléphone et sac discrets." },
      { q: "Faut-il un guide pour la Casbah ?", a: "C'est fortement conseillé. Le dédale est réellement impraticable sans repères, et l'essentiel — patios, terrasses, palais — se trouve derrière des portes qu'un guide local peut ouvrir." },
      { q: "Combien de temps prévoir ?", a: "Deux à quatre heures selon le rythme et le nombre de maisons visitées. C'est une visite qui se marche, en montée et en descente." },
      { q: "Que voir d'autre à Alger ?", a: "La Grande Mosquée d'Alger, le Mémorial du Martyr, le musée du Bardo, le Jardin d'Essai du Hamma, la basilique Notre-Dame d'Afrique et les boulevards à arcades du front de mer." },
    ],
    seoTitle: "La Casbah d'Alger : visiter la médina (UNESCO)",
    seoDescription: "La Casbah d'Alger, médina ottomane classée UNESCO : citadelle, palais des Raïs, mosquée Ketchaoua et ruelles en escalier. Que voir et comment la visiter.",
  },
  {
    slug: 'tassili-najjer', en: 'tassili-najjer',
    name: "Le Tassili n'Ajjer", eyebrow: 'Patrimoine mondial · Illizi et Djanet',
    intro: "Un plateau de grès érodé grand comme un pays, couvert de milliers de peintures et gravures préhistoriques d'un Sahara alors vert.",
    quick: "Le Tassili n'Ajjer est un plateau de grès du sud-est algérien, dans les wilayas d'Illizi et de Djanet. Il abrite l'une des plus grandes concentrations d'art rupestre préhistorique au monde — plusieurs milliers de sites — au milieu de formations érodées en piliers, arches et canyons. Il est inscrit au patrimoine mondial de l'UNESCO depuis 1982, à la fois pour ses critères culturels et naturels.",
    sections: [
      { h: "Un Sahara qui fut vert", p: "Les plus anciennes gravures remontent à environ 10 000 ans et représentent des éléphants, des girafes, des hippopotames et des crocodiles. Viennent ensuite les phases pastorales, avec les troupeaux de bovins, puis les chevaux et les chars, puis enfin le chameau. C'est un enregistrement visuel de l'assèchement progressif du Sahara, réalisé par ceux qui l'ont vécu." },
      { h: "Le paysage", p: "Le plateau est érodé en ce que l'on appelle des forêts de rochers : des milliers de piliers de grès séparés par des couloirs de sable, ponctués d'arches naturelles et de gueltas — vasques d'eau permanente qui abritent une faune relique. Au sud, la Tadrart déploie un grès rouge et des dunes parmi les plus photogéniques du Sahara." },
      { h: "Les Touaregs", p: "Le Tassili est le territoire des Kel Ajjer, confédération touarègue qui a donné son nom au massif. Ce sont eux qui guident, conduisent et cuisinent sur toutes les expéditions, et l'hospitalité qui accompagne le voyage — le thé, le pain cuit dans le sable — n'est pas une mise en scène." },
      { h: "Comment le visiter", p: "Par un vol Alger-Djanet, puis en 4×4 et à pied avec un opérateur agréé disposant des permis. Le plateau proprement dit se parcourt en randonnée de plusieurs jours avec des ânes ou des chameaux de bât. La saison est strictement l'hiver, de novembre à février, et il n'y a aucun réseau une fois hors de la ville." },
    ],
    facts: [
      { label: 'Wilayas', value: "Illizi et Djanet" },
      { label: 'UNESCO', value: 'Inscrit en 1982 (mixte)' },
      { label: 'Art rupestre', value: 'Plusieurs milliers de sites' },
      { label: 'Saison', value: 'Novembre à février uniquement' },
      { label: 'Accès', value: 'Vol Alger-Djanet puis 4×4' },
    ],
    faqs: [
      { q: "Peut-on visiter le Tassili seul ?", a: "Non. Le grand sud se parcourt avec un opérateur agréé, un guide accrédité et des permis. Ce n'est pas seulement une règle administrative : distances, chaleur et absence de réseau en font un environnement d'expédition." },
      { q: "Quel âge a l'art rupestre du Tassili ?", a: "Les plus anciennes gravures sont couramment datées d'environ 10 000 ans, et la production s'est poursuivie sur plusieurs millénaires à travers des phases successives." },
      { q: "Faut-il être sportif ?", a: "Pour la Tadrart en 4×4, non : quelques marches courtes suffisent. Pour le plateau du Tassili, oui — il s'agit d'un trek de plusieurs jours en autonomie, avec des nuits fraîches." },
      { q: "Quand partir ?", a: "De novembre à février. Hors de cette fenêtre, la chaleur rend les expéditions dangereuses et elles ne sont pas organisées." },
    ],
    seoTitle: "Tassili n'Ajjer : art rupestre et désert (UNESCO)",
    seoDescription: "Le Tassili n'Ajjer, plateau classé UNESCO du Sahara algérien : art rupestre préhistorique, forêts de rochers, gueltas et Tadrart. Saison, accès et permis.",
  },
  {
    slug: 'beni-hammad', en: 'beni-hammad',
    name: "Al Qal'a des Beni Hammad", eyebrow: "Patrimoine mondial · M'Sila",
    intro: "La capitale hammadide fondée en 1007, abandonnée puis ruinée — et le plus haut minaret conservé d'Algérie, seul au milieu des hauts plateaux.",
    quick: "Al Qal'a des Beni Hammad, dans la wilaya de M'Sila, est la première capitale de la dynastie hammadide, fondée en 1007 dans les montagnes du Hodna. Abandonnée au profit de Béjaïa puis détruite au XIIe siècle, elle conserve les fondations de ses palais, sa grande mosquée et son minaret, le plus haut subsistant en Algérie. Elle est inscrite au patrimoine mondial de l'UNESCO depuis 1980.",
    sections: [
      { h: "Une capitale disparue", p: "Fondée par Hammad ibn Buluggin, prince ziride, la cité est devenue en un siècle une capitale berbère prospère, avec palais, bains, marchés et ateliers. Le transfert de la cour à Béjaïa puis les destructions du XIIe siècle l'ont vidée. Ce qui reste est un champ de ruines exceptionnellement lisible : c'est justement parce que le site n'a jamais été réoccupé qu'il donne une image complète d'une ville musulmane fortifiée." },
      { h: "Que voir sur place", p: "Le minaret de la grande mosquée, haut d'une vingtaine de mètres, domine le site et se voit de loin. Les fondations du palais Dar al-Bahr, avec son grand bassin, laissent deviner une architecture de cour et d'eau. Les traces des remparts, des habitations et des ateliers de céramique complètent l'ensemble, dans un paysage de collines ouvertes." },
      { h: "À combiner avec", p: "La wilaya de M'Sila conserve aussi Bou Saada, oasis sur la marge saharienne à quelques heures de route, avec sa palmeraie, sa gorge et la zaouïa d'El Hamel. Les deux se combinent bien sur deux journées, en venant d'Alger ou de Sétif." },
      { h: "Comment s'y rendre", p: "Le site est en pleine campagne, à une trentaine de kilomètres au nord-est de M'Sila, et n'est pas desservi par les transports publics : il se rejoint en voiture. Prévoyez de l'eau et un chapeau, l'endroit est totalement dégagé. Le printemps et l'automne sont les meilleures saisons." },
    ],
    facts: [
      { label: 'Wilaya', value: "M'Sila" },
      { label: 'Fondation', value: '1007, par Hammad ibn Buluggin' },
      { label: 'UNESCO', value: 'Inscrit en 1980' },
      { label: 'Minaret', value: "Le plus haut conservé d'Algérie" },
      { label: 'Accès', value: 'En voiture uniquement' },
    ],
    faqs: [
      { q: "Que reste-t-il d'Al Qal'a des Beni Hammad ?", a: "Un vaste champ de ruines non reconstruites : le minaret de la grande mosquée, les fondations des palais et du bassin, et les traces des remparts et des quartiers artisanaux." },
      { q: "Qui étaient les Hammadides ?", a: "Une dynastie berbère issue des Zirides, qui a régné sur le Maghreb central du XIe au XIIe siècle depuis cette capitale puis depuis Béjaïa." },
      { q: "Le site est-il aménagé ?", a: "Sommairement. Il y a des gardiens et un accès balisé, mais peu d'interprétation sur place : un guide fait une réelle différence." },
      { q: "Combien de temps faut-il ?", a: "Environ deux heures sur place, plus le trajet. Comptez une demi-journée depuis M'Sila, davantage depuis Alger ou Sétif." },
    ],
    seoTitle: "Al Qal'a des Beni Hammad : la capitale hammadide",
    seoDescription: "Al Qal'a des Beni Hammad, capitale hammadide de 1007 classée UNESCO dans la wilaya de M'Sila : minaret, palais Dar al-Bahr et remparts. Que voir et y aller.",
  },
  {
    slug: 'constantine', en: 'constantine',
    name: 'Constantine', eyebrow: "Ville des ponts · Est algérien",
    intro: "Une ville bâtie sur un rocher fendu par un canyon de deux cents mètres, recousue par une série de ponts spectaculaires.",
    quick: "Constantine est la grande ville de l'est algérien, construite sur un piton rocheux que traversent les gorges du Rhumel, franchies par plusieurs ponts dont le célèbre pont suspendu Sidi M'Cid. Ancienne Cirta, capitale du royaume numide de Massinissa, elle conserve le palais Ahmed Bey, le musée de Cirta et une tradition musicale malouf toujours vivante.",
    sections: [
      { h: "Le site", p: "Peu de villes ont un site aussi improbable. Le rocher de Constantine est cerné et coupé par les gorges du Rhumel, profondes de près de deux cents mètres, et la ville s'est développée en franchissant ce vide : passerelles, ponts routiers, viaducs. Le pont suspendu Sidi M'Cid, le pont d'El Kantara et la passerelle Perrégaux dessinent une silhouette unique." },
      { h: "Histoire", p: "La ville est l'antique Cirta, capitale du royaume numide sous Massinissa au IIe siècle avant J.-C., puis cité romaine reconstruite par l'empereur Constantin, qui lui laisse son nom. Sous la régence ottomane, elle devient la grande ville du beylik de l'Est, et le palais du dernier bey en garde le témoignage." },
      { h: "Que voir sur place", p: "Le palais Ahmed Bey, avec ses cours, ses galeries peintes et ses jardins, est le monument majeur. Le musée de Cirta rassemble les collections numides et romaines de la région. Le monument aux morts, les gorges vues depuis les passerelles, la vieille ville, la mosquée de l'Émir Abdelkader et la médersa complètent la visite." },
      { h: "Musique et culture", p: "Constantine est le foyer du malouf, école de musique arabo-andalouse héritée de Séville, jouée lors des mariages et des festivals de la ville. C'est aussi une ville de cuisine réputée, connue notamment pour sa chakhchoukha." },
    ],
    facts: [
      { label: 'Wilaya', value: 'Constantine' },
      { label: 'Nom antique', value: 'Cirta' },
      { label: 'Gorges', value: 'Environ 200 m de profondeur' },
      { label: 'Musique', value: 'Malouf (arabo-andalou)' },
      { label: 'À combiner avec', value: 'Djémila et Timgad' },
    ],
    faqs: [
      { q: "Pourquoi Constantine est-elle appelée la ville des ponts ?", a: "Parce que son rocher est coupé par les gorges du Rhumel et que la ville n'a pu se développer qu'en les franchissant : plusieurs ponts et passerelles relient ses quartiers au-dessus du vide." },
      { q: "Combien de temps prévoir à Constantine ?", a: "Une à deux journées pour la ville. En ajoutant Djémila et Timgad, comptez trois à quatre jours pour l'est du pays." },
      { q: "Comment rejoindre Constantine ?", a: "Par vol depuis Alger, par le train, ou par l'autoroute est-ouest. La ville dispose de l'aéroport international Mohamed Boudiaf." },
      { q: "Qu'est-ce que le malouf ?", a: "Une école de musique arabo-andalouse dont Constantine est le principal foyer en Algérie, transmise depuis l'exil andalou et toujours jouée aujourd'hui." },
    ],
    seoTitle: 'Constantine, Algérie : la ville des ponts — guide',
    seoDescription: "Constantine, la ville des ponts sur les gorges du Rhumel : palais Ahmed Bey, musée de Cirta, l'antique Cirta numide et la musique malouf. Que voir et y aller.",
  },
  {
    slug: 'djanet', en: 'djanet',
    name: 'Djanet', eyebrow: 'Porte du Sahara · Sud-est',
    intro: "L'oasis touarègue du sud-est algérien, base de départ du Tassili n'Ajjer et de la Tadrart Rouge.",
    quick: "Djanet est une oasis du sud-est algérien, adossée à des falaises rouges au pied du Tassili n'Ajjer. C'est la ville touarègue de référence du grand sud et le point de départ des expéditions vers le plateau du Tassili et le désert de la Tadrart. On y accède par avion depuis Alger, et la saison va de novembre à février.",
    sections: [
      { h: "L'oasis", p: "Djanet est un vrai lieu de vie avant d'être une base logistique : une palmeraie étendue, des ksour anciens accrochés à la roche — El Mihan, Azelouaz, Adjahil — et un marché où se croisent Touaregs et gens venus du nord. La ville est calme, l'accueil chaleureux, et l'on y sent immédiatement que l'on a changé de pays culturel." },
      { h: "La Tadrart Rouge", p: "Au sud de Djanet s'étend la Tadrart, un massif de grès rouge sculpté par le vent, avec des arches naturelles, des canyons et des dunes qui viennent buter contre la roche noire. C'est le paysage saharien le plus photographié d'Algérie, parcouru en 4×4 sur plusieurs jours avec des nuits en bivouac." },
      { h: "Le Tassili n'Ajjer", p: "Au nord et à l'est, le plateau du Tassili se parcourt en randonnée de plusieurs jours, avec des ânes de bât et une équipe touarègue, pour rejoindre les grands sites d'art rupestre. C'est plus exigeant physiquement que la Tadrart, et complémentaire." },
      { h: "Pratique", p: "L'accès se fait par vol depuis Alger avec Air Algérie ou Tassili Airlines ; les fréquences sont limitées et les vols se remplissent en saison, donc réservez tôt. Il n'y a aucun réseau une fois hors de la ville, les nuits d'hiver sont froides, et tout se fait avec un opérateur agréé et des permis." },
    ],
    facts: [
      { label: 'Wilaya', value: 'Djanet' },
      { label: 'Culture', value: 'Touarègue (Kel Ajjer)' },
      { label: 'Accès', value: 'Vol depuis Alger' },
      { label: 'Saison', value: 'Novembre à février' },
      { label: 'À proximité', value: "Tadrart Rouge, Tassili n'Ajjer" },
    ],
    faqs: [
      { q: "Comment se rendre à Djanet ?", a: "Par avion depuis Alger, avec Air Algérie ou Tassili Airlines. La route depuis le nord représente plusieurs jours et n'est pas une option pour un voyage classique." },
      { q: "Quelle est la différence entre la Tadrart et le Tassili ?", a: "La Tadrart se parcourt en 4×4, avec des marches courtes, et offre les paysages de grès rouge et de dunes. Le plateau du Tassili se fait en trek de plusieurs jours et concentre les grands sites d'art rupestre." },
      { q: "Fait-il froid la nuit ?", a: "Oui, très. En plein hiver les températures nocturnes peuvent approcher zéro au bivouac : veste chaude, bonnet et vraies couches sont indispensables." },
      { q: "Y a-t-il du réseau ?", a: "Dans la ville de Djanet, oui. Dès que vous entrez dans le désert, plus rien — les équipes utilisent des communications satellitaires." },
    ],
    seoTitle: 'Djanet, Algérie : porte du Tassili et de la Tadrart',
    seoDescription: "Djanet, oasis touarègue du sud-est algérien : base de départ du Tassili n'Ajjer et de la Tadrart Rouge. Accès, saison, permis et ce qu'il faut savoir.",
  },
  {
    slug: 'tlemcen', en: 'tlemcen',
    name: 'Tlemcen', eyebrow: "Héritage andalou · Ouest algérien",
    intro: "La capitale culturelle de l'Algérie andalouse — Grande Mosquée, minaret de Mansourah, palais El Mechouar et musique gharnati.",
    quick: "Tlemcen est une ville de l'ouest algérien, proche de la frontière marocaine, considérée comme le foyer de l'héritage andalou en Algérie. Ancienne capitale zianide, elle conserve la Grande Mosquée du XIIe siècle, le minaret inachevé de Mansourah, le palais El Mechouar, le sanctuaire de Sidi Boumediene, et une tradition musicale gharnati héritée de Grenade.",
    sections: [
      { h: "Une capitale andalouse", p: "Tlemcen a été la capitale du royaume zianide du XIIIe au XVIe siècle et un carrefour entre le Maghreb, l'Andalousie et le Sahara. Les vagues successives de réfugiés andalous y ont apporté leur architecture, leur artisanat et leur musique, au point que la ville est aujourd'hui la référence de cet héritage en Algérie." },
      { h: "Que voir sur place", p: "La Grande Mosquée, fondée au XIe siècle et remaniée au XIIe, avec son mihrab en stuc ajouré. Le complexe de Mansourah et son minaret inachevé, vestige d'un siège mérinide. Le palais El Mechouar, restauré, au cœur de la citadelle zianide. Le sanctuaire et la médersa de Sidi Boumediene à El Eubbad. Et le plateau de Lalla Setti pour la vue sur la ville." },
      { h: "Nature et environs", p: "Les cascades d'El Ourit, dans une gorge boisée aux portes de la ville, offrent un contraste avec les monuments. La région compte aussi des grottes, des forêts de pins et, plus loin, les vestiges romains et numides de Siga vers la côte." },
      { h: "Musique et artisanat", p: "Le gharnati, école de musique arabo-andalouse issue de Grenade, est vivant à Tlemcen et se joue lors des mariages et des festivals. La ville est également connue pour son artisanat : tapis, broderie au fil d'or, cuivre et céramique." },
    ],
    facts: [
      { label: 'Wilaya', value: 'Tlemcen' },
      { label: 'Période phare', value: 'Royaume zianide, XIIIe-XVIe s.' },
      { label: 'Musique', value: 'Gharnati (arabo-andalou)' },
      { label: 'À voir', value: 'Grande Mosquée, Mansourah, El Mechouar' },
      { label: 'Meilleure saison', value: 'Avril-juin, septembre-novembre' },
    ],
    faqs: [
      { q: "Pourquoi Tlemcen est-elle appelée capitale andalouse ?", a: "Parce qu'elle a accueilli des vagues successives de réfugiés d'Al-Andalus, dont l'architecture, l'artisanat et la musique ont façonné la ville, et qu'elle en reste le principal conservatoire en Algérie." },
      { q: "Qu'est-ce que Mansourah ?", a: "Une ville de siège construite par les Mérinides au XIVe siècle face à Tlemcen. Il en subsiste des remparts et un minaret monumental resté inachevé." },
      { q: "Combien de jours prévoir ?", a: "Deux journées permettent de voir les grands monuments, El Ourit et Lalla Setti sans se presser." },
      { q: "Comment rejoindre Tlemcen ?", a: "Par son aéroport avec des vols depuis Alger, ou par la route depuis Oran, à environ deux heures." },
    ],
    seoTitle: "Tlemcen, Algérie : héritage andalou et gharnati",
    seoDescription: "Tlemcen, capitale de l'Algérie andalouse : Grande Mosquée, minaret de Mansourah, palais El Mechouar, Sidi Boumediene et cascades d'El Ourit.",
  },
];

export const destFrBySlug = (slug: string) => DESTINATIONS_FR.find(d => d.slug === slug);
export const destFrByEn = (en: string) => DESTINATIONS_FR.find(d => d.en === en);
