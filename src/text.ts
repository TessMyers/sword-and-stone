import { toolTypes } from "./constants"

export const continueOptions = [
  "Keep trying", // continue, Try again,
  "Almost there",
  "Take the sword!",
  "Play again as a different character"
];

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
        outcome: "Everything looks pink now. Nice."
      }
    ]
  },
  FLOWERS: {
    bodyText: "With your sharp sickle, you delicately harvest the deep purple flowers. You:",
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
        actionText: "Hitch the Longhorn to the sword",
        outcome: "COW"
      },
      {
        actionText: "Ask the Longhorn for help",
        outcome: "Your Bovinese must be rusty. The cow flicks her ears at you and continues to munch grass."
      }
    ]
  },
  DONE: {
    bodyText: "You have already done this!",
    options: [],
    buttonText: "ok"
  }
}

export const narratives = {
  // FARMHAND NARRATIVES
  //TODO bodyText should be an array, each string is made into a <p></p>
  SHOVEL: {
    bodyText: "<p>As you explore the area, you see the remnants of <b>ancient machinery</b> surrounding the stone, partially buried in soil and wrapped by overgrowing greenery. Many passing years have left the pipes rusty and inoperative.</p><p>With your gardener’s instincts and your trusty shovel, you laboriously dig out the pipes and clear away the entwining vines and weeds. </p><p>Inspecting the now-visible machinery, you see that, were it not for a blockage, the pipes would connect to the nearby spring. As you extract the impediment, the ancient pipes begin to rattle, clunking and wheezing as they fill with the rapid influx of water.</p>",
    swordStatus: [
      "<p>With the hiss of water under high pressure, the sword slowly rises out of the stone but stops before emerging even halfway. You must try another method if you wish to free the sword entirely.</p>",
      "<p>With the hiss of water under high pressure, the sword slowly rises several more inches out of the stone. As powerful as it is, the water pressure is insufficient to fully free the sword.</p>",
      "<p>With the hiss of water under high pressure, the sword slowly rises from the stone until, with a sudden spray of water, it pops free.</p>"
    ]
  },
  LUNCH: {
    bodyText: "<p>Noticing a small shrine at the root of the tree, you place half your lunch of bread and cheese in the little offering bowl. You step back respectfully, placing your palms together and bowing your head as you ask the <b>tree spirit</b> for assistance.</p><p>As if in a sudden breeze, the branches of the tree begin to shake, and the stone figurine rattles. The tree spirit is pleased with your small but generous gift.</p>",
    swordStatus: [
      "<p>The ground trembles, and the sword begins to slide out of the stone, easing out inch by inch before grating to a halt. The rustling branches subside; the tree spirit has helped as much as it can.</p>",
      "<p>The ground trembles, and the sword slowly slides a few more handbreadths out of the stone before grating to a halt. The rustling branches subside; the tree spirit has helped as much as it can.</p>",
      "<p>The ground trembles, and the sword finally slides gently out of the stone. The rustling branches subside. With the help of the tree spirit, you have freed the sword!</p>"
    ]
  },
  SHARDS: {
    bodyText: "<p>Inspecting the stone, you find several <b>deep cracks</b> in the crystalline material. With a steady hand, you carefully slide the crystal shards into place.  As you step back, the stone begins to emit a subtle glow as it becomes whole once more.</p>",
    swordStatus: [
      "<p>Humming gently, the healing stone pushes the blade part way out as if rejecting a splinter. Emerging a third of the way, the progress of the sword halts and the glow subsides. You must continue from here.</p>",
      "<p>Humming gently, the healing stone pushes the blade another third of the way free as if rejecting a splinter, but shudders to a halt as the glow subsides.</p>",
      "<p>Humming gently, the healing stone seems to push the blade  out as if rejecting a splinter. With a grating sound, the final inches of the sword slip free.</p>"
    ]
  },
  FARMHAND_ENDING: {
    bodyText: "You are the farmhand and you have won the sword! congratulations, you used your traits of GENTLENESS and CURIOSITY to pull the sword from the stone.",
    swordStatus: [0,0,0,""]
  },
  // MONK NARRATIVES
  STAFF: {
    bodyText: "You summon lightning with your holy staff",
    swordStatus: [
      "starts to emerge",
      "slightly more free",
      "it's free!"
    ]
  },
  BALM: {
    bodyText: "you use the healing balm",
    swordStatus: [
      "starts to emerge",
      "slightly more free",
      "it's free!"
    ]
  },
  FLOWERS: {
    bodyText: "you eat the flowers and trip balls",
    swordStatus: [
      "starts to emerge",
      "slightly more free",
      "it's free!"
    ]
  },
  MONK_ENDING: {
    bodyText: "You are the Monk and you have won the sword",
    swordStatus: [0,0,0,""]
  },
  // KNIGHT NARRATIVES
  LANCE: {
    bodyText: "you do stuff with a lance",
    swordStatus: [
      "starts to emerge",
      "slightly more free",
      "it's free!"
    ]
  },
  SHIELD: {
    bodyText: "you shine the shield",
    swordStatus: [
      "starts to emerge",
      "slightly more free",
      "it's free!"
    ]
  },
  COW: {
    bodyText: "You utilize the cow",
    swordStatus: [
      "starts to emerge",
      "slightly more free",
      "it's free!"
    ]
  },
  KNIGHT_ENDING: {
    bodyText: "You are the knight and you have won the sword",
    swordStatus: [0,0,0,""]
  },
}