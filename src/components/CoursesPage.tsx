import React, { useState } from 'react';
import { Search, Filter, Star, Clock, Users, Coins, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function CoursesPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Datos de ejemplo (luego conectarás a tu backend)
  const courses = [
    {
      id: 1,
      title: 'Desarrollo Web3 con Stellar',
      description: 'Aprende a crear DApps en la blockchain de Stellar',
      instructor: 'Carlos Mendez',
      price: '50 EDU',
      rating: 4.8,
      students: 1234,
      duration: '8 horas',
      category: 'blockchain',
      image: '🚀'
    },
    {
      id: 2,
      title: 'Smart Contracts Avanzados',
      description: 'Domina Soroban y crea contratos inteligentes',
      instructor: 'Ana García',
      price: '75 EDU',
      rating: 4.9,
      students: 892,
      duration: '12 horas',
      category: 'blockchain',
      image: '📝'
    },
    {
      id: 3,
      title: 'React para Principiantes',
      description: 'Fundamentos de React y desarrollo moderno',
      instructor: 'Luis Torres',
      price: '30 EDU',
      rating: 4.7,
      students: 2341,
      duration: '6 horas',
      category: 'desarrollo',
      image: '⚛️'
    },
    {
      id: 4,
      title: 'Trading y DeFi',
      description: 'Estrategias de trading en finanzas descentralizadas',
      instructor: 'María López',
      price: '60 EDU',
      rating: 4.6,
      students: 756,
      duration: '10 horas',
      category: 'finanzas',
      image: '💹'
    },
    {
      id: 5,
      title: 'NFTs y Arte Digital',
      description: 'Crea y vende tu arte en blockchain',
      instructor: 'Pedro Ruiz',
      price: '40 EDU',
      rating: 4.5,
      students: 634,
      duration: '5 horas',
      category: 'arte',
      image: '🎨'
    },
    {
      id: 6,
      title: 'Python para Data Science',
      description: 'Análisis de datos con Python y pandas',
      instructor: 'Sofia Ramirez',
      price: '55 EDU',
      rating: 4.8,
      students: 1523,
      duration: '14 horas',
      category: 'desarrollo',
      image: '🐍'
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'blockchain', name: 'Blockchain' },
    { id: 'desarrollo', name: 'Desarrollo' },
    { id: 'finanzas', name: 'Finanzas' },
    { id: 'arte', name: 'Arte' }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      {/* Header */}
      <header style={{
        padding: '1.5rem 2rem',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <h1 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700' }}>
            📚 Catálogo de Cursos
          </h1>
          <button
            onClick={() => navigate('/dashboard')}
            style={{
              padding: '0.5rem 1rem',
              background: 'white',
              color: '#667eea',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Mi Dashboard
          </button>
        </div>
      </header>

      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        {/* Search and Filters */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: '2rem',
          marginBottom: '2rem',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '1.5rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ flex: '1', minWidth: '250px', position: 'relative' }}>
              <Search style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#667eea',
                width: '20px',
                height: '20px'
              }} />
              <input
                type="text"
                placeholder="Buscar cursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 3rem',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '0.5rem 1.25rem',
                  background: selectedCategory === cat.id ? 'white' : 'rgba(255, 255, 255, 0.2)',
                  color: selectedCategory === cat.id ? '#667eea' : 'white',
                  border: 'none',
                  borderRadius: '20px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredCourses.map(course => (
            <div
              key={course.id}
              onClick={() => navigate(`/course/${course.id}`)}
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Course Image */}
              <div style={{
                height: '150px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem'
              }}>
                {course.image}
              </div>

              {/* Course Content */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  color: 'white',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem'
                }}>
                  {course.title}
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.875rem',
                  marginBottom: '1rem',
                  lineHeight: '1.5'
                }}>
                  {course.description}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  <Star size={16} style={{ color: '#fbbf24', fill: '#fbbf24' }} />
                  <span style={{ color: 'white', fontWeight: '600' }}>{course.rating}</span>
                  <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem' }}>
                    ({course.students} estudiantes)
                  </span>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.875rem'
                  }}>
                    <Clock size={16} />
                    {course.duration}
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    color: 'white',
                    fontWeight: '700'
                  }}>
                    <Coins size={16} style={{ color: '#fbbf24' }} />
                    {course.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            color: 'white'
          }}>
            <p style={{ fontSize: '1.25rem' }}>No se encontraron cursos</p>
          </div>
        )}
      </main>
    </div>
  );
}