import { targetTypes, otherTargetTypes } from "@/constants";

import thunderSmacks from "./assets/audio/thunder_with_thumps.mp3";
import distantThunder from "./assets/audio/distant_thunder.mp3";
import cork from "./assets/audio/cork.mp3";
import rocksSplash from "./assets/audio/rocksplash.mp3";
// import sunWink from "./assets/audio/wink.mp3";
import sunSizzle from "./assets/audio/sunSizzle.mp3";
import clinkBreeze from "./assets/audio/clink_and_breeze.mp3";
import diggingPipes from "./assets/audio/digging_and_pipes.mp3";
import swordDraw from "./assets/audio/sworddraw.mp3";
import swordScrape from "./assets/audio/scrape02.mp3";
import flock from "./assets/audio/flock01.mp3";

import caw1 from "./assets/audio/caw01.mp3";
import caw2 from "./assets/audio/caw02.mp3";
import caw3 from "./assets/audio/caw03.mp3";

import bowlRattle01 from "./assets/audio/bowl_rattle01.mp3";
import bowlRattle02 from "./assets/audio/bowl_rattle02.mp3";
import bowlRattle03 from "./assets/audio/bowl_rattle03.mp3";

import moo01 from "./assets/audio/moo01.mp3";
import moo02 from "./assets/audio/moo02.mp3";
import moo03 from "./assets/audio/moo03.mp3";
import mooSecondary from "./assets/audio/moo_secondary.mp3";

import rattle03 from "./assets/audio/rattle03.mp3";
import rattle04 from "./assets/audio/rattle04.mp3";
import rattle06 from "./assets/audio/rattle06.mp3";
import rattle07 from "./assets/audio/rattle07.mp3";
import rattleSecondary from "./assets/audio/rattleSecondary.mp3";

import clank01 from "./assets/audio/clank01_echo.mp3";
import clank02 from "./assets/audio/clank02_echo.mp3";
import clank03 from "./assets/audio/clank03_echo.mp3";

import rockRattle01 from "./assets/audio/rocks_rattle01.mp3";
import rockRattle02 from "./assets/audio/rocks_rattle02.mp3";
import rockRattle03 from "./assets/audio/rocks_rattle03.mp3";

import flowersSecondary from "./assets/audio/flowersSecondary.mp3";
import flowers02 from "./assets/audio/flowers02.mp3";
import flowers03 from "./assets/audio/flowers03.mp3";
import flowers04 from "./assets/audio/flowers04.mp3";

import splash01 from "./assets/audio/splash01.mp3";
import splash02 from "./assets/audio/splash02.mp3";
import splash03 from "./assets/audio/splash03.mp3";
import splash04 from "./assets/audio/splash04.mp3";

import bone01 from "./assets/audio/bone01.mp3";
import bone02 from "./assets/audio/bone02.mp3";
import bone03 from "./assets/audio/bone03.mp3";
import bone04 from "./assets/audio/bone04.mp3";

import swordTing01 from "./assets/audio/swordTing01.mp3";
import swordTing02 from "./assets/audio/swordTing02.mp3";
import swordTing03 from "./assets/audio/swordTing03.mp3";

// import grass01 from "./assets/audio/grass01.mp3";
// import grass02 from "./assets/audio/grass02.mp3";

import hiccup from "./assets/audio/hiccup.mp3";
import squeak from "./assets/audio/squeak02.mp3";
// import weeSqueak from "./assets/audio/squeak01.mp3";
import fart from "./assets/audio/squish_fart.mp3";
// import wetSquish from "./assets/audio/squish_wet.mp3";

import humA from "./assets/audio/humA.mp3";
import humB from "./assets/audio/humB.mp3";
import humCsharp from "./assets/audio/humCsharp.mp3";
import humD from "./assets/audio/humD.mp3";
import humE from "./assets/audio/humE.mp3";

import doubleDrop from "./assets/audio/double-drop.mp3";

export const soundMap: any = {
  [targetTypes.SWORD]: { audio: [new Audio(swordDraw)] },
  SWORD_SCRAPE: { audio: [new Audio(swordScrape)] },

  PIPES_SUCCESS: { audio: [new Audio(diggingPipes)] },
  SHRINE_SUCCESS: { audio: [new Audio(clinkBreeze)] },
  STONE_SUCCESS: { audio: [new Audio(cork)] },
  CLOUDS_SUCCESS: { audio: [new Audio(thunderSmacks)] },
  MENHIR_SUCCESS: { audio: [new Audio(rocksSplash)] },
  SUN_SUCCESS: { audio: [new Audio(sunSizzle)] },

  FLOWERS_SECONDARY: { audio: [new Audio(flowersSecondary)] },
  COW_SECONDARY: { audio: [new Audio(mooSecondary)] },
  SHARDS_SECONDARY: { audio: [new Audio(rattleSecondary)] },
  // Dead end targets
  [otherTargetTypes.CROW_A]: { audio: [new Audio(caw1), new Audio(caw2), new Audio(caw3)], counter: 0 },
  [otherTargetTypes.CROW_B]: { audio: [new Audio(caw3), new Audio(caw2), new Audio(caw1)], counter: 0 },
  [targetTypes.SHRINE]: { audio: [new Audio(bowlRattle01), new Audio(bowlRattle02), new Audio(bowlRattle03)], counter: 0 },
  [targetTypes.CLOUDS]: { audio: [new Audio(distantThunder)] },
  [otherTargetTypes.FLOCK]: { audio: [new Audio(flock)] },
  [targetTypes.COW]: { audio: [new Audio(moo01), new Audio(moo02), new Audio(moo03)], counter: 0 },
  [targetTypes.SHARDS]: { audio: [new Audio(rattle03), new Audio(rattle04), new Audio(rattle06), new Audio(rattle07)], counter: 0 },
  [targetTypes.PIPES]: { audio: [new Audio(clank01), new Audio(clank02), new Audio(clank03)], counter: 0 },
  [targetTypes.MENHIR]: { audio: [new Audio(rockRattle01), new Audio(rockRattle02), new Audio(rockRattle03)], counter: 0 },
  [targetTypes.FLOWERS]: { audio: [new Audio(flowers02), new Audio(flowers03), new Audio(flowers04)], counter: 0 },
  [otherTargetTypes.STREAM]: { audio: [new Audio(splash01), new Audio(splash02), new Audio(splash03), new Audio(splash04)], counter: 0 },
  [otherTargetTypes.SKULL]: { audio: [new Audio(bone01), new Audio(bone02), new Audio(bone03), new Audio(bone04)], counter: 0 },
  [otherTargetTypes.SWORDHAFT]: { audio: [new Audio(swordTing01), new Audio(swordTing02), new Audio(swordTing03)], counter: 0}, 
  // mushrooms
  [otherTargetTypes.MUSHROOM_A]: { audio: [new Audio(humA)] },
  [otherTargetTypes.MUSHROOM_C]: { audio: [new Audio(humB)] },
  [otherTargetTypes.MUSHROOM_D]: { audio: [new Audio(humCsharp)] },
  [otherTargetTypes.MUSHROOM_E]: { audio: [new Audio(humD)] },
  [otherTargetTypes.MUSHROOM_G]: { audio: [new Audio(humE)] },
  [otherTargetTypes.MUSHROOM01]: { audio: [new Audio(fart)] },
  [otherTargetTypes.MUSHROOM02]: { audio: [new Audio(squeak)] },
  [otherTargetTypes.MUSHROOM03]: { audio: [new Audio(hiccup)] },
  mushie: { audio: [new Audio(doubleDrop)]}
};

export function playSound(target: string) {
  const sound = soundMap[target];
  if (sound) {
    let clip = sound.audio[0];
    if (!isNaN(sound.counter)) {
      clip = sound.audio[sound.counter];
      sound.counter = sound.counter == sound.audio.length - 1 ? 0 : sound.counter + 1;
    }
    clip.play();
  }
}
