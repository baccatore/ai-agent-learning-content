interface BreadcrumbItem {
  label: string;
  href?: string;
}

const sessionLabels: Record<string, Record<string, string>> = {
  ja: {
    'session-00': 'Session 0: 体験',
    'session-01': 'Session 1: 基礎',
    'session-02': 'Session 2: 実践①',
    'session-03': 'Session 3: 実践②',
    'session-04': 'Session 4: 運用',
  },
  en: {
    'session-00': 'Session 0: Experience',
    'session-01': 'Session 1: Basics',
    'session-02': 'Session 2: Practice I',
    'session-03': 'Session 3: Practice II',
    'session-04': 'Session 4: Operations',
  },
};

const moduleLabels: Record<string, Record<string, string>> = {
  ja: {
    '01-foundations': 'Module 1: 基礎',
    '02-practical-skills': 'Module 2: 実践スキル',
    '03-advanced-use-cases': 'Module 3: 応用',
    '04-operations': 'Module 4: 運用',
  },
  en: {
    '01-foundations': 'Module 1: Foundations',
    '02-practical-skills': 'Module 2: Practical Skills',
    '03-advanced-use-cases': 'Module 3: Advanced',
    '04-operations': 'Module 4: Operations',
  },
};

const typeLabels: Record<string, Record<string, string>> = {
  ja: {
    'instructor-guide': '講師ガイド',
    'participant-handout': '受講者ハンドアウト',
    textbook: 'テキスト',
    exercises: '演習',
    reference: 'リファレンス',
  },
  en: {
    'instructor-guide': 'Instructor Guide',
    'participant-handout': 'Participant Handout',
    textbook: 'Textbook',
    exercises: 'Exercises',
    reference: 'Reference',
  },
};

export function workshopBreadcrumbs(lang: string, session: string, type: string): BreadcrumbItem[] {
  const home = lang === 'ja' ? 'ホーム' : 'Home';
  const ws = lang === 'ja' ? 'ワークショップ' : 'Workshop';
  return [
    { label: home, href: `/${lang}/` },
    { label: ws, href: `/${lang}/workshop/session-00/instructor-guide/` },
    { label: sessionLabels[lang]?.[session] ?? session, href: `/${lang}/workshop/${session}/instructor-guide/` },
    { label: typeLabels[lang]?.[type] ?? type },
  ];
}

export function studyBreadcrumbs(lang: string, mod: string, type: string): BreadcrumbItem[] {
  const home = lang === 'ja' ? 'ホーム' : 'Home';
  const ss = lang === 'ja' ? '自己学習' : 'Self-Study';
  return [
    { label: home, href: `/${lang}/` },
    { label: ss, href: `/${lang}/self-study/01-foundations/textbook/` },
    { label: moduleLabels[lang]?.[mod] ?? mod, href: `/${lang}/self-study/${mod}/textbook/` },
    { label: typeLabels[lang]?.[type] ?? type },
  ];
}
