import React, { useState } from 'react';
import { Star, Clock, Users, Award, Play, Check, BookOpen, Trophy, ChevronLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css';

export default function CourseLanding() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Datos de ejemplo (conectarás a tu API)
  const course = {
    id: 1,
    title: 'Desarrollo Web3 con Stellar',
    description: 'Aprende a crear aplicaciones descentralizadas en la blockchain de Stellar desde cero',
    longDescription: 'Este curso completo te enseñará todo lo necesario para convertirte en un desarrollador Web3 profesional utilizando la blockchain de Stellar. Aprenderás desde los fundamentos hasta técnicas avanzadas para crear DApps completas.',
    instructor: {
      name: 'Carlos Mendez',
      avatar: '👨‍💻',
      courses: 12,
      students: 5430,
      rating: 4.9
    },
    price: '50 EDU',
    priceLearn: '500 LEARN',
    rating: 4.8,
    students: 1234,
    duration: '8 horas',
    lessons: 24,
    category: 'Blockchain',
    image: '🚀',
    level: 'Intermedio',
    language: 'Español',
    lastUpdated: 'Octubre 2025',
    features: [
      'Acceso de por vida',
      'Certificado NFT al completar',
      'Foro de discusión privado',
      'Soporte del instructor',
      'Recursos descargables'
    ],
    curriculum: [
      {
        section: 'Fundamentos de Stellar',
        lessons: [
          { title: 'Introducción a Stellar', duration: '15 min', free: true },
          { title: 'Cuentas y Claves', duration: '20 min', free: true },
          { title: 'Transacciones Básicas', duration: '25 min', free: false }
        ]
      },
      {
        section: 'Smart Contracts con Soroban',
        lessons: [
          { title: 'Instalación del entorno', duration: '18 min', free: false },
          { title: 'Tu primer contrato', duration: '30 min', free: false },
          { title: 'Testing y Deployment', duration: '22 min', free: false }
        ]
      },
      {
        section: 'Creando una DApp completa',
        lessons: [
          { title: 'Arquitectura del proyecto', duration: '20 min', free: false },
          { title: 'Frontend con React', duration: '35 min', free: false },
          { title: 'Integración con Wallet', duration: '28 min', free: false }
        ]
      }
    ],
    requirements: [
      'Conocimientos básicos de JavaScript',
      'Fundamentos de programación',
      'Una computadora con acceso a internet'
    ],
    whatYouLearn: [
      'Crear aplicaciones descentralizadas en Stellar',
      'Escribir y deployar smart contracts con Soroban',
      'Integrar wallets en tus DApps',
      'Gestionar transacciones y pagos en blockchain',
      'Mejores prácticas de seguridad en Web3'
    ]
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      {/* Header */}
      <header style={{
        padding: '1rem 2rem',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <button
            onClick={() => navigate('/courses')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600'
            }}
          >
            <ChevronLeft size={20} />
            Volver a cursos
          </button>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '2rem', alignItems: 'start' }}>
          {/* Left Column - Course Info */}
          <div>
            {/* Hero Section */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <span style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '20px',
                color: 'white',
                fontSize: '0.875rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                {course.category}
              </span>

              <h1 style={{
                color: 'white',
                fontSize: '2.5rem',
                fontWeight: '800',
                marginBottom: '1rem'
              }}>
                {course.title}
              </h1>

              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1.125rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {course.description}
              </p>

              <div style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'center',
                flexWrap: 'wrap',
                marginBottom: '1.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Star size={20} style={{ color: '#fbbf24', fill: '#fbbf24' }} />
                  <span style={{ color: 'white', fontWeight: '700' }}>{course.rating}</span>
                  <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>({course.students} estudiantes)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                  <Clock size={18} />
                  {course.duration}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                  <BookOpen size={18} />
                  {course.lessons} lecciones
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{ fontSize: '2rem' }}>{course.instructor.avatar}</div>
                <div>
                  <div style={{ color: 'white', fontWeight: '600' }}>Instructor: {course.instructor.name}</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
                    {course.instructor.students.toLocaleString()} estudiantes • {course.instructor.courses} cursos
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: '0.5rem',
              marginBottom: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              gap: '0.5rem'
            }}>
              {['overview', 'curriculum', 'instructor'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    background: activeTab === tab ? 'white' : 'transparent',
                    color: activeTab === tab ? '#667eea' : 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textTransform: 'capitalize'
                  }}
                >
                  {tab === 'overview' ? 'Descripción' : tab === 'curriculum' ? 'Contenido' : 'Instructor'}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              {activeTab === 'overview' && (
                <div>
                  <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>
                    ¿Qué aprenderás?
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
                    {course.whatYouLearn.map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'start' }}>
                        <Check size={20} style={{ color: '#10b981', marginTop: '0.25rem', flexShrink: 0 }} />
                        <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem', marginTop: '2rem' }}>
                    Requisitos
                  </h2>
                  {course.requirements.map((req, i) => (
                    <div key={i} style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '0.5rem' }}>
                      • {req}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'curriculum' && (
                <div>
                  {course.curriculum.map((section, i) => (
                    <div key={i} style={{ marginBottom: '1.5rem' }}>
                      <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '1rem' }}>
                        {section.section}
                      </h3>
                      {section.lessons.map((lesson, j) => (
                        <div
                          key={j}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0.75rem',
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '8px',
                            marginBottom: '0.5rem'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Play size={16} style={{ color: 'white' }} />
                            <span style={{ color: 'white' }}>{lesson.title}</span>
                            {lesson.free && (
                              <span style={{
                                padding: '0.25rem 0.5rem',
                                background: '#10b981',
                                color: 'white',
                                borderRadius: '4px',
                                fontSize: '0.75rem',
                                fontWeight: '600'
                              }}>
                                GRATIS
                              </span>
                            )}
                          </div>
                          <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
                            {lesson.duration}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'instructor' && (
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{course.instructor.avatar}</div>
                  <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                    {course.instructor.name}
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1rem',
                    marginTop: '2rem'
                  }}>
                    <div>
                      <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700' }}>
                        {course.instructor.rating}
                      </div>
                      <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
                        Rating
                      </div>
                    </div>
                    <div>
                      <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700' }}>
                        {course.instructor.students.toLocaleString()}
                      </div>
                      <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
                        Estudiantes
                      </div>
                    </div>
                    <div>
                      <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700' }}>
                        {course.instructor.courses}
                      </div>
                      <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
                        Cursos
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Purchase Card */}
          <div style={{ position: 'sticky', top: '2rem' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <div style={{
                width: '100%',
                height: '200px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '5rem',
                marginBottom: '1.5rem'
              }}>
                {course.image}
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ color: 'white', fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                  {course.price}
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
                  o {course.priceLearn} tokens LEARN
                </div>
              </div>

              <button style={{
                width: '100%',
                padding: '1rem',
                background: 'white',
                color: '#667eea',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1.125rem',
                fontWeight: '700',
                cursor: 'pointer',
                marginBottom: '1rem',
                transition: 'all 0.3s ease'
              }}>
                Inscribirse Ahora
              </button>

              <div style={{
                padding: '1rem 0',
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                marginBottom: '1rem'
              }}>
                <div style={{ color: 'white', fontWeight: '600', marginBottom: '0.75rem' }}>
                  Este curso incluye:
                </div>
                {course.features.map((feature, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '0.5rem',
                    fontSize: '0.875rem'
                  }}>
                    <Check size={16} style={{ color: '#10b981' }} />
                    {feature}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <span>Nivel: {course.level}</span>
                <span>{course.language}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}