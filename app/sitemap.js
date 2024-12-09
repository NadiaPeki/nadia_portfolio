export default async function sitemap() {
  const baseUrl = 'https://kotdev.pl';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified },
    { url: `${baseUrl}/ru`, lastModified },
    { url: `${baseUrl}/pl`, lastModified },
    { url: `${baseUrl}/ru/sajty`, lastModified },
    { url: `${baseUrl}/pl/strony`, lastModified },
    { url: `${baseUrl}/ru/internetmagaziny`, lastModified },
    { url: `${baseUrl}/pl/sklepyinternetowe`, lastModified },
    { url: `${baseUrl}/ru/startapy`, lastModified },
    { url: `${baseUrl}/pl/startupy`, lastModified },
    { url: `${baseUrl}/ru/reklama`, lastModified },
    { url: `${baseUrl}/pl/reklama`, lastModified },
    { url: `${baseUrl}/ru/kontakty`, lastModified },
    { url: `${baseUrl}/pl/kontakty`, lastModified }
  ];
}
