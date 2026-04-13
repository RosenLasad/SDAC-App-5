(() => {
  const panelEl = document.querySelector('.panel[data-panel="dictionary"]');
  const resultsEl = document.getElementById("dictResults");
  const searchEl = document.getElementById("dictSearch");
  const alphaEl = document.getElementById("dictAlphabet");
  if (!panelEl || !resultsEl || !searchEl || !alphaEl) return;

  const TERMS = [
  {
    "term": "4K",
    "category": "Video",
    "def": "Risoluzione video molto elevata con grande dettaglio visivo.",
    "longDef": "Il 4K è una risoluzione molto superiore al Full HD e consente un livello di dettaglio più elevato. Oltre alla maggiore definizione, offre vantaggi pratici in postproduzione, come crop, stabilizzazione e ricomposizione dell’inquadratura. In video è ormai uno standard molto diffuso, soprattutto in produzioni di qualità medio-alta."
  },
  {
    "term": "8K",
    "category": "Video",
    "def": "Risoluzione video superiore al 4K, con definizione estremamente alta.",
    "longDef": "L’8K è una risoluzione ancora più alta del 4K, con un livello di dettaglio estremamente elevato. Anche se non sempre è necessaria per la distribuzione finale, può offrire grande margine di lavoro in postproduzione. In video il suo utilizzo richiede però attrezzature, storage e potenza di elaborazione molto più impegnativi."
  },
  {
    "term": "Adjustment layer",
    "category": "Montaggio",
    "def": "Livello applicato sopra le clip per effetti condivisi.",
    "longDef": "L’adjustment layer è un livello vuoto posizionato sopra le clip per applicare effetti o correzioni a tutto ciò che si trova sotto. Invece di modificare ogni clip singolarmente, si lavora su un unico livello comune. In montaggio è uno strumento molto pratico per color correction, look, effetti o transizioni condivise."
  },
  {
    "term": "ADR",
    "category": "Audio",
    "def": "Riregistrazione dei dialoghi in postproduzione.",
    "longDef": "L’ADR, cioè Automated Dialogue Replacement, è la riregistrazione dei dialoghi in postproduzione. Si usa quando la presa diretta è inutilizzabile o quando si vuole migliorare chiarezza, interpretazione o pulizia del parlato. In audio è una tecnica molto delicata, perché il nuovo dialogo deve sembrare naturale e perfettamente integrato con la scena originale."
  },
  {
    "term": "Aliasing",
    "category": "Video",
    "def": "Artefatto visivo che altera linee e dettagli sottili.",
    "longDef": "L’aliasing è un difetto visivo che altera il modo in cui il sensore o il file rappresentano linee sottili, diagonali o dettagli ripetitivi. Può produrre bordi frastagliati, scintillii o perdita di precisione nelle forme. In video è uno di quei problemi che riducono la qualità percepita, soprattutto in immagini con molti dettagli fini."
  },
  {
    "term": "Ambienza",
    "category": "Audio",
    "def": "Suono complessivo dell’ambiente in cui si svolge la scena.",
    "longDef": "L’ambienza è il suono complessivo di un luogo, cioè tutto ciò che caratterizza acusticamente uno spazio. Può includere traffico lontano, vento, voci diffuse, macchinari, natura o risonanze interne. In audio l’ambienza è molto importante perché dà identità, profondità e credibilità allo spazio percepito dallo spettatore."
  },
  {
    "term": "Angolazione",
    "category": "Regia",
    "def": "Posizione della camera rispetto al soggetto ripreso.",
    "longDef": "L’angolazione indica la posizione della camera rispetto al soggetto ripreso: dall’alto, dal basso, frontale, laterale e così via. Cambiare angolazione modifica la percezione del soggetto e può farlo apparire più forte, più fragile, più minaccioso o più distante. È quindi una scelta espressiva importante, non solo tecnica."
  },
  {
    "term": "Antagonista",
    "category": "Sceneggiatura",
    "def": "Forza o personaggio che ostacola il protagonista.",
    "longDef": "L’antagonista è la forza che ostacola il protagonista nel raggiungimento del suo obiettivo. Può essere una persona, un gruppo, una situazione, un sistema o persino un conflitto interno. In sceneggiatura è essenziale perché senza opposizione non esiste vera tensione narrativa."
  },
  {
    "term": "Apertura",
    "category": "Video",
    "def": "Ampiezza del diaframma, che regola quanta luce entra nell’obiettivo.",
    "longDef": "L’apertura indica quanto il diaframma dell’obiettivo è aperto o chiuso durante la ripresa. Questo influisce direttamente sulla quantità di luce che raggiunge il sensore e quindi sull’esposizione dell’immagine. In ambito video, l’apertura influisce anche sulla profondità di campo, cioè su quanta parte dell’immagine appare nitida."
  },
  {
    "term": "Arco narrativo",
    "category": "Sceneggiatura",
    "def": "Evoluzione di un personaggio o di una situazione nel corso della storia.",
    "longDef": "L’arco narrativo è il percorso di evoluzione di un personaggio o di una situazione nel corso della storia. Indica come cambia un individuo, cosa impara, cosa perde o come si trasforma il suo modo di vedere il mondo. In sceneggiatura è uno degli elementi che danno profondità al racconto."
  },
  {
    "term": "Asse d’azione",
    "category": "Regia",
    "def": "Linea immaginaria che guida la coerenza spaziale tra le inquadrature.",
    "longDef": "L’asse d’azione è una linea immaginaria che collega i soggetti principali della scena e orienta la posizione della camera. Rispettarlo serve a mantenere coerenza spaziale tra le inquadrature, evitando che i personaggi sembrino invertire posizione sullo schermo. In regia è una regola importante, soprattutto nei dialoghi e nelle scene d’azione."
  },
  {
    "term": "Assicurazione",
    "category": "Produzione",
    "def": "Copertura economica contro danni, incidenti o problemi di produzione.",
    "longDef": "L’assicurazione è la copertura che protegge produzione, persone, attrezzature o luoghi da danni, incidenti e responsabilità. A seconda del progetto può riguardare infortuni, trasporti, furti, guasti o responsabilità verso terzi. In produzione è una garanzia importante, soprattutto quando il lavoro coinvolge mezzi costosi o situazioni potenzialmente rischiose."
  },
  {
    "term": "Assistente di produzione",
    "category": "Produzione",
    "def": "Ruolo di supporto alle attività organizzative e di set.",
    "longDef": "L’assistente di produzione è una figura di supporto che aiuta nelle attività organizzative e pratiche legate al progetto. Può occuparsi di contatti, documenti, consegne, convocazioni, spostamenti, materiali o piccole emergenze quotidiane. In produzione è un ruolo molto utile, soprattutto nei set in cui servono rapidità, affidabilità e flessibilità."
  },
  {
    "term": "Atto",
    "category": "Sceneggiatura",
    "def": "Grande blocco strutturale del racconto.",
    "longDef": "L’atto è una grande sezione della storia che corrisponde a una fase importante del percorso narrativo. Nella struttura classica, gli atti servono a dividere la vicenda in introduzione, sviluppo e conclusione, ma possono variare a seconda del modello scelto. In sceneggiatura aiutano a governare equilibrio, progressione e trasformazione del racconto."
  },
  {
    "term": "Audio mono",
    "category": "Audio",
    "def": "Segnale sonoro registrato o riprodotto su un solo canale.",
    "longDef": "L’audio mono è un segnale registrato o riprodotto su un solo canale. Tutto il suono proviene quindi da un’unica sorgente sonora, senza separazione spaziale tra destra e sinistra. In audio il mono è ancora molto utile per voci, dialoghi, podcast e situazioni in cui la chiarezza del contenuto conta più dell’effetto immersivo."
  },
  {
    "term": "Audio stereo",
    "category": "Audio",
    "def": "Segnale sonoro distribuito su due canali distinti.",
    "longDef": "L’audio stereo utilizza due canali distinti, generalmente sinistro e destro, per creare una sensazione di spazio e direzione sonora. Permette di distribuire gli elementi nel panorama acustico e di rendere l’ascolto più naturale o coinvolgente. In audio è lo standard più comune per musica, video e contenuti che vogliono offrire una percezione più ampia del suono."
  },
  {
    "term": "B-roll",
    "category": "Montaggio",
    "def": "Immagini di supporto usate per arricchire o coprire il montaggio principale.",
    "longDef": "Il B-roll è il materiale video di supporto usato per arricchire il montaggio principale o coprire tagli, interviste e passaggi narrativi. Può mostrare dettagli, ambienti, azioni secondarie o immagini evocative collegate al contenuto. In montaggio è una risorsa preziosa perché aiuta a rendere il video più dinamico, visivo e fluido."
  },
  {
    "term": "Backstory",
    "category": "Sceneggiatura",
    "def": "Passato del personaggio che ne influenza comportamento e scelte.",
    "longDef": "La backstory è il passato del personaggio, cioè l’insieme degli eventi precedenti alla storia principale che ne influenzano comportamento e visione del mondo. Non tutto deve essere mostrato o spiegato apertamente, ma deve esistere come base coerente della sua identità. In sceneggiatura la backstory serve a dare profondità, motivazioni e spessore psicologico."
  },
  {
    "term": "Beat",
    "category": "Sceneggiatura",
    "def": "Piccola unità narrativa o emotiva all’interno di una scena.",
    "longDef": "Il beat è una piccola unità narrativa o emotiva all’interno di una scena. Può segnare un cambiamento di intenzione, tono, reazione o rapporto tra personaggi. In sceneggiatura lavorare sui beat aiuta a costruire dialoghi vivi e scene con un andamento preciso."
  },
  {
    "term": "Beat sheet",
    "category": "Sceneggiatura",
    "def": "Schema dei principali passaggi narrativi della storia.",
    "longDef": "Il beat sheet è uno schema che raccoglie i principali passaggi narrativi della storia in ordine progressivo. Non entra in tutti i dettagli, ma individua i momenti chiave che segnano l’avanzamento del racconto. In sceneggiatura è uno strumento molto utile per controllare struttura, equilibrio e ritmo complessivo."
  },
  {
    "term": "Bilanciamento del bianco",
    "category": "Video",
    "def": "Regolazione dei colori per rendere neutri i bianchi in base alla luce.",
    "longDef": "Il bilanciamento del bianco serve a correggere la dominante cromatica causata dalle diverse fonti di luce. Una lampada calda, una luce al neon o la luce del giorno hanno temperature colore diverse, e senza una regolazione corretta il bianco può apparire giallo, blu o verdastro. In video è fondamentale per ottenere colori naturali o per costruire consapevolmente un certo look."
  },
  {
    "term": "Bin",
    "category": "Montaggio",
    "def": "Contenitore virtuale usato per organizzare le clip nel progetto.",
    "longDef": "Il bin è un contenitore virtuale usato per organizzare clip, audio, immagini e altri file all’interno del progetto. Funziona come una cartella interna al software di montaggio e aiuta a dividere il materiale per scena, tipo, giornata o funzione. In montaggio una buona organizzazione dei bin fa risparmiare tempo e rende il lavoro molto più chiaro."
  },
  {
    "term": "Bit depth",
    "category": "Audio",
    "def": "Quantità di informazione usata per descrivere ogni campione audio.",
    "longDef": "La bit depth indica quanta informazione viene usata per descrivere ogni campione audio registrato. Una maggiore profondità di bit permette una rappresentazione più precisa del segnale e una migliore gestione della dinamica. In audio questo parametro è importante perché aiuta a ottenere registrazioni più pulite e con maggiore margine di lavoro in postproduzione."
  },
  {
    "term": "Bitrate",
    "category": "Video",
    "def": "Quantità di dati usata ogni secondo in un file video.",
    "longDef": "Il bitrate è la quantità di dati che il file video utilizza ogni secondo. In generale, un bitrate più alto permette di conservare più dettaglio e meno artefatti, ma produce file più pesanti. In video è uno dei parametri chiave per il rapporto tra qualità visiva, dimensione del file e facilità di gestione."
  },
  {
    "term": "Blocking",
    "category": "Regia",
    "def": "Disposizione e movimento degli attori all’interno della scena.",
    "longDef": "Il blocking è l’organizzazione dei movimenti degli attori nello spazio scenico. Riguarda dove si posizionano, come si spostano, quando entrano o escono dall’inquadratura e come interagiscono con gli altri personaggi e con la camera. In regia è fondamentale perché dà ordine alla scena e trasforma l’azione in qualcosa di visivamente leggibile."
  },
  {
    "term": "Boom",
    "category": "Audio",
    "def": "Asta usata per posizionare il microfono vicino alla fonte sonora.",
    "longDef": "Il boom è l’asta utilizzata per sostenere e posizionare il microfono vicino alla fonte sonora senza farlo entrare nell’inquadratura. Permette di seguire i movimenti degli attori o dei soggetti mantenendo una buona qualità di registrazione. In audio è uno strumento fondamentale sul set, perché consente flessibilità e controllo senza compromettere la pulizia visiva della scena."
  },
  {
    "term": "Budget",
    "category": "Produzione",
    "def": "Stima complessiva dei costi di un progetto.",
    "longDef": "Il budget è la stima complessiva dei costi necessari per realizzare un progetto audiovisivo. Include voci come personale, attrezzature, location, trasporti, vitto, postproduzione e spese impreviste. In produzione è uno strumento fondamentale perché permette di capire fin dall’inizio se il progetto è sostenibile e come distribuire al meglio le risorse."
  },
  {
    "term": "Cachet",
    "category": "Produzione",
    "def": "Compenso pattuito per una prestazione artistica o tecnica.",
    "longDef": "Il cachet è il compenso pattuito per una prestazione artistica o professionale. Viene usato spesso per attori, musicisti, ospiti, performer o figure creative, ma può estendersi anche ad altri collaboratori. In produzione definirlo in modo trasparente aiuta a evitare malintesi e a mantenere correttezza nei rapporti di lavoro."
  },
  {
    "term": "Call sheet",
    "category": "Produzione",
    "def": "Foglio con orari, luoghi e informazioni operative della giornata.",
    "longDef": "La call sheet è il foglio operativo che raccoglie tutte le informazioni utili per una specifica giornata di set. Indica orari di convocazione, location, scene previste, contatti, mezzi, reparto trucco, costumi, esigenze tecniche e note importanti. In produzione è uno strumento centrale, perché garantisce coordinamento e chiarezza per tutta la troupe."
  },
  {
    "term": "Camera a mano",
    "category": "Regia",
    "def": "Ripresa realizzata senza supporto fisso, con movimento libero.",
    "longDef": "La camera a mano è una modalità di ripresa in cui la macchina viene tenuta senza supporti fissi rigidi. Produce un’immagine più viva, mobile e talvolta instabile, che può aumentare realismo, urgenza o tensione. In regia viene usata spesso per dare una sensazione di presenza immediata o documentaria."
  },
  {
    "term": "Camera fissa",
    "category": "Regia",
    "def": "Ripresa con camera immobile durante tutta l’inquadratura.",
    "longDef": "La camera fissa è una ripresa in cui la macchina resta immobile per tutta la durata dell’inquadratura. Questa scelta può dare stabilità, rigore, distacco o concentrazione sull’azione interna al quadro. In regia è molto efficace quando si vuole lasciare che siano attori, spazio e tempo a costruire la forza della scena."
  },
  {
    "term": "Campo lungo",
    "category": "Regia",
    "def": "Inquadratura ampia in cui l’ambiente prevale sui personaggi.",
    "longDef": "Il campo lungo è un’inquadratura ampia in cui l’ambiente ha un ruolo molto importante rispetto ai personaggi. Viene usato per mostrare il contesto, la distanza, la solitudine di un soggetto oppure il rapporto tra figura umana e spazio. È molto utile all’inizio di una scena o quando si vuole far percepire allo spettatore la grandezza del luogo in cui si svolge l’azione."
  },
  {
    "term": "Campo medio",
    "category": "Regia",
    "def": "Inquadratura che bilancia presenza del soggetto e spazio circostante.",
    "longDef": "Il campo medio è un’inquadratura intermedia che lascia vedere chiaramente il soggetto ma conserva anche una parte significativa dell’ambiente. È molto utile nelle scene dialogate o nelle situazioni in cui il rapporto tra personaggio e spazio ha importanza. In regia rappresenta spesso un buon equilibrio tra informazione narrativa ed espressività."
  },
  {
    "term": "Campo totale",
    "category": "Regia",
    "def": "Inquadratura che mostra interamente lo spazio dell’azione e i soggetti presenti.",
    "longDef": "Il campo totale mostra interamente lo spazio dell’azione e i personaggi coinvolti, offrendo una visione completa della scena. Serve a chiarire la disposizione dei soggetti, i rapporti spaziali e la situazione generale prima di passare a inquadrature più ravvicinate. In regia è utile per orientare lo spettatore e costruire una base chiara su cui far evolvere il racconto visivo."
  },
  {
    "term": "Capienza location",
    "category": "Produzione",
    "def": "Numero di persone o mezzi che una location può ospitare.",
    "longDef": "La capienza della location indica quante persone, mezzi o attrezzature uno spazio può ospitare in modo realistico e sicuro. Non riguarda solo la dimensione fisica, ma anche accessibilità, percorsi interni, zone tecniche e possibilità di movimento. In produzione è un dato pratico fondamentale per capire se una location è davvero adatta al tipo di set previsto."
  },
  {
    "term": "Cardioide",
    "category": "Audio",
    "def": "Pattern microfonico che privilegia il suono frontale.",
    "longDef": "Il cardioide è un pattern microfonico che cattura soprattutto il suono proveniente dalla parte frontale, attenuando quello che arriva da dietro. È molto usato perché offre un buon equilibrio tra focalizzazione della sorgente e praticità d’uso. In audio è uno dei diagrammi polari più comuni per voce, interviste e riprese controllate."
  },
  {
    "term": "Carrellata",
    "category": "Regia",
    "def": "Movimento della camera nello spazio, avanti, indietro o lateralmente.",
    "longDef": "La carrellata è un movimento reale della macchina da presa nello spazio, avanti, indietro o lateralmente. A differenza dello zoom, non modifica solo l’ingrandimento, ma cambia il rapporto fisico tra camera, soggetto e ambiente. Viene usata per seguire un’azione, entrare in una scena o aumentare il coinvolgimento visivo."
  },
  {
    "term": "Casting",
    "category": "Produzione",
    "def": "Selezione degli attori o dei partecipanti a una produzione.",
    "longDef": "Il casting è il processo di selezione di attori, performer o partecipanti per un progetto. Non riguarda solo la bravura individuale, ma anche la compatibilità con il ruolo, il tono dell’opera e la chimica con gli altri interpreti. In produzione è una fase delicata, perché una scelta sbagliata nel cast può indebolire tutto il risultato finale."
  },
  {
    "term": "Catering",
    "category": "Produzione",
    "def": "Servizio di cibo e bevande per cast e troupe.",
    "longDef": "Il catering è il servizio che fornisce cibo e bevande a cast e troupe durante le giornate di lavoro. Può sembrare un dettaglio secondario, ma in realtà incide molto sul benessere, sull’energia e sul clima del set. In produzione è una voce pratica importante, soprattutto nelle lavorazioni lunghe o con molte persone coinvolte."
  },
  {
    "term": "Character arc",
    "category": "Sceneggiatura",
    "def": "Percorso di trasformazione di un personaggio nel racconto.",
    "longDef": "Il character arc è il percorso di trasformazione interiore di un personaggio durante la storia. Mostra come cambia il suo modo di pensare, sentire o agire in seguito agli eventi affrontati. In sceneggiatura è uno strumento essenziale per rendere il personaggio dinamico e non statico."
  },
  {
    "term": "Chiusura produzione",
    "category": "Produzione",
    "def": "Fase finale di riepilogo, restituzioni e verifica dei materiali.",
    "longDef": "La chiusura produzione è la fase finale in cui si raccolgono materiali, si verificano spese, si chiudono contratti, si restituiscono attrezzature e si completano gli ultimi adempimenti. Non è solo la fine delle riprese, ma il momento in cui il progetto viene formalmente ricondotto a ordine. In produzione una buona chiusura evita problemi successivi e facilita il passaggio ordinato alla postproduzione o all’archiviazione."
  },
  {
    "term": "Chroma key",
    "category": "Montaggio",
    "def": "Tecnica che rimuove uno sfondo uniforme, spesso verde o blu.",
    "longDef": "Il chroma key è la tecnica che rimuove uno sfondo uniforme, di solito verde o blu, per sostituirlo con un’altra immagine o ambiente. È molto usata in effetti visivi, video didattici, televisione e contenuti creativi. In montaggio e compositing richiede una buona ripresa di partenza, perché una luce sbagliata rende il risultato poco credibile."
  },
  {
    "term": "Chroma subsampling",
    "category": "Video",
    "def": "Metodo di compressione che riduce le informazioni colore.",
    "longDef": "Il chroma subsampling è un metodo di compressione che riduce le informazioni sul colore mantenendo più dettagli nella luminosità. Poiché l’occhio umano percepisce meglio la luminanza che la crominanza, questa tecnica permette di alleggerire il file senza un degrado immediatamente evidente. In video però livelli più bassi di campionamento colore possono limitare il lavoro di color grading o chroma key."
  },
  {
    "term": "Cliffhanger",
    "category": "Sceneggiatura",
    "def": "Chiusura sospesa che crea attesa per ciò che seguirà.",
    "longDef": "Il cliffhanger è una chiusura sospesa che interrompe la storia in un momento critico o irrisolto. Serve a creare forte attesa e a spingere lo spettatore a voler sapere subito cosa succederà dopo. In sceneggiatura è molto usato nei finali di episodio, di atto o di sequenza."
  },
  {
    "term": "Climax",
    "category": "Sceneggiatura",
    "def": "Punto di massima tensione narrativa.",
    "longDef": "Il climax è il punto di massima intensità drammatica della storia. Qui il conflitto raggiunge il suo apice e il protagonista affronta il momento decisivo da cui dipende l’esito del racconto. In sceneggiatura il climax è fondamentale perché concentra tensione, emozione e significato."
  },
  {
    "term": "Clipping",
    "category": "Audio",
    "def": "Distorsione causata da un livello audio troppo alto.",
    "longDef": "Il clipping è la distorsione che si verifica quando il segnale audio supera il livello massimo che il sistema può gestire. Il suono viene “tagliato” nelle sue parti più forti e il risultato appare duro, sporco o sgradevole. In audio è un problema serio perché spesso non è recuperabile completamente in postproduzione."
  },
  {
    "term": "Codec",
    "category": "Video",
    "def": "Sistema usato per comprimere e leggere un file video.",
    "longDef": "Il codec è il sistema usato per comprimere, registrare e leggere i file video. Stabilisce come i dati vengono codificati e quanto il file risulta pesante, lavorabile o fedele all’originale. In video la scelta del codec influisce molto sia sulla qualità finale sia sulla fluidità del lavoro in montaggio."
  },
  {
    "term": "Color correction",
    "category": "Montaggio",
    "def": "Correzione tecnica di esposizione, contrasto e bilanciamento colore.",
    "longDef": "La color correction è la fase in cui si correggono problemi tecnici dell’immagine, come esposizione, contrasto, bilanciamento del bianco e coerenza tra clip diverse. Serve a rendere il materiale uniforme, leggibile e corretto prima di eventuali interventi stilistici. In montaggio e postproduzione è un passaggio fondamentale, perché una buona base visiva migliora tutto il progetto."
  },
  {
    "term": "Color grading",
    "category": "Montaggio",
    "def": "Intervento stilistico sul colore per definire un look visivo.",
    "longDef": "Il color grading è l’intervento creativo sul colore che definisce il look visivo del progetto. A differenza della color correction, non si limita a correggere, ma costruisce un’atmosfera, un’identità o una sensazione visiva precisa. In montaggio e postproduzione è ciò che spesso trasforma un video corretto in un video davvero caratterizzato."
  },
  {
    "term": "Composizione dell’inquadratura",
    "category": "Regia",
    "def": "Disposizione degli elementi visivi nello spazio dell’immagine.",
    "longDef": "La composizione dell’inquadratura è il modo in cui persone, oggetti, linee, vuoti e volumi vengono disposti nello spazio visivo. Non è una questione solo estetica, ma narrativa: una buona composizione può indicare gerarchie, tensioni, equilibrio o isolamento. In regia è uno strumento fondamentale per dare significato all’immagine prima ancora che parlino i personaggi."
  },
  {
    "term": "Compressore",
    "category": "Audio",
    "def": "Strumento che riduce la differenza tra suoni forti e deboli.",
    "longDef": "Il compressore è uno strumento che riduce la differenza tra i suoni più forti e quelli più deboli. In pratica controlla la dinamica del segnale, rendendolo più uniforme e più facile da gestire nel mix. In audio è molto utile per dialoghi, voce, musica e suoni dinamici, ma se usato male può schiacciare troppo il naturale respiro del suono."
  },
  {
    "term": "Conflitto",
    "category": "Sceneggiatura",
    "def": "Contrasto che genera tensione narrativa e fa avanzare la storia.",
    "longDef": "Il conflitto è il contrasto che mette in movimento la storia e crea interesse nello spettatore. Può essere esterno, come uno scontro tra personaggi, oppure interno, come una lotta psicologica o morale. In sceneggiatura il conflitto è ciò che impedisce al racconto di restare statico e lo fa avanzare."
  },
  {
    "term": "Conform",
    "category": "Montaggio",
    "def": "Allineamento del progetto finale ai file originali corretti.",
    "longDef": "Il conform è il processo con cui il montaggio viene riallineato ai file originali corretti o ad alta qualità dopo aver lavorato con proxy o versioni leggere. Serve a garantire che la struttura costruita resti identica, ma riferita ai materiali definitivi. In montaggio è un passaggio tecnico molto importante, soprattutto nei workflow professionali."
  },
  {
    "term": "Consuntivo",
    "category": "Produzione",
    "def": "Bilancio finale delle spese realmente sostenute.",
    "longDef": "Il consuntivo è il bilancio finale delle spese realmente sostenute durante il progetto. Serve a confrontare quanto era stato previsto con quanto è stato effettivamente speso, evidenziando scostamenti, errori o risparmi. In produzione è molto utile perché permette di valutare il lavoro svolto e di migliorare la pianificazione dei progetti futuri."
  },
  {
    "term": "Continuità visiva",
    "category": "Regia",
    "def": "Coerenza tra inquadrature successive per movimenti, posizione e direzione.",
    "longDef": "La continuità visiva è la coerenza tra un’inquadratura e la successiva per quanto riguarda posizione, direzione, gesti, sguardi, oggetti e luce. Serve a far percepire la scena come fluida e naturale, senza stacchi che confondano lo spettatore. In regia è uno degli elementi che rendono il montaggio invisibile ed efficace."
  },
  {
    "term": "Contratto di prestazione",
    "category": "Produzione",
    "def": "Accordo formale con professionisti o collaboratori.",
    "longDef": "Il contratto di prestazione è l’accordo formale che definisce il rapporto tra la produzione e un professionista o collaboratore. Specifica compenso, mansioni, tempi, modalità di lavoro, diritti e responsabilità reciproche. In produzione è essenziale perché chiarisce i rapporti e tutela tutte le parti coinvolte."
  },
  {
    "term": "Controcampo",
    "category": "Regia",
    "def": "Inquadratura opposta a quella precedente, spesso usata nei dialoghi.",
    "longDef": "Il controcampo è l’inquadratura opposta rispetto a quella appena mostrata, spesso usata per riprendere l’altro interlocutore in un dialogo. Funziona bene perché costruisce uno scambio visivo ordinato e aiuta lo spettatore a seguire la relazione tra i personaggi. In regia è una base fondamentale del montaggio classico delle conversazioni."
  },
  {
    "term": "Copertura",
    "category": "Regia",
    "def": "Insieme di riprese alternative o aggiuntive della stessa scena.",
    "longDef": "La copertura è l’insieme delle inquadrature girate per raccontare una stessa scena da più punti di vista o con più varianti. Comprende spesso campi, primi piani, dettagli e riprese alternative utili al montaggio. Una buona copertura offre libertà in postproduzione e protegge il progetto da eventuali problemi di continuità o interpretazione."
  },
  {
    "term": "Copertura sanitaria",
    "category": "Produzione",
    "def": "Presenza di supporto medico o procedure sanitarie sul set.",
    "longDef": "La copertura sanitaria riguarda la presenza di misure, procedure o personale adeguato per gestire eventuali problemi medici durante la lavorazione. Può includere kit di pronto soccorso, numeri utili, medico di set o procedure specifiche per lavorazioni più complesse. In produzione è parte della responsabilità generale verso chi lavora sul progetto."
  },
  {
    "term": "Coreografia di scena",
    "category": "Regia",
    "def": "Organizzazione coordinata di movimenti di attori e camera.",
    "longDef": "La coreografia di scena è l’organizzazione coordinata dei movimenti di attori, comparse, oggetti e camera all’interno dello spazio. Non riguarda solo le scene di danza o azione, ma ogni situazione in cui il movimento deve essere progettato con precisione. In regia serve a dare ordine, ritmo e leggibilità alla scena."
  },
  {
    "term": "Crew",
    "category": "Produzione",
    "def": "Gruppo tecnico e organizzativo che lavora sul set.",
    "longDef": "La crew è il gruppo di professionisti tecnici e organizzativi che lavora alla realizzazione del progetto. Comprende reparti diversi, come regia, fotografia, audio, produzione, trucco, costumi, scenografia e altri ruoli a seconda della scala del lavoro. In produzione coordinare bene la crew significa far funzionare il set con efficienza, ordine e rispetto dei tempi."
  },
  {
    "term": "Crisi",
    "category": "Sceneggiatura",
    "def": "Momento in cui il personaggio affronta la scelta più difficile.",
    "longDef": "La crisi è il momento in cui il personaggio si trova davanti alla prova più difficile o alla scelta più dolorosa. È una fase in cui le vecchie strategie non bastano più e il conflitto raggiunge un livello decisivo. In sceneggiatura la crisi prepara il climax e mette a nudo il vero valore del personaggio."
  },
  {
    "term": "Cronoprogramma",
    "category": "Produzione",
    "def": "Calendario generale delle fasi del progetto.",
    "longDef": "Il cronoprogramma è la pianificazione temporale generale dell’intero progetto, dalla preparazione alla consegna finale. Non riguarda solo le riprese, ma anche preproduzione, postproduzione, revisioni e scadenze intermedie. In produzione serve a visualizzare il percorso complessivo e a distribuire tempi e priorità in modo realistico."
  },
  {
    "term": "Cross dissolve",
    "category": "Montaggio",
    "def": "Transizione in cui un’immagine sfuma dentro un’altra.",
    "longDef": "Il cross dissolve è una transizione in cui un’immagine sfuma progressivamente dentro un’altra. Crea un passaggio morbido, spesso associato al passare del tempo, a un ricordo o a un cambio di atmosfera. In montaggio va usata con criterio, perché se abusata può appesantire il ritmo invece di arricchirlo."
  },
  {
    "term": "Cut",
    "category": "Montaggio",
    "def": "Taglio netto da un’inquadratura a un’altra.",
    "longDef": "Il cut è il taglio netto da un’inquadratura a un’altra senza transizioni intermedie. È la forma di passaggio più semplice e più usata, perché se ben costruita risulta naturale, chiara ed efficace. In montaggio il cut è uno strumento fondamentale per dare ritmo, guidare l’attenzione e costruire il significato della scena."
  },
  {
    "term": "De-esser",
    "category": "Audio",
    "def": "Strumento che riduce le sibilanti troppo forti nella voce.",
    "longDef": "Il de-esser è uno strumento che riduce le sibilanti troppo forti della voce, come “s”, “z” o suoni simili. Interviene solo in una zona precisa di frequenze, attenuando l’effetto pungente senza modificare troppo il resto del timbro. In audio è molto utile nel trattamento delle voci, soprattutto in registrazioni ravvicinate o brillanti."
  },
  {
    "term": "Dettaglio",
    "category": "Regia",
    "def": "Inquadratura molto stretta su un particolare significativo.",
    "longDef": "Il dettaglio è un’inquadratura molto stretta su una parte specifica del corpo, di un oggetto o di un elemento della scena. Si usa per evidenziare qualcosa che ha valore narrativo, simbolico o emotivo, come una mano che trema, una chiave, un occhio o un particolare tecnico. In regia, il dettaglio serve spesso a creare attenzione, suspense o significato."
  },
  {
    "term": "Deus ex machina",
    "category": "Sceneggiatura",
    "def": "Soluzione improvvisa e poco preparata che risolve il conflitto.",
    "longDef": "Il deus ex machina è una soluzione improvvisa e poco preparata che risolve il conflitto in modo esterno e forzato. In genere viene percepito come debolezza di scrittura, perché il finale arriva non dalle azioni dei personaggi, ma da un intervento narrativo poco guadagnato. In sceneggiatura è qualcosa da evitare, salvo uso consapevole e stilizzato."
  },
  {
    "term": "Diaframma",
    "category": "Video",
    "def": "Sistema dell’obiettivo che controlla il passaggio della luce.",
    "longDef": "Il diaframma è il sistema interno dell’obiettivo che regola il passaggio della luce. Funziona come un’apertura variabile: più è aperto, più luce entra; più è chiuso, meno luce raggiunge il sensore. In video è uno dei tre parametri principali dell’esposizione, insieme a ISO e tempo di posa."
  },
  {
    "term": "Diagramma polare",
    "category": "Audio",
    "def": "Schema che descrive la direzionalità di un microfono.",
    "longDef": "Il diagramma polare descrive la direzionalità di un microfono, cioè da quali direzioni capta meglio il suono. Aiuta a capire se il microfono privilegia la parte frontale, laterale o l’intero ambiente. In audio conoscere il diagramma polare è fondamentale per scegliere il microfono giusto e posizionarlo in modo efficace."
  },
  {
    "term": "Dialogo",
    "category": "Sceneggiatura",
    "def": "Scambio verbale tra personaggi all’interno della scena.",
    "longDef": "Il dialogo è lo scambio verbale tra personaggi all’interno di una scena. Non serve solo a trasmettere informazioni, ma anche a rivelare carattere, rapporti di forza, emozioni e conflitti. In una buona sceneggiatura, il dialogo non spiega troppo: agisce, suggerisce e fa avanzare la storia."
  },
  {
    "term": "Disponibilità",
    "category": "Produzione",
    "def": "Periodo o orario in cui persone o luoghi sono utilizzabili.",
    "longDef": "La disponibilità indica il periodo o l’orario in cui una persona, un luogo o una risorsa può essere effettivamente utilizzata. In produzione è un dato essenziale, perché spesso il piano di lavorazione deve adattarsi più alle disponibilità reali che alla sequenza narrativa del copione. Saperle raccogliere bene è decisivo per evitare conflitti e cambi dell’ultimo momento."
  },
  {
    "term": "Distorsione",
    "category": "Audio",
    "def": "Alterazione indesiderata del suono originale.",
    "longDef": "La distorsione è un’alterazione del segnale sonoro rispetto alla sua forma originale. Può essere accidentale, come nel caso di registrazioni sbagliate o sovraccariche, oppure voluta, come effetto creativo in musica o sound design. In audio è importante distinguere tra distorsione utile e distorsione dannosa, perché non tutte hanno lo stesso valore espressivo o tecnico."
  },
  {
    "term": "Dolly",
    "category": "Video",
    "def": "Supporto mobile per spostare la camera nello spazio.",
    "longDef": "Il dolly è un supporto mobile che consente alla camera di spostarsi nello spazio in modo fluido e controllato. Può essere usato su ruote, binari o altre strutture, a seconda del tipo di produzione. In video e cinema il dolly è uno strumento classico per movimenti di macchina precisi e professionali."
  },
  {
    "term": "Doppia registrazione",
    "category": "Audio",
    "def": "Acquisizione simultanea di due livelli audio per sicurezza.",
    "longDef": "La doppia registrazione consiste nel registrare lo stesso segnale su due tracce con livelli diversi, una normale e una più bassa di sicurezza. In questo modo, se la traccia principale va in clipping, si può usare quella di backup. In audio è una pratica molto utile sul set, soprattutto quando il livello della voce può variare improvvisamente."
  },
  {
    "term": "Drone",
    "category": "Video",
    "def": "Velivolo radiocomandato usato per riprese aeree.",
    "longDef": "Il drone è un velivolo radiocomandato dotato di camera, usato per realizzare riprese aeree. Permette di mostrare spazi, paesaggi e movimenti da punti di vista altrimenti difficili o impossibili da ottenere. In video è molto potente, ma richiede attenzione sia tecnica sia normativa."
  },
  {
    "term": "Dynamic range",
    "category": "Video",
    "def": "Capacità del sensore di registrare dettagli nelle ombre e nelle alte luci.",
    "longDef": "Il dynamic range, o gamma dinamica, è la capacità del sensore di registrare dettagli sia nelle ombre sia nelle alte luci. Più è ampia la gamma dinamica, più l’immagine riesce a gestire scene contrastate senza perdere informazioni. In video questo parametro è molto importante, soprattutto in condizioni di luce difficili o in produzioni destinate alla color correction."
  },
  {
    "term": "Découpage tecnico",
    "category": "Regia",
    "def": "Suddivisione della scena in inquadrature previste per la ripresa.",
    "longDef": "Il découpage tecnico è la suddivisione della scena in inquadrature precise, già pensate prima delle riprese. Serve a tradurre la sceneggiatura in un piano visivo concreto, indicando come verrà filmata ogni parte dell’azione. È uno strumento essenziale di preparazione registica, perché aiuta a organizzare lavoro, tempi e linguaggio visivo."
  },
  {
    "term": "Eco",
    "category": "Audio",
    "def": "Ripetizione percepibile di un suono riflesso.",
    "longDef": "L’eco è la ripetizione percepibile di un suono riflesso che arriva in ritardo rispetto al segnale originale. A differenza del riverbero, si distingue come un ritorno separato del suono. In audio può essere un difetto ambientale oppure un effetto espressivo, a seconda del contesto e dell’uso che se ne fa."
  },
  {
    "term": "Ellissi",
    "category": "Montaggio",
    "def": "Eliminazione di una parte del tempo narrativo non mostrata.",
    "longDef": "L’ellissi è l’eliminazione di una parte del tempo narrativo che non viene mostrata esplicitamente. Permette di saltare momenti non necessari e di far avanzare la storia in modo più rapido ed efficace. In montaggio è una scelta essenziale, perché non tutto va mostrato: spesso ciò che si omette rende il racconto più forte."
  },
  {
    "term": "Entrata a effetto",
    "category": "Regia",
    "def": "Ingresso studiato di un personaggio per creare impatto narrativo.",
    "longDef": "L’entrata a effetto è l’ingresso in scena di un personaggio costruito per creare sorpresa, imponenza, tensione o fascino. Può dipendere da inquadratura, movimento di camera, musica, tempo dell’entrata o gestione dello sguardo dello spettatore. In regia è un modo per dare forza a un’apparizione importante."
  },
  {
    "term": "Entrata in campo",
    "category": "Regia",
    "def": "Momento in cui un soggetto entra nell’inquadratura.",
    "longDef": "L’entrata in campo è il momento in cui un personaggio o un elemento visivo compare all’interno dell’inquadratura. Può essere semplice oppure costruita in modo teatrale, sorprendente o drammatico. In regia ha spesso un forte valore narrativo, perché l’ingresso di qualcuno cambia l’equilibrio della scena."
  },
  {
    "term": "Entrata motivata della camera",
    "category": "Regia",
    "def": "Movimento di macchina giustificato dall’azione o dall’emozione della scena.",
    "longDef": "L’entrata motivata della camera è un movimento o avvicinamento che nasce da una ragione narrativa o emotiva precisa. Non è un movimento gratuito, ma una risposta a qualcosa che accade nella scena: una rivelazione, una tensione, uno sguardo, un gesto. In regia questo principio aiuta a rendere i movimenti più naturali e significativi."
  },
  {
    "term": "Equalizzazione",
    "category": "Audio",
    "def": "Modifica delle frequenze sonore per migliorare o correggere il suono.",
    "longDef": "L’equalizzazione è il processo con cui si regolano le varie frequenze di un segnale audio. Serve per correggere problemi, rendere una voce più chiara, attenuare risonanze o valorizzare certe caratteristiche timbriche. In audio è uno degli strumenti più usati, ma va applicato con criterio, perché un intervento eccessivo può rendere il suono artificiale."
  },
  {
    "term": "Esposizione",
    "category": "Video",
    "def": "Quantità complessiva di luce registrata nell’immagine.",
    "longDef": "L’esposizione è la quantità totale di luce registrata nell’immagine. Un video ben esposto conserva dettaglio sia nelle zone chiare sia in quelle scure, mentre una cattiva esposizione può bruciare le alte luci o chiudere troppo le ombre. In ambito video, controllare l’esposizione è essenziale per ottenere immagini leggibili e gradevoli."
  },
  {
    "term": "Establishing shot",
    "category": "Regia",
    "def": "Inquadratura iniziale che presenta il luogo della scena.",
    "longDef": "L’establishing shot è l’inquadratura che introduce il luogo in cui si svolgerà la scena. Di solito è ampia e serve a dare allo spettatore un punto di riferimento spaziale prima di passare a piani più stretti. In regia aiuta a orientare chi guarda e a far capire subito dove ci troviamo."
  },
  {
    "term": "Export",
    "category": "Montaggio",
    "def": "Creazione del file finale del progetto montato.",
    "longDef": "L’export è la creazione del file finale del progetto montato. Durante questa fase il software unisce video, audio, effetti e impostazioni in un unico file destinato alla visione, alla consegna o alla pubblicazione. In montaggio l’export è l’ultimo passaggio tecnico, ma va gestito con attenzione perché da lì dipendono qualità, compatibilità e peso del risultato finale."
  },
  {
    "term": "Exposition",
    "category": "Sceneggiatura",
    "def": "Informazioni necessarie per capire contesto, personaggi e situazione.",
    "longDef": "L’exposition è l’insieme delle informazioni necessarie per comprendere contesto, personaggi, relazioni e situazione iniziale della storia. Può essere comunicata attraverso dialoghi, immagini, azioni o dettagli ambientali. In sceneggiatura il problema non è “dare informazioni”, ma farlo in modo naturale e non scolastico."
  },
  {
    "term": "Fade in",
    "category": "Montaggio",
    "def": "Comparsa progressiva di immagine o suono.",
    "longDef": "Il fade in è una comparsa graduale dell’immagine o del suono a partire dal nero o dal silenzio. Viene usato spesso all’inizio di una scena, di una sequenza o dell’intero progetto. In montaggio crea un ingresso morbido e può dare al contenuto un tono più elegante, atmosferico o narrativamente controllato."
  },
  {
    "term": "Fade out",
    "category": "Montaggio",
    "def": "Scomparsa progressiva di immagine o suono.",
    "longDef": "Il fade out è la scomparsa graduale dell’immagine o del suono verso il nero o il silenzio. Viene usato per chiudere una scena, una sequenza o il progetto nel suo insieme. In montaggio è un modo classico e molto efficace per accompagnare la conclusione senza uno stacco brusco."
  },
  {
    "term": "False color",
    "category": "Video",
    "def": "Sistema di visualizzazione che evidenzia i livelli di esposizione con colori.",
    "longDef": "Il false color è un sistema di visualizzazione che usa colori artificiali per rappresentare i diversi livelli di esposizione dell’immagine. Ogni colore corrisponde a una fascia tonale precisa, facilitando il controllo tecnico della luce. In video è uno strumento molto efficace per esporre con precisione, soprattutto in situazioni professionali o complesse."
  },
  {
    "term": "Filtro ND",
    "category": "Video",
    "def": "Filtro che riduce la luce senza alterare i colori.",
    "longDef": "Il filtro ND, cioè a densità neutra, riduce la quantità di luce che entra nell’obiettivo senza alterare i colori in modo significativo. Serve soprattutto quando si vuole mantenere un’apertura ampia o un tempo di posa corretto anche in condizioni di forte luminosità. In video è uno strumento molto importante per controllare l’esposizione senza sacrificare l’estetica desiderata."
  },
  {
    "term": "Finale aperto",
    "category": "Sceneggiatura",
    "def": "Conclusione che lascia alcune domande senza risposta definitiva.",
    "longDef": "Il finale aperto è una conclusione che lascia irrisolti uno o più aspetti importanti della storia. Non offre una chiusura totale, ma invita lo spettatore a completare il senso del racconto con la propria interpretazione. In sceneggiatura può essere molto efficace, ma deve sembrare una scelta precisa, non una mancanza di soluzione."
  },
  {
    "term": "Finale chiuso",
    "category": "Sceneggiatura",
    "def": "Conclusione che risolve chiaramente i principali elementi narrativi.",
    "longDef": "Il finale chiuso è una conclusione che risolve in modo chiaro i principali conflitti narrativi. Lo spettatore esce dalla storia con una percezione definita di ciò che è accaduto e delle conseguenze per i personaggi. In sceneggiatura questo tipo di finale dà ordine, compiutezza e senso di conclusione."
  },
  {
    "term": "Fine cut",
    "category": "Montaggio",
    "def": "Versione quasi definitiva del montaggio.",
    "longDef": "Il fine cut è una versione molto più avanzata del montaggio, vicina a quella definitiva. In questa fase il ritmo è più preciso, i tagli sono più accurati e la struttura complessiva è già stabilizzata. In montaggio rappresenta il momento in cui il progetto smette di essere una bozza e comincia a prendere forma finale."
  },
  {
    "term": "Flashback",
    "category": "Sceneggiatura",
    "def": "Ritorno narrativo a un evento del passato.",
    "longDef": "Il flashback è un ritorno narrativo a un evento del passato. Viene usato per fornire informazioni, chiarire motivazioni, arricchire un personaggio o cambiare la percezione di ciò che lo spettatore ha già visto. In sceneggiatura va usato con precisione, perché interrompe il tempo principale del racconto."
  },
  {
    "term": "Focale",
    "category": "Video",
    "def": "Caratteristica dell’obiettivo che influenza angolo di campo e ingrandimento.",
    "longDef": "La focale è una caratteristica ottica dell’obiettivo che determina l’angolo di campo e il tipo di resa prospettica. Focali corte mostrano più ambiente, mentre focali lunghe stringono il campo e ingrandiscono i soggetti lontani. In video la scelta della focale incide molto sullo stile della ripresa e sulla percezione dello spazio."
  },
  {
    "term": "Foglio firma",
    "category": "Produzione",
    "def": "Documento usato per registrare presenze o consegne.",
    "longDef": "Il foglio firma è un documento usato per registrare presenze, consegne, ricevute o conferme durante la lavorazione. Può essere utile per motivi amministrativi, organizzativi o di controllo interno. In produzione è un piccolo strumento pratico, ma spesso molto utile per tenere traccia di chi c’era, quando e in quale ruolo."
  },
  {
    "term": "Foley",
    "category": "Audio",
    "def": "Creazione in studio di suoni sincronizzati con l’immagine.",
    "longDef": "Il Foley è la creazione in studio di suoni sincronizzati con le azioni visibili sullo schermo, come passi, vestiti, oggetti, colpi o movimenti. Non si limita a imitare la realtà, ma spesso la rende più leggibile ed espressiva. In audio e cinema è una pratica fondamentale per dare presenza fisica e credibilità alle immagini."
  },
  {
    "term": "Foreshadowing",
    "category": "Sceneggiatura",
    "def": "Tecnica narrativa che prepara in anticipo sviluppi successivi.",
    "longDef": "Il foreshadowing è una tecnica narrativa che anticipa in modo discreto eventi futuri del racconto. Può comparire come dettaglio visivo, frase, oggetto, gesto o situazione apparentemente secondaria. In sceneggiatura è molto utile perché rende la storia più compatta e fa percepire coerenza quando l’evento anticipato si compie."
  },
  {
    "term": "Fornitore",
    "category": "Produzione",
    "def": "Azienda o professionista che fornisce beni o servizi alla produzione.",
    "longDef": "Il fornitore è il soggetto esterno che mette a disposizione beni o servizi necessari al progetto. Può trattarsi di una società di noleggio, di un catering, di un trasportatore, di un tecnico o di un partner logistico. In produzione saper scegliere buoni fornitori significa ridurre problemi e aumentare affidabilità operativa."
  },
  {
    "term": "Frame rate",
    "category": "Video",
    "def": "Numero di fotogrammi registrati ogni secondo.",
    "longDef": "Il frame rate è il numero di fotogrammi registrati o riprodotti ogni secondo. Valori diversi producono sensazioni diverse: 24 fps danno una resa più cinematografica, mentre frame rate più alti rendono il movimento più fluido o permettono di creare slow motion. In video è un parametro fondamentale perché condiziona sia l’estetica sia le possibilità tecniche di postproduzione."
  },
  {
    "term": "Freeze frame",
    "category": "Montaggio",
    "def": "Blocco di un singolo fotogramma per creare un fermo immagine.",
    "longDef": "Il freeze frame è il blocco di un singolo fotogramma per creare un fermo immagine. Può essere usato per sottolineare un momento, interrompere il flusso, creare ironia o dare enfasi narrativa. In montaggio è una soluzione semplice ma molto espressiva, soprattutto se integrata bene nel ritmo complessivo."
  },
  {
    "term": "Frequenza di campionamento",
    "category": "Audio",
    "def": "Numero di campioni audio registrati ogni secondo.",
    "longDef": "La frequenza di campionamento indica quante volte al secondo il segnale analogico viene misurato e trasformato in dato digitale. Valori più alti permettono di registrare una quantità maggiore di informazione sonora. In audio è un parametro tecnico fondamentale perché influisce sulla qualità di acquisizione e sulla compatibilità con diversi workflow."
  },
  {
    "term": "Fruscio",
    "category": "Audio",
    "def": "Rumore continuo e leggero presente in una registrazione.",
    "longDef": "Il fruscio è un rumore leggero e continuo che può comparire in una registrazione audio. Può dipendere da apparecchiature, cavi, gain elevato, ambiente o qualità del sistema di acquisizione. In audio è un difetto fastidioso perché sporca il segnale, soprattutto nei passaggi più silenziosi o nelle registrazioni vocali."
  },
  {
    "term": "Full HD",
    "category": "Video",
    "def": "Risoluzione video di 1920 per 1080 pixel.",
    "longDef": "Il Full HD è una risoluzione video di 1920 x 1080 pixel. Per molti anni è stato lo standard principale per contenuti televisivi, web e produzione indipendente, e resta ancora oggi molto usato. In video offre un buon compromesso tra qualità, peso dei file e facilità di gestione."
  },
  {
    "term": "Fuori campo",
    "category": "Regia",
    "def": "Spazio non visibile ma suggerito o percepito nella scena.",
    "longDef": "Il fuori campo è tutto ciò che esiste nello spazio narrativo ma non viene mostrato direttamente nell’inquadratura. Può essere suggerito da suoni, sguardi, movimenti o reazioni dei personaggi. In regia è uno strumento molto potente, perché permette di evocare, far immaginare e creare tensione senza mostrare tutto esplicitamente."
  },
  {
    "term": "Gain",
    "category": "Audio",
    "def": "Livello di amplificazione del segnale in ingresso.",
    "longDef": "Il gain è il livello di amplificazione applicato al segnale in ingresso, prima che venga registrato. Se è troppo basso, il suono risulterà debole e poco sfruttabile; se è troppo alto, si rischiano distorsione e clipping. In audio regolare bene il gain è una delle operazioni più importanti per ottenere una registrazione pulita e gestibile."
  },
  {
    "term": "Gate",
    "category": "Audio",
    "def": "Processore che attenua i suoni sotto una certa soglia.",
    "longDef": "Il gate è un processore che attenua o chiude il segnale quando scende sotto una certa soglia. Viene usato per ridurre rumori di fondo, rientri o suoni indesiderati presenti nei momenti di pausa. In audio è molto utile, ma va regolato con attenzione, perché se troppo aggressivo può tagliare anche parti utili del suono."
  },
  {
    "term": "Gimbal",
    "category": "Video",
    "def": "Supporto motorizzato che mantiene stabile la camera.",
    "longDef": "Il gimbal è un supporto motorizzato che mantiene la camera stabile durante il movimento. Permette di ottenere riprese fluide anche camminando o seguendo un soggetto in spazi complessi. In video è molto usato per scene dinamiche, videoclip, eventi e situazioni in cui si vuole combinare mobilità e pulizia dell’immagine."
  },
  {
    "term": "Grandangolo",
    "category": "Video",
    "def": "Obiettivo con ampio angolo di ripresa.",
    "longDef": "Il grandangolo è un obiettivo con ampio angolo di campo, capace di mostrare molto ambiente all’interno dell’inquadratura. Viene usato per interni stretti, paesaggi, scene dinamiche o riprese in cui si vuole accentuare la profondità spaziale. In video può dare energia e immersione, ma va gestito con attenzione per evitare distorsioni eccessive."
  },
  {
    "term": "Highlight",
    "category": "Video",
    "def": "Parte molto luminosa dell’immagine.",
    "longDef": "Le highlight sono le zone più luminose dell’immagine. Se sono ben gestite, mantengono dettaglio e contribuiscono alla leggibilità visiva; se invece vengono “bruciate”, perdono informazione e diventano piatte. In video controllare le highlight è fondamentale per mantenere qualità e margine di lavoro in postproduzione."
  },
  {
    "term": "Hospitality",
    "category": "Produzione",
    "def": "Accoglienza e gestione del benessere di ospiti, cast o troupe.",
    "longDef": "L’hospitality riguarda l’accoglienza e il benessere pratico di ospiti, cast, troupe o collaboratori. Include aspetti come alloggio, comfort, informazioni, supporto, gestione delle esigenze personali e qualità dell’esperienza lavorativa. In produzione una buona hospitality migliora il clima, riduce stress e aiuta a far funzionare meglio il lavoro collettivo."
  },
  {
    "term": "Hyperlapse",
    "category": "Video",
    "def": "Variante del time-lapse con camera in movimento.",
    "longDef": "L’hyperlapse è una variante del time-lapse in cui la camera cambia posizione tra uno scatto e l’altro. Questo produce un effetto di movimento accelerato nello spazio, spesso molto spettacolare. In video richiede precisione tecnica, ma può dare un forte senso di dinamismo e attraversamento."
  },
  {
    "term": "Importazione",
    "category": "Montaggio",
    "def": "Inserimento dei file nel progetto di montaggio.",
    "longDef": "L’importazione è il processo con cui i file vengono inseriti nel progetto di montaggio. Questo passaggio non modifica ancora il contenuto, ma lo rende disponibile all’interno del software per essere organizzato e usato. In montaggio una buona importazione è importante perché rappresenta il primo passaggio verso un workflow ordinato."
  },
  {
    "term": "Incidente scatenante",
    "category": "Sceneggiatura",
    "def": "Evento che rompe l’equilibrio iniziale e avvia la vicenda.",
    "longDef": "L’incidente scatenante è l’evento che rompe l’equilibrio iniziale e costringe la storia a partire davvero. È il momento in cui qualcosa cambia e il protagonista non può più restare fermo nella situazione precedente. In sceneggiatura ha il compito di mettere in moto l’azione e aprire il conflitto principale."
  },
  {
    "term": "Incipit",
    "category": "Sceneggiatura",
    "def": "Parte iniziale della storia che introduce tono e situazione.",
    "longDef": "L’incipit è la parte iniziale della storia, quella che introduce mondo, tono, atmosfera e prime informazioni fondamentali. Non serve solo ad avviare il racconto, ma a far capire subito allo spettatore in che tipo di esperienza sta entrando. In sceneggiatura un buon incipit deve essere chiaro, evocativo e capace di attirare attenzione."
  },
  {
    "term": "Ingaggio",
    "category": "Produzione",
    "def": "Assunzione o coinvolgimento di una figura nel progetto.",
    "longDef": "L’ingaggio è l’atto con cui una persona viene coinvolta ufficialmente nel progetto per svolgere un determinato ruolo. Può riguardare attori, tecnici, consulenti, artisti o collaboratori di varia natura. In produzione l’ingaggio non è solo una scelta creativa, ma anche un’operazione organizzativa ed economica che deve essere chiara e ben gestita."
  },
  {
    "term": "Inquadratura",
    "category": "Regia",
    "def": "Porzione di spazio ripresa dalla camera in un singolo momento.",
    "longDef": "L’inquadratura è la porzione di realtà che la camera decide di mostrare in un determinato momento. Non riguarda solo “cosa si vede”, ma anche come lo si vede: distanza, angolazione, composizione e durata influenzano il significato della scena. In regia, scegliere l’inquadratura giusta significa guidare lo sguardo dello spettatore e dargli una precisa esperienza visiva."
  },
  {
    "term": "ISO",
    "category": "Video",
    "def": "Valore che indica la sensibilità del sensore alla luce.",
    "longDef": "Gli ISO indicano la sensibilità del sensore alla luce. Aumentando il valore ISO si può girare in condizioni più buie, ma cresce anche il rischio di rumore digitale e perdita di qualità. In video, l’uso corretto degli ISO serve a trovare un equilibrio tra luminosità, pulizia dell’immagine e resa complessiva."
  },
  {
    "term": "Istogramma",
    "category": "Video",
    "def": "Grafico che mostra la distribuzione delle luci nell’immagine.",
    "longDef": "L’istogramma è un grafico che rappresenta la distribuzione della luminosità nell’immagine, dalle ombre alle alte luci. Non mostra “come è bella” l’inquadratura, ma fornisce una lettura oggettiva della sua esposizione. In video aiuta a capire se l’immagine è troppo scura, troppo chiara o sbilanciata in certe zone tonali."
  },
  {
    "term": "J-cut",
    "category": "Montaggio",
    "def": "Taglio in cui l’audio della clip successiva entra prima dell’immagine.",
    "longDef": "Il J-cut è il contrario dell’L-cut: l’audio della clip successiva entra prima che l’immagine cambi. In questo modo lo spettatore percepisce in anticipo il passaggio e viene guidato dolcemente verso la scena seguente. In montaggio è un raccordo molto efficace per creare continuità, anticipazione o fluidità narrativa."
  },
  {
    "term": "Jump cut",
    "category": "Montaggio",
    "def": "Taglio che crea un salto evidente nel tempo o nel movimento.",
    "longDef": "Il jump cut è un taglio che produce un salto evidente nel tempo, nella posizione o nel movimento all’interno della stessa inquadratura o di due inquadrature molto simili. Può dare una sensazione di ellissi brusca, nervosismo o frammentazione. In montaggio può essere un errore se involontario, ma anche una scelta stilistica precisa se usato con consapevolezza."
  },
  {
    "term": "Keyframe",
    "category": "Montaggio",
    "def": "Punto che definisce un cambiamento di valore nel tempo.",
    "longDef": "Il keyframe è un punto che definisce un valore preciso di un parametro in un dato momento della timeline. Collegando più keyframe si possono creare variazioni progressive di opacità, volume, posizione, scala, colore e molti altri elementi. In montaggio è fondamentale per animare e controllare cambiamenti nel tempo."
  },
  {
    "term": "L-cut",
    "category": "Montaggio",
    "def": "Taglio in cui l’audio della prima clip continua sulla seconda.",
    "longDef": "L’L-cut è un tipo di raccordo in cui l’audio della prima clip continua anche dopo il passaggio all’immagine della clip successiva. Questo crea un flusso più morbido e naturale tra una ripresa e l’altra. In montaggio è molto utile nei dialoghi, nelle interviste e in tutte le situazioni in cui si vuole evitare uno stacco troppo secco."
  },
  {
    "term": "Lavalier",
    "category": "Audio",
    "def": "Piccolo microfono da agganciare ai vestiti del soggetto.",
    "longDef": "Il lavalier è un piccolo microfono da agganciare ai vestiti del soggetto, vicino alla bocca. È molto usato nelle interviste, nei video didattici, negli eventi e nelle situazioni in cui il microfono deve restare poco visibile. In audio offre praticità e vicinanza alla voce, ma va gestito con attenzione per evitare fruscii e contatti con i tessuti."
  },
  {
    "term": "Liberatoria",
    "category": "Produzione",
    "def": "Documento con cui una persona o ente autorizza l’uso della propria immagine o bene.",
    "longDef": "La liberatoria è un documento con cui una persona, un ente o il proprietario di un bene autorizza l’uso della propria immagine, voce, proprietà o spazio. Serve a tutelare legalmente la produzione ed evitare contestazioni future. In ambito audiovisivo è uno strumento molto importante, soprattutto quando si gira con persone riconoscibili o in luoghi privati."
  },
  {
    "term": "Limiter",
    "category": "Audio",
    "def": "Processore che impedisce al segnale di superare una soglia massima.",
    "longDef": "Il limiter è un processore che impedisce al segnale audio di superare una determinata soglia massima. Viene usato per proteggere la registrazione o l’output finale da picchi troppo forti che potrebbero causare clipping. In audio è una sorta di “barriera di sicurezza”, utile soprattutto nelle fasi finali o in registrazioni imprevedibili."
  },
  {
    "term": "Line producer",
    "category": "Produzione",
    "def": "Responsabile della gestione operativa e logistica della produzione.",
    "longDef": "Il line producer è il responsabile della gestione pratica del progetto sul piano operativo e di bilancio. Supervisiona spese, calendario, reparti, fornitori e organizzazione quotidiana, assicurandosi che la lavorazione resti entro i limiti previsti. In produzione è una figura chiave perché traduce gli obiettivi generali in un sistema realmente funzionante."
  },
  {
    "term": "Linee guida",
    "category": "Regia",
    "def": "Linee visive che dirigono lo sguardo dello spettatore.",
    "longDef": "Le linee guida sono linee visive presenti nell’immagine che indirizzano naturalmente lo sguardo dello spettatore verso un punto importante. Possono essere strade, muri, corridoi, braccia, sguardi o elementi architettonici. In regia vengono sfruttate per rafforzare la composizione e rendere più leggibile la scena."
  },
  {
    "term": "Livello audio",
    "category": "Audio",
    "def": "Intensità del segnale sonoro registrato o riprodotto.",
    "longDef": "Il livello audio indica l’intensità del segnale sonoro registrato o riprodotto. Serve a capire quanto il suono sia forte, equilibrato o vicino a zone di rischio. In audio controllare i livelli è fondamentale perché una registrazione corretta parte sempre da un buon equilibrio tra volume, chiarezza e sicurezza tecnica."
  },
  {
    "term": "Location scouting",
    "category": "Produzione",
    "def": "Ricerca e valutazione dei luoghi adatti alle riprese.",
    "longDef": "Il location scouting è l’attività di ricerca e valutazione dei luoghi in cui si potrebbero svolgere le riprese. Non si tratta solo di trovare posti “belli”, ma di verificare accessibilità, luce, rumore, spazi, permessi e fattibilità operativa. In produzione è una fase decisiva, perché una location adatta può facilitare molto il lavoro sul set."
  },
  {
    "term": "Log",
    "category": "Video",
    "def": "Profilo video piatto pensato per aumentare la flessibilità in postproduzione.",
    "longDef": "Il Log è un profilo di registrazione che produce un’immagine poco contrastata e poco satura, pensata per conservare più informazioni possibili nelle luci e nelle ombre. A prima vista può sembrare spenta, ma offre grande flessibilità in color correction e grading. In video si usa quando si vuole ottenere il massimo margine creativo e tecnico in postproduzione."
  },
  {
    "term": "Logline",
    "category": "Sceneggiatura",
    "def": "Riassunto molto breve della storia in una o due frasi.",
    "longDef": "La logline è una sintesi molto breve della storia, di solito composta da una o due frasi. Serve a comunicare in modo immediato il cuore del progetto, facendo capire chi è il protagonista, qual è il suo obiettivo e quale ostacolo si trova davanti. In sceneggiatura è uno strumento prezioso perché obbliga a chiarire l’essenza narrativa del racconto."
  },
  {
    "term": "Loudness",
    "category": "Audio",
    "def": "Percezione complessiva del volume di un contenuto audio.",
    "longDef": "La loudness è la percezione complessiva del volume da parte dell’ascoltatore. Non dipende solo dai picchi, ma dalla distribuzione energetica del segnale nel tempo e nelle frequenze. In audio è un concetto molto importante, soprattutto per piattaforme, broadcast e contenuti online che devono rispettare standard di ascolto coerenti."
  },
  {
    "term": "LUT",
    "category": "Video",
    "def": "Tabella colore usata per convertire o stilizzare l’immagine.",
    "longDef": "La LUT, cioè Look-Up Table, è una tabella che trasforma i valori colore dell’immagine secondo una determinata interpretazione. Può servire a convertire un file Log in un’immagine normale oppure ad applicare un look stilizzato. In video è uno strumento molto diffuso, ma va usato con criterio, perché non sostituisce un vero lavoro di correzione colore."
  },
  {
    "term": "MacGuffin",
    "category": "Sceneggiatura",
    "def": "Oggetto o obiettivo che muove la trama senza essere il vero centro tematico.",
    "longDef": "Il MacGuffin è un oggetto, un obiettivo o un elemento narrativo che mette in moto la trama ma non rappresenta il vero centro profondo della storia. I personaggi gli attribuiscono grande importanza, ma il suo valore sta soprattutto nel fatto che fa agire il racconto. In sceneggiatura è uno strumento pratico per creare movimento e motivazione."
  },
  {
    "term": "Marker",
    "category": "Montaggio",
    "def": "Segno inserito in timeline per indicare un punto importante.",
    "longDef": "Il marker è un segno inserito nella timeline o su una clip per evidenziare un punto importante. Può servire per ricordare un problema, segnare un cambio, indicare un ritmo, una battuta o un punto di sincronizzazione. In montaggio è uno strumento semplice ma molto pratico per orientarsi meglio nel progetto."
  },
  {
    "term": "Maschera",
    "category": "Montaggio",
    "def": "Selezione parziale dell’immagine usata per effetti o correzioni.",
    "longDef": "La maschera è uno strumento che permette di selezionare solo una parte dell’immagine per applicare effetti, correzioni o modifiche localizzate. Può avere forme semplici o complesse e può anche essere animata nel tempo. In montaggio e postproduzione è molto utile quando si vuole intervenire su un’area specifica senza toccare il resto della clip."
  },
  {
    "term": "Master",
    "category": "Montaggio",
    "def": "Versione finale di riferimento da cui derivano le esportazioni.",
    "longDef": "Il master è la versione finale di riferimento del progetto, quella da cui derivano tutte le eventuali copie o esportazioni successive. Deve essere completo, corretto e realizzato con le impostazioni migliori per conservazione e distribuzione. In montaggio il master è il punto d’arrivo del lavoro, cioè il file che rappresenta davvero la versione definitiva dell’opera."
  },
  {
    "term": "Match cut",
    "category": "Montaggio",
    "def": "Taglio che collega due immagini con somiglianze visive o di movimento.",
    "longDef": "Il match cut è un taglio che collega due inquadrature attraverso una somiglianza visiva, di forma, di gesto, di direzione o di significato. Il passaggio risulta forte perché crea continuità o contrasto tra due immagini apparentemente diverse. In montaggio è una soluzione molto elegante e potente, capace di unire spazio, tempo e idee."
  },
  {
    "term": "Media browser",
    "category": "Montaggio",
    "def": "Pannello che permette di navigare e importare file multimediali.",
    "longDef": "Il media browser è il pannello del software che permette di navigare tra i file e importarli nel progetto. Aiuta a vedere struttura delle cartelle, supporti esterni e materiali disponibili senza uscire dal programma. In montaggio è utile perché semplifica l’accesso alle clip e riduce errori nella fase di acquisizione del materiale."
  },
  {
    "term": "Messa a fuoco",
    "category": "Video",
    "def": "Regolazione che rende nitido un soggetto.",
    "longDef": "La messa a fuoco è la regolazione che rende nitido un soggetto o una parte dell’immagine. Una messa a fuoco precisa guida l’attenzione dello spettatore e rende il contenuto visivamente chiaro. In video può essere gestita manualmente o automaticamente, ma in entrambi i casi è una scelta decisiva per la leggibilità e l’efficacia della ripresa."
  },
  {
    "term": "Mezzitoni",
    "category": "Video",
    "def": "Valori intermedi tra ombre e alte luci.",
    "longDef": "I mezzitoni sono i valori intermedi tra ombre e alte luci. Spesso contengono molte delle informazioni più importanti per la pelle, i volti, gli oggetti e la percezione generale dell’immagine. In video una buona gestione dei mezzitoni aiuta a ottenere una resa naturale, equilibrata e piacevole."
  },
  {
    "term": "Mezzo busto",
    "category": "Regia",
    "def": "Inquadratura che riprende il soggetto circa dalla vita in su.",
    "longDef": "Il mezzo busto è un’inquadratura che riprende il soggetto circa dalla vita in su. È molto usato nei dialoghi, nelle interviste e nelle scene in cui contano sia l’espressione del volto sia una parte del linguaggio del corpo. In regia è una misura equilibrata, perché mantiene vicinanza senza perdere del tutto il contesto."
  },
  {
    "term": "Microfono a condensatore",
    "category": "Audio",
    "def": "Microfono sensibile e dettagliato, spesso usato in ambienti controllati.",
    "longDef": "Il microfono a condensatore è un microfono molto sensibile, capace di catturare dettagli sonori fini e sfumature timbriche. Per questo viene spesso usato in studio, nelle registrazioni vocali, negli ambienti controllati e nelle situazioni in cui serve grande precisione. In audio offre qualità elevata, ma richiede attenzione maggiore a rumori, ambiente e alimentazione."
  },
  {
    "term": "Microfono dinamico",
    "category": "Audio",
    "def": "Microfono robusto, adatto a fonti sonore forti e ambienti difficili.",
    "longDef": "Il microfono dinamico è un tipo di microfono robusto, resistente e adatto a gestire livelli sonori elevati. È molto usato dal vivo, in ambienti difficili o con sorgenti forti, perché tende a essere meno delicato e meno sensibile ai rumori ambientali rispetto ad altri modelli. In audio è apprezzato per affidabilità, semplicità e carattere."
  },
  {
    "term": "Microfono shotgun",
    "category": "Audio",
    "def": "Microfono direzionale usato per catturare il suono frontale.",
    "longDef": "Il microfono shotgun è un microfono molto direzionale, progettato per catturare soprattutto il suono proveniente dalla parte frontale. Viene usato spesso su set cinematografici, documentari e interviste, perché permette di isolare meglio la voce o la fonte sonora principale. In audio è uno strumento molto utile, ma funziona bene solo se posizionato correttamente."
  },
  {
    "term": "Midpoint",
    "category": "Sceneggiatura",
    "def": "Punto centrale della trama che cambia la posta in gioco.",
    "longDef": "Il midpoint è il punto centrale della storia, spesso collocato a metà del racconto. Di solito porta una rivelazione, una svolta o un cambiamento che modifica la direzione del protagonista e alza la posta in gioco. In sceneggiatura è importante perché impedisce alla parte centrale di restare piatta o ripetitiva."
  },
  {
    "term": "Mise-en-scène",
    "category": "Regia",
    "def": "Organizzazione visiva della scena: attori, spazio, luci, oggetti e costumi.",
    "longDef": "La mise-en-scène è l’insieme di tutti gli elementi visivi presenti nella scena: attori, costumi, luci, oggetti, arredamento, spazio e loro disposizione. È il modo in cui il mondo narrativo viene messo in scena davanti alla camera. In regia, curare la mise-en-scène significa dare coerenza estetica e significato visivo alla storia."
  },
  {
    "term": "Missaggio",
    "category": "Audio",
    "def": "Bilanciamento finale di dialoghi, musiche ed effetti sonori.",
    "longDef": "Il missaggio è la fase in cui dialoghi, musiche, effetti e ambienti vengono bilanciati tra loro per creare il risultato sonoro finale. Include regolazione dei livelli, equalizzazione, compressione, spazialità e coerenza complessiva del progetto. In audio è uno dei momenti più importanti, perché trasforma materiali separati in un’esperienza sonora unica, chiara ed efficace."
  },
  {
    "term": "Mixer audio",
    "category": "Audio",
    "def": "Dispositivo o software che gestisce più segnali sonori insieme.",
    "longDef": "Il mixer audio è il dispositivo o software che permette di gestire più segnali sonori contemporaneamente. Consente di regolare volumi, equalizzazione, invii, panoramica e altri parametri fondamentali. In audio è uno strumento centrale, perché permette di bilanciare e combinare correttamente tutte le fonti presenti in un progetto."
  },
  {
    "term": "Moiré",
    "category": "Video",
    "def": "Effetto visivo indesiderato causato da pattern molto fitti.",
    "longDef": "Il moiré è un disturbo visivo che compare quando l’immagine riprende pattern molto fitti e regolari, come tessuti, grate o superfici dettagliate. Può manifestarsi con ondulazioni o effetti strani nei colori e nelle texture. In video è un artefatto fastidioso perché rende l’immagine artificialmente instabile o poco credibile."
  },
  {
    "term": "Monitor esterno",
    "category": "Video",
    "def": "Schermo aggiuntivo per vedere meglio immagine e parametri.",
    "longDef": "Il monitor esterno è uno schermo aggiuntivo collegato alla camera per vedere meglio l’immagine durante la ripresa. Offre spesso una visione più ampia, più precisa e più utile per controllare esposizione, fuoco e composizione. In video è molto apprezzato soprattutto nei lavori più curati o quando più persone devono valutare l’inquadratura."
  },
  {
    "term": "Monitoraggio in cuffia",
    "category": "Audio",
    "def": "Ascolto diretto del suono durante la registrazione.",
    "longDef": "Il monitoraggio in cuffia è l’ascolto diretto del suono durante la registrazione o la ripresa. Permette di accorgersi subito di problemi come ronzii, fruscii, distorsioni, rumori ambientali o microfoni mal posizionati. In audio è una pratica indispensabile, perché fidarsi solo dei livelli visivi non basta a garantire una buona registrazione."
  },
  {
    "term": "Monopiede",
    "category": "Video",
    "def": "Supporto a una gamba che offre stabilità leggera e mobilità.",
    "longDef": "Il monopiede è un supporto a una sola gamba che offre stabilità parziale ma maggiore mobilità rispetto al treppiede. È utile quando si vuole alleggerire il carico o muoversi rapidamente mantenendo comunque un minimo di controllo sull’immagine. In video viene usato spesso in eventi, documentari e riprese veloci sul campo."
  },
  {
    "term": "Montaggio alternato",
    "category": "Montaggio",
    "def": "Passaggio ripetuto tra due o più azioni in luoghi diversi.",
    "longDef": "Il montaggio alternato consiste nel passare ripetutamente da un’azione a un’altra, spesso in luoghi differenti ma legate da una stessa linea narrativa o temporale. Anche se spesso viene confuso con il montaggio parallelo, è usato in modo più pratico per seguire sviluppi simultanei o convergenti. In montaggio aiuta a tenere viva l’attenzione e a far avanzare più linee narrative insieme."
  },
  {
    "term": "Montaggio parallelo",
    "category": "Montaggio",
    "def": "Alternanza di azioni diverse mostrate come simultanee o collegate.",
    "longDef": "Il montaggio parallelo alterna due o più azioni diverse che sembrano svolgersi nello stesso momento o che vengono messe in relazione tra loro. Serve a creare tensione, confronto, ironia o connessione narrativa tra eventi separati. In montaggio è una tecnica molto importante perché permette di costruire significati che non nascono da una singola scena, ma dal confronto tra scene diverse."
  },
  {
    "term": "Motivazione",
    "category": "Sceneggiatura",
    "def": "Ragione interna che spinge il personaggio ad agire.",
    "longDef": "La motivazione è la ragione profonda che spinge un personaggio a cercare qualcosa o a comportarsi in un certo modo. Non coincide sempre con l’obiettivo visibile, ma ne costituisce la base emotiva, psicologica o morale. In sceneggiatura una buona motivazione rende le azioni del personaggio credibili e coerenti."
  },
  {
    "term": "Movimento di macchina",
    "category": "Regia",
    "def": "Spostamento della camera durante la ripresa.",
    "longDef": "Il movimento di macchina è lo spostamento della camera durante la ripresa. Può servire a seguire un personaggio, esplorare uno spazio, creare tensione oppure dare ritmo e dinamismo alla scena. In regia, un movimento ben motivato rafforza il racconto visivo; se usato senza necessità, rischia invece di distrarre lo spettatore."
  },
  {
    "term": "Multicam",
    "category": "Montaggio",
    "def": "Montaggio di una scena ripresa da più camere sincronizzate.",
    "longDef": "Il multicam è una modalità di montaggio che permette di lavorare su una scena ripresa da più camere sincronizzate. Il montatore può scegliere di volta in volta quale angolazione usare, mantenendo allineati tutti i flussi. In montaggio multicamera è molto utile per interviste, concerti, eventi, dialoghi e situazioni in cui più punti di vista devono convivere nello stesso tempo."
  },
  {
    "term": "Narratore",
    "category": "Sceneggiatura",
    "def": "Voce o presenza che racconta gli eventi della storia.",
    "longDef": "Il narratore è la voce o la presenza che racconta gli eventi della storia. Può essere interno alla vicenda, esterno, onnisciente, limitato o persino implicito nel modo in cui il racconto è costruito. In sceneggiatura la scelta del narratore condiziona il punto di vista e il rapporto tra spettatore e storia."
  },
  {
    "term": "Narratore inaffidabile",
    "category": "Sceneggiatura",
    "def": "Narratore che offre una versione parziale o distorta dei fatti.",
    "longDef": "Il narratore inaffidabile è un narratore che fornisce una versione parziale, distorta o falsa dei fatti. Questo può dipendere da menzogna, autoinganno, memoria alterata o interpretazione soggettiva. In sceneggiatura è un dispositivo molto interessante perché crea ambiguità e costringe lo spettatore a riconsiderare ciò che credeva vero."
  },
  {
    "term": "Nested sequence",
    "category": "Montaggio",
    "def": "Sequenza inserita dentro un’altra sequenza come singolo elemento.",
    "longDef": "La nested sequence è una sequenza inserita dentro un’altra come se fosse una singola clip. Questo permette di raggruppare più elementi complessi e trattarli come un blocco unico. In montaggio è molto utile per organizzare progetti articolati, applicare effetti globali o semplificare la timeline principale."
  },
  {
    "term": "Noise floor",
    "category": "Audio",
    "def": "Livello minimo di rumore presente nel sistema audio.",
    "longDef": "Il noise floor è il livello minimo di rumore presente in un sistema audio anche quando non c’è un segnale utile evidente. Rappresenta il “fondo” costante su cui poi si collocano i suoni registrati. In audio un noise floor basso è desiderabile perché permette di lavorare con maggiore pulizia e dinamica."
  },
  {
    "term": "Noleggio attrezzatura",
    "category": "Produzione",
    "def": "Affitto temporaneo di strumenti tecnici per la produzione.",
    "longDef": "Il noleggio attrezzatura è l’affitto temporaneo di strumenti tecnici necessari alla produzione, come camere, luci, microfoni, monitor, supporti o ottiche. È una soluzione molto comune, perché permette di accedere a mezzi professionali senza doverli acquistare. In produzione va pianificato bene, tenendo conto di costi, disponibilità, tempi di ritiro, restituzione e assistenza."
  },
  {
    "term": "Normalizzazione",
    "category": "Audio",
    "def": "Regolazione del livello audio fino a un valore prestabilito.",
    "longDef": "La normalizzazione è un processo che porta il livello audio complessivo a un valore prestabilito. Serve a uniformare i file o a ottimizzare il volume senza superare una soglia tecnica precisa. In audio è un’operazione pratica e frequente, ma non sostituisce un vero lavoro di mixaggio o bilanciamento dinamico."
  },
  {
    "term": "Nulla osta",
    "category": "Produzione",
    "def": "Documento ufficiale che autorizza una determinata attività.",
    "longDef": "Il nulla osta è un’autorizzazione formale rilasciata da un ente, un proprietario o un soggetto competente per permettere una determinata attività. È diverso da altri documenti più generici perché certifica in modo esplicito che non ci sono impedimenti all’azione prevista. In produzione può essere richiesto in molte situazioni amministrative o organizzative."
  },
  {
    "term": "Obiettivo",
    "category": "Video",
    "def": "Elemento ottico della camera che convoglia la luce sul sensore.",
    "longDef": "L’obiettivo è il componente ottico che raccoglie e convoglia la luce verso il sensore. Non è solo uno strumento tecnico, ma uno degli elementi che più influenzano il look dell’immagine, attraverso focale, apertura, nitidezza e resa del contrasto. In video scegliere l’obiettivo giusto significa decidere come il mondo verrà trasformato in immagine."
  },
  {
    "term": "Obiettivo del personaggio",
    "category": "Sceneggiatura",
    "def": "Risultato concreto che un personaggio cerca di ottenere.",
    "longDef": "L’obiettivo del personaggio è ciò che un personaggio vuole ottenere in modo concreto, visibile o riconoscibile. Può riguardare un desiderio materiale, una conquista, una fuga, una relazione o una verità da raggiungere. In sceneggiatura l’obiettivo aiuta a costruire azione, conflitto e direzione del racconto."
  },
  {
    "term": "Offline edit",
    "category": "Montaggio",
    "def": "Fase di montaggio preliminare con materiali leggeri o provvisori.",
    "longDef": "L’offline edit è la fase preliminare del montaggio, spesso realizzata con file leggeri o provvisori per costruire struttura e ritmo del progetto. In questa fase l’attenzione è concentrata sul racconto, non ancora sulla qualità finale dell’immagine. In montaggio è molto utile perché consente di lavorare in modo fluido anche con materiali pesanti o complessi."
  },
  {
    "term": "Ombre",
    "category": "Video",
    "def": "Zone scure dell’immagine con bassa luminosità.",
    "longDef": "Le ombre sono le parti più scure dell’immagine. Possono dare profondità, contrasto e atmosfera, ma se risultano troppo chiuse rischiano di perdere dettaglio e diventare blocchi neri indistinti. In video lavorare bene sulle ombre significa trovare un equilibrio tra leggibilità e resa espressiva."
  },
  {
    "term": "Omnidirezionale",
    "category": "Audio",
    "def": "Pattern che capta il suono da tutte le direzioni.",
    "longDef": "L’omnidirezionale è un pattern microfonico che capta il suono in modo uniforme da tutte le direzioni. Questo lo rende utile quando si vuole registrare un ambiente naturale, un gruppo di persone o una sorgente senza una direzione dominante. In audio offre una resa spesso più aperta e naturale, ma richiede maggiore controllo dell’ambiente circostante."
  },
  {
    "term": "Online edit",
    "category": "Montaggio",
    "def": "Fase finale di rifinitura con materiali alla massima qualità.",
    "longDef": "L’online edit è la fase finale in cui il progetto viene rifinito usando i materiali alla massima qualità disponibile. Qui si consolidano conform, colori, effetti, testi, controlli tecnici ed esportazione definitiva. In montaggio rappresenta il passaggio dalla costruzione narrativa alla finitura professionale del progetto."
  },
  {
    "term": "Opacità",
    "category": "Montaggio",
    "def": "Livello di trasparenza di una clip video.",
    "longDef": "L’opacità indica quanto una clip è visibile o trasparente rispetto a ciò che sta sotto di essa. Riducendola si possono creare sovrimpressioni, dissolvenze o combinazioni tra più livelli video. In montaggio è un parametro molto usato sia per effetti semplici sia per costruzioni visive più complesse."
  },
  {
    "term": "Ordine del giorno",
    "category": "Produzione",
    "def": "Programma dettagliato delle attività previste in una giornata.",
    "longDef": "L’ordine del giorno è il programma dettagliato delle attività previste in una specifica giornata di lavoro. Può includere scene da girare, orari, pause, spostamenti, priorità e sequenza delle operazioni. In produzione serve a dare un ritmo preciso al set e a evitare dispersioni o sovrapposizioni inutili."
  },
  {
    "term": "Ostacolo",
    "category": "Sceneggiatura",
    "def": "Elemento che impedisce al personaggio di raggiungere il suo obiettivo.",
    "longDef": "L’ostacolo è tutto ciò che impedisce al personaggio di ottenere ciò che vuole. Può essere esterno, come un avversario o una circostanza, oppure interno, come paura, senso di colpa o indecisione. In sceneggiatura è indispensabile, perché senza ostacoli il percorso del personaggio non avrebbe tensione."
  },
  {
    "term": "Over the shoulder",
    "category": "Regia",
    "def": "Ripresa effettuata da dietro la spalla di un personaggio.",
    "longDef": "L’over the shoulder è un’inquadratura realizzata da dietro la spalla di un personaggio, verso ciò che sta guardando o verso l’interlocutore. La spalla in primo piano crea profondità e fa percepire la presenza fisica del personaggio in scena. È molto usata nei dialoghi, perché avvicina emotivamente lo spettatore alla conversazione."
  },
  {
    "term": "Panoramica",
    "category": "Regia",
    "def": "Movimento della camera fissa sul proprio asse, in orizzontale o verticale.",
    "longDef": "La panoramica è un movimento della camera che ruota sul proprio asse senza spostarsi nello spazio. Può essere orizzontale o verticale e viene usata per mostrare un ambiente, seguire un soggetto o rivelare gradualmente un elemento importante. In regia è uno strumento semplice ma efficace per accompagnare lo sguardo dello spettatore."
  },
  {
    "term": "Partnership",
    "category": "Produzione",
    "def": "Collaborazione tra soggetti che condividono obiettivi o risorse.",
    "longDef": "La partnership è una collaborazione tra soggetti diversi che condividono obiettivi, risorse o vantaggi legati al progetto. Può coinvolgere enti culturali, aziende, associazioni, scuole, spazi o professionisti. In produzione una partnership ben costruita rafforza il progetto e amplia le sue possibilità operative o promozionali."
  },
  {
    "term": "Pausa sonora",
    "category": "Audio",
    "def": "Assenza o riduzione del suono usata con funzione espressiva.",
    "longDef": "La pausa sonora è un momento di assenza o forte riduzione del suono all’interno di una scena o di un montaggio. Non è semplicemente “silenzio”, ma una scelta espressiva che può creare tensione, concentrazione, sospensione o sorpresa. In audio è uno strumento molto potente, perché anche il vuoto sonoro ha un forte valore narrativo."
  },
  {
    "term": "Payoff",
    "category": "Sceneggiatura",
    "def": "Ritorno narrativo di un elemento preparato in precedenza.",
    "longDef": "Il payoff è il momento in cui un elemento introdotto in precedenza produce il suo effetto narrativo. È la “ricompensa” del setup, cioè il punto in cui qualcosa preparato prima trova compimento o significato. In sceneggiatura un buon payoff dà allo spettatore una sensazione di coerenza, intelligenza e soddisfazione narrativa."
  },
  {
    "term": "Peaking",
    "category": "Video",
    "def": "Aiuto visivo che evidenzia le aree a fuoco.",
    "longDef": "Il peaking è un aiuto visivo che evidenzia sul monitor i bordi delle zone più nitide dell’immagine. Serve a capire rapidamente quali parti sono a fuoco, specialmente quando si lavora in manual focus. In video è uno strumento praticissimo, perché rende più sicura e veloce la gestione della messa a fuoco sul set."
  },
  {
    "term": "Permessi",
    "category": "Produzione",
    "def": "Autorizzazioni necessarie per girare in certi luoghi o condizioni.",
    "longDef": "I permessi sono le autorizzazioni necessarie per girare in determinati luoghi o in particolari condizioni. Possono riguardare spazi pubblici, proprietà private, uso di droni, occupazione suolo, riprese con traffico o altre situazioni regolamentate. In produzione è fondamentale ottenerli correttamente, perché lavorare senza autorizzazione può bloccare o compromettere l’intero progetto."
  },
  {
    "term": "Permesso occupazione suolo",
    "category": "Produzione",
    "def": "Autorizzazione per usare spazi pubblici durante le riprese.",
    "longDef": "Il permesso di occupazione suolo è l’autorizzazione necessaria per utilizzare temporaneamente uno spazio pubblico con mezzi, attrezzature, transenne o strutture di produzione. È richiesto quando il set interferisce con il normale uso dello spazio urbano. In produzione è un passaggio spesso decisivo, soprattutto nelle riprese in esterni cittadini."
  },
  {
    "term": "Permuta",
    "category": "Produzione",
    "def": "Scambio di beni o servizi senza pagamento diretto.",
    "longDef": "La permuta è uno scambio di beni o servizi senza un pagamento diretto in denaro. In produzione può avvenire, per esempio, quando una location o un fornitore offre qualcosa in cambio di visibilità, contenuti o altre forme di collaborazione. È una soluzione utile in certi progetti, ma va comunque formalizzata con chiarezza."
  },
  {
    "term": "Personaggio",
    "category": "Sceneggiatura",
    "def": "Figura che agisce all’interno della storia.",
    "longDef": "Il personaggio è una figura che agisce, desidera, sceglie e subisce conseguenze all’interno della storia. Non è solo qualcuno che “appare” nella trama, ma una presenza con funzione narrativa, caratteristiche e relazioni. In sceneggiatura un personaggio ben costruito rende più credibile e coinvolgente l’intero racconto."
  },
  {
    "term": "Phantom power",
    "category": "Audio",
    "def": "Alimentazione necessaria per molti microfoni a condensatore.",
    "longDef": "La phantom power è l’alimentazione elettrica necessaria a molti microfoni a condensatore per funzionare correttamente. Viene inviata attraverso il cavo XLR senza richiedere alimentazioni separate. In audio è importante conoscerla bene, perché attivarla o disattivarla nel momento giusto è essenziale per usare correttamente certi microfoni e proteggere l’attrezzatura."
  },
  {
    "term": "Piano americano",
    "category": "Regia",
    "def": "Inquadratura che mostra il personaggio circa dalle ginocchia in su.",
    "longDef": "Il piano americano riprende il personaggio più o meno dalle ginocchia in su. Storicamente è stato usato molto nel western, perché permetteva di vedere anche la fondina del personaggio. Oggi è utile quando si vuole mostrare bene il corpo, la postura e l’azione, senza allontanarsi troppo dal soggetto."
  },
  {
    "term": "Piano B",
    "category": "Produzione",
    "def": "Soluzione alternativa pronta in caso di imprevisti.",
    "longDef": "Il Piano B è la soluzione alternativa già pronta nel caso in cui il piano principale non sia più realizzabile. Può riguardare meteo, location, assenze, guasti tecnici, ritardi o altri imprevisti. In produzione averne uno non è pessimismo, ma organizzazione intelligente: permette di reagire rapidamente senza perdere la giornata."
  },
  {
    "term": "Piano di backup",
    "category": "Produzione",
    "def": "Soluzione organizzativa alternativa pronta in caso di guasti o assenze.",
    "longDef": "Il piano di backup è l’insieme delle soluzioni alternative predisposte per affrontare problemi tecnici, assenze, perdita dati o imprevisti organizzativi. Può riguardare attrezzature di riserva, copie dei file, personale sostitutivo o location secondarie. In produzione è una forma di prevenzione concreta che riduce i danni quando qualcosa va storto."
  },
  {
    "term": "Piano di lavorazione",
    "category": "Produzione",
    "def": "Programma organizzato delle giornate di ripresa.",
    "longDef": "Il piano di lavorazione è il programma che organizza le giornate di ripresa in modo pratico e cronologico. Tiene conto di attori, location, attrezzature, disponibilità e priorità produttive. In produzione è essenziale perché trasforma la sceneggiatura in un calendario concreto e realizzabile."
  },
  {
    "term": "Piano logistico",
    "category": "Produzione",
    "def": "Schema operativo per coordinare spazi, tempi e risorse.",
    "longDef": "Il piano logistico è lo schema generale che coordina spazi, tempi, materiali, accessi, parcheggi, punti di appoggio e distribuzione pratica delle risorse. Serve a rendere possibile il lavoro di reparti diversi in modo ordinato e senza intralci. In produzione è uno strumento strategico, specialmente nei set complessi o in location delicate."
  },
  {
    "term": "Piano sequenza",
    "category": "Regia",
    "def": "Scena realizzata in un’unica ripresa senza tagli visibili.",
    "longDef": "Il piano sequenza è una scena raccontata in un’unica ripresa continua, senza stacchi di montaggio visibili. Richiede una forte preparazione di regia, movimenti precisi di attori e camera e un controllo rigoroso del tempo scenico. Quando funziona, crea immersione, tensione e una sensazione di continuità molto potente."
  },
  {
    "term": "Piano sicurezza",
    "category": "Produzione",
    "def": "Misure previste per prevenire rischi sul set.",
    "longDef": "Il piano sicurezza raccoglie le misure previste per ridurre rischi e proteggere persone, attrezzature e luoghi durante la lavorazione. Tiene conto di accessi, elettricità, movimenti di mezzi, scene particolari, numeri di emergenza e procedure di comportamento. In produzione è uno strumento serio e necessario, non un semplice adempimento formale."
  },
  {
    "term": "Piano trasporti",
    "category": "Produzione",
    "def": "Organizzazione dei mezzi e degli spostamenti di persone e materiali.",
    "longDef": "Il piano trasporti organizza in modo preciso come si muoveranno persone, veicoli, materiali e attrezzature durante la lavorazione. Tiene conto di orari, percorsi, ritiri, consegne, parcheggi, carico e scarico. In produzione è molto importante perché una logistica dei trasporti mal gestita può mandare in crisi anche un set ben preparato."
  },
  {
    "term": "Picco",
    "category": "Audio",
    "def": "Punto massimo raggiunto dal segnale audio.",
    "longDef": "Il picco è il punto massimo raggiunto dal segnale audio in un determinato momento. Alcuni picchi sono normali, soprattutto nei suoni dinamici, ma se superano certi limiti possono causare clipping o perdita di qualità. In audio monitorare i picchi serve a proteggere la registrazione e a mantenere il segnale entro una zona utile."
  },
  {
    "term": "Pitch",
    "category": "Sceneggiatura",
    "def": "Presentazione sintetica e coinvolgente di un progetto narrativo.",
    "longDef": "Il pitch è una presentazione sintetica e coinvolgente di un progetto, pensata per suscitare interesse in chi ascolta. Non è solo un riassunto, ma un modo per trasmettere il potenziale della storia, il tono, l’originalità e il motivo per cui vale la pena svilupparla. In ambito professionale viene usato per proporre un film, una serie o un corto a produttori, collaboratori o docenti."
  },
  {
    "term": "Postproduzione",
    "category": "Produzione",
    "def": "Fase successiva alle riprese dedicata a montaggio e finiture.",
    "longDef": "La postproduzione è la fase successiva alle riprese, in cui il materiale viene montato, corretto, mixato, rifinito ed esportato. Include attività come montaggio video, trattamento audio, color correction, effetti, titoli e finalizzazione. In produzione è la fase in cui il progetto prende la sua forma definitiva e trova il proprio equilibrio espressivo."
  },
  {
    "term": "POV",
    "category": "Regia",
    "def": "Inquadratura che mostra ciò che vede un personaggio.",
    "longDef": "POV, cioè point of view, indica un’inquadratura che mostra ciò che vede un personaggio. È una scelta registica che crea immedesimazione, perché lo spettatore osserva il mondo attraverso gli occhi del soggetto. Viene spesso usata per aumentare tensione, coinvolgimento emotivo o soggettività del racconto."
  },
  {
    "term": "Preamplificatore",
    "category": "Audio",
    "def": "Circuito che aumenta il livello di un segnale microfonico.",
    "longDef": "Il preamplificatore è il circuito che aumenta un segnale microfonico, normalmente molto debole, portandolo a un livello adatto alla registrazione o elaborazione. La qualità del preamplificatore influisce molto sulla pulizia, sul rumore e sul carattere del suono acquisito. In audio è una componente spesso poco visibile, ma decisiva per il risultato finale."
  },
  {
    "term": "Premessa narrativa",
    "category": "Sceneggiatura",
    "def": "Concetto di base su cui si fonda il racconto.",
    "longDef": "La premessa narrativa è il concetto di base da cui nasce la storia. Definisce la situazione iniziale, l’idea portante o la condizione speciale su cui si costruisce il racconto. In sceneggiatura è importante perché racchiude il potenziale drammatico del progetto già nella sua forma più essenziale."
  },
  {
    "term": "Premonizione",
    "category": "Sceneggiatura",
    "def": "Indizio che anticipa un evento futuro della storia.",
    "longDef": "La premonizione è un’intuizione o percezione anticipata di qualcosa che accadrà più avanti. Può avere un tono realistico, simbolico, psicologico o soprannaturale, a seconda del genere della storia. In sceneggiatura serve a creare attesa e a caricare certi momenti di un significato futuro."
  },
  {
    "term": "Preproduzione",
    "category": "Produzione",
    "def": "Fase preparatoria che precede le riprese.",
    "longDef": "La preproduzione è la fase di preparazione che precede le riprese vere e proprie. In questo periodo si organizzano cast, crew, piano di lavorazione, location, attrezzature, documenti, scelte tecniche e pianificazione economica. In produzione è la fase che determina gran parte dell’efficienza del lavoro futuro: una preproduzione debole genera quasi sempre caos sul set."
  },
  {
    "term": "Presa diretta",
    "category": "Audio",
    "def": "Registrazione del suono durante le riprese.",
    "longDef": "La presa diretta è la registrazione del suono eseguita nello stesso momento in cui si girano le immagini. Include dialoghi, rumori d’ambiente e suoni prodotti realmente durante la scena. In ambito audiovisivo è molto importante perché conserva naturalezza e realismo, ma richiede grande attenzione tecnica sul set."
  },
  {
    "term": "Preventivo",
    "category": "Produzione",
    "def": "Documento che dettaglia le spese previste.",
    "longDef": "Il preventivo è un documento che dettaglia le spese previste per una lavorazione o per una parte specifica del progetto. A differenza del budget generale, può riferirsi anche a un singolo reparto, servizio o fornitore. In produzione è utile per confrontare costi, prendere decisioni operative e tenere sotto controllo la spesa."
  },
  {
    "term": "Primo piano",
    "category": "Regia",
    "def": "Inquadratura ravvicinata che mette in evidenza il volto o l’espressione.",
    "longDef": "Il primo piano è un’inquadratura ravvicinata che mette al centro il volto del personaggio e le sue espressioni. È uno degli strumenti più forti della regia per trasmettere emozione, tensione, fragilità o intensità psicologica. Riducendo la presenza dell’ambiente, concentra l’attenzione dello spettatore sullo stato interiore del soggetto."
  },
  {
    "term": "Producer",
    "category": "Produzione",
    "def": "Figura che coordina risorse, tempi e aspetti produttivi.",
    "longDef": "Il producer è la figura che coordina e sostiene il progetto sul piano produttivo, economico e organizzativo. A seconda della struttura può avere anche un ruolo decisionale importante sullo sviluppo e sul posizionamento dell’opera. In produzione è spesso la persona che tiene insieme visione, risorse e possibilità concrete."
  },
  {
    "term": "Production manager",
    "category": "Produzione",
    "def": "Figura che supervisiona organizzazione pratica, mezzi e personale.",
    "longDef": "Il production manager è la figura che si occupa dell’organizzazione pratica e logistica del progetto. Coordina mezzi, contatti, esigenze dei reparti, spostamenti, tempi e molte delle questioni operative quotidiane. In produzione è una presenza fondamentale per mantenere ordine e continuità nel lavoro di set."
  },
  {
    "term": "Produzione",
    "category": "Produzione",
    "def": "Fase in cui il progetto viene effettivamente realizzato sul set.",
    "longDef": "La produzione, in senso stretto, è la fase in cui il progetto viene concretamente realizzato, soprattutto durante le riprese. È il momento in cui tutte le scelte preparate prima devono funzionare insieme sul campo. In senso più ampio, il termine può indicare anche l’intera macchina organizzativa che rende possibile un’opera audiovisiva."
  },
  {
    "term": "Produzione esecutiva",
    "category": "Produzione",
    "def": "Gestione pratica e organizzativa delle risorse del progetto.",
    "longDef": "La produzione esecutiva riguarda la gestione concreta e operativa delle risorse necessarie a realizzare il progetto. Si occupa di tradurre le decisioni creative e produttive in azioni pratiche, controllando costi, logistica, contratti e organizzazione. In una lavorazione ben fatta, la produzione esecutiva è il punto di equilibrio tra visione e fattibilità."
  },
  {
    "term": "Profilo colore",
    "category": "Video",
    "def": "Impostazione che definisce resa tonale e cromatica del video.",
    "longDef": "Il profilo colore è l’impostazione con cui la camera registra contrasto, saturazione, gamma e risposta tonale del video. Alcuni profili danno un’immagine già pronta e contrastata, altri registrano un file più piatto da lavorare poi in postproduzione. In video scegliere il profilo giusto dipende dal tipo di progetto, dal workflow e dal livello di controllo che si vuole mantenere."
  },
  {
    "term": "Profondità di campo",
    "category": "Video",
    "def": "Porzione di immagine che appare nitida davanti e dietro il soggetto.",
    "longDef": "La profondità di campo è la porzione di spazio che appare nitida davanti e dietro il punto di fuoco. Dipende da fattori come apertura, focale e distanza dal soggetto. In video viene spesso usata in modo espressivo: una profondità ridotta isola il soggetto, mentre una più estesa mantiene leggibili più piani dell’immagine."
  },
  {
    "term": "Profondità scenica",
    "category": "Regia",
    "def": "Uso dello spazio in più piani per dare profondità all’immagine.",
    "longDef": "La profondità scenica è la percezione dello spazio in più livelli all’interno dell’inquadratura: primo piano, piano medio e sfondo. Si ottiene attraverso disposizione degli elementi, prospettiva, luce, movimento e messa a fuoco. In regia è utile per dare ricchezza visiva, realismo e complessità all’immagine."
  },
  {
    "term": "Protagonista",
    "category": "Sceneggiatura",
    "def": "Personaggio principale su cui si concentra il racconto.",
    "longDef": "Il protagonista è il personaggio principale attorno a cui ruota il nucleo della storia. È colui o colei che porta il peso maggiore del racconto, affronta il conflitto centrale e compie il percorso più importante. In sceneggiatura il protagonista non deve essere per forza “buono”, ma deve essere narrativamente centrale."
  },
  {
    "term": "Protagonista corale",
    "category": "Sceneggiatura",
    "def": "Struttura con più personaggi principali di pari importanza.",
    "longDef": "Il protagonista corale è una struttura narrativa in cui più personaggi condividono il centro del racconto. Non c’è una sola figura dominante, ma una rete di punti di vista e percorsi che insieme costruiscono il cuore della storia. In sceneggiatura questa scelta richiede equilibrio, perché ogni personaggio deve avere peso senza frammentare troppo l’insieme."
  },
  {
    "term": "Proxy",
    "category": "Montaggio",
    "def": "Versione leggera di una clip usata per montare più velocemente.",
    "longDef": "Il proxy è una versione leggera e meno pesante di una clip originale ad alta qualità. Viene usato per montare in modo più fluido su computer meno potenti o con file molto pesanti. In montaggio è una soluzione pratica importantissima, perché permette di lavorare bene senza rinunciare alla qualità finale dei file originali."
  },
  {
    "term": "Punto di svolta",
    "category": "Sceneggiatura",
    "def": "Momento che cambia direzione alla storia.",
    "longDef": "Il punto di svolta è un momento in cui la storia cambia direzione in modo netto. Introduce nuove informazioni, nuove difficoltà o una nuova fase del percorso del protagonista. In sceneggiatura serve a evitare la linearità piatta e a mantenere alta l’attenzione narrativa."
  },
  {
    "term": "Quarta parete",
    "category": "Regia",
    "def": "Barriera immaginaria tra personaggi e spettatore.",
    "longDef": "La quarta parete è la barriera immaginaria che separa il mondo della scena da chi guarda. Quando i personaggi si comportano come se lo spettatore non esistesse, la quarta parete resta intatta; quando invece lo riconoscono o gli parlano, viene infranta. In regia, rompere la quarta parete è una scelta precisa che cambia il tono e il rapporto col pubblico."
  },
  {
    "term": "Rack focus",
    "category": "Regia",
    "def": "Spostamento della messa a fuoco da un soggetto a un altro.",
    "longDef": "Il rack focus è lo spostamento della messa a fuoco da un soggetto a un altro all’interno della stessa inquadratura. Serve a guidare l’attenzione dello spettatore in modo molto preciso, senza bisogno di tagliare. In regia è utile quando si vuole rivelare un’informazione, cambiare centro emotivo o collegare due elementi della scena."
  },
  {
    "term": "Rallenty",
    "category": "Montaggio",
    "def": "Riduzione della velocità di riproduzione di una clip.",
    "longDef": "Il rallenty è la riduzione della velocità di riproduzione di una clip. Serve a enfatizzare un gesto, aumentare il peso emotivo di un momento o permettere di osservare meglio un movimento. In montaggio funziona particolarmente bene quando il materiale è stato girato a un frame rate adeguato."
  },
  {
    "term": "Rapporto d’aspetto",
    "category": "Video",
    "def": "Proporzione tra larghezza e altezza dell’immagine.",
    "longDef": "Il rapporto d’aspetto è la proporzione tra larghezza e altezza dell’immagine. Cambiare formato modifica la percezione visiva del contenuto e il modo in cui lo spazio viene organizzato all’interno del quadro. In video è una scelta importante perché incide sul linguaggio visivo, sul tipo di piattaforma e sullo stile complessivo del prodotto."
  },
  {
    "term": "Red herring",
    "category": "Sceneggiatura",
    "def": "Falso indizio usato per depistare lo spettatore.",
    "longDef": "Il red herring è un falso indizio inserito per depistare lo spettatore o i personaggi. Viene usato spesso nei thriller, nei gialli e nei racconti investigativi per costruire suspense e sorpresa. In sceneggiatura funziona bene quando è credibile e quando il depistaggio non appare artificiale."
  },
  {
    "term": "Regia autoriale",
    "category": "Regia",
    "def": "Approccio in cui lo stile del regista è fortemente riconoscibile.",
    "longDef": "La regia autoriale è un approccio in cui lo stile personale del regista è fortemente riconoscibile. Le scelte visive, ritmiche e compositive non servono solo a raccontare la storia, ma riflettono anche una visione artistica precisa. In questo caso la regia non si nasconde, ma diventa parte evidente dell’identità dell’opera."
  },
  {
    "term": "Regia invisibile",
    "category": "Regia",
    "def": "Stile di regia che evita effetti evidenti per non farsi notare.",
    "longDef": "La regia invisibile è uno stile che evita di farsi notare e punta a rendere fluida e naturale la narrazione. I movimenti, i tagli e le inquadrature sono costruiti in modo da non attirare l’attenzione su se stessi, ma sulla storia. È una forma di regia molto efficace quando si vuole favorire immersione e chiarezza."
  },
  {
    "term": "Regia multicamera",
    "category": "Regia",
    "def": "Coordinamento di più camere che riprendono la stessa scena.",
    "longDef": "La regia multicamera organizza e coordina più camere che riprendono contemporaneamente la stessa scena da punti diversi. È molto usata in televisione, eventi live, talk, concerti e talvolta in produzioni narrative con esigenze specifiche. Richiede scelte rapide e chiare, perché il regista deve decidere come alternare i punti di vista in modo efficace."
  },
  {
    "term": "Registratore audio",
    "category": "Audio",
    "def": "Dispositivo usato per acquisire e salvare il suono.",
    "longDef": "Il registratore audio è il dispositivo che acquisisce, elabora e salva il segnale sonoro in un file. Può essere portatile o integrato in sistemi più complessi e viene usato per dialoghi, ambienti, effetti sonori o musica. In produzione audiovisiva è essenziale quando si vuole una qualità superiore rispetto all’audio registrato direttamente in camera."
  },
  {
    "term": "Regola dei terzi",
    "category": "Regia",
    "def": "Principio compositivo che divide il quadro in tre parti uguali.",
    "longDef": "La regola dei terzi è un principio compositivo che divide idealmente l’inquadratura in tre parti orizzontali e tre verticali. Posizionare soggetti o punti importanti lungo queste linee o ai loro incroci rende spesso l’immagine più equilibrata e interessante. In regia è una guida utile, anche se non va intesa come una regola rigida e assoluta."
  },
  {
    "term": "Rendering",
    "category": "Montaggio",
    "def": "Elaborazione necessaria per visualizzare correttamente effetti o esportazioni.",
    "longDef": "Il rendering è il processo con cui il software elabora clip, effetti, transizioni o correzioni per mostrarli correttamente o prepararli all’esportazione. Alcuni effetti richiedono questo passaggio perché il computer non riesce a visualizzarli in tempo reale. In montaggio il rendering non cambia il contenuto creativo, ma rende possibile controllarlo e finalizzarlo con precisione."
  },
  {
    "term": "Rimborso spese",
    "category": "Produzione",
    "def": "Restituzione dei costi sostenuti da un collaboratore.",
    "longDef": "Il rimborso spese è la restituzione dei costi sostenuti da un collaboratore per conto della produzione, come viaggi, pasti, carburante o acquisti necessari. Deve essere regolato in modo chiaro, con criteri e documentazione coerenti. In produzione è una pratica comune, ma va gestita con precisione per evitare confusione e squilibri di bilancio."
  },
  {
    "term": "Ripple edit",
    "category": "Montaggio",
    "def": "Modifica che sposta automaticamente le clip successive.",
    "longDef": "Il ripple edit è una modifica che accorcia o allunga una clip spostando automaticamente tutte le clip successive. In questo modo non si crea uno spazio vuoto nella timeline e il flusso resta continuo. In montaggio è molto utile quando si vuole cambiare la durata di un punto senza dover riposizionare tutto manualmente."
  },
  {
    "term": "Rischio meteo",
    "category": "Produzione",
    "def": "Possibile problema produttivo legato alle condizioni atmosferiche.",
    "longDef": "Il rischio meteo è la possibilità che condizioni atmosferiche avverse compromettano o rendano più difficile la realizzazione delle riprese. Pioggia, vento, umidità, freddo, caldo eccessivo o cambi improvvisi di luce possono influire su tempi, sicurezza e qualità del materiale. In produzione va sempre considerato, soprattutto nei lavori in esterni o con mezzi sensibili."
  },
  {
    "term": "Risoluzione",
    "category": "Sceneggiatura",
    "def": "Fase finale in cui le conseguenze del climax si compiono.",
    "longDef": "La risoluzione è la fase in cui, dopo il climax, si vedono gli effetti finali della storia. Mostra come i conflitti si chiudono, come cambiano i personaggi e quale nuovo equilibrio si è creato. In sceneggiatura la risoluzione serve a dare senso alla conclusione e a lasciare una precisa impressione finale."
  },
  {
    "term": "Risoluzione",
    "category": "Video",
    "def": "Quantità di dettaglio presente in un’immagine o video.",
    "longDef": "La risoluzione indica la quantità di dettaglio contenuta nell’immagine video, espressa in numero di pixel. Maggiore è la risoluzione, maggiore è il potenziale di definizione, ma questo non basta da solo a garantire una buona immagine. In video la risoluzione va valutata insieme a compressione, ottica, luce e sensore."
  },
  {
    "term": "Ritmo visivo",
    "category": "Regia",
    "def": "Velocità percepita della scena attraverso inquadrature e movimenti.",
    "longDef": "Il ritmo visivo è la velocità percepita con cui una scena si sviluppa attraverso durata delle inquadrature, movimenti, densità dell’azione e composizione. Anche senza montaggio rapido, una scena può avere un ritmo forte o lento in base a come è diretta. La regia usa il ritmo visivo per guidare l’energia e la tensione del racconto."
  },
  {
    "term": "Riverbero",
    "category": "Audio",
    "def": "Persistenza del suono dovuta alle riflessioni in uno spazio.",
    "longDef": "Il riverbero è la persistenza del suono in un ambiente dovuta alle riflessioni sulle superfici circostanti. Non è un’eco distinta, ma una coda sonora diffusa che modifica la percezione di voce, strumenti e spazio. In audio può essere un elemento naturale da controllare oppure un effetto creativo da aggiungere in postproduzione."
  },
  {
    "term": "Roll edit",
    "category": "Montaggio",
    "def": "Spostamento del punto di taglio tra due clip senza cambiare la durata totale.",
    "longDef": "Il roll edit modifica il punto di taglio tra due clip adiacenti senza alterare la durata complessiva della sequenza. Allunga una clip e accorcia l’altra in modo proporzionale, mantenendo fissa la posizione generale. In montaggio è uno strumento molto utile per rifinire il ritmo di un passaggio senza cambiare la struttura del resto della timeline."
  },
  {
    "term": "Rolling shutter",
    "category": "Video",
    "def": "Distorsione visiva dovuta alla lettura progressiva del sensore.",
    "longDef": "Il rolling shutter è un effetto indesiderato dovuto al fatto che molti sensori leggono l’immagine in modo progressivo, riga per riga, e non tutta insieme. Quando ci sono movimenti rapidi, possono apparire distorsioni come linee storte, oscillazioni o deformazioni. In video è un problema noto soprattutto in riprese a mano, con soggetti veloci o panoramiche brusche."
  },
  {
    "term": "Ronzio",
    "category": "Audio",
    "def": "Rumore grave e costante, spesso causato da interferenze elettriche.",
    "longDef": "Il ronzio è un rumore grave e costante, spesso collegato a interferenze elettriche o problemi di alimentazione. Può derivare da masse, trasformatori, cavi difettosi o apparecchiature non ben isolate. In audio è uno dei disturbi più riconoscibili e va individuato rapidamente per evitare di compromettere la registrazione."
  },
  {
    "term": "Room tone",
    "category": "Audio",
    "def": "Suono ambiente costante di un luogo, registrato senza dialoghi.",
    "longDef": "Il room tone è il suono costante di un ambiente registrato in assenza di dialoghi o azioni evidenti. Anche se apparentemente sembra “silenzio”, contiene in realtà la presenza acustica reale dello spazio. In audio è molto utile in montaggio e postproduzione, perché aiuta a raccordare i tagli e a mantenere continuità sonora tra una battuta e l’altra."
  },
  {
    "term": "Rough cut",
    "category": "Montaggio",
    "def": "Prima versione montata, ancora grezza e provvisoria.",
    "longDef": "Il rough cut è la prima versione montata del progetto, ancora provvisoria e non rifinita. Serve a verificare struttura, ordine delle scene, durata generale e funzionamento narrativo prima di entrare nei dettagli più fini. In montaggio è una fase molto importante, perché permette di capire se il filmato funziona davvero nel suo insieme."
  },
  {
    "term": "Rumore di fondo",
    "category": "Audio",
    "def": "Suono indesiderato presente nell’ambiente o nella registrazione.",
    "longDef": "Il rumore di fondo è l’insieme dei suoni indesiderati presenti nell’ambiente o nel sistema di registrazione. Può includere traffico, vento, frigoriferi, impianti elettrici, ventole, persone lontane o interferenze varie. In audio è uno degli elementi più delicati da controllare, perché può compromettere chiarezza e intelligibilità del contenuto principale."
  },
  {
    "term": "Scaletta",
    "category": "Sceneggiatura",
    "def": "Elenco ordinato delle scene o dei momenti principali della storia.",
    "longDef": "La scaletta è l’elenco ordinato delle scene o dei momenti principali della storia. Aiuta a vedere la struttura del racconto in modo schematico, senza disperdersi subito nei dettagli di dialoghi o descrizioni. In sceneggiatura è fondamentale per costruire una progressione chiara e per controllare il ritmo dell’intreccio."
  },
  {
    "term": "Scavalcamento di campo",
    "category": "Regia",
    "def": "Violazione dell’asse d’azione che altera l’orientamento spaziale.",
    "longDef": "Lo scavalcamento di campo avviene quando la camera supera l’asse d’azione e cambia il lato da cui osserva la scena. Questo può invertire la direzione degli sguardi o dei movimenti, generando confusione nello spettatore. In regia può essere un errore, ma in alcuni casi può anche essere una scelta intenzionale per creare disorientamento."
  },
  {
    "term": "Scena",
    "category": "Sceneggiatura",
    "def": "Unità narrativa che si svolge in un luogo e tempo definiti.",
    "longDef": "La scena è un’unità narrativa che si svolge in un luogo e in un tempo definiti. Quando cambia spazio o momento, in genere cambia anche la scena. In sceneggiatura rappresenta il mattone base del racconto audiovisivo, perché organizza l’azione in segmenti concreti e filmabili."
  },
  {
    "term": "Segreteria di edizione",
    "category": "Produzione",
    "def": "Ruolo che controlla continuità, note di set e corrispondenza con la sceneggiatura.",
    "longDef": "La segreteria di edizione è il ruolo che controlla la continuità della scena e prende nota di tutto ciò che serve a mantenere coerenza tra riprese e montaggio. Registra dettagli su battute, posizioni, movimenti, oggetti, durata delle take e osservazioni utili per regia e postproduzione. In produzione e sul set è una figura preziosa, perché previene errori che altrimenti emergerebbero troppo tardi."
  },
  {
    "term": "Sensore",
    "category": "Video",
    "def": "Componente che cattura la luce e la trasforma in immagine digitale.",
    "longDef": "Il sensore è il componente elettronico che cattura la luce e la converte in segnale digitale. Le sue dimensioni e caratteristiche influenzano sensibilità, gamma dinamica, resa del rumore e profondità di campo. In video il sensore è uno degli elementi che determinano la qualità di base della ripresa."
  },
  {
    "term": "Sequenza",
    "category": "Sceneggiatura",
    "def": "Insieme di scene legate da una stessa funzione narrativa.",
    "longDef": "La sequenza è un insieme di scene legate tra loro da una stessa funzione narrativa o da una continuità di azione. Può raccontare un obiettivo, una situazione o un evento più ampio che richiede più momenti distinti. In sceneggiatura, pensare per sequenze aiuta a dare respiro e struttura al racconto."
  },
  {
    "term": "Sequenza di montaggio",
    "category": "Montaggio",
    "def": "Composizione ordinata di clip in una timeline.",
    "longDef": "La sequenza di montaggio è l’insieme ordinato di clip inserite in una timeline per costruire una scena o una parte del progetto. Può contenere video, audio, musica, effetti, titoli e altri elementi sincronizzati. In montaggio rappresenta l’unità pratica su cui si lavora per dare forma al racconto."
  },
  {
    "term": "Setup",
    "category": "Sceneggiatura",
    "def": "Elemento introdotto prima per essere ripreso o sviluppato dopo.",
    "longDef": "Il setup è un elemento introdotto prima nel racconto per essere ripreso o sviluppato più avanti. Può essere un oggetto, una battuta, una promessa, una situazione o una relazione. In sceneggiatura il setup è utile perché prepara il terreno e rende più soddisfacente ciò che arriverà dopo."
  },
  {
    "term": "Sguardo in macchina",
    "category": "Regia",
    "def": "Momento in cui un personaggio guarda direttamente in camera.",
    "longDef": "Lo sguardo in macchina si verifica quando un personaggio guarda direttamente verso l’obiettivo. Questa scelta rompe la normale illusione narrativa e può creare complicità, disagio, ironia o frontalità. In regia va usata con consapevolezza, perché ha un effetto molto forte sul rapporto tra scena e spettatore."
  },
  {
    "term": "Shot list",
    "category": "Regia",
    "def": "Elenco ordinato delle inquadrature da realizzare.",
    "longDef": "La shot list è l’elenco ordinato delle inquadrature previste per una scena o per un’intera giornata di lavoro. Ogni voce può includere tipo di piano, movimento, contenuto e priorità di ripresa. È molto utile perché trasforma le idee registiche in una guida concreta e facilita il coordinamento con produzione e reparto tecnico."
  },
  {
    "term": "Shutter angle",
    "category": "Video",
    "def": "Parametro equivalente all’otturatore nel linguaggio cinematografico.",
    "longDef": "Lo shutter angle è un modo, di origine cinematografica, per descrivere la durata relativa dell’esposizione di ogni fotogramma. Anche nelle camere digitali viene usato per mantenere un rapporto coerente tra tempo di posa e frame rate. In video è utile perché aiuta a controllare la resa del movimento in modo più intuitivo e costante."
  },
  {
    "term": "Simmetria",
    "category": "Regia",
    "def": "Organizzazione equilibrata degli elementi ai lati dell’inquadratura.",
    "longDef": "La simmetria è una disposizione equilibrata degli elementi ai lati dell’inquadratura, spesso centrata o speculare. Produce un effetto di ordine, controllo, rigidità o armonia, a seconda del contesto. In regia può essere usata per costruire uno stile forte o per dare alla scena una qualità particolare, quasi rituale o geometrica."
  },
  {
    "term": "Sincronizzazione audio",
    "category": "Audio",
    "def": "Allineamento preciso tra suono e immagine.",
    "longDef": "La sincronizzazione audio è l’allineamento corretto tra il suono e l’immagine. Se la voce non coincide con il movimento delle labbra o un’azione non corrisponde al suo rumore, lo spettatore percepisce subito un difetto. In ambito audiovisivo una buona sincronizzazione è essenziale per realismo, immersione e professionalità."
  },
  {
    "term": "Sincronizzazione multicam",
    "category": "Montaggio",
    "def": "Allineamento automatico o manuale di più camere della stessa scena.",
    "longDef": "La sincronizzazione multicam è l’allineamento preciso di più clip riprese contemporaneamente da camere diverse. Può avvenire usando l’audio, il timecode, il clap o altri riferimenti comuni. In montaggio questo passaggio è essenziale per poter alternare correttamente i punti di vista senza perdere coerenza temporale."
  },
  {
    "term": "Sinossi",
    "category": "Sceneggiatura",
    "def": "Riassunto chiaro e ordinato dell’intera vicenda.",
    "longDef": "La sinossi è un riassunto ordinato e comprensibile dell’intera storia, dai suoi presupposti fino alla conclusione. A differenza della logline, è più sviluppata e permette di cogliere meglio struttura, personaggi principali e andamento della vicenda. In sceneggiatura è utile per presentare il progetto e verificarne la solidità narrativa."
  },
  {
    "term": "Slide edit",
    "category": "Montaggio",
    "def": "Spostamento di una clip tra due altre variando i tagli adiacenti.",
    "longDef": "Lo slide edit sposta una clip a sinistra o a destra tra due clip vicine, modificando di conseguenza i loro punti di taglio. La durata complessiva della sequenza resta uguale, ma cambia l’equilibrio tra i tre elementi coinvolti. In montaggio è una funzione raffinata, utile quando si vuole aggiustare il tempo di un momento senza cambiare la lunghezza totale."
  },
  {
    "term": "Slider",
    "category": "Video",
    "def": "Binario corto usato per movimenti lineari fluidi della camera.",
    "longDef": "Lo slider è un binario corto su cui la camera può scorrere in modo fluido. Permette di ottenere piccoli movimenti lineari molto controllati, utili per dare eleganza e profondità all’inquadratura. In video è spesso usato in interviste, product video, documentari e scene che beneficiano di un movimento leggero ma raffinato."
  },
  {
    "term": "Slip edit",
    "category": "Montaggio",
    "def": "Spostamento del contenuto interno di una clip mantenendo fissa la sua posizione.",
    "longDef": "Lo slip edit sposta il contenuto interno di una clip mantenendo invariata la sua posizione e durata nella timeline. In pratica cambia quali fotogrammi della clip vengono mostrati, senza spostare il blocco complessivo. In montaggio è utile quando il punto del racconto funziona, ma l’inizio o la fine visiva della clip vanno migliorati."
  },
  {
    "term": "Slow motion",
    "category": "Video",
    "def": "Ripresa o riproduzione rallentata rispetto al tempo reale.",
    "longDef": "Lo slow motion è una tecnica che permette di mostrare un’azione rallentata rispetto al tempo reale. Si ottiene registrando a un frame rate più alto e riproducendo poi il materiale a una velocità standard. In video viene usato per enfatizzare un gesto, aumentare l’impatto emotivo o analizzare il movimento con maggiore precisione."
  },
  {
    "term": "Soggetto",
    "category": "Sceneggiatura",
    "def": "Testo che racconta in forma breve la storia del film.",
    "longDef": "Il soggetto è un testo breve che racconta l’idea narrativa principale del film o del video. Riassume la storia in forma chiara, senza entrare ancora nel dettaglio tecnico della sceneggiatura dialogata. È spesso il primo documento con cui una storia prende forma scritta in modo riconoscibile."
  },
  {
    "term": "Sopralluogo",
    "category": "Produzione",
    "def": "Visita preventiva a una location per verificarne fattibilità e caratteristiche.",
    "longDef": "Il sopralluogo è la visita preventiva a una location per verificarne caratteristiche, limiti e potenzialità prima delle riprese. Durante il sopralluogo si valutano accessi, spazi, luce, rumore, sicurezza, corrente elettrica, movimenti e logistica generale. In produzione è una tappa fondamentale, perché aiuta a prevedere problemi e a preparare il set in modo realistico."
  },
  {
    "term": "Sottopancia",
    "category": "Montaggio",
    "def": "Testo in basso sullo schermo che identifica persona o informazione.",
    "longDef": "Il sottopancia è un testo posizionato nella parte bassa dello schermo, usato per identificare una persona, un luogo, una data o un’informazione sintetica. È molto comune in interviste, documentari, reportage e contenuti informativi. In montaggio va progettato con chiarezza e discrezione, così da essere utile senza distrarre."
  },
  {
    "term": "Sottotesto",
    "category": "Sceneggiatura",
    "def": "Significato implicito nascosto dietro parole o comportamenti.",
    "longDef": "Il sottotesto è ciò che un personaggio comunica senza dirlo in modo esplicito. Può emergere dal tono, dalle pause, dai silenzi, dai gesti o da parole che significano più di quanto sembrano dire. In sceneggiatura il sottotesto rende i dialoghi più vivi, realistici e interessanti."
  },
  {
    "term": "Sound design",
    "category": "Audio",
    "def": "Progettazione creativa dell’universo sonoro di un’opera.",
    "longDef": "Il sound design è la progettazione creativa dell’universo sonoro di un’opera audiovisiva. Non riguarda solo la correzione tecnica, ma la costruzione espressiva di ambienti, effetti, texture e percezioni sonore. In audio è una disciplina fondamentale, perché il suono non accompagna semplicemente le immagini: contribuisce in modo decisivo a creare atmosfera, significato ed emozione."
  },
  {
    "term": "Sponsor",
    "category": "Produzione",
    "def": "Soggetto che sostiene economicamente o materialmente il progetto.",
    "longDef": "Lo sponsor è un soggetto che sostiene il progetto con denaro, beni, servizi o risorse materiali in cambio di visibilità o di un’associazione d’immagine. Può contribuire in modo determinante alla fattibilità del lavoro, soprattutto in produzioni indipendenti o a budget ridotto. In produzione la relazione con lo sponsor va gestita con equilibrio, per non compromettere identità e coerenza del progetto."
  },
  {
    "term": "Stabilizzazione",
    "category": "Video",
    "def": "Sistema che riduce vibrazioni e tremolii dell’immagine.",
    "longDef": "La stabilizzazione è il sistema che riduce vibrazioni e tremolii dell’immagine durante la ripresa. Può essere ottica, elettronica, interna al sensore o ottenuta con supporti esterni. In video è molto importante perché migliora la leggibilità della ripresa e rende i movimenti più fluidi e professionali."
  },
  {
    "term": "Stabilizzazione digitale",
    "category": "Montaggio",
    "def": "Correzione software del tremolio dell’immagine.",
    "longDef": "La stabilizzazione digitale è la correzione software del tremolio di una clip già girata. Analizza il movimento e cerca di compensarlo per rendere l’immagine più fluida. In montaggio è una soluzione molto utile per recuperare riprese imperfette, anche se non sempre può sostituire una buona stabilità in fase di ripresa."
  },
  {
    "term": "Storyboard",
    "category": "Regia",
    "def": "Serie di disegni o immagini che visualizza le inquadrature prima delle riprese.",
    "longDef": "Lo storyboard è una sequenza di disegni o immagini che rappresenta in anticipo le inquadrature del film o del video. Non è solo un supporto illustrativo, ma uno strumento pratico per visualizzare il ritmo, i movimenti e la costruzione della scena. In regia aiuta a chiarire idee, comunicare con la troupe e prevenire errori in fase di ripresa."
  },
  {
    "term": "Supercardioide",
    "category": "Audio",
    "def": "Pattern direzionale più stretto del cardioide.",
    "longDef": "Il supercardioide è un pattern più stretto del cardioide e quindi ancora più direzionale. Isola meglio la fonte sonora frontale, ma conserva una certa sensibilità anche in una piccola area posteriore. In audio viene scelto quando si vuole maggiore precisione di cattura, soprattutto in ambienti rumorosi o in riprese più selettive."
  },
  {
    "term": "Suspense",
    "category": "Sceneggiatura",
    "def": "Attesa carica di tensione rispetto a un evento imminente.",
    "longDef": "La suspense è la tensione generata dall’attesa di qualcosa che potrebbe accadere. Nasce quando lo spettatore percepisce un pericolo, un’incertezza o una promessa narrativa e resta in allerta rispetto al suo sviluppo. In sceneggiatura è uno strumento potentissimo, perché tiene vivo l’interesse anche prima che l’evento si compia."
  },
  {
    "term": "Svolta emotiva",
    "category": "Sceneggiatura",
    "def": "Cambiamento nel tono o nello stato interiore del personaggio.",
    "longDef": "La svolta emotiva è un cambiamento significativo nello stato interiore di un personaggio o nel tono di una scena. Può derivare da una scoperta, una ferita, una confessione, una perdita o un gesto inatteso. In sceneggiatura è importante perché rende il racconto vivo non solo sul piano dell’azione, ma anche su quello dell’esperienza emotiva."
  },
  {
    "term": "Sync",
    "category": "Audio",
    "def": "Allineamento tecnico tra registrazione audio e video.",
    "longDef": "Il sync è l’allineamento tecnico tra audio e video o tra più sorgenti audio diverse. Può essere ottenuto tramite clap, timecode, forme d’onda o altri sistemi di riferimento. In audio e audiovisivo un sync corretto è fondamentale perché ogni sfasamento tra immagine e suono viene percepito immediatamente come un difetto."
  },
  {
    "term": "Teleobiettivo",
    "category": "Video",
    "def": "Obiettivo che ingrandisce i soggetti lontani e comprime la prospettiva.",
    "longDef": "Il teleobiettivo è un obiettivo con focale lunga che stringe il campo visivo e avvicina apparentemente i soggetti lontani. Tende anche a comprimere la prospettiva, facendo sembrare più vicini tra loro elementi che in realtà sono distanti. In video è molto utile per ritratti, dettagli lontani, scene sportive o situazioni in cui non ci si può avvicinare fisicamente."
  },
  {
    "term": "Tema",
    "category": "Sceneggiatura",
    "def": "Idea centrale o messaggio profondo della storia.",
    "longDef": "Il tema è l’idea centrale o la domanda profonda che attraversa la storia. Non coincide con la trama, ma con ciò di cui il racconto parla davvero a un livello più generale, come il potere, la perdita, la libertà o la colpa. In sceneggiatura il tema aiuta a dare unità e significato all’opera."
  },
  {
    "term": "Tempo della scena",
    "category": "Regia",
    "def": "Durata percepita dell’azione all’interno dell’inquadratura.",
    "longDef": "Il tempo della scena è la durata interna con cui l’azione viene percepita e vissuta sullo schermo. Non coincide solo con i secondi reali, ma con il modo in cui la regia costruisce attese, pause, accelerazioni e permanenze. Gestire bene il tempo della scena significa controllare tensione, attenzione e respiro narrativo."
  },
  {
    "term": "Tempo di posa",
    "category": "Video",
    "def": "Durata di esposizione del sensore alla luce.",
    "longDef": "Il tempo di posa è la durata per cui il sensore resta esposto alla luce per ogni fotogramma. In video non influisce solo sulla luminosità, ma anche sulla resa del movimento: tempi più rapidi rendono l’azione più secca e nitida, tempi più lunghi producono maggiore scia o morbidezza. È quindi una scelta tecnica che ha anche conseguenze estetiche molto evidenti."
  },
  {
    "term": "Tilt",
    "category": "Regia",
    "def": "Movimento verticale della camera sul proprio asse.",
    "longDef": "Il tilt è un movimento verticale della camera sul proprio asse, verso l’alto o verso il basso. Serve a scoprire gradualmente un soggetto, enfatizzarne l’altezza o collegare due elementi posti su livelli diversi. In regia può avere una funzione descrittiva, narrativa o spettacolare, a seconda del contesto."
  },
  {
    "term": "Time-lapse",
    "category": "Video",
    "def": "Tecnica che mostra in pochi secondi eventi molto lunghi.",
    "longDef": "Il time-lapse è una tecnica che comprime lunghi intervalli di tempo in pochi secondi di video. Si realizza scattando fotogrammi a distanza regolare e montandoli poi in sequenza. In video è molto efficace per mostrare fenomeni lenti come nuvole, traffico, costruzioni, tramonti o movimenti urbani."
  },
  {
    "term": "Timeline",
    "category": "Montaggio",
    "def": "Area di lavoro in cui si organizzano clip audio e video nel tempo.",
    "longDef": "La timeline è l’area di lavoro in cui si dispongono nel tempo clip video, audio, titoli ed effetti. È il luogo in cui il materiale grezzo viene trasformato in racconto attraverso ordine, durata, sovrapposizioni e tagli. In montaggio è lo spazio centrale di costruzione del filmato, perché tutto passa da lì."
  },
  {
    "term": "Titolazione",
    "category": "Montaggio",
    "def": "Creazione e gestione di testi nel montaggio.",
    "longDef": "La titolazione riguarda la creazione e gestione dei testi all’interno del video, come titoli iniziali, nomi, didascalie o crediti finali. Non è solo una questione grafica, ma anche narrativa e informativa, perché il testo deve essere leggibile, coerente e ben inserito nel montaggio. In montaggio una buona titolazione aiuta il video senza appesantirlo."
  },
  {
    "term": "Traccia audio",
    "category": "Audio",
    "def": "Singolo livello o file sonoro dentro un progetto.",
    "longDef": "La traccia audio è un singolo livello sonoro all’interno di un progetto di registrazione o montaggio. Può contenere dialoghi, musica, rumori, effetti o ambienti, separati dagli altri per essere gestiti con maggiore controllo. In audio lavorare per tracce consente di regolare, pulire e organizzare il materiale in modo ordinato ed efficace."
  },
  {
    "term": "Transizione",
    "category": "Montaggio",
    "def": "Passaggio visivo o sonoro tra due clip.",
    "longDef": "La transizione è il passaggio da una clip all’altra tramite un effetto visivo o sonoro, come dissolvenze, tendine, sfumature o altri raccordi. Non è sempre necessaria, e anzi spesso il semplice cut resta la scelta migliore. In montaggio una transizione ha senso quando aggiunge chiarezza, atmosfera o intenzione espressiva."
  },
  {
    "term": "Transizione audio",
    "category": "Montaggio",
    "def": "Passaggio sonoro graduale tra due clip.",
    "longDef": "La transizione audio è un passaggio graduale tra due clip sonore o tra due parti di una stessa traccia. Può servire a unire ambienti, far entrare una musica, ammorbidire uno stacco o accompagnare un cambio di scena. In montaggio audio è importante perché il suono percepisce gli stacchi in modo molto sensibile."
  },
  {
    "term": "Trasporti",
    "category": "Produzione",
    "def": "Organizzazione degli spostamenti di persone e materiali.",
    "longDef": "I trasporti comprendono tutta l’organizzazione degli spostamenti di persone, attrezzature e materiali. Possono includere auto, furgoni, navette, carichi, parcheggi e tempi di percorrenza. In produzione una gestione accurata dei trasporti evita ritardi, stress e inefficienze che possono ripercuotersi su tutta la giornata."
  },
  {
    "term": "Trattamento",
    "category": "Sceneggiatura",
    "def": "Versione estesa della storia, scritta in forma narrativa ma dettagliata.",
    "longDef": "Il trattamento è una versione estesa della storia, scritta in forma narrativa ma con maggiore dettaglio rispetto a soggetto e sinossi. Descrive scene, passaggi, atmosfera e sviluppo dei personaggi, pur senza arrivare ancora alla forma completa della sceneggiatura tecnica. Serve a capire se il racconto funziona prima di passare alla scrittura definitiva."
  },
  {
    "term": "Treppiede",
    "category": "Video",
    "def": "Supporto a tre gambe per mantenere la camera ferma.",
    "longDef": "Il treppiede è un supporto a tre gambe che mantiene la camera ferma e stabile. È uno strumento semplice ma fondamentale, soprattutto per interviste, paesaggi, riprese statiche o movimenti controllati di panoramica e tilt. In video il treppiede contribuisce a dare precisione, pulizia e affidabilità alla ripresa."
  },
  {
    "term": "Trimming",
    "category": "Montaggio",
    "def": "Regolazione precisa del punto iniziale o finale di una clip.",
    "longDef": "Il trimming è la regolazione fine del punto iniziale o finale di una clip nella timeline. Non cambia la struttura generale del montaggio, ma rifinisce il taglio per renderlo più preciso, ritmico o naturale. In montaggio è una delle operazioni più frequenti e importanti, perché spesso la qualità di una scena dipende da pochi fotogrammi."
  },
  {
    "term": "Troupe",
    "category": "Produzione",
    "def": "Insieme delle persone coinvolte nella realizzazione delle riprese.",
    "longDef": "La troupe è l’insieme delle persone coinvolte operativamente nelle riprese. Il termine viene spesso usato in modo simile a “crew”, ma può avere un’accezione più ampia o più tradizionale a seconda del contesto. In produzione la troupe rappresenta il corpo vivo del set, cioè chi rende concretamente possibile la giornata di lavoro."
  },
  {
    "term": "Uscita a effetto",
    "category": "Regia",
    "def": "Uscita costruita per lasciare una forte impressione visiva o drammatica.",
    "longDef": "L’uscita a effetto è una conclusione di presenza scenica studiata per lasciare un’impressione forte nello spettatore. Può essere lenta, improvvisa, drammatica, ironica o misteriosa, a seconda del tono della scena. In regia serve spesso a chiudere un momento con forza oppure a preparare ciò che verrà dopo."
  },
  {
    "term": "Uscita di campo",
    "category": "Regia",
    "def": "Momento in cui un soggetto esce dall’inquadratura.",
    "longDef": "L’uscita di campo è il momento in cui un soggetto lascia l’inquadratura. Anche questo gesto, apparentemente semplice, può avere un valore narrativo importante: può chiudere una scena, creare attesa o suggerire una direzione dell’azione. In regia, il modo in cui si esce dal quadro può essere significativo quanto il modo in cui si entra."
  },
  {
    "term": "Velocizzazione",
    "category": "Montaggio",
    "def": "Aumento della velocità di riproduzione di una clip.",
    "longDef": "La velocizzazione è l’aumento della velocità di riproduzione di una clip. Viene usata per accorciare un’azione, dare energia a una sequenza o mostrare in poco tempo un processo lungo. In montaggio è una scelta utile e spesso efficace, ma va gestita con attenzione per non rendere il risultato innaturale o confuso."
  },
  {
    "term": "Viewfinder",
    "category": "Video",
    "def": "Mirino usato per controllare l’inquadratura.",
    "longDef": "Il viewfinder, o mirino, è il dispositivo attraverso cui l’operatore controlla l’inquadratura e spesso anche alcuni parametri di ripresa. Può essere ottico o elettronico, a seconda della camera. In video è importante perché offre un punto di osservazione più stabile e protetto rispetto al solo schermo posteriore."
  },
  {
    "term": "Vincolo produttivo",
    "category": "Produzione",
    "def": "Limite pratico o economico che condiziona il progetto.",
    "longDef": "Il vincolo produttivo è un limite pratico, economico, logistico o temporale che condiziona la realizzazione del progetto. Può riguardare il budget, il numero di giornate, il meteo, la disponibilità degli attori o le caratteristiche di una location. In produzione non è solo un ostacolo: spesso è anche il fattore che costringe a trovare soluzioni intelligenti e creative."
  },
  {
    "term": "Voce fuori campo",
    "category": "Sceneggiatura",
    "def": "Voce narrante o commento udito senza vedere chi parla.",
    "longDef": "La voce fuori campo è una voce che si sente senza vedere in quel momento il personaggio che parla. Può appartenere a un narratore, a un personaggio che commenta, a un pensiero o a una memoria. In sceneggiatura va usata con attenzione, perché può arricchire il racconto ma anche appesantirlo se sostituisce ciò che dovrebbe essere mostrato."
  },
  {
    "term": "Voice over",
    "category": "Audio",
    "def": "Voce registrata che accompagna le immagini senza provenire dalla scena.",
    "longDef": "La voice over è una voce registrata che accompagna le immagini senza appartenere direttamente all’azione visibile della scena. Può avere funzione narrativa, informativa, poetica o riflessiva. In audio e audiovisivo è molto utile, ma va dosata bene, perché una voice over eccessiva può appesantire il racconto invece di arricchirlo."
  },
  {
    "term": "Wild track",
    "category": "Audio",
    "def": "Registrazione audio separata fatta fuori dalla ripresa video.",
    "longDef": "La wild track è una registrazione audio fatta separatamente dalle immagini, spesso subito dopo o prima della scena. Può servire per registrare ambienti, passi, rumori o dialoghi da usare come supporto in montaggio. In audio è una risorsa preziosa, perché offre materiale pulito o alternativo quando la presa diretta presenta problemi."
  },
  {
    "term": "Zebra",
    "category": "Video",
    "def": "Indicatore video che segnala le aree troppo esposte.",
    "longDef": "Le zebra sono un aiuto visivo che segnala sul monitor le aree dell’immagine che hanno raggiunto o superato una certa soglia di esposizione. Appaiono come strisce sovrapposte alle zone interessate e aiutano a capire se certi punti rischiano di essere sovraesposti. In video sono utilissime per controllare l’esposizione in modo rapido e pratico sul set."
  },
  {
    "term": "Zoom",
    "category": "Regia",
    "def": "Variazione della focale che avvicina o allontana visivamente il soggetto.",
    "longDef": "Lo zoom è la variazione della focale che avvicina o allontana visivamente il soggetto senza spostare la camera. È utile quando si vuole cambiare rapidamente il livello di attenzione dello spettatore o isolare un elemento all’interno della scena. A differenza della carrellata, però, non modifica davvero la prospettiva, e per questo produce un effetto visivo diverso."
  },
  {
    "term": "Provino",
    "category": "Recitazione",
    "def": "Audizione in cui un attore interpreta una parte per essere selezionato.",
    "longDef": "Il provino è la prova pratica con cui un attore presenta la propria interpretazione per un ruolo. Può consistere in un monologo, in una scena dialogata o in una lettura assegnata. È un momento importante perché permette a regista e casting di valutare presenza scenica, aderenza al personaggio e capacità interpretativa."
  },
  {
    "term": "Monologo",
    "category": "Recitazione",
    "def": "Testo recitato da un solo personaggio.",
    "longDef": "Il monologo è una porzione di recitazione in cui un personaggio parla da solo o comunque domina completamente la scena. Può essere rivolto a sé stesso, a un altro personaggio o direttamente al pubblico. In recitazione richiede controllo del ritmo, delle intenzioni e della presenza scenica."
  },
  {
    "term": "Improvvisazione",
    "category": "Recitazione",
    "def": "Recitazione non rigidamente fissata da un testo prestabilito.",
    "longDef": "L’improvvisazione è la capacità di costruire azioni, battute e reazioni senza seguire parola per parola un copione. Può essere usata in esercizi, prove o persino durante le riprese per trovare momenti più veri e spontanei. In recitazione è utile perché sviluppa ascolto, prontezza e libertà espressiva."
  },
  {
    "term": "Presenza scenica",
    "category": "Recitazione",
    "def": "Capacità di attirare e mantenere l’attenzione in scena.",
    "longDef": "La presenza scenica è la forza con cui un attore occupa lo spazio e cattura lo sguardo dello spettatore. Non dipende solo dalla voce o dal movimento, ma da una combinazione di concentrazione, energia e credibilità. In recitazione è una qualità fondamentale perché rende viva la performance anche nei momenti più semplici."
  },
  {
    "term": "Intenzione",
    "category": "Recitazione",
    "def": "Obiettivo emotivo o pratico che guida una battuta o un’azione.",
    "longDef": "L’intenzione è ciò che il personaggio cerca di ottenere in un dato momento della scena. Ogni frase o gesto dovrebbe essere sostenuto da una volontà precisa, come convincere, difendersi, provocare o nascondere qualcosa. In recitazione lavorare sulle intenzioni rende il testo più vero e meno meccanico."
  },
  {
    "term": "Obiettivo di scena",
    "category": "Recitazione",
    "def": "Scopo immediato che il personaggio vuole raggiungere nella scena.",
    "longDef": "L’obiettivo di scena è il risultato concreto che il personaggio cerca di ottenere in quel preciso momento narrativo. Aiuta l’attore a orientare battute, ritmo, sguardi e movimenti verso una direzione chiara. In recitazione è uno strumento utile per evitare interpretazioni generiche o vaghe."
  },
  {
    "term": "Azione scenica",
    "category": "Recitazione",
    "def": "Gesto fisico o psicologico che il personaggio compie nella scena.",
    "longDef": "L’azione scenica è ciò che il personaggio fa davvero, non solo ciò che dice. Può essere un gesto visibile oppure un’azione più sottile, come trattenere, sedurre, rifiutare o implorare. In recitazione è importante perché dà concretezza e dinamica al lavoro dell’attore."
  },
  {
    "term": "Ascolto scenico",
    "category": "Recitazione",
    "def": "Capacità di reagire davvero a ciò che accade in scena.",
    "longDef": "L’ascolto scenico è l’attenzione autentica verso partner, spazio e situazione durante la recitazione. Non significa soltanto sentire le battute dell’altro, ma lasciarsi realmente influenzare da ciò che accade. In recitazione è una qualità decisiva, perché rende la scena viva e non artificiale."
  },
  {
    "term": "Partner di scena",
    "category": "Recitazione",
    "def": "Attore o attrice con cui si condivide una scena.",
    "longDef": "Il partner di scena è l’interprete con cui un attore entra in relazione durante una sequenza o un dialogo. La qualità di questa relazione incide molto sulla verità e sull’energia della performance. In recitazione il partner non è solo un collega, ma una presenza attiva con cui costruire il momento."
  },
  {
    "term": "Battuta",
    "category": "Recitazione",
    "def": "Singolo intervento verbale di un personaggio.",
    "longDef": "La battuta è una porzione di testo pronunciata da un personaggio all’interno della scena. Non va considerata solo come una frase da dire, ma come un’unità di azione e relazione. In recitazione il modo in cui si attacca, si modula e si conclude una battuta cambia profondamente il senso della scena."
  },
  {
    "term": "Replica",
    "category": "Recitazione",
    "def": "Risposta recitata a una battuta o a un’azione di un altro personaggio.",
    "longDef": "La replica è la risposta che un personaggio dà a ciò che ha appena ricevuto in scena. Può essere verbale, fisica o emotiva, e ha valore solo se nasce davvero da un ascolto attivo. In recitazione la qualità delle repliche rende la scena dinamica, credibile e presente."
  },
  {
    "term": "Pause",
    "category": "Recitazione",
    "def": "Interruzioni intenzionali del parlato o dell’azione.",
    "longDef": "Le pause sono sospensioni nella recitazione che possono avere valore emotivo, ritmico o narrativo. Non sono vuoti casuali, ma momenti pieni di pensiero, tensione o attesa. In recitazione saper usare bene le pause è importante quanto saper dire il testo."
  },
  {
    "term": "Silenzio scenico",
    "category": "Recitazione",
    "def": "Momento senza parole che mantiene significato e tensione.",
    "longDef": "Il silenzio scenico è una sospensione verbale che continua comunque a raccontare qualcosa. Può esprimere emozione, blocco, ascolto, distanza o conflitto più di molte battute. In recitazione è un elemento molto potente, perché anche il non detto costruisce la scena."
  },
  {
    "term": "Sottolineatura",
    "category": "Recitazione",
    "def": "Evidenziazione intenzionale di una parola, gesto o emozione.",
    "longDef": "La sottolineatura è il modo in cui un attore mette in risalto un momento del testo o dell’azione. Può avvenire attraverso voce, ritmo, sguardo, pausa o gesto. In recitazione va usata con misura, perché se è eccessiva rende la performance troppo spiegata o artificiale."
  },
  {
    "term": "Ritmo recitativo",
    "category": "Recitazione",
    "def": "Velocità e andamento con cui l’attore costruisce la scena.",
    "longDef": "Il ritmo recitativo è il modo in cui l’attore distribuisce tempo, pause, energia e accelerazioni nella performance. Influisce sulla vitalità della scena e sul rapporto con il partner e con il testo. In recitazione un buon ritmo non è sempre veloce, ma sempre giusto rispetto alla situazione."
  },
  {
    "term": "Tempo comico",
    "category": "Recitazione",
    "def": "Precisione ritmica necessaria per ottenere effetto comico.",
    "longDef": "Il tempo comico è la capacità di dire, ritardare o interrompere una battuta nel momento esatto in cui produce il massimo effetto. Dipende da ascolto, controllo, pausa e relazione con il pubblico o con il partner. In recitazione è una competenza molto delicata, perché la comicità vive spesso di precisione millimetrica."
  },
  {
    "term": "Timbro vocale",
    "category": "Recitazione",
    "def": "Qualità specifica della voce che la rende riconoscibile.",
    "longDef": "Il timbro vocale è il colore della voce, cioè ciò che la distingue da un’altra anche a parità di volume o altezza. In recitazione il timbro aiuta a definire carattere, età percepita, intensità e credibilità del personaggio. Lavorarci sopra significa rendere la voce uno strumento più espressivo."
  },
  {
    "term": "Dizione",
    "category": "Recitazione",
    "def": "Chiarezza nella pronuncia di parole e suoni.",
    "longDef": "La dizione riguarda il modo corretto e comprensibile di articolare parole, consonanti, vocali e accenti. Non serve solo a “parlare bene”, ma a rendere il testo leggibile e preciso per chi ascolta. In recitazione è una base tecnica importante, soprattutto quando il parlato deve essere nitido."
  },
  {
    "term": "Articolazione",
    "category": "Recitazione",
    "def": "Uso preciso di bocca, lingua e labbra nella pronuncia.",
    "longDef": "L’articolazione è il lavoro fisico con cui i suoni vengono formati e resi chiari. Una buona articolazione migliora comprensione, controllo e sicurezza vocale. In recitazione è essenziale perché permette di dare chiarezza al testo senza irrigidire l’interpretazione."
  },
  {
    "term": "Proiezione della voce",
    "category": "Recitazione",
    "def": "Capacità di far arrivare la voce con chiarezza nello spazio.",
    "longDef": "La proiezione della voce è l’uso tecnico del respiro e dell’emissione per far arrivare il suono lontano senza forzare. È fondamentale soprattutto in teatro, ma utile anche davanti alla camera per controllo e presenza. In recitazione aiuta a dare autorità e pulizia alla performance vocale."
  },
  {
    "term": "Respirazione diaframmatica",
    "category": "Recitazione",
    "def": "Tecnica di respiro che sostiene voce e controllo corporeo.",
    "longDef": "La respirazione diaframmatica è un uso consapevole del respiro che coinvolge il diaframma e favorisce stabilità, appoggio e controllo. In recitazione è preziosa per parlare con più naturalezza e sostenere emozione, volume e ritmo. Un buon respiro migliora sia voce sia presenza scenica."
  },
  {
    "term": "Memoria emotiva",
    "category": "Recitazione",
    "def": "Uso di esperienze interiori per alimentare l’interpretazione.",
    "longDef": "La memoria emotiva è una tecnica con cui l’attore richiama sensazioni o ricordi personali per dare verità a un’emozione scenica. Va usata con intelligenza e delicatezza, perché non si tratta di soffrire davvero, ma di rendere credibile un’esperienza. In recitazione è uno strumento forte, ma non l’unico possibile."
  },
  {
    "term": "Stato emotivo",
    "category": "Recitazione",
    "def": "Condizione interiore del personaggio in un dato momento.",
    "longDef": "Lo stato emotivo è il livello affettivo e psicologico in cui si trova il personaggio durante la scena. Non è una posa esterna, ma una condizione che influenza voce, corpo, ritmo e sguardo. In recitazione riconoscerlo aiuta a rendere coerente il comportamento del personaggio."
  },
  {
    "term": "Corpo scenico",
    "category": "Recitazione",
    "def": "Uso del corpo come strumento espressivo della recitazione.",
    "longDef": "Il corpo scenico è il modo in cui postura, movimento, tensione, equilibrio e gesto costruiscono la presenza dell’attore. Anche senza parlare, il corpo comunica carattere, energia e intenzione. In recitazione il lavoro corporeo è importante quanto quello vocale."
  },
  {
    "term": "Postura del personaggio",
    "category": "Recitazione",
    "def": "Assetto fisico che esprime identità e stato del personaggio.",
    "longDef": "La postura del personaggio è il modo in cui il corpo si dispone nello spazio: aperto, chiuso, rigido, stanco, nervoso o rilassato. Può dire molto prima ancora delle battute. In recitazione aiuta a differenziare i personaggi e a rendere visibile il loro mondo interiore."
  },
  {
    "term": "Gesto intenzionale",
    "category": "Recitazione",
    "def": "Movimento del corpo che nasce da una precisa volontà scenica.",
    "longDef": "Il gesto intenzionale è un’azione fisica che non avviene per caso, ma ha un significato preciso nella scena. Può rafforzare una battuta, contraddirla o sostituirla. In recitazione un gesto efficace è sempre collegato a un pensiero o a un’emozione reale."
  },
  {
    "term": "Controtempo emotivo",
    "category": "Recitazione",
    "def": "Reazione inattesa rispetto al tono apparentemente previsto della scena.",
    "longDef": "Il controtempo emotivo è una scelta interpretativa che evita la risposta più ovvia e apre una sfumatura più interessante. Per esempio, sorridere in un momento doloroso o parlare piano in una lite può creare complessità. In recitazione è utile per rendere i personaggi meno prevedibili."
  },
  {
    "term": "Reazione",
    "category": "Recitazione",
    "def": "Risposta fisica o emotiva a ciò che accade in scena.",
    "longDef": "La reazione è ciò che il personaggio mostra dopo aver ricevuto una battuta, un gesto o un evento. Spesso è più importante dell’azione iniziale, perché rivela davvero il vissuto del personaggio. In recitazione una reazione sincera dà profondità e verità alla scena."
  },
  {
    "term": "Motivazione interna",
    "category": "Recitazione",
    "def": "Spinta profonda che sostiene il comportamento del personaggio.",
    "longDef": "La motivazione interna è la ragione intima per cui il personaggio agisce, parla o si trattiene. Non sempre è esplicita nel testo, ma deve essere chiara all’attore. In recitazione è il motore nascosto che rende coerente e credibile ogni scelta interpretativa."
  },
  {
    "term": "Verità scenica",
    "category": "Recitazione",
    "def": "Sensazione di autenticità che rende credibile la recitazione.",
    "longDef": "La verità scenica è la qualità per cui una performance appare viva, sincera e non costruita artificialmente. Non significa imitare la realtà in modo banale, ma far credere davvero allo spettatore che quel momento stia accadendo. In recitazione è uno degli obiettivi più importanti."
  },
  {
    "term": "Key light",
    "category": "Fotografia",
    "def": "Luce principale che definisce il soggetto.",
    "longDef": "La key light è la fonte luminosa principale che modella volto, corpo o oggetto in scena. Determina gran parte del carattere visivo dell’immagine, dal contrasto alla direzione della luce. In fotografia è uno degli elementi base per costruire il look di una ripresa."
  },
  {
    "term": "Fill light",
    "category": "Fotografia",
    "def": "Luce di riempimento che attenua le ombre.",
    "longDef": "La fill light serve a schiarire le ombre create dalla luce principale senza annullarle del tutto. Aiuta a controllare il contrasto e a rendere leggibili i dettagli nelle zone scure. In fotografia è utile per bilanciare l’immagine con maggiore precisione."
  },
  {
    "term": "Backlight",
    "category": "Fotografia",
    "def": "Luce posta dietro il soggetto per staccarlo dallo sfondo.",
    "longDef": "La backlight è una luce collocata dietro il soggetto e spesso puntata verso camera o verso il contorno del corpo. Viene usata per creare separazione, profondità e talvolta un effetto più drammatico o elegante. In fotografia è molto utile per dare tridimensionalità."
  },
  {
    "term": "Controluce",
    "category": "Fotografia",
    "def": "Situazione in cui la luce principale arriva da dietro il soggetto.",
    "longDef": "Il controluce si verifica quando la fonte luminosa è dietro il soggetto rispetto alla camera. Può creare silhouette, aloni, atmosfera o forte contrasto, a seconda di come viene gestito. In fotografia è una scelta molto espressiva, ma richiede attenzione all’esposizione."
  },
  {
    "term": "Luce morbida",
    "category": "Fotografia",
    "def": "Luce diffusa con ombre dolci e poco nette.",
    "longDef": "La luce morbida è una luce che avvolge il soggetto e produce ombre delicate, poco marcate. È tipica di fonti diffuse, grandi o filtrate. In fotografia viene spesso usata per ritratti, volti e scene in cui si cerca una resa più naturale o gentile."
  },
  {
    "term": "Luce dura",
    "category": "Fotografia",
    "def": "Luce diretta che crea ombre nette e contrastate.",
    "longDef": "La luce dura è una luce intensa e poco diffusa che genera ombre precise, marcate e separazioni nette. Può dare forza, tensione o crudezza all’immagine. In fotografia è utile quando si vuole un effetto più incisivo e grafico."
  },
  {
    "term": "Diffusione",
    "category": "Fotografia",
    "def": "Ammorbidimento della luce tramite materiali o superfici.",
    "longDef": "La diffusione è il processo con cui la luce viene resa più ampia e morbida attraverso tessuti, pannelli, softbox o altri materiali. Serve a ridurre durezza, contrasto e ombre troppo nette. In fotografia è una tecnica fondamentale per controllare la qualità della luce."
  },
  {
    "term": "Riflettore",
    "category": "Fotografia",
    "def": "Superficie che rimbalza la luce sul soggetto.",
    "longDef": "Il riflettore è uno strumento che devia o restituisce la luce verso il soggetto senza generarla direttamente. Può essere bianco, argento, oro o di altri materiali, a seconda dell’effetto desiderato. In fotografia è molto utile per schiarire, scaldare o riequilibrare la scena."
  },
  {
    "term": "Negativo fill",
    "category": "Fotografia",
    "def": "Tecnica che aumenta il contrasto togliendo luce riflessa.",
    "longDef": "Il negative fill consiste nel ridurre la luce di riempimento usando superfici scure che assorbono la luce invece di rifletterla. In questo modo si accentuano le ombre e si aumenta il contrasto del soggetto. In fotografia è una tecnica raffinata per dare più profondità e volume."
  },
  {
    "term": "Rapporto di contrasto",
    "category": "Fotografia",
    "def": "Differenza tra intensità della luce e delle ombre.",
    "longDef": "Il rapporto di contrasto indica quanto è forte la differenza luminosa tra le zone illuminate e quelle in ombra. Più il rapporto è alto, più l’immagine appare drammatica o incisiva. In fotografia è un parametro importante per controllare atmosfera e leggibilità."
  },
  {
    "term": "Temperatura colore",
    "category": "Fotografia",
    "def": "Caratteristica della luce che la fa apparire più calda o più fredda.",
    "longDef": "La temperatura colore descrive il tono cromatico della luce, misurato in kelvin, e influenza la percezione visiva della scena. Una luce calda tende al giallo-arancio, una fredda al blu. In fotografia è fondamentale per controllare coerenza, atmosfera e resa del colore."
  },
  {
    "term": "Gelatina correttiva",
    "category": "Fotografia",
    "def": "Filtro colorato usato per modificare il tono della luce.",
    "longDef": "La gelatina correttiva è un materiale trasparente colorato che si applica davanti a una fonte luminosa per variarne temperatura o tinta. Può servire a uniformare luci diverse o a creare un effetto stilistico. In fotografia e ripresa è uno strumento molto pratico di controllo."
  },
  {
    "term": "Dominante cromatica",
    "category": "Fotografia",
    "def": "Tendenza dell’immagine verso un certo colore prevalente.",
    "longDef": "La dominante cromatica è la presenza evidente di un colore che altera l’equilibrio neutro dell’immagine, come un eccesso di blu, giallo o verde. Può essere un errore tecnico o una scelta espressiva. In fotografia va riconosciuta e gestita con consapevolezza."
  },
  {
    "term": "Esposimetro",
    "category": "Fotografia",
    "def": "Strumento che misura la luce per aiutare l’esposizione.",
    "longDef": "L’esposimetro è il dispositivo che valuta la quantità di luce presente nella scena e aiuta a impostare correttamente i parametri di ripresa. Può essere interno alla camera o esterno. In fotografia è utile per prendere decisioni tecniche più precise, soprattutto in situazioni complesse."
  },
  {
    "term": "Lettura incidente",
    "category": "Fotografia",
    "def": "Misurazione della luce che arriva sul soggetto.",
    "longDef": "La lettura incidente misura direttamente la luce che colpisce il soggetto, anziché quella riflessa da esso verso la camera. Questo metodo è spesso più affidabile per ottenere un’esposizione neutra e controllata. In fotografia è molto usato nei set più tecnici o professionali."
  },
  {
    "term": "Lettura riflessa",
    "category": "Fotografia",
    "def": "Misurazione della luce riflessa dal soggetto verso la camera.",
    "longDef": "La lettura riflessa valuta la luce così come viene restituita dal soggetto all’obiettivo o all’esposimetro. È il metodo più comune nelle fotocamere. In fotografia è pratico, ma va interpretato bene perché superfici molto chiare o molto scure possono alterare la lettura."
  },
  {
    "term": "Zebra pattern",
    "category": "Fotografia",
    "def": "Indicazione visiva delle zone troppo esposte.",
    "longDef": "Lo zebra pattern è un sistema di aiuto visivo che segnala sul monitor le aree che superano una determinata soglia luminosa. Serve a capire rapidamente dove l’immagine rischia di perdere dettaglio. In fotografia video e ripresa è molto utile per lavorare con precisione."
  },
  {
    "term": "False color exposure",
    "category": "Fotografia",
    "def": "Sistema cromatico per leggere l’esposizione in modo tecnico.",
    "longDef": "Il false color exposure usa colori artificiali per indicare i livelli di esposizione delle diverse parti dell’immagine. Ogni colore rappresenta una fascia tonale precisa. In fotografia e ripresa è uno strumento molto utile per valutare con esattezza luce, pelle e alte luci."
  },
  {
    "term": "Spot metering",
    "category": "Fotografia",
    "def": "Misurazione della luce su una piccola area dell’immagine.",
    "longDef": "Lo spot metering è un tipo di misurazione esposimetrica che si concentra su una zona molto ridotta del quadro. Serve quando si vuole valutare con precisione un volto, un punto luminoso o un dettaglio importante. In fotografia aiuta a prendere decisioni molto controllate."
  },
  {
    "term": "Picture profile",
    "category": "Fotografia",
    "def": "Impostazione che determina contrasto, saturazione e curva tonale.",
    "longDef": "Il picture profile è il set di parametri che definisce il modo in cui la camera registra colore, contrasto e resa generale dell’immagine. Alcuni profili sono neutri, altri più pronti all’uso o più pensati per la postproduzione. In fotografia video incide molto sul risultato finale."
  },
  {
    "term": "Curva tonale",
    "category": "Fotografia",
    "def": "Andamento di luci, ombre e mezzitoni nell’immagine.",
    "longDef": "La curva tonale descrive come i diversi livelli di luminosità vengono distribuiti e riprodotti. Influisce sul contrasto, sulla morbidezza dei passaggi e sulla percezione generale dell’immagine. In fotografia è una base importante del look visivo."
  },
  {
    "term": "Incarnato",
    "category": "Fotografia",
    "def": "Resa cromatica e luminosa della pelle umana.",
    "longDef": "L’incarnato è il modo in cui la pelle viene rappresentata in termini di colore, texture e luce. È una delle aree più delicate dell’immagine, perché lo spettatore riconosce subito una resa poco naturale. In fotografia curare l’incarnato è fondamentale soprattutto nei ritratti e nei primi piani."
  },
  {
    "term": "Catchlight",
    "category": "Fotografia",
    "def": "Piccolo riflesso luminoso visibile negli occhi del soggetto.",
    "longDef": "Il catchlight è il punto di luce che si riflette nell’occhio e lo rende vivo, presente e leggibile. Anche molto piccolo, può cambiare tantissimo l’espressività del volto. In fotografia di ritratto è un dettaglio essenziale per dare vitalità allo sguardo."
  },
  {
    "term": "Practical light",
    "category": "Fotografia",
    "def": "Fonte luminosa visibile in scena, come lampade o abat-jour.",
    "longDef": "Una practical light è una luce che appartiene fisicamente all’ambiente della scena ed è visibile nell’inquadratura. Può essere usata sia come elemento scenografico sia come vera fonte di illuminazione. In fotografia e cinema aiuta a rendere la luce più credibile e integrata nello spazio."
  },
  {
    "term": "Motivated lighting",
    "category": "Fotografia",
    "def": "Illuminazione costruita come se provenisse da una fonte plausibile della scena.",
    "longDef": "La motivated lighting è una strategia in cui la luce viene progettata in modo coerente con fonti visibili o credibili all’interno dell’ambiente. Anche quando è artificiale, deve sembrare “motivata” narrativamente. In fotografia rende il set più realistico e leggibile."
  },
  {
    "term": "Rim light",
    "category": "Fotografia",
    "def": "Luce che disegna un bordo luminoso attorno al soggetto.",
    "longDef": "La rim light colpisce il contorno del soggetto e crea una linea di luce che lo separa dallo sfondo. Può essere molto evidente o molto discreta. In fotografia è utile per aumentare profondità, eleganza e stacco visivo."
  },
  {
    "term": "Light wrap",
    "category": "Fotografia",
    "def": "Sensazione di luce che avvolge il soggetto in modo morbido.",
    "longDef": "Il light wrap è l’effetto per cui la luce sembra girare attorno ai contorni del soggetto, rendendolo più integrato e morbido rispetto all’ambiente. Può essere naturale o costruito in postproduzione e compositing. In fotografia contribuisce a una resa più credibile e meno rigida."
  },
  {
    "term": "Texture della luce",
    "category": "Fotografia",
    "def": "Qualità visiva della luce in rapporto a superfici e materiali.",
    "longDef": "La texture della luce riguarda il modo in cui la luce rivela dettagli, pori, tessuti, superfici e volumi. Una luce morbida o dura cambia molto la percezione della materia. In fotografia controllare questa qualità è importante per dare carattere all’immagine."
  },
  {
    "term": "Falloff",
    "category": "Fotografia",
    "def": "Diminuzione della luce man mano che si allontana dalla fonte.",
    "longDef": "Il falloff è il modo in cui l’intensità della luce cala con la distanza dalla sorgente. Questo principio influenza profondamente il contrasto e la distribuzione luminosa nella scena. In fotografia è utile conoscerlo per modellare i volumi con più consapevolezza."
  },
  {
    "term": "Mood visivo",
    "category": "Fotografia",
    "def": "Atmosfera complessiva costruita da luce, colore e contrasto.",
    "longDef": "Il mood visivo è l’impressione emotiva generale prodotta dall’immagine. Nasce dalla combinazione di luce, colore, contrasto, composizione e resa del soggetto. In fotografia è il risultato finale di molte scelte tecniche che diventano espressive."
  },
  {
    "term": "Distribuzione cinematografica",
    "category": "Distribuzione",
    "def": "Processo con cui un’opera viene portata al pubblico.",
    "longDef": "La distribuzione cinematografica comprende tutte le attività che permettono a un film o video di raggiungere spettatori, sale, festival, piattaforme o altri canali. Non riguarda solo la consegna del prodotto, ma anche strategia, tempi e posizionamento. È una fase decisiva per la vita dell’opera."
  },
  {
    "term": "Uscita in sala",
    "category": "Distribuzione",
    "def": "Distribuzione di un film nelle sale cinematografiche.",
    "longDef": "L’uscita in sala è il momento in cui un’opera viene programmata nei cinema per il pubblico pagante. Può essere ampia o limitata, a seconda del tipo di progetto e della strategia distributiva. In distribuzione è una tappa importante, ma non sempre l’unica o la principale."
  },
  {
    "term": "Distribuzione indipendente",
    "category": "Distribuzione",
    "def": "Diffusione dell’opera senza grandi circuiti industriali tradizionali.",
    "longDef": "La distribuzione indipendente riguarda film e contenuti che trovano la propria strada fuori dai grandi canali dominanti. Può passare per festival, sale selezionate, piattaforme, eventi o proiezioni mirate. È spesso più faticosa, ma offre anche maggiore libertà di posizionamento."
  },
  {
    "term": "Circuitazione festivaliera",
    "category": "Distribuzione",
    "def": "Percorso del film attraverso festival e rassegne.",
    "longDef": "La circuitazione festivaliera è la strategia con cui un’opera viene iscritta e proposta a festival, concorsi e manifestazioni cinematografiche. Non consiste nel mandare il film “ovunque”, ma nel scegliere bene i contesti giusti. In distribuzione può essere fondamentale per visibilità, premi e contatti."
  },
  {
    "term": "Prima mondiale",
    "category": "Distribuzione",
    "def": "Prima proiezione pubblica assoluta dell’opera.",
    "longDef": "La prima mondiale è la prima presentazione pubblica ufficiale di un film davanti a un pubblico. In molti festival ha un forte valore strategico, perché alcuni eventi richiedono o privilegiano opere non ancora mostrate altrove. In distribuzione è un elemento importante del posizionamento iniziale."
  },
  {
    "term": "Prima nazionale",
    "category": "Distribuzione",
    "def": "Prima proiezione pubblica dell’opera in un determinato Paese.",
    "longDef": "La prima nazionale indica la prima volta in cui un’opera viene mostrata ufficialmente in uno specifico territorio nazionale. Anche questa informazione può avere peso nei festival o nella comunicazione promozionale. In distribuzione aiuta a costruire la cronologia pubblica del film."
  },
  {
    "term": "Selezione ufficiale",
    "category": "Distribuzione",
    "def": "Ammissione del film nel programma ufficiale di un festival.",
    "longDef": "La selezione ufficiale certifica che un’opera è stata scelta da un festival o evento per entrare nel suo programma riconosciuto. È un segnale di qualità, visibilità e legittimazione culturale. In distribuzione può diventare un elemento molto forte di promozione."
  },
  {
    "term": "Fuori concorso",
    "category": "Distribuzione",
    "def": "Proiezione ufficiale senza partecipazione alla gara per i premi.",
    "longDef": "Un film fuori concorso viene presentato ufficialmente all’interno di un festival, ma non compete per i riconoscimenti principali. Può comunque ottenere attenzione critica e visibilità. In distribuzione è una forma di presenza che valorizza l’opera anche senza competizione diretta."
  },
  {
    "term": "Rassegna",
    "category": "Distribuzione",
    "def": "Programmazione tematica o selettiva di più opere.",
    "longDef": "La rassegna è un insieme di proiezioni organizzate secondo un tema, un autore, un periodo o un criterio culturale specifico. Può offrire a un film contesti molto qualificati e un pubblico mirato. In distribuzione è uno spazio utile soprattutto per opere d’autore, documentari o corti."
  },
  {
    "term": "Programmazione",
    "category": "Distribuzione",
    "def": "Inserimento del film in un calendario di proiezioni o uscite.",
    "longDef": "La programmazione riguarda il modo e il momento in cui un’opera viene collocata all’interno di sale, eventi, festival o palinsesti. Non è una scelta neutra: giorno, fascia oraria e contesto possono influire molto sulla ricezione. In distribuzione è una parte concreta della strategia."
  },
  {
    "term": "Finestra distributiva",
    "category": "Distribuzione",
    "def": "Periodo o ordine temporale in cui l’opera esce su diversi canali.",
    "longDef": "La finestra distributiva è la sequenza con cui un’opera viene resa disponibile su sala, streaming, tv, festival o altri circuiti. Stabilire bene l’ordine e i tempi può influire sulla visibilità e sul valore percepito del film. In distribuzione è una scelta strategica molto importante."
  },
  {
    "term": "Esclusiva territoriale",
    "category": "Distribuzione",
    "def": "Diritto riservato di diffusione in una specifica area geografica.",
    "longDef": "L’esclusiva territoriale assegna a un soggetto il diritto di distribuire o mostrare un’opera in una determinata zona o Paese. Serve a organizzare meglio la circolazione dei diritti e dei mercati. In distribuzione è un concetto chiave nei rapporti tra produttori, venditori e distributori."
  },
  {
    "term": "Diritti di distribuzione",
    "category": "Distribuzione",
    "def": "Permessi legali per diffondere un’opera su specifici canali o territori.",
    "longDef": "I diritti di distribuzione definiscono chi può mostrare, vendere o rendere disponibile un’opera e in quali modalità. Possono riguardare cinema, tv, streaming, scuole, festival o mercati internazionali. In distribuzione sono il fondamento legale di ogni circolazione del film."
  },
  {
    "term": "Sales agent",
    "category": "Distribuzione",
    "def": "Figura che promuove e vende il film a distributori e mercati.",
    "longDef": "Il sales agent è il soggetto che rappresenta un’opera sul mercato e cerca accordi di distribuzione con territori, piattaforme o partner. Non distribuisce sempre direttamente, ma lavora per aprire opportunità commerciali e professionali. In distribuzione internazionale è una figura centrale."
  },
  {
    "term": "Buyer",
    "category": "Distribuzione",
    "def": "Soggetto che acquista diritti di programmazione o diffusione.",
    "longDef": "Il buyer è chi valuta un’opera per acquistarne i diritti di utilizzo, distribuzione o programmazione su un certo canale o territorio. Può lavorare per tv, piattaforme, sale, compagnie o eventi. In distribuzione rappresenta il lato che seleziona cosa portare al pubblico."
  },
  {
    "term": "Target di pubblico",
    "category": "Distribuzione",
    "def": "Fascia di spettatori a cui l’opera si rivolge principalmente.",
    "longDef": "Il target di pubblico è il gruppo di spettatori più adatto o più interessato all’opera in base a età, gusti, temi e abitudini di visione. Capirlo bene aiuta a promuovere e collocare meglio il film. In distribuzione è una bussola strategica molto utile."
  },
  {
    "term": "Posizionamento",
    "category": "Distribuzione",
    "def": "Identità con cui il film viene presentato al mercato e al pubblico.",
    "longDef": "Il posizionamento è il modo in cui un’opera viene definita e proposta in termini di genere, tono, valore, pubblico e contesto. Non basta dire cos’è un film: bisogna capire dove sta e perché dovrebbe interessare. In distribuzione il posizionamento orienta tutta la comunicazione."
  },
  {
    "term": "Materiali promozionali",
    "category": "Distribuzione",
    "def": "Elementi usati per presentare e promuovere il film.",
    "longDef": "I materiali promozionali comprendono trailer, teaser, locandine, sinossi, still, press kit e altri contenuti utili a far conoscere l’opera. Sono strumenti fondamentali per attirare interesse e comunicare identità. In distribuzione spesso fanno una grande differenza nella prima impressione."
  },
  {
    "term": "Trailer",
    "category": "Distribuzione",
    "def": "Montaggio promozionale che presenta il film al pubblico.",
    "longDef": "Il trailer è un video breve che seleziona e organizza immagini, ritmo e tono dell’opera per generare interesse. Non racconta tutto, ma suggerisce abbastanza da incuriosire. In distribuzione è uno dei materiali promozionali più importanti."
  },
  {
    "term": "Teaser",
    "category": "Distribuzione",
    "def": "Video promozionale molto breve che anticipa l’opera senza mostrarla pienamente.",
    "longDef": "Il teaser è un contenuto ancora più breve e sintetico del trailer, pensato per creare curiosità e attesa. Può puntare più sull’atmosfera che sulle informazioni. In distribuzione è utile nelle prime fasi della comunicazione."
  },
  {
    "term": "Locandina",
    "category": "Distribuzione",
    "def": "Immagine promozionale principale del film.",
    "longDef": "La locandina è uno degli strumenti visivi centrali con cui un’opera viene presentata al pubblico. Deve sintetizzare tono, identità e attrattiva del film in un’immagine forte e riconoscibile. In distribuzione è un elemento fondamentale del packaging comunicativo."
  },
  {
    "term": "Press kit",
    "category": "Distribuzione",
    "def": "Raccolta di materiali informativi destinati a stampa e operatori.",
    "longDef": "Il press kit contiene sinossi, note di regia, cast, crew, immagini, crediti e materiali utili per giornalisti, festival o distributori. Serve a presentare l’opera in modo ordinato e professionale. In distribuzione è uno strumento molto utile per la comunicazione istituzionale."
  },
  {
    "term": "Sinossi festivaliera",
    "category": "Distribuzione",
    "def": "Testo sintetico pensato per cataloghi, schede e selezioni.",
    "longDef": "La sinossi festivaliera è una versione breve e mirata della presentazione del film, pensata per chi deve leggere molte opere in poco tempo. Deve essere chiara, evocativa e precisa. In distribuzione festivaliera è un elemento molto importante della candidatura."
  },
  {
    "term": "Accredito industry",
    "category": "Distribuzione",
    "def": "Accesso professionale riservato agli operatori del settore.",
    "longDef": "L’accredito industry consente a professionisti, produttori, distributori, stampa o altri operatori di partecipare a eventi e mercati con accessi specifici. Favorisce visioni, incontri e networking. In distribuzione è spesso uno strumento concreto per aprire relazioni professionali."
  },
  {
    "term": "Q&A",
    "category": "Distribuzione",
    "def": "Incontro pubblico di domande e risposte dopo la proiezione.",
    "longDef": "Il Q&A è il momento in cui autori, registi o membri del cast dialogano con il pubblico dopo la visione del film. Può rafforzare ricezione, interesse e impatto dell’opera. In distribuzione è molto utile soprattutto nei festival e nelle proiezioni evento."
  },
  {
    "term": "Passaparola",
    "category": "Distribuzione",
    "def": "Diffusione spontanea dell’interesse verso il film tra gli spettatori.",
    "longDef": "Il passaparola è il modo in cui il pubblico consiglia o discute un’opera generando attenzione organica. Non si compra direttamente, ma si può favorire con qualità, timing e contesto giusto. In distribuzione è spesso uno dei fattori più efficaci e autentici."
  },
  {
    "term": "Tenitura",
    "category": "Distribuzione",
    "def": "Durata di permanenza del film in programmazione.",
    "longDef": "La tenitura indica per quanto tempo un’opera resta visibile in sala o in un certo circuito di programmazione. Può dipendere da risultati, interesse del pubblico o accordi distributivi. In distribuzione è un indicatore importante della tenuta reale del film."
  },
  {
    "term": "Tour promozionale",
    "category": "Distribuzione",
    "def": "Serie di presentazioni o proiezioni accompagnate da attività di lancio.",
    "longDef": "Il tour promozionale è un percorso di eventi, incontri e tappe che accompagna l’uscita del film in più luoghi o contesti. Può coinvolgere regista, cast o partner dell’opera. In distribuzione aiuta a costruire visibilità e relazione diretta col pubblico."
  },
  {
    "term": "Piattaforma streaming",
    "category": "Distribuzione",
    "def": "Servizio online che rende l’opera disponibile in visione digitale.",
    "longDef": "La piattaforma streaming è uno dei canali principali attraverso cui un’opera può raggiungere spettatori fuori dalla sala. Può trattarsi di grandi operatori o di servizi più piccoli e specializzati. In distribuzione rappresenta ormai una delle finestre più rilevanti."
  },
  {
    "term": "Release strategy",
    "category": "Distribuzione",
    "def": "Piano con cui si decide come, dove e quando lanciare l’opera.",
    "longDef": "La release strategy è la strategia complessiva che stabilisce tempi, canali, materiali promozionali e target del lancio di un film. Tiene conto di festival, sale, streaming, stampa e pubblico potenziale. In distribuzione è il cuore della pianificazione del percorso dell’opera."
  },
  {
    "term": "Analisi del personaggio",
    "category": "Recitazione",
    "def": "Studio approfondito delle caratteristiche interiori ed esteriori del ruolo.",
    "longDef": "L’analisi del personaggio è il lavoro con cui l’attore ricostruisce identità, passato, desideri, paure e comportamento del ruolo. Serve a rendere ogni scelta più coerente e meno superficiale. In recitazione è uno dei passaggi fondamentali della preparazione."
  },
  {
    "term": "Circostanze date",
    "category": "Recitazione",
    "def": "Insieme delle informazioni che il testo fornisce sulla situazione scenica.",
    "longDef": "Le circostanze date comprendono tutto ciò che il copione stabilisce: luogo, tempo, relazioni, eventi precedenti e condizioni del personaggio. Sono il terreno concreto su cui l’attore costruisce la scena. In recitazione aiutano a evitare interpretazioni astratte o scollegate dal testo."
  },
  {
    "term": "Super-obiettivo",
    "category": "Recitazione",
    "def": "Meta profonda che guida il personaggio lungo tutta l’opera.",
    "longDef": "Il super-obiettivo è il desiderio centrale che orienta il personaggio nell’intero arco del racconto. Non riguarda solo una singola scena, ma la spinta generale che tiene insieme le sue azioni. In recitazione è utile per dare continuità al lavoro interpretativo."
  },
  {
    "term": "Preparazione del ruolo",
    "category": "Recitazione",
    "def": "Fase di studio e costruzione del personaggio prima della scena.",
    "longDef": "La preparazione del ruolo comprende lettura, analisi, prove, ricerca e lavoro su corpo e voce. È il processo attraverso cui l’attore rende abitabile il personaggio prima di portarlo in scena o davanti alla camera. In recitazione una buona preparazione rende più solida e libera la performance."
  },
  {
    "term": "Lettura a tavolino",
    "category": "Recitazione",
    "def": "Prima lettura condivisa del testo con regista e cast.",
    "longDef": "La lettura a tavolino è il momento in cui il copione viene letto insieme, spesso prima delle prove vere e proprie. Serve a chiarire tono, intenzioni, relazioni e struttura della scena. In recitazione è utile perché crea una base comune tra interpreti e regia."
  },
  {
    "term": "Self-tape",
    "category": "Recitazione",
    "def": "Provino registrato autonomamente in video dall’attore.",
    "longDef": "Il self-tape è un’audizione realizzata dall’attore in autonomia, di solito seguendo indicazioni ricevute da casting o produzione. Richiede precisione, sintesi e capacità di rendere la scena efficace anche in un set minimale. In recitazione è diventato uno strumento molto importante nel lavoro professionale contemporaneo."
  },
  {
    "term": "Callback",
    "category": "Recitazione",
    "def": "Seconda audizione richiesta dopo una prima selezione.",
    "longDef": "Il callback è una fase successiva del casting in cui l’attore viene richiamato per approfondire la prova. Può servire a testare un’altra scena, verificare la chimica con altri interpreti o valutare meglio la compatibilità col ruolo. In recitazione è un momento decisivo del processo di selezione."
  },
  {
    "term": "Immedesimazione",
    "category": "Recitazione",
    "def": "Capacità di entrare nel punto di vista del personaggio.",
    "longDef": "L’immedesimazione è il processo con cui l’attore prova a vivere dall’interno emozioni, logiche e percezioni del ruolo. Non significa perdere sé stesso, ma costruire un accesso credibile alla verità del personaggio. In recitazione è una via importante per rendere la performance autentica."
  },
  {
    "term": "Distanziamento",
    "category": "Recitazione",
    "def": "Scelta interpretativa che mantiene una certa distanza critica dal personaggio.",
    "longDef": "Il distanziamento è un approccio in cui l’attore non si fonde completamente con il ruolo, ma ne mostra anche la costruzione o il significato. Può essere usato per rendere la recitazione più lucida, ironica o riflessiva. In recitazione è spesso associato a linguaggi meno naturalistici."
  },
  {
    "term": "Impulso scenico",
    "category": "Recitazione",
    "def": "Spinta immediata che genera una reazione o un’azione in scena.",
    "longDef": "L’impulso scenico è il momento interno che precede la parola o il gesto, come una scintilla che mette in moto l’azione. Lavorarci aiuta l’attore a evitare movimenti meccanici e a rendere la scena più viva. In recitazione è legato alla verità del momento presente."
  },
  {
    "term": "Centro del personaggio",
    "category": "Recitazione",
    "def": "Punto fisico o simbolico da cui parte l’energia del ruolo.",
    "longDef": "Il centro del personaggio è un riferimento corporeo o immaginativo che aiuta a definire come il ruolo occupa lo spazio e si muove. Può trovarsi nel petto, nella testa, nel bacino o in un’idea più astratta. In recitazione è utile per differenziare i personaggi anche sul piano fisico."
  },
  {
    "term": "Energia scenica",
    "category": "Recitazione",
    "def": "Qualità e intensità con cui l’attore abita la scena.",
    "longDef": "L’energia scenica è il livello di presenza, vitalità e tensione con cui un attore sostiene il proprio lavoro davanti al pubblico o alla camera. Non coincide con l’agitazione, ma con la capacità di restare pienamente attivo e leggibile. In recitazione è ciò che rende una performance viva."
  },
  {
    "term": "Neutralità corporea",
    "category": "Recitazione",
    "def": "Stato fisico essenziale libero da abitudini espressive superflue.",
    "longDef": "La neutralità corporea è una condizione di base in cui il corpo non comunica ancora un carattere preciso, ma resta disponibile e aperto. Serve a togliere automatismi personali e a costruire il personaggio da zero. In recitazione è un passaggio molto utile nel training."
  },
  {
    "term": "Maschera neutra",
    "category": "Recitazione",
    "def": "Strumento di training usato per lavorare su presenza e corpo essenziale.",
    "longDef": "La maschera neutra è una maschera espressivamente spoglia che obbliga l’attore a lavorare su postura, respiro, gesto e attenzione. Eliminando il volto, mette in evidenza il corpo e la qualità del movimento. In recitazione è un esercizio importante di precisione e consapevolezza."
  },
  {
    "term": "Asse del corpo",
    "category": "Recitazione",
    "def": "Allineamento fisico che sostiene equilibrio e controllo scenico.",
    "longDef": "L’asse del corpo è la linea di equilibrio che attraversa il corpo e ne organizza stabilità e postura. Quando è chiaro, il movimento appare più sicuro, leggibile e coerente. In recitazione è fondamentale per lavorare con presenza e controllo fisico."
  },
  {
    "term": "Sguardo scenico",
    "category": "Recitazione",
    "def": "Uso consapevole dello sguardo come strumento di relazione e significato.",
    "longDef": "Lo sguardo scenico è il modo in cui l’attore indirizza attenzione, intenzione ed energia attraverso gli occhi. Può creare legame, distanza, minaccia, ascolto o desiderio. In recitazione lo sguardo è spesso decisivo quanto la battuta."
  },
  {
    "term": "Relazione scenica",
    "category": "Recitazione",
    "def": "Dinamica viva tra due o più personaggi all’interno della scena.",
    "longDef": "La relazione scenica è il rapporto attivo che si crea tra i personaggi durante una sequenza. Non dipende solo dal testo, ma da ascolto, reazioni, ritmo e tensione reciproca. In recitazione è uno degli elementi che danno profondità e verità alla scena."
  },
  {
    "term": "Sostituzione emotiva",
    "category": "Recitazione",
    "def": "Tecnica che collega la scena a un riferimento emotivo personale equivalente.",
    "longDef": "La sostituzione emotiva consiste nell’associare una situazione del personaggio a un’esperienza o immagine personale che ne attivi la verità interiore. Non serve a copiare la propria vita, ma a trovare un accesso autentico all’emozione. In recitazione è una tecnica utile se usata con misura e intelligenza."
  },
  {
    "term": "Training attoriale",
    "category": "Recitazione",
    "def": "Insieme di esercizi che sviluppano strumenti fisici, vocali ed emotivi dell’attore.",
    "longDef": "Il training attoriale è il lavoro continuativo con cui un interprete affina corpo, voce, ascolto, concentrazione e presenza scenica. Può includere improvvisazione, movimento, respirazione, dizione e studio del testo. In recitazione è essenziale per mantenere disponibilità e precisione."
  },
  {
    "term": "Entrare nel personaggio",
    "category": "Recitazione",
    "def": "Passaggio con cui l’attore assume progressivamente identità e logica del ruolo.",
    "longDef": "Entrare nel personaggio significa trovare il punto in cui voce, postura, intenzione e immaginazione cominciano a funzionare come un’unità coerente. Non è un gesto magico, ma un processo di attivazione. In recitazione rappresenta il momento in cui il ruolo smette di essere esterno e diventa vivo."
  },
  {
    "term": "High key",
    "category": "Fotografia",
    "def": "Schema visivo molto luminoso con contrasto ridotto.",
    "longDef": "L’high key è una resa fotografica chiara e diffusa, con ombre leggere e immagine generalmente morbida. Viene spesso usata in scene eleganti, pubblicitarie o dal tono leggero. In fotografia comunica pulizia, apertura e luminosità."
  },
  {
    "term": "Low key",
    "category": "Fotografia",
    "def": "Schema visivo scuro e contrastato con forti zone d’ombra.",
    "longDef": "Il low key è un’impostazione in cui le ombre prevalgono e la luce viene dosata in modo selettivo. Produce immagini più drammatiche, misteriose o intense. In fotografia è molto usato quando si cerca tensione, profondità o atmosfera."
  },
  {
    "term": "Chiaroscuro",
    "category": "Fotografia",
    "def": "Contrasto espressivo tra luce e ombra nella composizione visiva.",
    "longDef": "Il chiaroscuro è l’uso intenzionale della differenza tra zone illuminate e zone scure per modellare spazio, volto e volume. Non è solo un effetto estetico, ma anche un modo per dare senso e drammaticità all’immagine. In fotografia è uno dei principi più importanti della costruzione visiva."
  },
  {
    "term": "Silhouette",
    "category": "Fotografia",
    "def": "Figura scura ritagliata contro uno sfondo più luminoso.",
    "longDef": "La silhouette si ottiene quando il soggetto non è esposto per mostrare dettaglio interno, ma appare come forma nera o molto scura. È una soluzione forte e sintetica, utile per creare immagini evocative o iconiche. In fotografia funziona bene soprattutto con sfondi molto chiari o controluce marcati."
  },
  {
    "term": "Flare",
    "category": "Fotografia",
    "def": "Riflesso o alone prodotto dalla luce che colpisce direttamente l’obiettivo.",
    "longDef": "Il flare è un effetto ottico che compare quando una fonte luminosa entra direttamente o quasi direttamente nell’ottica. Può generare aloni, velature o riflessi interni. In fotografia può essere un difetto da controllare oppure una scelta estetica consapevole."
  },
  {
    "term": "Golden hour",
    "category": "Fotografia",
    "def": "Momento di luce calda e morbida subito dopo l’alba o prima del tramonto.",
    "longDef": "La golden hour è la fascia oraria in cui il sole è basso e produce una luce dorata, morbida e molto gradevole. È ideale per ritratti, paesaggi e scene dal tono poetico o naturale. In fotografia è uno dei momenti più amati per la qualità della luce."
  },
  {
    "term": "Blue hour",
    "category": "Fotografia",
    "def": "Momento crepuscolare in cui la luce ambientale assume tonalità bluastre.",
    "longDef": "La blue hour si colloca poco prima dell’alba o subito dopo il tramonto, quando il cielo conserva luminosità ma il sole non è più visibile. Produce un’atmosfera fredda, sospesa e molto cinematografica. In fotografia è perfetta per città, esterni e immagini contemplative."
  },
  {
    "term": "Luce ambientale",
    "category": "Fotografia",
    "def": "Luce generale presente nello spazio prima di interventi aggiuntivi.",
    "longDef": "La luce ambientale è l’illuminazione complessiva già esistente in un luogo, naturale o artificiale. Costituisce la base da cui partire per valutare interventi correttivi o stilistici. In fotografia è importante perché definisce il tono iniziale della scena."
  },
  {
    "term": "Luce disponibile",
    "category": "Fotografia",
    "def": "Luce già presente sul posto, usata senza grandi modifiche esterne.",
    "longDef": "La luce disponibile è quella che si sceglie di sfruttare così com’è, senza costruire un impianto complesso di illuminazione. Può richiedere adattamento tecnico e sensibilità nella scelta del punto di ripresa. In fotografia è spesso associata a lavori più naturali, documentari o veloci."
  },
  {
    "term": "Top light",
    "category": "Fotografia",
    "def": "Luce che arriva dall’alto sul soggetto.",
    "longDef": "La top light è una sorgente luminosa posta sopra il soggetto, verticale o quasi. Può dare volume, autorità o anche un effetto severo, a seconda di intensità e diffusione. In fotografia va controllata bene perché può accentuare ombre su occhi e lineamenti."
  },
  {
    "term": "Side light",
    "category": "Fotografia",
    "def": "Luce laterale che scolpisce il volume del soggetto.",
    "longDef": "La side light arriva di lato rispetto alla camera e mette in evidenza rilievi, texture e tridimensionalità. È molto efficace per dare profondità a volti, corpi e oggetti. In fotografia è una luce molto espressiva e strutturante."
  },
  {
    "term": "Underlight",
    "category": "Fotografia",
    "def": "Luce proveniente dal basso verso l’alto.",
    "longDef": "L’underlight è una luce collocata sotto il soggetto, una posizione meno naturale rispetto ad altre fonti. Può creare effetti inquietanti, stranianti o teatrali. In fotografia è usata soprattutto per risultati stilizzati o fortemente drammatici."
  },
  {
    "term": "Gobo",
    "category": "Fotografia",
    "def": "Accessorio che modella la luce attraverso sagome o aperture controllate.",
    "longDef": "Il gobo è un elemento posto davanti a una fonte luminosa per modificarne forma, direzione o pattern. Può servire a simulare finestre, fogliame o altri effetti di luce tagliata. In fotografia è molto utile per arricchire la scena con disegni luminosi più articolati."
  },
  {
    "term": "Cucoloris",
    "category": "Fotografia",
    "def": "Schermo sagomato usato per creare ombre irregolari e naturali.",
    "longDef": "Il cucoloris è un pannello traforato o irregolare che spezza la luce creando pattern complessi e realistici. Viene spesso usato per simulare ombre di rami, tende o elementi ambientali. In fotografia aiuta a dare maggiore ricchezza e naturalezza alla luce."
  },
  {
    "term": "Bandiera",
    "category": "Fotografia",
    "def": "Pannello opaco usato per bloccare o contenere la luce.",
    "longDef": "La bandiera serve a interrompere, sagomare o limitare il passaggio della luce su una parte della scena. È uno strumento semplice ma molto importante per controllare precisione e contrasto. In fotografia aiuta a togliere luce dove non deve arrivare."
  },
  {
    "term": "Softbox",
    "category": "Fotografia",
    "def": "Accessorio diffusore che rende la luce più ampia e morbida.",
    "longDef": "Il softbox è una struttura che si applica a una fonte luminosa per ammorbidirne la resa e controllarne la diffusione. Produce ombre più dolci e una luce più uniforme. In fotografia è molto usato nei ritratti e nelle riprese controllate."
  },
  {
    "term": "Fresnel",
    "category": "Fotografia",
    "def": "Faro con lente che permette di concentrare o allargare la luce.",
    "longDef": "Il Fresnel è una fonte luminosa dotata di lente frontale che consente di regolare il fascio da più stretto a più ampio. Offre una luce controllabile e molto precisa. In fotografia e cinema è uno strumento classico dell’illuminazione professionale."
  },
  {
    "term": "Haze",
    "category": "Fotografia",
    "def": "Nebbia leggera usata per rendere visibili i fasci di luce nello spazio.",
    "longDef": "L’haze è una sospensione controllata di particelle leggere nell’aria che aiuta a visualizzare i raggi luminosi. Non serve solo a “fare atmosfera”, ma anche a dare corpo e profondità alla luce. In fotografia può rendere la scena più materica e cinematografica."
  },
  {
    "term": "Volumetria della luce",
    "category": "Fotografia",
    "def": "Percezione tridimensionale della luce all’interno dello spazio.",
    "longDef": "La volumetria della luce è l’effetto per cui la luce non si limita a illuminare le superfici, ma appare presente anche nell’aria e nello spazio. Dipende da direzione, particelle, contrasto e composizione. In fotografia rafforza molto il senso di profondità e atmosfera."
  },
  {
    "term": "Riflesso speculare",
    "category": "Fotografia",
    "def": "Punto di luce brillante riflesso su una superficie lucida.",
    "longDef": "Il riflesso speculare è il riflesso diretto e intenso di una fonte luminosa su materiali lucidi come pelle, vetro, metallo o acqua. Può valorizzare texture e volume oppure diventare invasivo se non controllato. In fotografia è un elemento importante della resa materica."
  },
  {
    "term": "Campagna di lancio",
    "category": "Distribuzione",
    "def": "Insieme coordinato di azioni promozionali che accompagnano l’uscita del film.",
    "longDef": "La campagna di lancio comprende materiali, uscite stampa, eventi, social, trailer e attività promozionali pensate per far arrivare l’opera al pubblico nel modo più efficace. Non riguarda solo “fare pubblicità”, ma costruire attenzione nel momento giusto. In distribuzione è una parte strategica fondamentale."
  },
  {
    "term": "Ufficio stampa",
    "category": "Distribuzione",
    "def": "Struttura o figura che cura i rapporti con giornalisti e media.",
    "longDef": "L’ufficio stampa si occupa di comunicati, interviste, press kit, anteprime e contatti con testate e operatori dell’informazione. Il suo compito è far parlare del film in modo coerente e visibile. In distribuzione è decisivo per dare all’opera una presenza pubblica più forte."
  },
  {
    "term": "Screening stampa",
    "category": "Distribuzione",
    "def": "Proiezione riservata a giornalisti e critici prima o durante l’uscita.",
    "longDef": "Lo screening stampa è una visione dedicata ai professionisti dell’informazione, pensata per favorire recensioni, articoli e copertura mediatica. Può influire molto sul modo in cui il film viene recepito all’esterno. In distribuzione è una tappa importante della comunicazione."
  },
  {
    "term": "Screening mercato",
    "category": "Distribuzione",
    "def": "Proiezione destinata a buyer, distributori e operatori del settore.",
    "longDef": "Lo screening mercato è una proiezione pensata non tanto per il pubblico generico quanto per chi valuta l’opera in chiave professionale o commerciale. Serve a generare interesse, trattative o nuovi contatti. In distribuzione è molto utile nei mercati e nei festival industry."
  },
  {
    "term": "Vendite internazionali",
    "category": "Distribuzione",
    "def": "Attività di cessione del film a territori esteri o partner stranieri.",
    "longDef": "Le vendite internazionali riguardano la possibilità di far circolare l’opera fuori dal proprio Paese attraverso accordi con distributori, piattaforme o agenti esteri. Richiedono materiali adeguati e un buon posizionamento del film. In distribuzione sono una leva importante per ampliare la vita del progetto."
  },
  {
    "term": "Pre-vendita dei diritti",
    "category": "Distribuzione",
    "def": "Cessione anticipata di diritti prima dell’uscita o del completamento dell’opera.",
    "longDef": "La pre-vendita dei diritti avviene quando un soggetto acquista in anticipo la possibilità di distribuire o programmare il film. Può aiutare a finanziare o rafforzare il progetto ancora prima della sua piena uscita. In distribuzione è uno strumento importante soprattutto nei contesti più strutturati."
  },
  {
    "term": "Minimo garantito",
    "category": "Distribuzione",
    "def": "Somma anticipata riconosciuta al produttore in cambio dei diritti di sfruttamento.",
    "longDef": "Il minimo garantito è un importo che il distributore o il buyer versa in anticipo, garantendo un valore minimo all’operazione. Rappresenta una forma di impegno concreto sul potenziale dell’opera. In distribuzione è un indicatore importante della fiducia commerciale nel film."
  },
  {
    "term": "Deliverables",
    "category": "Distribuzione",
    "def": "Materiali tecnici e documentali richiesti per distribuire correttamente l’opera.",
    "longDef": "I deliverables comprendono file master, sottotitoli, materiali grafici, crediti, documenti legali, cue sheet e altri elementi necessari alla consegna professionale del film. Senza di essi la distribuzione può rallentarsi o bloccarsi. In distribuzione rappresentano il pacchetto operativo indispensabile."
  },
  {
    "term": "DCP",
    "category": "Distribuzione",
    "def": "Formato digitale standard per la proiezione cinematografica in sala.",
    "longDef": "Il DCP, Digital Cinema Package, è il contenitore tecnico con cui i film vengono forniti ai cinema digitali per la proiezione. Deve rispettare standard precisi per qualità e compatibilità. In distribuzione in sala è uno dei formati più importanti."
  },
  {
    "term": "Sottotitolazione",
    "category": "Distribuzione",
    "def": "Inserimento o preparazione dei sottotitoli per rendere il film accessibile in altre lingue.",
    "longDef": "La sottotitolazione permette a un’opera di viaggiare verso pubblici diversi senza alterarne la voce originale. Richiede precisione linguistica, sintesi e rispetto del ritmo del parlato. In distribuzione è essenziale per festival, mercati internazionali e piattaforme."
  },
  {
    "term": "Doppiaggio",
    "category": "Distribuzione",
    "def": "Sostituzione delle voci originali con una versione in un’altra lingua.",
    "longDef": "Il doppiaggio consiste nella registrazione di nuove voci sincronizzate con il movimento labiale e l’interpretazione visiva del film. È una pratica importante in certi mercati o canali distributivi. In distribuzione amplia l’accessibilità dell’opera ma richiede investimento e cura."
  },
  {
    "term": "Versione internazionale",
    "category": "Distribuzione",
    "def": "Versione del film preparata per circolazione e vendita all’estero.",
    "longDef": "La versione internazionale è un asset pronto per l’export, spesso privo di testi impressi o con elementi adattabili per altri mercati. Serve a facilitare vendite, festival e consegne internazionali. In distribuzione è molto utile per rendere il film più flessibile."
  },
  {
    "term": "Metadata di piattaforma",
    "category": "Distribuzione",
    "def": "Informazioni descrittive e tecniche richieste dai servizi digitali per pubblicare l’opera.",
    "longDef": "I metadata di piattaforma comprendono titolo, logline, sinossi, tag, cast, durata, genere, immagini e dati tecnici. Servono a classificare correttamente il film e a renderlo trovabile dagli utenti. In distribuzione digitale sono un elemento operativo essenziale."
  },
  {
    "term": "Geo-blocking",
    "category": "Distribuzione",
    "def": "Limitazione dell’accesso al film in base al territorio geografico dell’utente.",
    "longDef": "Il geo-blocking impedisce o consente la visione dell’opera solo in specifiche aree del mondo. È legato ai diritti territoriali e alla gestione delle finestre distributive. In distribuzione digitale è uno strumento molto comune di controllo."
  },
  {
    "term": "SVOD",
    "category": "Distribuzione",
    "def": "Modello di streaming basato su abbonamento periodico.",
    "longDef": "SVOD significa Subscription Video On Demand e indica i servizi in cui l’utente paga un abbonamento per accedere a un catalogo di contenuti. È uno dei modelli più diffusi nel mercato attuale. In distribuzione rappresenta una finestra molto rilevante per molti progetti."
  },
  {
    "term": "TVOD",
    "category": "Distribuzione",
    "def": "Modello di fruizione in cui si paga per noleggiare o acquistare il singolo contenuto.",
    "longDef": "TVOD significa Transactional Video On Demand e riguarda piattaforme in cui ogni titolo viene acquistato o noleggiato separatamente. È una formula diversa dall’abbonamento, più legata al singolo evento di visione. In distribuzione può essere utile per titoli con pubblico motivato o nicchie specifiche."
  },
  {
    "term": "AVOD",
    "category": "Distribuzione",
    "def": "Modello di streaming finanziato dalla pubblicità.",
    "longDef": "AVOD significa Advertising Video On Demand e indica contenuti accessibili gratuitamente o quasi, sostenuti dagli annunci pubblicitari. In questo modello la monetizzazione deriva più dal volume di visualizzazioni che dal pagamento diretto del pubblico. In distribuzione digitale è una formula sempre più presente."
  },
  {
    "term": "Day-and-date",
    "category": "Distribuzione",
    "def": "Uscita simultanea dell’opera su più canali o territori nello stesso giorno.",
    "longDef": "Il day-and-date è una strategia distributiva in cui il film esce contemporaneamente, per esempio in sala e online, oppure in più mercati nello stesso momento. Può rafforzare l’impatto del lancio e ridurre dispersioni temporali. In distribuzione è una scelta molto precisa, non sempre adatta a ogni progetto."
  },
  {
    "term": "Revenue share",
    "category": "Distribuzione",
    "def": "Modello di ripartizione dei ricavi tra i soggetti coinvolti.",
    "longDef": "Il revenue share è un accordo in cui gli incassi o i ricavi vengono divisi secondo percentuali stabilite tra produttore, distributore, piattaforma o altri partner. È frequente in contesti digitali o indipendenti. In distribuzione definisce concretamente come il valore economico dell’opera viene condiviso."
  },
  {
    "term": "Box office",
    "category": "Distribuzione",
    "def": "Incasso generato dalla vendita dei biglietti al cinema.",
    "longDef": "Il box office misura il risultato economico ottenuto da un film nelle sale attraverso gli ingressi paganti. È uno degli indicatori più visibili del rendimento commerciale di un’opera, anche se non ne esaurisce il valore complessivo. In distribuzione è spesso il dato più osservato nelle uscite theatrical."
  }
]
    .map(item => ({
      ...item,
      term: String(item.term || "").trim(),
      category: String(item.category || "").trim(),
      def: String(item.def || "").trim(),
      longDef: String(item.longDef || item.def || "").trim(),
    }))
    .sort((a, b) => a.term.localeCompare(b.term, "it", { sensitivity: "base" }));

  const CATEGORY_ORDER = ["Audio", "Distribuzione", "Fotografia", "Montaggio", "Produzione", "Recitazione", "Regia", "Sceneggiatura", "Video"];
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const state = {
    query: "",
    letter: "",
    category: "all",
  };

  injectStyles();
  setupLayout();
  setupDialog();
  renderCategories();
  renderAlphabet();
  renderResults();

  searchEl.addEventListener("input", () => {
    state.query = searchEl.value.trim();
    renderResults();
  });

  function setupLayout() {
    const alphabetCard = alphaEl.closest(".card");
    const resultsCard = resultsEl.closest(".card");
    if (!alphabetCard || !resultsCard) return;

    const categoriesCard = document.createElement("div");
    categoriesCard.className = "card";
    categoriesCard.innerHTML = `
      <div class="dictToolsHead">
        <div>
          <h3 class="dictSectionTitle">Categorie</h3>
          
        </div>
        <button id="dictClearFilters" class="chip chip--button dictClearBtn" type="button">Azzera filtri</button>
      </div>
      <div id="dictCategories" class="alphabet" aria-label="Categorie del dizionario"></div>
      <div id="dictMeta" class="dictMeta" aria-live="polite"></div>
    `;

    panelEl.insertBefore(categoriesCard, alphabetCard);

    alphabetCard.insertAdjacentHTML(
      "afterbegin",
      `<div class="dictSectionHead"><div><h3 class="dictSectionTitle">Indice alfabetico</h3></div></div>`
    );

    resultsCard.insertAdjacentHTML(
      "afterbegin",
      `<div class="dictSectionHead"><div><h3 class="dictSectionTitle">Voci del dizionario</h3></div><div id="dictResultsSummary" class="dictResultsSummary" aria-live="polite"></div></div>`
    );

    document.getElementById("dictClearFilters")?.addEventListener("click", clearFilters);
  }

  function setupDialog() {
    if (document.getElementById("dictDialog")) return;

    const dialog = document.createElement("dialog");
    dialog.id = "dictDialog";
    dialog.className = "dialog dictDialog";
    dialog.innerHTML = `
      <form method="dialog" class="dialog__form dictDialog__form">
        <div class="dictDialog__header">
          <div class="dictDialog__headerText">
            <div id="dictDialogCategory" class="dictDialog__category"></div>
            <h3 id="dictDialogTitle" class="dictDialog__title"></h3>
          </div>
          <button class="chip chip--button" id="dictDialogCloseTop" type="button">Chiudi</button>
        </div>
        <div class="dictDialog__body">
          <div class="dictDialog__shortWrap">
            <div class="dictDialog__label">Definizione breve</div>
            <div id="dictDialogShort" class="dictDialog__short"></div>
          </div>
          <div class="dictDialog__longWrap">
            <div class="dictDialog__label">Definizione lunga</div>
            <div id="dictDialogLong" class="dictDialog__long"></div>
          </div>
        </div>
      </form>
    `;
    document.body.appendChild(dialog);

    const closeDialog = () => {
      if (dialog.open) dialog.close();
    };

    dialog.addEventListener("click", (event) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (!isInDialog) {
        closeDialog();
      }
    });

    dialog.querySelector("#dictDialogCloseTop")?.addEventListener("click", closeDialog);
  }

  function injectStyles() {
    if (document.getElementById("sdacDictionaryEnhancements")) return;
    const style = document.createElement("style");
    style.id = "sdacDictionaryEnhancements";
    style.textContent = `
      .dictToolsHead{
        display:flex;
        justify-content:space-between;
        align-items:flex-start;
        gap:12px;
        flex-wrap:wrap;
        margin-bottom:12px;
      }
      .dictSectionHead{
        display:flex;
        justify-content:space-between;
        align-items:flex-start;
        gap:12px;
        flex-wrap:wrap;
        margin-bottom:12px;
      }
      .dictSectionTitle{
        margin:0 0 6px;
        font-size:16px;
      }
      .dictSectionText{
        margin:0;
        color: var(--muted);
        line-height:1.45;
        font-size:14px;
      }
      .dictMeta{
        margin-top:12px;
        color: var(--muted);
        line-height:1.45;
        font-size:14px;
      }
      .dictResultsSummary{
        color: var(--muted);
        line-height:1.45;
        font-size:14px;
        text-align:right;
      }
      .dictClearBtn{
        white-space:nowrap;
      }
      .alphaBtn.is-active{
        border-color: rgba(179,18,23,.65);
        background: rgba(179,18,23,.16);
        box-shadow: 0 0 0 3px rgba(179,18,23,.10);
      }
      .alphaBtn.is-disabled{
        opacity:.45;
        cursor:not-allowed;
      }
      .dictItem{
        width:100%;
        border:1px solid var(--stroke);
        background: rgba(11,11,13,.48);
        border-radius: var(--r);
        padding: 12px;
        color: var(--text);
        text-align:left;
      }
      button.dictItem{
        appearance:none;
        cursor:pointer;
        transition: transform .08s ease, border-color .15s ease, background .15s ease, box-shadow .15s ease;
      }
      button.dictItem:hover{
        transform: translateY(-1px);
        border-color: rgba(179,18,23,.35);
        box-shadow: 0 0 0 2px rgba(179,18,23,.10) inset;
      }
      button.dictItem:focus-visible{
        outline:none;
        border-color: rgba(179,18,23,.60);
        box-shadow: 0 0 0 3px rgba(179,18,23,.16);
      }
      .dictItem__meta{
        display:flex;
        align-items:center;
        gap:8px;
        flex-wrap:wrap;
        margin-bottom:8px;
      }
      .dictTag{
        display:inline-flex;
        align-items:center;
        border:1px solid rgba(179,18,23,.28);
        background: rgba(179,18,23,.10);
        color: var(--text);
        border-radius:999px;
        padding:4px 8px;
        font-size:12px;
        font-weight:700;
        letter-spacing:.01em;
      }
      .dictLetterTag{
        display:inline-flex;
        align-items:center;
        border:1px solid var(--stroke);
        background: rgba(11,11,13,.32);
        color: var(--muted);
        border-radius:999px;
        padding:4px 8px;
        font-size:12px;
        font-weight:700;
      }
      .dictItem__term{
        font-weight:800;
        margin-bottom:6px;
      }
      .dictItem__def{
        color: var(--muted);
        line-height:1.5;
      }
      .dictDialog{
        width:min(760px, 94vw);
      }
      .dictDialog::backdrop{
        background: rgba(0,0,0,.65);
      }
      .dictDialog__form{
        padding:18px;
      }
      .dictDialog__header{
        display:flex;
        justify-content:space-between;
        align-items:flex-start;
        gap:12px;
      }
      .dictDialog__headerText{
        min-width:0;
      }
      .dictDialog__category{
        display:inline-flex;
        align-items:center;
        border:1px solid rgba(179,18,23,.28);
        background: rgba(179,18,23,.10);
        color: var(--text);
        border-radius:999px;
        padding:4px 8px;
        font-size:12px;
        font-weight:700;
        margin-bottom:10px;
      }
      .dictDialog__title{
        margin:0;
        font-size:24px;
        line-height:1.15;
      }
      .dictDialog__body{
        margin-top:16px;
        display:flex;
        flex-direction:column;
        gap:14px;
      }
      .dictDialog__label{
        font-size:12px;
        font-weight:800;
        letter-spacing:.08em;
        text-transform:uppercase;
        color: var(--muted);
        margin-bottom:8px;
      }
      .dictDialog__shortWrap,
      .dictDialog__longWrap{
        border:1px solid var(--stroke);
        background: rgba(11,11,13,.40);
        border-radius:16px;
        padding:14px;
      }
      .dictDialog__short,
      .dictDialog__long{
        line-height:1.65;
        color: var(--text);
      }
      .dictDialog__short{
        color: var(--muted);
      }
      .dictDialog__actions{
        margin-top:16px;
      }
      @media (max-width: 720px){
        .dictResultsSummary{ text-align:left; }
        .dictClearBtn{ width:100%; justify-content:center; }
        .dictDialog__header{ flex-direction:column; align-items:stretch; }
        .dictDialog__title{ font-size:22px; }
        .dictDialog__form{ padding:14px; }
      }
    `;
    document.head.appendChild(style);
  }

  function renderCategories() {
    const categoriesEl = document.getElementById("dictCategories");
    if (!categoriesEl) return;
    categoriesEl.innerHTML = "";

    categoriesEl.appendChild(
      makeFilterButton(
        "Tutte",
        state.category === "all",
        () => {
          state.category = "all";
          renderCategories();
          renderAlphabet();
          renderResults();
        }
      )
    );

    CATEGORY_ORDER.forEach(category => {
      const label = category;
      categoriesEl.appendChild(
        makeFilterButton(
          label,
          state.category === category,
          () => {
            state.category = state.category === category ? "all" : category;
            renderCategories();
            renderAlphabet();
            renderResults();
          }
        )
      );
    });
  }

  function renderAlphabet() {
    alphaEl.innerHTML = "";

    alphaEl.appendChild(
      makeFilterButton(
        "Tutte",
        !state.letter,
        () => {
          state.letter = "";
          renderAlphabet();
          renderResults();
        }
      )
    );

    ALPHABET.forEach(letter => {
      const count = getLetterCount(letter, state.category);
      const button = makeFilterButton(
        `${letter} (${count})`,
        state.letter === letter,
        () => {
          if (count === 0) return;
          state.letter = state.letter === letter ? "" : letter;
          renderAlphabet();
          renderResults();
        }
      );

      if (count === 0) {
        button.classList.add("is-disabled");
        button.setAttribute("aria-disabled", "true");
        button.disabled = true;
      }

      alphaEl.appendChild(button);
    });
  }

  function getFilteredTerms() {
    return TERMS.filter(item => {
      const matchesQuery = !state.query || normalizeText(`${item.term} ${item.def} ${item.longDef} ${item.category}`).includes(normalizeText(state.query));
      const matchesLetter = !state.letter || getInitial(item.term) === state.letter;
      const matchesCategory = state.category === "all" || item.category === state.category;
      return matchesQuery && matchesLetter && matchesCategory;
    });
  }

  function renderResults() {
    const filtered = getFilteredTerms();
    resultsEl.innerHTML = "";

    updateMeta(filtered);

    if (!filtered.length) {
      resultsEl.innerHTML = `
        <div class="dictItem">
          <div class="dictItem__term">Nessun risultato</div>
          <div class="dictItem__def">Prova a cambiare ricerca, lettera o categoria.${state.query || state.letter || state.category !== "all" ? ` Filtri attivi: ${escapeHtml(getActiveFiltersText())}.` : ""}</div>
        </div>
      `;
      return;
    }

    filtered.forEach(item => {
      const button = document.createElement("button");
      button.className = "dictItem";
      button.type = "button";
      button.setAttribute("aria-label", `Apri scheda di ${item.term}`);
      button.innerHTML = `
        <div class="dictItem__meta">
          <span class="dictTag">${escapeHtml(item.category)}</span>
          <span class="dictLetterTag">${escapeHtml(getInitial(item.term))}</span>
        </div>
        <div class="dictItem__term">${escapeHtml(item.term)}</div>
        <div class="dictItem__def">${escapeHtml(item.def)}</div>
      `;
      button.addEventListener("click", () => openTermDialog(item));
      resultsEl.appendChild(button);
    });
  }

  function openTermDialog(item) {
    const dialog = document.getElementById("dictDialog");
    if (!dialog) return;

    const categoryEl = document.getElementById("dictDialogCategory");
    const titleEl = document.getElementById("dictDialogTitle");
    const shortEl = document.getElementById("dictDialogShort");
    const longEl = document.getElementById("dictDialogLong");

    if (categoryEl) categoryEl.textContent = item.category;
    if (titleEl) titleEl.textContent = item.term;
    if (shortEl) shortEl.textContent = item.def;
    if (longEl) longEl.textContent = item.longDef || item.def;

    if (!dialog.open) {
      dialog.showModal();
    }
  }

  function updateMeta(filtered) {
    const metaEl = document.getElementById("dictMeta");
    const summaryEl = document.getElementById("dictResultsSummary");

    if (metaEl) metaEl.textContent = "";
    if (summaryEl) summaryEl.textContent = "";
  }

  function clearFilters() {
    state.query = "";
    state.letter = "";
    state.category = "all";
    searchEl.value = "";
    renderCategories();
    renderAlphabet();
    renderResults();
  }

  function getLetterCount(letter, category) {
    return TERMS.filter(item => {
      const matchesCategory = category === "all" || item.category === category;
      return matchesCategory && normalizeText(item.term).startsWith(normalizeText(letter));
    }).length;
  }

  function makeFilterButton(label, active, onClick) {
    const button = document.createElement("button");
    button.className = `alphaBtn${active ? " is-active" : ""}`;
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", onClick);
    return button;
  }

  function getActiveFiltersText() {
    const parts = [];
    if (state.category !== "all") parts.push(`categoria ${state.category}`);
    if (state.letter) parts.push(`lettera ${state.letter}`);
    if (state.query) parts.push(`ricerca “${state.query}”`);
    return parts.join(", ");
  }

  function getInitial(term) {
    return normalizeText(term).charAt(0).toUpperCase() || "-";
  }

  function normalizeText(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
})();
