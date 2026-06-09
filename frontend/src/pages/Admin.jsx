import { useEffect, useState, useCallback } from 'react'
import './Admin.css'

const API = '/api'

function getToken() {
  return localStorage.getItem('admin_token')
}

function setToken(token) {
  localStorage.setItem('admin_token', token)
}

function clearToken() {
  localStorage.removeItem('admin_token')
}

async function api(url, options = {}) {
  const token = getToken()
  const headers = { ...options.headers }
  if (token) headers['Authorization'] = `Bearer ${token}`
  if (!(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json'
  }
  const res = await fetch(`${API}${url}`, { ...options, headers })
  if (res.status === 401) {
    clearToken()
    window.dispatchEvent(new CustomEvent('auth:expired'))
    throw new Error('Unauthorized')
  }
  const data = await res.json()
  if (!res.ok) throw new Error(data.error || 'Request failed')
  return data
}

function loginApi(email, password) {
  return fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
}

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await loginApi(email, password)
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Login failed')
      setToken(data.token)
      onLogin(data)
    } catch (err) {
      setError(err.message || 'Login failed. Check your credentials.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="admin-login-wrapper">
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <div className="admin-login-header">
          <h2>Admin Login</h2>
          <p>Sign in to manage your leads</p>
        </div>
        {error && <div className="admin-alert admin-alert-error">{error}</div>}
        <div className="admin-field">
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@aspiremediatech.com"
            required
          />
        </div>
        <div className="admin-field">
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button className="admin-btn admin-btn-primary admin-btn-full" type="submit" disabled={loading}>
          {loading ? 'Signing in…' : 'Sign In'}
        </button>
      </form>
    </div>
  )
}

function StatCard({ label, value, color }) {
  return (
    <div className="admin-stat-card" style={{ borderLeftColor: color }}>
      <div className="admin-stat-value">{value}</div>
      <div className="admin-stat-label">{label}</div>
    </div>
  )
}

function Dashboard({ onNavigate }) {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api('/admin/stats')
        setStats(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <div className="admin-loading">Loading dashboard…</div>
  if (error) return <div className="admin-alert admin-alert-error">{error}</div>
  if (!stats) return null

  return (
    <div>
      <div className="admin-page-header">
        <h2>Dashboard</h2>
        <button className="admin-btn admin-btn-primary" onClick={() => onNavigate('contacts')}>
          View All Leads
        </button>
      </div>

      <div className="admin-stats-grid">
        <StatCard label="Total Leads" value={stats.total} color="#2563eb" />
        <StatCard label="New" value={stats.new} color="#059669" />
        <StatCard label="Read" value={stats.read} color="#d97706" />
        <StatCard label="Replied" value={stats.replied} color="#7c3aed" />
      </div>

      <div className="admin-section-title">
        <h3>Recent Leads</h3>
      </div>

      {stats.recent.length === 0 ? (
        <div className="admin-empty">No leads yet.</div>
      ) : (
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Service</th>
                <th>Status</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {stats.recent.map((c) => (
                <tr key={c._id}>
                  <td>{c.firstName} {c.lastName}</td>
                  <td>{c.email}</td>
                  <td>{c.service}</td>
                  <td><span className={`admin-badge badge-${c.status}`}>{c.status}</span></td>
                  <td className="admin-cell-date">{new Date(c.createdAt).toLocaleDateString()}</td>
                  <td>
                    <button className="admin-btn-sm" onClick={() => onNavigate('detail', c._id)}>
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

function Contacts({ onNavigate }) {
  const [contacts, setContacts] = useState([])
  const [total, setTotal] = useState(0)
  const [pages, setPages] = useState(1)
  const [page, setPage] = useState(1)
  const [status, setStatus] = useState('')
  const [search, setSearch] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchContacts = useCallback(async (p = 1) => {
    setLoading(true)
    setError('')
    try {
      const params = new URLSearchParams()
      params.set('page', p)
      if (status) params.set('status', status)
      if (search) params.set('search', search)
      const data = await api(`/admin/contacts?${params}`)
      setContacts(data.contacts)
      setTotal(data.total)
      setPages(data.pages)
      setPage(data.page)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [status, search])

  useEffect(() => { fetchContacts(1) }, [fetchContacts])

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(searchInput)
  }

  return (
    <div>
      <div className="admin-page-header">
        <h2>Leads ({total})</h2>
        <button className="admin-btn admin-btn-outline" onClick={() => onNavigate('dashboard')}>
          ← Dashboard
        </button>
      </div>

      <div className="admin-toolbar">
        <form className="admin-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search name or email…"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="admin-btn admin-btn-primary" type="submit">Search</button>
          {search && (
            <button className="admin-btn admin-btn-outline" type="button" onClick={() => { setSearch(''); setSearchInput('') }}>
              Clear
            </button>
          )}
        </form>
        <div className="admin-filter">
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">All Status</option>
            <option value="new">New</option>
            <option value="read">Read</option>
            <option value="replied">Replied</option>
          </select>
        </div>
      </div>

      {error && <div className="admin-alert admin-alert-error">{error}</div>}

      {loading ? (
        <div className="admin-loading">Loading leads…</div>
      ) : contacts.length === 0 ? (
        <div className="admin-empty">No leads found.</div>
      ) : (
        <>
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Service</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((c) => (
                  <tr key={c._id}>
                    <td>{c.firstName} {c.lastName}</td>
                    <td>{c.email}</td>
                    <td>{c.phone || '—'}</td>
                    <td>{c.service}</td>
                    <td><span className={`admin-badge badge-${c.status}`}>{c.status}</span></td>
                    <td className="admin-cell-date">{new Date(c.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button className="admin-btn-sm" onClick={() => onNavigate('detail', c._id)}>
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {pages > 1 && (
            <div className="admin-pagination">
              <button disabled={page <= 1} onClick={() => fetchContacts(page - 1)}>Previous</button>
              <span>Page {page} of {pages}</span>
              <button disabled={page >= pages} onClick={() => fetchContacts(page + 1)}>Next</button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

function ContactDetail({ id, onBack }) {
  const [contact, setContact] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [notes, setNotes] = useState('')
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api(`/admin/contacts/${id}`)
        setContact(data)
        setNotes(data.notes || '')
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [id])

  const updateStatus = async (newStatus) => {
    try {
      const updated = await api(`/admin/contacts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ status: newStatus }),
      })
      setContact(updated)
    } catch (err) {
      setError(err.message)
    }
  }

  const saveNotes = async () => {
    setSaving(true)
    try {
      const updated = await api(`/admin/contacts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ notes }),
      })
      setContact(updated)
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const deleteContact = async () => {
    if (!window.confirm('Delete this lead permanently?')) return
    setDeleting(true)
    try {
      await api(`/admin/contacts/${id}`, { method: 'DELETE' })
      onBack()
    } catch (err) {
      setError(err.message)
      setDeleting(false)
    }
  }

  if (loading) return <div className="admin-loading">Loading lead details…</div>
  if (error) return <div className="admin-alert admin-alert-error">{error}</div>
  if (!contact) return <div className="admin-empty">Lead not found.</div>

  return (
    <div className="admin-detail">
      <div className="admin-page-header">
        <h2>Lead Details</h2>
        <button className="admin-btn admin-btn-outline" onClick={onBack}>
          ← Back to Leads
        </button>
      </div>

      <div className="admin-detail-card">
        <div className="admin-detail-header">
          <div>
            <h3>{contact.firstName} {contact.lastName}</h3>
            <span className="admin-detail-date">
              Submitted {new Date(contact.createdAt).toLocaleString()}
            </span>
          </div>
          <span className={`admin-badge badge-${contact.status}`}>{contact.status}</span>
        </div>

        <div className="admin-detail-fields">
          <div className="admin-detail-row">
            <strong>Email</strong>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <div className="admin-detail-row">
            <strong>Phone</strong>
            <span>{contact.phone || '—'}</span>
          </div>
          <div className="admin-detail-row">
            <strong>Service</strong>
            <span>{contact.service}</span>
          </div>
          <div className="admin-detail-row">
            <strong>Details</strong>
            <p>{contact.details}</p>
          </div>
          {contact.updatedAt !== contact.createdAt && (
            <div className="admin-detail-row">
              <strong>Last Updated</strong>
              <span>{new Date(contact.updatedAt).toLocaleString()}</span>
            </div>
          )}
        </div>
      </div>

      <div className="admin-detail-card">
        <div className="admin-section-title"><h3>Actions</h3></div>
        <div className="admin-actions">
          {contact.status !== 'read' && (
            <button className="admin-btn admin-btn-info" onClick={() => updateStatus('read')}>
              Mark as Read
            </button>
          )}
          {contact.status !== 'replied' && (
            <button className="admin-btn admin-btn-success" onClick={() => updateStatus('replied')}>
              Mark as Replied
            </button>
          )}
          <button className="admin-btn admin-btn-danger" onClick={deleteContact} disabled={deleting}>
            {deleting ? 'Deleting…' : 'Delete'}
          </button>
        </div>
      </div>

      <div className="admin-detail-card">
        <div className="admin-section-title"><h3>Internal Notes</h3></div>
        <textarea
          className="admin-textarea"
          rows={5}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add internal notes about this lead…"
        />
        <button className="admin-btn admin-btn-primary" onClick={saveNotes} disabled={saving} style={{ marginTop: 12 }}>
          {saving ? 'Saving…' : 'Save Notes'}
        </button>
      </div>
    </div>
  )
}

export default function Admin() {
  const [view, setView] = useState('dashboard')
  const [selectedId, setSelectedId] = useState(null)
  const [authenticated, setAuthenticated] = useState(!!getToken())

  useEffect(() => {
    if (authenticated) {
      setView('dashboard')
    } else {
      setView('login')
    }
  }, [authenticated])

  useEffect(() => {
    const handler = () => setAuthenticated(false)
    window.addEventListener('auth:expired', handler)
    return () => window.removeEventListener('auth:expired', handler)
  }, [])

  const navigate = (v, id) => {
    setSelectedId(id || null)
    setView(v)
  }

  const handleLogout = () => {
    clearToken()
    setAuthenticated(false)
  }

  if (!authenticated) {
    return (
      <section className="section admin-page">
        <LoginForm onLogin={() => setAuthenticated(true)} />
      </section>
    )
  }

  return (
    <section className="section admin-page">
      <div className="admin-container">
        <aside className="admin-sidebar">
          <div className="admin-sidebar-brand">
            <h3>Admin Panel</h3>
          </div>
          <nav className="admin-nav">
            <button
              className={`admin-nav-item ${view === 'dashboard' ? 'active' : ''}`}
              onClick={() => navigate('dashboard')}
            >
              Dashboard
            </button>
            <button
              className={`admin-nav-item ${view === 'contacts' ? 'active' : ''}`}
              onClick={() => navigate('contacts')}
            >
              Leads
            </button>
          </nav>
          <div className="admin-sidebar-footer">
            <button className="admin-nav-item logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </aside>

        <main className="admin-main">
          {view === 'dashboard' && <Dashboard onNavigate={navigate} />}
          {view === 'contacts' && <Contacts onNavigate={navigate} />}
          {view === 'detail' && selectedId && (
            <ContactDetail id={selectedId} onBack={() => navigate('contacts')} />
          )}
        </main>
      </div>
    </section>
  )
}
