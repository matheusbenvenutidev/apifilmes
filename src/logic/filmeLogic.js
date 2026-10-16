import * as filmeRepository from "../repositories/filmeRepository.js";
export function listarFilmes() {
  return filmeRepository.listar();
}
