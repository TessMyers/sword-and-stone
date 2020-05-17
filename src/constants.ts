export const pageTypes = {
  CHOOSE: "CHOOSE",
  TABLEAU: "TABLEAU",
  NARRATIVE: "NARRATIVE"
}
export const characterTypes = {
  FARMHAND: "FARMHAND",
  MONK: "MONK",
  KNIGHT: "KNIGHT"
}

export const toolTypes = {
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
  COW: "COW"
}

export const targetTypes = {
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
}

export const tools = {
  // FARMHAND
  SHOVEL: {
    type: toolTypes.SHOVEl,
    flavorText: "A shovel",
    imageSrc: "",
    owner: characterTypes.FARMHAND,
    target: "THING"
  },
  GLOVES: {
    type: toolTypes.GLOVES,
    flavorText: "Gloves",
    imageSrc: "",
    owner: characterTypes.FARMHAND,
    target: targetTypes.SHARDS
  },
  LUNCH: {
    type: toolTypes.LUNCH,
    flavorText: "Bread and cheese",
    imageSrc: "",
    owner: characterTypes.FARMHAND,
    target: targetTypes.SHRINE
  },
  SHARDS: {
    type: toolTypes.SHARDS,
    hidden: true,
    flavorText: "Sparkling stone shards",
    imageSrc: "",
    owner: characterTypes.FARMHAND,
    target: targetTypes.NONE
  },
  // MONK
  STAFF: {
    type: toolTypes.STAFF,
    flavorText: "A holy staff",
    imageSrc: "",
    owner: characterTypes.MONK,
    target: targetTypes.CLOUDS
  },
  BALM: {
    type: toolTypes.BALM,
    flavorText: "Healing balm",
    imageSrc: "",
    owner: characterTypes.MONK,
    target: targetTypes.STONE // or sword??
  },
  SICKLE: {
    type: toolTypes.SICKLE,
    flavorText: "A sharp sickle",
    imageSrc: "",
    owner: characterTypes.MONK,
    target: targetTypes.FLOWERS
  },
  FLOWERS: {
    type: toolTypes.FLOWERS,
    hidden: true,
    flavorText: "Purple flowers",
    imageSrc: "",
    owner: characterTypes.MONK,
    target: targetTypes.NONE
  },
  // KNIGHT
  LANCE: {
    type: toolTypes.LANCE,
    flavorText: "A sturdy lance",
    imageSrc: "",
    owner: characterTypes.KNIGHT,
    target: targetTypes.MENHIR
  },
  LASSO: {
    type: toolTypes.LASSO,
    flavorText: "A knight's lasso",
    imageSrc: "",
    owner: characterTypes.KNIGHT,
    target: targetTypes.COW
  },
  SHIELD: {
    type: toolTypes.SHIELD,
    flavorText: "A very shiny shield",
    imageSrc: "",
    owner: characterTypes.KNIGHT,
    target: targetTypes.SUN
  },
  COW: {
    type: toolTypes.COW,
    hidden: true,
    flavorText: "A wild Longhorn cow",
    imageSrc: "",
    owner: characterTypes.KNIGHT,
    target: targetTypes.NONE
  }
};

export const characters = {
  FARMHAND: {
    name: characterTypes.FARMHAND,
    tools: [tools.SHOVEL, tools.GLOVES, tools.LUNCH],
    hiddenTools: [tools.SHARDS]
  },
  MONK: {
    name: characterTypes.MONK,
    tools: [tools.STAFF, tools.BALM, tools.SICKLE],
    hiddenTools: [tools.FLOWERS]
  },
  KNIGHT: {
    name: characterTypes.KNIGHT, 
    tools: [tools.SHIELD, tools.LASSO, tools.LANCE],
    hiddenTools: [tools.COW]
  }
}