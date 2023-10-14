import moment from 'moment';

const dataInfo = [
  {
    steps: '12,904',
    distance: '9,830',
    calories: '2,653',
    chart: {
      morning: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '630',
          calories: '60',
        },
        {
          distance: '200',
          calories: '21',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
      noon: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '1800',
          calories: '134',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '7000',
          calories: '2401',
        },
      ],
      afternoon: [
        {
          distance: '200',
          calories: '37',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
    },
  },
  {
    steps: '2,461',
    distance: '1,614',
    calories: '105',
    chart: {
      morning: [
        {
          distance: '120',
          calories: '14',
        },
        {
          distance: '294',
          calories: '20',
        },
        {
          distance: '1200',
          calories: '71',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
      noon: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
      afternoon: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
    },
  },
  {
    steps: '910',
    distance: '679',
    calories: '44',
    chart: {
      morning: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
      noon: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
      afternoon: [
        {
          distance: '178',
          calories: '12',
        },
        {
          distance: '294',
          calories: '22',
        },
        {
          distance: '120',
          calories: '8',
        },
        {
          distance: '87',
          calories: '4',
        },
      ],
    },
  },
  {
    steps: '8,222',
    distance: '4,801',
    calories: '1,259',
    chart: {
      morning: [
        {
          distance: '1000',
          calories: '343',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '870',
          calories: '120',
        },
      ],
      noon: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '1800',
          calories: '537',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '133',
          calories: '72',
        },
      ],
      afternoon: [
        {
          distance: '998',
          calories: '187',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
    },
  },
  {
    steps: '9,766',
    distance: '7,017',
    calories: '2,001',
    chart: {
      morning: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '2432',
          calories: '643',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '120',
          calories: '24',
        },
      ],
      noon: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '4465',
          calories: '1334',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
      afternoon: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
    },
  },
  {
    steps: '120',
    distance: '93',
    calories: '8',
    chart: {
      morning: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
      noon: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '93',
          calories: '8',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
      afternoon: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
    },
  },
  {
    steps: '21,085',
    distance: '14,789',
    calories: '2,891',
    chart: {
      morning: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '3460',
          calories: '920',
        },
        {
          distance: '1080',
          calories: '437',
        },
      ],
      noon: [
        {
          distance: '278',
          calories: '10',
        },
        {
          distance: '120',
          calories: '10',
        },
        {
          distance: '7801',
          calories: '1334',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
      afternoon: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '150',
          calories: '10',
        },
        {
          distance: '1810',
          calories: '160',
        },
        {
          distance: '90',
          calories: '10',
        },
      ],
    },
  },
  {
    steps: '9,316',
    distance: '7,562',
    calories: '2,100',
    chart: {
      morning: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '1500',
          calories: '417',
        },
      ],
      noon: [
        {
          distance: '500',
          calories: '139',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
      afternoon: [
        {
          distance: '5562',
          calories: '1544',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
    },
  },
  {
    steps: '3,129',
    distance: '1,481',
    calories: '368',
    chart: {
      morning: [
        {
          distance: '120',
          calories: '24',
        },
        {
          distance: '294',
          calories: '60',
        },
        {
          distance: '1200',
          calories: '21',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
      noon: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
      afternoon: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
    },
  },
  {
    steps: '4,904',
    distance: '1,228',
    calories: '380',
    chart: {
      morning: [
        {
          distance: '1000',
          calories: '343',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '870',
          calories: '120',
        },
      ],
      noon: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '1800',
          calories: '537',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '133',
          calories: '72',
        },
      ],
      afternoon: [
        {
          distance: '998',
          calories: '187',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
    },
  },
  {
    steps: '10,922',
    distance: '6,742',
    calories: '1,876',
    chart: {
      morning: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '2432',
          calories: '643',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '120',
          calories: '24',
        },
      ],
      noon: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '4465',
          calories: '1334',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
      afternoon: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
    },
  },
  {
    steps: '12,904',
    distance: '9,830',
    calories: '2,653',
    chart: {
      morning: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '630',
          calories: '60',
        },
        {
          distance: '200',
          calories: '21',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
      noon: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '1800',
          calories: '134',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '7000',
          calories: '2401',
        },
      ],
      afternoon: [
        {
          distance: '200',
          calories: '37',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
    },
  },

  {
    steps: '745',
    distance: '245',
    calories: '31',
    chart: {
      morning: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
      noon: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
      afternoon: [
        {
          distance: '178',
          calories: '12',
        },
        {
          distance: '294',
          calories: '22',
        },
        {
          distance: '120',
          calories: '8',
        },
        {
          distance: '87',
          calories: '4',
        },
      ],
    },
  },
  {
    steps: '18,250',
    distance: '11,764',
    calories: '3,004',
    chart: {
      morning: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '3460',
          calories: '920',
        },
        {
          distance: '1080',
          calories: '437',
        },
      ],
      noon: [
        {
          distance: '278',
          calories: '10',
        },
        {
          distance: '120',
          calories: '10',
        },
        {
          distance: '7801',
          calories: '1334',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
      afternoon: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '150',
          calories: '10',
        },
        {
          distance: '1810',
          calories: '160',
        },
        {
          distance: '90',
          calories: '10',
        },
      ],
    },
  },
  {
    steps: '12,904',
    distance: '9,830',
    calories: '2,653',
    chart: {
      morning: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '630',
          calories: '60',
        },
        {
          distance: '200',
          calories: '21',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
      noon: [
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '1800',
          calories: '134',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '7000',
          calories: '2401',
        },
      ],
      afternoon: [
        {
          distance: '200',
          calories: '37',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
        {
          distance: '0',
          calories: '0',
        },
      ],
    },
  },
];

export const getDates = () => {
  let data = [];
  for (let i = 0; i < 15; i++) {
    data.push({
      date: i < 7 ? moment().subtract(7 - i, 'd') : moment().add(i - 7, 'd'),
      ...dataInfo[i],
    });
  }

  return data;
};

export const isToday = item => {
  return (
    moment(item).date() === moment().date() &&
    moment(item).month() === moment().month() &&
    moment(item).year() === moment().year()
  );
};
