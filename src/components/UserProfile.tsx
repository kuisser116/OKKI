import React, { useState } from 'react';
import { User, Award, Trophy, BookOpen, Clock, Coins, Star, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

type Rank = 'Bronze' | 'Silver' | 'Gold' | 'Platinum';

interface Stats {
  coursesCompleted: number;
  coursesInProgress: number;
  totalHours: number;
  learnTokens: number;
  eduTokens: number;
  nftCertificates: number;
  rank: Rank;
}

interface CourseInProgress {
  id: number;
  title: string;
  progress: number;
  lastAccessed: string;
  image: string;
  totalLessons: number;
  completedLessons: number;
}

interface CompletedCourse {
  id: number;
  title: string;
  completedDate: string;
  rating: number;
  certificate: string;
  image: string;
}

interface Achievement {
  id: number;
  title: string;
  icon: string;
  date: string;
}

interface Activity {
  action: string;
  course: string;
  time: string;
}

interface Instructor {
  name: string;
  avatar: string;
  courses: number;
  students: number;
  rating: number;
}

interface UserData {
  name: string;
  wallet: string | null;
  joinedDate: string;
  avatar: string;
  stats: Stats;
  coursesInProgress: CourseInProgress[];
  completedCourses: CompletedCourse[];
  achievements: Achievement[];
  recentActivity: Activity[];
}

export default function UserProfile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'courses' | 'completed' | 'achievements' | 'activity'>('courses');
  const publicKey = localStorage.getItem('token');

  // Datos de ejemplo del usuario
  const userData: UserData = {
    name: 'Usuario Demo',
    wallet: publicKey,
    joinedDate: 'Enero 2025',
    avatar: '👤',
    stats: {
      coursesCompleted: 5,
      coursesInProgress: 3,
      totalHours: 47,
      learnTokens: 2450,
      eduTokens: 120,
      nftCertificates: 5,
      rank: 'Gold'
    },
    coursesInProgress: [
      {
        id: 1,
        title: 'Desarrollo Web3 con Stellar',
        progress: 65,
        lastAccessed: 'Hace 2 horas',
        image: '🚀',
        totalLessons: 24,
        completedLessons: 16
      },
      {
        id: 2,
        title: 'Smart Contracts Avanzados',
        progress: 40,
        lastAccessed: 'Hace 1 día',
        image: '📝',
        totalLessons: 18,
        completedLessons: 7
      },
      {
        id: 3,
        title: 'Python para Data Science',
        progress: 15,
        lastAccessed: 'Hace 3 días',
        image: '🐍',
        totalLessons: 32,
        completedLessons: 5
      }
    ],
    completedCourses: [
      {
        id: 4,
        title: 'React para Principiantes',
        completedDate: '15 Oct 2025',
        rating: 5,
        certificate: 'NFT #1234',
        image: '⚛️'
      },
      {
        id: 5,
        title: 'Trading y DeFi',
        completedDate: '01 Oct 2025',
        rating: 4,
        certificate: 'NFT #1189',
        image: '💹'
      },
      {
        id: 6,
        title: 'NFTs y Arte Digital',
        completedDate: '20 Sep 2025',
        rating: 5,
        certificate: 'NFT #1098',
        image: '🎨'
      }
    ],
    achievements: [
      { id: 1, title: 'Primer Curso Completado', icon: '🎓', date: '20 Sep 2025' },
      { id: 2, title: 'Racha de 7 días', icon: '🔥', date: '25 Sep 2025' },
      { id: 3, title: '1000 LEARN tokens', icon: '💰', date: '01 Oct 2025' },
      { id: 4, title: '5 Certificados NFT', icon: '🏆', date: '15 Oct 2025' }
    ],
    recentActivity: [
      { action: 'Completó lección', course: 'Desarrollo Web3', time: 'Hace 2 horas' },
      { action: 'Ganó 50 LEARN', course: 'Quiz de Stellar', time: 'Hace 5 horas' },
      { action: 'Obtuvo certificado', course: 'React Principiantes', time: 'Hace 2 días' }
    ]
  };

  const getRankColor = (rank: Rank): string => {
    const colors: Record<Rank, string> = {
      Bronze: '#cd7f32',
      Silver: '#c0c0c0',
      Gold: '#ffd700',
      Platinum: '#e5e4e2'
    };
    return colors[rank];
  };

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
            Mi Perfil
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
            Dashboard
          </button>
        </div>
      </header>

      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        {/* Profile Header Card */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: '2rem',
          marginBottom: '2rem',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'start', flexWrap: 'wrap' }}>
            {/* Avatar */}
            <div style={{
              width: '120px',
              height: '120px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              border: '3px solid white'
            }}>
              {userData.avatar}
            </div>

            {/* User Info */}
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: '700' }}>
                  {userData.name}
                </h2>
                <span style={{
                  padding: '0.25rem 0.75rem',
                  background: getRankColor(userData.stats.rank),
                  color: 'white',
                  borderRadius: '12px',
                  fontSize: '0.875rem',
                  fontWeight: '700'
                }}>
                  {userData.stats.rank}
                </span>
              </div>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.875rem',
                marginBottom: '0.5rem',
                wordBreak: 'break-all'
              }}>
                Wallet: {userData.wallet?.substring(0, 20)}...{userData.wallet?.substring(userData.wallet.length - 8)}
              </p>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
                Miembro desde {userData.joinedDate}
              </p>
            </div>

            {/* Quick Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '1rem',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <div style={{ color: '#fbbf24', marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>
                  <Coins size={24} />
                </div>
                <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700' }}>
                  {userData.stats.learnTokens}
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.75rem' }}>
                  LEARN
                </div>
              </div>
              <div style={{
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '1rem',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <div style={{ color: '#10b981', marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>
                  <Trophy size={24} />
                </div>
                <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700' }}>
                  {userData.stats.eduTokens}
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.75rem' }}>
                  EDU
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1rem',
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            {[
              { label: 'Cursos Completados', value: userData.stats.coursesCompleted, icon: <Award size={20} /> },
              { label: 'En Progreso', value: userData.stats.coursesInProgress, icon: <BookOpen size={20} /> },
              { label: 'Horas Totales', value: userData.stats.totalHours, icon: <Clock size={20} /> },
              { label: 'Certificados NFT', value: userData.stats.nftCertificates, icon: <Trophy size={20} /> }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ color: 'white', marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>
                  {stat.icon}
                </div>
                <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700' }}>
                  {stat.value}
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
                  {stat.label}
                </div>
              </div>
            ))}
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
          gap: '0.5rem',
          flexWrap: 'wrap'
        }}>
          {[
            { id: 'courses' as const, label: 'En Progreso' },
            { id: 'completed' as const, label: 'Completados' },
            { id: 'achievements' as const, label: 'Logros' },
            { id: 'activity' as const, label: 'Actividad' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: '1 1 auto',
                padding: '0.75rem 1rem',
                background: activeTab === tab.id ? 'white' : 'transparent',
                color: activeTab === tab.id ? '#667eea' : 'white',
                border: 'none',
                borderRadius: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                minWidth: '100px'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {/* Courses In Progress */}
          {activeTab === 'courses' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem'
            }}>
              {userData.coursesInProgress.map(course => (
                <div
                  key={course.id}
                  onClick={() => navigate(`/course/${course.id}`)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    padding: '1.5rem',
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
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      flexShrink: 0
                    }}>
                      {course.image}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        color: 'white',
                        fontSize: '1.125rem',
                        fontWeight: '700',
                        marginBottom: '0.25rem'
                      }}>
                        {course.title}
                      </h3>
                      <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
                        {course.completedLessons} de {course.totalLessons} lecciones
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '999px',
                    height: '8px',
                    marginBottom: '0.75rem',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${course.progress}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #10b981, #34d399)',
                      borderRadius: '999px',
                      transition: 'width 0.3s ease'
                    }} />
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <span style={{ color: 'white', fontWeight: '600' }}>
                      {course.progress}% Completado
                    </span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
                      {course.lastAccessed}
                    </span>
                  </div>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/course/${course.id}`);
                    }}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'white',
                      color: '#667eea',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    Continuar Aprendiendo <ChevronRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Completed Courses */}
          {activeTab === 'completed' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {userData.completedCourses.map(course => (
                <div
                  key={course.id}
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <div style={{
                    width: '100%',
                    height: '120px',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    marginBottom: '1rem'
                  }}>
                    {course.image}
                  </div>

                  <h3 style={{
                    color: 'white',
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    marginBottom: '0.5rem'
                  }}>
                    {course.title}
                  </h3>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.75rem'
                  }}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        style={{
                          color: i < course.rating ? '#fbbf24' : 'rgba(255, 255, 255, 0.3)',
                          fill: i < course.rating ? '#fbbf24' : 'transparent'
                        }}
                      />
                    ))}
                  </div>

                  <div style={{
                    padding: '0.75rem',
                    background: 'rgba(16, 185, 129, 0.2)',
                    borderRadius: '8px',
                    marginBottom: '0.75rem'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#10b981',
                      fontWeight: '600',
                      fontSize: '0.875rem'
                    }}>
                      <Trophy size={16} />
                      Certificado: {course.certificate}
                    </div>
                  </div>

                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
                    Completado: {course.completedDate}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Achievements */}
          {activeTab === 'achievements' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              {userData.achievements.map(achievement => (
                <div
                  key={achievement.id}
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    padding: '2rem',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                    {achievement.icon}
                  </div>
                  <h3 style={{
                    color: 'white',
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    marginBottom: '0.5rem'
                  }}>
                    {achievement.title}
                  </h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
                    {achievement.date}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Recent Activity */}
          {activeTab === 'activity' && (
            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              {userData.recentActivity.map((activity, i) => (
                <div
                  key={i}
                  style={{
                    padding: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    marginBottom: i < userData.recentActivity.length - 1 ? '1rem' : 0,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}
                >
                  <div>
                    <div style={{ color: 'white', fontWeight: '600', marginBottom: '0.25rem' }}>
                      {activity.action}
                    </div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
                      {activity.course}
                    </div>
                  </div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem' }}>
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}