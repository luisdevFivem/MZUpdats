const $ = (id) => document.getElementById(id);

async function carregar() {
  try {
    const resposta = await fetch('updates.json', { cache: 'no-store' });
    if (!resposta.ok) throw new Error('Não foi possível carregar updates.json');
    const dados = await resposta.json();

    $('projeto').textContent = dados.projeto || 'MZ Updates';
    $('descricao').textContent = dados.descricao || '';
    $('versao').textContent = dados.versaoAtual || '—';
    $('data').textContent = dados.ultimaAtualizacao || '—';
    document.title = dados.projeto || 'MZ Updates';

    $('lista').innerHTML = (dados.atualizacoes || []).map(item => `
      <article class="card">
        <div class="card-head">
          <div>
            <div class="version">v${esc(item.versao)}</div>
            <h3>${esc(item.titulo || 'Atualização')}</h3>
          </div>
          <time>${esc(item.data || '')}</time>
        </div>
        ${(item.mudancas || []).map(m => `
          <div class="change">
            <span class="tag ${tipo(m.tipo)}">${esc(m.tipo)}</span>
            <span>${esc(m.texto)}</span>
          </div>`).join('')}
      </article>`).join('');
  } catch (erro) {
    $('lista').innerHTML = `<div class="error">${esc(erro.message)}</div>`;
  }
}
function tipo(v=''){return ['adicionado','melhorado','corrigido'].includes(v.toLowerCase())?v.toLowerCase():'melhorado'}
function esc(v=''){const d=document.createElement('div');d.textContent=String(v);return d.innerHTML}
$('ano').textContent = new Date().getFullYear();
carregar();
