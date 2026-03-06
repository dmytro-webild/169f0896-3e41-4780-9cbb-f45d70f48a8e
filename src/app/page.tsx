"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardDashboard from '@/components/sections/hero/HeroBillboardDashboard';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import MediaAbout from '@/components/sections/about/MediaAbout';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Wrench, Zap, Clock, DollarSign, CheckCircle, Heart, Shield, Award, MapPin, MessageSquare, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="smallMedium"
      sizing="largeSizeMediumTitles"
      background="noise"
      cardStyle="glass-elevated"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Tallers Av Sarrià"
          navItems={[
            { name: "Servicios", id: "services" },
            { name: "Por qué nosotros", id: "why-us" },
            { name: "Reseñas", id: "testimonials" },
            { name: "Ubicación", id: "location" },
            { name: "Contacto", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardDashboard
          title="Taller mecánico de confianza en Barcelona"
          description="Diagnóstico profesional, reparaciones rápidas y precios justos. Mecánico honesto con más de 15 años de experiencia en Les Corts."
          tag="Mecánico Honesto"
          tagIcon={Wrench}
          tagAnimation="slide-up"
          buttons={[
            { text: "Llamar ahora", href: "tel:933217648" },
            { text: "Solicitar revisión", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "noise" }}
          dashboard={{
            title: "Tallers Av Sarrià — Tu mecánico de barrio",            stats: [
              { title: "Valoración", values: [4.6, 4.8, 4.6], description: "Google Reviews" },
              { title: "Experiencia", values: [15, 18, 15], valueSuffix: "+ años", description: "Profesional confiable" },
              { title: "Clientes", values: [500, 650, 580], valueSuffix: "+", description: "Satisfechos en Barcelona" }
            ],
            logoIcon: Zap,
            sidebarItems: [
              { icon: Wrench, active: true },
              { icon: Clock, active: false },
              { icon: DollarSign, active: false }
            ],
            buttons: [
              { text: "📞 933 21 76 48", href: "tel:933217648" },
              { text: "📍 Av. Sarrià, 42", href: "#location" }
            ],
            listItems: [
              { icon: CheckCircle, title: "Diagnóstico honesto", status: "Rápido" },
              { icon: Zap, title: "Reparaciones rápidas", status: "Eficiente" },
              { icon: Heart, title: "Trato cercano y profesional", status: "Confiable" }
            ],
            listTitle: "Nuestro compromiso",            imageSrc: "http://img.b2bpic.net/free-photo/male-worker-wearing-work-clothes_273609-10811.jpg?_wi=1",            imageAlt: "Mecánico profesional en taller",            searchPlaceholder: "¿Cuál es tu problema?",            chartTitle: "Satisfacción de clientes",            chartData: [
              { value: 95 },
              { value: 98 },
              { value: 96 },
              { value: 99 },
              { value: 97 }
            ]
          }}
        />
      </div>

      <div id="trust" data-section="trust">
        <MetricCardTwo
          title="Por qué somos diferentes"
          description="Datos que hablan por sí solos sobre nuestro servicio en Barcelona"
          tag="Credibilidad"
          tagIcon={Shield}
          tagAnimation="slide-up"
          metrics={[
            { id: "1", value: "4.6 ⭐", description: "Valoración en Google" },
            { id: "2", value: "18+", description: "Años de experiencia" },
            { id: "3", value: "100%", description: "Precios justos" },
            { id: "4", value: "24h", description: "Respuesta rápida" }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardNineteen
          title="Servicios profesionales"
          description="Reparaciones completas para tu vehículo en Barcelona. Diagnóstico profesional y presupuesto honesto."
          tag="Servicios disponibles"
          tagIcon={Wrench}
          tagAnimation="slide-up"
          features={[
            {
              id: 1,
              tag: "Diagnóstico",              title: "Diagnóstico electrónico",              subtitle: "Identificamos problemas rápido",              description: "Equipos de última generación para diagnosticar problemas del motor, frenos, electricidad y sistemas complejos. Te explicamos qué tiene tu coche sin tecnicismos.",              imageSrc: "http://img.b2bpic.net/free-photo/mechanic-looking-tool-box_1170-1199.jpg",              imageAlt: "Equipo diagnóstico profesional",              buttons: [{ text: "Solicitar diagnosis", href: "#contact" }]
            },
            {
              id: 2,
              tag: "Motor",              title: "Reparación de motor",              subtitle: "Soluciones duraderas y fiables",              description: "Reparación integral del motor con piezas de calidad y garantía en el trabajo. Desde reparaciones menores hasta reconstrucciones completas.",              imageSrc: "http://img.b2bpic.net/free-photo/male-mechanics-working-together-car-shop_23-2150376975.jpg",              imageAlt: "Reparación de motor profesional",              buttons: [{ text: "Consultar precio", href: "#contact" }]
            },
            {
              id: 3,
              tag: "Mantenimiento",              title: "Mantenimiento y revisiones",              subtitle: "Mantén tu coche en perfecto estado",              description: "Cambio de aceite, filtros, revisiones periódicas y mantenimiento preventivo. Prolongamos la vida útil de tu vehículo con servicios planificados.",              imageSrc: "http://img.b2bpic.net/free-photo/mechanic-preparing-check-list_1170-1310.jpg",              imageAlt: "Cambio de aceite y mantenimiento",              buttons: [{ text: "Agendar revisión", href: "#contact" }]
            },
            {
              id: 4,
              tag: "Frenos",              title: "Frenos y suspensión",              subtitle: "Seguridad y confort garantizado",              description: "Reparación de frenos, pastillas, discos y sistemas de suspensión. Pruebas exhaustivas para garantizar tu seguridad en carretera.",              imageSrc: "http://img.b2bpic.net/free-photo/female-mechanic-fixing-car-wheel-disc-brake_1170-1217.jpg",              imageAlt: "Reparación de frenos y suspensión",              buttons: [{ text: "Revisar frenos", href: "#contact" }]
            },
            {
              id: 5,
              tag: "Electricidad",              title: "Electricidad del automóvil",              subtitle: "Sistemas eléctricos complejos resueltos",              description: "Diagnóstico y reparación de batería, alternador, sistemas de iluminación y electrónica del vehículo. Expertos en problemas eléctricos.",              imageSrc: "http://img.b2bpic.net/free-photo/woman-charging-electro-car-electric-gas-station_1303-15089.jpg",              imageAlt: "Reparación electricidad automóvil",              buttons: [{ text: "Diagnosticar", href: "#contact" }]
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
          buttons={[{ text: "Ver todos los servicios", href: "#services" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="why-us" data-section="why-us">
        <MediaAbout
          title="Por qué elegir Tallers Av Sarrià"
          description="Somos un taller mecánico honesto, rápido y profesional. Nuestros clientes vuelven porque confían en nosotros y nunca nos decepcionan los precios."
          tag="Nuestro valor"
          tagIcon={Award}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/male-worker-wearing-work-clothes_273609-10811.jpg?_wi=2"
          imageAlt="Equipo profesional del taller"
          buttons={[
            { text: "Llamar ahora", href: "tel:933217648" },
            { text: "Conoce el taller", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Lo que dicen nuestros clientes"
          description="Reseñas verificadas de clientes satisfechos en Barcelona. Google Reviews y experiencias reales."
          tag="Testimonios"
          tagIcon={Star}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              name: "Juan Martínez",              role: "Cliente desde 2018",              company: "Barcelona",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-grey-shirt-looking-aside-smiling-confident-with-arms-crossed-chest_141793-55366.jpg",              imageAlt: "Juan Martínez"
            },
            {
              id: "2",              name: "María López",              role: "Conductor profesional",              company: "Taxi Barcelona",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/mechanic-talks-with-client-about-car_482257-115300.jpg",              imageAlt: "María López"
            },
            {
              id: "3",              name: "Carlos Ruiz",              role: "Propietario negocio",              company: "Barcelona",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/confident-businessman-smiling-outside-office-building_107420-74332.jpg",              imageAlt: "Carlos Ruiz"
            },
            {
              id: "4",              name: "Ana García",              role: "Cliente frecuente",              company: "Les Corts",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-woman-talking_23-2150171292.jpg",              imageAlt: "Ana García"
            },
            {
              id: "5",              name: "Pablo Fernández",              role: "Empresario",              company: "Barcelona",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-female-mouth_23-2147615404.jpg",              imageAlt: "Pablo Fernández"
            },
            {
              id: "6",              name: "Sofía Herrera",              role: "Doctora",              company: "Eixample",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/couple-giving-car-keys-their-auto-mechanic-auto-repair-shop-focus-is-mechanic_637285-7732.jpg",              imageAlt: "Sofía Herrera"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="location" data-section="location">
        <ContactCTA
          tag="Ubicación"
          tagIcon={MapPin}
          tagAnimation="slide-up"
          title="Visítanos en Barcelona"
          description="Av. de Sarrià, 42, Les Corts, 08029 Barcelona. Abierto lunes a viernes 8:00-18:00. Sábados 9:00-14:00. Estamos a 5 minutos de Pl. de Francesc Macià."
          buttons={[
            { text: "📍 Abrir en Google Maps", href: "https://maps.google.com/?q=Av.+de+Sarria+42+Barcelona" },
            { text: "📞 Llamar: 933 21 76 48", href: "tel:933217648" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="¿Tienes dudas?"
          tagIcon={MessageSquare}
          tagAnimation="slide-up"
          title="¿Tu coche necesita ayuda?"
          description="Contáctanos hoy mismo. Nuestro equipo responde en máximo 2 horas con un diagnóstico inicial y presupuesto sin compromiso."
          buttons={[
            { text: "Llamar ahora (933 21 76 48)", href: "tel:933217648" },
            { text: "Solicitar revisión", href: "#contact-form" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Tallers Av Sarrià"
          leftLink={{ text: "Política de privacidad", href: "#" }}
          rightLink={{ text: "Condiciones de uso", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}
