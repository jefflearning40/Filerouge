$(document).ready(function() {
    $('#inscriptionForm form').on('submit', function(event) {
        event.preventDefault(); // Empêche la soumission normale du formulaire

        // Validation du formulaire
        var nom = $('#nom').val();
        var email = $('#email').val();
        var adresse = $('#adresse').val();
        var telephone = $('#telephone').val();
        var rgpdConsent = $('#rgpdConsent').is(':checked');

        if (nom && email && adresse && telephone && rgpdConsent) {
            // Si le formulaire est valide, afficher un message de succès
            $('#messageModalLabel').text('Succès');
            $('#messageModalBody').text('Votre inscription a été enregistrée avec succès.');
            $('#messageModal').modal('show');
        } else {
            // Si le formulaire n'est pas valide, afficher un message d'erreur
            $('#messageModalLabel').text('Erreur');
            $('#messageModalBody').text('Veuillez remplir tous les champs correctement et accepter le traitement de vos données.');
            $('#messageModal').modal('show');
        }
    });

    // Gestionnaire d'événements pour le bouton "Fermer" du modal
    $('#messageModal').on('hidden.bs.modal', function () {
        $('#inscriptionForm').hide(); // Masquer le formulaire d'inscription
    });
});
