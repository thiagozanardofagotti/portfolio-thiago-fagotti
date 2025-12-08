// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function() {
    
    // Verifica se estamos na página de contato procurando o formulário
    const form = document.getElementById("form-contato");

    // Só executa o código se o formulário existir na página atual
    if (form) {
        form.addEventListener("submit", function(event) {
            // Impede o envio padrão do formulário (que recarregaria a página)
            event.preventDefault();

            // 1. Captura os valores dos campos
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            // 2. Validação dos Campos
            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos obrigatórios.");
                return;
            }

            // 3. Validação de formato de E-mail simples
            if (!email.includes("@") || !email.includes(".")) {
                alert("Por favor, insira um e-mail válido.");
                return;
            }

            // 4. Simulação de Envio e Feedback
            alert("Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso.");

            // 5. Limpar o formulário após o envio
            form.reset();
        });
    }
});