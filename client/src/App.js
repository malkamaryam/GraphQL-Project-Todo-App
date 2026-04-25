import './App.css';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import { useState } from 'react';

const query = gql`
  query getTodosWithUser {
    getTodos {
      id
      title
      completed
      user {
        id
        name
      }
    }
  }
`;

export default function App() {
  const { loading, error, data } = useQuery(query);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  if (loading) return <div className="loading">Loading tasks…</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

  const all = data?.getTodos || [];

  const filtered = all
    .filter(t => t.title.toLowerCase().includes(search.toLowerCase()))
    .filter(t =>
      filter === 'all' ? true : filter === 'completed' ? t.completed : !t.completed
    );

  const completedCount = all.filter(t => t.completed).length;
  const pendingCount = all.length - completedCount;

  return (
    <div className="app">
      <header className="header">
        <p className="eyebrow">Task Manager</p>
        <h1 className="title">Todo <span>Dashboard</span></h1>
        <p className="subtitle">Powered by GraphQL</p>
      </header>

      <div className="stats-bar">
        <div className="stat">
          <span className="stat-num">{all.length}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat">
          <span className="stat-num orange">{pendingCount}</span>
          <span className="stat-label">Pending</span>
        </div>
        <div className="stat">
          <span className="stat-num purple">{completedCount}</span>
          <span className="stat-label">Done</span>
        </div>
      </div>

      <div className="controls">
        <div className="search-wrap">
          <span className="search-icon">⌕</span>
          <input
            className="search-input"
            type="text"
            placeholder="Search tasks…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="filter-group">
          {['all', 'pending', 'completed'].map(f => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="empty">
          <div className="empty-icon">◎</div>
          <p className="empty-text">No tasks found</p>
        </div>
      ) : (
        <div className="grid">
          {filtered.map(todo => (
            <div key={todo.id} className={`card ${todo.completed ? 'done' : 'pending'}`}>
              <p className="card-id">#{String(todo.id).padStart(3, '0')}</p>
              <p className="card-title">{todo.title}</p>
              <div className="card-footer">
                <div className="user-chip">
                  <div className="avatar">
                    {todo.user.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                  </div>
                  <span className="user-name">{todo.user.name}</span>
                </div>
                <span className={`badge ${todo.completed ? 'done' : 'pending'}`}>
                  {todo.completed ? '✓ Done' : '⏳ Pending'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}