translations = {
    'en': {
        'company-name': 'Orasimos Beekeeping',
        'our-apiary': 'Our Apiary',
        'our-apiary-text': 'Our apiary was established in 2024. Locating it in remote cretan sites away from pollution allows our bees to produce the best organic honey.',
        'our-bees': 'Our Bees',
        'our-bees-text': 'Our pollinators are located in their natural habitat. This way they are able to collect the purest pollen free of polutants and simultaneously help preserve the native flora of crete.',
        'our-honey': 'Our Honey',
        'our-honey-text': 'In our strive for excellence we do not relocate our bees hunting for the prospering flora of each season. This way our bees produce the purest honey from plants currently thriving in each location enabling us to be carbon neutral.',
        'header-products': 'Products',
        'header-about': 'About Us',
        'header-contact': 'Contact',
    },
    'gr': {
        'company-name': 'Μελισσοκομία Orasimos',
        'our-apiary': 'Τα Μελίσσια μας',
        'our-apiary-text': 'Το μελισσοκομείο μας ιδρύθηκε το 2024. Η τοποθεσία του σε απομακρυσμένα σημεία της Κρήτης, μακριά από ρύπανση, επιτρέπει στις μέλισσές μας να παράγουν το καλύτερο βιολογικό μέλι.',
        'our-bees': 'Οι μέλισσές μας',
        'our-bees-text': 'Οι επικονιαστές μας βρίσκονται στο φυσικό τους οικοτόπο. Έτσι, είναι σε θέση να συλλέγουν την καθαρότερη γύρη, ελεύθερη από ρύπους, και ταυτόχρονα συμβάλλουν στη διατήρηση της ντόπιας χλωρίδας της Κρήτης.',
        'our-honey': 'Το μέλι μας',
        'our-honey-text': 'Στην προσπάθειά μας για αριστεία, δεν μετακινούμε τις μέλισσές μας κυνηγώντας την ανθισμένη χλωρίδα κάθε εποχής. Έτσι, οι μέλισσές μας παράγουν το καθαρότερο μέλι από φυτά που ανθίζουν στον κάθε τόπο, επιτρέποντάς μας να είμαστε ουδέτεροι σε εκπομπές άνθρακα.',
        'header-products': 'Προϊόντα',
        'header-about': 'Ποιοι είμαστε',
        'header-contact': 'Επικοινωνία',
    }
}

function translate(lang) {
    document.querySelectorAll('[data-translate]').forEach(e => {
        let key = e.getAttribute('data-translate');
        e.textContent = translations[lang][key];
    })
}