import {Dropdown} from "./component/dropdown/dropdown";

let dd;
beforeEach(() => {
    dd = new Dropdown();
  });
  
it('dd open close test', () => {
    dd.onSelect();
    expect(dd.open).toEqual(true);
    dd.onSelect();
    expect(dd.open).toEqual(false);
});
