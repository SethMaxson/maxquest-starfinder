var races = [];

const adjectives = [
	"shifty",
	"paranoid",
	"bubbly",
	"friendly",
	"loud",
	"obnoxious",
	"nosey",
	"creepy",
	"ill-tempered",
	"easily-distracted",
	"absent-minded",
	"political",
	"condescending",
	"panicky",
	"wise",
	"stupid",
	"monotone",
	"forgettable",
	"ugly",
	"shy",
	"quiet",
	"depressing",
	"uplifting",
	"wholesome",
	"intimidating",
	"disarming",
	"charming",
	"annoying"
];
const threat = [
	"very low",
	"low",
	"slightly low",
	"medium",
	"slightly high",
	"high",
	"very high"
];

/* Based on sfrpgtools characterGen.v2.1.js */
var AgeList =[
	'child',
	'young adult',
	'adult',
	'old'
];
var ProfessionList = [
	"Accountant",
	"Actor",
	"Archaeologist",
	"Architect",
	"Artist",
	"Builder",
	"Bounty Hunter",
	"Comedian",
	"Con Artist",
	"Cook",
	"Cop",
	"Corporate Professional",
	"Courtesan",
	"Counselor",
	"Dancer",
	"DJ",
	"Dockworker",
	"Electrician",
	"Engineer",
	"Factory Worker",
	"Farmer",
	"Gambler",
	"General Contractor",
	"Ghost Buster",
	"Hacker",
	"Herbalist",
	"Hologram Designer",
	"Holo Critic",
	"Hunter",
	"Illustrator",
	"Janitor",
	"Lab Technician",
	"Laser beam operator",
	"Lawyer",
	"Librarian",
	"Maintenance Worker",
	"Manager",
	"Masseuse",
	"Mathematician",
	"Mechanic",
	"Mercenary",
	"Merchant",
	"Miner",
	"Musician",
	"Orator",
	"Philosopher",
	"Pilot",
	"Plumber",
	"Poet",
	"Politician",
	"Professor",
	"Programmer",
	"Reporter",
	"Salesperson",
	"Smuggler",
	"Tech Support",
	"Therapist",
	"Tour Guide",
	"Video Personality",
	"Vidgamer",
	"Writer"
];
var PersonalityList = [
	"Accusative",
	"Active",
	"Adventurous",
	"Affable",
	"Aggressive",
	"Agreeable",
	"Aimless",
	"Aloof",
	"Altruistic",
	"Analytical",
	"Angry",
	"Animated",
	"Annoying",
	"Anxious",
	"Apathetic",
	"Apologetic",
	"Apprehensive",
	"Argumentative",
	"Arrogant",
	"Articulate",
	"Attentive",
	"Bigoted",
	"Bitter",
	"Blustering",
	"Boastful",
	"Bookish",
	"Bossy",
	"Braggart",
	"Brash",
	"Brave",
	"Bullying",
	"Callous",
	"Calm",
	"Candid",
	"Cantankerous",
	"Capricious",
	"Careful",
	"Careless",
	"Caring",
	"Casual",
	"Catty",
	"Cautious",
	"Cavalier",
	"Charming",
	"Chaste",
	"Chauvinistic",
	"Cheeky",
	"Cheerful",
	"Childish",
	"Chivalrous",
	"Clueless",
	"Clumsy",
	"Cocky",
	"Comforting",
	"Communicative",
	"Complacent",
	"Condescending",
	"Confident",
	"Conformist",
	"Confused",
	"Conscientious",
	"Conservative",
	"Contentious",
	"Contrary",
	"Contumely",
	"Conventional",
	"Cooperative",
	"Courageous",
	"Courteous",
	"Cowardly",
	"Coy",
	"Crabby",
	"Cranky",
	"Critical",
	"Cruel",
	"Cultured",
	"Curious",
	"Cynical",
	"Daring",
	"Deceitful",
	"Deceptive",
	"Defensive",
	"Defiant",
	"Deliberate",
	"Deluded",
	"Depraved",
	"Discreet",
	"Discreet",
	"Dishonest",
	"Disingenuous",
	"Disloyal",
	"Disrespectful",
	"Distant",
	"Distracted",
	"Distraught",
	"Docile",
	"Doleful",
	"Dominating",
	"Dramatic",
	"Drunkard",
	"Dull",
	"Earthy",
	"Eccentric",
	"Elitist",
	"Emotional",
	"Energetic",
	"Enigmatic",
	"Enthusiastic",
	"Epicurean",
	"Excited",
	"Expressive",
	"Extroverted",
	"Faithful",
	"Fanatical",
	"Fastidious",
	"Fatalistic",
	"Fearful",
	"Fearless",
	"Feral",
	"Fierce",
	"Feisty",
	"Flamboyant",
	"Flippant",
	"Flirtatious",
	"Foolhardy",
	"Foppish",
	"Forgiving",
	"Friendly",
	"Frightened",
	"Frivolous",
	"Frustrated",
	"Funny",
	"Furtive",
	"Generous",
	"Genial",
	"Gentle",
	"Gloomy",
	"Goofy",
	"Gossipy",
	"Graceful",
	"Gracious",
	"Grave",
	"Gregarious",
	"Grouchy",
	"Groveling",
	"Gruff",
	"Gullible",
	"Happy",
	"Harsh",
	"Hateful",
	"Helpful",
	"Honest",
	"Hopeful",
	"Hostile",
	"Humble",
	"Humorless",
	"Humorous",
	"Idealistic",
	"Idiosyncratic",
	"Imaginative",
	"Imitative",
	"Impatient",
	"Impetuous",
	"Implacable",
	"Impractical",
	"Impulsive",
	"Inattentive",
	"Incoherent",
	"Indifferent",
	"Indiscreet",
	"Individualist",
	"Indolent",
	"Indomitable",
	"Industrious",
	"Inexorable",
	"Inexpressive",
	"Insecure",
	"Insensitive",
	"Instructive",
	"Intolerant",
	"Intransigent",
	"Introverted",
	"Irreligious",
	"Irresponsible",
	"Irreverent",
	"Irritable",
	"Jealous",
	"Jocular",
	"Joking",
	"Jolly",
	"Joyous",
	"Judgmental",
	"Jumpy",
	"Kind",
	"Know-it-all",
	"Languid",
	"Lazy",
	"Lethargic",
	"Lewd",
	"Lying",
	"Likable",
	"Lippy",
	"Listless",
	"Loquacious",
	"Loving",
	"Loyal",
	"Lustful",
	"Madcap",
	"Magnanimous",
	"Malicious",
	"Maudlin",
	"Mean",
	"Meddlesome",
	"Melancholy",
	"Melodramatic",
	"Merciless",
	"Merry",
	"Meticulous",
	"Mischievous",
	"Miscreant",
	"Miserable",
	"Modest",
	"Moody",
	"Moralistic",
	"Morbid",
	"Morose",
	"Mournful",
	"Mousy",
	"Mouthy",
	"Mysterious",
	"Naive",
	"Narrow-minded",
	"Needy",
	"Nefarious",
	"Nervous",
	"Nettlesome",
	"Neurotic",
	"Noble",
	"Nonchalant",
	"Nurturing",
	"Obdurate",
	"Obedient",
	"Oblivious",
	"Obnoxious",
	"Obsequious",
	"Obsessive",
	"Obstinate",
	"Obtuse",
	"Odd",
	"Ornery",
	"Optimistic",
	"Organized",
	"Ostentatious",
	"Outgoing",
	"Overbearing",
	"Paranoid",
	"Passionate",
	"Pathological",
	"Patient",
	"Peaceful",
	"Pensive",
	"Pertinacious",
	"Pessimistic",
	"Philanderer",
	"Philosophical",
	"Phony",
	"Pious",
	"Playful",
	"Pleasant",
	"Poised",
	"Polite",
	"Pompous",
	"Pondering",
	"Pontificating",
	"Practical",
	"Prejudiced",
	"Pretentious",
	"Preoccupied",
	"Promiscuous",
	"Proper",
	"Proselytizing",
	"Proud",
	"Prudent",
	"Prudish",
	"Prying",
	"Puerile",
	"Pugnacious",
	"Quiet",
	"Quirky",
	"Racist",
	"Rascal",
	"Rash",
	"Realistic",
	"Rebellious",
	"Reckless",
	"Refined",
	"Repellent",
	"Reserved",
	"Respectful",
	"Responsible",
	"Restless",
	"Reticent",
	"Reverent",
	"Rigid",
	"Risk-taking",
	"Rude",
	"Sadistic",
	"Sarcastic",
	"Sardonic",
	"Sassy",
	"Savage",
	"Scared",
	"Scolding",
	"Secretive",
	"Self-effacing",
	"Selfish",
	"Selfless",
	"Senile",
	"Sensible",
	"Sensitive",
	"Sensual",
	"Sentimental",
	"Serene",
	"Serious",
	"Servile",
	"Sexist",
	"Sexual",
	"Shallow",
	"Shameful",
	"Shameless",
	"Shifty",
	"Shrewd",
	"Shy",
	"Sincere",
	"Slanderous",
	"Sly",
	"Smug",
	"Snobbish",
	"Sober",
	"Sociable",
	"Solemn",
	"Solicitous",
	"Solitary",
	"Solitary",
	"Sophisticated",
	"Spendthrift",
	"Spiteful",
	"Stern",
	"Stingy",
	"Stoic",
	"Stubborn",
	"Submissive",
	"Sultry",
	"Superstitious",
	"Surly",
	"Suspicious",
	"Sybarite",
	"Sycophantic",
	"Sympathetic",
	"Taciturn",
	"Tactful",
	"Tawdry",
	"Teetotaler",
	"Temperamental",
	"Tempestuous",
	"Thorough",
	"Thrifty",
	"Timid",
	"Tolerant",
	"Transparent",
	"Treacherous",
	"Troublemaker",
	"Trusting",
	"Truthful",
	"Uncommitted",
	"Understanding",
	"Unfriendly",
	"Unhinged",
	"Uninhibited",
	"Unpredictable",
	"Unruly",
	"Unsupportive",
	"Vague",
	"Vain",
	"Vapid",
	"Vengeful",
	"Vigilant",
	"Violent",
	"Vivacious",
	"Vulgar",
	"Wanton",
	"Wasteful",
	"Weary",
	"Whimsical",
	"Whiny",
	"Wicked",
	"Wisecracking",
	"Wistful",
	"Witty",
	"Zealous"
];
var FromList = [
    "a tiny village on a backwater planet somewhere in the vast",
    "the bubble cities on the sun",
    "Aballon, the forge world",
    "a spaceport city on Castrovel",
    "the forests of Castrovel",
    "a large family, with many siblings",
    "an asteroid mining colony",
    "a slave mining facility",
    "a slave owning city",
    "a settlement that only ever bartered for goods",
    "a small desert settlement",
    "a very religious family",
    "the inner circle a super cult",
    "the armada surrounding Absalom Station",
    "one of the arms of Absalom Station",
    "the spike on Absalom Station",
    "a gang ruled neighborhood of Absalom Station",
    "a samll island on an ocean planet",
    "a family run moisture farm",
    "a space station without a any bars",
    "a deep space research station",
    "a company of mercenarys and sellswords",
    "a planet with no oceans",
    "a huge space station orbiting a black hole",
    "a royal lineage on a planet with no technology",
    "a nomadic culture on a peaceful world",
    "a strict religous temple",
    "a street gang in a large port city",
    "the deserts of Akiton",
    "a large military outpost",
    "a city ravaged by war",
    "a flotilla of ships that moves about the pact worlds",
    "the Pact Worlds",
    "a tidally locked planet",
    "one of the last great libraries",
    "the light side of Verces",
    "a maximum security prison",
    "the dark side of Verces",
    "a small farming colony",
    "a moon of a huge gas giant",
    "a space station orbiting a gas giant",
    "a hidden underground city",
    "a research station orbiting a gas giant",
    "a travelling theatre company",
    "the city post office",
    "a travelling thrash metal band",
    "a space fishing colony",
    "a helium extraction facility",
    "a planet pulled apart by a black hole",
    "a refugee camp near a great cataclysm",
    "a world with forest oceans",
    "the kasatha colony ship, Idari",
    "a recently evacuated colony ship",
    "a colony ship that arrived in the Pact Worlds",
    "an outpost in the Diaspora",
    "a station in an asteroid belt",
    "an ice mining rig",
    "an interplanetary ice hauler",
    "a huge ice and mineral freighter",
    "an interplanetary cargo freighter",
    "the dead plains of Eox",
    "the harsh seasons of Triaxus",
    "a garden moon of Liavara",
    "a floating city of Liavara",
    "the cradle of Bretheda",
    "a wild moon of Bretheda",
    "a small outpost in an asteroid belt",
    "a forgotten elven monastery",
    "the pirate infested asteroid belt",
    "a far off uncharted planet",
    "the inside of an asylum",
    "a fallen kingdom in the vast",
    "the inner slums of a large settlement",
    "an underwater bubble city",
    "an ice mining outpost",
    "a tourist station near an iminent supernova",
    "the wastes of a desert world",
    "an environmental fortress on a lava world",
    "a farming village on a lush forest world",
    "a world rich in minerals",
    "a world stripped of all its natural resources",
    "a world covered in permafrost",
    "the depths an ocean world",
    "a small oasis village",
    "the outer rim of the galaxy",
    "the core worlds of the galaxy",
    "a peaceful coastal town",
    "the wilds of Triaxus",
    "a small remote research station",
    "an ancient temple run by monks",
    "a very tiny settlement",
    "a mid trade route refuelling station",
    "a space station at the intersection of several trade routes",
    "a notorious dungeon",
    "the small rocky Apostae",
    "Aucturn, the stranger",
    "the hold of a slave ship",
    "a mighty inter stellar shipping freighter",
    "the slums of a station city",
    "a laid back beach town",
    "an extremist cult",
    "a sheltered upbringing",
    "the remains of a sunken city",
    "the remains of a scuttled war ship",
    "the salt flats of a dry planet",
    "a city in the shifting storms of a gas giant",
    "a vile village on a swamp world",
    "a world considered a tropical paradise",
    "an orphanage",
    "a small family transport company",
    "a small town where nothing ever happened",
    "a military stronghold",
    "a planetary defense platform",
    "a town run by gangs",
    "a refugee ship from a war-torn planet",
    "a disease ridden city",
    "the local spacer bar",
    "the icelands of a wandering planet",
    "a dusty mountain range",
    "an actual castle",
    "the endless fields of a farming moon",
    "an affluent upbringing",
    "a prison colony",
    "a spacestation run by slaves",
    "a backwater village of a large planet",
    "a secluded village unaware of spacefaring technology",
    "a starship repair shop",
    "a wealthy machine shop",
    "a frozen jungle world",
    "a world wracked by global warming",
    "a survivor of the swarm",
    "the Azlanti star empire",
    "A flotilla of mining ships",
    "a rundown adventurers guild",
    "a destroyed in the vesk wars",
    "a planet with seas of sand",
    "a village spawned by a ship wreck",
    "a ship wrecked crew not rescued for 20 years",
    "a planet long thought to be uninhabited",
    "a city built from abandoned asteroid mines",
    "a small station on the edge of pact space",
    "a broken home",
    "a thriving spaceport town",
    "a planet with dangerous predators",
    "a humanoid zoo planet",
    "a travelling space station built on a small planetoid",
    "a great stellar engine",
    "an android slave colony",
    "a small farm on a grassy planet",
    "an engineer's guild",
    "a bustling underground city",
    "an underwater city protected by a magical force field",
    "a world with magic using creatures",
    "a halfway house",
    "a mutanied prison ship",
    "a large secluded prison colony",
    "a secret military base",
    "a city where it is always daytime",
    "a slave market",
    "a city no one else has ever heard of",
    "the local academy",
    "a secret cloning facility",
    "a station on a collision course with the sun",
    "a city with spires that reach into the clouds",
    "a city spanning an entire planet",
    "a destitute farming facility",
    "Australia",
    "a refugee city outside a walled garden",
    "an aristocratic family",
    "the camp of a planetary logging company",
    "the Eoxian boneyard",
    "a world rich in iron",
    "a shanty town in a scrapyard",
    "a station held together with junk",
    "a powerful trading spaceport city",
    "the outskirts of a spaceport",
    "a space station without children",
    "an orbital refuelling station",
    "a rural construction company",
    "an abandoned fortress world",
    "a planet that can't be landed on",
    "a frozen wasteland",
    "a broken home",
    "a sleepy harbour town",
    "a disgraced family of scrap collectors",
    "the city watch",
    "a complex bureaucratic society",
    "a large desert metropolis",
    "a bustling spaceport market",
    "a city always sealed from the inside",
    "a ship recovered from a black hole",
    "a run down spacer bar",
    "a partly terraformed world",
    "a terraforming platform around a planet being processed",
    "a world in dire need of terraforming",
    "a world with restricted space travel",
    "a beautiful garden world",
    "the drift",
    "a starship graveyard",
    "a solar collection array",
    "the vast",
    "a nearspace planet close to a drift beacon",
    "beyond the rim",
    "a space station in a backwater system",
    "an exploration vessel",
    "the frozen waste of Triaxus ",
    "a refugee convoy, fleeing from the Veskarium",
    "a multigenerational starship that patrols the endless void.",
    "a depleted mining world.",
    "the far reaches of the Veskrium.",
    "deep within the Diaspora.",
    "the jungles of Castrovel.",
    "a backwater village",
    "a cryogenic freezing facility",
    "space, found alone on an abandoned starship as a child",
    "the lower levels of Absalom’s spike",
    "beyond the Pact Worlds"
];
var WhoList = [
    "doesn't believe in magic",
    "hates wearing armor face masks",
    "is scared of Shirren",
    "wants to open their own spacer bar",
    "has a huge credit debt to pay back",
    "is running from their debt",
    "owes a debt collector a starship",
    "was raised by barathu",
    "suffers from claustrophobia",
    "is afraid of the dark",
    "makes inappropriate jokes at the worst times",
    "is afraid of heights",
    "doesn't understand the concept of politeness",
    "has a gambling problem",
    "was told by their parents they'll never be good enough",
    "wants everyone to like them",
    "never takes their armour off",
    "wants to pilot an exploration ship",
    "has no other family but the party",
    "used to be a part of the hellknights",
    "is downright racist towards vesk",
    "is writing a novel about their heroic adventures",
    "has a drinking problem",
    "is not very good at sports",
    "saw their whole family killed by bloodbrothers",
    "gets nervous when public speaking",
    "saw a planet ravaged by a colossi",
    "suffers from sneezing attacks",
    "is uncomfortable around Kasatha",
    "can't swim",
    "is afraid of lasers",
    "hates fighting",
    "distrusts all authority",
    "believes reptoids control the government",
    "believes Golarion was an inside job",
    "mistrusts anyone taller than them",
    "has anger problems",
    "can't read",
    "deserted the military",
    "is responsible for the death of a family member",
    "always takes the first cut of credits",
    "hears voices",
    "is addicted to cybernetics",
    "must read every book they come across",
    "thinks they are a brilliant hacker",
    "will throw grenades first and ask questions later",
    "will only use battery powered weapons (because they are cheap)",
    "always refers to inanimate objects as 'she'",
    "always keeps their promises",
    "wants to be a famous vlogger",
    "believes they can speak to plants",
    "wants to settle down and have a family",
    "has body image issues",
    "hates bening on planets",
    "can't stand the sight of blood",
    "only makes eye contact with people they like",
    "has to have rice with every meal",
    "has nothing left to lose",
    "doesn't know their own strength",
    "doesn't take crap from kids",
    "always carries multiple credit chips",
    "refuses to fire a gun",
    "is a pacifist",
    "gives their weapons names",
    "would rather be farming than adventuring",
    "is scared of spaceship travel",
    "avoids the police at all costs",
    "has bad hygiene",
    "is being hunted by a horrible beast",
    "needs to find a cure for space mumps",
    "lost their family in a dragon attack",
    "fights for undead rights",
    "hates crowds",
    "is endlessly fascinated by Shirren culture",
    "when on a ship will only sleep in escape pods",
    "only sleeps with the lights on",
    "covered in maze tattoos",
    "has the loudest laugh in the party",
    "keeps lists about everything",
    "lost their ID in a bet",
    "will follow their party members blindly",
    "knows what its like to die",
    "is uncomfortable in armor",
    "is nearly deaf",
    "thinks they can use 'the force'",
    "will never dance",
    "lost the love of their life. In a bet.",
    "can't tolerate gluten",
    "is vegetarian",
    "is vegan, and makes sure everyone knows",
    "keeps track of their kills",
    "is an alcoholic",
    "thinks of themselves as a private investigator",
    "has an irrational fear of skittermanders",
    "is tone-deafen",
    "always wears the sweetest kicks",
    "has an incredible fashion sense",
    "is a compulsive liar",
    "wants to one day own their own ship",
    "is wanted for questioning about an attack on a mining colony",
    "has a twin and constantly gets confused for them",
    "who donates time to local charities",
    "always thinks outside the box",
    "has many identities on different worlds",
    "has accepted death as an inevitability",
    "sold everything they own to get off their home planet",
    "has been on the run for several years",
    "hates children",
    "had their mind wiped by parties unknown",
    "fights for species equality",
    "was found inside a cryo-tank after being frozen for many years",
    "has connections to underworld crime syndicates",
    "once started a rebellion",
    "doesn't trust robots",
    "always looks their best",
    "doesn't understand sarcasm",
    "hasn't been quite right. not since the accident",
    "finds it hard to relate to others",
    "has a burning hatred for pirates",
    "was once very wealthy but lost everything",
    "suffers from night terrors",
    "is the escaped clone of a wealthy politician",
    "was grown in a vat and has no family",
    "has stolen someones identity",
    "really knows how to party",
    "is the first to loot every enemy",
    "thinks that they are amazing at combat, but are the worst in the party",
    "knows the location of a huge weapons cache",
    "knows a guy",
    "is endlessly amused by magic",
    "will always choose to bluff an enemy",
    "knows how to ride most creatures",
    "is on most government watch lists",
    "is always warm and friendly",
    "keeps getting mistaken for a famous icon",
    "has a thirst for all knowledge",
    "likes to craft personal items rather than buy them",
    "is very good at running",
    "will always go for a swim in bodies of water they come across",
    "is the toughest one in the party",
    "carries all of their old and empty credsticks",
    "was dragged out of retirement for this adventure",
    "has a credstick that once belonged to a famous icon",
    "will only fight with ranged weapons",
    "has no concept of personal space",
    "has a license to use power armor",
    "still drives vehicles even though its illegal",
    "thinks they are always surrounded by a force field",
    "will always try to bribe officials",
    "knows their way around a workshop",
    "can't stop scrolling the infosphere",
    "knows how to use any type of computer",
    "wants to explore new unknown worlds",
    "has the itch to explore space",
    "has a price on their head",
    "listens to classical music while in combat",
    "finds it hard to work as a team",
    "will become the greatest fighter pilot of all time",
    "keeps a diary of all the creatures they come across",
    "doesn't speak a word of common",
    "can hotwire any vehicle",
    "is a total tech head",
    "believes in life after love",
    "loves to dance",
    "has a farmers union iced coffee and a sausage roll for smoko every day, no exceptions",
    "has a drinking problem",
    "is afraid of heights",
    "only sleeps with the lights on",
    "has to urinate frequently ",
    "is obsessed with their hair ",
    "dresses provocatively",
    "smells like old cheese",
    "dances with wolves",
    "talks with a 1920s mafia accent",
    "talks about stabbing people strangely too much",
    "constantly has a broken arm, looking for help",
    "is obsessed with the local sports team",
    "is obsessed with cars",
    "smokes too much herb, like all the time",
    "gives people small amounts of credits, in strange amounts, for doing the simplest errands for him",
    "speaks to people as though hes being hunted",
    "speaks to people as though hes hunting them",
    "gets startled at the slightest raise in someones tone",
    "wears rings, which isn’t cool, but its cool that he doesn’t care if he’s cool",
    "is slightly overweight",
    "has a limp",
    "has a well kept mustache",
    "believes they are destined for a higher calling",
    "looks down on anyone who poorer than they are",
    "believes in ghosts",
    "is superstitious",
    "flirts relentlessly",
    "seems aloof and distant",
	"is so laid back they often come across as rude and uncaring",
    "is secretly a dragon",
    "wants to be a princess",
    "is a high-ranking gangster in a witness protection program"
];

function getArticle(word){
	var article;
	if (['a','e','i','o','u'].includes(word.toLowerCase().charAt(0))) {
	  article = 'an ' + word;
	} else {
	  article = 'a ' + word;
	}
	return article;
}
/* /Based on sfrpgtools characterGen.v2.1.js */

function getNPCRacialTraits(npc) {
	if (RacialTraits.hasOwnProperty(npc.race)) {
		return RacialTraits[npc.race];
	} else {
		return RacialTraits.misc;
	}
}
function getNPCOldness(npc) {
	var rt = getNPCRacialTraits(npc);
	var ageMod = (npc.age - rt.adultAge)/(rt.maxAge - rt.adultAge);
	return ageMod;
}
function randomizeNPC(npc, name, race, gender, age, alignment) {
	npc.race = race || races[Math.floor(Math.random() * races.length)];
	let rt = getNPCRacialTraits(npc);
	npc.gender = gender || randomize(rt.genders);
	if (age == undefined || age==0) {
		if (chance(10)) {
			age = 1;
		}
		else {
			age = randomize([2,3,4]);
		}
	}
	switch (parseInt(age)) {
		case 1:
			// Child
			npc.age = Math.max(rollDie(rt.adultAge), 1);
			npc.relativeAge = AgeList[0];
			break;
		case 2:
			// Young Adult
			// adultAge + (maxAge * (random/5))
			npc.age = rt.adultAge + Math.floor(Math.random() * Math.random() * (rt.maxAge / 5));
			npc.relativeAge = AgeList[1];
			break;
		case 3:
			// Adult
			npc.age = rt.adultAge + Math.floor((rt.maxAge / 5)) + Math.floor(Math.random() * Math.random() * 2 * (rt.maxAge / 5));
			npc.relativeAge = AgeList[2];
			break;
		case 4:
			// Old
			npc.age = rt.maxAge - Math.floor(Math.random() * Math.random() * (rt.maxAge / 5));
			npc.relativeAge = AgeList[3];
			break;
	}
	npc.name = name || NameGenerator.full(npc.race, npc.gender, npc.relativeAge);
	npc.alignment = alignment || randomize(rt.alignments);
	npc.threat = randomize(threat);
	npc.profession = randomize(ProfessionList);
	// this.description = randomize(adjectives);
	npc.description = getNPCDescription(npc.race, npc.relativeAge, npc.profession);
}
function getNPCDescription(race, age, profession) {
	var Age = age || randomize(AgeList);
	var Race = race || randomize(races);
	var Profession = profession || randomize(ProfessionList);
	var Who = randomize(WhoList);
	var Personality = randomize(PersonalityList) + ' and ' + randomize(PersonalityList);
	var From = randomize(FromList);
	var result = getArticle(Age).capitalize() + " " + Race.toLowerCase() + ", who " + Who + " and comes from " + From + ". They are " + Personality.toLowerCase() + ", and have found work as " + getArticle(Profession.toLowerCase()) + ".";
	return result;
}

function getRaces() {
	return $.ajax({ crossDomain: true, url: "/res/data/races.json", dataType: 'json' });
}