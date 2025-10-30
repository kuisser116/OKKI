import React, { useState } from 'react';
import { Search, Filter, Star, Clock, Users, Coins, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/CoursesPage.css';

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
    <div className="courses-page-container">
      <header className="courses-page-header">
        <div className="courses-header-content">
          <h1 className="courses-header-title">📚 Catálogo de Cursos</h1>
          <button onClick={() => navigate('/dashboard')} className="dashboard-button">
            Mi Dashboard
          </button>
        </div>
      </header>

      <main className="courses-page-main">
        <div className="filters-container">
          <div className="search-bar-wrapper">
            <div className="search-input-container">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Buscar cursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`category-button ${selectedCategory === cat.id ? 'active' : ''}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="courses-grid">
          {filteredCourses.map(course => (
            <div key={course.id} onClick={() => navigate(`/course/${course.id}`)} className="course-card">
              <div className="course-card-image">{course.image}</div>
              <div className="course-card-content">
                <h3 className="course-card-title">{course.title}</h3>
                <p className="course-card-description">{course.description}</p>
                <div className="course-card-rating">
                  <Star size={16} className="star" />
                  <span className="course-card-rating-value">{course.rating}</span>
                  <span className="course-card-students">({course.students} estudiantes)</span>
                </div>
                <div className="course-card-footer">
                  <div className="course-card-duration">
                    <Clock size={16} />
                    {course.duration}
                  </div>
                  <div className="course-card-price">
                    <Coins size={16} className="coins-icon" />
                    {course.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="no-courses-message">
            <p>No se encontraron cursos</p>
          </div>
        )}
      </main>
    </div>
  );
}
