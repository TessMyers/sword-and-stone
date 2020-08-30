
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