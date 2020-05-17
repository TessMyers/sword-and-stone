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

// export const tools = {
//   FARMHAND: {
//     SHOVEL: "SHOVEL",
//     GLOVES: "GLOVES",

//   }
// }

export const tools = {
  // FARMHAND
  SHOVEL: {
    flavorText: "A shovel",
    owner: characterTypes.FARMHAND
  },
  GLOVES: {
    flavorText: "Gloves",
    owner: characterTypes.FARMHAND
  },
  LUNCH: {
    flavorText: "Bread and cheese",
    owner: characterTypes.FARMHAND
  },
  SHARDS: {
    hidden: true,
    flavorText: "Sparkling stone shards",
    owner: characterTypes.FARMHAND
  },
  // MONK
  STAFF: {
    flavorText: "A holy staff",
    owner: characterTypes.MONK
  },
  BALM: {
    flavorText: "Healing balm",
    owner: characterTypes.MONK
  },
  SICKLE: {
    flavorText: "A sharp sickle",
    owner: characterTypes.MONK
  },
  FLOWERS: {
    hidden: true,
    flavorText: "Purple flowers",
    owner: characterTypes.MONK
  },
  // KNIGHT
  LANCE: {
    flavorText: "A sturdy lance",
    owner: characterTypes.KNIGHT
  },
  LASSO: {
    flavorText: "A knight's lasso",
    owner: characterTypes.KNIGHT
  },
  SHIELD: {
    flavorText: "A very shiny shield",
    owner: characterTypes.KNIGHT
  },
  COW: {
    hidden: true,
    flavorText: "A wild Longhorn cow",
    owner: characterTypes.KNIGHT
  }
};

export const characters = {
  FARMHAND: {
    name: "FARMHAND",
    tools: [tools.SHOVEL, tools.GLOVES, tools.LUNCH],
    hiddenTools: [tools.SHARDS]
  },
  MONK: {
    name: "MONK",
    tools: [tools.STAFF, tools.BALM, tools.SICKLE],
    hiddenTools: [tools.FLOWERS]
  },
  KNIGHT: {
    name: "KNIGHT", 
    tools: [tools.SHIELD, tools.LASSO, tools.LANCE],
    hiddenTools: [tools.COW]
  }
}
