export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export function getNavigation(lang: 'ja' | 'en'): NavItem[] {
  const l = lang;

  const sessionNames = l === 'ja'
    ? ['体験', '環境構築・基礎', '実践①', '実践②', '運用']
    : ['Experience', 'Setup & Basics', 'Practice I', 'Practice II', 'Operations'];

  const moduleNames = l === 'ja'
    ? ['基礎', '実践スキル', '応用ユースケース', '運用']
    : ['Foundations', 'Practical Skills', 'Advanced Use Cases', 'Operations'];

  const docTypes = l === 'ja'
    ? { ig: '講師ガイド', ph: '受講者ハンドアウト', tb: 'テキスト', ex: '演習', ref: 'リファレンス' }
    : { ig: 'Instructor Guide', ph: 'Participant Handout', tb: 'Textbook', ex: 'Exercises', ref: 'Reference' };

  const workshopLabel = l === 'ja' ? 'ワークショップ' : 'Workshop';
  const selfStudyLabel = l === 'ja' ? '自己学習' : 'Self-Study';

  const sessions = ['session-00', 'session-01', 'session-02', 'session-03', 'session-04'];
  const modules = ['01-foundations', '02-practical-skills', '03-advanced-use-cases', '04-operations'];

  return [
    {
      label: workshopLabel,
      href: `/${l}/workshop/session-00/instructor-guide/`,
      children: sessions.map((s, i) => ({
        label: `${i}. ${sessionNames[i]}`,
        href: `/${l}/workshop/${s}/instructor-guide/`,
        children: [
          { label: docTypes.ig, href: `/${l}/workshop/${s}/instructor-guide/` },
          { label: docTypes.ph, href: `/${l}/workshop/${s}/participant-handout/` },
        ],
      })),
    },
    {
      label: selfStudyLabel,
      href: `/${l}/self-study/01-foundations/textbook/`,
      children: modules.map((m, i) => ({
        label: `${i + 1}. ${moduleNames[i]}`,
        href: `/${l}/self-study/${m}/textbook/`,
        children: [
          { label: docTypes.tb, href: `/${l}/self-study/${m}/textbook/` },
          { label: docTypes.ex, href: `/${l}/self-study/${m}/exercises/` },
          { label: docTypes.ref, href: `/${l}/self-study/${m}/reference/` },
        ],
      })),
    },
  ];
}
