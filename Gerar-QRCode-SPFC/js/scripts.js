  // Encapsulamento para evitar poluição global
  (() => {
    const container = document.querySelector('.container');
    const qrCodeBtn = document.querySelector('#qr-form button');
    const qrCodeInput = document.querySelector('#qr-form input');
    const qrCodeImg = document.querySelector('#qr-code img');
    const QR_CODE_API = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
    const audio = document.querySelector('#audio');
  
    function handleGenerateQrCode() {
      const inputValue = qrCodeInput.value.trim();
      if (!inputValue) return;
      qrCodeBtn.innerText = 'Gerando QR Code ...';
      qrCodeImg.src = `${QR_CODE_API}${encodeURIComponent(inputValue)}`;
      qrCodeImg.onload = () => {
        container.classList.add('active');
        qrCodeBtn.innerText = 'Código Criado!';
      };
      qrCodeImg.onerror = () => {
        qrCodeBtn.innerText = 'Erro ao gerar QR Code!';
      };
    }
  
    function handleInputKeydown(e) {
      if (e.code === 'Enter') {
        e.preventDefault();
        handleGenerateQrCode();
      }
    }
  
    function handleInputKeyup() {
      if (!qrCodeInput.value.trim()) {
        container.classList.remove('active');
        qrCodeBtn.innerText = 'Gerar QR Code';
      }
    }
  
    qrCodeBtn.addEventListener('click', handleGenerateQrCode);
    qrCodeInput.addEventListener('keydown', handleInputKeydown);
    qrCodeInput.addEventListener('keyup', handleInputKeyup);
  })();


  document.getElementById("cpf-input").addEventListener("input", function () {
      let cpf = this.value.replace(/\D/g, ""); // Remove caracteres não numéricos
      if (cpf.length > 11) cpf = cpf.substring(0, 11);

      // Formatação automática
      if (cpf.length >= 9) {
          this.value = `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(6, 9)}-${cpf.substring(9, 11)}`;
      } else if (cpf.length >= 6) {
          this.value = `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(6, 9)}`;
      } else if (cpf.length >= 3) {
          this.value = `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}`;
      } else {
          this.value = cpf;
      }
  });

  
  
  
  // Encapsulamento do código em uma função autoexecutável para evitar poluição do escopo global
  (() => {
    // Seletores dos principais elementos da interface
    const container = document.querySelector('.container');
    const qrCodeBtn = document.querySelector('#qr-form button');
    const qrCodeInput = document.querySelector('#qr-form input');
    const qrCodeImg = document.querySelector('#qr-code img');
    const QR_CODE_API = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
  
    // Função responsável por gerar o QR Code
    function gerarQrCode() {
    const inputValue = qrCodeInput.value.trim();
    if (!inputValue) return;

    const spinner = document.getElementById('loading-spinner');
    spinner.style.display = 'block';
    qrCodeImg.style.display = 'none';

    qrCodeBtn.innerText = 'Gerando QR Code ...';
    qrCodeImg.src = `${QR_CODE_API}${encodeURIComponent(inputValue)}`;

    qrCodeImg.onload = () => {
      spinner.style.display = 'none';
      qrCodeImg.style.display = 'block';
      container.classList.add('active');
      qrCodeBtn.innerText = 'Acesso via Qr Code Criado!';
      audio.play();
    };

    qrCodeImg.onerror = () => {
      spinner.style.display = 'none';
      qrCodeBtn.innerText = 'Erro ao gerar QR Code!';
    };
  }

  
    // Função para lidar com a tecla Enter no campo de input
    function aoPressionarEnter(e) {
      if (e.code === 'Enter') {
        // Previne o envio do formulário caso exista
        e.preventDefault();
        gerarQrCode();
      }
    }
  
    // Função para resetar o estado visual caso o input fique vazio
    function aoDigitarInput() {
      if (!qrCodeInput.value.trim()) {
        container.classList.remove('active');
        qrCodeBtn.innerText = 'Gerar QR Code';
      }
    }
  
    // Adiciona os event listeners apenas uma vez
    qrCodeBtn.addEventListener('click', gerarQrCode);
    qrCodeInput.addEventListener('keydown', aoPressionarEnter);
    qrCodeInput.addEventListener('keyup', aoDigitarInput);
  
    // Comentários:
    // - O código agora está encapsulado, evitando conflitos de variáveis globais.
    // - O tratamento de erro foi adicionado para feedback ao usuário.
    // - Validação aprimorada do input (trim).
    // - Event listeners organizados fora da função principal.
    // - Uso de constantes para strings fixas.
  })();
  
  //adicionando audio dentro do site

  const bgMusic = document.getElementById('bg-music');
  const volumeControl = document.getElementById('volume');

  volumeControl.addEventListener('input', () => {
    bgMusic.volume = volumeControl.value;
  });