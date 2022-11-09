export const filtereByMonthAndYear = (obj: any, month: any, year: any) => {
  const data1 = [];

  for (let i = 0; i <= month.length; i++) {
    //filter month and year
    const byMonthAndyear = obj.filter((out: any) => {
      return out.transferAt.month === month[i] && out.transferAt.year === year;
    });
    if (byMonthAndyear.length !== 0) data1.push(byMonthAndyear);
  }
  //sum total of byMonthAndyear requested amount
  const SUM_byMonthAndyear = data1.map((any) =>
    any.reduce(function (acc: any, v: any) {
      acc[v.transferAt.month] =
        (acc[v.transferAt.month] || 0) + Number(v.requestedAmount);
      return acc;
    }, {})
  );
  //
  const xMonth_yValue = SUM_byMonthAndyear.map((xAndy) => ({
    x: Object.keys(xAndy).toString(),
    y: Number(Object.values(xAndy)),
  }));

  //total del año seleccionado
  const sumTotalYear = SUM_byMonthAndyear.map((year) =>
    Number(Object.values(year))
  ).reduce((prev, curr) => prev + curr, 0);

  const data = [
    {
      id: year,
      data: xMonth_yValue,
    },
  ];

  return { data, sumTotalYear };
};

export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// export const sliceFunc = (array, start, end) => {
//   const newArr = array.slice(start, end);
//   return newArr;
// };

// const example = sliceFunc(MONTHS, values[0], values[1]);
