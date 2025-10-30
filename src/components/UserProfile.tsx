import React, { useState } from 'react';
import { User, Award, Trophy, BookOpen, Clock, Coins, Star, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/UserProfile.css';

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
    <div className="profile-container">
      <header className="profile-header">
        <div className="profile-header-content">
          <h1 className="profile-header-title">Mi Perfil</h1>
          <button onClick={() => navigate('/dashboard')} className="profile-header-button">
            Dashboard
          </button>
        </div>
      </header>

      <main className="profile-main">
        <div className="profile-card">
          <div className="profile-card-header">
            <div className="profile-avatar">{userData.avatar}</div>
            <div className="profile-info">
              <div className="profile-name-rank">
                <h2 className="profile-name">{userData.name}</h2>
                <span className="profile-rank" style={{ backgroundColor: getRankColor(userData.stats.rank) }}>
                  {userData.stats.rank}
                </span>
              </div>
              <p className="profile-wallet">
                Wallet: {userData.wallet?.substring(0, 20)}...{userData.wallet?.substring(userData.wallet.length - 8)}
              </p>
              <p className="profile-joined">Miembro desde {userData.joinedDate}</p>
            </div>
            <div className="quick-stats">
              <div className="quick-stat-card">
                <div className="quick-stat-icon"><Coins size={24} /></div>
                <div className="quick-stat-value">{userData.stats.learnTokens}</div>
                <div className="quick-stat-label">LEARN</div>
              </div>
              <div className="quick-stat-card">
                <div className="quick-stat-icon"><Trophy size={24} /></div>
                <div className="quick-stat-value">{userData.stats.eduTokens}</div>
                <div className="quick-stat-label">EDU</div>
              </div>
            </div>
          </div>
          <div className="main-stats-grid">
            {[
              { label: 'Cursos Completados', value: userData.stats.coursesCompleted, icon: <Award size={20} /> },
              { label: 'En Progreso', value: userData.stats.coursesInProgress, icon: <BookOpen size={20} /> },
              { label: 'Horas Totales', value: userData.stats.totalHours, icon: <Clock size={20} /> },
              { label: 'Certificados NFT', value: userData.stats.nftCertificates, icon: <Trophy size={20} /> }
            ].map((stat, i) => (
              <div key={i} className="main-stat-item">
                <div className="main-stat-icon">{stat.icon}</div>
                <div className="main-stat-value">{stat.value}</div>
                <div className="main-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-tabs">
          {[
            { id: 'courses' as const, label: 'En Progreso' },
            { id: 'completed' as const, label: 'Completados' },
            { id: 'achievements' as const, label: 'Logros' },
            { id: 'activity' as const, label: 'Actividad' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`profile-tab-button ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div>
          {activeTab === 'courses' && (
            <div className="tab-content-grid">
              {userData.coursesInProgress.map(course => (
                <div key={course.id} onClick={() => navigate(`/course/${course.id}`)} className="in-progress-card">
                  <div className="in-progress-header">
                    <div className="in-progress-image">{course.image}</div>
                    <div>
                      <h3 className="in-progress-title">{course.title}</h3>
                      <p className="in-progress-lessons">{course.completedLessons} de {course.totalLessons} lecciones</p>
                    </div>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${course.progress}%` }} />
                  </div>
                  <div className="progress-text-container">
                    <span className="progress-percentage">{course.progress}% Completado</span>
                    <span className="progress-last-accessed">{course.lastAccessed}</span>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); navigate(`/course/${course.id}`); }} className="continue-button">
                    Continuar Aprendiendo <ChevronRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'completed' && (
            <div className="completed-grid">
              {userData.completedCourses.map(course => (
                <div key={course.id} className="completed-card">
                  <div className="completed-image">{course.image}</div>
                  <h3 className="completed-title">{course.title}</h3>
                  <div className="rating-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className={`star ${i < course.rating ? 'filled' : ''}`} />
                    ))}
                  </div>
                  <div className="certificate-info">
                    <div className="certificate-text">
                      <Trophy size={16} />
                      Certificado: {course.certificate}
                    </div>
                  </div>
                  <p className="completed-date">Completado: {course.completedDate}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="achievements-grid">
              {userData.achievements.map(achievement => (
                <div key={achievement.id} className="achievement-card">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-date">{achievement.date}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="activity-container">
              {userData.recentActivity.map((activity, i) => (
                <div key={i} className="activity-item">
                  <div>
                    <div className="activity-action">{activity.action}</div>
                    <div className="activity-course">{activity.course}</div>
                  </div>
                  <div className="activity-time">{activity.time}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
