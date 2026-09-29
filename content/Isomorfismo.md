---
title: Isomorfismo
draft: false
tags:
  - isomorfismo
  - complejidad
  - información
  - vida
---
> [!quote] Definición de partida
> "Transformación mantenedora de la información": las copias conservan toda la información que hay en el tema original, de modo que la información es completamente recuperable a partir de cualquiera de sus copias.
> — Douglas R. Hofstadter, *Gödel, Escher, Bach* (1979). **⤿** La formulación técnica aparece en el capítulo II, "Significado y forma en las matemáticas"; no verificamos aquí la página exacta ni la edición castellana.

Esta definición requiere una precisión inicial: lo que Hofstadter afirma no es que dos cosas se parezcan. Afirma algo mucho más fuerte y mucho más raro —que nada se pierde. La versión completa que da en el mismo capítulo lo aclara: hay isomorfismo cuando dos estructuras complejas pueden aplicarse una sobre otra de tal modo que a cada parte de una corresponde una parte de la otra, y "corresponder" significa que ambas partes cumplen papeles semejantes en sus respectivas estructuras. El peso no está en el parecido: está en la **recuperabilidad**.

Y la recuperabilidad total es una condición de límite. Casi nada en el mundo la cumple. Por eso conviene desplegar el concepto en tres direcciones, porque en cada una la palabra cambia de exigencia.

## 1. Con las ciencias de la complejidad: identidad de la regla generativa

**Definición.** Dos sistemas son isomorfos cuando comparten la arquitectura de restricciones que define su repertorio de comportamientos posibles —cuando sus espacios de estados son equivalentes—, aunque no compartan materia, escala ni historia.

**◆** En sistemas dinámicos esto tiene nombre preciso: conjugación topológica. Dos sistemas son conjugados si existe un homeomorfismo que traduce las trayectorias de uno en las del otro conservando el orden temporal. Y tiene un hallazgo célebre detrás: las clases de universalidad del grupo de renormalización (Wilson, Kadanoff, años setenta), donde sistemas físicamente ajenos —un imán y un fluido cerca de su punto crítico— exhiben exactamente los mismos exponentes críticos. La misma regla, materias distintas.

**◆** Pero la complejidad descubre, en el mismo movimiento, que el isomorfismo es la excepción y no la norma. Anderson lo formuló en "More is Different" (*Science* 177, 1972): la ruptura de simetría hace que las leyes de un nivel no sean deducibles de las del nivel inferior aunque no haya nada más que ese nivel inferior. Lo que opera entre niveles no es isomorfismo sino **homomorfismo**: una proyección de muchos a uno, irreversible. La emergencia *es* esa irrecuperabilidad. Un nivel superior existe precisamente porque no se puede volver desde él al detalle que lo produjo.

**○** Si esto es así, la intuición que sostenemos en [[¿Qué es]] —que las ideas no se inventan sino que piden lugar— no describiría un isomorfismo entre el campo y lo que asoma, sino una proyección con pérdida: el campo tendría más estructura de la que llega a la forma, y lo que asoma sería siempre un residuo empobrecido y por eso mismo nuevo. *Qué la refutaría:* encontrar que lo que asoma en grupos distintos frente a condiciones equivalentes es reconstruible unívocamente, sin variación, desde esas condiciones. Si el campo determinara la forma, habría copia y no novedad.

**⟂ Contraindicio.** La tentación de ver isomorfismos por todas partes desmerece esta disciplina más que ninguna otra. Buena parte de las leyes de potencia reportadas en sistemas sociales y biológicos no sobreviven a un tratamiento estadístico riguroso (Clauset, Shalizi & Newman, "Power-law distributions in empirical data", *SIAM Review* 51, 2009; Stumpf & Porter, "Critical Truths About Power Laws", *Science* 335, 2012). La analogía entre escalas es una hipótesis costosa de probar, no un punto de partida.

**⇄ Cruces.**
- **Niklas Luhmann.** *Cercano:* su clausura operativa es exactamente la afirmación de que cada sistema reproduce su propia forma con sus propias operaciones, y su noción de emergencia coincide con la pérdida entre niveles (*Soziale Systeme*, 1984). *Lejano:* para Luhmann "la misma regla en escalas distintas" no es una propiedad del mundo sino una atribución de un observador, y todo observador es a su vez un sistema observable —de ahí la observación de segundo orden. La complejidad busca el isomorfismo en el objeto; Luhmann lo devuelve al ojo.
- **Riane Eisler.** *Cercano:* su teoría de la transformación cultural es una tesis de isomorfismo de escalas en toda regla —el mismo patrón relacional, dominación o asociación, replicado en la familia, la economía, la religión y el Estado (*The Chalice and the Blade*, 1987; *The Real Wealth of Nations*, 2007). *Lejano:* su evidencia es histórica y arqueológica, no dinámica; no hay espacio de fases ni exponentes, y la equivalencia entre escalas se argumenta por homología de significado.
- **Rupert Sheldrake.** *Cercano:* los campos mórficos son también una afirmación de forma que atraviesa escalas. *Lejano:* la complejidad explica la coincidencia entre escalas por restricción compartida —nada viaja—, mientras Sheldrake postula un portador: la resonancia. Donde una ve una constricción, el otro ve un canal.

El isomorfismo entre escalas no es un hallazgo: es una hipótesis cara.

## 2. Con las ciencias de la información: codificación invertible sin residuo

**Definición.** Dos estructuras son isomorfas cuando existe entre ellas una función biyectiva que conserva sus relaciones y cuya inversa reconstruye el original sin residuo. En términos de Shannon: la equivocación es cero en ambas direcciones, de modo que la información mutua iguala la entropía de cada extremo.

**◆** Shannon fundó esto en "A Mathematical Theory of Communication" (*Bell System Technical Journal* 27, 1948). Su consecuencia física es la más elegante del tejido: Landauer demostró que borrar un bit tiene un costo energético mínimo inevitable, del orden de kT ln2 (*IBM Journal of Research and Development* 5, 1961), y Bennett mostró que solo la computación reversible evita ese costo (ibíd. 17, 1973). Es decir: **el isomorfismo es exactamente la computación reversible**. Perder información no es una metáfora administrativa: calienta el mundo.

Todo isomorfismo es reversible. Todo lo demás deja calor.

**⟂ Contraindicio, y es grave.** Shannon excluye la semántica por decisión explícita: advierte en la introducción de 1948 que los aspectos semánticos de la comunicación son irrelevantes para el problema de ingeniería. De ahí que una transformación pueda ser perfectamente isomorfa y perder todo el sentido: dos textos bit a bit idénticos significan cosas opuestas en contextos distintos. Recuperabilidad no es comprensión. Bateson lo dijo del otro lado de la misma moneda —la información es "la diferencia que hace una diferencia" (*Steps to an Ecology of Mind*, 1972)—, y quién decide qué diferencia cuenta no está en el canal.

**⇄ Cruces.**
- **Hofstadter y Luhmann: la mayor distancia de todo el tejido, y sobre la misma palabra.** Hofstadter define información como cantidad recuperable. Luhmann define comunicación como la triple selección de información, acto de comunicar y comprensión, y afirma que en ella no se transmite nada: la comprensión es una construcción del sistema receptor, no una copia (*Soziale Systeme*, 1984). Para Luhmann, *toda* comunicación es no-isomorfa por definición y el entendimiento es siempre una reentrada, jamás una réplica. Dos autores que usan la misma palabra para operaciones incompatibles: uno mide lo que se conserva, el otro describe lo que se produce. Nombrar este equívoco vale más que resolverlo.
- **Bernardo Kastrup y la teoría de la interfaz.** Kastrup usa la metáfora del tablero de instrumentos: lo físico es un conjunto de lecturas de estados mentales, útil y no isomorfo —el tablero no es el avión (*The Idea of the World*, 2019). Se apoya en el trabajo de Donald Hoffman, cuyo teorema de "la aptitud vence a la verdad" concluye que la selección natural favorece percepciones adaptativas por encima de percepciones verídicas (Prakash, Stephens, Hoffman, Singh & Fields, "Fitness Beats Truth in the Evolution of Perception", *Acta Biotheoretica* 69: 319-341, 2021; en línea 2020 — verificado). **◈** El resultado formal es sólido dentro de su modelo; lo disputado es su alcance: si el modelo asume lo que quiere probar sobre la relación entre estructura percibida y estructura real. *Cercano a Hofstadter* en que ambos piensan la percepción como codificación; *lejano* en el signo: para Hofstadter el buen mapa conserva, para Kastrup el buen mapa oculta por diseño.
- **Jacobo Grinberg-Zylberbaum.** *Cercano a Hofstadter al extremo:* su teoría sintérgica postula un grado de isomorfismo entre el campo neuronal y el "látice" del preespacio, y hace de la experiencia la distorsión que el campo imprime en el látice (*La teoría sintérgica*, 1991). Es, en el tejido, la apuesta más literal por la recuperabilidad. *Lejano:* no hay acceso independiente al látice, con lo cual el isomorfismo, tal como está formulado, no es falsable. **◈** Su evidencia más citada —el "potencial transferido" entre cerebros aislados (Grinberg-Zylberbaum, Delaflor, Attie & Goswami, *Physics Essays* 7(4): 422-428, 1994 — verificado)— tuvo réplicas parciales (Wackermann et al., *Neuroscience Letters* 336, 2003; Standish et al., 2004) y también resultados nulos, en un cuerpo de estudios con muestras pequeñas. **✷** Y queda un hecho que ninguna metodología resuelve: Grinberg desapareció en 1994 y su programa nunca fue continuado por él. ¿Qué haríamos con una hipótesis cuya única confirmación posible habría exigido a su autor?

## 3. Con las ciencias de la vida: conservación de la organización, no de la forma

**Definición.** Dos seres vivos son "lo mismo" no cuando conservan su forma, ni su materia, ni su información literal, sino cuando conservan la organización que produce sus propios componentes.

**◆** Es la tesis de la autopoiesis: lo invariante en un ser vivo es la organización, mientras la estructura cambia sin descanso (Maturana & Varela, *De máquinas y seres vivos*, 1973; *El árbol del conocimiento*, 1984). El isomorfismo de la vida es de proceso, no de estado. No conserva el qué: conserva el cómo.

**◆** Y la biología ya había partido en dos aquello que la definición estricta reúne. La **homología** es identidad por descendencia compartida —el húmero del murciélago y el nuestro— y la **analogía** u homoplasia es identidad de función sin origen común —el ojo del pulpo y el nuestro, construidos por caminos independientes—. Misma forma, historias distintas; formas distintas, misma historia. Una definición puramente estructural no puede distinguirlas, porque mira la aplicación y no la genealogía.

El isomorfismo mira el mapa. La vida pregunta por el camino.

**◆** Y el eslabón que la intuición espera isomorfo no lo es: entre genotipo y fenotipo hay degeneración, pleiotropía, plasticidad y regulación epigenética. Un mismo genoma sostiene fenotipos distintos según el entorno del desarrollo. El desarrollo no transfiere información: la construye (Oyama, *The Ontogeny of Information*, 1985).

**⇄ Cruces.**
- **Gabor Maté.** *Cercano a la homología:* su tesis es que el trauma no se transmite como contenido sino como patrón relacional —no es lo que ocurrió, es lo que quedó dentro— y que ese patrón se reproduce en la fisiología y en los vínculos posteriores (*When the Body Says No*, 2003; *The Myth of Normal*, 2022, con Daniel Maté). Es una conservación no isomorfa y de proceso: se hereda la organización del vínculo, no el episodio. **⟂ Contraindicio, y lo aplicamos por simetría de exigencia:** sus afirmaciones causales más fuertes —emoción reprimida como causa de enfermedad autoinmune o de cáncer— descansan en evidencia prospectiva débil y en fuentes cuestionadas, y su modelo del déficit de atención como secuela de trauma tensiona con estimaciones de heredabilidad en estudios de gemelos del orden del 70-80% (Faraone & Larsson, *Molecular Psychiatry* 24: 562-575, 2019 — verificado). Decirlo no lo desactiva: delimita dónde es descripción clínica fértil y dónde es hipótesis etiológica.
- **Rupert Sheldrake.** La alternativa más radical y la más mal citada. La resonancia mórfica afirma que la forma se hereda por semejanza a través del tiempo, sin portador material ni informacional conocido, y —esto se omite casi siempre— de manera **acumulativa y estadística**: hábitos, no leyes (*A New Science of Life*, 1981; *The Presence of the Past*, 1988). Es decir: la resonancia mórfica **no es** un isomorfismo en el sentido de Hofstadter. Nada es completamente recuperable en ella; es un sesgo probabilístico hacia formas anteriores. Quien la usa como si garantizara la conservación de la información la está malentendiendo en su favor. *Lejano de todo el resto del tejido:* exige un canal fuera de la física conocida. **◈** Y su caso de prueba más limpio es también la mejor lección del proyecto sobre sesgo de confirmación: con el perro Jaytee, Wiseman, Smith & Milton concluyeron que no había efecto (*British Journal of Psychology* 89, 1998) y Sheldrake & Smart concluyeron que sí (*Journal of Scientific Exploration* 14, 2000), sobre datos en gran medida solapados, porque operacionalizaron de modo distinto qué contaba como "esperar en la ventana". No hay fraude en esa historia. Hay algo peor de corregir: el criterio decidiendo el dato.
- **Riane Eisler.** *Cercano:* con Douglas Fry sostiene que la crianza y la cooperación, no la dominación, son la línea de base evolutiva de nuestra especie, y lee asociación y dominación como configuraciones biosociales antes que como ideologías (*Nurturing Our Humanity*, Oxford University Press, 2019). **⟂** *Lejano:* el sustrato arqueológico que toma de Gimbutas —una "Vieja Europa" matrística— está disputado en su disciplina (por ejemplo Meskell, "Goddesses, Gimbutas and 'New Age' archaeology", *Antiquity* 69, 1995 — verificado). Su tesis tipológica, las dos configuraciones relacionales, sobrevive sin necesidad de la tesis histórica. Conviene usar la primera y no apoyarse en la segunda.
- **Lao Tse.** El límite, y el más antiguo. En el capítulo 25 del *Tao Te Ching* la cadena "el hombre sigue a la tierra, la tierra al cielo, el cielo al Tao, y el Tao sigue su propia naturaleza" es la formulación más temprana del isomorfismo entre escalas de la que dispone este tejido. Y el capítulo 1 es su propia refutación: el Tao que puede ser dicho no es el Tao. **✷** Hay además una ironía que no es adorno: el propio texto llegó a nosotros por transformación y no por copia —los manuscritos de bambú de Guodian (h. 300 a.e.c.) y los de seda de Mawangdui (168 a.e.c.) difieren en orden y en palabras del texto recibido de Wang Bi. Un libro sobre lo irrepresentable, conservado sin isomorfismo. ¿Se perdió algo, o es esa la única manera en que algo así podía conservarse?
- **Gary Lachman.** Su aporte es genealógico: nos deja ver que esta pregunta no es nuestra. El "como es arriba es abajo" de la *Tabla de Esmeralda* es la doctrina premoderna del isomorfismo de escalas (*The Quest for Hermes Trismegistus*, 2011), y la "participación original" de Owen Barfield (*Saving the Appearances*, 1957) junto a las estructuras de consciencia de Gebser le permiten narrar la historia de Occidente como una secuencia de modos de conocer y no como un progreso (*The Secret Teachers of the Western World*, 2015). **⟂ Nota de categoría:** Lachman escribe historia de las ideas, no ciencia. Citarlo como evidencia de un mecanismo sería un error de categoría; citarlo como cartógrafo de por qué preguntamos así es exacto.
- **Bernardo Kastrup.** Invierte el problema entero. Si lo que hay es mental, el isomorfismo a explicar no es mente-mundo sino la **disociación** que hace que un solo campo aparezca como muchos sujetos; su analogía es el trastorno disociativo de identidad, con casos documentados de ceguera funcional en alteres específicos (*The Idea of the World*, 2019). *Cercano a Grinberg:* un campo, muchos centros aparentes. *Lejano en método:* Kastrup argumenta analíticamente desde la parsimonia; Grinberg reclamaba laboratorio.

## ¿Qué tomamos de todo esto para el sistema?

Tres desplazamientos, uno por definición.

1. De la complejidad tomamos que **lo que asoma no puede ser isomorfo al campo del que asoma**. Si lo fuera, no habría novedad: habría copia. La pérdida entre el campo y la forma no es una falla del sistema; es la condición de que algo nuevo aparezca.
2. De las ciencias de la información tomamos que **conservar no es comprender**. Un sistema puede documentar todo lo que ocurre y no haber entendido nada, porque quién decide cuál diferencia cuenta no está en el registro. De ahí la insistencia del sistema en la revisión atenta y no en la trazabilidad.
3. De las ciencias de la vida tomamos que **lo que se sostiene en el tiempo es la organización, no la forma**. Un sistema para la revisión atenta y la práctica presente no conserva sus prácticas: conserva la manera de producirlas. Por eso puede cambiar entero y seguir siendo el mismo.

Y queda una cuarta cosa, que no es un desplazamiento sino una renuncia: el campo donde las posibilidades se asoman —lo que en [[¿Qué es]] llamamos *meta-zeitgeist*— no admite por ahora una definición isomorfa de sí mismo. **✷** No sabemos si eso es un límite de nuestro método, un límite del lenguaje o un límite del objeto.

No como evasión. Como el lugar exacto donde el tejido se queda abierto.

## Libro mayor epistémico

| Afirmación portante | Registro |
|---|---|
| Definición estricta de isomorfismo como transformación con recuperabilidad total (Hofstadter) | ◆ con **⤿** en la referencia exacta |
| Clases de universalidad y conjugación topológica | ◆ |
| Emergencia como irrecuperabilidad entre niveles (Anderson) | ◆ |
| Leyes de potencia ubicuas en sistemas sociales | ⟂ mayormente refutado |
| Costo termodinámico del borrado y reversibilidad (Landauer, Bennett) | ◆ |
| Exclusión deliberada de la semántica en Shannon | ◆ |
| Ausencia de transmisión en la comunicación (Luhmann) | ◈ tesis teórica, no empírica |
| Percepción como codificación no verídica (Hoffman, Kastrup) | ◈ |
| Potencial transferido entre cerebros aislados (Grinberg) | ◈ con réplicas mixtas |
| Isomorfismo campo neuronal-látice | ✷ no falsable como está formulado |
| Autopoiesis: invarianza de la organización | ◆ |
| Distinción homología / analogía | ◆ |
| No isomorfismo genotipo-fenotipo | ◆ |
| Trauma como patrón relacional heredado (Maté, descriptivo) | ◈ |
| Emoción reprimida como causa de enfermedad autoinmune (Maté, etiológico) | ⟂ evidencia débil |
| Resonancia mórfica | ✷ y mal citada como si fuera ◈ |
| Asociación/dominación como configuraciones biosociales (Eisler, tipológico) | ◈ |
| "Vieja Europa" matrística (Eisler vía Gimbutas, histórico) | ⟂ disputado en arqueología |
| El campo del que asoman las posibilidades | ✷ |

---
Protocolo de lectura de las marcas: [[Protocolo de tono]] · Notas relacionadas: [[¿Qué es]] · [[Imaginar]] · [[Dimensiones]]
