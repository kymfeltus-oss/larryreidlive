// pages/lessons.js
import RequireAuth from '../components/RequireAuth';  // ✅ corrected path

export default function Lessons() {
  return (
    <RequireAuth>
      <div className="container">
        <h2>Christ Consciousness — Sample Lesson</h2>
        <div className="card">
          <h3>Awakening • Lesson 1</h3>
          <p>Watch the short teaching, then write a reflection.</p>

          <div
            style={{
              aspectRatio: '16/9',
              background: '#000',
              borderRadius: 12,
              overflow: 'hidden',
            }}
          >
            <iframe
              style={{ width: '100%', height: '100%' }}
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Lesson Video"
              allowFullScreen
            />
          </div>

          <textarea
            style={{ width: '100%', height: 120, marginTop: 12 }}
            placeholder="Your reflection... (prototype only, not saved)"
          />

          <button
            className="btn primary"
            style={{ marginTop: 8 }}
            onClick={() => alert('Prototype: saved locally.')}
          >
            Save Reflection
          </button>
        </div>
      </div>
    </RequireAuth>
  );
}
