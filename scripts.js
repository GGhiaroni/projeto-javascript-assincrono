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

const inputTags = document.getElementById("input-tags");
const listaDeTags = document.getElementById("lista-tags");

inputTags.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        const tagTexto = inputTags.value.toLowerCase().trim();
        if (tagTexto !== "") {
            const novaTag = document.createElement("li");
            novaTag.classList.add("flex", "bg-corSecundaria", "text-corBackground", "gap-2", "py-1", "px-2", "rounded-md");
            novaTag.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg"/>`;
            listaDeTags.appendChild(novaTag);
        }
    }
});