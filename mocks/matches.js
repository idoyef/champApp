import {sportType} from '../enum/SportType';

export const futureMatches = [
  {
    id: '1',
    sportType: sportType.Soccer,
    homeTeam: 'Barcelona',
    awayTeam: 'Real Madrid',
    startDate: new Date(),
  },
  {
    id: '2',
    sportType: sportType.Soccer,
    homeTeam: 'Arsenal',
    awayTeam: 'Manchester City',
    startDate: new Date(),
  },
  {
    id: '3',
    sportType: sportType.Soccer,
    homeTeam: 'Manchester United',
    awayTeam: 'Porto',
    startDate: new Date(),
  },
  {
    id: '4',
    sportType: sportType.Soccer,
    homeTeam: 'Barcelona',
    awayTeam: 'Real Madrid',
    startDate: new Date(),
  },
  {
    id: '5',
    sportType: sportType.Soccer,
    homeTeam: 'Barcelona',
    awayTeam: 'Real Madrid',
    startDate: new Date(),
  },
  {
    id: '6',
    sportType: sportType.Soccer,
    homeTeam: 'Barcelona',
    awayTeam: 'Real Madrid',
    startDate: new Date(),
  },
];

export const challengesBySportType = {
  Soccer: [
    {
      type: 'winner',
      options: ['homeTeam', 'awayTeam', 'tie'],
    },
    {
      type: 'totalGoals',
    },
    {
      type: 'firstTeamToScore',
      options: ['homeTeam', 'awayTeam', 'noGoals'],
    },
    {
      type: 'exactScore',
    },
  ],
};
