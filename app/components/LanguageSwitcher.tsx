"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const locales = ["en", "es", "fr"];

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1];

  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");

  return (
  <div
    data-testid="language-switcher"
    className="flex gap-4 mb-6 text-sm font-medium"
  >
    {locales.map((locale) => (
      <Link
        key={locale}
        href={`/${locale}${pathWithoutLocale}`}
        className="px-3 py-1 rounded-md bg-gray-200 hover:bg-black hover:text-white transition"
      >
        {locale.toUpperCase()}
      </Link>
    ))}
  </div>
);
}
