document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('new-dog-button');
    const dogImage = document.getElementById('dog-image');
    const jsonResponse = document.getElementById('json-response');

    async function fetchDogImage() {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            dogImage.src = data.message;
            jsonResponse.textContent = JSON.stringify(data, null, 2);
        } catch (error) {
            console.error('Erro ao buscar imagem de cachorro:', error);
            jsonResponse.textContent = 'Erro ao buscar imagem de cachorro.';
        }
    }

    button.addEventListener('click', fetchDogImage);

    fetchDogImage();
});