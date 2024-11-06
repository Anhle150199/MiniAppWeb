"use server"

export const GenerateStructuredData = async ({ title, path, description, applicationCategory }: { title: string, path: string, description: string, applicationCategory?: string })=> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": title,
    "url": path,
    "applicationCategory": applicationCategory ?? "UtilityApplication",
    "operatingSystem": "Web",
    "description": description,
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    }
  }
}
