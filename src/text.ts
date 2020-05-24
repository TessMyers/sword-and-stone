import { toolTypes } from "./constants"

export const continueOptions = [
  "Keep trying", // continue, Try again,
  "Almost there",
  "Take the sword!",
  "Play again as a different character"
];

export const modalTypes = {
  SHARDS: "SHARDS",
  FLOWERS: "FLOWERS",
  COW: "COW",
  DONE: "DONE",
  HOWTO: "HOWTO"
};

export const modalTexts = {
  SHARDS: {
    bodyText: "With your sturdy gardening gloves, you pick up the very sharp stone shards. You:",
    options: [
      {
        actionText: "Use a shard to make a blood sacrifice to the sword",
        outcome: "You cut your palm with a razor sharp edge and let the blood drip onto the ancient sword. Nothing happens. Ouch."
      },
      {
        actionText: "Try to fit the shards into the stone",
        outcome: "SHARDS"
      },
      {
        actionText: "Look through the shards",
        outcome: "You hold two of the shards up like spectacles and look through them. Everything looks pink now. Nice."
      }
    ]
  },
  FLOWERS: {
    bodyText: "With your sharp sickle, you carefully harvest the purple flowers. You:",
    options: [
      {
        actionText: "Eat the flowers",
        outcome: "FLOWERS"
      },
      {
        actionText: "Place the flowers at the tree shrine",
        outcome: "While the pale purple buds look lovely at the shrine, the tree spirit is uninterested in this offering."
      },
      {
        actionText: "Anoint the sword with juice from the flowers",
        outcome: "Juice drips down the ancient blade, but little else happens. Your fingers are now somewhat purple."
      }
    ]
  },
  COW: {
    bodyText: "You have captured a wild Longhorn cow with your knightly lassoing skills. You:",
    options: [
      {
        actionText: "Drive the Longhorn to ram the stone",
        outcome: "This cow is not remotely interested in ramming the stone. With a baleful look in her eye, she deposits a cow pat on your boots."
      },
      {
        actionText: "Ask the Longhorn for help",
        outcome: "Your Bovinese must be rusty. The cow flicks her ears at you and continues to munch grass."
      },
      {
        actionText: "Hitch the Longhorn to the sword",
        outcome: "COW"
      }
    ]
  },
  DONE: {
    bodyText: "You have already done this!",
    options: []
  },
  HOWTO: {
    bodyText: "Your task is to pull the sword from the stone. You have three tools in your inventory, and each tool can be used in some way to help free the sword. Select a tool, and use your mouse to click on elements in the scene to use the tool on that element. Click around and see what happens!",
    options: []
  }
}

export const modalTips = {
  FARMHAND: "You are The Farmhand, and you are <b>gentle</b> and <b>curious</b>",
  KNIGHT: "You are The Knight, and you are <b>strong</b> and <b>resourceful</b>",
  MONK: "You are The Monk, and you are <b>confident</b> and <b>cunning</b>"
}

export const narratives = {
  // FARMHAND NARRATIVES
  SHOVEL: {
    bodyText: ["As you explore the area, you see the remnants of <b>ancient pipes</b> surrounding the stone, partially buried in soil and wrapped in overgrown greenery. Many passing years have left the plumbing rusty and inoperative.", 
    "With your gardener’s instincts and your trusty shovel, you laboriously dig out the pipes and clear away the entwining vines and weeds.",
    "Inspecting the now-visible machinery, you see that the pipes should connect to the nearby spring, bringing water to flow through the stone as if it were a fountain. As you reconnect several junctions and clear a blockage, the ancient pipes begin to rattle, clunking and wheezing as they fill with the rapid influx of water. Spring water rushes into a center channel of the stone and soon meets the obstructing sword."],
    swordStatus: [
      "With the hiss of water under high pressure, the sword slowly rises out of the stone but stops before emerging even halfway. You must try another method if you wish to free the sword entirely.",
      "With the hiss of water under high pressure, the sword slowly rises several more inches out of the stone. As powerful as it is, the water pressure is insufficient to fully free the sword.",
      "With the hiss of water under high pressure, the sword slowly rises from the stone until, with a sudden spray of water, it pops free."
    ]
  },
  LUNCH: {
    bodyText: ["A tree stands to your right, its aged branches gnarled and bare. You recognize the signs of ill-health in the wood, and know with sadness that the venerable tree is dying",
    "Noticing a small shrine in the tangled roots, you place half your lunch of bread and cheese in the little offering bowl. You step back respectfully, placing your palms together and bowing your head as you ask for assistance.",
    "As if in a sudden breeze, the branches of the tree begin to shake, and the stone figurine rattles. The tree spirit is pleased with your small but generous gift."],
    swordStatus: [
      "The ground trembles, and the sword begins to slide out of the stone, easing out inch by inch before grating to a halt. The rustling branches subside; the tree spirit has helped as much as it can.",
      "The ground trembles, and the sword slowly slides a few more handbreadths out of the stone before grating to a halt. The rustling branches subside; the tree spirit has helped as much as it can.",
      "The ground trembles, and the sword finally slides gently out of the stone. The rustling branches subside. With the help of the tree spirit, you have freed the sword!"
    ]
  },
  SHARDS: {
    bodyText: ["Inspecting the stone, you find several <b>deep cracks</b> in the crystalline material. With a steady hand, you carefully slide the crystal shards into place.  As you step back, the stone begins to emit a subtle glow as it becomes whole once more."],
    swordStatus: [
      "Humming gently, the healing stone pushes the blade part way out as if rejecting a splinter. Emerging a third of the way, the progress of the sword halts and the glow subsides. You must continue from here.",
      "Humming gently, the healing stone pushes the blade another third of the way free as if rejecting a splinter, but shudders to a halt as the glow subsides.",
      "Humming gently, the healing stone seems to push the blade out as if rejecting a splinter. With a grating sound, the final inches of the sword slip free."
    ]
  },
  FARMHAND_ENDING: {
    bodyText: ["You reach out and take the sword. Balancing it gently across both hands, you survey the scene. Now that you have removed the obstructive sword, it’s clear that the stone is a kind of fountain. The pipes that you have repaired now effortlessly carry water from the spring to and through the stone, where it burbles up and flows over the crystal surface in a gentle cascade. You see that the growing pool of water at the base of the stone and understand with relief that the ancient tree may now survive, nourished by these flowing waters.", 
    "The sword lies heavy in your hands, light glittering along the chipped edges. It is now yours."],
    swordStatus: [0,0,0,""]
  },
  // MONK NARRATIVES
  STAFF: {
    bodyText: ["With slow, rhythmic strikes, you beat your holy staff against the earth. Raising your free arm above your head, you reach towards the dark clouds and cry out an invocation to your god. With a thundering crash and the smell of ozone, a blinding branch of lightning snakes down and strikes the crystal stone."],
    swordStatus: [
      "As the spots clear from your eyes, you see that the sword has been pushed partway out of the stone. Smoke curls around the sword’s hilt, but it remains partially embedded in the stone.",
      "As the spots clear from your eyes, you see that the sword has been pushed another third of the way out of the stone. Smoke curls gently around the sword’s hilt, but it is not yet free",
      "As the spots clear from your eyes, you see that the lightning strike has blown the sword free from the stone. Soot streaks the blade, but the pommel shimmers brightly."
    ]
  },
  BALM: {
    bodyText: ["You know a solution to this problem! Reaching into your robes, you pull out the jar of healing balm that you always keep with you. With a quiet pop, the cork comes free and you carefully smear some of the balm at the junction of sword and stone. After a few moments, the balm has done its work; no mere stone can withstand the power of a soothing balm made for cracked old hands"],
    swordStatus: [
      "With a heave, you haul on the hilt of the sword. Greased by the balm, the blade slides out part way but shudders to a halt. You will need to try something else, if you wish to free this sword completely",
      "With a heave, you haul on the hilt of the sword. Greased by the balm, the blade slides a further few inches out of the entrapping stone. You seem to have reached the limits of your physical power",
      "With a heave, you haul on the hilt of the sword and are rewarded with a smooth draw as the blade, greased by a simple herbal balm, slides free."
    ]
  },
  FLOWERS: {
    bodyText: ["You take the freshly harvested flowers and examine them carefully. Pale purple, these flowers are powerfully hallucinogenic in the right dose but deadly otherwise. Your monastic order has a very specific use for this herb. Carefully selecting an exact number of flower petals, you place them under your tongue and settle down to wait, breathing deeply.",
    "Soon your breaths have slowed to twice a minute, and you feel your substance flying apart, each fragment intertwining with everything around you. In such a state you can clearly see the interconnected web in this glade - spring, stone, and tree linked together in a cyclic relationship. But this web is in disorder, bulging and attenuated where a blockage has prevented normal flow. Identifying the block, you PUSH.. and pass into a dream."],
    swordStatus: [
      "When you awake, you see that you have met with some success. Your astral efforts have coaxed the blade partway out of the stone",
      "When you awake, you see that you have met with some success. Your astral efforts have coaxed the blade yet further out of the stone, though several inches remain firmly imbedded in the crystal.",
      "You awaken to the gentle gurgle of water, now flowing freely through the center channel of the crystal stone. The sword lies a few feet away, where it has landed after being blown free by the might of your astral extertions."
    ]
  },
  MONK_ENDING: {
    bodyText: ["Grasping your staff for support, you slowly raise the weight of the heavy sword. Its pommel shimmers brightly at you, winking in the sun. You peer along the edge, noting areas of rust and corrosion",
    "Taking a seat on a nearby rock, you observe the glade. Your psychic venture into the inner workings of this place has given you a deep knowledge of its purpose and function. Once, deep spring water flowed into pipes and passed through the crystal stone. Purified and blessed, the resulting fountain fed a pool that sustained the land. Many tired, hurt, and struggling individuals found themselves drawn to this quiet place where they discovered rest and healing in the waters and in the shade of the ancient tree.", 
    "Your work here has restored the balance of this delicate system. Water now flows freely from spring to stone, where it bubbles up uninterrupted through the sacred crystal. The small pool that grows at the base of the fountain will provide for flora and fauna alike, and soon the formerly lush glade will be restored.", 
    "In your aged hands rests the legendary sword, still sharp and deadly after all this time. It is yours now."],
    swordStatus: [0,0,0,""]
  },
  // KNIGHT NARRATIVES
  LANCE: {
    bodyText: ["You notice that the flow of water in the spring is obstructed, and aside from a small trickle, the pipes that seem to connect the stone to the spring are dry. The stone appears to be connected to some kind of hydro system that has fallen into disrepair, but you have neither the tools nor the know-how to try and fix the pipes themselves.",
    "Throwing caution to the winds, you opt for a brute force approach and dig your sturdy lance into the cleft between stones. Heaving on the other end with a monumental effort, you hear a grating sound as the largest rock shifts, and then a gushing of released water as the blocked spring surges.",
    "Increased pressure from the newly liberated stream blows through the pipes, clearing away decades of debris. The hydro system trembles to life as flow is restored through the pipes and to the stone itself, the blocked center channel of the stone filling with water."
    ],
    swordStatus: [
      "Pushed out by the growing pressure, the obstructing blade shrieks several handspans upwards before coming to a halt. Though the hydro system now flows, the pressure of water alone is not enough to extricate the sword.",
      "Pushed out by the growing pressure, the obstructing blade shrieks another several handspans upwards before coming to a halt. Though the hydro system now flows, the pressure of water alone is not enough to fully extricate the sword.",
      "Pushed by the growing pressure, the last few inches of the obstructing blade shriek upwards as the water jets from the stone. The sword is out!"
    ]
  },
  SHIELD: {
    bodyText: ["You unstrap your shield, and turn it over to expose the very shiny convex back surface. With an eye to the sky, you estimate the angles required and position your shield such that the sun’s bright light is caught and reflected into the stone. Passing through the crystal material, the solar rays hit the blade of the sword and begin to heat the glimmering steel.",
    "You probably should have brought eye protection for this."
    ],
    swordStatus: [
      "As centuries of grime and rust begin to loosen in the heat, you give the hilt a sharp tug and enjoy a thrill of satisfaction as several handspans of the blade pull free from the stone. Alas, your solar method was insufficient to unlock the sword any further.",
      "As centuries of grime and rust begin to loosen in the heat, you give the hilt a sharp tug and enjoy a thrill of satisfaction as several more handspans of the blade pull free from the stone. Alas, your solar method wasn’t quite sufficient to fully free the blade",
      "As centuries of grime and rust begin to loosen in the heat, you give the hilt a sharp tug and enjoy a thrill of satisfaction as the last few inches of blade slide free of the still-warm crystal."
    ]
  },
  COW: {
    bodyText: ["Propping your sturdy lance up as an overhead fulcrum, you loop one end of your lasso around the sword hilt and hitch the other end to the placid Longhorn cow. After some initial resistance she is cajoled into forward progress, exerting her considerable strength and mass against the firmly stuck sword.",
     "Your lance creaks under the strain, but the heavy wood holds fast. Archimedes would be proud of your improvised lever."
    ],
    swordStatus: [
      "As the cow plods forward, the sword begins to emerge from the stone, inch by inch. However, progress halts after a mere third of the blade has been exposed and no amount of heaving by the capable cow will budge it further.",
      "As the cow plods forward, the sword emerges from the stone, inch by inch. When nearly the full length of the blade has been exposed, progress halts and no amount of heaving by the capable cow will budge it further.",
      "As the cow plods forward, the sword fully emerges from the stone with a sharp squeal of metal on crystal."
    ]
  },
  KNIGHT_ENDING: {
    bodyText: ["You reach out and take the sword, its wrapped hilt cool in your hand. With an experimental swing, you test the heft and balance. Not bad.", 
    "Resting for a moment, you look around you. The interdependence of the glade has revealed itself: now that you have unblocked the stream and cleared the obstructing sword, you can see how the spring feeds through the pipes and into the stone, which has become a tranquil fountain. The slowly replenishing pool at its base will sustain fresh growth and revitalize this peaceful spot.", 
    "You hold the sword up and eye its length, examining the intricate metalwork. This sword, spoken of in legend and sought by many, is now yours. "],
    swordStatus: [0,0,0,""]
  },
}

export const end = [
  "A soft breeze rustles through the long grass as you hold the sword. Mellow birdsong comes from high in the tree, complimenting the pleasant gurgling of the fountain.",
  "It is unknown what people or civilization first built the fountain, but for ages it persisted, quietly bringing serenity and healing to the country. The blessed waters were sought out not only by the sick and hurt, but leaders and warriors also made pilgrimages in search of peace and reason. As a result, accords were made instead of bloodshed, and the realm prospered. ",
  "Legend spoke of a mighty sword, the loss of which began an era of war and calamity. Indeed, the sword did play a role in this decline: for when the blade was thrust into the holy fountain, it stoppered the flow of water. The pool dried up and the once-thriving tree shriveled and began to die. Leaders and warriors no longer came to find humility in the cool shade of the glade, choosing instead to squabble over a lost weapon as cities fell and crops failed.",
  "In pulling the sword from the stone, you have restored balance to this sacred place. The spring now feeds merrily into the complex system of pipes that in turn provide for and power the fountain. The crystal stone is once again whole and holy, quietly bubbling blessed waters into a pool that will revitalize the glade. The ancient tree, under which so many great leaders have found temperance and wisdom, begins to heal and grow.",
  "You look down at the sword in your hands, and you see that the blade is stained by the blood of kings and innocents alike. What would happen if this sword were to reappear, after so many years? How many lives would be lost, by its edge and for its sake?",
  "You toss the sword away. It will rust and be swallowed by the earth soon. Its iron will be reclaimed and the shining jewel in the pommel will fall off and roll away, perhaps to be discovered by a curious child in search of shiny objects. You take one last look at the peaceful scene before you, at the gnarled tree that will bloom this year, at the water that burbles gently over the shining stone surface, and you continue on your way."
]