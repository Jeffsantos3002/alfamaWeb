// Validação formulário 1
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        let valid = true;

        // Validar Nome
        const name = form.querySelector('#name');
        if (name.value.trim() === '') {
            showError(name, 'O nome é obrigatório.');
            valid = false;
        } else {
            clearError(name);
        }

        // Validar Estado
        const estado = form.querySelector('#estado');
        if (estado.value === '') {
            showError(estado, 'O estado é obrigatório.');
            valid = false;
        } else {
            clearError(estado);
        }

        // Validar Telefone
        const telefone = form.querySelector('#telefone');
        const telefonePattern = /^[0-9]{10,11}$/; // Ajuste o padrão conforme necessário
        if (telefone.value.trim() === '') {
            showError(telefone, 'Campo obrigatório');
            valid = false;
        } else if (!telefonePattern.test(telefone.value)) {
            showError(telefone, 'Telefone inválido.');
            valid = false;
        } else {
            clearError(telefone);
        }

        // Validar E-mail
        const email = form.querySelector('#email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            showError(email, 'Campo obrigatório');
            valid = false;
        } else if (!emailPattern.test(email.value)) {
            showError(email, 'E-mail inválido.');
            valid = false;
        } else {
            clearError(email);
        }

        // Validar Valor do Precatório
        const precatorio = form.querySelector('#precatorio');
        const regex = /^[0-9,.]+$/;
        if (precatorio.value.trim() === '') {
            showError(precatorio, 'O valor do precatório é obrigatório.');
            valid = false;
        } else if (!regex.test(precatorio.value)) {
            showError(precatorio, 'O valor do precatório não é válido.');
            valid = false;
        } else {
            clearError(precatorio);
        }

        // Validar Número do Processo
        const processo = form.querySelector('#processo');
        if (processo.value.trim() === '') {
            showError(processo, 'O número do processo é obrigatório.');
            valid = false;
        } else {
            clearError(processo);
        }
        
        if (valid) {
            sendFormData();
        }
    });

    function showError(element, message) {
        let error = element.nextElementSibling;
        if (!error || !error.classList.contains('error-message')) {
            error = document.createElement('div');
            error.classList.add('error-message');
            element.parentNode.appendChild(error);
        }
        error.textContent = message;
        error.style.color = '#065C99';
    }

    function clearError(element) {
        let error = element.nextElementSibling;
        if (error && error.classList.contains('error-message')) {
            error.remove();
        }
    }

    function sendFormData() {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', './mails/envio.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                console.log("mensagem", xhr.status)
                if (xhr.status === 200) {
                    // Aqui você pode exibir uma mensagem de sucesso para o usuário
                    alert('Formulário enviado com sucesso!');
                    form.reset(); // Limpa o formulário
                } else {
                    // Aqui você pode exibir uma mensagem de erro para o usuário
                    alert('Ocorreu um erro ao enviar o formulário.');
                }
            }
        };

        const formData = new FormData(form);
        xhr.send(new URLSearchParams(formData).toString());
    }
});

// Validação formulário 2
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contactForm-2');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        let valid = true;

        // Validar Nome
        const name = form.querySelector('#name-2');
        if (name.value.trim() === '') {
            showError(name, 'O nome é obrigatório.');
            valid = false;
        } else {
            clearError(name);
        }

        // Validar Estado
        const estado = form.querySelector('#estado-2');
        if (estado.value === '') {
            showError(estado, 'O estado é obrigatório.');
            valid = false;
        } else {
            clearError(estado);
        }

        // Validar Telefone
        const telefone = form.querySelector('#telefone-2');
        const telefonePattern = /^[0-9]{10,11}$/; // Ajuste o padrão conforme necessário
        if (telefone.value.trim() === '') {
            showError(telefone, 'Campo obrigatório');
            valid = false;
        } else if (!telefonePattern.test(telefone.value)) {
            showError(telefone, 'Telefone inválido.');
            valid = false;
        } else {
            clearError(telefone);
        }

        // Validar E-mail
        const email = form.querySelector('#email-2');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            showError(email, 'Campo obrigatório');
            valid = false;
        } else if (!emailPattern.test(email.value)) {
            showError(email, 'E-mail inválido.');
            valid = false;
        } else {
            clearError(email);
        }

        // Validar Valor do Precatório
        const precatorio = form.querySelector('#precatorio-2');
        const regex = /^[0-9,.]+$/;
        if (precatorio.value.trim() === '') {
            showError(precatorio, 'O valor do precatório é obrigatório.');
            valid = false;
        } else if (!regex.test(precatorio.value)) {
            showError(precatorio, 'O valor do precatório não é válido.');
            valid = false;
        } else {
            clearError(precatorio);
        }

        // Validar Número do Processo
        const processo = form.querySelector('#processo-2');
        if (processo.value.trim() === '') {
            showError(processo, 'O número do processo é obrigatório.');
            valid = false;
        } else {
            clearError(processo);
        }
        
        if (valid) {
            sendFormData();
        }
    });

    function showError(element, message) {
        let error = element.nextElementSibling;
        if (!error || !error.classList.contains('error-message')) {
            error = document.createElement('div');
            error.classList.add('error-message');
            element.parentNode.appendChild(error);
        }
        error.textContent = message;
        error.style.color = '#065C99';
    }

    function clearError(element) {
        let error = element.nextElementSibling;
        if (error && error.classList.contains('error-message')) {
            error.remove();
        }
    }

    function sendFormData() {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', './mails/envio.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                console.log("mensagem", xhr.status)
                if (xhr.status === 200) {
                    // Aqui você pode exibir uma mensagem de sucesso para o usuário
                    alert('Formulário enviado com sucesso!');
                    form.reset(); // Limpa o formulário
                } else {
                    // Aqui você pode exibir uma mensagem de erro para o usuário
                    alert('Ocorreu um erro ao enviar o formulário.');
                }
            }
        };

        const formData = new FormData(form);
        xhr.send(new URLSearchParams(formData).toString());
    }
});


// animação colpso

document.querySelectorAll('.arrow-link').forEach(link => {
    link.addEventListener('click', function() {
      // Seleciona o ícone de seta dentro do link clicado
      const arrowIcon = this.querySelector('.arrow-icon');
      // Adiciona ou remove a classe de rotação
      arrowIcon.classList.toggle('rotate-180');
      // Adiciona ou remove a classe para círculo
      this.classList.toggle('circle-none');
      console.log('foi');
    });
  });
  
  