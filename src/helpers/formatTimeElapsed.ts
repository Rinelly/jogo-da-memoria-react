/**
 * Converte um tempo em segundos para o formato "mm:ss".
 * 
 * @param seconds - Número total de segundos a serem convertidos.
 * @returns Uma string no formato "minutos:segundos", com dois dígitos por unidade.
 * 
 * @example
 * formatTimeElapsed(125); // "02:05"
 * formatTimeElapsed(9);   // "00:09"
 */
export const formatTimeElapsed = (seconds: number) => {
    let minutes = Math.floor(seconds / 60);
    seconds -= (minutes * 60);

    let secString = `${seconds < 10 ? '0' + seconds : seconds}`;

    let minString = `${minutes < 10 ? '0' + minutes : minutes}`;

    return `${minString}:${secString}`;
}