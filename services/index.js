// a bool
// b bool
// c bool
// d float
// e int
// f int
const testTherapy = (a, b, c, d, e, f) => {
  let h = null,
      m = null,
      p = null,
      t = null,
      k = null;

  try {

    if (a && b && !c) {
      h = m;
      h = t;
    } else if (a && b && c) {
      h = p;
    } else if (!a && b && c) {
      h = t;
    } else {
      console.error('Error')
    }

    if (h === m) {
      k = d + (d * e / 10)
    }

    if (h === p) {
      k = d + (d * (e - f) / 25.5)
    }

    if (h === t) {
      k = d - (d * f / 30)
    }

    if (h === p) {
      k = 2 * d + (d * e / 100)
    }

    if (a && !b && c) {
      h = m;
    }

    if (h === m) {
      k = f + d + (d * e / 100)
    }

    const result = {
      h,
      k
    }
    return result
  } catch(e) {
    throw new Error(e.message)
  }
}

module.exports = {
  testTherapy
}
