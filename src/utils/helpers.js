export function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const espnLogo = (teamAbrv, size = 24, sport = "mlb") => {
  let teamName = teamAbrv;

  if (teamAbrv === "UTA") {
    teamName = "UTAH";
  }

  if (teamAbrv === "CWS") {
    teamName = "CHW";
  }
  return `https://a.espncdn.com/combiner/i?img=/i/teamlogos/${sport.toLowerCase()}/500/${teamName.toLowerCase()}.png&h=${size}&w=${size}`;
};

export const sortTeamsByDivion = allTeams => {
  return Object.entries(
    allTeams.reduce((teams, team) => {
      const { Conference, League, Division } = team;
      const teamsSortedByDivision = teams;
      teamsSortedByDivision[`${League || ""} ${Conference || ""} ${Division}`] =
        teamsSortedByDivision[
          `${League || ""} ${Conference || ""} ${Division}`
        ] || [];
      teamsSortedByDivision[
        `${League || ""} ${Conference || ""} ${Division}`
      ].push(team);
      return teamsSortedByDivision;
    }, {})
  ).sort();
};

export const NflTeamDecoders = TeamID => {
  return [
    {
      city: "Arizona",
      name: "Cardinals",
      abr: "ARI",
      conf: "NFC",
      div: "West",
    },
    {
      city: "Atlanta",
      name: "Falcons",
      abr: "ATL",
      conf: "NFC",
      div: "South",
    },
    {
      city: "Baltimore",
      name: "Ravens",
      abr: "BAL",
      conf: "AFC",
      div: "North",
    },
    {
      city: "Buffalo",
      name: "Bills",
      abr: "BUF",
      conf: "AFC",
      div: "EAST",
    },
    {
      city: "Carolina",
      name: "Panthers",
      abr: "CAR",
      conf: "NFC",
      div: "South",
    },
    {
      city: "Cincinati",
      name: "Bengals",
      abr: "CIN",
      conf: "AFC",
      div: "North",
    },
    {
      city: "Chicago",
      name: "Bears",
      abr: "CHI",
      conf: "NFC",
      div: "North",
    },
    {
      city: "Cleveland",
      name: "Browns",
      abr: "CLE",
      conf: "AFC",
      div: "North",
    },
    {
      city: "Dallas",
      name: "Cowboys",
      abr: "DAL",
      conf: "NFC",
      div: "East",
    },
    {
      city: "Denver",
      name: "Broncos",
      abr: "DEN",
      conf: "AFC",
      div: "West",
    },
    {
      city: "Detroit",
      name: "Lions",
      abr: "DET",
      conf: "NFC",
      div: "North",
    },
    {
      city: "Green Bay",
      name: "Packers",
      abr: "GB",
      conf: "NFC",
      div: "North",
    },
    {
      city: "Houston",
      name: "Texans",
      abr: "HOU",
      conf: "AFC",
      div: "South",
    },
    {
      city: "Indianapolis",
      name: "Colts",
      abr: "IND",
      conf: "AFC",
      div: "South",
    },
    {
      city: "Jacksonville",
      name: "Jaquars",
      abr: "JAX",
      conf: "AFC",
      div: "South",
    },
    {
      city: "Kansas City",
      name: "Chiefts",
      abr: "KC",
      conf: "AFC",
      div: "West",
    },
    {
      city: "Miami",
      name: "Dolphins",
      abr: "MIA",
      conf: "AFC",
      div: "East",
    },
    {
      city: "Minnesota",
      name: "Vikings",
      abr: "MIN",
      conf: "AFC",
      div: "North",
    },
    {
      city: "New England",
      name: "Patriots",
      abr: "NE",
      conf: "AFC",
      div: "East",
    },
    {
      city: "New Orleans",
      name: "Saints",
      abr: "NO",
      conf: "NFC",
      div: "South",
    },
    {
      city: "New York",
      name: "Giants",
      abr: "NYG",
      conf: "NFC",
      div: "East",
    },
    {
      city: "New York",
      name: "Jets",
      abr: "NYJ",
      conf: "AFC",
      div: "East",
    },
    {
      city: "Oakland",
      name: "Raiders",
      abr: "OAK",
      conf: "AFC",
      div: "West",
    },
    {
      city: "Philidelphia",
      name: "Eagles",
      abr: "PHI",
      conf: "NFC",
      div: "East",
    },
    {
      city: "Pittsburgh",
      name: "Steelers",
      abr: "PIT",
      conf: "AFC",
      div: "North",
    },
    {
      city: "Los Angeles",
      name: "Chargers",
      abr: "LAC",
      conf: "AFC",
      div: "West",
    },
    {
      city: "Seattle",
      name: "Seahawks",
      abr: "SEA",
      conf: "NFC",
      div: "West",
    },
    {
      city: "San Francisco",
      name: "49ers",
      abr: "SF",
      conf: "NFC",
      div: "West",
    },
    {
      city: "Los Angeles",
      name: "Rams",
      abr: "LAR",
      conf: "NFC",
      div: "West",
    },
    {
      city: "Tampa Bay",
      name: "Buccaneers",
      abr: "TB",
      conf: "NFC",
      div: "South",
    },
    {
      city: "Tennessee",
      name: "Titants",
      abr: "TEN",
      conf: "AFC",
      div: "South",
    },
    {
      city: "Washington",
      name: "Redskins",
      abr: "WAS",
      conf: "NFC",
      div: "East",
    },
  ].find(team => team.abr === TeamID);
};

export const isArrayEmpty = arrayArg => {
  if (arrayArg && arrayArg.length) {
    return false;
  }
  return true;
};

export const isObjectEmpty = myObject => {
  return !Object.keys(myObject).length;
};

export const smallestToLargest = propArg => {
  return (a, b) => {
    if (a[propArg] > b[propArg]) {
      return 1;
    }
    if (b[propArg] > a[propArg]) {
      return -1;
    }
    return 0;
  };
};
