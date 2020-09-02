
export function expandRing(elem:HTMLElement, identifier:string ): null {
  const effectClass = `${identifier}CircleOpen`;
  setTimeout(() => {
    elem.classList.add(effectClass);
  },0);
  setTimeout(()=> {
    elem.classList.remove(effectClass);
  }, 1500);
  return null;
}

let mushroomRun:string[] = [];
const pattern = Object.freeze(["MUSHROOM_A", "MUSHROOM_C", "MUSHROOM_D", "MUSHROOM_E", "MUSHROOM_G"]);

export function checkMushroomRun(target:string): boolean {

  if (!target.match('MUSHROOM')) { 
    mushroomRun = [];
    return false; 
  }

  mushroomRun.push(target);
  for (let i = 0; i < mushroomRun.length ; i++) {
    if (mushroomRun[i] !== pattern[i]) {
      mushroomRun = [];
      return false;
    }
  }
  if (mushroomRun.length === pattern.length) {
    return true;
  }
  return false;
}