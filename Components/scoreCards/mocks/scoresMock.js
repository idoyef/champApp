import {matchStatus} from '../../../enum/MatchStatus';
import {sportType} from '../../../enum/SportType';

export const scoreGroupsMock = [
  {
    id: '1',
    date: new Date(),
    groups: [
      {
        id: '1',
        sportType: sportType.Soccer,
        league: 'Premier League',
        leagueIcon: require('../../../icons/soccer.png'),
        scores: [
          {
            id: '1',
            homeTeam: {
              name: 'Arsenal',
              score: 2,
              icon: require('../../../icons/arsenal.png'),
            },
            awayTeam: {
              name: 'Chelsea',
              score: 0,
              icon: require('../../../icons/chelsea.png'),
            },
            status: matchStatus.Started,
            time: 72,
            sportType: sportType.Soccer,
          },
          {
            id: '2',
            homeTeam: {
              name: 'Liverpool',
              score: 0,
              icon: require('../../../icons/liverpool.png'),
            },
            awayTeam: {
              name: 'Man City',
              score: 1,
              icon: require('../../../icons/manchester-city.png'),
            },
            status: matchStatus.Final,
            time: 90,
            sportType: sportType.Soccer,
          },
          {
            id: '3',
            homeTeam: {
              name: 'West Ham',
              score: 4,
              icon: require('../../../icons/manchester-united.png'),
            },
            awayTeam: {
              name: 'Everton',
              score: 1,
              icon: require('../../../icons/arsenal.png'),
            },
            status: matchStatus.Started,
            time: 10,
            sportType: sportType.Soccer,
          },
          {
            id: '4',
            homeTeam: {
              name: 'Leicester',
              score: 2,
              icon: require('../../../icons/chelsea.png'),
            },
            awayTeam: {
              name: 'Aston Villa',
              score: 2,
              icon: require('../../../icons/liverpool.png'),
            },
            status: matchStatus.Started,
            time: 80,
            sportType: sportType.Soccer,
          },
          {
            id: '5',
            homeTeam: {
              name: 'Leeds',
              score: 1,
              icon: require('../../../icons/manchester-city.png'),
            },
            awayTeam: {
              name: 'Norwich',
              score: 2,
              icon: require('../../../icons/manchester-united.png'),
            },
            status: matchStatus.NotStarted,
            sportType: sportType.Soccer,
          },
          {
            id: '6',
            homeTeam: {
              name: 'Newcastle',
              score: 0,
              icon: require('../../../icons/arsenal.png'),
            },
            awayTeam: {
              name: 'Burnley',
              score: 0,
              icon: require('../../../icons/chelsea.png'),
            },
            status: matchStatus.Final,
            time: 90,
            sportType: sportType.Soccer,
          },
          {
            id: '7',
            homeTeam: {
              name: 'Southampton',
              score: 1,
              icon: require('../../../icons/liverpool.png'),
            },
            awayTeam: {
              name: 'Brentford',
              score: 1,
              icon: require('../../../icons/manchester-city.png'),
            },
            status: matchStatus.Started,
            time: 40,
            sportType: sportType.Soccer,
          },
          {
            id: '8',
            homeTeam: {
              name: 'Watford',
              score: 6,
              icon: require('../../../icons/manchester-united.png'),
            },
            awayTeam: {
              name: 'Wolves',
              score: 1,
              icon: require('../../../icons/arsenal.png'),
            },
            status: matchStatus.HalfTime,
            time: 45,
            sportType: sportType.Soccer,
          },
          {
            id: '9',
            homeTeam: {
              name: 'Spurs',
              score: 1,
              icon: require('../../../icons/liverpool.png'),
            },
            awayTeam: {
              name: 'Man United',
              score: 2,
              icon: require('../../../icons/manchester-united.png'),
            },
            status: matchStatus.Final,
            time: 90,
            sportType: sportType.Soccer,
          },
        ],
      },
      {
        id: '2',
        sportType: sportType.Soccer,
        league: 'La Liga',
        leagueIcon: require('../../../icons/soccer.png'),
        scores: [
          {
            id: '11',
            homeTeam: {
              name: 'Real Madrid',
              score: 0,
              icon: require('../../../icons/arsenal.png'),
            },
            awayTeam: {
              name: 'Barcelona',
              score: 3,
              icon: require('../../../icons/chelsea.png'),
            },
            status: matchStatus.Started,
            time: 72,
            sportType: sportType.Soccer,
          },
          {
            id: '12',
            homeTeam: {
              name: 'Osasuna',
              score: 2,
              icon: require('../../../icons/liverpool.png'),
            },
            awayTeam: {
              name: 'Valencia',
              score: 2,
              icon: require('../../../icons/manchester-city.png'),
            },
            status: matchStatus.Final,
            time: 72,
            sportType: sportType.Soccer,
          },
        ],
      },
    ],
  },
];

export const soccerScoresMock = [
  {
    id: '1',
    homeTeam: {
      name: 'Arsenal',
      score: 2,
      icon: require('../../../icons/arsenal.png'),
    },
    awayTeam: {
      name: 'Chelsea',
      score: 0,
      icon: require('../../../icons/chelsea.png'),
    },
    status: 'Started', // move to enum
    time: 72,
    sportType: 'Soccer', // move to enum
  },
  {
    id: '2',
    homeTeam: {
      name: 'Liverpool',
      score: 0,
      icon: require('../../../icons/liverpool.png'),
    },
    awayTeam: {
      name: 'Man City',
      score: 1,
      icon: require('../../../icons/manchester-city.png'),
    },
    status: 'Final', // move to enum
    time: 90,
    sportType: 'Soccer', // move to enum
  },
  {
    id: '3',
    homeTeam: {
      name: 'West Ham',
      score: 4,
      icon: require('../../../icons/manchester-united.png'),
    },
    awayTeam: {
      name: 'Everton',
      score: 1,
      icon: require('../../../icons/arsenal.png'),
    },
    status: 'Started', // move to enum
    time: 10,
    sportType: 'Soccer', // move to enum
  },
  {
    id: '4',
    homeTeam: {
      name: 'Leicester',
      score: 2,
      icon: require('../../../icons/chelsea.png'),
    },
    awayTeam: {
      name: 'Aston Villa',
      score: 2,
      icon: require('../../../icons/liverpool.png'),
    },
    status: 'Started', // move to enum
    time: 80,
    sportType: 'Soccer', // move to enum
  },
  {
    id: '5',
    homeTeam: {
      name: 'Leeds',
      score: 1,
      icon: require('../../../icons/manchester-city.png'),
    },
    awayTeam: {
      name: 'Norwich',
      score: 2,
      icon: require('../../../icons/manchester-united.png'),
    },
    status: 'NotStarted', // move to enum
    sportType: 'Soccer', // move to enum
  },
  {
    id: '6',
    homeTeam: {
      name: 'Newcastle',
      score: 0,
      icon: require('../../../icons/arsenal.png'),
    },
    awayTeam: {
      name: 'Burnley',
      score: 0,
      icon: require('../../../icons/chelsea.png'),
    },
    status: 'Final', // move to enum
    time: 90,
    sportType: 'Soccer', // move to enum
  },
  {
    id: '7',
    homeTeam: {
      name: 'Southampton',
      score: 1,
      icon: require('../../../icons/liverpool.png'),
    },
    awayTeam: {
      name: 'Brentford',
      score: 1,
      icon: require('../../../icons/manchester-city.png'),
    },
    status: 'Started', // move to enum
    time: 40,
    sportType: 'Soccer', // move to enum
  },
  {
    id: '8',
    homeTeam: {
      name: 'Watford',
      score: 6,
      icon: require('../../../icons/manchester-united.png'),
    },
    awayTeam: {
      name: 'Wolves',
      score: 1,
      icon: require('../../../icons/arsenal.png'),
    },
    status: 'Halftime', // move to enum
    time: 45,
    sportType: 'Soccer', // move to enum
  },
  {
    id: '9',
    homeTeam: {
      name: 'Spurs',
      score: 1,
      icon: require('../../../icons/liverpool.png'),
    },
    awayTeam: {
      name: 'Man United',
      score: 2,
      icon: require('../../../icons/manchester-united.png'),
    },
    status: 'Final', // move to enum
    time: 90,
    sportType: 'Soccer', // move to enum
  },
];
