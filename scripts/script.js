console.log('script.js has been scripted');
// [name, animal]
var people = [{
        name: 'Canin',
        favoriteAnimal: 'Uniflitten'
    },
    {
        name: 'Charly',
        favoriteAnimal: 'Angler Fish'
    },
    {
        name: 'Bobby',
        favoriteAnimal: 'Liger'
    },
    {
        name: 'Luke',
        favoriteAnimal: 'Orca'
    }
    //   ['Canin', 'Uniflitten'],
    // ['Charly', 'Angler Fish'],
    //   ['Bobby', 'Liger'],
    //  ['Luke', 'Orca']
];

console.log(people);

//persons favorite animal is the 
for (var i = 0; i < people.length; i++) {
    var person = people[i];
    console.log(person.name + "'s favorite animal is the " + person.favoriteAnimal);

}