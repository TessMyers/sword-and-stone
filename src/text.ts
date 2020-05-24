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
    bodyText: "With your sharp sickle, you delicately harvest the purple flowers. You:",
    options: [
      {
        actionText: "Eat the flowers",
        outcome: "FLOWERS"
      },
      {
        actionText: "uhh do something else",
        outcome: "something else happens, who'da thunk it"
      },
      {
        actionText: "Squeeze the flower juice onto the sword pommel",
        outcome: " "
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
  MONK: "You are The Monk, and you are <b>resolute</b> and <b>cunning</b>"
}

export const narratives = {
  // FARMHAND NARRATIVES
  //TODO bodyText should be an array, each string is made into a <p></p>
  SHOVEL: {
    bodyText: ["As you explore the area, you see the remnants of <b>ancient machinery</b> surrounding the stone, partially buried in soil and wrapped by overgrowing greenery. Many passing years have left the pipes rusty and inoperative.", 
    "With your gardener’s instincts and your trusty shovel, you laboriously dig out the pipes and clear away the entwining vines and weeds.",
    "Inspecting the now-visible machinery, you see that, were it not for a blockage, the pipes would connect to the nearby spring. As you extract the impediment, the ancient pipes begin to rattle, clunking and wheezing as they fill with the rapid influx of water."],
    swordStatus: [
      "With the hiss of water under high pressure, the sword slowly rises out of the stone but stops before emerging even halfway. You must try another method if you wish to free the sword entirely.",
      "With the hiss of water under high pressure, the sword slowly rises several more inches out of the stone. As powerful as it is, the water pressure is insufficient to fully free the sword.",
      "With the hiss of water under high pressure, the sword slowly rises from the stone until, with a sudden spray of water, it pops free."
    ]
  },
  LUNCH: {
    bodyText: ["Noticing a small shrine at the root of the tree, you place half your lunch of bread and cheese in the little offering bowl. You step back respectfully, placing your palms together and bowing your head as you ask the <b>tree spirit</b> for assistance.",
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
      "Humming gently, the healing stone seems to push the blade  out as if rejecting a splinter. With a grating sound, the final inches of the sword slip free."
    ]
  },
  FARMHAND_ENDING: {
    bodyText: ["You are the farmhand and you have won the sword! congratulations, you used your traits of GENTLENESS and CURIOSITY to pull the sword from the stone."],
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
    bodyText: ["You have a solution to this problem! Reaching into your robes, you pull out and unscrew the jar of healing balm that you always keep with you. With a quiet pop, the lid comes free and you carefully smear some of the balm at the junction of sword and stone. After a few moments, the balm has done its work; no mere stone can withstand the power of a soothing balm made for cracked old hands."],
    swordStatus: [
      "With a heave, you haul on the hilt of the sword. Greased by the balm, the blade slides out part way but shudders to a halt. You will need to try something else, if you wish to free this sword completely",
      "With a heave, you haul on the hilt of the sword. Greased by the balm, the blade slides a further few inches out of the entrapping stone. You seem to have reached the limits of your physical power",
      "With a heave, you haul on the hilt of the sword and are rewarded with a smooth draw as the blade, greased by a simple herbal balm, slides free."
    ]
  },
  FLOWERS: {
    bodyText: ["you eat the flowers and trip balls"],
    swordStatus: [
      "starts to emerge",
      "slightly more free",
      "it's free!"
    ]
  },
  MONK_ENDING: {
    bodyText: ["You are the Monk and you have won the sword"],
    swordStatus: [0,0,0,""]
  },
  // KNIGHT NARRATIVES
  LANCE: {
    bodyText: ["you do stuff with a lance"],
    swordStatus: [
      "starts to emerge",
      "slightly more free",
      "it's free!"
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
     "Your lance creaks the strain, but the heavy wood holds fast. Archimedes would be proud of your improvised lever."
    ],
    swordStatus: [
      "As the cow plods forward, the sword begins to emerge from the stone, inch by inch. However, progress halts after a mere third of the blade has been exposed and no amount of heaving by the capable cow will budge it further.",
      "As the cow plods forward, the sword emerges from the stone, inch by inch. When nearly the full length of the blade has been exposed, progress halts and no amount of heaving by the capable cow will budge it further.",
      "As the cow plods forward, the sword fully emerges from the stone with a sharp squeal of metal on crystal."
    ]
  },
  KNIGHT_ENDING: {
    bodyText: ["You are the knight and you have won the sword with your Strength and Innovation"],
    swordStatus: [0,0,0,""]
  },
}