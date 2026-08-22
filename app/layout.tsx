import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, CONTACT_EMAIL } from "./site-config";
import { practices } from "./practice-areas";
const serif=Cormorant_Garamond({variable:"--font-serif",subsets:["latin"],weight:["400","500","600"]});
const sans=Manrope({variable:"--font-sans",subsets:["latin"]});
export const metadata:Metadata={
  metadataBase:new URL(SITE_URL),
  title:{default:`${SITE_NAME} | Abogados`,template:`%s | ${SITE_NAME}`},
  description:SITE_DESCRIPTION,
  icons:{icon:"/favicon.svg"},
  openGraph:{
    type:"website",
    locale:"es_AR",
    siteName:`${SITE_NAME} | Abogados`,
    title:`${SITE_NAME} | Abogados`,
    description:SITE_DESCRIPTION,
    url:SITE_URL,
  },
  twitter:{card:"summary",title:`${SITE_NAME} | Abogados`,description:SITE_DESCRIPTION},
};
const legalServiceJsonLd={
  "@context":"https://schema.org",
  "@type":"LegalService",
  "@id":`${SITE_URL}/#estudio`,
  name:`${SITE_NAME} | Abogados`,
  url:SITE_URL,
  email:CONTACT_EMAIL,
  description:SITE_DESCRIPTION,
  areaServed:[
    {"@type":"AdministrativeArea",name:"Ciudad Autónoma de Buenos Aires"},
    {"@type":"AdministrativeArea",name:"Provincia de Buenos Aires"},
    {"@type":"AdministrativeArea",name:"Entre Ríos"},
  ],
  founder:{
    "@type":"Attorney",
    name:"Luis Fernando Moulins Elgart",
    jobTitle:"Socio Director",
    email:CONTACT_EMAIL,
    alumniOf:[
      {"@type":"CollegeOrUniversity",name:"Universidad Nacional de La Plata"},
      {"@type":"CollegeOrUniversity",name:"Universidad de Buenos Aires"},
    ],
  },
  knowsAbout:practices.map((p)=>p.title),
  hasOfferCatalog:{
    "@type":"OfferCatalog",
    name:"Áreas de práctica",
    itemListElement:practices.map((p)=>({
      "@type":"Offer",
      itemOffered:{
        "@type":"Service",
        name:p.title,
        description:p.lead,
        provider:{"@type":"LegalService",name:`${SITE_NAME} | Abogados`},
      },
    })),
  },
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="es"><body className={`${serif.variable} ${sans.variable}`}>
<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(legalServiceJsonLd)}}/>
{children}</body></html>}
