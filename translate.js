
    document.getElementById('translateButton').addEventListener('click', function() {
        var elements = document.querySelectorAll('[data-translate]');
        var isFrench = elements.length > 0 && elements[0].getAttribute('data-translate') === 'fr';

        elements.forEach(function(element) {
            if (isFrench) {
                element.textContent = element.getAttribute('data-en');
                element.setAttribute('data-translate', 'en');
            } else {
                element.textContent = element.getAttribute('data-fr');
                element.setAttribute('data-translate', 'fr');
            }
        });

        var button = document.getElementById('translateButton');
        if (isFrench) {
            button.textContent = 'Translate to French';
        } else {
            button.textContent = 'Traduire en Anglais';
        }
    });

    // Gestion des clics sur les liens
    document.getElementById('showInscription').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('inscriptionForm').style.display = 'block';
        document.getElementById('connectionForm').style.display = 'none';
        document.getElementById('exerciceForm').style.display = 'none';
    });

    document.getElementById('showConnection').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('connectionForm').style.display = 'block';
        document.getElementById('inscriptionForm').style.display = 'none';
        document.getElementById('exerciceForm').style.display = 'none';
    });

    document.getElementById('showExercice').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('exerciceForm').style.display = 'block';
        document.getElementById('inscriptionForm').style.display = 'none';
        document.getElementById('connectionForm').style.display = 'none';
    });

