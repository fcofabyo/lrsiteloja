document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let mensagem = document.getElementById('mensagem').value;
  
  if (nome && email && mensagem) {
    alert('Mensagem enviada com sucesso!');
    document.querySelector('form').reset();  // Limpar o formulário
  } else {
    alert('Por favor, preencha todos os campos!');
  }
});

// Função para mostrar elementos com efeito de fade-in
const elements = document.querySelectorAll('.fade-in');

function checkVisibility() {
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      element.classList.add('visible');
    }
  });
}

// Chama a função ao rolar ou carregar a página
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Quando o botão "Enviar via WhatsApp" for clicado
document.getElementById('whatsapp-link').addEventListener('click', function() {
  const nome = document.getElementById('nome').value;
  const mensagem = document.getElementById('mensagem').value;

  // Número de telefone do WhatsApp (substitua pelo número real)
  const numeroWhatsapp = '5585986929920';  // Seu número de WhatsApp real

  // Criar o link do WhatsApp com a mensagem
  const mensagemPronta = `Olá, meu nome é ${nome} e gostaria de pedir: ${mensagem}`;
  const linkWhatsapp = `https://wa.me/${5585986929920}?text=${encodeURIComponent(mensagemPronta)}`;

  // Redireciona para o WhatsApp
  window.open(linkWhatsapp, '_blank');  // Abre o link em uma nova aba
});
