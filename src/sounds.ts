import thunderSmacks from "./assets/audio/thunder_with_thumps.mp3";
import distantThunder from "./assets/audio/distant_thunder.mp3"
import cork from "./assets/audio/cork.mp3";
import rocksSplash from "./assets/audio/rocksplash.mp3";
// import sunvoom from "./assets/audio/sunvoom.mp3";
import clinkBreeze from "./assets/audio/clink_and_breeze.mp3";
import diggingPipes from "./assets/audio/digging_and_pipes.mp3";
import swordDraw from "./assets/audio/sworddraw.mp3";
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

import grass01 from "./assets/audio/grass01.mp3";
import grass02 from "./assets/audio/grass02.mp3";

import hiccup from "./assets/audio/hiccup.mp3";
import squeak from "./assets/audio/squeak02.mp3";
import weeSqueak from "./assets/audio/squeak01.mp3";
import fart from "./assets/audio/squish_fart.mp3";
import wetSquish from "./assets/audio/squish_wet.mp3";

import squeakA from "./assets/audio/squeakA.mp3";
import squeakC from "./assets/audio/squeakC.mp3";
import squeakD from "./assets/audio/squeakD.mp3";
import squeakE from "./assets/audio/squeakE.mp3";
import squeakG from "./assets/audio/squeakG.mp3";

export const soundMap:any = {
  "SWORD": { audio: [new Audio(swordDraw)] },

  "PIPES_SUCCESS": { audio: [new Audio(diggingPipes)] },
  "SHRINE_SUCCESS": { audio: [new Audio(clinkBreeze)] },
  "STONE_SUCCESS": { audio: [new Audio(cork)] },
  "CLOUDS_SUCCESS": { audio: [new Audio(thunderSmacks)] },
  "MENHIR_SUCCESS": { audio: [new Audio(rocksSplash)] },
  // "SUN_SUCCESS": { audio: [new Audio(sunvoom)] },

  "FLOWERS_SECONDARY": { audio: [new Audio(flowersSecondary)] },
  "COW_SECONDARY": { audio: [new Audio(mooSecondary)] },
  "SHARDS_SECONDARY": { audio: [new Audio(rattleSecondary)] },
  // Dead end targets
  "CROW": { audio: [new Audio(caw1), new Audio(caw2), new Audio(caw3)], counter: 0 },
  "SHRINE": { audio: [new Audio(bowlRattle01), new Audio(bowlRattle02), new Audio(bowlRattle03)], counter: 0},
  "CLOUDS": { audio: [new Audio(distantThunder)] },
  "FLOCK": { audio: [new Audio(flock)] },
  "COW": { audio: [new Audio(moo01), new Audio(moo02), new Audio(moo03)], counter: 0 },
  "SHARDS": { audio: [new Audio(rattle03), new Audio(rattle04), new Audio(rattle06), new Audio(rattle07)], counter: 0 },
  "PIPES": { audio: [new Audio(clank01) ,new Audio(clank02), new Audio(clank03)], counter: 0 },
  "MENHIR": { audio: [new Audio(rockRattle01) ,new Audio(rockRattle02), new Audio(rockRattle03)], counter: 0 },
  "FLOWERS": { audio: [new Audio(flowers02), new Audio(flowers03), new Audio(flowers04)], counter: 0 },
  "STREAM": { audio: [new Audio(splash01), new Audio(splash02), new Audio(splash03), new Audio(splash04)], counter: 0 },
  // mushrooms
  "MUSHROOM_A": { audio: [new Audio(squeakA)] },
  "MUSHROOM_C": { audio: [new Audio(squeakC)] },
  "MUSHROOM_D": { audio: [new Audio(squeakD)] },
  "MUSHROOM_E": { audio: [new Audio(squeakE)] },
  "MUSHROOM_G": { audio: [new Audio(squeakG)] },
  "MUSHROOM01": { audio: [new Audio(fart)] },
  "MUSHROOM02": { audio: [new Audio(squeak)] },
  "MUSHROOM03": { audio: [new Audio(hiccup)] }

  
}

export function playSound(target:string) {
  const sound = soundMap[target];
  if (sound) {
    let clip = sound.audio[0];
    if (!isNaN(sound.counter)) {
      clip = sound.audio[sound.counter];
      sound.counter = (sound.counter == (sound.audio.length - 1)) ? 0 : sound.counter + 1;
    }
    // console.log("playing sound: ", target, sound.counter);
    clip.play();
  };
};

