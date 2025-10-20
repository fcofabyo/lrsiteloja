// --- Envio do formulário (apenas para alerta e reset) ---
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  let nome = document.getElementById('nome').value.trim();
  let cpf = document.getElementById('cpf').value.trim();
  let endereco = document.getElementById('endereco').value.trim();
  let veiculo = document.getElementById('veiculo').value.trim();
  let ano = document.getElementById('ano').value.trim();
  let problema = document.getElementById('problema').value.trim();

  if (nome && cpf && endereco && veiculo && ano && problema) {
    alert('Informações preenchidas com sucesso!');
    document.querySelector('form').reset();
  } else {
    alert('Por favor, preencha todos os campos!');
  }
});

// --- Efeito de fade-in ---
const elements = document.querySelectorAll('.fade-in');

function checkVisibility() {
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// --- Envio via WhatsApp ---
document.getElementById('whatsapp-link').addEventListener('click', function() {
  const nome = document.getElementById('nome').value.trim();
  const cpf = document.getElementById('cpf').value.trim();
  const endereco = document.getElementById('endereco').value.trim();
  const veiculo = document.getElementById('veiculo').value.trim();
  const ano = document.getElementById('ano').value.trim();
  const problema = document.getElementById('problema').value.trim();

  if (!nome || !cpf || !endereco || !veiculo || !ano || !problema) {
    alert('Por favor, preencha todos os campos antes de enviar pelo WhatsApp!');
    return;
  }

  const numeroWhatsapp = '5585986929920'; // Seu número real
  const mensagemPronta = 
`Olá! Meu nome é ${nome}.
CPF/CNPJ: ${cpf}
Endereço: ${endereco}
Veículo: ${veiculo}
Ano: ${ano}
Problema: ${problema}`;

  const linkWhatsapp = `https://wa.me/${5585986929920}?text=${encodeURIComponent(mensagemPronta)}`;

  // Abre o WhatsApp em nova aba
  window.open(linkWhatsapp, '_blank');
});

