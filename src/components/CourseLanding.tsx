import React, { useState } from 'react';
import { Star, Clock, Users, Award, Play, Check, BookOpen, Trophy, ChevronLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import '../assets/styles/CourseLanding.css';

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
    <div className="course-landing-container">
      <header className="course-landing-header">
        <div className="course-landing-header-content">
          <button onClick={() => navigate('/courses')} className="back-button">
            <ChevronLeft size={20} />
            Volver a cursos
          </button>
        </div>
      </header>

      <main className="course-landing-main">
        <div className="course-grid">
          <div className="course-info-left">
            <div className="course-hero">
              <span className="course-category">{course.category}</span>
              <h1 className="course-title">{course.title}</h1>
              <p className="course-description">{course.description}</p>
              <div className="course-meta">
                <div className="meta-item">
                  <Star size={20} className="star" />
                  <span>{course.rating}</span>
                  <span>({course.students} estudiantes)</span>
                </div>
                <div className="meta-item">
                  <Clock size={18} />
                  {course.duration}
                </div>
                <div className="meta-item">
                  <BookOpen size={18} />
                  {course.lessons} lecciones
                </div>
              </div>
              <div className="instructor-info">
                <div className="instructor-avatar">{course.instructor.avatar}</div>
                <div>
                  <div className="instructor-name">Instructor: {course.instructor.name}</div>
                  <div className="instructor-stats">
                    {course.instructor.students.toLocaleString()} estudiantes • {course.instructor.courses} cursos
                  </div>
                </div>
              </div>
            </div>

            <div className="course-tabs">
              {['overview', 'curriculum', 'instructor'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                >
                  {tab === 'overview' ? 'Descripción' : tab === 'curriculum' ? 'Contenido' : 'Instructor'}
                </button>
              ))}
            </div>

            <div className="tab-content">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="section-title">¿Qué aprenderás?</h2>
                  <div className="what-you-learn-grid">
                    {course.whatYouLearn.map((item, i) => (
                      <div key={i} className="learn-item">
                        <Check size={20} className="check-icon" />
                        <span className="learn-item-text">{item}</span>
                      </div>
                    ))}
                  </div>
                  <h2 className="section-title" style={{ marginTop: '2rem' }}>Requisitos</h2>
                  <ul className="requirements-list">
                    {course.requirements.map((req, i) => (
                      <li key={i} className="requirement-item">• {req}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'curriculum' && (
                <div>
                  {course.curriculum.map((section, i) => (
                    <div key={i} className="curriculum-section">
                      <h3 className="curriculum-title">{section.section}</h3>
                      {section.lessons.map((lesson, j) => (
                        <div key={j} className="lesson-item">
                          <div className="lesson-title-group">
                            <Play size={16} />
                            <span className="lesson-title">{lesson.title}</span>
                            {lesson.free && <span className="free-badge">GRATIS</span>}
                          </div>
                          <span className="lesson-duration">{lesson.duration}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'instructor' && (
                <div className="instructor-tab">
                  <div className="instructor-tab-avatar">{course.instructor.avatar}</div>
                  <h3 className="instructor-tab-name">{course.instructor.name}</h3>
                  <div className="instructor-tab-stats">
                    <div>
                      <div className="instructor-stat-value">{course.instructor.rating}</div>
                      <div className="instructor-stat-label">Rating</div>
                    </div>
                    <div>
                      <div className="instructor-stat-value">{course.instructor.students.toLocaleString()}</div>
                      <div className="instructor-stat-label">Estudiantes</div>
                    </div>
                    <div>
                      <div className="instructor-stat-value">{course.instructor.courses}</div>
                      <div className="instructor-stat-label">Cursos</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="purchase-card-sticky">
            <div className="purchase-card">
              <div className="course-image-placeholder">{course.image}</div>
              <div className="price-section">
                <div className="price">{course.price}</div>
                <div className="price-learn">o {course.priceLearn} tokens LEARN</div>
              </div>
              <button className="enroll-button">Inscribirse Ahora</button>
              <div className="course-features-section">
                <div className="course-features-title">Este curso incluye:</div>
                {course.features.map((feature, i) => (
                  <div key={i} className="feature-item">
                    <Check size={16} className="check-icon" />
                    {feature}
                  </div>
                ))}
              </div>
              <div className="course-details-footer">
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
