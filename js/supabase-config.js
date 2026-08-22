// SignalStack — shared Supabase client
// The anon key below is meant to be public (protected by Row Level Security policies).
const SUPABASE_URL = "https://kzdcugbrgkkkqgsfkcje.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6ZGN1Z2JyZ2tra3Fnc2ZrY2plIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc0MDUwNTAsImV4cCI6MjEwMjk4MTA1MH0.INyFiNNW7jl5-oQfZ8U5NAsaUR3cqpR2UWSgIQgYSkA";

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ---------- Shared render helpers ----------
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str || '';
  return div.innerHTML;
}

function timeAgoOrDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function postCardHtml(post) {
  return `
    <article class="card">
      <a href="/posts/${post.slug}" style="display:contents;">
        <div class="card-thumb"><span class="glyph">${escapeHtml(post.category ? post.category[0] : 'S')}</span></div>
        <div class="card-body">
          <div class="card-meta"><span class="tag">${escapeHtml(post.category)}</span><span>·</span><span>${escapeHtml(post.read_time || '')}</span></div>
          <h3>${escapeHtml(post.title)}</h3>
          <p>${escapeHtml(post.excerpt || '')}</p>
        </div>
      </a>
    </article>`;
}

async function loadFeaturedPost(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const { data, error } = await sb.from('posts').select('*').eq('published', true).order('published_at', { ascending: false }).limit(1).single();
  if (error || !data) { el.style.display = 'none'; return; }
  el.innerHTML = `
    <div class="card-thumb"><span class="glyph">${escapeHtml(data.category ? data.category[0] : 'S')}</span></div>
    <div>
      <div class="card-meta"><span>${escapeHtml((data.category||'').toUpperCase())}</span><span>·</span><span>${escapeHtml(data.read_time||'')} READ</span></div>
      <h3><a href="/posts/${data.slug}">${escapeHtml(data.title)}</a></h3>
      <p style="color:var(--paper-dim); margin:14px 0 20px;">${escapeHtml(data.excerpt||'')}</p>
      <a href="/posts/${data.slug}" class="btn btn-ghost">Read full review →</a>
    </div>`;
}
  const el = document.getElementById(containerId);
  if (!el) return;
  let query = sb.from('posts').select('*').eq('published', true).order('published_at', { ascending: false }).limit(limit);
  if (category) query = query.eq('category', category);
  const { data, error } = await query;
  if (error) { console.error(error); el.innerHTML = '<p style="color:var(--paper-dim);">Could not load posts right now.</p>'; return; }
  if (!data || data.length === 0) { el.innerHTML = '<p style="color:var(--paper-dim);">No posts yet — check back soon.</p>'; return; }
  el.innerHTML = data.map(postCardHtml).join('');
}
