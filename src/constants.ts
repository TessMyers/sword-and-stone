export const pageTypes = Object.freeze({
  CHOOSE: "CHOOSE",
  TABLEAU: "TABLEAU",
  NARRATIVE: "NARRATIVE",
  ENDING: "ENDING"
})
export const characterTypes = Object.freeze({
  FARMHAND: "FARMHAND",
  MONK: "MONK",
  KNIGHT: "KNIGHT"
})

export const toolTypes = Object.freeze({
  SHOVEl: "SHOVEL",
  GLOVES: "GLOVES",
  LUNCH: "LUNCH",
  SHARDS: "SHARDS",
  STAFF: "STAFF",
  BALM: "BALM",
  SICKLE: "SICKLE",
  FLOWERS: "FLOWERS",
  LANCE: "LANCE",
  LASSO: "LASSO",
  SHIELD: "SHIELD",
  COW: "COW",
  DONE: "DONE"
})

export const targetTypes = Object.freeze({
  PIPES: "PIPES",
  SHARDS: "SHARDS",
  SHRINE: "SHRINE",
  CLOUDS: "CLOUDS",
  STONE: "STONE",
  SWORD: "SWORD",
  FLOWERS: "FLOWERS",
  MENHIR: "MENHIR",
  COW: "COW",
  SUN: "SUN",
  NONE: "NONE"
})

export const allSvgTargets = ["CROW_A", "CROW_B", "FLOCK", "STREAM", "MUSHROOM_A", "MUSHROOM_C", "MUSHROOM_D", "MUSHROOM_E", "MUSHROOM_G", "MUSHROOM01", "MUSHROOM02", "MUSHROOM03", targetTypes.SUN, targetTypes.STONE, targetTypes.CLOUDS, targetTypes.PIPES, targetTypes.FLOWERS, targetTypes.COW, targetTypes.MENHIR, targetTypes.SHARDS, targetTypes.SHRINE, targetTypes.SWORD];

export const tools = Object.freeze({
  // FARMHAND
  SHOVEL: Object.freeze({
    type: toolTypes.SHOVEl,
    flavorText: "A shovel",
    imageName: "shovel_tool.png",
    target: "PIPES"
  }),
  GLOVES: Object.freeze({
    type: toolTypes.GLOVES,
    flavorText: "Gloves",
    imageName: "gloves_tool.png",
    target: targetTypes.SHARDS,
    hasSecondary: true
  }),
  LUNCH: Object.freeze({
    type: toolTypes.LUNCH,
    flavorText: "Bread and cheese",
    imageName: "lunch_tool.png",
    target: targetTypes.SHRINE
  }),
  SHARDS: Object.freeze({
    type: toolTypes.SHARDS,
    isHidden: true,
    flavorText: "Sparkling stone shards",
    imageName: "shards_tool.png",
    target: targetTypes.NONE,
  }),
  // MONK
  STAFF: Object.freeze({
    type: toolTypes.STAFF,
    flavorText: "A holy staff",
    imageName: "staff_tool.png",
    target: targetTypes.CLOUDS
  }),
  BALM: Object.freeze({
    type: toolTypes.BALM,
    flavorText: "Balm",
    imageName: "balm_tool.png",
    target: targetTypes.STONE
  }),
  SICKLE: Object.freeze({
    type: toolTypes.SICKLE,
    flavorText: "A sharp sickle",
    imageName: "sickle_tool.png",
    target: targetTypes.FLOWERS,
    hasSecondary: true
  }),
  FLOWERS: Object.freeze({
    type: toolTypes.FLOWERS,
    isHidden: true,
    flavorText: "Purple flowers",
    imageName: "flower_tool.png",
    target: targetTypes.NONE
  }),
  // KNIGHT
  LANCE: Object.freeze({
    type: toolTypes.LANCE,
    flavorText: "A sturdy lance",
    imageName: "lance_tool.png",
    target: targetTypes.MENHIR
  }),
  LASSO: Object.freeze({
    type: toolTypes.LASSO,
    flavorText: "A knight's lasso",
    imageName: "lasso_tool.png",
    target: targetTypes.COW,
    hasSecondary: true
  }),
  SHIELD: Object.freeze({
    type: toolTypes.SHIELD,
    flavorText: "A very shiny shield",
    imageName: "shield_tool.png",
    target: targetTypes.SUN
  }),
  COW: Object.freeze({
    type: toolTypes.COW,
    isHidden: true,
    flavorText: "A wild Longhorn",
    imageName: "cow_tool.png",
    target: targetTypes.NONE
  })
});

export const characters = Object.freeze({
  FARMHAND: Object.freeze({
    name: characterTypes.FARMHAND,
    tools: [tools.GLOVES, tools.LUNCH, tools.SHOVEL, tools.SHARDS]
  }),
  MONK: Object.freeze({
    name: characterTypes.MONK,
    tools: [tools.STAFF, tools.BALM, tools.SICKLE, tools.FLOWERS]
  }),
  KNIGHT: Object.freeze({
    name: characterTypes.KNIGHT, 
    tools: [tools.SHIELD, tools.LASSO, tools.LANCE, tools.COW]
  })
})
