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

listaDeTags.addEventListener('click', (e) => {
    if (e.target.classList.contains("remover-tag")) {
        const elementoASerRemovido = e.target.parentElement;
        listaDeTags.removeChild(elementoASerRemovido);
    }
});

const tagsDisponiveis = ["frontend", "backend", "fullstack", "html", "css", "tailwind", "javascript", "react", "next.js", "node.js"];

async function verificarTagsDisponiveis(tag) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tagsDisponiveis.includes(tag)); 
        }, 1000);
    });
}

inputTags.addEventListener('keypress', async (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        const tagTexto = inputTags.value.trim();
        if (tagTexto !== "") {
            try {
                const tagExiste = await verificarTagsDisponiveis(tagTexto);
                if (tagExiste) {
                    const novaTag = document.createElement("li");
                    novaTag.classList.add("flex", "bg-corSecundaria", "text-corBackground", "gap-2", "py-1", "px-2", "rounded-md");
                    novaTag.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remover-tag hover:cursor-pointer"/>`;
                    listaDeTags.appendChild(novaTag);
                    inputTags.value = "";
                } else {
                    alert("Tag não encontrada.");
                }
            } catch (error) {
                console.error("Erro ao verificar a existência da tag.");
                alert("Erro ao verificar a existência da tag. Verifique o console.");
            }
        }
    }
});

const botaoPublicar = document.querySelector(".botao-publicar");

async function publicarProjeto (nomeDoProjeto, descricaoDoProjeto, tagsDoProjeto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deuCerto = Math.random() > 0.5;

            if (deuCerto) {
                resolve("Projeto publicado com sucesso!");
            } else {
                reject("Erro ao publicar o projeto!");
            }
        }, 2000);
    });
}

botaoPublicar.addEventListener('click', async (e) => {
    e.preventDefault();

    const nomeDoProjeto = document.getElementById("nome").value;
    const descricaoDoProjeto = document.getElementById("descricao").value;
    const tagsDoProjeto = Array.from(listaDeTags.querySelectorAll("p")).map((tag) => tag.textContent);

    try {
        const resultado = await publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsDoProjeto);
        console.log(resultado);
        alert("Deu tudo certo na publicação do projeto!");

        const formulario = document.getElementById("formulario");
        formulario.reset();
        listaDeTags.innerHTML = "";
    } catch (error) {
        console.log("Um erro foi gerado na publicação do projeto: ", error);
        alert("Houve um erro com a publicação do projeto!");
    }
});

const botaoDescartar = document.querySelector(".botao-descartar");

botaoDescartar.addEventListener('click', (e) => {
    e.preventDefault();

    const formulario = document.getElementById("formulario");
    formulario.reset();

    imagemProjeto.src = "./img/imagem1.png";
    nomeProjeto.textContent = "imagem_projeto.png";

    listaDeTags.innerHTML = "";
});

