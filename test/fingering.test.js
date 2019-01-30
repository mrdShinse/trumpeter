const fingering = require('../lib/fingering')

describe('fingering', () => {
  const fff = [false, false, false]
  const tff = [true,  false, false]
  const ftf = [false, true,  false]
  const ttf = [true,  true,  false]
  const fft = [false, false, true ]
  const tft = [true,  false, true ]
  const ftt = [false, true,  true ]
  const ttt = [true,  true,  true ]
  const C  = 'C'
  const Cs = 'C#'
  const D  = 'D'
  const Ds = 'D#'
  const E  = 'E'
  const F  = 'F'
  const Fs = 'F#'
  const G  = 'G'
  const Gs = 'G#'
  const A  = 'A'
  const As = 'A#'
  const B  = 'B'

  test(C, () => {
    expect(fingering(C).toString()).toBe(fff.toString());
  })

  test(Cs, () => {
    expect(fingering(Cs).toString()).toBe(ttt.toString());
  })

  test(D, () => {
    expect(fingering(D).toString()).toBe(tft.toString());
  })

  test(Ds, () => {
    expect(fingering(Ds).toString()).toBe(ftt.toString());
  })

  test(E, () => {
    expect(fingering(E).toString()).toBe(ttf.toString());
  })

  test(F, () => {
    expect(fingering(F).toString()).toBe(tff.toString());
  })

  test(Fs, () => {
    expect(fingering(Fs).toString()).toBe(ftf.toString());
  })

  test(G, () => {
    expect(fingering(G).toString()).toBe(fff.toString());
  })

  test(Gs, () => {
    expect(fingering(Gs).toString()).toBe(ftt.toString());
  })

  test(A, () => {
    expect(fingering(A).toString()).toBe(ttf.toString());
  })

  test(As, () => {
    expect(fingering(As).toString()).toBe(tff.toString());
  })

  test(B, () => {
    expect(fingering(B).toString()).toBe(ftf.toString());
  })
})
