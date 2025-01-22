export function calendar() {
    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            locale: 'fr', // Définit la langue en français
            firstDay: 1,  // Commence la semaine par lundi
            events: [
                {
                    title: 'Séance d\'info TIC',
                    start: '2025-01-20', // Date de début
                    end: '2025-01-23', // Date de fin
                    classNames: ['event-info-tic']
                },
                {
                    title: 'Formation Python - Niveau débutant',
                    start: '2025-01-20',
                    end: '2025-01-23',
                    classNames: ['event-python-deb']
                },
                {
                    title: 'Formation Photoshop - Niveau débutant',
                    start: '2025-01-20',
                    end: '2025-01-23',
                    classNames: ['event-photoshop-deb']
                },
                {
                    title: 'Formation Premiere Pro - Niveau débutant',
                    start: '2025-01-20',
                    end: '2025-01-22',
                    classNames: ['event-premierePro-deb']
                },
                {
                    title: 'Formation WordPress - Niveau débutant',
                    start: '2025-01-23',
                    end: '2025-01-24',
                    classNames: ['event-wordPress-deb']
                },
                {
                    title: 'Formation WordPress - Niveau avancé',
                    start: '2025-01-23',
                    classNames: ['event-wordPress-avance']
                },
                {
                    title: 'Formation Google AdWords - Niveau débutant',
                    start: '2025-01-24',
                    classNames: ['event-adWords-deb']
                },
                {
                    title: 'Formation Google Analytics - Niveau débutant',
                    start: '2025-01-27',
                    end: '2025-01-29',
                    classNames: ['event-analytics-deb']
                },
                {
                    title: 'Formation Réseaux Sociaux - Niveau débutant',
                    start: '2025-01-27',
                    end: '2025-01-29',
                    classNames: ['event-reseauxSoc-deb']
                },
                {
                    title: 'Formation HTML - Niveau débutant',
                    start: '2025-01-27',
                    end: '2025-01-30',
                    classNames: ['event-html-deb']
                },
                {
                    title: 'Formation InDesign - Niveau débutant',
                    start: '2025-01-27',
                    end: '2025-01-29',
                    classNames: ['event-indesign-deb']
                },
                {
                    title: 'Formation Shopify - Niveau débutant',
                    start: '2025-01-27',
                    end: '2025-01-30',
                    classNames: ['event-shopify-deb']
                },
                {
                    title: 'Formation Illustrator - Niveau débutant',
                    start: '2025-01-30',
                    end: '2025-01-31',
                    classNames: ['event-ilustrator-deb']
                },
                {
                    title: 'Formation Réseaux Sociaux - Niveau avancé',
                    start: '2025-01-30',
                    end: '2025-01-31',
                    classNames: ['event-reseauxSoc-avance']
                },
                {
                    title: 'Formation Shopify - Niveau avancé',
                    start: '2025-01-30',
                    end: '2025-01-31',
                    classNames: ['event-shopify-avance']
                },
                {
                    title: 'Formation Audition - Niveau débutant',
                    start: '2025-02-03',
                    end: '2025-02-06',
                    classNames: ['event-audition-deb']
                },
                {
                    title: 'Formation Premiere Pro - Niveau débutant',
                    start: '2025-02-03',
                    end: '2025-02-06',
                    classNames: ['event-premierePro-deb']
                },
                {
                    title: 'Formation JavaScript - Niveau débutant',
                    start: '2025-02-03',
                    end: '2025-02-06',
                    classNames: ['event-javascript-deb']
                },
                {
                    title: 'Formation After Effect - Niveau débutant',
                    start: '2025-02-03',
                    end: '2025-02-05',
                    classNames: ['event-afterEffect-deb']
                },
                {
                    title: 'Formation WordPress - Niveau débutant',
                    start: '2025-02-06',
                    end: '2025-02-07',
                    classNames: ['event-wordPress-deb']
                },
                {
                    title: 'Formation WordPress - Niveau avancé',
                    start: '2025-02-06',
                    classNames: ['event-wordPress-avance']
                },
                {
                    title: 'Formation Google AdWords - Niveau débutant',
                    start: '2025-02-07',
                    classNames: ['event-adWords-deb']
                },
                {
                    title: 'Formation Google Analytics - Niveau débutant',
                    start: '2025-02-10',
                    end: '2025-02-13',
                    classNames: ['event-analytics-deb']
                },
                {
                    title: 'Formation Python - Niveau débutant',
                    start: '2025-02-10',
                    end: '2025-02-12',
                    classNames: ['event-python-deb']
                },
                {
                    title: 'Formation Réseaux Sociaux - Niveau débutant',
                    start: '2025-02-10',
                    end: '2025-02-13',
                    classNames: ['event-reseauxSoc-deb']
                }
            ]
        });
        calendar.render();
    });
}
