const uploadBtn = document.getElementById("upload-button");
const uploadInput = document.getElementById("upload-input");

uploadBtn.addEventListener('click', () => {
    uploadInput.click();
});

function lerConteudoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => {
            resolve({ url: leitor.result, nome: arquivo.name });
        }

        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`);
        }

        leitor.readAsDataURL(arquivo);
    });
};

const imagemProjeto = document.getElementById("imagem-projeto");
const nomeProjeto = document.getElementById("nome-projeto");

uploadInput.addEventListener('change', async (e) => {
    const arquivoRecebido = e.target.files[0];

    if (arquivoRecebido) {
        try {
            const conteudoDoArquivo = await lerConteudoArquivo(arquivoRecebido);
            imagemProjeto.src = conteudoDoArquivo.url;
            nomeProjeto.textContent = conteudoDoArquivo.nome;
        } catch (error) {
            console.error("Erro ao subir a imagem.");
        }
    }
});