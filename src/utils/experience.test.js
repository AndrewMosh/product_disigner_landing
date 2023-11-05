import { EXPERIENCE } from "./EXPERIENCE";

describe("EXPERIENCE", () => {
  it("contains the expected number of experience items", () => {
    expect(EXPERIENCE).toHaveLength(7);
  });

  it("contains expected experience data", () => {
    expect(EXPERIENCE[0]).toEqual({
      org: "Xpressrun - Delivery startup",
      position: "UXI Designer",
    });

    expect(EXPERIENCE[5]).toEqual({
      org: "Яндекс Алиса - Хакатон",
      position: "UX Designer",
    });
  });
});
