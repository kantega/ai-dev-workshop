---
layout: default
---

# JSON

## Omstrukturere data

Gitt en JSON-array, med objekter som inneholder en verdi som kan uttrykkes som en enum, omstrukturer dette til et map som
nøkler på disse enum-verdiene.

Du kan be LLM'en om å gjøre det direkte, eller be om en funksjon som gjør det samme.

Be gjerne LLM'en om å generere den opprinnelige dataen som det jobbes med.

```javascript
// Opprinnelig array som skal restruktureres
const originalArray = [
    { title: 'dog.jpg', type: 'IMAGE', size: 100 },
    { title: 'dog.mp4', type: 'VIDEO', size: 1000 },
    { title: 'dog.flac', type: 'AUDIO', size: 100 },
    // etc etc
];

// Forventet struktur etter omstrukturere
const expectedMap = {
    'IMAGE': [
        { title: 'dog.jpg' },
        { title: 'fish.jpg' }
    ],
    'VIDEO': [
        { title: 'cat.mp4' }
    ]
    // etc etc
};
```

---

Eksempel på generert data fra ChatGPT:

**Prompt:**
>Generate a JSON-array of 20 objects.
The objects in the array has the following fields:
>
>- "filename": A string-value, containing random type of animal, ending with a file-extension (for example: ".jpg") a common filetype for either video, audio, or images
>- "filetype": A string-value, given the file-extension in the name, have a corresponding filetype, either "VIDEO", "AUDIO", or "IMAGE"
>- "size": An number-value, should be a random integer between 10 and 10000 (images should have smaller values than audio; audio should have smaller values than video)
>- "description": A string-value, a short description of the given animal (max 10 words)

**Svar:**

```json
[
  {
    "filename": "elephant.jpg",
    "filetype": "IMAGE",
    "size": 500,
    "description": "Large mammal with a long trunk."
  },
  {
    "filename": "lion.mp4",
    "filetype": "VIDEO",
    "size": 5000,
    "description": "Fierce predator found in grasslands."
  },
  {
    "filename": "cat.jpg",
    "filetype": "IMAGE",
    "size": 100,
    "description": "Adorable domestic companion."
  },
  {
    "filename": "dog.mp3",
    "filetype": "AUDIO",
    "size": 50,
    "description": "Loyal and friendly pet."
  },
  {
    "filename": "giraffe.jpg",
    "filetype": "IMAGE",
    "size": 700,
    "description": "Tall herbivorous animal with a long neck."
  },
  {
    "filename": "dolphin.mp3",
    "filetype": "AUDIO",
    "size": 20,
    "description": "Highly intelligent marine mammal."
  },
  {
    "filename": "tiger.jpg",
    "filetype": "IMAGE",
    "size": 800,
    "description": "Powerful carnivore with distinctive stripes."
  },
  {
    "filename": "bird.mp4",
    "filetype": "VIDEO",
    "size": 3000,
    "description": "Feathered creature capable of flight."
  },
  {
    "filename": "snake.mp3",
    "filetype": "AUDIO",
    "size": 30,
    "description": "Slithering reptile found in various habitats."
  },
  {
    "filename": "elephant.mp4",
    "filetype": "VIDEO",
    "size": 7000,
    "description": "Largest land animal with an elongated nose."
  },
  {
    "filename": "fish.jpg",
    "filetype": "IMAGE",
    "size": 200,
    "description": "Aquatic animal with gills and fins."
  },
  {
    "filename": "cat.mp3",
    "filetype": "AUDIO",
    "size": 40,
    "description": "Independent and agile domestic pet."
  },
  {
    "filename": "lion.jpg",
    "filetype": "IMAGE",
    "size": 900,
    "description": "King of the jungle with a majestic mane."
  },
  {
    "filename": "dog.mp4",
    "filetype": "VIDEO",
    "size": 4000,
    "description": "Faithful and trainable companion animal."
  },
  {
    "filename": "bird.jpg",
    "filetype": "IMAGE",
    "size": 300,
    "description": "Feathered creature capable of melodious songs."
  },
  {
    "filename": "tiger.mp3",
    "filetype": "AUDIO",
    "size": 25,
    "description": "Ferocious feline with distinct black stripes."
  },
  {
    "filename": "dolphin.jpg",
    "filetype": "IMAGE",
    "size": 600,
    "description": "Marine mammal known for its playful behavior."
  }
]
```

(traff fort token-begrensningen på gratisversjonen av ChatGPT 3.5 - kan man gjøre noe for å omgå denne problemstillingen?)

Merk en feil, vårt krav om at "size"-propertyen skulle ha sjikter basert på filtypen ble ikke helt riktig.
"AUDIO"-objektene har konsekvent en lavere verdi enn "IMAGE"-objektene.
Hvorfor det? Kan man forbedre promptet til å sikre seg mot dette?

Kan gjøre flere ting her, først lage dette map'et, så sortere listene i map'et etter filstørrelse,
så filtrere ned til 3 elementer per liste.

[< Tilbake](../exercises.md)