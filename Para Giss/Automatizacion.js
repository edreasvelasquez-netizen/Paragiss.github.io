window.onload = () => {
    const parrafos = document.querySelectorAll('.interactivo-premium');

    parrafos.forEach(p => {
        // 1. Agarramos el texto, quitamos espacios extras y lo dividimos
        const palabras = p.innerText.trim().split(/\s+/);
        
        // 2. Limpiamos el párrafo
        p.innerHTML = '';

        // 3. Metemos cada palabra en un span individualmente
        palabras.forEach(palabra => {
            const span = document.createElement('span');
            span.textContent = palabra + ' '; // Agregamos espacio después de la palabra
            p.appendChild(span);
        });
    });
};