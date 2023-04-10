import { notFound } from "next/navigation";
export const dynamic = 'force-static'
const languages = ['ae-en', 'ae-ar', 'sa-en', 'sa-ar']

export async function generateStaticParams() {
  return languages.map((lang) => ({
    lang
  }));
}

export default async function LanguagePage({ params: { lang } }) {

  if (!languages.includes(lang)) {
    notFound()
  }

  return <>hello</>
}