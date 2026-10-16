import * as filmeLogic from "../logic/filmeLogic.js";

export async function listarFilmes(request, response) {
    try{
        const filmes = await filmeLogic.listarFilmes();

        return response.status(200).json(filmes);
    } catch (error) {
        console.error(`Erro ao listar filmes: ${error.message}`);

        return response.status(500).json({
            mensagem: "Erro interno do servidor",
        });
    }
}