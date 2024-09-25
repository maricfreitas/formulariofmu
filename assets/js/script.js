document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const bookBtn = document.getElementById('book');
    const sendFormBtn = document.getElementById('send-form');

    const books = {
        Romance: ['Orgulho e Preconceito - Jane Austen', 'A Culpa é das Estrelas - John Green'],
        Ação: ['Os Homens que Não Amavam as Mulheres - Stieg Larsson', 'O Código Da Vinci - Dan Brown'],
        Suspense: ['A Garota no Trem - Paula Hawkins', 'A Verdade Sobre o Caso Harry Quebert - Joël Dicker'],
        Ficção: ['Duna - Frank Herbert', 'Fahrenheit 451 - Ray Bradbury'],
        Fantasia: ['O Senhor dos Anéis - J.R.R. Tolkien', 'Harry Potter e a Pedra Filosofal - J.K. Rowling'],
        Biografia: ['O Diário de Anne Frank - Anne Frank', 'Malala: A Menina que Queria Ir Para a Escola - Malala Yousafzai'],
        Histórico: ['Os Pilares da Terra - Ken Follett', 'A Guerra dos Tronos - George R.R. Martin'],
        Terror: ['It: A Coisa - Stephen King', 'O Iluminado - Stephen King'],
        Aventura: ['As Crônicas de Nárnia - C.S. Lewis', 'Percy Jackson e os Olimpianos - Rick Riordan'],
        Policial: ['O Silêncio dos Inocentes - Thomas Harris', 'A Garota no Trem - Paula Hawkins']
    };

    const suggestBooks = () => {
        const selectedCategories = Array.from(form.querySelectorAll('input[name="categoria"]:checked'))
            .map(checkbox => checkbox.value); 

        if (selectedCategories.length > 0) {
            const suggestedBooks = []; 

            selectedCategories.forEach(category => {
                if (books[category]) {
                    const randomBook = books[category][Math.floor(Math.random() * books[category].length)];
                    suggestedBooks.push(randomBook);
                }
            });

            if (suggestedBooks.length > 0) {
                alert(`Sugestões de Livros: ${suggestedBooks.join(', ')}`);
            }
        } else {
            alert('Por favor, selecione pelo menos uma categoria.');
        }
    };

    bookBtn.addEventListener('click', function(e) {
        e.preventDefault(); 
        suggestBooks();  
    });

    sendFormBtn.addEventListener('click', function(e) {
        form.submit();
        alert('Formulário enviar com sucesso');
    });
});
