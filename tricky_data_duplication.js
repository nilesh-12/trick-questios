function resolve_duplication(duplicate_data) {
  let uniq_names = new Set(duplicate_data.map((e) => e[0]))
  uniq_names
  let name_has_data = []
  uniq_names.forEach((name) => {
    let filter_by_name = duplicate_data.filter((e) => e[0] === name)
    filter_by_name
    if (filter_by_name.length > 1) {
      const merged_arr_by_name = filter_by_name.reduce((accum, current) =>
        accum.map((accum_val, index) =>
          Number(accum_val)
            ? (+accum_val + +current[index]).toFixed(2) + ""
            : accum_val
        )
      )
      name_has_data.push(merged_arr_by_name)
      return
    }
    name_has_data.push(filter_by_name[0])
  })
  return name_has_data
}

const test_data = [
  [
    "Milan Pithiya",
    "32.45",
    "12.71",
    "-0.56",
    "2.78",
    "1.73",
    "0.81",
    "0",
    null,
  ],
  ["Sanjay Sen", "21.44", "10.71", "0.56", "0", "3.46", "0", "0", "0", null],
  [
    "Nilesh Suthar",
    "19.47",
    "17.28",
    "0.76",
    "0",
    "3.46",
    "0",
    "2.02",
    "-0.2",
    null,
  ],
  [
    "Milan Pithiya",
    "1.00",
    "12.71",
    "-0.56",
    "2.78",
    "1.73",
    "0.81",
    "0",
    "0",
    null,
  ],
]

const result = resolve_duplication(test_data)
result.forEach((r) => console.log(r.join(", ")))
