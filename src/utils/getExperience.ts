const Experience = [
  { level: 1, points: 21 },
  { level: 2, points: 66 },
  { level: 3, points: 90 },
  { level: 4, points: 180 },
  { level: 5, points: 365 },
  { level: 6, points: 400 },
  { level: 7, points: 500 },
  { level: 8, points: 600 },
  { level: 9, points: 700 },
  { level: 10, points: 800 },
  { level: 11, points: 900 },
  { level: 12, points: 1000 },
  { level: 13, points: 1300 },
];

const habitMessage = [
  { level: 1, message: 'まずは21日間続けられる小さな習慣から定着させよう！' },
  {
    level: 2,
    message: '新しい習慣を身につけるために必要とされるのは平均して66日間です。',
  },
  {
    level: 3,
    message:
      '小さなことでもコツコツと続けて、必要なことを習慣化できた人だけが目標に近づくことができます。',
  },
  {
    level: 4,
    message:
      'ここまで来ると1年間で2～3個は新しい習慣を身に付けることが可能になります',
  },
  {
    level: 5,
    message: 'よりいっそう良くなっています!',
  },
];

export const getExperience = (level: number): number => {
  let points = Experience.find((p) => p.level === level)?.points;
  if (!points) {
    return (points = 999);
  }
  return points;
};


export const getHabitMessage = (level: number): string => {
  let message = habitMessage.find((p) => p.level === level)?.message;
  if (!message) {
    return (message = 'ここまでくると夢や目標が実現が見えてきたでしょう。');
  }
  return message;
};
