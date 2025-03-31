//onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (�\u2019\u0153) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the full URLs of all the sites in the ring
var sites = [
    'https://dears.nekoweb.org',
    'https://pawpyrus.art',
    'https://harlequi.nz',
    'https://milkyway.moe',
    'https://eggwichwithbacons.nekoweb.org',
    'https://demgoze.nekoweb.org',
    'https://yumeoi.skin',
    'https://soulwebb.ing',
    'https://rollergirlz.nekoweb.org',
    'https://pussydestroyer2000.nekoweb.org',
    'https://ddnikki.nekoweb.org',
    'https://darkosparko.nekoweb.org',
    'https://pastel-skies.nekoweb.org',
    'https://viscera.nekoweb.org',
    'https://electric-tenshi.nekoweb.org',
    'https://pkmn.nekoweb.org',
    'https://snailburger.neocities.org',
    'https://zziz.nekoweb.org',
    'https://gattonero.moe',
    'https://moondvsted.space',
    'https://scythe.nekoweb.org',
    'https://dreamscape.nekoweb.org',
    'https://amoreangelico.nekoweb.org',
    'https://mechagic.party',
    'https://wolfsbane.nekoweb.org',
    'https://st4rboy.neocities.org',
    'https://comintoo.nekoweb.org',
    'https://foolcrum57.nekoweb.org',
    'https://lydels.neocities.org/',
    'https://teatimes.neocities.org',
    'https://dragovz.neocities.org/',
    'https://namsu.nekoweb.org/',
    'https://babycarrot.nekoweb.org/',
    'https://halcybutton.nekoweb.org',
    'https://lenkito.nekoweb.org/',
    'https://garyswod.nekoweb.org/',
    ];
    
    //the name of the ring
    var ringName = 'S/I Webring';
    
    /* the unique ID of the widget. two things to note:
     1) make sure there are no spaces in it - use dashes or underscores if you must
     2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
    var ringID = 'siwebring';
    
    //should the widget include a link to an index page?
    var useIndex = false;
    
    //should the widget include a random button?
    var useRandom = false;