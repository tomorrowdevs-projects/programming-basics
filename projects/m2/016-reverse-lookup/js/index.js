function reverseLookup(dictionary, value){
    const keys = Object.keys( dictionary ).filter( key => {
        return dictionary[key] === value;
    });

    return keys;
}

if( require.main === module ){
    function init(){

        const gamesDistributionPlatforms = {
            'pc': 'Tekken 8',
            'ps4': 'Tekken 8',
            'ps5': 'Tekken 8',
            'switch': 'Pikmin 4',
            'xboxseriesx': 'The Crew Motorfest',
            'xboxOne': 'The Crew Motorfest',
        };

        console.log( reverseLookup(gamesDistributionPlatforms, 'Tekken 8') );
        console.log( reverseLookup(gamesDistributionPlatforms, 'Pikmin 4') );
        console.log( reverseLookup(gamesDistributionPlatforms, 'Zelda') );
    }
    init();
}