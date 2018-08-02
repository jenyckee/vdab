fetch('http://opendata.vdab.be/vdab/vacatures?year=2014&offset=0&limit=11000')
  .then(response => response.json())
  .then(json => {
    const lb = R.filter(v => v.PROVINCIE.startsWith("7"), json)
    const wv = R.filter(v => v.PROVINCIE.startsWith("3"), json)
    const ov = R.filter(v => v.PROVINCIE.startsWith("4"), json)
    const an = R.filter(v => v.PROVINCIE.startsWith("1"), json)
    const vb = R.filter(v => v.PROVINCIE.startsWith("2"), json)
    const ander = R.filter(v => v.PROVINCIE.startsWith("9"), json)
    console.log(json.length, wv, ov, lb, an, vb, ander)
  })

