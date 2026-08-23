// Primeloop — shared Supabase client
// The anon key below is meant to be public (protected by Row Level Security policies).
const SUPABASE_URL = "https://kzdcugbrgkkkqgsfkcje.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJrZGN1Z2JyZ2tra3Nnc2ZrY2plIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc0MDUwNTAsImV4cCI6MjEwMjk4MTA1MH0.INyFiNN7Wjl5-oQfZ8U5NAsaUR3cqpR2UWSgIQgYSkA";

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str || '';
  return div.innerHTML;
}

function timeAgoOrDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function coverHtml(post, className = 'card-thumb') {
  const url = post && post.cover_gradient;
  if (url && /^https?:\/\//i.test(url)) {
    return `<div class="${className}" style="background-image:url('${escapeHtml(url)}');background-size:cover;background-position:center;"></div>`;
  }
  return `<div class="${className}"><span class="glyph">${escapeHtml(post && post.category ? post.category[0] : 'S')}</span></div>`;
}

function postCardHtml(post) {
  return `<article class="card"><a href="/post-template.html?slug=${encodeURIComponent(post.slug)}" style="display:contents;">${coverHtml(post)}<div class="card-body"><div class="card-meta"><span class="tag">${escapeHtml(post.category)}</span><span>·</span><span>${escapeHtml(post.read_time || '')}</span></div><h3>${escapeHtml(post.title)}</h3><p>${escapeHtml(post.excerpt || '')}</p></div></a></article>`;
}

async function loadFeaturedPost(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const { data, error } = await sb.from('posts').select('*').eq('published', true).order('published_at', { ascending: false }).limit(1).single();
  if (error || !data) {
    console.error('Featured post load failed:', error);
    el.style.display = 'none';
    return;
  }
  el.innerHTML = `${coverHtml(data)}<div><div class="card-meta"><span>${escapeHtml((data.category || '').toUpperCase())}</span><span>·</span><span>${escapeHtml(data.read_time || '')} READ</span></div><h3><a href="/post-template.html?slug=${encodeURIComponent(data.slug)}">${escapeHtml(data.title)}</a></h3><p style="color:var(--paper-dim);margin:14px 0 20px;">${escapeHtml(data.excerpt || '')}</p><a href="/post-template.html?slug=${encodeURIComponent(data.slug)}" class="btn btn-ghost">Read full review →</a></div>`;
}

async function loadLatestPosts(containerId, limit = 6, category = null) {
  const el = document.getElementById(containerId);
  if (!el) return;
  let query = sb.from('posts').select('*').eq('published', true).order('published_at', { ascending: false }).limit(limit);
  if (category) query = query.eq('category', category);
  const { data, error } = await query;
  if (error) {
    console.error('Latest posts load failed:', error);
    el.innerHTML = '<p style="color:var(--paper-dim);">Could not load posts right now.</p>';
    return;
  }
  if (!data || data.length === 0) {
    el.innerHTML = '<p style="color:var(--paper-dim);">No posts yet — check back soon.</p>';
    return;
  }
  el.innerHTML = data.map(postCardHtml).join('');
}
