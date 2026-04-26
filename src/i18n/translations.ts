export const supportedLangs = ['pl', 'en'] as const;

export type Lang = (typeof supportedLangs)[number];

type Translation = {
  seoTitle: string;
  seoDescription: string;
  hero: {
    heading: string;
    subtitle: string;
    phone: string;
    scrollLabel: string;
  };
  servicesTitle: string;
  communicationOffices: {
    title: string;
    items: string[];
  };
  taxOffices: {
    title: string;
    items: string[];
  };
  deadlines: {
    title: string;
    items: string[];
  };
  exciseAccount: {
    title: string;
    office: string;
    ibanLabel: string;
    iban: string;
  };
  about: {
    title: string;
    description: string;
    company: string;
    phone: string;
  };
};

export const translations: Record<Lang, Translation> = {
  pl: {
    seoTitle: 'Rejestracja pojazdu Wrocław',
    seoDescription:
      'Tłumaczenia dokumentów i rejestracja pojazdów z zagranicy we Wrocławiu.',
    hero: {
      heading: 'Rejestracja pojazdu z zagranicy',
      subtitle: 'Małgorzata Sagan',
      phone: '605 399 311',
      scrollLabel: 'Przewiń do sekcji usług'
    },
    servicesTitle: 'Tłumaczenia dokumentów i rejestracja pojazdów',
    communicationOffices: {
      title: 'Wydziały Komunikacji',
      items: [
        'Rejestracja pojazdów (samochody, motocykle, quady, przyczepy, ciągniki rolnicze) sprowadzonych z zagranicy i przerejstrowania krajowe',
        'Odbiór stałych dowodów rejestracyjnych',
        'Zgłoszenie sprzedaży',
        'Wyrejestrowanie pojazdów złomowanych',
        'Czasowe rejestracje pojazdów sprzedanych za granicę - tablice wywozowe'
      ]
    },
    taxOffices: {
      title: 'Urzędy Skarbowe',
      items: [
        'Deklaracje akcyzowe AKC-US',
        'Wnioski o zwolnienie z akcyzy mienia przesiedleńczego',
        'Wnioski o zwolnienie z akcyzy samochodów ciężarowych',
        'Obsługa firm - wysyłka deklaracji elektronicznych',
        'Zaświadczenia potwierdzające zapłacenie akcyzy',
        'Tłumaczenia przysięgłe dokumentów'
      ]
    },
    deadlines: {
      title: 'Terminy i obowiązki',
      items: [
        'Przerejestrowanie pojazdu z zagranicy: 30 dni od przywozu do kraju',
        'Przerejestrowanie pojazdu kupionego w kraju: 30 dni od zakupu',
        'Złożenie deklaracji akcyzowej: 14 dni od przywozu do kraju',
        'Złożenie deklaracji PCC-3: 14 dni od zawarcia umowy',
        'Złożenie deklaracji VAT 23: 14 dni od dokonania nabycia wewnątrzwspólnotowego'
      ]
    },
    exciseAccount: {
      title: 'Konto do zapłaty akcyzy',
      office: 'Urząd Skarbowy w Nowym Targu',
      ibanLabel: 'nr konta',
      iban: '84 1010 1270 0008 2422 2400 0000'
    },
    about: {
      title: 'Rejestracja pojazdu Wrocław',
      description:
        'Od dwudziestu lat jestem związana z branżą motoryzacyjną. Od czternastu lat służę osobom i firmom z Wrocławia i okolicznych powiatów, pomocą w rejestracji pojazdów i dopełnianiu towarzyszących zakupowi czynności podatkowych.',
      company: 'PROMOTO Małgorzata Sagan',
      phone: '605 399 311'
    }
  },
  en: {
    seoTitle: 'Vehicle registration Wrocław',
    seoDescription:
      'Document translation and imported vehicle registration services in Wrocław, Poland.',
    hero: {
      heading: 'Imported vehicle registration',
      subtitle: 'Małgorzata Sagan',
      phone: '605 399 311',
      scrollLabel: 'Scroll to services section'
    },
    servicesTitle: 'Document translations and vehicle registration',
    communicationOffices: {
      title: 'Communication Departments',
      items: [
        'Registration of imported vehicles (cars, motorcycles, quads, trailers, agricultural tractors) and domestic re-registration',
        'Collection of permanent registration certificates',
        'Sale notification support',
        'Deregistration of scrapped vehicles',
        'Temporary export registration plates for vehicles sold abroad'
      ]
    },
    taxOffices: {
      title: 'Tax Offices',
      items: [
        'Excise declarations AKC-US',
        'Applications for excise exemption for relocation property',
        'Applications for excise exemption for trucks',
        'Company support - electronic declaration filing',
        'Certificates confirming paid excise duty',
        'Certified document translations'
      ]
    },
    deadlines: {
      title: 'Deadlines and obligations',
      items: [
        'Imported vehicle re-registration: 30 days from bringing the vehicle into Poland',
        'Domestic purchase re-registration: 30 days from purchase date',
        'Excise declaration filing: 14 days from bringing the vehicle into Poland',
        'PCC-3 declaration filing: 14 days from signing the agreement',
        'VAT-23 declaration filing: 14 days from intra-community acquisition'
      ]
    },
    exciseAccount: {
      title: 'Excise payment account',
      office: 'Tax Office in Nowy Targ',
      ibanLabel: 'account number',
      iban: '84 1010 1270 0008 2422 2400 0000'
    },
    about: {
      title: 'Vehicle registration Wrocław',
      description:
        'I have worked in the automotive sector for twenty years. For fourteen years I have supported individuals and companies from Wrocław and nearby districts with vehicle registration and related tax formalities.',
      company: 'PROMOTO Małgorzata Sagan',
      phone: '605 399 311'
    }
  }
};
