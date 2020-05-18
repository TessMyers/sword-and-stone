import { toolTypes } from "./constants"

export const continueOptions = [
  "Keep trying", // continue, Try again,
  "Almost there",
  "Take the sword!"
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
        outcome: "something else happens, who'da thunk it "
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
  SHOVEL: {
    bodyText: "You dig up the Ancient Pipes, Cupcake ipsum dolor sit amet chocolate cake croissant toffee. Liquorice ice cream apple pie sweet roll oat cake marshmallow sweet roll danish muffin. Candy jelly donut halvah.",
    swordStatus: [
      "With the hiss of water under high pressure, the sword slowly rises a third of the way out of the stone but stops before emerging even halfway. You must try another method if you wish to free the sword.",
      "With the hiss of water under high pressure, the sword slowly rises several more inches out of the stone. As powerful as it is, the water pressure is insufficient to fully free the sword.",
      "With the hiss of water under high pressure, the sword slowly rises several more inches out of the stone. It is free!"
    ]
  },
  LUNCH: {
    bodyText: "Noticing a small shrine at the root of the tree, you carefully place half your lunch of bread and cheese in the little offering bowl. As you step back respectfully, the stone figurine rattles and the tree branches begin to shake. You place your palms together and bow your head, asking the tree spirit for help.",
    swordStatus: [
      "The ground trembles, and the sword begins to slide out of the stone, but stop after just a few inches. The rustling branches subside; the tree spirit has helped as much as it can.",
      "The ground trembles, and the sword slowly slides a few more inches out of the stone. The rustling branches subside; the tree spirit has helped as much as it can.",
      "The ground trembles, and the sword slides gently out of the stone. The rustling branches subside. With the help of the tree spirit, you have finally freed the sword!"
    ]
  },
  SHARDS: {
    bodyText: "Carefully, you slide the shards into place on the cracked stone. As you step back, the stone begins to glow subtly, becoming whole once more",
    swordStatus: [
      "Humming gently, the healing stone seems to push the sword out like a spliter. After emerging a third of the way out, the progress of the sword halts and the glow subsides. You must continue from here.",
      "Humming gently, the healing stone seems to push the sword out like a spliter. As the sword emerges another third of the way, it shudders to a halt and glow of the stone subsides. You must continue.",
      "Humming gently, the healing stone seems to push the sword out like a spliter. With a grating sound, the final inches of the sword slip free."
    ]
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
  }
}